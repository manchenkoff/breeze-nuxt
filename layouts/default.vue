<script lang="ts" setup>
const { isAuthenticated } = useSanctumAuth()
</script>

<template>
  <template v-if="isAuthenticated">
    <div class="flex py-4 px-5 justify-between items-center">
      <NavBar />
      <ProfileMenu />
    </div>

    <UContainer class="mt-6 flex flex-col gap-4">
      <slot />
    </UContainer>
  </template>
</template>

<style scoped></style>
