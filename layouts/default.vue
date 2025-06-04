<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <!-- Navigation -->
    <LayoutNavbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<script setup>
import LayoutNavbar from '@/components/layout/Navbar.vue'
import LayoutFooter from '@/components/layout/Footer.vue'

// Ensure dark mode class is applied to document
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  },
  bodyAttrs: {
    class: 'font-inter'
  }
})
</script>

<style>
/* Ensure smooth scrolling and transitions */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

/* Smooth transitions for all color changes */
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Custom scrollbar for dark mode */
.dark::-webkit-scrollbar {
  width: 8px;
}

.dark::-webkit-scrollbar-track {
  background: #1f2937;
}

.dark::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

.dark::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
