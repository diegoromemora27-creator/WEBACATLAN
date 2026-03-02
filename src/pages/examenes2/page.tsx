
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import ExamenDetalleSection from './components/ExamenDetalleSection';
import TiposPreguntaSection from './components/TiposPreguntaSection';
import ConceptosSection from './components/ConceptosSection';
import ReglasSection from './components/ReglasSection';
import ConsejosSection from './components/ConsejosSection';

export default function Examenes2Page() {
  return (
    <div className="min-h-screen" style={{ background: '#000820' }}>
      <Navbar activeSection="" />
      <HeroSection />
      <ExamenDetalleSection />
      <TiposPreguntaSection />
      <ConceptosSection />
      <ReglasSection />
      <ConsejosSection />
      <Footer />
    </div>
  );
}
