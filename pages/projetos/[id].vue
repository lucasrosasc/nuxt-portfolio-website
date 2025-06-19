<template>
  <div>
    <section class="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Project Header -->
          <div class="mb-8">
            <NuxtLink 
              to="/projetos" 
              class="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors"
            >
              <Icon name="lineicons:arrow-left" class="mr-2 w-5 h-5" />
              {{ $t('projectDetail.backToProjects') }}
            </NuxtLink>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {{ project.title }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 px-3 py-1 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex space-x-4">
              <a 
                v-if="project.liveUrl"
                :href="project.liveUrl" 
                target="_blank"
                class="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
              >
                <Icon name="lineicons:external-link" class="mr-2 w-5 h-5" />
                {{ $t('projectDetail.viewLiveSite') }}
              </a>
              <a 
                v-if="project.githubUrl"
                :href="project.githubUrl" 
                target="_blank"
                class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors flex items-center"
              >
                <Icon name="lineicons:github-original" class="mr-2 w-5 h-5" />
                {{ $t('projectDetail.viewCode') }}
              </a>
            </div>
          </div>

          <!-- Project Image -->
          <div class="mb-12">
            <img :src="project.image" :alt="project.title" class="w-full rounded-lg shadow-lg" />
          </div>

          <!-- Project Content -->
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('projectDetail.overview') }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ project.overview }}
            </p>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('projectDetail.keyFeatures') }}
            </h3>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
              <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
            </ul>

            <div class="mb-8">
              <img :src="project.screenshotUrl" :alt="`${project.title} Screenshot`" class="w-full rounded-lg shadow-md mb-4" />
              <p class="text-sm text-gray-500 dark:text-gray-400 text-center">{{ project.screenshotCaption }}</p>
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('projectDetail.technicalImplementation') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ project.technicalDetails }}
            </p>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('projectDetail.challengesSolutions') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ project.challenges }}
            </p>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ $t('projectDetail.resultsImpact') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              {{ project.results }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const projectId = parseInt(route.params.id)

// Project data (in a real app, this would come from an API or CMS)
const projectsData = {
  1: {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A comprehensive online shopping solution built with modern web technologies',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    overview: 'This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project showcases modern web development practices, including responsive design, secure payment processing, and efficient state management.',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality', 
      'Secure payment processing with Stripe',
      'Order tracking and history',
      'Admin dashboard for inventory management',
      'Responsive design for all devices',
      'Real-time inventory updates'
    ],
    screenshotUrl: '/placeholder.svg?height=400&width=800',
    screenshotCaption: 'Product catalog with advanced filtering options',
    technicalDetails: 'The frontend was built using Vue.js with Vuex for state management, providing a reactive and efficient user interface. The backend utilizes Node.js with Express.js, creating RESTful APIs that communicate with a MongoDB database. Payment processing is handled securely through Stripe\'s API integration.',
    challenges: 'One of the main challenges was implementing real-time inventory updates to prevent overselling. This was solved by implementing optimistic locking in the database and using WebSocket connections to notify users of stock changes. Another challenge was ensuring PCI compliance for payment processing, which was addressed by using Stripe\'s secure tokenization system.',
    results: 'The platform successfully handles thousands of concurrent users and has processed over $1M in transactions. The responsive design resulted in a 40% increase in mobile conversions, and the intuitive admin interface reduced inventory management time by 60%.'
  },
  2: {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects, tasks, and deadlines efficiently',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['React', 'Firebase', 'Material UI', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    overview: 'A collaborative task management application designed to help teams organize projects, track progress, and meet deadlines. Built with modern React patterns and real-time synchronization.',
    features: [
      'Real-time collaboration',
      'Project and task organization',
      'Deadline tracking and notifications',
      'Team member assignment',
      'Progress visualization',
      'File attachments',
      'Activity timeline',
      'Mobile responsive design'
    ],
    screenshotUrl: '/placeholder.svg?height=400&width=800',
    screenshotCaption: 'Task management dashboard with project overview',
    technicalDetails: 'Built with React and Redux for state management, using Firebase for real-time database and authentication. Material UI provides the component library for consistent design, while Firebase Functions handle server-side logic.',
    challenges: 'Implementing real-time synchronization across multiple users was complex. Solved using Firebase Firestore\'s real-time listeners and optimistic UI updates. Performance was optimized through React.memo and virtual scrolling for large task lists.',
    results: 'Increased team productivity by 35% and reduced project completion time by 25%. The app now serves over 1,000 active teams with 99.9% uptime.'
  },
  3: {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A platform for property listings with advanced search, filtering, and virtual tours',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['Angular', 'Express', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    overview: 'A comprehensive real estate platform that connects buyers, sellers, and agents through advanced search capabilities and immersive virtual tours.',
    features: [
      'Advanced property search and filtering',
      'Interactive maps integration',
      'Virtual tour functionality',
      'Agent profiles and messaging',
      'Mortgage calculator',
      'Saved searches and favorites',
      'Property comparison tool',
      'Mobile app with push notifications'
    ],
    screenshotUrl: '/placeholder.svg?height=400&width=800',
    screenshotCaption: 'Property search interface with map integration',
    technicalDetails: 'Developed using Angular with TypeScript for the frontend, Node.js/Express for the backend API, and PostgreSQL for data storage. AWS services including S3 for media storage and CloudFront for CDN.',
    challenges: 'Integrating virtual tour technology and optimizing search performance across millions of listings were key challenges. Implemented Elasticsearch for fast search and WebGL for immersive tours.',
    results: 'Platform hosts over 500,000 properties and serves 50,000+ daily users. Reduced average time to find properties by 60% and increased agent-client connections by 40%.'
  }
}

const project = projectsData[projectId] || projectsData[1]

// Handle 404 for invalid project IDs
if (!projectsData[projectId]) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  })
}
</script>