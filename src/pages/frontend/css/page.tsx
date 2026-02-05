import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import WhatIsCSSSection from './components/WhatIsCSSSection';
import SyntaxSection from './components/SyntaxSection';
import SelectorsSection from './components/SelectorsSection';
import ApplicationMethodsSection from './components/ApplicationMethodsSection';
import BoxModelSection from './components/BoxModelSection';
import CommonPropertiesSection from './components/CommonPropertiesSection';
import ModernLayoutSection from './components/ModernLayoutSection';
import ResponsiveSection from './components/ResponsiveSection';
import AnimationsSection from './components/AnimationsSection';

export default function CSSPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e2e]">
      <Navbar activeSection="" />
      <HeroSection />
      <WhatIsCSSSection />
      <SyntaxSection />
      <SelectorsSection />
      <ApplicationMethodsSection />
      <BoxModelSection />
      <CommonPropertiesSection />
      <ModernLayoutSection />
      <ResponsiveSection />
      <AnimationsSection />
      <Footer />
    </div>
  );
}
