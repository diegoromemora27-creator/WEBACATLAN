export default function RestfulDesignSection() {
  const principles = [
    {
      title: 'Nouns, no Verbs',
      description: 'La URL identifica el "qué" (recurso), el método identifica el "cómo" (acción).',
      good: '/api/v1/products',
      bad: '/api/v1/get-all-products',
      icon: 'ri-check-line',
      iconBad: 'ri-close-line'
    },
    {
      title: 'Versionado',
      description: 'Permite hacer cambios grandes en el futuro sin romper las apps de los usuarios que aún usan la versión vieja.',
      good: '/api/v1/users',
      bad: '/api/users',
      icon: 'ri-git-branch-line',
      iconBad: 'ri-close-line'
    }
  ];

  const queryParams = [
    {
      name: 'Pagination',
      description: 'Evita traer 1 millón de registros de golpe',
      example: '?take=10&skip=20',
      icon: 'ri-pages-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      name: 'Filtering',
      description: 'Para buscar cosas específicas',
      example: '?category=electronics&price_min=100',
      icon: 'ri-filter-3-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30'
    },
    {
      name: 'Sorting',
      description: 'Para darles orden a los resultados',
      example: '?sort=price&order=desc',
      icon: 'ri-sort-desc',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30'
    }
  ];

  const restExamples = [
    {
      method: 'GET',
      endpoint: '/api/v1/products',
      description: 'Obtener todos los productos',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/products/123',
      description: 'Obtener un producto específico',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/products',
      description: 'Crear un nuevo producto',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/products/123',
      description: 'Actualizar producto completo',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10'
    },
    {
      method: 'PATCH',
      endpoint: '/api/v1/products/123',
      description: 'Actualizar parcialmente',
      color: 'text-[#fbbf24]',
      bgColor: 'bg-[#fbbf24]/10'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/products/123',
      description: 'Eliminar un producto',
      color: 'text-[#ef4444]',
      bgColor: 'bg-[#ef4444]/10'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Diseño RESTful
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            REST es un estilo de arquitectura. Su regla de oro es: <span className="text-[#10b981] font-semibold">La URL identifica el "qué" (recurso)</span>, <span className="text-[#3b82f6] font-semibold">el método identifica el "cómo" (acción)</span>.
          </p>
        </div>

        {/* Principles */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-lg">
              <i className="ri-lightbulb-line text-white text-sm sm:text-base"></i>
            </span>
            Principios Fundamentales
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-[#0d1117] border border-gray-700 rounded-xl p-4 sm:p-6"
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{principle.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{principle.description}</p>
                
                <div className="space-y-2 sm:space-y-3">
                  {/* Good Example */}
                  <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-[#10b981] rounded-full">
                        <i className={`${principle.icon} text-white text-xs sm:text-sm`}></i>
                      </span>
                      <span className="text-[#10b981] font-semibold text-xs sm:text-sm">Correcto</span>
                    </div>
                    <code className="text-[#10b981] font-mono text-xs sm:text-sm break-all">{principle.good}</code>
                  </div>
                  
                  {/* Bad Example */}
                  <div className="bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-[#ef4444] rounded-full">
                        <i className={`${principle.iconBad} text-white text-xs sm:text-sm`}></i>
                      </span>
                      <span className="text-[#ef4444] font-semibold text-xs sm:text-sm">Incorrecto</span>
                    </div>
                    <code className="text-[#ef4444] font-mono text-xs sm:text-sm line-through break-all">{principle.bad}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Query Parameters */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#f59e0b] to-[#ef4444] rounded-lg">
              <i className="ri-settings-3-line text-white text-sm sm:text-base"></i>
            </span>
            Query Parameters
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Se usan para "limpiar" o "moldear" los datos:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {queryParams.map((param) => (
              <div
                key={param.name}
                className={`bg-[#0d1117] border ${param.borderColor} rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${param.bgColor} rounded-lg`}>
                    <i className={`${param.icon} ${param.color} text-xl sm:text-2xl`}></i>
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">{param.name}</h4>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{param.description}</p>
                <div className={`${param.bgColor} border ${param.borderColor} rounded-lg p-2 sm:p-3 overflow-x-auto`}>
                  <code className={`text-xs font-mono ${param.color} whitespace-nowrap`}>
                    {param.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REST Examples */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg">
              <i className="ri-code-box-line text-white text-sm sm:text-base"></i>
            </span>
            Ejemplos de Endpoints RESTful
          </h3>
          
          <div className="bg-[#0d1117] border border-gray-700 rounded-xl overflow-hidden">
            {restExamples.map((example, index) => (
              <div
                key={index}
                className={`p-3 sm:p-4 flex flex-col gap-2 sm:gap-4 ${
                  index !== restExamples.length - 1 ? 'border-b border-gray-700' : ''
                } hover:bg-[#161b22] transition-colors duration-200`}
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className={`${example.bgColor} ${example.color} font-mono font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg whitespace-nowrap`}>
                    {example.method}
                  </span>
                  <code className="text-white font-mono text-xs sm:text-sm flex-1 break-all">
                    {example.endpoint}
                  </code>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm pl-0 sm:pl-16">
                  {example.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}