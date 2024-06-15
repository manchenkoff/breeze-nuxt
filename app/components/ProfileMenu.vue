<script lang="ts" setup>
import type { User } from '~~/models/user'

const { user, logout } = useSanctumAuth<User>()

const dropdownLabel = computed(() => `Hey, ${user.value!.name}!`)

const actions = [
  [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-start-on-rectangle',
    click: async () => {
      await logout()
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
        :label="dropdownLabel"
        trailing-icon="i-heroicons-chevron-down"
      />
    </UDropdown>
  </div>
</template>

<style scoped></style>
