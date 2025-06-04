export interface Technology {
  name: string
  logo: string
  category?: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category?: string
  year?: string
  liveUrl?: string
  githubUrl?: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  slug: string
}

export interface Certification {
  id: number
  name: string
  provider: string
  logo: string
  date: string
  status?: string
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
  hoverColor: string
}