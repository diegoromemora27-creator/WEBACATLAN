
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1A2332] via-[#2D3748] to-[#1A2332] py-16 md:py-32 overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-5 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <i className="ri-building-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-white text-xs md:text-sm font-semibold">Arquitecturas de Software</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Patrones y Estilos<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">
              Arquitectónicos Parte 2
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-base md:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed px-2">
            Explora los principales estilos arquitectónicos: monolítica, microservicios, serverless y MVC. 
            Aprende cuándo usar cada uno según tus necesidades de escalabilidad y complejidad.
          </p>

          {/* Badges de conceptos */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 pt-4 md:pt-6">
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-[#3B82F6]/20 backdrop-blur-sm rounded-lg border border-[#3B82F6]/30">
              <span className="text-[#3B82F6] text-xs md:text-sm font-medium">Monolítica</span>
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-[#10B981]/20 backdrop-blur-sm rounded-lg border border-[#10B981]/30">
              <span className="text-[#10B981] text-xs md:text-sm font-medium">Microservicios</span>
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-[#3B82F6]/20 backdrop-blur-sm rounded-lg border border-[#3B82F6]/30">
              <span className="text-[#3B82F6] text-xs md:text-sm font-medium">Serverless</span>
            </div>
            <div className="px-3 md:px-4 py-1.5 md:py-2 bg-[#10B981]/20 backdrop-blur-sm rounded-lg border border-[#10B981]/30">
              <span className="text-[#10B981] text-xs md:text-sm font-medium">MVC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
