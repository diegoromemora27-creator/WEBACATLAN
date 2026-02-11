export default function DiferenciasClaveSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-4">
            <i className="ri-tools-line text-indigo-600 text-lg"></i>
            <span className="text-indigo-600 text-sm font-semibold">Principio 4</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Mantenibilidad y Extensibilidad
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Facilidad para entender, corregir y agregar nuevas funcionalidades
          </p>
        </div>

        {/* Definiciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Mantenible */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                <i className="ri-tools-fill text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Mantenible</h3>
            </div>
            <p className="text-base md:text-lg text-gray-700">
              Fácil de <strong>entender, corregir y refactorizar</strong>
            </p>
          </div>

          {/* Extensible */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 md:p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-purple-500 rounded-lg">
                <i className="ri-add-box-fill text-white text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Extensible</h3>
            </div>
            <p className="text-base md:text-lg text-gray-700">
              Fácil <strong>agregar nuevas features</strong> sin reventar lo que ya existe
            </p>
          </div>
        </div>

        {/* Ejemplos en Plataformas */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Plataformas del día a día donde lo ves:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* WhatsApp */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-green-500 rounded-lg">
                <i className="ri-whatsapp-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">WhatsApp</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              Agregan features como <strong>llamadas, estados, canales</strong> sin reescribir desde cero
            </p>
          </div>

          {/* Slack */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-purple-600 rounded-lg">
                <i className="ri-slack-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Slack</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              Añaden <strong>hilos, integraciones, huddles</strong> manteniendo estabilidad
            </p>
          </div>

          {/* Notion */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black rounded-lg">
                <i className="ri-notion-fill text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Notion</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              Expanden con <strong>IA, calendarios, wikis</strong> sobre base modular
            </p>
          </div>
        </div>

        {/* Apps Bancarias */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-100 mb-8 md:mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-blue-600 rounded-xl flex-shrink-0">
              <i className="ri-bank-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Apps Bancarias</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Cambian el diseño, agregan una nueva sección (<strong>crypto, inversiones</strong>) manteniendo el resto estable; 
                la UI cambia pero los servicios de negocio y datos se reaprovechan.
              </p>
            </div>
          </div>
        </div>

        {/* Síntomas de Mala Arquitectura */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-red-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-red-500 rounded-xl flex-shrink-0">
              <i className="ri-error-warning-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Síntomas de mala arquitectura que un usuario percibe:</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    Cada vez que agregan algo, <strong>se rompen cosas no relacionadas</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    <strong>Mil parches y mantenimientos</strong> constantes sin mejoras reales
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    Nuevas features tardan <strong>meses en llegar</strong> por miedo a romper todo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="mt-8 md:mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-green-500 rounded-xl flex-shrink-0">
              <i className="ri-lightbulb-flash-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Clave para Identificar Buena Arquitectura</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Detrás de apps que evolucionan constantemente sin colapsar suele haber <strong>módulos claros y capas bien separadas</strong>. 
                La UI cambia, pero los servicios de negocio y datos se mantienen estables y reutilizables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
