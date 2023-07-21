<script setup>
const route = useRoute();
const document = await queryContent(route.path).findOne();
</script>
<template>
  <section class="flex flex-col">
    <BlogArticle :document="document" />
    <NuxtLink class="text-primary" :to="{ name: 'index' }">
      <button class="btn btn-ghost">← Volver al inicio</button>
    </NuxtLink>
  </section>
</template>
