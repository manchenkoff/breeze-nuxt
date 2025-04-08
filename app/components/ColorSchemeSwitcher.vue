<script lang="ts" setup>
import type { SelectMenuItem } from '#ui/types'

type ColorMode = {
  icon: string
  label: string
  value: string
} & SelectMenuItem

const mode = useNuxtApp().$colorMode

const availableModes: ColorMode[] = [
  {
    icon: 'i-heroicons-computer-desktop',
    label: 'System',
    value: 'system',
  },
  {
    icon: 'i-heroicons-light-bulb',
    label: 'Light',
    value: 'light',
  },
  {
    icon: 'i-heroicons-moon',
    label: 'Dark',
    value: 'dark',
  },
]

const selectedMode = computed<ColorMode>({
  get: () => availableModes.find(m => m.value === mode.preference)!,
  set: (newValue: ColorMode) => mode.preference = newValue.value,
})
</script>

<template>
  <ColorScheme>
    <USelectMenu
      v-model="selectedMode"
      :default-value="availableModes[0]"
      :items="availableModes"
    >
      <template #item-label>
        <UIcon :name="selectedMode.icon" />
        <span>{{ selectedMode.label }}</span>
      </template>

      <template #item="{ item }">
        <div class="flex justify-center items-center gap-1">
          <UIcon :name="item.icon" />
          <span>{{ item.label }}</span>
        </div>
      </template>
    </USelectMenu>
  </ColorScheme>
</template>

<style scoped></style>
