<script setup>
const utm_url =
  "?utm_source=website&utm_medium=web&utm_campaign=w_perecasasme&utm_id=w_perecasasme";
const projects = computed(() => [
  {
    name: "TrainerGPT",
    url: "https://mytrainergpt.com" + utm_url,
    desc: "Diseña planes personalizados con IA (ChatGPT-3.5) que se adapten a objetivos y necesidades especificados por los usuarios. También pueden añadir registros de su peso.",
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
  {
    name: "vigilant.cat",
    url: "https://vigilant.cat" + utm_url,
    desc: "Diversas entidades tienen la posibilidad de integrar cámaras en la plataforma. Cualquier persona puede acceder a las instantáneas capturadas por estas cámaras. Además, las autoridades cuentan con la capacidad de monitorear en tiempo real la zona forestal, garantizando una pronta respuesta ante cualquier posible incendio o emergencia",
    year: "2016 - actualidad",
  },
]);
</script>
<template>
  <TitlePage>Proyectos Personales</TitlePage>
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
</template>
