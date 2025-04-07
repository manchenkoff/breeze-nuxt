<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent, Form } from '#ui/types'

const sanctumConfig = useSanctumConfig()
const sanctumFetch = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()

const schema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
  })
  .refine(
    data => data.password === data.password_confirmation,
    {
      message: 'Passwords do not match',
      path: ['password_confirmation'],
    },
  )

type Schema = z.output<typeof schema>

const form = ref<Form<Schema>>()
const state = reactive<Schema>({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value?.clear()

  const credentials = event.data

  try {
    await sanctumFetch('/register', {
      method: 'POST',
      body: credentials,
    })

    await refreshIdentity()

    navigateTo(sanctumConfig.redirect.onGuestOnly || '/')
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
    <UFormField
      label="Name"
      name="name"
    >
      <UInput
        v-model="state.name"
        icon="i-heroicons-user"
        class="w-full"
        trailing
      />
    </UFormField>

    <UFormField
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        icon="i-heroicons-at-symbol"
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
        icon="i-heroicons-lock-closed"
        class="w-full"
        trailing
      />
    </UFormField>

    <UFormField
      label="Confirm Password"
      name="password_confirmation"
    >
      <UInput
        v-model="state.password_confirmation"
        type="password"
        icon="i-heroicons-arrow-path"
        class="w-full"
        trailing
      />
    </UFormField>

    <div class="flex justify-end gap-4 items-center">
      <ULink
        to="/login"
        class="text-sm text-neutral-500 underline"
      >
        Already registered?
      </ULink>

      <UButton type="submit">
        Register
      </UButton>
    </div>
  </UForm>
</template>

<style scoped></style>
