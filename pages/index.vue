<script setup>
const title = "Entradas del Blog";
const articles = await queryContent("/blog").sort({ date: -1 }).find();
useSeoMeta({
  title,
});
</script>
<template>
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="space-y-12">
      <div class="space-y-4">
        <TitlePage>{{ title }}</TitlePage>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Explora mis últimas reflexiones, tutoriales y experiencias en el mundo del desarrollo web y la tecnología.
        </p>
      </div>
      
      <div class="flex flex-col space-y-8">
        <BlogPreview
          v-for="article in articles"
          :key="article._path"
          :document="article"
          class="transition-all duration-300 hover:translate-x-2"
        />
      </div>
    </div>
  </div>
</template>
