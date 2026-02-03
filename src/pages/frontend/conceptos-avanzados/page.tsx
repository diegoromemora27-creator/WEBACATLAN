
import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import WhatIsFrameworkSection from './components/WhatIsFrameworkSection';
import ApproachesSection from './components/ApproachesSection';
import BestPracticesSection from './components/BestPracticesSection';
import BEMSection from './components/BEMSection';
import SemanticHTMLSection from './components/SemanticHTMLSection';
import OrganizationSection from './components/OrganizationSection';
import FrameworkIntegrationSection from './components/FrameworkIntegrationSection';

export default function ConceptosAvanzadosPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    // Guard against environments where `window` might be undefined (e.g., SSR)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e2e]">
      <Navbar activeSection="" />
      <HeroSection />
      <WhatIsFrameworkSection />
      <ApproachesSection />
      <BestPracticesSection />
      <BEMSection />
      <SemanticHTMLSection />
      <OrganizationSection />
      <FrameworkIntegrationSection />
      <Footer />
    </div>
  );
}
