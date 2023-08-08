<script setup>
import dayjs from "dayjs";
const props = defineProps(["document"]);

const publishDate = computed(() =>
  props.document.date ? useDateToLocalString(props.document.date) : null
);

const tags = computed(() => props.document.tags || []);
</script>
<template>
  <article class="flex flex-col">
    <header class="pt-6 xl:pb-6">
      <div class="space-y-1 text-center">
        <dl class="space-y-10">
          <div>
            <dt class="sr-only">Publicado el</dt>
            <dd
              class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              <time v-show="document.date" :datetime="document.date">{{
                publishDate
              }}</time>
            </dd>
          </div>
        </dl>
        <TitlePage>
          {{ document.title }}
        </TitlePage>
      </div>
    </header>
    <div class="pb-8 dark:divide-gray-700">
      <div class="space-y-4 dark:prose-dark">
        <div v-if="document.image" class="w-full flex justify-center">
          <NuxtImg
            class="object-cover rounded-xl shadow-2xl w-full max-w-2xl"
            :src="document.image"
          />
        </div>
        <ContentRenderer class="blog-content" :value="document" />
      </div>
      <footer>
        <div
          v-if="tags.length > 0"
          class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"
        >
          <div class="py-4 xl:py-8">
            <span
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Tags
            </span>
            <div class="flex flex-wrap space-x-4">
              <TagButton
                v-for="tag in tags"
                :to="{ name: 'blog-tags-slug', params: { slug: tag } }"
              >
                {{ tag }}
              </TagButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>
