<script lang="ts" setup>
definePageMeta({
  layout: 'landing',
  middleware: ['sanctum:guest'],
})

useSeoMeta({
  title: 'Welcome',
})
</script>

<template>
  <UContainer class="flex flex-col gap-10">
    <LandingHeroHeader />
    <LandingHeroFeatures />
    <LandingHeroFooter />
  </UContainer>
</template>

<style scoped></style>
