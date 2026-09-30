import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { DevAssistant } from './components/dev-assistant/DevAssistant';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { CurrentFocus } from './pages/CurrentFocus';
import { Contact } from './pages/Contact';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { GlassBackground } from './components/ui/GlassBackground';
import { useTheme } from './hooks/useTheme';
import './index.css';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <GlassBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <div className="py-20 md:py-28 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <DevAssistant id="dev-assistant" />
          </div>
        </div>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CurrentFocus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
