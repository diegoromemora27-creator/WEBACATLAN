import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import ConceptoGeneralSection from './components/ConceptoGeneralSection';
import DiferenciasClaveSection from './components/DiferenciasClaveSection';
import ComponentesBasicosSection from './components/ComponentesBasicosSection';
import InterfacesContratosSection from './components/InterfacesContratosSection';
import ConectoresSection from './components/ConectoresSection';

export default function ArquitecturaPT1Page() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <ConceptoGeneralSection />
      <DiferenciasClaveSection />
      <ComponentesBasicosSection />
      <InterfacesContratosSection />
      <ConectoresSection />
    </div>
  );
}
