<script setup lang="ts">
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
</template>

<style scoped></style>
