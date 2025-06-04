<template>
  <section class="pt-6 pb-12 bg-white dark:bg-gray-900 transition-colors">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        {{ $t('sections.technologies') }}
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="flex flex-col items-center group"
        >
          <div class="w-16 h-16 mb-3 flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
            <img :src="tech.logo" :alt="tech.name" class="max-w-full max-h-full" />
          </div>
          <span class="text-gray-800 dark:text-gray-200 font-medium text-center">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Technology } from '~/types'

defineProps<{
  technologies: Technology[]
}>()
</script>
