<template>
  <section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('hero.greeting') }} <span class="text-purple-600 dark:text-purple-400">Alex</span>
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
          {{ $t('hero.description') }}
        </p>
        <div class="flex space-x-4">
          <NuxtLink
            to="/projetos"
            class="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            {{ $t('hero.viewProjects') }}
          </NuxtLink>
          <NuxtLink
            to="/contato"
            class="border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            {{ $t('hero.contactMe') }}
          </NuxtLink>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 mt-10 border-white dark:border-gray-800 shadow-xl">
          <img src="/placeholder.svg?height=360&width=360" alt="Profile Photo" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
