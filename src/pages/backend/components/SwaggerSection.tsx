export default function SwaggerSection() {
  const swaggerExample = `@Controller('users')
@ApiTags('Users')
export class UsersController {
  
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario creado exitosamente' 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos inválidos' 
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}`;

  const decorators = [
    {
      name: '@ApiOperation',
      description: 'Describe qué hace el endpoint',
      example: "{ summary: 'Crear un nuevo usuario' }",
      icon: 'ri-file-text-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      name: '@ApiResponse',
      description: 'Documenta qué códigos de estado puede devolver',
      example: "{ status: 403, description: 'Forbidden' }",
      icon: 'ri-error-warning-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30'
    },
    {
      name: '@ApiTags',
      description: 'Agrupa endpoints relacionados',
      example: "'Users'",
      icon: 'ri-price-tag-3-line',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30'
    },
    {
      name: '@ApiProperty',
      description: 'Documenta propiedades de DTOs',
      example: "{ example: 'user@example.com' }",
      icon: 'ri-list-check',
      color: 'text-[#8b5cf6]',
      bgColor: 'bg-[#8b5cf6]/10',
      borderColor: 'border-[#8b5cf6]/30'
    }
  ];

  const benefits = [
    {
      title: 'Documentación Automática',
      description: 'Al decorar tus controladores y DTOs, Swagger lee esa información y crea un archivo JSON/YAML (OpenAPI) que se renderiza visualmente.',
      icon: 'ri-file-code-line',
      color: 'text-[#10b981]'
    },
    {
      title: 'Interfaz Interactiva',
      description: 'Genera un sitio web donde otros desarrolladores pueden probar tus endpoints directamente desde el navegador.',
      icon: 'ri-window-line',
      color: 'text-[#3b82f6]'
    },
    {
      title: 'Sincronización Perfecta',
      description: 'La documentación siempre está actualizada porque se genera directamente del código fuente.',
      icon: 'ri-refresh-line',
      color: 'text-[#f59e0b]'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Documentación Swagger/OpenAPI
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Nadie quiere usar una API que no sabe cómo funciona. Swagger genera un <span className="text-[#10b981] font-semibold">sitio web interactivo</span> donde otros desarrolladores pueden <span className="text-[#3b82f6] font-semibold">probar tus endpoints</span>.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#0d1117] border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-xl mb-3 sm:mb-4">
                  <i className={`${benefit.icon} text-white text-xl sm:text-2xl`}></i>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold ${benefit.color} mb-2 sm:mb-3`}>{benefit.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorators */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-lg">
              <i className="ri-at-line text-white text-sm sm:text-base"></i>
            </span>
            Decoradores de Swagger
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {decorators.map((decorator) => (
              <div
                key={decorator.name}
                className={`bg-[#0d1117] border ${decorator.borderColor} rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${decorator.bgColor} rounded-lg`}>
                    <i className={`${decorator.icon} ${decorator.color} text-xl sm:text-2xl`}></i>
                  </span>
                  <code className={`${decorator.color} font-mono font-bold text-sm sm:text-lg`}>
                    {decorator.name}
                  </code>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{decorator.description}</p>
                <div className={`${decorator.bgColor} border ${decorator.borderColor} rounded-lg p-2 sm:p-3 overflow-x-auto`}>
                  <code className={`text-xs font-mono ${decorator.color} whitespace-nowrap`}>
                    {decorator.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#f59e0b] to-[#ef4444] rounded-lg">
              <i className="ri-code-box-line text-white text-sm sm:text-base"></i>
            </span>
            Ejemplo de Controlador Documentado
          </h3>
          
          <div className="bg-[#0d1117] border border-gray-700 rounded-xl overflow-hidden">
            <div className="bg-[#161b22] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">users.controller.ts</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-gray-300">
                <code>{swaggerExample}</code>
              </pre>
            </div>
          </div>

          {/* Swagger UI Preview */}
          <div className="mt-6 sm:mt-8 bg-[#0d1117] border border-gray-700 rounded-xl p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img 
                src="https://static.swagger.io/swagger-ui-dist-package/favicon-32x32.png" 
                alt="Swagger" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <h4 className="text-lg sm:text-xl font-bold text-white">Resultado en Swagger UI</h4>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Accede a <code className="text-[#10b981] font-mono bg-[#10b981]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs">/api/docs</code> para ver la documentación interactiva
            </p>
            <div className="bg-[#161b22] border border-gray-700 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="bg-[#3b82f6] text-white font-mono font-bold text-xs px-2 sm:px-3 py-1 rounded">POST</span>
                <code className="text-white font-mono text-xs sm:text-sm">/users</code>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Crear un nuevo usuario</p>
              <div className="flex gap-2">
                <button className="bg-[#10b981] hover:bg-[#059669] text-white text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  Try it out
                </button>
                <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  Execute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
