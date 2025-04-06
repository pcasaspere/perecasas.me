<script setup></script>

<template>
  <div
    class="bg-white text-black antialiased dark:bg-gray-900 dark:text-white relative min-h-screen flex flex-col"
  >
    <LayoutHeader />
    <div class="mx-auto container max-w-3xl xl:max-w-5xl px-4 sm:px-6 xl:px-0 pt-20">
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
