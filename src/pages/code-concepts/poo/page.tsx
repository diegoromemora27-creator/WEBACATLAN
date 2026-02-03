import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import PillaresSection from './components/PillaresSection';
import ConceptosClaveSection from './components/ConceptosClaveSection';
import EjemploSection from './components/EjemploSection';

export default function POO() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar activeSection="" />
      
      <HeroSection />
      <PillaresSection />
      <ConceptosClaveSection />
      <EjemploSection />
      
      <Footer />
    </div>
  );
}
