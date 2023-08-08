<script setup>
const title = "Entradas del Blog";
const articles = await queryContent("/blog").sort({ date: -1 }).find();
useSeoMeta({
  title,
});
</script>
<template>
  <div class="space-y-10">
    <TitlePage>{{ title }}</TitlePage>
    <div class="flex flex-col space-y-10">
      <BlogPreview v-for="article in articles" :document="article" />
    </div>
  </div>
</template>
