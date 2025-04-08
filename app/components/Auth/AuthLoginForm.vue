<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent, Form } from '#ui/types'

interface Props {
  token?: string
}

const props = defineProps<Props>()

const { login } = useSanctumAuth()

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean(),
})

type Schema = z.output<typeof schema>

const form = ref<Form<Schema>>()
const state = reactive<Schema>({
  email: '',
  password: '',
  remember: false,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value?.clear()

  const credentials = event.data

  try {
    await login(credentials)
  }
  catch (error) {
    const err = useSanctumError(error)

    if (err.isValidationError) {
      form.value?.setErrors(err.bag)
    }
  }
}
</script>

<template>
  <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-4 sm:min-w-80 md:min-w-96 max-w-md"
    @submit="onSubmit"
  >
    <span
      v-if="props.token"
      class="text-sm text-green-500"
    >
      Your password has been reset!
    </span>

    <UFormField
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        icon="i-heroicons-at-symbol"
        autocomplete="username"
        class="w-full"
        trailing
      />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
        autocomplete="current-password"
        icon="i-heroicons-lock-closed"
        class="w-full"
        trailing
      />
    </UFormField>

    <UFormField
      name="remember_me"
    >
      <UCheckbox
        v-model="state.remember"
        name="remember_me"
        label="Remember me"
      />
    </UFormField>

    <div class="flex justify-end gap-4 items-center">
      <ULink
        to="/forgot-password"
        class="text-sm text-neutral-500 underline"
      >
        Forgot your password?
      </ULink>

      <UButton type="submit">
        Login
      </UButton>
    </div>
  </UForm>
</template>

<style scoped></style>
