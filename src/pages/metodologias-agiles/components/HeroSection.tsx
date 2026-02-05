export default function HeroSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1b3d70] to-[#2a5490]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Metodologías Ágiles & Scrum
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto font-light">
            El Contraste Visual
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Waterfall Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-lock-line text-4xl text-red-600"></i>
            </div>
            <h3 className="font-bold text-2xl text-[#1b3d70] mb-4 text-center">
              Método Tradicional (Waterfall)
            </h3>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p className="flex items-start space-x-2">
                <i className="ri-close-circle-line text-red-500 text-lg mt-0.5 flex-shrink-0"></i>
                <span>Planear cada clavo y ladrillo durante meses</span>
              </p>
              <p className="flex items-start space-x-2">
                <i className="ri-close-circle-line text-red-500 text-lg mt-0.5 flex-shrink-0"></i>
                <span>Empezar a construir sin retroalimentación</span>
              </p>
              <p className="flex items-start space-x-2">
                <i className="ri-close-circle-line text-red-500 text-lg mt-0.5 flex-shrink-0"></i>
                <span>No dejar que el dueño entre hasta que esté terminada</span>
              </p>
              <p className="flex items-start space-x-2">
                <i className="ri-close-circle-line text-red-500 text-lg mt-0.5 flex-shrink-0"></i>
                <span>Si al final no le gusta el color de la sala, ¡lástima!</span>
              </p>
            </div>
          </div>

          {/* Agile & Scrum Card */}
          <div className="bg-gradient-to-br from-[#7dd3c0] to-[#5fb8a6] rounded-2xl p-8 shadow-xl">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-building-4-line text-4xl text-[#1b3d70]"></i>
            </div>
            <h3 className="font-bold text-2xl text-white mb-4 text-center">
              Agile & Scrum
            </h3>
            <div className="space-y-4 text-white text-sm leading-relaxed">
              <p className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-white text-lg mt-0.5 flex-shrink-0"></i>
                <span>Construcción por módulos funcionales</span>
              </p>
              <p className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-white text-lg mt-0.5 flex-shrink-0"></i>
                <span>Retroalimentación constante del cliente</span>
              </p>
              <p className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-white text-lg mt-0.5 flex-shrink-0"></i>
                <span>Permitir cambios de opinión sobre la marcha</span>
              </p>
              <p className="flex items-start space-x-2">
                <i className="ri-checkbox-circle-line text-white text-lg mt-0.5 flex-shrink-0"></i>
                <span>Mejorar continuamente el producto</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/90 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed italic">
            "Agile y Scrum nacieron para evitar ese desastre, permitiendo cambiar de opinión y mejorar sobre la marcha."
          </p>
        </div>
      </div>
    </section>
  );
}
