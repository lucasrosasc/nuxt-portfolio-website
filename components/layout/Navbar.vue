<template>
  <header
    class="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50 transition-all duration-300"
    :class="{ '-translate-y-full': isScrollingUp && scrollY > 100 }"
  >
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
          <img src="/logo.png" alt="LucasRC Logo" class="h-10 w-10" />
          <span class="ml-2 text-2xl font-semibold dark:text-white text-black ">Portfolio</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="md:flex space-x-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="transition-colors font-medium max-md:hidden"
          :class="$route.path === item.path
            ? 'text-purple-600 dark:text-purple-400'
            : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'"
        >
          {{ $t(item.label) }}
        </NuxtLink>
      </nav>

      <!-- Dark Mode & Language Toggle & Mobile Menu -->
      <div class="flex items-center space-x-4">
        <!-- Dark Mode Toggle -->
        <button
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle dark mode"
          @click="toggleDarkMode"
        >
          <Icon
            :name="isDarkMode ? 'lineicons:sun-1' : 'lineicons:moon-half-right-5'"
            class="scale-130"
          />
        </button>

        <!-- Language Toggle -->
        <button
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          aria-label="Toggle language"
          @click="toggleLanguage"
        >
          {{ isEnglish ? 'EN' : 'PT' }}
        </button>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="toggleMobileMenu"
        >
          <Icon name="lineicons:menu" class="h-6 w-6" />
          <span class="sr-only">Toggle menu</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white dark:bg-gray-900 shadow-md transition-colors duration-300"
    >
      <div class="container mx-auto px-4 py-2 flex flex-col space-y-3">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="py-2 transition-colors font-medium"
          :class="$route.path === item.path
            ? 'text-purple-600 dark:text-purple-400'
            : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'"
          @click="closeMobileMenu"
        >
          {{ $t(item.label) }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const { $i18n } = useNuxtApp()
const colorMode = useColorMode()

// Navigation items
const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/projetos', label: 'nav.projects' },
  { path: '/sobre', label: 'nav.about' },
  { path: '/blog', label: 'nav.blog' },
  { path: '/contato', label: 'nav.contact' }
]

// Dark mode state using @nuxtjs/color-mode
const isDarkMode = computed(() => colorMode.value === 'dark')

// Language state
const isEnglish = computed(() => $i18n.locale.value === 'en')

// Mobile menu state
const mobileMenuOpen = ref(false)

// Scroll behavior for auto-hide navbar
const scrollY = ref(0)
const lastScrollY = ref(0)
const isScrollingUp = ref(false)

const updateScrollPosition = () => {
  scrollY.value = window.scrollY
  isScrollingUp.value = scrollY.value < lastScrollY.value && scrollY.value > 100
  lastScrollY.value = scrollY.value
}

// Toggle functions
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleLanguage = () => {
  const newLocale = isEnglish.value ? 'pt' : 'en'
  $i18n.setLocale(newLocale)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Initialize scroll listener on mount
onMounted(() => {
  window.addEventListener('scroll', updateScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollPosition)
})
</script>
