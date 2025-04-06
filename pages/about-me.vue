<script setup>
const title = "Sobre mí";

useSeoMeta({
  title,
});

const sections = [
  {
    title: "Mi Pasión por la Tecnología",
    content: "Desde joven, he sido un entusiasta de la tecnología, siempre dispuesto a probar y experimentar con las últimas soluciones tecnológicas. Este afán de aprendizaje y mi insaciable curiosidad me han llevado a sumergirme en el desarrollo informático y la seguridad informática, dos áreas que encuentro increíblemente emocionantes y desafiantes."
  },
  {
    title: "Mi Viaje",
    content: "Mi viaje en el mundo tecnológico ha sido un constante crecimiento y evolución. A lo largo de los años, he trabajado en diversos proyectos y roles, adquiriendo conocimientos y habilidades que me han permitido crecer tanto profesional como personalmente."
  },
  {
    title: "Indie Hacker",
    content: "Me considero un 'Indie Hacker' porque disfruto explorando y creando de manera independiente, pero también valoro la comunidad y la colaboración con otros apasionados de la tecnología. La sensación de descubrir soluciones y ponerlas en práctica es simplemente incomparable."
  },
  {
    title: "Mi Objetivo",
    content: "En este espacio, mi objetivo es inspirarte y proporcionarte insights sobre las últimas tendencias en tecnología y desarrollo informático. Voy a compartir contigo mis experiencias, aprendizajes y trucos que he recopilado a lo largo de mi trayectoria profesional."
  }
];
</script>

<template>
  <div class="relative">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-primary/5 to-blue-600/5 dark:from-primary/10 dark:to-blue-600/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">
          {{ title }}
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
          Una breve introducción sobre mí y mi trayectoria en el mundo de la tecnología.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(section, index) in sections" :key="index" 
          class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {{ section.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ section.content }}
          </p>
        </div>
      </div>

      <!-- Quote Section -->
      <div class="mt-16 text-center">
        <blockquote class="max-w-3xl mx-auto">
          <p class="text-2xl font-medium text-gray-900 dark:text-white italic">
            "Me apasiona el mundo tecnológico y su capacidad de transformar el mundo"
          </p>
        </blockquote>
      </div>

      <!-- Social Links -->
      <div class="mt-16 flex justify-center space-x-6">
        <NuxtLink 
          to="https://www.linkedin.com/in/pere-casas/"
          class="group relative inline-flex items-center px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300"
          target="_blank"
        >
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/10 to-white/20"></span>
          <span class="relative flex items-center">
            <IconsLinkedin class="w-5 h-5 mr-2" />
            Conectemos en LinkedIn
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
