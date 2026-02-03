import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import WhatIsOWASPSection from './components/WhatIsOWASPSection';
import SQLInjectionSection from './components/SQLInjectionSection';
import BrokenAuthSection from './components/BrokenAuthSection';
import SensitiveDataSection from './components/SensitiveDataSection';
import BrokenAccessSection from './components/BrokenAccessSection';
import XSSSection from './components/XSSSection';

export default function SeguridadTestingPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#CCFF00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#CCFF00] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-[#CCFF00]/30">
            <i className="ri-shield-check-line text-[#CCFF00] text-lg sm:text-xl"></i>
            <span className="text-[#D1D1D1] text-xs sm:text-sm font-medium">Security & Testing</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Seguridad, Testing &<br />Calidad del Software
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#D1D1D1] max-w-3xl mx-auto mb-6 sm:mb-8">
            Aprende a proteger tus aplicaciones contra las vulnerabilidades más críticas según OWASP. Desde inyección SQL hasta XSS.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[#D1D1D1] text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-bug-line text-[#CCFF00]"></i>
              <span>SQL Injection</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-lock-unlock-line text-[#CCFF00]"></i>
              <span>Broken Authentication</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-eye-off-line text-[#CCFF00]"></i>
              <span>Data Exposure</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-shield-cross-line text-[#CCFF00]"></i>
              <span>Access Control</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-code-s-slash-line text-[#CCFF00]"></i>
              <span>XSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <WhatIsOWASPSection />
      <SQLInjectionSection />
      <BrokenAuthSection />
      <SensitiveDataSection />
      <BrokenAccessSection />
      <XSSSection />

      <Footer />
    </div>
  );
}
