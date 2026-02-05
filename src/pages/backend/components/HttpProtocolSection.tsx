export default function HttpProtocolSection() {
  const methods = [
    {
      name: 'GET',
      color: 'from-[#10b981] to-[#059669]',
      textColor: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30',
      description: 'Para consultar datos. No debe modificar nada en el servidor.',
      example: 'GET /api/v1/products?take=10&sort=price',
      icon: 'ri-download-cloud-line'
    },
    {
      name: 'POST',
      color: 'from-[#3b82f6] to-[#2563eb]',
      textColor: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30',
      description: 'Para enviar datos nuevos (ej. crear un usuario).',
      example: 'POST /api/v1/users',
      icon: 'ri-add-circle-line'
    },
    {
      name: 'PUT',
      color: 'from-[#f59e0b] to-[#d97706]',
      textColor: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30',
      description: 'Reemplaza un recurso existente por completo.',
      example: 'PUT /api/v1/users/123',
      icon: 'ri-refresh-line'
    },
    {
      name: 'PATCH',
      color: 'from-[#fbbf24] to-[#f59e0b]',
      textColor: 'text-[#fbbf24]',
      bgColor: 'bg-[#fbbf24]/10',
      borderColor: 'border-[#fbbf24]/30',
      description: 'Modifica solo una parte de un recurso (ej. cambiar solo el email).',
      example: 'PATCH /api/v1/users/123',
      icon: 'ri-edit-line'
    },
    {
      name: 'DELETE',
      color: 'from-[#ef4444] to-[#dc2626]',
      textColor: 'text-[#ef4444]',
      bgColor: 'bg-[#ef4444]/10',
      borderColor: 'border-[#ef4444]/30',
      description: 'Elimina un recurso.',
      example: 'DELETE /api/v1/users/123',
      icon: 'ri-delete-bin-line'
    }
  ];

  const statusCodes = [
    {
      range: '2xx',
      title: 'Éxito',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30',
      codes: [
        { code: '200', name: 'OK', desc: 'Todo bien' },
        { code: '201', name: 'Created', desc: 'Recurso creado con éxito' }
      ]
    },
    {
      range: '4xx',
      title: 'Error del Cliente',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30',
      codes: [
        { code: '400', name: 'Bad Request', desc: 'Enviaste algo mal' },
        { code: '401', name: 'Unauthorized', desc: 'Falta login' },
        { code: '404', name: 'Not Found', desc: 'No existe' }
      ]
    },
    {
      range: '5xx',
      title: 'Error del Servidor',
      color: 'text-[#ef4444]',
      bgColor: 'bg-[#ef4444]/10',
      borderColor: 'border-[#ef4444]/30',
      codes: [
        { code: '500', name: 'Server Error', desc: 'El código explotó en el servidor' }
      ]
    }
  ];

  const headers = [
    {
      name: 'Content-Type',
      description: 'Indica el formato (ej. application/json)',
      example: 'Content-Type: application/json',
      icon: 'ri-file-code-line'
    },
    {
      name: 'Authorization',
      description: 'Donde envías tokens (JWT) para identificarte',
      example: 'Authorization: Bearer eyJhbGc...',
      icon: 'ri-shield-keyhole-line'
    },
    {
      name: 'CORS',
      description: 'Reglas de seguridad que deciden qué dominios externos pueden consultar tu API',
      example: 'Access-Control-Allow-Origin: *',
      icon: 'ri-global-line'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Protocolo HTTP
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Es el "idioma" que hablan el cliente (tu navegador o app) y el servidor. Funciona mediante un ciclo de <span className="text-[#10b981] font-semibold">Petición (Request)</span> y <span className="text-[#3b82f6] font-semibold">Respuesta (Response)</span>.
          </p>
        </div>

        {/* HTTP Methods */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-lg">
              <i className="ri-code-s-slash-line text-white text-sm sm:text-base"></i>
            </span>
            Métodos (Verbos HTTP)
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Indican la intención de la petición:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {methods.map((method) => (
              <div
                key={method.name}
                className={`bg-[#161b22] border ${method.borderColor} rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`text-xl sm:text-2xl font-bold font-mono ${method.textColor}`}>
                    {method.name}
                  </span>
                  <span className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${method.bgColor} rounded-lg group-hover:scale-110 transition-transform`}>
                    <i className={`${method.icon} ${method.textColor} text-lg sm:text-xl`}></i>
                  </span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{method.description}</p>
                <div className={`${method.bgColor} border ${method.borderColor} rounded-lg p-2 sm:p-3 overflow-x-auto`}>
                  <code className={`text-xs font-mono ${method.textColor} whitespace-nowrap`}>
                    {method.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Codes */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#f59e0b] to-[#ef4444] rounded-lg">
              <i className="ri-error-warning-line text-white text-sm sm:text-base"></i>
            </span>
            Status Codes
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Son la forma en que el servidor te dice qué pasó sin usar palabras:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {statusCodes.map((category) => (
              <div
                key={category.range}
                className={`bg-[#161b22] border ${category.borderColor} rounded-xl p-4 sm:p-6`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className={`text-2xl sm:text-3xl font-bold font-mono ${category.color}`}>
                    {category.range}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white">{category.title}</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {category.codes.map((code) => (
                    <div
                      key={code.code}
                      className={`${category.bgColor} border ${category.borderColor} rounded-lg p-2 sm:p-3`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono font-bold text-sm sm:text-base ${category.color}`}>{code.code}</span>
                        <span className="text-white text-xs sm:text-sm font-semibold">{code.name}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{code.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Headers */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg">
              <i className="ri-file-list-3-line text-white text-sm sm:text-base"></i>
            </span>
            Headers
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Metadatos que acompañan la petición:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {headers.map((header) => (
              <div
                key={header.name}
                className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#3b82f6]/10 rounded-lg">
                    <i className={`${header.icon} text-[#3b82f6] text-lg sm:text-xl`}></i>
                  </span>
                  <h4 className="text-sm sm:text-lg font-bold text-white font-mono">{header.name}</h4>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{header.description}</p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-2 sm:p-3 overflow-x-auto">
                  <code className="text-xs font-mono text-[#3b82f6] whitespace-nowrap">
                    {header.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
