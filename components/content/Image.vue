<script setup>
// https://image.nuxt.com/usage/nuxt-img
const props = defineProps(["alt", "src"]);

const altData = computed(
  () => props.alt || props.src.replace(/[\(\)\/\-_\.]/g, " ").trim()
);
</script>

<template>
  <NuxtImg
    class="w-full md:max-w-3xl hover:scale-110 hover:md:scale-110 transition-transform duration-500 rounded-lg hover:rounded-2xl shadow-lg mx-auto"
    :alt="altData"
    :src="src"
    :title="alt"
    loading="lazy"
    format="webp"
  />
</template>
