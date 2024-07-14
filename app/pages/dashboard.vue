<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:auth', 'sanctum:verified'],
})

useSeoMeta({
  title: 'Dashboard',
})

const { user } = useSanctumAuth()
const echo = useEcho()

function subscribeToPublicChannel() {
  echo
    .channel('public')
    .listen(
      '.PublicEvent',
      (e: object) => {
        console.log('Public notification received:', e)
      },
    )
}

function subscribeToPrivateChannel() {
  echo
    .private(`users`)
    .listen(
      '.PrivateEvent',
      (e: object) => {
        console.log('Private notification received:', e)
      },
    )
    .error((e: object) => {
      console.error('Private notification error:', e)
    })
}

function stopAllListeners() {
  echo.leaveAllChannels()
}

onMounted(() => {
  subscribeToPublicChannel()
  subscribeToPrivateChannel()
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

    <div class="flex flex-col gap-2">
      <span>User details:</span>

      <code class="text-sm bg-gray-200 dark:bg-gray-200/10 p-2 rounded">
        {{ user }}
      </code>

      <div class="flex gap-2">
        <UButton
          class="w-fit"
          @click="subscribeToPublicChannel"
        >
          Subscribe to Public channel
        </UButton>

        <UButton
          class="w-fit"
          @click="subscribeToPrivateChannel"
        >
          Subscribe to Private channel
        </UButton>

        <UButton
          class="w-fit"
          variant="outline"
          @click="stopAllListeners"
        >
          Stop all listeners
        </UButton>
      </div>
    </div>
  </UCard>
</template>

<style scoped></style>
