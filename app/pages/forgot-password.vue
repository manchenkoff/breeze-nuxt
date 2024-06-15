<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Forgot password',
})
</script>

<template>
  <AuthForgotPasswordForm />
</template>

<style scoped></style>
