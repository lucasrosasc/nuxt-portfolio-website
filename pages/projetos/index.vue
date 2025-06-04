<template>
  <div>
    <!-- Projects Header -->
    <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('projects.title') }}
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('projects.description') }}
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in allProjects" 
            :key="project.id"
            class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            @click="navigateToProject(project.id)"
          >
            <div class="relative overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-2">
                <span class="text-sm text-purple-600 dark:text-purple-400 font-medium">{{ $t(`projects.category.${project.category}`) }}</span>
                <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.year }}</span>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ project.title }}</h3>
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
              <div class="flex items-center justify-between">
                <span class="text-purple-600 dark:text-purple-400 font-medium flex items-center">
                  {{ $t('projects.viewProject') }}
                  <Icon name="lucide:arrow-right" class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div class="flex space-x-2">
                  <a 
                    v-if="project.liveUrl" 
                    :href="project.liveUrl" 
                    target="_blank"
                    class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    @click.stop
                  >
                    <Icon name="lucide:external-link" class="w-4 h-4" />
                  </a>
                  <a 
                    v-if="project.githubUrl" 
                    :href="project.githubUrl" 
                    target="_blank"
                    class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    @click.stop
                  >
                    <Icon name="lucide:github" class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

// All projects data
const allProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and secure checkout.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'webApp',
    year: '2023',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects, tasks, and deadlines efficiently.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Firebase', 'Material UI', 'Redux'],
    category: 'productivity',
    year: '2023',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A platform for property listings with advanced search, filtering, and virtual tours.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Angular', 'Express', 'PostgreSQL', 'AWS'],
    category: 'realEstate',
    year: '2022',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media managers to track performance across multiple platforms.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Chart.js', 'Laravel', 'MySQL'],
    category: 'analytics',
    year: '2022',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'Mobile-first weather application with location-based forecasts and severe weather alerts.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React Native', 'OpenWeather API', 'Redux', 'AsyncStorage'],
    category: 'mobileApp',
    year: '2021',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 6,
    title: 'Cryptocurrency Tracker',
    description: 'Real-time cryptocurrency price tracking with portfolio management and price alerts.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Next.js', 'CoinGecko API', 'Tailwind CSS', 'Vercel'],
    category: 'finance',
    year: '2021',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  }
]

// Navigation function
const navigateToProject = (projectId) => {
  navigateTo(`/projetos/${projectId}`)
}
</script>