export default function ArtifactsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#1b3d70] mb-4">
            Los Artefactos de Scrum
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
            Los elementos tangibles que representan el trabajo y el valor
          </p>
          <div className="w-24 h-1 bg-[#7dd3c0] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Product Backlog */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#7dd3c0]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7dd3c0] to-[#5fb8a6] rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <i className="ri-file-list-3-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Product Backlog
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center mb-6">
              La lista maestra de todo lo que el producto necesita (ordenada por importancia).
            </p>
            <div className="bg-[#7dd3c0]/10 rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 text-[#1b3d70] text-xs font-semibold">
                <i className="ri-arrow-down-line"></i>
                <span>Prioridad Descendente</span>
              </div>
            </div>
          </div>

          {/* Sprint Backlog */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#1b3d70]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1b3d70] to-[#2a5490] rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
              <i className="ri-task-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Sprint Backlog
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center mb-6">
              Las tareas específicas elegidas para el Sprint actual.
            </p>
            <div className="bg-[#1b3d70]/10 rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 text-[#1b3d70] text-xs font-semibold">
                <i className="ri-focus-3-line"></i>
                <span>Sprint Actual</span>
              </div>
            </div>
          </div>

          {/* Incremento */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#bb8800]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#bb8800] to-[#d49a00] rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <i className="ri-checkbox-circle-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Incremento
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center mb-6">
              La suma de todo el trabajo terminado durante el Sprint que ya es funcional y 'usable'.
            </p>
            <div className="bg-[#bb8800]/10 rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 text-[#1b3d70] text-xs font-semibold">
                <i className="ri-rocket-line"></i>
                <span>Listo para Usar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#7dd3c0] rounded-full flex items-center justify-center mb-3">
                  <i className="ri-file-list-3-line text-3xl text-white"></i>
                </div>
                <span className="text-sm font-semibold text-[#1b3d70]">Product Backlog</span>
              </div>

              <div className="flex items-center">
                <i className="ri-arrow-right-line text-3xl text-[#7dd3c0] hidden md:block"></i>
                <i className="ri-arrow-down-line text-3xl text-[#7dd3c0] md:hidden"></i>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#1b3d70] rounded-full flex items-center justify-center mb-3">
                  <i className="ri-task-line text-3xl text-white"></i>
                </div>
                <span className="text-sm font-semibold text-[#1b3d70]">Sprint Backlog</span>
              </div>

              <div className="flex items-center">
                <i className="ri-arrow-right-line text-3xl text-[#1b3d70] hidden md:block"></i>
                <i className="ri-arrow-down-line text-3xl text-[#1b3d70] md:hidden"></i>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#bb8800] rounded-full flex items-center justify-center mb-3">
                  <i className="ri-checkbox-circle-line text-3xl text-white"></i>
                </div>
                <span className="text-sm font-semibold text-[#1b3d70]">Incremento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
