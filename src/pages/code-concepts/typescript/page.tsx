import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import CaracteristicasSection from './components/CaracteristicasSection';
import SintaxisBasicaSection from './components/SintaxisBasicaSection';
import EstructurasAvanzadasSection from './components/EstructurasAvanzadasSection';
import DiferenciasJSSection from './components/DiferenciasJSSection';

export default function TypeScript() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar activeSection="" />
      
      <HeroSection />
      <CaracteristicasSection />
      <SintaxisBasicaSection />
      <EstructurasAvanzadasSection />
      <DiferenciasJSSection />
      
      <Footer />
    </div>
  );
}
