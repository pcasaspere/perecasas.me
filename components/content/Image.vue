<script setup>
// https://image.nuxt.com/usage/nuxt-img
defineProps(['alt', 'src'])
</script>

<template>
  <NuxtImg
    class="w-full md:max-w-3xl hover:scale-110 hover:md:scale-110 transition-transform duration-500 rounded-lg hover:rounded-2xl shadow-lg mx-auto"
    :alt="alt"
    :src="src"
    loading="lazy"
    format="webp"
  />
</template>
