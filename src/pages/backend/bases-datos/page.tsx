import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatIsDatabaseSection from './components/WhatIsDatabaseSection';
import ArchitectureSection from './components/ArchitectureSection';
import DatabaseTypesSection from './components/DatabaseTypesSection';
import WebDevelopmentSection from './components/WebDevelopmentSection';
import RealWorldExamplesSection from './components/RealWorldExamplesSection';
import CRUDSection from './components/CRUDSection';
import DatabaseUseCasesSection from './components/DatabaseUseCasesSection';
import ERDiagramTutorialSection from './components/ERDiagramTutorialSection';

export default function BasesDatosPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section - PostgreSQL Style */}
      <section className="relative pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#336791] via-[#274e6d] to-[#336791] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#dbe9f4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff9900] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded mb-4 sm:mb-6 border border-white/20">
            <i className="ri-database-2-line text-white text-base sm:text-xl"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Fundamentos de Bases de Datos</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Bases de Datos<br />en Desarrollo Web
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#dbe9f4] max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Comprende cómo almacenar, organizar y gestionar la información que da vida a tus aplicaciones web.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[#dbe9f4] text-xs sm:text-sm px-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-table-line text-[#ff9900]"></i>
              <span>Tablas y Registros</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-server-line text-white"></i>
              <span>SGBD</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-code-s-slash-line text-[#ff9900]"></i>
              <span>SQL</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-link text-white"></i>
              <span>Integración Backend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <WhatIsDatabaseSection />
      <ArchitectureSection />
      <DatabaseTypesSection />
      <WebDevelopmentSection />
      <RealWorldExamplesSection />
      <CRUDSection />
      <DatabaseUseCasesSection />
      <ERDiagramTutorialSection />

      <Footer />
    </div>
  );
}
