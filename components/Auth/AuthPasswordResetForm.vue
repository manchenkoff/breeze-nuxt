<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

interface Props {
  email: string
  token: string
}

const props = defineProps<Props>()

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
    token: z.string(),
  })
  .refine(
    data => data.password === data.password_confirmation,
    {
      message: 'Passwords do not match',
      path: ['password_confirmation'],
    },
  )

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  email: props.email,
  password: '',
  password_confirmation: '',
  token: props.token,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 sm:min-w-80 md:min-w-96 max-w-md"
    @submit="onSubmit"
  >
    <UFormGroup
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        icon="i-heroicons-at-symbol"
        trailing
      />
    </UFormGroup>

    <UFormGroup
      label="New Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
        icon="i-heroicons-lock-closed"
        trailing
      />
    </UFormGroup>

    <UFormGroup
      label="Confirm New Password"
      name="password_confirmation"
    >
      <UInput
        v-model="state.password_confirmation"
        type="password"
        icon="i-heroicons-arrow-path"
        trailing
      />
    </UFormGroup>

    <div class="flex justify-end">
      <UButton type="submit">
        Reset Password
      </UButton>
    </div>
  </UForm>
</template>

<style scoped></style>
