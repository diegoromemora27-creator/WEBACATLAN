
export default function ComponentesBasicosSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <i className="ri-puzzle-line text-blue-600 text-lg"></i>
            <span className="text-blue-600 text-sm font-semibold">Principio 1</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Modularidad
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Dividir el sistema en piezas independientes con responsabilidades claras
          </p>
        </div>

        {/* Concepto */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-500 rounded-xl flex-shrink-0">
              <i className="ri-stack-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Idea Central</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Dividir el sistema en <strong>piezas independientes</strong> con responsabilidades claras y una interfaz definida.
              </p>
            </div>
          </div>
        </div>

        {/* Ejemplos en Plataformas */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Cómo se ve en plataformas reales:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Web - Amazon */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-global-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Web (Amazon)</h4>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-orange-500 mt-1 flex-shrink-0"></i>
                <span>Módulo de catálogo</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-orange-500 mt-1 flex-shrink-0"></i>
                <span>Módulo de carrito</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-orange-500 mt-1 flex-shrink-0"></i>
                <span>Módulo de pagos</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-orange-500 mt-1 flex-shrink-0"></i>
                <span>Módulo de reseñas</span>
              </li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-gray-600 italic">
              Cada uno puede evolucionar casi por separado
            </p>
          </div>

          {/* Mobile - App Bancaria */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                <i className="ri-smartphone-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Mobile (Banco)</h4>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                <span>Módulo de transferencias</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                <span>Módulo de tarjetas</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                <span>Módulo de inversiones</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                <span>Módulo de notificaciones</span>
              </li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-gray-600 italic">
              Feature modules independientes
            </p>
          </div>

          {/* Desktop - VS Code */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                <i className="ri-computer-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Desktop (VS Code)</h4>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-500 mt-1 flex-shrink-0"></i>
                <span>Extensiones son módulos</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-500 mt-1 flex-shrink-0"></i>
                <span>Instalar/quitar sin romper</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-fill text-blue-500 mt-1 flex-shrink-0"></i>
                <span>Independencia total</span>
              </li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-gray-600 italic">
              Cada extensión funciona de forma aislada
            </p>
          </div>
        </div>

        {/* Problemas que resuelve */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-red-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-red-500 rounded-xl flex-shrink-0">
              <i className="ri-alert-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Qué problema te ayuda a ver en el día a día:</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    Si <strong>"todo está junto"</strong> (un solo proyecto gigantesco) los cambios pequeños son riesgosos y lentos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    Si ves que un producto lanza features en áreas muy específicas sin tocar todo lo demás, casi seguro hay <strong>buena modularidad</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
