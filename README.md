<div align="center">

<img src="https://img.shields.io/badge/Next.js-16.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />

<br />
<br />

# ☕ Munni Cafe

### Where Every Cup Tells a Story

A premium, artisan coffee roastery and café website built with modern web technologies, featuring immersive 3D-inspired visuals, glass-morphism design, and smooth scroll animations.

<br />

[🚀 Live Demo](#) · [📊 Project Report](#) · [🐛 Report Bug](#) · [✨ Request Feature](#)

</div>

---

## 📖 About The Project

Munni Cafe is a professional, feature-rich website for a local artisan coffee roastery and café. Designed with a dark mocha theme, ambient glow effects, and glass-morphism cards, it delivers a luxurious digital experience that mirrors the warmth and craftsmanship of a real specialty coffee shop. The website showcases the café's story, menu, gallery, customer testimonials, and contact information — all wrapped in an immersive, animated interface.

From the steam particles rising on the hero section to the shimmer effects on call-to-action buttons, every interaction is thoughtfully crafted to create a memorable user experience that goes beyond a typical café website.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🎨 **Glass-Morphism UI** | Frosted glass cards with backdrop blur, subtle borders, and hover lift animations |
| 🌫️ **Steam Particle Animation** | Animated steam wisps rising from the hero section with staggered delays |
| 🔮 **Ambient Glow Effects** | Soft amber and gold radial gradient blobs creating atmospheric depth |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop with adaptive layouts and mobile slide-out menu |
| 🎬 **Scroll Reveal Animations** | Framer Motion-powered fade-in and slide-up animations triggered on scroll |
| 🖼️ **Interactive Gallery** | Masonry grid layout with 3D hover effects and fullscreen lightbox dialog |
| 🍽️ **Tabbed Menu System** | Three-category menu (Coffee, Pastries, Specials) with AI-generated food imagery |
| 💬 **Customer Testimonials** | Star-rated review cards with glass-card styling |
| 📍 **Contact & Map** | Integrated contact form, Google Maps embed, and business details |
| 💬 **WhatsApp Button** | Floating WhatsApp contact button with branded coffee-color theming |
| 🎯 **Active Nav Tracking** | Scroll-aware navbar that highlights the current section with pill-style indicators |
| 🖱️ **Noise Texture Overlay** | Subtle SVG grain texture for a premium, printed-material feel |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **Next.js 16** (App Router) | React framework with server components and static generation |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling with custom coffee color theme |
| **shadcn/ui** | Pre-built accessible UI components (Button, Sheet, Dialog, Tabs, etc.) |
| **Framer Motion** | Scroll-triggered and entrance animations |
| **Lucide React** | Icon library |

### Design System
| Element | Detail |
|---------|--------|
| **Color Palette** | Custom `coffee` scale (50–950) with amber/gold accents |
| **Typography** | Geist Sans + Serif display headings |
| **Effects** | Glass-morphism, noise texture, ambient glows, shimmer, steam particles |
| **Dark Mode** | Dark-first design with mocha backgrounds (#1A1210, #0F0A08) |

---

## 📁 Project Structure

```
munni-cafe/
├── public/                          # Static assets
│   ├── logo.png                     # Brand logo
│   ├── hero-bg.png                  # Hero background image
│   ├── about-image.png              # About section photo
│   ├── gallery-1.png ... gallery-4.png
│   ├── menu-espresso.png            # Menu item images (16 total)
│   ├── menu-latte.png
│   ├── menu-cold-brew.png
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom theme, animations, glass effects
│   │   ├── layout.tsx               # Root layout with metadata & fonts
│   │   ├── page.tsx                 # Main page composing all sections
│   │   └── api/route.ts             # API route
│   ├── components/
│   │   ├── Navbar.tsx               # Fixed nav with scroll tracking & mobile menu
│   │   ├── HeroSection.tsx          # Full-screen hero with steam & glow effects
│   │   ├── AboutSection.tsx         # Story section with stats & floating badge
│   │   ├── MenuSection.tsx          # Tabbed menu with images & prices
│   │   ├── GallerySection.tsx       # Masonry gallery with lightbox
│   │   ├── TestimonialsSection.tsx  # Customer review cards
│   │   ├── ContactSection.tsx       # Form, map & business info
│   │   ├── Footer.tsx               # Gradient-bordered footer
│   │   ├── WhatsAppButton.tsx       # Floating WhatsApp contact
│   │   ├── ScrollReveal.tsx         # Framer Motion scroll wrapper
│   │   └── ui/                      # shadcn/ui component library
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (cn helper)
│   └── hooks/
│       ├── use-mobile.ts            # Mobile detection hook
│       └── use-toast.ts             # Toast notification hook
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── components.json                  # shadcn/ui configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** 1.0+
- **npm** or **bun** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/munni-cafe.git

# Navigate to project directory
cd munni-cafe

# Install dependencies
npm install
# OR with Bun (faster)
bun install

# Start the development server
npm run dev
# OR
bun run dev
```

The development server will start at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm run start
# OR
bun run build
bun run start
```

---

## 🎨 Customization

### Changing Colors

The entire color theme is defined in `src/app/globals.css` under the `@theme` block. Modify the `coffee` color scale and CSS variables to match your brand:

```css
/* Example: Change primary accent */
--color-coffee-300: #D4A574;  /* Main accent color */
--color-gold: #E8C547;        /* Secondary accent */
```

### Adding Menu Items

Edit `src/components/MenuSection.tsx` and add new items to the `menuItems` array:

```typescript
{
  name: "Your New Item",
  description: "Description here",
  price: "$5.99",
  image: "/menu-your-item.png"
}
```

### Replacing Images

Place your images in the `public/` folder and update the corresponding `src` attributes in the components.

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 640px | Single column, slide-out menu |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout, pill navigation, 3-column grids |

---

## 🌐 Deployment

This project can be deployed to any platform that supports Next.js:

| Platform | Command |
|----------|---------|
| **Vercel** (Recommended) | Connect GitHub repo → Auto-deploy |
| **Netlify** | `npm run build` → Deploy `.next` folder |
| **Docker** | Use `next start` with standalone output |

### Vercel Deployment (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click **Deploy** — done!

---

## 📄 License

This project is licensed under the MIT License — feel free to use it for personal or commercial purposes.

---

## 🙏 Acknowledgments

- **Next.js** — React framework by Vercel
- **shadcn/ui** — Beautifully designed components
- **Framer Motion** — Production-ready motion library
- **Tailwind CSS** — Utility-first CSS framework
- **Lucide** — Beautiful open-source icons
- **AI Image Generation** — Menu and gallery imagery

---

<div align="center">

**Built with ❤️ by [Your Name] for Full Stack Web Development — Task 3 (2026)**

[⬆ Back to Top](#-munni-cafe)

</div>
