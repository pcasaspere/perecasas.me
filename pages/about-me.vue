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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-8">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              {{ title }}
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Desde joven, he sido un entusiasta de la tecnología, siempre dispuesto a probar y experimentar con las últimas soluciones tecnológicas. Este afán de aprendizaje y mi insaciable curiosidad me han llevado a sumergirme en el desarrollo informático y la seguridad informática.
            </p>
            <div class="flex items-center space-x-4">
              <NuxtLink
                to="https://www.linkedin.com/in/pere-casas/"
                class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Conectemos en LinkedIn
              </NuxtLink>
            </div>
          </div>
          
          <!-- Image -->
          <div class="relative flex justify-center lg:justify-end">
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur transition duration-1000 group-hover:blur-xl dark:from-primary/20 dark:to-blue-600/20"></div>
              <div class="relative rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 transition duration-300 group-hover:border-primary/50">
                <NuxtImg
                  class="w-56 h-56 object-cover transition duration-300 group-hover:scale-105"
                  src="/profile.jpeg"
                  alt="Pere Casas Profile Photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="(section, index) in sections" :key="index" 
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
    </div>
  </div>
</template>
