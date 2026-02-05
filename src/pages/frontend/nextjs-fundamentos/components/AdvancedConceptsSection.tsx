export default function AdvancedConceptsSection() {
  const concepts = [
    {
      title: 'Hydration (Hidratación)',
      description: 'El proceso donde React en el cliente toma el HTML estático enviado por el servidor y le añade la interactividad (eventos de JS).',
      icon: 'ri-water-flash-line',
      color: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'Middleware',
      description: 'Código que se ejecuta antes de que una petición se complete. Útil para verificar si un usuario está logueado antes de mostrarle una página.',
      icon: 'ri-shield-check-line',
      color: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'API Routes',
      description: 'Puedes crear tu propio backend (puntos de enlace API) dentro de la misma carpeta de Next.js usando archivos route.js.',
      icon: 'ri-code-s-slash-line',
      color: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section className="relative">
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#333] rounded-full mb-4">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Avanzado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Otros Conceptos Avanzados que debes conocer
          </h2>
        </div>

        {/* Concepts Table Card */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#333] rounded-3xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-white/5 border-b border-[#333] px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">Concepto</div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider md:col-span-2">Descripción</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#333]">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="px-8 py-6 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  {/* Concept Name */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 border border-[#333] rounded-xl group-hover:border-white/20 transition-all duration-300 shrink-0">
                      <i className={`${concept.icon} text-xl text-white`}></i>
                    </div>
                    <h3 className="font-bold text-lg">{concept.title}</h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <p className="text-gray-400 leading-relaxed">
                      {concept.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${concept.color} backdrop-blur-sm border ${concept.borderColor} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl mb-4">
                <i className={`${concept.icon} text-2xl text-white`}></i>
              </div>
              <h4 className="font-bold mb-2">{concept.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA Card */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-[#333] rounded-3xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border border-white/20 rounded-2xl mb-4">
            <i className="ri-rocket-2-line text-3xl text-white"></i>
          </div>
          <h3 className="text-2xl font-bold mb-3">¿Listo para construir con Next.js?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ahora que conoces los fundamentos, estás preparado para crear aplicaciones web modernas, 
            rápidas y optimizadas para SEO con el framework más popular de React.
          </p>
        </div>
      </div>
    </section>
  );
}
