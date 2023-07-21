<script setup>
const articles = await queryContent("/blog").sort({ date: -1 }).find();
</script>
<template>
  <div class="flex flex-col space-y-10">
    <BlogPreview v-for="article in articles" :document="article" />
  </div>
</template>
