<script lang="ts" setup>
type ColorMode = {
  icon: string
  label: string
  value: string
}

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
  get: () => {
    return availableModes.find(m => m.value === mode.preference) || availableModes[0]!
  },
  set: (newValue: ColorMode) => {
    mode.preference = newValue.value
  },
})
</script>

<template>
  <ColorScheme>
    <USelectMenu
      v-model="selectedMode"
      :options="availableModes"
    >
      <template #label>
        <UIcon :name="selectedMode.icon" />
        <span>{{ selectedMode.label }}</span>
      </template>

      <template #option="{ option }">
        <div class="flex justify-center items-center gap-1">
          <UIcon :name="option.icon" />
          <span>{{ option.label }}</span>
        </div>
      </template>
    </USelectMenu>
  </ColorScheme>
</template>

<style scoped></style>
