export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-[#3178C6] via-[#235A97] to-[#1E4A7A]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <i className="ri-code-s-slash-line text-white text-base sm:text-lg"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Conceptos de Código</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            TypeScript
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Un superset de JavaScript que añade tipado estático, mejor soporte para orientación a objetos y se compila a JavaScript "normal"
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
              <i className="ri-shield-check-line text-white text-lg sm:text-xl"></i>
              <span className="text-white text-xs sm:text-sm font-medium">Tipado Estático</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
              <i className="ri-javascript-line text-white text-lg sm:text-xl"></i>
              <span className="text-white text-xs sm:text-sm font-medium">Superset de JS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
              <i className="ri-code-box-line text-white text-lg sm:text-xl"></i>
              <span className="text-white text-xs sm:text-sm font-medium">POO Completo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
