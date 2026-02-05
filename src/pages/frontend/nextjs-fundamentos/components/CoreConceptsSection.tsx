export default function CoreConceptsSection() {
  return (
    <section className="relative">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#333] rounded-full mb-4">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">Arquitectura</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Componentes y Conceptos Principales de Next.js
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* A. App Router */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-[#333] rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-xl shrink-0">
              <i className="ri-route-line text-2xl text-cyan-400"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">A. App Router y Routing basado en Archivos</h3>
              <p className="text-sm text-gray-400">
                En Next.js no necesitas librerías externas para navegar. El sistema de rutas se basa en carpetas dentro de <code className="px-2 py-1 bg-black/50 border border-[#333] rounded text-cyan-400 font-mono text-xs">app/</code>
              </p>
            </div>
          </div>

          <div className="bg-black/30 border border-[#333] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <i className="ri-folder-line text-yellow-400"></i>
              <span className="text-sm text-gray-400 font-mono">Estructura de carpetas</span>
            </div>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2 text-gray-300">
                <i className="ri-folder-3-line text-yellow-400"></i>
                <span>app/</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 ml-4">
                <i className="ri-folder-3-line text-yellow-400"></i>
                <span>contacto/</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 ml-8">
                <i className="ri-file-code-line"></i>
                <span>page.js</span>
              </div>
              <div className="mt-3 pt-3 border-t border-[#333]">
                <i className="ri-arrow-right-line text-green-400 mr-2"></i>
                <span className="text-green-400">tuweb.com/contacto</span>
              </div>
            </div>
          </div>
        </div>

        {/* B. Server vs Client Components */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-[#333] rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 border border-purple-500/30 rounded-xl shrink-0">
              <i className="ri-split-cells-horizontal text-2xl text-purple-400"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">B. Server Components vs. Client Components</h3>
              <p className="text-sm text-gray-400">
                Esta es la arquitectura actual (Next.js 13/14/15)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Server Components */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <i className="ri-server-line text-blue-400"></i>
                </div>
                <h4 className="font-bold text-blue-400">Server Components</h4>
                <span className="ml-auto px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-400">Por defecto</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Se ejecutan solo en el servidor. No envían JavaScript al cliente, lo que hace que la página cargue instantáneamente. 
                Ideales para obtener datos de bases de datos.
              </p>
            </div>

            {/* Client Components */}
            <div className="bg-pink-500/5 border border-pink-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 flex items-center justify-center bg-pink-500/10 border border-pink-500/30 rounded-lg">
                  <i className="ri-computer-line text-pink-400"></i>
                </div>
                <h4 className="font-bold text-pink-400">Client Components</h4>
                <code className="ml-auto px-2 py-1 bg-black/50 border border-[#333] rounded text-xs text-pink-400 font-mono">"use client"</code>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Se definen con la directiva <code className="px-1 py-0.5 bg-black/50 border border-[#333] rounded text-pink-400 font-mono text-xs">"use client"</code>. 
                Se usan cuando necesitas interactividad (eventos como onClick, useState o useEffect).
              </p>
            </div>
          </div>
        </div>

        {/* C. Data Fetching */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-[#333] rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 border border-blue-500/30 rounded-xl shrink-0">
              <i className="ri-download-cloud-line text-2xl text-blue-400"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">C. Data Fetching (Obtención de datos)</h3>
              <p className="text-sm text-gray-400">
                Next.js extiende la función fetch de JavaScript para permitir:
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white/5 border border-[#333] rounded-lg p-4">
              <div className="w-8 h-8 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-lg shrink-0">
                <i className="ri-save-line text-cyan-400"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Caching</h4>
                <p className="text-sm text-gray-400">Guardar los resultados de una API para no repetirla innecesariamente.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 border border-[#333] rounded-lg p-4">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-500/10 border border-purple-500/30 rounded-lg shrink-0">
                <i className="ri-refresh-line text-purple-400"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Revalidación</h4>
                <p className="text-sm text-gray-400">Actualizar los datos guardados cada cierto tiempo (ej. cada 60 segundos).</p>
              </div>
            </div>
          </div>
        </div>

        {/* D. Optimización Automática */}
        <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-[#333] rounded-3xl p-8 hover:border-pink-500/30 transition-all duration-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-pink-500/10 border border-pink-500/30 rounded-xl shrink-0">
              <i className="ri-rocket-line text-2xl text-pink-400"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">D. Optimización Automática</h3>
              <p className="text-sm text-gray-400">
                Next.js optimiza tu aplicación sin configuración adicional
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-white/5 border border-[#333] rounded-lg p-4">
              <div className="w-8 h-8 flex items-center justify-center bg-green-500/10 border border-green-500/30 rounded-lg shrink-0">
                <i className="ri-image-line text-green-400"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Next/Image</h4>
                <p className="text-sm text-gray-400">
                  Optimiza imágenes automáticamente (cambia el tamaño y formato a WebP) para que la web no sea pesada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/5 border border-[#333] rounded-lg p-4">
              <div className="w-8 h-8 flex items-center justify-center bg-yellow-500/10 border border-yellow-500/30 rounded-lg shrink-0">
                <i className="ri-font-size text-yellow-400"></i>
              </div>
              <div>
                <h4 className="font-bold mb-1">Next/Font</h4>
                <p className="text-sm text-gray-400">
                  Carga fuentes de Google Fonts localmente para evitar saltos visuales al cargar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
