<template>
  <div>
    <!-- Blog Header -->
    <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Blog
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Thoughts, insights, and tutorials about web development, technology, and the digital landscape.
        </p>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in blogPosts" 
            :key="post.id"
            class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</span>
                <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <span class="text-sm text-purple-600 dark:text-purple-400">{{ post.category }}</span>
              </div>
              <h2 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ post.title }}</h2>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.excerpt }}</p>
              <NuxtLink 
                :to="`/blog/${post.slug}`"
                class="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors"
              >
                {{ $t('blog.readMore') }}
                <Icon name="lineicons:arrow-right" class="ml-1 w-4 h-4" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types'

// Blog posts data (this could come from @nuxt/content later)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Build Scalable Frontend Architecture',
    excerpt: 'Learn the best practices for creating maintainable and scalable frontend applications that can grow with your business needs.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'May 15, 2023',
    category: 'Frontend Development',
    slug: 'scalable-frontend-architecture'
  },
  {
    id: 2,
    title: 'Modern CSS Techniques for Better UI',
    excerpt: 'Explore advanced CSS features like Grid, Flexbox, and Custom Properties to create stunning user interfaces.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'April 28, 2023',
    category: 'CSS',
    slug: 'modern-css-techniques'
  },
  {
    id: 3,
    title: 'Vue 3 Composition API Deep Dive',
    excerpt: 'Master the Composition API in Vue 3 and learn how to build more maintainable and reusable components.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'April 12, 2023',
    category: 'Vue.js',
    slug: 'vue3-composition-api'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices for React',
    excerpt: 'Improve your React development workflow with TypeScript best practices and advanced typing techniques.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'March 30, 2023',
    category: 'TypeScript',
    slug: 'typescript-react-best-practices'
  },
  {
    id: 5,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'March 15, 2023',
    category: 'Backend Development',
    slug: 'nodejs-restful-apis'
  },
  {
    id: 6,
    title: 'Database Design Fundamentals',
    excerpt: 'Learn the core principles of database design and how to structure your data for optimal performance.',
    image: '/placeholder.svg?height=300&width=400',
    date: 'February 28, 2023',
    category: 'Database',
    slug: 'database-design-fundamentals'
  }
]
</script>