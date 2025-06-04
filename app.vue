<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Set SEO meta tags
useHead({
  title: 'Portfolio - Alex Developer',
  meta: [
    { name: 'description', content: 'Professional portfolio of Alex, a passionate full-stack developer with 5+ years of experience.' },
    { name: 'keywords', content: 'developer, full-stack, vue, react, node, portfolio' },
    { name: 'author', content: 'Alex' },
    { property: 'og:title', content: 'Portfolio - Alex Developer' },
    { property: 'og:description', content: 'Professional portfolio showcasing web development projects and skills.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>