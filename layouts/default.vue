<script setup></script>

<template>
  <div
    class="bg-white text-black antialiased dark:bg-gray-900 dark:text-white relative"
  >
    <div class="mx-auto container max-w-3xl xl:max-w-5xl px-4 sm:px-6 xl:px-0">
      <LayoutHeader />
      <main class="mb-auto">
        <slot />
      </main>
      <LayoutFooter />
    </div>
    <ClientOnly>
      <CookiesBanner />
    </ClientOnly>
  </div>
</template>
