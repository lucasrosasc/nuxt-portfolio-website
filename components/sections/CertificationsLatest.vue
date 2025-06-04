<!-- Latest Certifications -->
<template>
    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        {{ $t('sections.latestCertifications') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
            v-for="cert in latestCertifications"
            :key="cert.id"
            class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
        >
            <div class="flex items-start">
            <div class="w-16 h-16 flex-shrink-0 mr-4">
                <img :src="cert.logo" :alt="cert.provider" class="w-full h-full object-contain" />
            </div>
            <div>
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ cert.name }}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-2">{{ cert.provider }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-500">Issued {{ cert.date }}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>

<script setup lang="ts">
import type { Certification } from '~/types'

// Latest certifications for home page
const latestCertifications: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'April 2023'
  },
  {
    id: 2,
    name: 'Professional Frontend Developer',
    provider: 'Meta',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'January 2023'
  }
]
</script>
