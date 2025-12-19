import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main app content with theme awareness
function AppContent() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        relative min-h-screen transition-colors duration-300
        ${darkMode ? 'bg-[#0B0B0B] text-white' : 'bg-[#FAFAFA] text-[#1A1A2E]'}
      `}
    >
      {/* Animated Background - Theme Aware */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-500"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Floating gradient orbs */}
        <div
          className={`
            absolute w-[600px] h-[600px] rounded-full blur-3xl
            transition-all duration-500
            ${darkMode ? 'opacity-30' : 'opacity-20'}
          `}
          style={{
            background: darkMode
              ? 'radial-gradient(circle, rgba(225, 6, 0, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animation: 'float-slow 20s ease-in-out infinite'
          }}
        />
        <div
          className={`
            absolute w-[500px] h-[500px] rounded-full blur-3xl
            transition-all duration-500
            ${darkMode ? 'opacity-20' : 'opacity-15'}
          `}
          style={{
            background: darkMode
              ? 'radial-gradient(circle, rgba(139, 0, 0, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            animation: 'float-slow 25s ease-in-out infinite reverse'
          }}
        />
        <div
          className={`
            absolute w-[400px] h-[400px] rounded-full blur-3xl
            transition-all duration-500
            ${darkMode ? 'opacity-15' : 'opacity-10'}
          `}
          style={{
            background: darkMode
              ? 'radial-gradient(circle, rgba(225, 6, 0, 0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse-slow 15s ease-in-out infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
