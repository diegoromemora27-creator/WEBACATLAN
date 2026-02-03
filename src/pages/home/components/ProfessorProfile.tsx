
import { useState } from 'react';

export default function ProfessorProfile() {
  const [currentCert, setCurrentCert] = useState(0);

  const certifications = [
    { name: 'AWS Architect', icon: 'ri-cloud-line' },
    { name: 'Google AI', icon: 'ri-google-line' },
    { name: 'Oracle Cloud', icon: 'ri-database-2-line' },
    { name: 'IBM AI', icon: 'ri-brain-line' }
  ];

  const nextCert = () => {
    setCurrentCert((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="profesor" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2 relative order-2 md:order-1">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform md:-ml-10 bg-gradient-to-br from-[#1b3d70] to-[#bb8800] h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
                <div className="text-white text-center p-6 sm:p-8">
                  <i className="ri-user-line text-6xl sm:text-8xl md:text-9xl mb-3 sm:mb-4"></i>
                  <p className="text-xl sm:text-2xl font-bold">Diego Romero Mora</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-[#bb8800] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg font-semibold text-xs sm:text-sm whitespace-nowrap">
                Egresado MAC 2022
              </div>
            </div>
          </div>

          <div className="md:col-span-3 relative order-1 md:order-2">
            <div className="absolute -top-8 -left-8 text-[#bb8800]/20 text-7xl sm:text-9xl font-serif hidden md:block">
              "
            </div>
            
            <div className="relative z-10">
              <p className="text-[#bb8800] text-xs font-bold tracking-widest mb-2 sm:mb-3 uppercase">
                Acerca del Profesor
              </p>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b3d70] mb-3 sm:mb-4">
                Diego Romero Mora
              </h2>
              
              <div className="w-16 sm:w-20 h-1 bg-[#bb8800] mb-4 sm:mb-6"></div>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Egresado de la carrera de Matemáticas Aplicadas y Computación en 2022, 
                con <strong className="text-[#1b3d70]">4 años de experiencia</strong> en el desarrollo 
                de aplicaciones web empresariales y soluciones tecnológicas innovadoras.
              </p>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Especializado en arquitecturas modernas, metodologías ágiles y tecnologías 
                de vanguardia. Comprometido con la formación de profesionales capaces de 
                enfrentar los desafíos del desarrollo web contemporáneo.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <h3 className="text-[#1b3d70] font-bold text-base sm:text-lg mb-4">Certificaciones</h3>
                <div className="relative">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                    <button
                      onClick={prevCert}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1b3d70] text-white rounded-full flex items-center justify-center hover:bg-[#2a5490] transition-colors cursor-pointer flex-shrink-0"
                    >
                      <i className="ri-arrow-left-s-line text-lg sm:text-xl"></i>
                    </button>
                    
                    <div className="flex space-x-2 sm:space-x-4 overflow-hidden">
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className={`w-20 h-16 sm:w-28 md:w-32 sm:h-20 md:h-24 bg-white rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300 flex-shrink-0 ${
                            index === currentCert ? 'scale-105 sm:scale-110 border-2 border-[#bb8800]' : 'opacity-50 hidden sm:flex'
                          }`}
                        >
                          <i className={`${cert.icon} text-xl sm:text-2xl md:text-3xl text-[#1b3d70] mb-1 sm:mb-2`}></i>
                          <span className="text-[10px] sm:text-xs font-semibold text-gray-700 text-center px-1 sm:px-2">
                            {cert.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={nextCert}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1b3d70] text-white rounded-full flex items-center justify-center hover:bg-[#2a5490] transition-colors cursor-pointer flex-shrink-0"
                    >
                      <i className="ri-arrow-right-s-line text-lg sm:text-xl"></i>
                    </button>
                  </div>
                  
                  {/* Mobile indicator dots */}
                  <div className="flex justify-center space-x-2 mt-3 sm:hidden">
                    {certifications.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentCert ? 'bg-[#bb8800]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#0077b5] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                <i className="ri-linkedin-box-fill text-lg sm:text-xl"></i>
                <span>Conectar en LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
