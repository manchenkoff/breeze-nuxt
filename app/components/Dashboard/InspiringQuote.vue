<script setup lang="ts">
interface QuoteResponse {
  text: string
  author: string
}

const { data, error, status, refresh } = await useSanctumFetch<QuoteResponse>('/api/quote')
</script>

<template>
  <div class="flex flex-col gap-2 justify-start items-start">
    <header>Inspiring Quote:</header>

    <UAlert
      v-if="status === 'pending'"
      title="Loading..."
    />

    <UAlert
      v-else-if="status === 'error'"
      :title="`Unable to load data: ${error?.message}`"
      color="red"
    />

    <blockquote
      v-else-if="status === 'success'"
      class="text-sm flex flex-col bg-gray-200 dark:bg-gray-200/10 p-2 rounded w-full"
    >
      <p>
        {{ data?.text }}
      </p>
      <cite class="mt-2">
        by {{ data?.author }}
      </cite>
    </blockquote>

    <UButton
      color="gray"
      @click="refresh"
    >
      Reload
    </UButton>
  </div>
</template>

<style scoped></style>
