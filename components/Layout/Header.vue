<script setup>
const isOpen = ref(false);

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
  // {
  //   text: "Agendar reunión",
  //   to: { name: "meeting" },
  // },
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
          @click="isOpen = true"
        >
          <IconsHamburger class="text-gray-900 dark:text-gray-100" />
        </button>
        <div
          class="fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800"
          :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
        >
          <div class="flex justify-end">
            <button
              type="button"
              class="mr-5 mt-11 h-8 w-8 rounded"
              aria-label="Toggle Menu"
              @click="isOpen = false"
            >
              <IconsXClose class="text-gray-900 dark:text-gray-100" />
            </button>
          </div>
          <nav class="fixed mt-8 h-full">
            <div class="px-12 py-4" v-for="menu in menus">
              <NuxtLink
                class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                :to="menu.to"
                @click="isOpen = false"
                >{{ menu.text }}</NuxtLink
              >
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
