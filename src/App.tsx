// App.tsx — Main application shell
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import CreativeLab from './components/CreativeLab';
import Skills   from './components/Skills';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SpaceBackground from './components/SpaceBackground';
import { type PortfolioMode } from './components/ModeToggle';
import Acurove  from './components/Acurove';
import MLLab   from './components/MLLab';
import ProductMindset from './components/ProductMindset';

// Scroll-to-top on route change utility
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Scroll-to-top button component
function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-40 w-11 h-11 rounded-xl
        flex items-center justify-center
        bg-gradient-to-br from-violet-600 to-violet-500
        shadow-xl shadow-violet-500/30
        transition-all duration-300 focus:outline-none cursor-pointer
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [portfolioMode, setPortfolioMode] = useState<PortfolioMode>(() => {
    const saved = localStorage.getItem('portfolio-mode');
    return (saved as PortfolioMode) || 'all';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-mode', portfolioMode);
  }, [portfolioMode]);

  return (
    <Router>
      <ScrollToTopOnNavigate />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className="min-h-screen relative overflow-hidden bg-[#05070a]">
        {/* Living Space Background Grid & Stars */}
        <SpaceBackground />

        {/* Fixed navigation */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} mode={portfolioMode} setMode={setPortfolioMode} />

        {/* Page sections */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero mode={portfolioMode} setMode={setPortfolioMode} />
                <About mode={portfolioMode} />
                
                {portfolioMode !== 'creative' && <MLLab />}
                {portfolioMode !== 'creative' && <Projects />}
                {portfolioMode !== 'creative' && <ProductMindset />}
                {portfolioMode !== 'technical' && <CreativeLab />}
                
                <Skills mode={portfolioMode} />
                <Contact />
              </>
            } />
            <Route path="/acurove" element={<Acurove isDark={isDark} toggleTheme={toggleTheme} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Utility: scroll-to-top FAB */}
        <ScrollToTop />
      </div>
    </Router>
  );
}
