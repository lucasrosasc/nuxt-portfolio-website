<template>
  <div>
    <!-- Hero Section -->
    <SectionsHero />

    <!-- Technologies Section -->
    <SectionsTechnologies :technologies="featuredTechnologies" />

    <!-- Projects Carousel -->
    <SectionsProjectsCarousel :projects="featuredProjects" />

    <!-- Latest Blog Post -->
    <SectionsBlogLatest />

    <!-- Latest Certifications -->
    <SectionsCertificationsLatest />

  </div>
</template>

<script setup lang="ts">
import type { Technology, Project } from '~/types'


// Featured technologies for home page
const featuredTechnologies: Technology[] = [
  { name: 'Vue.js', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'React', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'Node.js', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'TypeScript', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'MongoDB', logo: '/placeholder.svg?height=64&width=64' }
]

// Featured projects for home page carousel
const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and secure checkout.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects, tasks, and deadlines efficiently.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Firebase', 'Material UI', 'Redux']
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A platform for property listings with advanced search, filtering, and virtual tours.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Angular', 'Express', 'PostgreSQL', 'AWS']
  }
]

</script>
