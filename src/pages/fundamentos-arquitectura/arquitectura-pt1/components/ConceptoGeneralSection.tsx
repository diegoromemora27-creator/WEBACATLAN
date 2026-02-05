
export default function ConceptoGeneralSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#3B82F6]/10 rounded-full">
            <i className="ri-lightbulb-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Concepto General</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            ¿Qué es la Arquitectura de Software?
          </h2>
        </div>

        {/* Definición principal */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            La arquitectura de software es la <strong className="text-[#1A2332]">estructura de alto nivel</strong> que organiza los componentes de un sistema y define sus relaciones, enfocándose en cumplir <strong className="text-[#3B82F6]">requisitos funcionales</strong> (qué hace el sistema) y <strong className="text-[#10B981]">no funcionales</strong> (rendimiento, seguridad, escalabilidad, mantenibilidad).
          </p>
        </div>

        {/* Objetivos */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6 md:mb-12">Objetivos Principales</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Objetivo 1 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg flex-shrink-0">
                  <i className="ri-compass-3-line text-[#3B82F6] text-xl md:text-2xl"></i>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2332]">Guiar el Desarrollo</h4>
                  <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                    Proporciona una hoja de ruta clara para el equipo de desarrollo, permitiendo mitigar riesgos tempranos y tomar decisiones informadas desde el inicio del proyecto.
                  </p>
                </div>
              </div>
            </div>

            {/* Objetivo 2 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0">
                  <i className="ri-plant-line text-[#10B981] text-xl md:text-2xl"></i>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2332]">Facilitar la Evolución</h4>
                  <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                    Permite que el sistema crezca y se adapte a nuevos requisitos sin comprometer su integridad estructural, manteniendo la flexibilidad a largo plazo.
                  </p>
                </div>
              </div>
            </div>

            {/* Objetivo 3 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg flex-shrink-0">
                  <i className="ri-puzzle-line text-[#3B82F6] text-xl md:text-2xl"></i>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2332]">Asegurar Modularidad</h4>
                  <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                    Promueve la separación de responsabilidades en componentes independientes, facilitando el mantenimiento, testing y reutilización del código.
                  </p>
                </div>
              </div>
            </div>

            {/* Objetivo 4 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0">
                  <i className="ri-shield-check-line text-[#10B981] text-xl md:text-2xl"></i>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-lg md:text-xl font-bold text-[#1A2332]">Garantizar Resiliencia</h4>
                  <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
                    Asegura que el sistema pueda recuperarse de fallos y mantener su funcionamiento bajo condiciones adversas, como en arquitecturas serverless que escalan automáticamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo actual */}
        <div className="mt-10 md:mt-16 bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-6 md:p-10 border-l-4 border-[#3B82F6]">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#3B82F6] rounded-lg flex-shrink-0">
              <i className="ri-lightbulb-flash-line text-white text-lg md:text-xl"></i>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h4 className="text-lg md:text-xl font-bold text-[#1A2332]">Ejemplo Actual: Arquitecturas Serverless 2026</h4>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                Las arquitecturas serverless modernas escalan automáticamente con eventos, eliminando la necesidad de gestionar infraestructura. Plataformas como AWS Lambda, Azure Functions y Google Cloud Functions permiten que los sistemas respondan dinámicamente a la demanda, optimizando costos y rendimiento sin intervención manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
