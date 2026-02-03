export default function PhilosophySection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#1b3d70] mb-4">
            Filosofía vs. Marco de Trabajo
          </h2>
          <div className="w-24 h-1 bg-[#7dd3c0] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Agile Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#7dd3c0] rounded-xl flex items-center justify-center mb-6">
              <i className="ri-lightbulb-line text-3xl text-white"></i>
            </div>
            <h3 className="font-bold text-2xl text-[#1b3d70] mb-4">
              ¿Qué es Agile? (La Mentalidad)
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Agile no es una 'receta', es una filosofía. Se basa en entregar valor de forma incremental y rápida.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              En lugar de lanzar un producto gigante en un año, lanzas versiones pequeñas y funcionales cada pocas semanas para obtener retroalimentación constante.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-[#7dd3c0] font-semibold text-sm">
                <i className="ri-mind-map text-lg"></i>
                <span>Filosofía de trabajo</span>
              </div>
            </div>
          </div>

          {/* Scrum Card */}
          <div className="bg-gradient-to-br from-[#1b3d70] to-[#2a5490] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
              <i className="ri-settings-3-line text-3xl text-[#1b3d70]"></i>
            </div>
            <h3 className="font-bold text-2xl text-white mb-4">
              ¿Qué es Scrum? (El Marco de Trabajo)
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Si Agile es la filosofía, Scrum es el reglamento del deporte. Es un marco de trabajo diseñado para equipos que enfrentan problemas complejos.
            </p>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Se basa en tres pilares:
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-4 py-3">
                <div className="w-8 h-8 bg-[#7dd3c0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <span className="text-white font-medium text-sm">Transparencia</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-4 py-3">
                <div className="w-8 h-8 bg-[#7dd3c0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <span className="text-white font-medium text-sm">Inspección</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-4 py-3">
                <div className="w-8 h-8 bg-[#7dd3c0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <span className="text-white font-medium text-sm">Adaptación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
