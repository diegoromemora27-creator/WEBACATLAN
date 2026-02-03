import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HttpProtocolSection from './components/HttpProtocolSection';
import RestfulDesignSection from './components/RestfulDesignSection';
import DtosSection from './components/DtosSection';
import SwaggerSection from './components/SwaggerSection';
import SecuritySection from './components/SecuritySection';

export default function BackendPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#10b981] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#3b82f6] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/10">
            <i className="ri-server-line text-[#10b981] text-lg sm:text-xl"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Backend Development</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            El Corazón de tu<br />Aplicación Web
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
            Aprende a construir APIs RESTful robustas, seguras y escalables. Desde el protocolo HTTP hasta la documentación con Swagger.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#10b981]"></i>
              <span>Protocolo HTTP</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#3b82f6]"></i>
              <span>Diseño RESTful</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#f59e0b]"></i>
              <span>Validación DTOs</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-checkbox-circle-fill text-[#ef4444]"></i>
              <span>Seguridad JWT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <HttpProtocolSection />
      <RestfulDesignSection />
      <DtosSection />
      <SwaggerSection />
      <SecuritySection />

      <Footer />
    </div>
  );
}
