<script setup>
const route = useRoute();
const document = await queryContent(route.path).findOne();

useSeoMeta({
  title: document.title,
  ogTitle: document.title,
  twitterTitle: document.title,
  description: document.description,
  ogDescription: document.description,
  twitterDescription: document.description,
  ogImage: document.image,
  twitterImage: document.image,
  ogType: "article",
  ogUrl: route.fullPath,
});
</script>
<template>
  <section class="flex flex-col">
    <BlogArticle :document="document" />
    <NuxtLink class="text-primary" :to="{ name: 'index' }">
      <button class="btn btn-ghost">← Volver al inicio</button>
    </NuxtLink>
  </section>
</template>
