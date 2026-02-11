
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
            <span className="block mt-2 md:mt-3 text-[#10B981]">Fundamentos</span>
          </h1>

          {/* Descripción */}
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            El "plano" de una ciudad digital: organiza qué partes existen, cómo se conectan y con qué tecnología se construyen
          </p>

          {/* Conceptos clave */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm px-4">
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <span className="text-white/70">Modularidad</span>
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <span className="text-white/70">Capas</span>
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <span className="text-white/70">Escalabilidad</span>
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <span className="text-white/70">Mantenibilidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
