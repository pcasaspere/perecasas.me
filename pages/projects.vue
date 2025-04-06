<script setup>
const title = "Proyectos Personales";
const utm_url =
  "?utm_source=website&utm_medium=web&utm_campaign=w_perecasasme&utm_id=w_perecasasme";
const projects = computed(() => [
  {
    name: "Atendata",
    url: "https://atendata.net" + utm_url,
    desc: "Empresa especializada en seguridad informática que se enfoca en proteger la infraestructura digital de las empresas. Ofrecer servicios para fortalecer la seguridad de las infraestructuras digitales",
    year: "2023 - actualidad",
  },
  {
    name: "vigilant.cat",
    url: "https://vigilant.cat" + utm_url,
    desc: "En este proyecto, trabajé en estrecha colaboración con el Secretariat de Federacions i Agrupacions de Defensa Forestal de Catalunya para desarrollar una solución innovadora destinada a integrar y visualizar las cámaras de vigilancia de las Agrupaciones de Defensa Forestal (ADF) de Cataluña. Actualmente, se gestionan más de 100 cámaras distribuidas estratégicamente para monitorear vastas áreas forestales.",
    year: "2016 - actualidad",
  },
  {
    name: "TrainerGPT",
    url: "https://mytrainergpt.com" + utm_url,
    desc: "Diseña planes personalizados con IA (under the hood ChatGPT) que se adapten a objetivos y necesidades especificados por los usuarios. También pueden añadir registros de su peso.",
    year: "2023 - actualidad",
  },
  {
    name: "Fitvium",
    url: "https://fitvium.com" + utm_url,
    desc: "Plataforma para entrenadores personales que quieren liberarse de las complicaciones de las hojas de cálculo ",
    year: "2020 - actualidad",
  },
  {
    name: "Rent Observer",
    github: "https://github.com/pcasaspere/rentobserver/",
    desc: "Proyecto de una tarde de domingo. Crawler para buscar alquileres y mandar el resultado por Telegram",
    year: 2020,
  },
]);
useSeoMeta({
  title,
});
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
          Una selección de mis proyectos más destacados, donde aplico mi pasión por la tecnología y el desarrollo.
        </p>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.name" 
          class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <!-- Project Header -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ project.name }}
            </h3>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ project.year }}
            </span>
          </div>
          
          <!-- Project Description -->
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            {{ project.desc }}
          </p>

          <!-- Project Actions -->
          <div class="flex items-center space-x-4">
            <NuxtLink
              v-if="project.github"
              :to="project.github"
              class="group relative inline-flex items-center px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300"
              target="_blank"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-primary/10 to-blue-600/10"></span>
              <span class="relative flex items-center">
                <IconsGithub class="w-5 h-5 mr-2" />
                GitHub
              </span>
            </NuxtLink>
            <NuxtLink
              v-if="project.url"
              :to="project.url"
              class="group relative inline-flex items-center px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300"
              target="_blank"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/10 to-white/20"></span>
              <span class="relative flex items-center">
                <IconsLlink class="w-5 h-5 mr-2" />
                Visitar
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
