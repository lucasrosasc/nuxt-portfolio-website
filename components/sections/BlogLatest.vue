<template>
    <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {{ $t('sections.latestBlog') }}
            </h2>
            <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img :src="latestBlog.image" :alt="latestBlog.title" class="w-full h-64 object-cover" />
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <span class="text-sm text-gray-500 dark:text-gray-400">{{ latestBlog.date }}</span>
                        <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                        <span class="text-sm text-purple-600 dark:text-purple-400">{{ latestBlog.category }}</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{{ latestBlog.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ latestBlog.excerpt }}</p>
                    <NuxtLink
                    to="/blog"
                    class="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors"
                    >
                    {{ $t('blog.readMore') }}
                    <Icon name="lineicons:arrow-right" class="ml-1 w-4 h-4" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types'

// Latest blog post
const latestBlog: BlogPost = {
  id: 1,
  title: 'How to Build Scalable Frontend Architecture',
  excerpt: 'Learn the best practices for creating maintainable and scalable frontend applications that can grow with your business needs.',
  image: '/placeholder.svg?height=400&width=800',
  date: 'May 15, 2023',
  category: 'Frontend Development'
}

</script>
