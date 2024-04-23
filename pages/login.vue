<script lang="ts" setup>
definePageMeta({
  layout: 'minimal',
})

useSeoMeta({
  title: 'Login',
})

const route = useRoute()
const resetToken = route.query.reset as string
</script>

<template>
  <AuthLoginForm :token="resetToken" />
</template>

<style scoped></style>
