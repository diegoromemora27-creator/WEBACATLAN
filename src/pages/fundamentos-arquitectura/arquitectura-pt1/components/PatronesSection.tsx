import { useState } from 'react';

export default function PatronesSection() {
  const [showLayeredExample, setShowLayeredExample] = useState(false);
  const [showHexagonalExample, setShowHexagonalExample] = useState(false);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <i className="ri-stack-line"></i>
            Principio 5
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Patrones como "capas" y "puertos y adaptadores"
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Patrones arquitectónicos que organizan el código de forma estructurada y flexible
          </p>
        </div>

        {/* Patrón en Capas */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-8 md:mb-12 border border-purple-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-stack-fill text-white text-xl md:text-2xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                3.1 Patrón en capas (layered / n-tier)
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Es la formalización de lo que ya vimos: presentación, lógica, datos, a veces con más subdivisiones.
              </p>
            </div>
          </div>

          {/* Ejemplos */}
          <div className="space-y-6">
            {/* Sistema Universidad */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-school-line text-purple-600"></i>
                Sistema típico de universidad
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-window-line text-purple-600 text-xl"></i>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Portal web</h5>
                  <p className="text-sm md:text-base text-gray-600">Capa de presentación</p>
                </div>
                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-settings-3-line text-blue-600 text-xl"></i>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Backend</h5>
                  <p className="text-sm md:text-base text-gray-600">Inscripciones, calificaciones, pagos</p>
                </div>
                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <i className="ri-database-2-line text-green-600 text-xl"></i>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Base de datos</h5>
                  <p className="text-sm md:text-base text-gray-600">Alumnos, materias, historial</p>
                </div>
              </div>
            </div>

            {/* Frameworks MVC */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-code-box-line text-blue-600"></i>
                Frameworks que siguen este patrón
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-leaf-line text-green-600"></i>
                    </div>
                    <h5 className="font-bold text-gray-900">Django, Ruby on Rails</h5>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">Frameworks web con arquitectura MVC</p>
                </div>
                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-smartphone-line text-blue-600"></i>
                    </div>
                    <h5 className="font-bold text-gray-900">Apps móviles MVC</h5>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">Model (datos), View (UI), Controller (lógica)</p>
                </div>
              </div>
            </div>

            {/* Botón ejemplo interactivo */}
            <button
              onClick={() => setShowLayeredExample(!showLayeredExample)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 md:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <i className={`ri-${showLayeredExample ? 'eye-off' : 'eye'}-line`}></i>
              {showLayeredExample ? 'Ocultar' : 'Ver'} ejemplo de código MVC
            </button>

            {showLayeredExample && (
              <div className="bg-gray-900 rounded-xl p-4 md:p-6 overflow-x-auto">
                <pre className="text-xs md:text-sm text-green-400">
{`// Model (Datos)
class Usuario {
  id: number;
  nombre: string;
  email: string;
}

// View (Presentación)
<div>
  <h1>Bienvenido {usuario.nombre}</h1>
  <p>{usuario.email}</p>
</div>

// Controller (Lógica)
class UsuarioController {
  obtenerUsuario(id: number) {
    return usuarioRepository.findById(id);
  }
}`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
