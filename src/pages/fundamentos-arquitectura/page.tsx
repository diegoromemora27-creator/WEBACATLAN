import { useState } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import AmazonSection from './components/AmazonSection';
import NetflixSection from './components/NetflixSection';
import SpotifySection from './components/SpotifySection';
import FacebookSection from './components/FacebookSection';
import TikTokSection from './components/TikTokSection';

export default function FundamentosArquitecturaPage() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#1b3d70] via-[#2a5490] to-[#1b3d70] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#bb8800] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <i className="ri-building-2-line text-[#bb8800] text-xl"></i>
            <span className="text-white text-sm font-medium">Fundamentos & Arquitectura de Software</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Aprende con los Gigantes<br />de la Tecnología
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Descubre cómo Amazon, Netflix, Spotify, Facebook y TikTok aplican principios de arquitectura de software para crear experiencias que usan millones de personas cada día.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#bb8800]"></i>
              <span>Casos Reales</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#bb8800]"></i>
              <span>Ejemplos Prácticos</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-[#bb8800]"></i>
              <span>Principios SOLID</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <AmazonSection />
      <NetflixSection />
      <SpotifySection />
      <FacebookSection />
      <TikTokSection />

      <Footer />
    </div>
  );
}
