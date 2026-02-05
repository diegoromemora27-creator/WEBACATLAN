export default function WhatIsNextSection() {
  return (
    <section className="relative">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#333] rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Framework</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Qué es Next.js y por qué es importante?
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-[#333] rounded-3xl p-8 md:p-12 mb-8">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Mientras que <span className="text-cyan-400 font-semibold">React es una librería</span> (tú decides cómo hacer el routing, cómo manejar las imágenes, etc.), 
            <span className="text-blue-400 font-semibold"> Next.js es un framework</span> (ya trae las mejores prácticas y herramientas configuradas).
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#333] rounded-xl">
            <i className="ri-lightbulb-line text-yellow-400"></i>
            <span className="text-sm text-gray-300">La gran revolución de Next.js</span>
          </div>
        </div>

        {/* Problem Solution Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Problem */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-500/10 border border-red-500/30 rounded-lg">
                <i className="ri-close-circle-line text-xl text-red-400"></i>
              </div>
              <h3 className="text-xl font-bold text-red-400">El Problema</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              En React tradicional, el navegador recibe un <span className="text-red-400 font-semibold">HTML vacío</span> y mucho JavaScript, 
              lo que es malo para el <span className="text-red-400 font-semibold">SEO</span> y para dispositivos lentos.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-green-500/10 border border-green-500/30 rounded-lg">
                <i className="ri-check-double-line text-xl text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-green-400">La Solución</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Next.js introduce <span className="text-green-400 font-semibold">Server-Side Rendering</span> y 
              <span className="text-green-400 font-semibold"> Static Site Generation</span>, enviando HTML real al navegador.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-[#333] rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/30 rounded-lg mb-4">
              <i className="ri-server-line text-xl text-blue-400"></i>
            </div>
            <h4 className="font-bold mb-2">Server-Side Rendering (SSR)</h4>
            <p className="text-sm text-gray-400">Genera el HTML en el servidor en cada petición.</p>
          </div>

          <div className="bg-white/5 border border-[#333] rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 border border-purple-500/30 rounded-lg mb-4">
              <i className="ri-flashlight-line text-xl text-purple-400"></i>
            </div>
            <h4 className="font-bold mb-2">Static Site Generation (SSG)</h4>
            <p className="text-sm text-gray-400">Genera el HTML en tiempo de compilación (ultra rápido).</p>
          </div>

          <div className="bg-white/5 border border-[#333] rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-lg mb-4">
              <i className="ri-search-eye-line text-xl text-cyan-400"></i>
            </div>
            <h4 className="font-bold mb-2">SEO Amigable</h4>
            <p className="text-sm text-gray-400">Al enviar HTML real, Google puede leer el contenido fácilmente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
