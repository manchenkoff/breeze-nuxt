<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  titleTemplate(title) {
    return title ? `${title} | ${appConfig.siteTitle}` : appConfig.siteTitle
  },
})
</script>

<template>
  <NuxtLoadingIndicator />

  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
