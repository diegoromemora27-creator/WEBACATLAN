export default function WhatIsOWASPSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            ¿Qué es OWASP?
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-star-line text-2xl sm:text-3xl text-[#CCFF00]"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Open Web Application Security Project
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#D1D1D1] leading-relaxed">
                OWASP es una <span className="text-[#CCFF00] font-semibold">comunidad global sin fines de lucro</span> dedicada a mejorar la seguridad del software, especialmente aplicaciones web, mediante recursos gratuitos, herramientas y listas como el <span className="text-[#CCFF00] font-semibold">Top 10 de riesgos de seguridad</span>.
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-[#D1D1D1] leading-relaxed mb-6">
            OWASP ofrece guías, pruebas y educación para prevenir vulnerabilidades comunes en el desarrollo de software. Su <span className="text-[#CCFF00] font-semibold">OWASP Top 10</span> resume los riesgos más críticos, actualizado periódicamente (versión 2021 incluye los temas que mencionas, evolucionando en 2025).
          </p>
        </div>

        {/* Características principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-5 sm:p-6 hover:border-[#CCFF00]/50 transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-book-open-line text-xl sm:text-2xl text-[#CCFF00]"></i>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Recursos Gratuitos</h4>
            <p className="text-xs sm:text-sm text-[#D1D1D1]">
              Documentación, guías y herramientas de código abierto para toda la comunidad
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-5 sm:p-6 hover:border-[#CCFF00]/50 transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-list-ordered text-xl sm:text-2xl text-[#CCFF00]"></i>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Top 10 Actualizado</h4>
            <p className="text-xs sm:text-sm text-[#D1D1D1]">
              Lista de los 10 riesgos de seguridad más críticos, actualizada periódicamente
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-5 sm:p-6 hover:border-[#CCFF00]/50 transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-global-line text-xl sm:text-2xl text-[#CCFF00]"></i>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Comunidad Global</h4>
            <p className="text-xs sm:text-sm text-[#D1D1D1]">
              Miles de profesionales colaborando para mejorar la seguridad del software
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-5 sm:p-6 hover:border-[#CCFF00]/50 transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-tools-line text-xl sm:text-2xl text-[#CCFF00]"></i>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Herramientas de Testing</h4>
            <p className="text-xs sm:text-sm text-[#D1D1D1]">
              Software especializado para detectar y prevenir vulnerabilidades
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-5 sm:p-6 hover:border-[#CCFF00]/50 transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-graduation-cap-line text-xl sm:text-2xl text-[#CCFF00]"></i>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Educación Continua</h4>
            <p className="text-xs sm:text-sm text-[#D1D1D1]">
              Capacitación y certificaciones para desarrolladores y profesionales
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-5 sm:p-6 hover:border-[#CCFF00]/50 transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-shield-check-line text-xl sm:text-2xl text-[#CCFF00]"></i>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-2">Mejores Prácticas</h4>
            <p className="text-xs sm:text-sm text-[#D1D1D1]">
              Estándares y metodologías probadas para desarrollo seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}