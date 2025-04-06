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
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <NuxtLink :to="{ name: 'index' }" class="flex items-center space-x-2">
          <span class="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Pere Casas
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="menu in menus"
            :key="menu.to"
            :to="menu.to"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200"
            activeClass="text-primary font-medium"
          >
            {{ menu.text }}
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/pere-casas/"
            class="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90 transition-colors duration-200"
          >
            Contactar
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <IconsHamburger v-if="!isOpen" class="h-6 w-6" />
            <IconsXClose v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden"
      :class="{ 'block': isOpen, 'hidden': !isOpen }"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <NuxtLink
          v-for="menu in menus"
          :key="menu.to"
          :to="menu.to"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          @click="isOpen = false"
          activeClass="bg-gray-100 dark:bg-gray-800 text-primary"
        >
          {{ menu.text }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="isOpen = false"
        >
          Contactar
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
