<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        {{ $t('sections.featuredProjects') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        {{ $t('sections.featuredProjectsDesc') }}
      </p>

      <div class="relative">
        <button
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          @click="prevProject"
        >
          <Icon name="lineicons:chevron-left" class="w-6 h-6" />
        </button>

        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-300"
            :style="{ transform: `translateX(-${currentProjectIndex * 100}%)` }"
          >
            <div
              v-for="project in projects"
              :key="project.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover" />
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-xs px-3 py-1 rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                  <NuxtLink
                    :to="`/projetos/${project.id}`"
                    class="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors"
                  >
                    {{ $t('projects.viewProject') }}
                    <Icon name="lineicons:arrow-right" class="ml-1 w-4 h-4" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          @click="nextProject"
        >
          <Icon name="lineicons:chevron-right" class="w-6 h-6" />
        </button>

        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, index) in projects"
            :key="index"
            @click="currentProjectIndex = index"
            class="w-3 h-3 rounded-full transition-colors"
            :class="index === currentProjectIndex ? 'bg-purple-600 dark:bg-purple-400' : 'bg-gray-300 dark:bg-gray-600'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '~/types'

const props = defineProps<{
  projects: Project[]
}>()

// Carousel state
const currentProjectIndex = ref(0)

// Carousel navigation functions
const nextProject = () => {
  if (currentProjectIndex.value < props.projects.length - 1) {
    currentProjectIndex.value++
  } else {
    currentProjectIndex.value = 0
  }
}

const prevProject = () => {
  if (currentProjectIndex.value > 0) {
    currentProjectIndex.value--
  } else {
    currentProjectIndex.value = props.projects.length - 1
  }
}
</script>
