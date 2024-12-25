<script lang="ts" setup>
const links = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard',
  },
]

const isSlideoverActive = ref(false)

function toggleSlideover() {
  isSlideoverActive.value = !isSlideoverActive.value
}
</script>

<template>
  <div class="flex items-center gap-4">
    <AppLogo />

    <UHorizontalNavigation
      :links="links"
      class="hidden md:block"
    />

    <UButton
      icon="i-heroicons-bars-3"
      variant="ghost"
      color="gray"
      class="md:hidden"
      @click="toggleSlideover"
    />

    <LazyUSlideover
      v-model="isSlideoverActive"
      side="left"
    >
      <UCard
        class="flex flex-col flex-1"
        :ui="{ rounded: 'rounded-lg' }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-semibold">
              Menu
            </span>

            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark"
              @click="toggleSlideover"
            />
          </div>
        </template>

        <UVerticalNavigation :links="links" />
      </UCard>
    </LazyUSlideover>
  </div>
</template>

<style scoped></style>
