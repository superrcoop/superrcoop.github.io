# Jordan Cooper — Systems & Creative Engineer Portfolio

Modern, high-performance portfolio landing page for [Jordan Cooper](https://superrcoop.net) (`@superrcoop`), built with React 18, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

Deployed live on GitHub Pages: **[superrcoop.github.io](https://superrcoop.github.io/)**

## 🚀 Features

- **Dark Minimal Theme**: Deep `#0C0C0C` palette with Google Fonts **Kanit** (weights 300–900).
- **Hero Section**:
  - Full-viewport typography with gradient title (`.hero-heading`).
  - Interactive magnetic cursor tracking on portrait (`Magnet` component).
  - Multi-stop gradient CTA pill button.
- **Marquee Section**:
  - Dual horizontal scroll-linked image carousels with 21 animated 3D previews.
  - Scroll-linked velocity & passive transform performance.
- **About Me Section**:
  - Full-height centered showcase with floating decorative 3D assets.
  - Character-by-character scroll-driven opacity reveal animation.
- **Services Section**:
  - High-contrast white background with rounded top transitions.
  - 5 core systems engineering competencies: Cloud Architecture, Full-Stack Engineering, AI & Autonomous Agents, Distributed Systems, and Creative Tech & Web3.
- **Projects Section**:
  - Sticky-stacking card layout with scroll-driven scale transforms.
  - Featured GitHub projects:
    - [Repyt AI Word Game](https://github.com/superrcoop/repyt)
    - [Pixel Run Game](https://github.com/superrcoop/pixel-run-game)
    - [CrackerJack](https://github.com/superrcoop/crackerjack)
- **Automated CI/CD**:
  - `.github/workflows/deploy.yml` triggers on push to `master`, building and deploying directly to GitHub Pages via GitHub Actions.

## 🛠️ Tech Stack

- **Framework**: React 18 & TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Typography**: Google Fonts Kanit

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/superrcoop/superrcoop.github.io.git
cd superrcoop.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Production Build

```bash
npm run build
npm run preview
```
