<script lang="ts" setup>
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
</template>

<style scoped></style>
