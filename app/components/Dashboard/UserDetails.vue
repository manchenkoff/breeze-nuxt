<script setup lang="ts">
const { user } = useSanctumAuth()
</script>

<template>
  <div class="flex flex-col gap-2">
    <span>User details:</span>

    <code class="text-sm bg-neutral-200 dark:bg-neutral-200/10 p-2 rounded">
      {{ user }}
    </code>
  </div>
</template>

<style scoped></style>
