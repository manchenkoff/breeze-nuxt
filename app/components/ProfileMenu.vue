<script lang="ts" setup>
import type { User } from '~~/models/user'
import type { DropdownMenuItem } from '#ui/types'

const { user, logout } = useSanctumAuth<User>()

const dropdownLabel = computed(() => `Hey, ${user.value!.name}!`)

const actions: DropdownMenuItem[][] = [
  [{
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-start-on-rectangle',
    async onSelect(_e: Event) {
      await logout()
    },
  }],
]
</script>

<template>
  <div>
    <UDropdownMenu :items="actions">
      <UButton
        color="neutral"
        variant="ghost"
        :label="dropdownLabel"
        trailing-icon="i-heroicons-chevron-down"
      />
    </UDropdownMenu>
  </div>
</template>

<style scoped></style>
