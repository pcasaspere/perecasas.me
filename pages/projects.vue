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
  <div class="space-y-10">
    <TitlePage>{{ title }}</TitlePage>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
      <Card v-for="project in projects">
        {{ project.desc }}
        <template #title>
          {{ project.name }} <span class="text-xs">{{ project.year }}</span>
        </template>
        <template #actions>
          <div class="flex gap-2">
            <NuxtLink
              v-if="project.github"
              :to="project.github"
              class="btn btn-ghost"
              target="_blank"
            >
              <IconsGithub class="w-6 h-6" />
            </NuxtLink>
            <NuxtLink
              v-if="project.url"
              :to="project.url"
              class="btn btn-ghost"
              target="_blank"
            >
              <IconsLlink class="w-6 h-6" />
            </NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
