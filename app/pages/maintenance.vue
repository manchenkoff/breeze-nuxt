<script setup lang="ts">
definePageMeta({
  layout: 'minimal',
})

const
  HEALTH_CHECK_URL = '/up',
  HOME_URL = '/'

const sanctumFetch = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()

const secondsBeforeRedirect = ref(0)
const canRedirect = computed(() => secondsBeforeRedirect.value === 0)

const redirectButtonText = computed(() => {
  return canRedirect.value
    ? 'Try again'
    : `Try again in ${secondsBeforeRedirect.value} seconds`
})

function startTimer() {
  secondsBeforeRedirect.value = 5

  const interval = setInterval(() => {
    secondsBeforeRedirect.value--

    if (secondsBeforeRedirect.value === 0) {
      clearInterval(interval)
    }
  }, 1000)
}

async function healthCheck() {
  try {
    await sanctumFetch(HEALTH_CHECK_URL)

    try {
      await refreshIdentity()
    }
    catch {
      // Ignore error if the user is not authenticated
    }

    await navigateTo(HOME_URL)
  }
  catch {
    startTimer()
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 text-center">
    <strong class="text-2xl">
      You got us!
    </strong>
    <p>
      We're currently under maintenance. Please check back later.
    </p>

    <UButton
      color="primary"
      :label="redirectButtonText"
      class="mx-auto mt-5"
      :disabled="!canRedirect"
      @click="healthCheck"
    />
  </div>
</template>

<style scoped></style>
