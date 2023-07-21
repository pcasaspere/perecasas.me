<script setup>
const route = useRoute();

const selected_tag = route.params.slug;

const documents = await queryContent("/blog")
  .where({ tags: { $contains: selected_tag } })
  .sort({ date: -1 })
  .find();
</script>
<template>
  <div class="flex flex-col space-y-10">
    <TitlePage>Entradas relacionadas con {{ selected_tag }}</TitlePage>
    <div v-if="documents.length > 0">
      <BlogPreview v-for="document in documents" :document="document" />
    </div>
    <div v-else>
      <Alert> Sin entradas para mostrar </Alert>
    </div>
  </div>
</template>
