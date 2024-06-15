<script lang="ts" setup></script>

<template>
  <UCard>
    <div class="grid md:grid-cols-2 gap-10">
      <div class="flex gap-4">
        <UIcon
          name="i-heroicons-book-open"
          class="text-3xl shrink-0"
        />
        <div class="flex flex-col gap-4">
          <h2 class="text-lg underline underline-offset-2 font-semibold">
            <ULink
              to="https://laravel.com/docs"
              external
              target="_blank"
            >
              Documentation
            </ULink>
          </h2>
          <span>
            Laravel has wonderful, thorough
            documentation covering every aspect of
            the framework. Whether you are new to
            the framework or have previous
            experience with Laravel, we recommend
            reading all of the documentation from
            beginning to end.
          </span>
        </div>
      </div>

      <div class="flex gap-4">
        <UIcon
          name="i-heroicons-camera"
          class="text-3xl shrink-0"
        />
        <div class="flex flex-col gap-4">
          <h2 class="text-lg underline underline-offset-2 font-semibold">
            <ULink
              to="https://laracasts.com"
              external
              target="_blank"
            >
              Laracasts
            </ULink>
          </h2>
          <span>
            Laracasts offers thousands of video
            tutorials on Laravel, PHP, and
            JavaScript development. Check them out,
            see for yourself, and massively level up
            your development skills in the process.
          </span>
        </div>
      </div>

      <div class="flex gap-4">
        <UIcon
          name="i-heroicons-newspaper"
          class="text-3xl shrink-0"
        />
        <div class="flex flex-col gap-4">
          <h2 class="text-lg underline underline-offset-2 font-semibold">
            <ULink
              to="https://laravel-news.com/"
              external
              target="_blank"
            >
              Laravel News
            </ULink>
          </h2>
          <span>
            Laravel News is a community driven
            portal and newsletter aggregating all of
            the latest and most important news in
            the Laravel ecosystem, including new
            package releases and tutorials.
          </span>
        </div>
      </div>

      <div class="flex gap-4">
        <UIcon
          name="i-heroicons-shield-check"
          class="text-3xl shrink-0"
        />
        <div class="flex flex-col gap-4">
          <h2 class="text-lg underline underline-offset-2 font-semibold">
            <ULink
              to="https://manchenkoff.gitbook.io/nuxt-auth-sanctum"
              external
              target="_blank"
            >
              Nuxt Auth Docs
            </ULink>
          </h2>
          <span>
            This application uses Nuxt Auth Sanctum module for authentication. Check out the documentation to learn more about it.
          </span>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style scoped></style>
