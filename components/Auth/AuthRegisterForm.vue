<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

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

const state = reactive<Schema>({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 w-96"
    @submit="onSubmit"
  >
    <UFormGroup
      label="Name"
      name="name"
    >
      <UInput
        v-model="state.name"
        icon="i-heroicons-user"
        trailing
      />
    </UFormGroup>

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
      label="Password"
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
      label="Confirm Password"
      name="password_confirmation"
    >
      <UInput
        v-model="state.password_confirmation"
        type="password"
        icon="i-heroicons-arrow-path"
        trailing
      />
    </UFormGroup>

    <div class="flex justify-end gap-4 items-center">
      <ULink
        to="/login"
        class="text-sm text-gray-500 underline"
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
