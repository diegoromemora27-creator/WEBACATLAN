import { useState } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import MonoliticaSection from './components/MonoliticaSection';
import MicroserviciosSection from './components/MicroserviciosSection';
import ServerlessSection from './components/ServerlessSection';
import MVCSection from './components/MVCSection';
import DecisionSection from './components/DecisionSection';

export default function ArquitecturaPT2Page() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <MonoliticaSection />
      <MicroserviciosSection />
      <ServerlessSection />
      <MVCSection />
      <DecisionSection />
      <Footer />
    </div>
  );
}
