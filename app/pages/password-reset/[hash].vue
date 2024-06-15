<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Reset password',
})

const route = useRoute()

const email = (route.query.email ?? '') as string
const resetToken = route.params.hash as string
</script>

<template>
  <AuthPasswordResetForm
    :email="email"
    :token="resetToken"
  />
</template>

<style scoped></style>
