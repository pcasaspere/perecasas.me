<script setup>
defineProps(["to", "href"]);
</script>
<template>
  <NuxtLink
    class="mr-3 text-sm font-medium uppercase text-primary"
    :to="to || href"
  >
    <slot />
  </NuxtLink>
</template>
