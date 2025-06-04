<template>
  <div>
    <!-- Hero Section with Extended Bio -->
    <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('about.title') }}
          </h1>
          <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {{ $t('about.bio1') }}
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {{ $t('about.bio2') }}
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {{ $t('about.bio3') }}
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <img src="/placeholder.svg?height=320&width=320" alt="Profile Photo" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Extended Technologies Section -->
    <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {{ $t('about.technologiesTitle') }}
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div
            v-for="tech in allTechnologies"
            :key="tech.name"
            class="flex flex-col items-center group"
          >
            <div class="w-16 h-16 mb-3 flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
              <img :src="tech.logo" :alt="tech.name" class="max-w-full max-h-full" />
            </div>
            <span class="text-gray-800 dark:text-gray-200 font-medium text-center">{{ tech.name }}</span>
            <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ tech.category }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- All Certifications Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {{ $t('about.certificationsTitle') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="cert in allCertifications"
            :key="cert.id"
            class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="flex items-start">
              <div class="w-16 h-16 flex-shrink-0 mr-4">
                <img :src="cert.logo" :alt="cert.provider" class="w-full h-full object-contain" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ cert.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-2">{{ cert.provider }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-500">Issued {{ cert.date }}</p>
                <div class="mt-3">
                  <span class="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-3 py-1 rounded-full">
                    {{ cert.status }}
                  </span>
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
import type { Technology, Certification } from '~/types'

// All technologies for about page
const allTechnologies: Technology[] = [
  { name: 'Vue.js', logo: '/placeholder.svg?height=64&width=64', category: 'Frontend' },
  { name: 'React', logo: '/placeholder.svg?height=64&width=64', category: 'Frontend' },
  { name: 'Angular', logo: '/placeholder.svg?height=64&width=64', category: 'Frontend' },
  { name: 'Node.js', logo: '/placeholder.svg?height=64&width=64', category: 'Backend' },
  { name: 'Express', logo: '/placeholder.svg?height=64&width=64', category: 'Backend' },
  { name: 'TypeScript', logo: '/placeholder.svg?height=64&width=64', category: 'Language' },
  { name: 'JavaScript', logo: '/placeholder.svg?height=64&width=64', category: 'Language' },
  { name: 'Python', logo: '/placeholder.svg?height=64&width=64', category: 'Language' },
  { name: 'MongoDB', logo: '/placeholder.svg?height=64&width=64', category: 'Database' },
  { name: 'PostgreSQL', logo: '/placeholder.svg?height=64&width=64', category: 'Database' },
  { name: 'AWS', logo: '/placeholder.svg?height=64&width=64', category: 'Cloud' },
  { name: 'Docker', logo: '/placeholder.svg?height=64&width=64', category: 'DevOps' },
  { name: 'Git', logo: '/placeholder.svg?height=64&width=64', category: 'Tools' },
  { name: 'Figma', logo: '/placeholder.svg?height=64&width=64', category: 'Design' },
  { name: 'Tailwind CSS', logo: '/placeholder.svg?height=64&width=64', category: 'Styling' }
]

// All certifications for about page
const allCertifications: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'April 2023',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Professional Frontend Developer',
    provider: 'Meta',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'January 2023',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Google Cloud Professional Developer',
    provider: 'Google Cloud',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'November 2022',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Certified Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'September 2022',
    status: 'Active'
  },
  {
    id: 5,
    name: 'MongoDB Certified Developer',
    provider: 'MongoDB University',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'June 2022',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Scrum Master Certification',
    provider: 'Scrum Alliance',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'March 2022',
    status: 'Active'
  }
]
</script>
