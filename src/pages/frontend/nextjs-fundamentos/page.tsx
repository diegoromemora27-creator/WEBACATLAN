import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import ReactConceptsSection from './components/ReactConceptsSection';
import WhatIsNextSection from './components/WhatIsNextSection';
import CoreConceptsSection from './components/CoreConceptsSection';
import AdvancedConceptsSection from './components/AdvancedConceptsSection';

export default function NextJSFundamentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section with Radial Glow */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#333] rounded-full mb-6">
              <i className="ri-reactjs-line text-2xl text-blue-400"></i>
              <span className="text-sm text-gray-400">Framework React</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Next.js Fundamentos
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              El framework de React para producción. Aprende los conceptos fundamentales 
              que hacen de Next.js la mejor opción para aplicaciones web modernas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-32">
        <ReactConceptsSection />
        <WhatIsNextSection />
        <CoreConceptsSection />
        <AdvancedConceptsSection />
      </div>

      <Footer />
    </div>
  );
}
