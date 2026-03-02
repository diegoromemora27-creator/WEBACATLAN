
import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import ReglasSection from './components/ReglasSection';
import TiposPreguntaSection from './components/TiposPreguntaSection';
import ConceptosSection from './components/ConceptosSection';
import ExamenesListSection from './components/ExamenesListSection';
import ConsejosSection from './components/ConsejosSection';
import PreguntasEjemploSection from './components/PreguntasEjemploSection';

export default function ExamenesPage() {
  const [activeSection] = useState('');

  return (
    <div className="min-h-screen" style={{ background: '#FAFAF8' }}>
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <ExamenesListSection />
      <TiposPreguntaSection />
      <ConceptosSection />
        <PreguntasEjemploSection />
      <ReglasSection />
      <ConsejosSection />
      <Footer />
    </div>
  );
}
