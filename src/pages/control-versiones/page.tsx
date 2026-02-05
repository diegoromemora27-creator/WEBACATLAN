import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ConceptsSection from './components/ConceptsSection';
import CommandsSection from './components/CommandsSection';
import TerminalCommandsSection from './components/TerminalCommandsSection';
import WorkflowSection from './components/WorkflowSection';

export default function ControlVersionesPage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'concepts', 'commands', 'terminal', 'workflow'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0d1117] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161b22] border-b border-[#30363d] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.REACT_APP_NAVIGATE('/')}
                className="text-[#58a6ff] hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
              >
                <i className="ri-arrow-left-line text-xl"></i>
                <span className="font-semibold text-sm">Volver al Inicio</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-git-branch-line text-2xl text-[#58a6ff]"></i>
              <span className="font-bold text-lg text-white">Control de Versiones</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="concepts">
          <ConceptsSection />
        </div>
        <div id="commands">
          <CommandsSection />
        </div>
        <div id="terminal">
          <TerminalCommandsSection />
        </div>
        <div id="workflow">
          <WorkflowSection />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#58a6ff] hover:bg-[#1f6feb] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 z-40"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </div>
  );
}
