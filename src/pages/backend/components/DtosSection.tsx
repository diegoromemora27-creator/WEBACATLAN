export default function DtosSection() {
  const dtoExample = `class CreateUserDto {
  @IsEmail()
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @MinLength(8)
  @ApiProperty({ example: 'SecurePass123!' })
  password: string;

  @IsString()
  @MinLength(2)
  @ApiProperty({ example: 'John Doe' })
  name: string;
}`;

  const validationFlow = [
    {
      step: '1',
      title: 'Cliente envía datos',
      description: 'El usuario completa un formulario y envía la petición',
      icon: 'ri-send-plane-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30'
    },
    {
      step: '2',
      title: 'Pipe de validación',
      description: 'El DTO valida automáticamente los datos antes de llegar a tu código',
      icon: 'ri-shield-check-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      step: '3',
      title: 'Validación exitosa',
      description: 'Los datos cumplen las reglas y llegan a tu lógica de negocio',
      icon: 'ri-checkbox-circle-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      step: '3',
      title: 'Validación fallida',
      description: 'Si los datos no cumplen, se devuelve 400 Bad Request automáticamente',
      icon: 'ri-error-warning-line',
      color: 'text-[#ef4444]',
      bgColor: 'bg-[#ef4444]/10',
      borderColor: 'border-[#ef4444]/30'
    }
  ];

  const decorators = [
    {
      name: '@IsEmail()',
      description: 'Valida que sea un email válido',
      example: 'email: string',
      color: 'text-[#3b82f6]'
    },
    {
      name: '@MinLength(8)',
      description: 'Valida longitud mínima de caracteres',
      example: 'password: string',
      color: 'text-[#10b981]'
    },
    {
      name: '@IsString()',
      description: 'Valida que sea un string',
      example: 'name: string',
      color: 'text-[#f59e0b]'
    },
    {
      name: '@IsNumber()',
      description: 'Valida que sea un número',
      example: 'age: number',
      color: 'text-[#8b5cf6]'
    },
    {
      name: '@IsOptional()',
      description: 'Campo opcional (puede ser undefined)',
      example: 'phone?: string',
      color: 'text-[#ec4899]'
    },
    {
      name: '@IsArray()',
      description: 'Valida que sea un array',
      example: 'tags: string[]',
      color: 'text-[#14b8a6]'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            DTOs (Data Transfer Objects)
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Un DTO es un objeto que define cómo se ven los datos cuando viajan por la red. Es como un <span className="text-[#10b981] font-semibold">"contrato"</span> o un <span className="text-[#3b82f6] font-semibold">filtro de seguridad</span>.
          </p>
        </div>

        {/* DTO Example */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-lg">
              <i className="ri-code-s-slash-line text-white text-sm sm:text-base"></i>
            </span>
            Ejemplo de DTO con Validación
          </h3>
          
          <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden">
            <div className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 flex items-center gap-2">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">create-user.dto.ts</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-gray-300">
                <code>{dtoExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Decorators */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#f59e0b] to-[#ef4444] rounded-lg">
              <i className="ri-at-line text-white text-sm sm:text-base"></i>
            </span>
            Decoradores de class-validator
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {decorators.map((decorator) => (
              <div
                key={decorator.name}
                className="bg-[#161b22] border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-[#3b82f6]/50 transition-all duration-300"
              >
                <code className={`${decorator.color} font-mono font-bold text-base sm:text-lg block mb-2 sm:mb-3`}>
                  {decorator.name}
                </code>
                <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{decorator.description}</p>
                <div className="bg-[#0d1117] border border-gray-700 rounded-lg p-2 sm:p-3">
                  <code className="text-xs font-mono text-gray-300">
                    {decorator.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Flow */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
            <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg">
              <i className="ri-flow-chart text-white text-sm sm:text-base"></i>
            </span>
            Flujo de Validación con Pipes
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            En frameworks como NestJS, es el "túnel" por donde pasa la petición; si el DTO no es válido, el Pipe lanza un <span className="text-[#ef4444] font-mono">400 Bad Request</span> antes de que llegue a tu lógica de negocio.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {validationFlow.map((flow, index) => (
              <div key={index} className="relative">
                <div className={`bg-[#161b22] border ${flow.borderColor} rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${flow.bgColor} rounded-full mb-3 sm:mb-4`}>
                    <span className={`text-xl sm:text-2xl font-bold ${flow.color}`}>{flow.step}</span>
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${flow.bgColor} rounded-lg mb-3 sm:mb-4`}>
                    <i className={`${flow.icon} ${flow.color} text-xl sm:text-2xl`}></i>
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">{flow.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{flow.description}</p>
                </div>
                {/* Show arrow only between the first three items on large screens */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <i className="ri-arrow-right-line text-gray-600 text-2xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
