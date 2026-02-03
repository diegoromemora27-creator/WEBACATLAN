
import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import ModelosServicioSection from './components/ModelosServicioSection';
import TiposNubeSection from './components/TiposNubeSection';
import EscalabilidadSection from './components/EscalabilidadSection';
import AlmacenamientoSection from './components/AlmacenamientoSection';
import SeguridadSection from './components/SeguridadSection';

export default function CloudComputingPage() {
  const [activeSection, setActiveSection] = useState('');

  // Google colors for "Cloud Computing" text
  const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#4285F4', '#34A853', '#EA4335'];
  
  const renderGoogleText = (text: string) => {
    let colorIndex = 0;
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index}>&nbsp;</span>;
      }
      const color = googleColors[colorIndex % googleColors.length];
      colorIndex++;
      return (
        <span key={index} style={{ color }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#F8F9FA] via-[#E8EAED] to-[#F1F3F4] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#4285F4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#34A853] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-[#FBBC04] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-gray-200 shadow-sm">
            <i className="ri-cloud-line text-[#4285F4] text-lg sm:text-xl"></i>
            <span className="text-gray-700 text-xs sm:text-sm font-medium">Google Cloud Platform</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-800">Introducción a</span><br />
            <span className="inline-block">{renderGoogleText('Cloud Computing')}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Descubre los fundamentos de la computación en la nube: modelos de servicio, tipos de nube, escalabilidad y seguridad para aplicaciones modernas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-600 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200">
              <i className="ri-server-line text-[#4285F4]"></i>
              <span>IaaS, PaaS, SaaS</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200">
              <i className="ri-cloud-fill text-[#EA4335]"></i>
              <span>Nube Pública/Privada/Híbrida</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200">
              <i className="ri-line-chart-line text-[#FBBC04]"></i>
              <span>Escalabilidad Automática</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200">
              <i className="ri-shield-check-line text-[#34A853]"></i>
              <span>Seguridad IAM & VPC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ModelosServicioSection />
      <TiposNubeSection />
      <EscalabilidadSection />
      <AlmacenamientoSection />
      <SeguridadSection />

      <Footer />
    </div>
  );
}
