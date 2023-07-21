<script setup>
const props = defineProps(["document"]);

const dateToLocalString = computed(() =>
  props.document?.date ? useDateToLocalString(props.document.date) : null
);
const dateFromNow = computed(() =>
  props.document?.date ? useDateFromNow(props.document.date) : null
);
</script>
<template>
  <article>
    <div
      class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"
    >
      <dl>
        <dt class="sr-only">Published on</dt>
        <dd
          class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
        >
          <time :datetime="document.date" class="flex flex-col">
            <span class="text-xs">
              {{ dateFromNow }}
            </span>
            <span> {{ dateToLocalString }} </span>
          </time>
        </dd>
      </dl>
      <div class="space-y-5 xl:col-span-3">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold leading-8 tracking-tight">
              <NuxtLink
                class="text-gray-900 dark:text-gray-100"
                :href="document._path"
                >{{ document.title }}</NuxtLink
              >
            </h2>
            <div class="flex flex-wrap">
              <TagButton
                :to="{ name: 'blog-tags-slug', params: { slug: tag } }"
                v-for="tag in document.tags || []"
                >{{ tag }}</TagButton
              >
            </div>
          </div>
          <div
            class="prose max-w-none text-gray-500 dark:text-gray-400"
            v-html="document.description"
          />
        </div>
        <div class="text-base font-medium leading-6">
          <NuxtLink
            class="text-primary"
            aria-label='Read "New features in v1"'
            :href="document._path"
          >
            <button class="btn btn-ghost">Seguir leyendo →</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>
