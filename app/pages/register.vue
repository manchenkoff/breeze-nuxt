<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Register',
})
</script>

<template>
  <AuthRegisterForm />
</template>

<style scoped></style>
