import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import WhatIsORMSection from './components/WhatIsORMSection';
import DatabaseConceptsSection from './components/DatabaseConceptsSection';
import WhatIsTypeORMSection from './components/WhatIsTypeORMSection';
import EntitiesSection from './components/EntitiesSection';
import RelationsSection from './components/RelationsSection';
import OtherConceptsSection from './components/OtherConceptsSection';

export default function ORMPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#0f1419]">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a78bfa] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-white/10">
            <i className="ri-database-2-line text-[#00d4ff] text-base sm:text-xl"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Object-Relational Mapping</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            TypeORM: Conectando<br />Objetos con Bases de Datos
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Aprende a usar TypeORM para mapear tus clases TypeScript directamente a tablas de base de datos, eliminando la necesidad de escribir SQL manualmente.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm px-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-code-box-line text-[#00d4ff]"></i>
              <span>Entities & Decoradores</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-links-line text-[#a78bfa]"></i>
              <span>Relaciones</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-database-line text-[#fbbf24]"></i>
              <span>Repositories</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <i className="ri-git-merge-line text-[#f59e0b]"></i>
              <span>Migrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <WhatIsORMSection />
      <DatabaseConceptsSection />
      <WhatIsTypeORMSection />
      <EntitiesSection />
      <RelationsSection />
      <OtherConceptsSection />

      <Footer />
    </div>
  );
}
