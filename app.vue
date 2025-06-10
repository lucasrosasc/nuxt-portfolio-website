<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Set SEO meta tags
useHead({
  title: 'Portfolio - Lucas Rosas da Cunha',
  meta: [
    { name: 'description', content: 'Professional portfolio of Lucas, a passionate full-stack developer with 2+ years of experience.' },
    { name: 'keywords', content: 'developer, full-stack, vue, react, node, portfolio' },
    { name: 'author', content: 'Lucas' },
    { property: 'og:title', content: 'Portfolio - Lucas Rosas da Cunha' },
    { property: 'og:description', content: 'Professional portfolio showcasing web development projects and skills.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo_2.png'}
  ]
})
</script>
