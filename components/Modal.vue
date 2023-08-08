<script setup>
defineProps(["show"]);
</script>
<template>
  <dialog class="modal" :class="{ 'modal-open': show }" :open="show">
    <div method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">
        <slot name="title" />
      </h3>
      <p class="py-4">
        <slot />
      </p>
      <div class="modal-action">
        <div class="flex gap-1 justify-end">
          <slot name="actions">
            <button class="btn" @click="show = false">Close</button>
          </slot>
        </div>
      </div>
    </div>
  </dialog>
</template>
