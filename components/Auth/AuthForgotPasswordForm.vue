<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email(),
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
  email: '',
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
    <span class="text-sm">
      <strong>Forgot your password? No worries!</strong> <br>
      Just enter your email and we will send you a password reset link that will allow you to choose a new one.
    </span>

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

    <div class="flex justify-end">
      <UButton type="submit">
        Email Password Reset Link
      </UButton>
    </div>
  </UForm>
</template>

<style scoped></style>
