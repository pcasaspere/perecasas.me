<script setup></script>
<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-12">
        <!-- Social Links -->
        <div class="flex justify-center space-x-6">
          <NuxtLink 
            :to="{ name: 'meeting' }" 
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            <span class="sr-only">Contacto</span>
            <IconsEmail class="h-6 w-6" />
          </NuxtLink>
          
          <NuxtLink 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/pcasaspere"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            <span class="sr-only">GitHub</span>
            <IconsGithub class="h-6 w-6" />
          </NuxtLink>

          <NuxtLink 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pere-casas/"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            <span class="sr-only">LinkedIn</span>
            <IconsLinkedin class="h-6 w-6" />
          </NuxtLink>

          <NuxtLink 
            target="_blank" 
            rel="me"
            href="https://mastodont.cat/@pcasas"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            <span class="sr-only">Mastodon</span>
            <IconsMastodon class="h-6 w-6" />
          </NuxtLink>
        </div>

        <!-- Legal Links -->
        <div class="mt-8 flex justify-center space-x-6 text-sm">
          <NuxtLink 
            :to="{ name: 'legal-aviso-legal' }"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            Aviso legal
          </NuxtLink>
          <NuxtLink 
            :to="{ name: 'legal-politica-privacidad' }"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            Política de privacidad
          </NuxtLink>
          <NuxtLink 
            :to="{ name: 'legal-politica-cookies' }"
            class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          >
            Política de cookies
          </NuxtLink>
        </div>

        <!-- Copyright -->
        <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {{ new Date().getFullYear() }} Pere Casas. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
