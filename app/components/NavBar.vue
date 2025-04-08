<script lang="ts" setup>
const menuItems = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard',
  },
]
</script>

<template>
  <div class="flex items-center gap-4">
    <AppLogo />

    <UNavigationMenu
      orientation="horizontal"
      :items="menuItems"
      class="hidden md:block"
    />

    <LazyUSlideover
      side="left"
      title="Menu"
      description="Website navigation menu"
      close-icon="i-heroicons-x-mark"
    >
      <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        color="neutral"
        class="md:hidden"
      />

      <template #body>
        <UNavigationMenu
          orientation="vertical"
          :items="menuItems"
        />
      </template>
    </LazyUSlideover>
  </div>
</template>

<style scoped></style>
