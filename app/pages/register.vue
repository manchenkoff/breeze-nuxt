<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  sanctum: {
    guestOnly: true,
  },
})

useSeoMeta({
  title: 'Register',
})
</script>

<template>
  <AuthRegisterForm />
</template>

<style scoped></style>
