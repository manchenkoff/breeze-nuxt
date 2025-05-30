<script lang="ts" setup>
import { z } from 'zod'
import type { Form, FormSubmitEvent } from '#ui/types'

const toast = useToast()
const sanctumFetch = useSanctumClient()

const schema = z.object({
  email: z.string().email(),
})

type Schema = z.output<typeof schema>

const form = ref<Form<Schema>>()
const state = reactive<Schema>({
  email: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  form.value?.clear()

  const email = event.data.email

  try {
    await sanctumFetch('/forgot-password', {
      method: 'POST',
      body: { email },
    })

    toast.add({
      title: 'Password Reset Link Sent',
      description: 'We have emailed your password reset link!',
      color: 'info',
    })
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
    class="sm:min-w-80 md:min-w-96 max-w-md"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-y-4">
      <span class="text-sm">
        <strong>Forgot your password? No worries!</strong> <br>
        Just enter your email and we will send you a password reset link that will allow you to choose a new one.
      </span>

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

      <div class="flex justify-end">
        <UButton type="submit">
          Email Password Reset Link
        </UButton>
      </div>
    </div>
  </UForm>
</template>

<style scoped></style>
