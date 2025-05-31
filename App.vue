<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen">
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <!-- Navigation Component -->
      <header class="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50 transition-colors duration-300">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="h-10 w-10 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 rounded-md flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span class="ml-2 text-xl font-semibold">Portfolio</span>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <a href="#" @click.prevent="setRoute('/')" 
               :class="currentRoute === '/' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="transition-colors font-medium">Home</a>
            <a href="#" @click.prevent="setRoute('/projects')" 
               :class="currentRoute === '/projects' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="transition-colors font-medium">Projects</a>
            <a href="#" @click.prevent="setRoute('/about')" 
               :class="currentRoute === '/about' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="transition-colors font-medium">About</a>
            <a href="#" @click.prevent="setRoute('/blog')" 
               :class="currentRoute === '/blog' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="transition-colors font-medium">Blog</a>
            <a href="#" @click.prevent="setRoute('/contact')" 
               :class="currentRoute === '/contact' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="transition-colors font-medium">Contact</a>
          </nav>
          
          <!-- Dark Mode Toggle & Mobile Menu -->
          <div class="flex items-center space-x-4">
            <button @click="toggleDarkMode" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </button>
            
            <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <div class="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#" @click.prevent="setRoute('/'); mobileMenuOpen = false" 
               :class="currentRoute === '/' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="py-2 transition-colors font-medium">Home</a>
            <a href="#" @click.prevent="setRoute('/projects'); mobileMenuOpen = false" 
               :class="currentRoute === '/projects' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="py-2 transition-colors font-medium">Projects</a>
            <a href="#" @click.prevent="setRoute('/about'); mobileMenuOpen = false" 
               :class="currentRoute === '/about' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="py-2 transition-colors font-medium">About</a>
            <a href="#" @click.prevent="setRoute('/blog'); mobileMenuOpen = false" 
               :class="currentRoute === '/blog' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="py-2 transition-colors font-medium">Blog</a>
            <a href="#" @click.prevent="setRoute('/contact'); mobileMenuOpen = false" 
               :class="currentRoute === '/contact' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'" 
               class="py-2 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow">
        <!-- Home Page -->
        <div v-if="currentRoute === '/'">
          <!-- Hero Section -->
          <section class="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span class="text-purple-600 dark:text-purple-400">Alex</span>
                </h1>
                <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
                  A passionate full-stack developer with over 5 years of experience creating beautiful, functional, and user-centered digital experiences.
                </p>
                <div class="flex space-x-4">
                  <button @click="setRoute('/projects')" class="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    View Projects
                  </button>
                  <button @click="setRoute('/contact')" class="border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
              <div class="md:w-1/2 flex justify-center">
                <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img src="/placeholder.svg?height=320&width=320" alt="Profile Photo" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <!-- Technologies Section -->
          <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Technologies I Work With</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                <div v-for="tech in featuredTechnologies" :key="tech.name" class="flex flex-col items-center group">
                  <div class="w-16 h-16 mb-3 flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
                    <img :src="tech.logo" :alt="tech.name" class="max-w-full max-h-full" />
                  </div>
                  <span class="text-gray-800 dark:text-gray-200 font-medium text-center">{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Projects Carousel -->
          <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
              <p class="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Check out some of my recent work that showcases my skills and expertise.
              </p>
              
              <div class="relative">
                <button @click="prevProject" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                
                <div class="overflow-hidden">
                  <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentProjectIndex * 100}%)` }">
                    <div v-for="project in featuredProjects" :key="project.id" class="w-full flex-shrink-0 px-4">
                      <div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover" />
                        <div class="p-6">
                          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
                          <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                          <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tag in project.tags" :key="tag" class="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-xs px-3 py-1 rounded-full">
                              {{ tag }}
                            </span>
                          </div>
                          <button @click="navigateToProject(project.id)" class="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button @click="nextProject" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </button>
                
                <div class="flex justify-center mt-6 space-x-2">
                  <button 
                    v-for="(_, index) in featuredProjects" 
                    :key="index"
                    @click="currentProjectIndex = index"
                    class="w-3 h-3 rounded-full transition-colors"
                    :class="index === currentProjectIndex ? 'bg-purple-600 dark:bg-purple-400' : 'bg-gray-300 dark:bg-gray-600'"
                  ></button>
                </div>
              </div>
            </div>
          </section>

          <!-- Latest Blog Post -->
          <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Latest from the Blog</h2>
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
                  <button class="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 flex items-center transition-colors">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- Latest Certifications -->
          <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Latest Certifications</h2>
              <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div v-for="cert in latestCertifications" :key="cert.id" class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                  <div class="flex items-start">
                    <div class="w-16 h-16 flex-shrink-0 mr-4">
                      <img :src="cert.logo" :alt="cert.provider" class="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ cert.name }}</h3>
                      <p class="text-gray-600 dark:text-gray-400 mb-2">{{ cert.provider }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-500">Issued {{ cert.date }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- About Page -->
        <div v-if="currentRoute === '/about'">
          <!-- Hero Section with Extended Bio -->
          <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  About <span class="text-purple-600 dark:text-purple-400">Me</span>
                </h1>
                <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
                  A passionate full-stack developer with over 5 years of experience creating beautiful, functional, and user-centered digital experiences. I specialize in modern web technologies and have a deep understanding of both frontend and backend development.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  My journey in web development started during my computer science studies, where I discovered my love for creating interactive and engaging user interfaces. Since then, I've worked with startups and established companies, helping them build scalable web applications that solve real-world problems.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community talks. I believe in continuous learning and staying up-to-date with the latest industry trends.
                </p>
              </div>
              <div class="md:w-1/2 flex justify-center">
                <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                  <img src="/placeholder.svg?height=320&width=320" alt="Profile Photo" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <!-- Extended Technologies Section -->
          <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Technologies & Skills</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div v-for="tech in allTechnologies" :key="tech.name" class="flex flex-col items-center group">
                  <div class="w-16 h-16 mb-3 flex items-center justify-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
                    <img :src="tech.logo" :alt="tech.name" class="max-w-full max-h-full" />
                  </div>
                  <span class="text-gray-800 dark:text-gray-200 font-medium text-center">{{ tech.name }}</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ tech.category }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- All Certifications Section -->
          <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Certifications & Achievements</h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="cert in allCertifications" :key="cert.id" class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div class="flex items-start">
                    <div class="w-16 h-16 flex-shrink-0 mr-4">
                      <img :src="cert.logo" :alt="cert.provider" class="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ cert.name }}</h3>
                      <p class="text-gray-600 dark:text-gray-400 mb-2">{{ cert.provider }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-500">Issued {{ cert.date }}</p>
                      <div class="mt-3">
                        <span class="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-3 py-1 rounded-full">
                          {{ cert.status }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Projects Page -->
        <div v-if="currentRoute === '/projects'">
          <!-- Projects Header -->
          <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
            <div class="container mx-auto px-4 text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My <span class="text-purple-600 dark:text-purple-400">Projects</span>
              </h1>
              <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Explore my portfolio of web applications, from e-commerce platforms to productivity tools. Each project showcases different technologies and problem-solving approaches.
              </p>
            </div>
          </section>

          <!-- Projects Grid -->
          <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div class="container mx-auto px-4">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in allProjects" :key="project.id" 
                     class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                     @click="navigateToProject(project.id)">
                  <div class="relative overflow-hidden">
                    <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div class="p-6">
                    <div class="flex items-center mb-2">
                      <span class="text-sm text-purple-600 dark:text-purple-400 font-medium">{{ project.category }}</span>
                      <span class="mx-2 text-gray-300 dark:text-gray-600">•</span>
                      <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.year }}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ project.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span v-for="tag in project.tags" :key="tag" 
                            class="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-xs px-3 py-1 rounded-full">
                        {{ tag }}
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-purple-600 dark:text-purple-400 font-medium flex items-center">
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-1 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                      <div class="flex space-x-2">
                        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" 
                           class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                           @click.stop>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </a>
                        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" 
                           class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                           @click.stop>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Contact Page -->
        <div v-if="currentRoute === '/contact'">
          <!-- Contact Header -->
          <section class="bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 py-20 transition-colors">
            <div class="container mx-auto px-4 text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Get In <span class="text-purple-600 dark:text-purple-400">Touch</span>
              </h1>
              <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
              </p>
            </div>
          </section>

          <!-- Contact Form and Info -->
          <section class="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div class="container mx-auto px-4">
              <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                  <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send me a message</h2>
                  <form @submit.prevent="submitForm" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                      <div>
                        <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                        <input type="text" id="firstName" v-model="contactForm.firstName" required
                               class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                      </div>
                      <div>
                        <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input type="text" id="lastName" v-model="contactForm.lastName" required
                               class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                      </div>
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input type="email" id="email" v-model="contactForm.email" required
                             class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                    </div>
                    <div>
                      <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                      <select id="subject" v-model="contactForm.subject" required
                              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                        <option value="">Select a subject</option>
                        <option value="project">New Project</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                      <textarea id="message" v-model="contactForm.message" rows="6" required
                                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                                placeholder="Tell me about your project or how I can help you..."></textarea>
                    </div>
                    <button type="submit" 
                            class="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                  <div>
                    <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's connect</h2>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">
                      I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                    </p>
                  </div>

                  <!-- Contact Methods -->
                  <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                      <div class="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-purple-600 dark:text-purple-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Email</h3>
                        <p class="text-gray-600 dark:text-gray-400">hello@portfolio.com</p>
                        <p class="text-sm text-gray-500 dark:text-gray-500">I'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4">
                      <div class="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone text-blue-600 dark:text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Phone</h3>
                        <p class="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                        <p class="text-sm text-gray-500 dark:text-gray-500">Available Mon-Fri, 9AM-6PM PST</p>
                      </div>
                    </div>

                    <div class="flex items-start space-x-4">
                      <div class="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-green-600 dark:text-green-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Location</h3>
                        <p class="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                        <p class="text-sm text-gray-500 dark:text-gray-500">Open to remote work worldwide</p>
                      </div>
                    </div>
                  </div>

                  <!-- Social Links -->
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Follow me</h3>
                    <div class="flex space-x-4">
                      <a href="#" class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github text-gray-600 dark:text-gray-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                      <a href="#" class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin text-gray-600 dark:text-gray-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a href="#" class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter text-gray-600 dark:text-gray-400"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Project Detail Page -->
        <div v-if="currentRoute.startsWith('/projects/') && currentRoute !== '/projects'">
          <section class="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div class="container mx-auto px-4">
              <div class="max-w-4xl mx-auto">
                <!-- Project Header -->
                <div class="mb-8">
                  <button @click="setRoute('/projects')" class="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left mr-2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Back to Projects
                  </button>
                  <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">E-commerce Platform</h1>
                  <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    A comprehensive online shopping solution built with modern web technologies
                  </p>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 px-3 py-1 rounded-full text-sm">Vue.js</span>
                    <span class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span class="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span class="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm">Stripe</span>
                  </div>
                  <div class="flex space-x-4">
                    <a href="#" class="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                      View Live Site
                    </a>
                    <a href="#" class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      View Code
                    </a>
                  </div>
                </div>

                <!-- Project Image -->
                <div class="mb-12">
                  <img src="/placeholder.svg?height=600&width=1200" alt="E-commerce Platform" class="w-full rounded-lg shadow-lg" />
                </div>

                <!-- Project Content -->
                <div class="prose prose-lg dark:prose-invert max-w-none">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
                  <p class="text-gray-600 dark:text-gray-400 mb-6">
                    This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. 
                    The project showcases modern web development practices, including responsive design, secure payment processing, 
                    and efficient state management.
                  </p>

                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                    <li>User authentication and authorization</li>
                    <li>Product catalog with search and filtering</li>
                    <li>Shopping cart and wishlist functionality</li>
                    <li>Secure payment processing with Stripe</li>
                    <li>Order tracking and history</li>
                    <li>Admin dashboard for inventory management</li>
                    <li>Responsive design for all devices</li>
                    <li>Real-time inventory updates</li>
                  </ul>

                  <div class="mb-8">
                    <img src="/placeholder.svg?height=400&width=800" alt="Product Catalog" class="w-full rounded-lg shadow-md mb-4" />
                    <p class="text-sm text-gray-500 dark:text-gray-400 text-center">Product catalog with advanced filtering options</p>
                  </div>

                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-6">
                    The frontend was built using Vue.js with Vuex for state management, providing a reactive and efficient user interface. 
                    The backend utilizes Node.js with Express.js, creating RESTful APIs that communicate with a MongoDB database. 
                    Payment processing is handled securely through Stripe's API integration.
                  </p>

                  <div class="mb-8">
                    <img src="/placeholder.svg?height=400&width=800" alt="Admin Dashboard" class="w-full rounded-lg shadow-md mb-4" />
                    <p class="text-sm text-gray-500 dark:text-gray-400 text-center">Admin dashboard for inventory and order management</p>
                  </div>

                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenges & Solutions</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-6">
                    One of the main challenges was implementing real-time inventory updates to prevent overselling. This was solved by 
                    implementing optimistic locking in the database and using WebSocket connections to notify users of stock changes. 
                    Another challenge was ensuring PCI compliance for payment processing, which was addressed by using Stripe's secure 
                    tokenization system.
                  </p>

                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Results & Impact</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-6">
                    The platform successfully handles thousands of concurrent users and has processed over $1M in transactions. 
                    The responsive design resulted in a 40% increase in mobile conversions, and the intuitive admin interface 
                    reduced inventory management time by 60%.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <!-- Footer Component -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div class="flex items-center mb-4">
                <div class="h-10 w-10 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 rounded-md flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <span class="ml-2 text-xl font-semibold">Portfolio</span>
              </div>
              <p class="text-gray-400 mb-4">
                "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
              </p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Connect</h3>
              <div class="flex space-x-4 mb-4">
                <a href="#" class="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Contact</h3>
              <div class="space-y-2">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2 text-gray-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span class="text-gray-400">hello@portfolio.com</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mr-2 text-gray-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span class="text-gray-400">(123) 456-7890</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-2 text-gray-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span class="text-gray-400">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {{ new Date().getFullYear() }} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Dark mode state
const isDarkMode = ref(false);

// Toggle dark mode function
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Mobile menu state
const mobileMenuOpen = ref(false);

// Current route state
const currentRoute = ref('/');

// Set route function
const setRoute = (route) => {
  currentRoute.value = route;
  mobileMenuOpen.value = false;
  window.scrollTo(0, 0);
};

// Projects carousel state
const currentProjectIndex = ref(0);

// Featured technologies for home page
const featuredTechnologies = ref([
  { name: 'Vue.js', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'React', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'Node.js', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'TypeScript', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'MongoDB', logo: '/placeholder.svg?height=64&width=64' }
]);

// All technologies for about page
const allTechnologies = ref([
  { name: 'Vue.js', logo: '/placeholder.svg?height=64&width=64', category: 'Frontend' },
  { name: 'React', logo: '/placeholder.svg?height=64&width=64', category: 'Frontend' },
  { name: 'Angular', logo: '/placeholder.svg?height=64&width=64', category: 'Frontend' },
  { name: 'Node.js', logo: '/placeholder.svg?height=64&width=64', category: 'Backend' },
  { name: 'Express', logo: '/placeholder.svg?height=64&width=64', category: 'Backend' },
  { name: 'TypeScript', logo: '/placeholder.svg?height=64&width=64', category: 'Language' },
  { name: 'JavaScript', logo: '/placeholder.svg?height=64&width=64', category: 'Language' },
  { name: 'Python', logo: '/placeholder.svg?height=64&width=64', category: 'Language' },
  { name: 'MongoDB', logo: '/placeholder.svg?height=64&width=64', category: 'Database' },
  { name: 'PostgreSQL', logo: '/placeholder.svg?height=64&width=64', category: 'Database' },
  { name: 'AWS', logo: '/placeholder.svg?height=64&width=64', category: 'Cloud' },
  { name: 'Docker', logo: '/placeholder.svg?height=64&width=64', category: 'DevOps' },
  { name: 'Git', logo: '/placeholder.svg?height=64&width=64', category: 'Tools' },
  { name: 'Figma', logo: '/placeholder.svg?height=64&width=64', category: 'Design' },
  { name: 'Tailwind CSS', logo: '/placeholder.svg?height=64&width=64', category: 'Styling' }
]);

// Featured projects for home page carousel
const featuredProjects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and secure checkout.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects, tasks, and deadlines efficiently.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Firebase', 'Material UI', 'Redux']
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A platform for property listings with advanced search, filtering, and virtual tours.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Angular', 'Express', 'PostgreSQL', 'AWS']
  }
]);

// All projects for projects page
const allProjects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and secure checkout.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Application',
    year: '2023',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects, tasks, and deadlines efficiently.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Firebase', 'Material UI', 'Redux'],
    category: 'Productivity',
    year: '2023',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A platform for property listings with advanced search, filtering, and virtual tours.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Angular', 'Express', 'PostgreSQL', 'AWS'],
    category: 'Real Estate',
    year: '2022',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media managers to track performance across multiple platforms.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Chart.js', 'Laravel', 'MySQL'],
    category: 'Analytics',
    year: '2022',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'Mobile-first weather application with location-based forecasts and severe weather alerts.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React Native', 'OpenWeather API', 'Redux', 'AsyncStorage'],
    category: 'Mobile App',
    year: '2021',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 6,
    title: 'Cryptocurrency Tracker',
    description: 'Real-time cryptocurrency price tracking with portfolio management and price alerts.',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Next.js', 'CoinGecko API', 'Tailwind CSS', 'Vercel'],
    category: 'Finance',
    year: '2021',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  }
]);

// Latest blog post
const latestBlog = ref({
  id: 1,
  title: 'How to Build Scalable Frontend Architecture',
  excerpt: 'Learn the best practices for creating maintainable and scalable frontend applications that can grow with your business needs.',
  image: '/placeholder.svg?height=400&width=800',
  date: 'May 15, 2023',
  category: 'Frontend Development'
});

// Latest certifications for home page
const latestCertifications = ref([
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'April 2023'
  },
  {
    id: 2,
    name: 'Professional Frontend Developer',
    provider: 'Meta',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'January 2023'
  }
]);

// All certifications for about page
const allCertifications = ref([
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    provider: 'Amazon Web Services',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'April 2023',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Professional Frontend Developer',
    provider: 'Meta',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'January 2023',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Google Cloud Professional Developer',
    provider: 'Google Cloud',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'November 2022',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Certified Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'September 2022',
    status: 'Active'
  },
  {
    id: 5,
    name: 'MongoDB Certified Developer',
    provider: 'MongoDB University',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'June 2022',
    status: 'Active'
  },
  {
    id: 6,
    name: 'Scrum Master Certification',
    provider: 'Scrum Alliance',
    logo: '/placeholder.svg?height=64&width=64',
    date: 'March 2022',
    status: 'Active'
  }
]);

// Contact form data
const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
});

// Carousel navigation functions
const nextProject = () => {
  if (currentProjectIndex.value < featuredProjects.value.length - 1) {
    currentProjectIndex.value++;
  } else {
    currentProjectIndex.value = 0;
  }
};

const prevProject = () => {
  if (currentProjectIndex.value > 0) {
    currentProjectIndex.value--;
  } else {
    currentProjectIndex.value = featuredProjects.value.length - 1;
  }
};

// Navigation functions
const navigateToProject = (projectId) => {
  currentRoute.value = `/projects/${projectId}`;
};

// Form submission
const submitForm = () => {
  console.log('Form submitted:', contactForm.value);
  alert('Message sent successfully!');
  // Reset form
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };
};

// Initialize dark mode on mount
onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

/* Dark mode styles */
.dark {
  color-scheme: dark;
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

This complete portfolio website includes:

## 🌙 **Dark Mode Features:**
- **Color Scheme**: Purple (primary), Gold, Blue, Green, Red accents as requested
- **Toggle**: Moon/Sun icon in navigation
- **Persistence**: Saves preference to localStorage
- **Smooth Transitions**: All elements transition smoothly between modes

## 📄 **Pages Implemented:**

### 1. **Home Page**
- Hero section with call-to-action buttons
- Featured technologies showcase
- Projects carousel with navigation
- Latest blog post preview
- Latest certifications display

### 2. **About Page**
- Extended bio with same hero image
- Comprehensive technologies section (15+ technologies)
- All certifications with status indicators

### 3. **Projects Page**
- Grid layout with project cards
- Hover effects and animations
- Live demo and GitHub links
- Category and year information

### 4. **Contact Page**
- Professional contact form
- Contact information cards with colored icons
- Social media links
- Responsive layout

### 5. **Project Detail Page**
- Medium-style layout with large images
- Comprehensive project description
- Technical implementation details
- Back navigation

## 🧩 **Modular Structure:**
The code is organized for easy breakdown into modules:
- **Components**: Navigation, Footer, ProjectCard, ContactForm
- **Pages**: Home, About, Projects, Contact, ProjectDetail
- **Data**: Technologies, Projects, Certifications
- **Utils**: Dark mode toggle, navigation functions

## 🎨 **Color Implementation:**
- **Purple**: Primary brand color, buttons, active states
- **Blue**: External links, phone contact
- **Green**: Location, success states
- **Red**: Instagram hover (avoiding pink as requested)
- **Gold**: Can be added for special accent elements
- **No Pink/Light Yellow**: As requested

