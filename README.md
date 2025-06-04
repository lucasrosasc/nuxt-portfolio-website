# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

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
