
export default function ConceptoGeneralSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/10 rounded-full mb-4">
            <i className="ri-lightbulb-line text-[#10B981] text-lg"></i>
            <span className="text-[#10B981] text-sm font-semibold">Concepto Fundamental</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            ¿Qué es Arquitectura de Software?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            La estructura de alto nivel que define cómo se organiza y comunica un sistema
          </p>
        </div>

        {/* Definición Principal */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8 md:mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#10B981]/10 rounded-xl flex-shrink-0">
              <i className="ri-building-4-line text-[#10B981] text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Definición</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Es la <strong>estructura de alto nivel</strong> de un sistema: módulos (servicio de pagos, login, feed, carrito), 
                cómo se comunican entre sí y qué tecnologías usan (web, móvil, base de datos, colas, etc.).
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Se diseña para cumplir <strong>requisitos funcionales</strong> (qué hace: chatear, subir fotos, comprar) 
                y <strong>no funcionales</strong> (rendimiento, seguridad, escalabilidad, mantenibilidad, disponibilidad).
              </p>
            </div>
          </div>
        </div>

        {/* Ejemplo Netflix */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-red-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-red-500 rounded-lg">
              <i className="ri-netflix-fill text-white text-xl md:text-2xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Ejemplo Mental: App tipo Netflix</h3>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            Piensa en Netflix (o similar) que usas en web, móvil y smart TV:
          </p>

          {/* Capas */}
          <div className="space-y-4 md:space-y-6">
            {/* Capa Presentación */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-red-100">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-500 rounded-lg flex-shrink-0">
                  <i className="ri-device-line text-white text-lg md:text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Capa de Presentación</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Apps en iOS/Android, web React, app de TV que muestran catálogos y reproducen video
                  </p>
                </div>
              </div>
            </div>

            {/* Capa Lógica */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-red-100">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-purple-500 rounded-lg flex-shrink-0">
                  <i className="ri-settings-3-line text-white text-lg md:text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Capa de Lógica de Negocio</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Servicios que manejan suscripciones, recomendaciones, catálogo, streaming
                  </p>
                </div>
              </div>
            </div>

            {/* Capa Datos */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-red-100">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-green-500 rounded-lg flex-shrink-0">
                  <i className="ri-database-2-line text-white text-lg md:text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Capa de Datos</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Bases de datos con usuarios, contenido, historial de vistas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagrama Simplificado */}
          <div className="mt-6 md:mt-8 bg-white rounded-xl p-4 md:p-6 border-2 border-dashed border-red-300">
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 text-center">Diagrama Simplificado</h4>
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="w-full max-w-md bg-blue-100 border-2 border-blue-500 rounded-lg p-3 md:p-4 text-center">
                <p className="text-sm md:text-base font-semibold text-blue-900">Usuario → Navegador / App móvil / App TV</p>
                <p className="text-xs md:text-sm text-blue-700">(Presentación)</p>
              </div>
              <i className="ri-arrow-down-line text-2xl md:text-3xl text-gray-400"></i>
              <div className="w-full max-w-md bg-purple-100 border-2 border-purple-500 rounded-lg p-3 md:p-4 text-center">
                <p className="text-sm md:text-base font-semibold text-purple-900">API / Backend</p>
                <p className="text-xs md:text-sm text-purple-700">(Lógica de negocio)</p>
              </div>
              <i className="ri-arrow-down-line text-2xl md:text-3xl text-gray-400"></i>
              <div className="w-full max-w-md bg-green-100 border-2 border-green-500 rounded-lg p-3 md:p-4 text-center">
                <p className="text-sm md:text-base font-semibold text-green-900">Base de datos y almacenamiento</p>
                <p className="text-xs md:text-sm text-green-700">(Datos)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
