import { useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import HeroSection from './components/HeroSection';
import WhatIsHTMLSection from './components/WhatIsHTMLSection';
import TagsSection from './components/TagsSection';
import AttributesSection from './components/AttributesSection';
import BasicStructureSection from './components/BasicStructureSection';
import CommonTagsSection from './components/CommonTagsSection';

export default function HTMLPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e2e]">
      <Navbar activeSection="" />
      <HeroSection />
      <WhatIsHTMLSection />
      <TagsSection />
      <AttributesSection />
      <BasicStructureSection />
      <CommonTagsSection />
      <Footer />
    </div>
  );
}
