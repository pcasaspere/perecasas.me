<script setup></script>
<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-3 flex space-x-4">
        <NuxtLink
          class="text-sm text-gray-500 transition hover:text-gray-600"
          :to="{ name: 'meeting' }"
          ><span class="sr-only">contact</span
          ><IconsEmail class="h-6 w-6" /></NuxtLink
        ><NuxtLink
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/pcasaspere"
          ><span class="sr-only">github</span
          ><IconsGithub class="h-6 w-6"/></NuxtLink>

        <NuxtLink
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/pere-casas/"
          ><span class="sr-only">linkedin</span
          ><IconsLinkedin class="h-6 w-6" /></NuxtLink
        ><NuxtLink
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/CasasPerep"
          ><span class="sr-only">twitter</span
          ><IconsTwitter class="w-6 h-6" /></NuxtLink>
      </div>
      <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Pere Casas</div>
        <div>•</div>
        <div>© {{ new Date().getFullYear() }}</div>
      </div>
    </div>
  </footer>
</template>
