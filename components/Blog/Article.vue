<script setup>

const props = defineProps(["document"]);

const publishDate = computed(() =>
  props.document.date ? useDateToLocalString(props.document.date) : null
);

const sections = computed(() => props.document?.body?.children
  .filter(children => children.tag == 'h2')
  .map(children => ({
    id: children?.props?.id,
    text: children?.children[0]?.value
  })));

const tags = computed(() => props.document.tags || []);
</script>
<template>
  <article class="mx-auto max-w-3xl">
    <header class="pt-6 xl:pb-6">
      <div class="space-y-4 text-center">
        <dl class="space-y-2">
          <div>
            <dt class="sr-only">Publicado el</dt>
            <dd class="text-sm font-medium text-primary">
              <time v-show="document.date" :datetime="document.date">{{
                publishDate
              }}</time>
            </dd>
          </div>
        </dl>
        <TitlePage class="text-4xl font-bold tracking-tight">
          {{ document.title }}
        </TitlePage>
        <p v-if="document.description" class="text-lg text-gray-600 dark:text-gray-300">
          {{ document.description }}
        </p>
      </div>
    </header>

    <div class="relative py-8">
      <div v-if="document.image" class="mb-8 w-full">
        <NuxtImg 
          class="rounded-xl shadow-xl w-full object-cover" 
          :src="document.image" 
          :alt="document.title"
        />
      </div>

      <div v-if="sections.length > 0" class="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
        <h2 class="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">Contenidos</h2>
        <nav class="flex flex-col gap-2">
          <a 
            v-for="section in sections" 
            :key="section.id"
            :href="`#${section.id}`"
            class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
          >
            {{ section.text }}
          </a>
        </nav>
      </div>

      <div class="[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-tight [&_p]:text-gray-600 dark:[&_p]:text-gray-300 [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm dark:[&_code]:bg-gray-800 [&_pre]:rounded-lg [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_img]:rounded-lg [&_img]:shadow-lg [&_ul]:list-disc [&_ol]:list-decimal [&_li]:marker:text-primary">
        <ContentRenderer :value="document" class="blog-content" />
      </div>

      <footer class="mt-12">
        <div v-if="tags.length > 0" class="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
          <span class="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Tags
          </span>
          <div class="flex flex-wrap gap-2">
            <TagButton 
              v-for="tag in tags" 
              :key="tag"
              :to="{ name: 'blog-tags-slug', params: { slug: tag } }"
              class="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/10 dark:bg-primary/10 dark:hover:bg-primary/20"
            >
              {{ tag }}
            </TagButton>
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>