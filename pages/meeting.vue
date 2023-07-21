<script setup>
const tidycalEmbed = ref();
const isShow = ref();
onMounted(() => {
  isShow.value = true;
  TidyCal.init(tidycalEmbed.value);
});
onUnmounted(() => document.querySelector(".tidycal-embed")?.remove());
</script>
<template>
  <TitlePage>Agendar una reunión</TitlePage>
  <div
    v-show="isShow"
    ref="tidycalEmbed"
    data-path="agencia-lafita/reunio-online-15-minuts"
  />
</template>
