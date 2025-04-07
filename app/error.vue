<script setup lang="ts">
import type { NuxtError } from '#app'

interface ErrorPageProps {
  error: NuxtError
}

const props = defineProps<ErrorPageProps>()
const appConfig = useAppConfig()

useHead({
  title: `Error | ${appConfig.siteTitle}`,
  bodyAttrs: {
    class: 'bg-neutral-100 dark:bg-transparent',
  },
})
</script>

<template>
  <UContainer class="flex flex-col justify-center items-center pt-20 pb-10 gap-5">
    <AppLogo />

    <UCard class="min-w-96 max-w-xl">
      <template #header>
        <h1 class="text-lg font-semibold">
          Oops! An error occurred.
        </h1>
      </template>

      <template #default>
        <p>
          <strong>Error details:</strong>
        </p>
        <p>
          {{ props.error.message }}
        </p>
      </template>

      <template #footer>
        <div class="flex">
          <UButton
            color="primary"
            label="Go to homepage"
            to="/"
            class="mx-auto"
          />
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
