<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:auth', 'sanctum-verified'],
})

useSeoMeta({
  title: 'Dashboard',
})
</script>

<template>
  <UAlert
    title="You are logged in!"
    color="sky"
    variant="soft"
  />

  <UCard>
    <template #header>
      <h1>Welcome!</h1>
    </template>

    <div class="flex flex-col gap-6">
      <DashboardInspiringQuote />
      <DashboardUserDetails />
      <DashboardBroadcasting />
    </div>
  </UCard>
</template>

<style scoped></style>
