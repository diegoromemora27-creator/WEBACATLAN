export default function InterfacesContratosSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <i className="ri-stack-line text-purple-600 text-lg"></i>
            <span className="text-purple-600 text-sm font-semibold">Principio 2</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Separación en Capas
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Organizar la aplicación en "pisos" con responsabilidades específicas
          </p>
        </div>

        {/* Concepto */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-purple-500 rounded-xl flex-shrink-0">
              <i className="ri-layout-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Concepto</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                La arquitectura en capas separa la app en <strong>"pisos"</strong>: presentación, lógica de negocio, acceso a datos, etc.
              </p>
            </div>
          </div>
        </div>

        {/* Capas Típicas */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Capas Típicas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Presentación */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-500 rounded-lg">
                <i className="ri-layout-4-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Presentación (UI)</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">Lo que el usuario ve e interactúa</p>
          </div>

          {/* Aplicación */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-purple-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-purple-500 rounded-lg">
                <i className="ri-apps-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Aplicación / Servicios</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">Coordina casos de uso (comprar, registrar usuario)</p>
          </div>

          {/* Dominio */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-green-500 rounded-lg">
                <i className="ri-briefcase-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Dominio / Negocio</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">Reglas de negocio y lógica central</p>
          </div>

          {/* Datos */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-orange-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-database-2-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Acceso a Datos</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700">Persistencia, base de datos, APIs externas</p>
          </div>
        </div>

        {/* Ejemplos por Plataforma */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Cómo se ve en el día a día:</h3>

        <div className="space-y-6 md:space-y-8">
          {/* Web */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-600 rounded-lg">
                <i className="ri-global-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Web</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">UI</p>
                <p className="text-xs md:text-sm text-blue-700">HTML/CSS/JS, React, Vue</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-900 mb-2">Servicios/API</p>
                <p className="text-xs md:text-sm text-purple-700">Node, Django, Laravel (REST/GraphQL)</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">Datos</p>
                <p className="text-xs md:text-sm text-green-700">PostgreSQL, MongoDB, Redis</p>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-green-600 rounded-lg">
                <i className="ri-smartphone-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Mobile</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">UI Nativa</p>
                <p className="text-xs md:text-sm text-blue-700">SwiftUI, Jetpack Compose</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-900 mb-2">Dominio</p>
                <p className="text-xs md:text-sm text-purple-700">Use cases, entidades</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">Repositorios</p>
                <p className="text-xs md:text-sm text-green-700">API o base local (Room, Core Data)</p>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-purple-600 rounded-lg">
                <i className="ri-computer-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Desktop (Spotify Desktop)</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">UI</p>
                <p className="text-xs md:text-sm text-blue-700">App de escritorio</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-900 mb-2">Lógica</p>
                <p className="text-xs md:text-sm text-purple-700">Playlists, cambio de dispositivo</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">Acceso a datos</p>
                <p className="text-xs md:text-sm text-green-700">Servicios en la nube</p>
              </div>
            </div>
          </div>

          {/* LAMP */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-yellow-500 rounded-lg">
                <i className="ri-server-line text-white text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900">Arquitectura LAMP</h4>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              Un stack clásico para aplicaciones web que sigue este principio de capas.
            </p>
            <a
              href="https://gamma.app/docs/Arquitectura-LAMP-5gl8fntwntwvn61"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <i className="ri-external-link-line"></i>
              <span>Ver Recurso Externo</span>
            </a>
          </div>
        </div>

        {/* Señales para identificar */}
        <div className="mt-8 md:mt-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-green-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-green-500 rounded-xl flex-shrink-0">
              <i className="ri-eye-line text-white text-2xl md:text-3xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Señales para identificarlo:</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    Si al cambiar una pantalla <strong>no tienes que tocar la base de datos</strong>, probablemente hay capas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-base md:text-lg text-gray-700">
                    Si ves un <strong>API compartida por web y móvil</strong>, la lógica de negocio vive "debajo" en otra capa
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
