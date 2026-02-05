import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TeamRolesSection from './components/TeamRolesSection';
import CeremoniesSection from './components/CeremoniesSection';
import ArtifactsSection from './components/ArtifactsSection';
import WhySection from './components/WhySection';

export default function MetodologiasAgiles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="flex items-center space-x-2 text-[#1b3d70] hover:text-[#bb8800] transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-semibold text-sm">Volver al Inicio</span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-12 w-auto"
            />
            <div className="text-[#1b3d70]">
              <div className="font-bold text-base leading-tight">Metodologías Ágiles</div>
              <div className="text-xs opacity-70">Scrum Framework</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <PhilosophySection />
        <TeamRolesSection />
        <CeremoniesSection />
        <ArtifactsSection />
        <WhySection />
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#1b3d70] text-white rounded-full shadow-lg hover:bg-[#bb8800] transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 z-40"
        aria-label="Volver arriba"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </div>
  );
}
