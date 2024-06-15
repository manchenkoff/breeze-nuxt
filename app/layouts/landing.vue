<script lang="ts" setup>
useHead({
  bodyAttrs: {
    class: 'bg-gray-100 dark:bg-transparent',
  },
})
</script>

<template>
  <div class="flex flex-col gap-10">
    <LandingLoginLinks />
    <slot />
  </div>
</template>

<style scoped></style>
