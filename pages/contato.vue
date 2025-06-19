<template>
  <div>
    <!-- Contact Header -->
    <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('contact.description') }}
        </p>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {{ $t('contact.form.title') }}
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ $t('contact.form.firstName') }}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="contactForm.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ $t('contact.form.lastName') }}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="contactForm.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('contact.form.email') }}
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                >
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('contact.form.subject') }}
                </label>
                <select
                  id="subject"
                  v-model="contactForm.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                >
                  <option value="">{{ $t('contact.form.selectSubject') }}</option>
                  <option value="project">{{ $t('contact.form.subjects.project') }}</option>
                  <option value="collaboration">{{ $t('contact.form.subjects.collaboration') }}</option>
                  <option value="consultation">{{ $t('contact.form.subjects.consultation') }}</option>
                  <option value="other">{{ $t('contact.form.subjects.other') }}</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {{ $t('contact.form.message') }}
                </label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  :placeholder="$t('contact.form.messagePlaceholder')"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                {{ $t('contact.form.send') }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {{ $t('contact.info.title') }}
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">
                {{ $t('contact.info.description') }}
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <Icon name="lineicons:envelope" class="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.info.email') }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">hello@portfolio.com</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">{{ $t('contact.info.emailResponse') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Icon name="lineicons:phone" class="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.info.phone') }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">{{ $t('contact.info.phoneAvailability') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <Icon name="lineicons:map-marker" class="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.info.location') }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">{{ $t('contact.info.locationNote') }}</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-4">{{ $t('contact.info.followMe') }}</h3>
              <div class="flex space-x-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  :class="social.hoverColor"
                  class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon :name="social.icon" class="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ContactForm, SocialLink } from '~/types'

// Contact form data
const contactForm = ref<ContactForm>({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

// Social links
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'lineicons:github-original',
    url: '#',
    hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
  },
  {
    name: 'LinkedIn',
    icon: 'lineicons:linkedin-original',
    url: '#',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
  },
  {
    name: 'Twitter',
    icon: 'lineicons:x',
    url: '#',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
  },
  {
    name: 'Instagram',
    icon: 'lineicons:instagram-original',
    url: '#',
    hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
  }
]

// Form submission
const submitForm = () => {
  console.log('Form submitted:', contactForm.value)
  alert('Message sent successfully!')
  // Reset form
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
