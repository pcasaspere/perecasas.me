<script setup>
const title = "Agendar una reunión";
const tidycalEmbed = ref();
const isShow = ref();
onMounted(() => {
  isShow.value = true;
  TidyCal.init(tidycalEmbed.value);
});
onUnmounted(() => document.querySelector(".tidycal-embed")?.remove());

useSeoMeta({
  title, 
});
</script>
<template>
  <TitlePage>{{ title }}</TitlePage>
  <div
    v-show="isShow"
    ref="tidycalEmbed"
    data-path="atendata/reunio-online"
  />
</template>
