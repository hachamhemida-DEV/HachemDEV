# 🚀 Hachem's Portfolio

A modern, responsive portfolio website built with React and Vite, featuring stunning animations, dark/light theme support, and bilingual content (English/Arabic).

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.26-FF0055?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **🌙 Dark/Light Theme** - Toggle between dark and light modes with seamless transitions
- **🌐 Bilingual Support** - Full English and Arabic language support with RTL layout
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **🎭 Smooth Animations** - Powered by Framer Motion for engaging user experience
- **🎆 Animated Backgrounds** - Dynamic gradient orbs and particle effects

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19, JSX |
| **Build Tool** | Vite 7 |
| **Styling** | TailwindCSS 4, CSS3 |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **Deployment** | GitHub Pages |

## 📂 Project Structure

```
portfio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components
│   │   │   ├── AnimatedGradientBackground.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── ScrollReveal.jsx
│   │   │   └── SectionWrapper.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── context/         # React context providers
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/            # Static data files
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hachamhemida-DEV/HachemDEV.git
   cd HachemDEV
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment

This portfolio is deployed on **GitHub Pages**. 

### Deploy Manually

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to GitHub Pages or use the automated workflow.

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching introduction with animated background |
| **About** | Personal information and background |
| **Skills** | Technical skills showcase with visual indicators |
| **Projects** | Portfolio of completed projects with live demos |
| **Contact** | Contact form and social media links |

## 🎨 Customization

### Changing Theme Colors

Edit the gradient colors in `src/App.jsx` and `src/index.css` to customize the color scheme.

### Adding Projects

Add new projects in `src/data/projects.js`:

```javascript
{
  id: 'project-id',
  title: { en: 'Project Title', ar: 'عنوان المشروع' },
  description: { en: 'Description', ar: 'الوصف' },
  image: '/path/to/image.png',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://...'
}
```

### Adding Skills

Add new skills in `src/data/skills.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Hachem Hemida**

- 🌐 Website: [Portfolio](https://hachamhemida-dev.github.io/HachemDEV/)
- 💼 GitHub: [@hachamhemida-DEV](https://github.com/hachamhemida-DEV)

---

<p align="center">
  Made with ❤️ by Hachem Hemida
</p>
