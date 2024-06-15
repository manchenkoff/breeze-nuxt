<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Login',
})

const route = useRoute()
const resetToken = route.query.reset as string | undefined
</script>

<template>
  <AuthLoginForm :token="resetToken" />
</template>

<style scoped></style>
