
export default function ConectoresSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <i className="ri-rocket-line text-green-600 text-lg"></i>
            <span className="text-green-600 text-sm font-semibold">Principio 3</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Escalabilidad y Rendimiento
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            La arquitectura impacta directamente en qué tan bien crece la app sin romperse
          </p>
        </div>

        {/* Concepto */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-green-500 rounded-xl flex-shrink-0">
              <i className="ri-line-chart-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Concepto</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                La arquitectura impacta directamente en qué tan bien crece la app sin romperse: <strong>más usuarios, más datos, más tráfico</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Ejemplos Visibles */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Ejemplos visibles:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Redes Sociales */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                <i className="ri-instagram-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Redes Sociales</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              <strong>Instagram, X (Twitter)</strong>
            </p>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Usan <strong>microservicios</strong> para separar timeline, notificaciones, media</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-purple-500 mt-1 flex-shrink-0"></i>
                <span>Permite escalar cada parte según lo que más se usa</span>
              </li>
            </ul>
          </div>

          {/* Streaming */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
                <i className="ri-netflix-fill text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Streaming</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              <strong>Netflix, YouTube</strong>
            </p>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-red-500 mt-1 flex-shrink-0"></i>
                <span>Separan servicios de catálogo, recomendación, streaming, autenticación</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-arrow-right-s-fill text-red-500 mt-1 flex-shrink-0"></i>
                <span>Usan <strong>CDNs</strong> y balanceadores de carga</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cómo se nota en la experiencia */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-yellow-100 mb-8 md:mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-yellow-500 rounded-xl flex-shrink-0">
              <i className="ri-user-star-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Cómo se "nota" en la experiencia diaria:</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white rounded-lg p-4 md:p-5 border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <i className="ri-close-circle-fill text-red-500 text-2xl mt-1 flex-shrink-0"></i>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold mb-2">Mala Arquitectura</p>
                      <p className="text-sm md:text-base text-gray-700">
                        Una app que <strong>se cae el día del Buen Fin o Black Friday</strong> suele tener cuellos de botella: 
                        un servicio central, una sola base de datos, sin colas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 md:p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-2xl mt-1 flex-shrink-0"></i>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold mb-2">Buena Arquitectura</p>
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        Apps que siguen <strong>rápidas aunque haya millones de usuarios</strong> suelen tener:
                      </p>
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li className="flex items-start gap-2">
                          <i className="ri-arrow-right-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
                          <span>División en servicios (modularidad + microservicios)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="ri-arrow-right-circle-fill text-green-500 mt-1 flex-shrink-0"></i>
                          <span>Cachés, colas, bases de datos separadas por contexto</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
