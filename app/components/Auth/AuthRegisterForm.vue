<script lang="ts" setup>
import type { FormSubmitEvent, Form } from '#ui/types'

const sanctumConfig = useSanctumConfig()
const { refreshIdentity } = useSanctumAuth()

type Schema = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const form = usePrecognitionForm<Schema>('post', '/register', {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const state = form.fields
const validator = useNuxtFormValidator(form)

const formComponent = ref<Form<Schema>>()

async function onSubmit(_: FormSubmitEvent<Schema>) {
  formComponent.value?.clear()

  await form.submit()
  await refreshIdentity()

  navigateTo(sanctumConfig.redirect.onGuestOnly || '/')
}
</script>

<template>
  <UForm
    ref="formComponent"
    :validate="validator"
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
