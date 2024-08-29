<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
  sanctum: {
    guestOnly: true,
  },
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
