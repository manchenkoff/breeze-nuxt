<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  middleware: ['sanctum:auth'],
})

useSeoMeta({
  title: 'Verify email',
})

const { logout } = useSanctumAuth()
</script>

<template>
  <div class="flex flex-col gap-4 sm:min-w-80 md:min-w-96 max-w-md">
    <p>
      Thanks for signing up!
      Before get started, could you verify your email address by clicking on the link we just emailed to you?
      If you did't receive the email, we will gladly send you another.
    </p>

    <div class="flex justify-between items-center">
      <VerifyEmailResendNotificationButton />

      <ULink
        class="underline underline-offset-2 text-gray-500"
        @click="logout"
      >
        Logout
      </ULink>
    </div>
  </div>
</template>

<style scoped></style>
