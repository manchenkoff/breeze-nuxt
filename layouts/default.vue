<script lang="ts" setup>
const links = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard',
  },
]

const actions = [
  [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-start-on-rectangle',
    click: () => {
      console.log('Logout')
    },
  }],
]
</script>

<template>
  <div class="flex py-4 px-10 justify-between items-center">
    <div class="flex gap-4">
      <AppLogo />
      <UHorizontalNavigation :links="links" />
    </div>

    <div>
      <UDropdown :items="actions">
        <UButton
          color="white"
          variant="ghost"
          label="Profile"
          trailing-icon="i-heroicons-chevron-down"
        />
      </UDropdown>
    </div>
  </div>

  <UContainer class="mt-6 flex flex-col gap-4">
    <slot />
  </UContainer>
</template>

<style scoped></style>
