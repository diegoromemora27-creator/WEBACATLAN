import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import IntroduccionSection from './components/IntroduccionSection';
import ConceptosEsencialesSection from './components/ConceptosEsencialesSection';

export default function DevOpsPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#F8F9FA] via-[#E8EAED] to-[#F1F3F4] overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#4285F4]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#1a73e8]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#4285F4]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-gray-200 shadow-sm">
            <i className="ri-cloud-line text-[#4285F4] text-lg sm:text-xl"></i>
            <span className="text-gray-700 text-xs sm:text-sm font-medium">DevOps & Deployment</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-800">DevOps, </span>
            <span className="text-[#1a73e8]">Containerización</span>
            <br />
            <span className="text-gray-800">& Deployment</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Integra desarrollo y operaciones para entregar software de forma rápida, confiable y automatizada mediante prácticas modernas de CI/CD.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <i className="ri-refresh-line text-[#4285F4]"></i>
              <span className="text-gray-700 text-xs sm:text-sm">Integración Continua</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <i className="ri-rocket-line text-[#0DB7ED]"></i>
              <span className="text-gray-700 text-xs sm:text-sm">Entrega Continua</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <i className="ri-shield-check-line text-[#34A853]"></i>
              <span className="text-gray-700 text-xs sm:text-sm">DevSecOps</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <i className="ri-server-line text-[#FBBC04]"></i>
              <span className="text-gray-700 text-xs sm:text-sm">Infraestructura como Código</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <IntroduccionSection />
      <ConceptosEsencialesSection />

      <Footer />
    </div>
  );
}
