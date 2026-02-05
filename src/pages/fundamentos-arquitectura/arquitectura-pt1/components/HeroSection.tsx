
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1A2332] via-[#2C3E50] to-[#1A2332] py-16 md:py-32 overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 bg-[#10B981]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-5 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <i className="ri-building-line text-[#10B981] text-base md:text-lg"></i>
            <span className="text-white/90 text-xs md:text-sm font-medium">Fundamentos & Arquitectura</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Arquitectura de Software
            <span className="block mt-2 md:mt-3 text-[#10B981]">Parte 1</span>
          </h1>

          {/* Descripción */}
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            Estructura de alto nivel que organiza componentes, define relaciones y cumple requisitos funcionales y no funcionales
          </p>

          {/* Conceptos clave */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-4 md:pt-8">
            <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 bg-white rounded-full shadow-lg">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <i className="ri-stack-line text-[#3B82F6] text-lg md:text-xl"></i>
              </div>
              <span className="text-[#1A2332] font-medium text-xs md:text-sm">Componentes</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 bg-white rounded-full shadow-lg">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <i className="ri-links-line text-[#10B981] text-lg md:text-xl"></i>
              </div>
              <span className="text-[#1A2332] font-medium text-xs md:text-sm">Interfaces</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 bg-white rounded-full shadow-lg">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <i className="ri-share-line text-[#3B82F6] text-lg md:text-xl"></i>
              </div>
              <span className="text-[#1A2332] font-medium text-xs md:text-sm">Conectores</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 bg-white rounded-full shadow-lg">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <i className="ri-scales-3-line text-[#10B981] text-lg md:text-xl"></i>
              </div>
              <span className="text-[#1A2332] font-medium text-xs md:text-sm">Escalabilidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
