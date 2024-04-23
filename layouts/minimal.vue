<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'bg-gray-100 dark:bg-transparent',
  },
})
</script>

<template>
  <UContainer class="flex flex-col justify-center items-center pt-20 pb-10 gap-5">
    <AppLogo />

    <UCard>
      <slot />
    </UCard>
  </UContainer>
</template>

<style scoped></style>
