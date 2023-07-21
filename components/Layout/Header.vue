<script setup>
const menus = computed(() => [
  {
    text: "Blog",
    to: { name: "index" },
  },
  {
    text: "Sobre mí",
    to: { name: "about-me" },
  },
  {
    text: "Proyectos",
    to: { name: "projects" },
  },
  {
    text: "Agendar reunión",
    to: { name: "meeting" },
  },
]);
</script>
<template>
  <header class="flex items-center justify-between py-4 md:py-10">
    <div>
      <NuxtLink aria-label="TailwindBlog" :to="{ name: 'index' }"
        ><div class="flex items-center justify-between">
          <div class="mr-3"></div></div
      ></NuxtLink>
    </div>
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        <NuxtLink
          class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          v-for="menu in menus"
          :key="menu.to"
          :to="menu.to"
          activeClass="border-b-2 border-primary"
          >{{ menu.text }}</NuxtLink
        >
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="ml-1 mr-1 h-8 w-8 rounded py-1"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="text-gray-900 dark:text-gray-100"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 translate-x-full"
        >
          <div class="flex justify-end">
            <button
              type="button"
              class="mr-5 mt-11 h-8 w-8 rounded"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="text-gray-900 dark:text-gray-100"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav class="fixed mt-8 h-full">
            <div class="px-12 py-4">
              <a
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                href="#"
                >Blog</a
              >
            </div>
            <div class="px-12 py-4">
              <a
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                href="#"
                >Tags</a
              >
            </div>
            <div class="px-12 py-4">
              <a
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                href="#"
                >Projects</a
              >
            </div>
            <div class="px-12 py-4">
              <a
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                href="#"
                >About</a
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
