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
  <article class="group relative rounded-xl p-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
    <div class="space-y-4 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <dl class="xl:sticky xl:top-6">
        <dt class="sr-only">Published on</dt>
        <dd class="text-sm font-medium text-gray-500 dark:text-gray-400">
          <time :datetime="document.date" class="flex flex-col">
            <span class="text-xs font-semibold uppercase tracking-wider text-primary">
              {{ dateFromNow }}
            </span>
            <span class="mt-1">{{ dateToLocalString }}</span>
          </time>
        </dd>
      </dl>
      <div class="space-y-6 xl:col-span-3">
        <div class="space-y-4">
          <div>
            <h2 class="text-2xl font-bold leading-8 tracking-tight">
              <NuxtLink
                class="text-gray-900 transition-colors duration-200 hover:text-primary dark:text-gray-100 dark:hover:text-primary"
                :href="document._path"
                >{{ document.title }}</NuxtLink
              >
            </h2>
            <div class="mt-3 flex flex-wrap gap-2">
              <TagButton
                v-for="tag in document.tags || []"
                :to="{ name: 'blog-tags-slug', params: { slug: tag } }"
                class="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20"
                >{{ tag }}
              </TagButton>
            </div>
          </div>
          <div
            class="prose max-w-none text-gray-600 dark:text-gray-300"
            v-html="document.description"
          />
        </div>
        <div class="text-base font-medium leading-6">
          <NuxtLink
            class="group/read inline-flex items-center gap-2 rounded-lg border border-primary/20 px-4 py-2 text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5 dark:border-primary/30 dark:hover:bg-primary/10"
            :href="document._path"
          >
            <span>Seguir leyendo</span>
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover/read:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>
