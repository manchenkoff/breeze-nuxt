<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  sanctum: {
    guestOnly: true,
  },
})

useSeoMeta({
  title: 'Forgot password',
})
</script>

<template>
  <AuthForgotPasswordForm />
</template>

<style scoped></style>
