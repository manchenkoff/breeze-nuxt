<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'bg-gray-100 dark:bg-transparent',
  },
})
</script>

<template>
  <UContainer class="flex flex-col justify-center items-center pt-10 md:pt-20 pb-10 gap-5">
    <AppLogo />

    <UCard class="w-fit">
      <slot />
    </UCard>
  </UContainer>
</template>

<style scoped></style>
