<template>
  <footer class="dark:bg-gray-900 dark:text-white py-12 bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Quote -->
        <div>
          <div class="flex items-center mb-4">
            <div class="h-10 w-10 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 rounded-md flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span class="ml-2 text-xl font-semibold">Portfolio</span>
          </div>
          <p class="text-gray-400 mb-4 w-3/4">
            "{{ $t('footer.quote') }}"
          </p>
        </div>

        <!-- Social Links -->
        <div class>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.connect') }}</h3>
          <div class="flex space-x-4 mb-4 text-xl">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :class="social.hoverColor"
              class="text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact') }}</h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <Icon name="lucide:mail" class="w-5 h-5 mr-2 text-gray-400" />
              <span class="text-gray-400">lucasrosasc@outlook.com.br</span>
            </div>
            <div class="flex items-center">
              <Icon name="lucide:phone" class="w-5 h-5 mr-2 text-gray-400" />
              <span class="text-gray-400">+55 21 99803-6560</span>
            </div>
            <div class="flex items-center">
              <Icon name="lucide:map-pin" class="w-5 h-5 mr-2 text-gray-400" />
              <span class="text-gray-400">Rio de Janeiro, RJ</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Portfolio. {{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'lucide:github',
    url: 'https://github.com/lucasrosasdacunha',
    hoverColor: 'hover:text-purple-400'
  },
  {
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    url: 'https://www.linkedin.com/in/lucas-rosas-da-cunha/',
    hoverColor: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: 'lucide:twitter',
    url: 'https://x.com/lucas_roscun',
    hoverColor: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    icon: 'lucide:instagram',
    url: 'https://www.instagram.com/',
    hoverColor: 'hover:text-red-400'
  }
]
</script>
