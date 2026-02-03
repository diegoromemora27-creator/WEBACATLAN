import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatIsNestSection from './components/WhatIsNestSection';
import ModulesSection from './components/ModulesSection';
import ControllersSection from './components/ControllersSection';
import ProvidersSection from './components/ProvidersSection';
import DependencyInjectionSection from './components/DependencyInjectionSection';
import FlowSummarySection from './components/FlowSummarySection';

export default function NestJSFundamentosPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#0B1120] via-[#1a1f35] to-[#0B1120] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E0234E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E0234E] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
            <i className="ri-nest-line text-[#E0234E] text-xl"></i>
            <span className="text-white text-sm font-medium">NestJS Framework</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fundamentos de<br />NestJS
          </h1>
          
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-8">
            Aprende la arquitectura modular de NestJS: Módulos, Controladores, Servicios e Inyección de Dependencias para construir aplicaciones escalables.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-[#94A3B8] text-sm">
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#E0234E]"></i>
              <span>Módulos</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#E0234E]"></i>
              <span>Controladores</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#E0234E]"></i>
              <span>Servicios</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#E0234E]"></i>
              <span>Inyección de Dependencias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <WhatIsNestSection />
      <ModulesSection />
      <ControllersSection />
      <ProvidersSection />
      <DependencyInjectionSection />
      <FlowSummarySection />

      <Footer />
    </div>
  );
}
