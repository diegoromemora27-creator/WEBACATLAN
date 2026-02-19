import { useState } from 'react';

export default function WebDevelopmentSection() {
  const [activeFlow, setActiveFlow] = useState(0);

  const useCases = [
    { icon: 'ri-user-add-line', title: 'Login y Registro', description: 'Autenticación de usuarios' },
    { icon: 'ri-shopping-bag-line', title: 'Tienda en Línea', description: 'Listado y búsqueda de productos' },
    { icon: 'ri-file-list-line', title: 'Historial', description: 'Pedidos, facturas, transacciones' },
    { icon: 'ri-chat-3-line', title: 'Redes Sociales', description: 'Comentarios, likes, mensajes' }
  ];

  const flowSteps = [
    {
      step: 1,
      icon: 'ri-edit-box-line',
      title: 'Usuario llena formulario',
      description: 'El usuario completa un formulario de registro con nombre, email y contraseña.',
      actor: 'Frontend',
      color: '#ff9900'
    },
    {
      step: 2,
      icon: 'ri-send-plane-line',
      title: 'Navegador envía petición POST',
      description: 'El frontend envía los datos al endpoint /api/usuarios via HTTP POST.',
      actor: 'HTTP',
      color: '#336791'
    },
    {
      step: 3,
      icon: 'ri-database-2-line',
      title: 'Backend ejecuta INSERT',
      description: 'El servidor valida los datos y ejecuta INSERT INTO usuarios (...) VALUES (...).',
      actor: 'Backend + DB',
      color: '#274e6d'
    },
    {
      step: 4,
      icon: 'ri-check-double-line',
      title: 'Respuesta JSON de éxito',
      description: 'La base de datos confirma, y el backend regresa { "success": true, "userId": 123 }.',
      actor: 'Response',
      color: '#10b981'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#dbe9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Bases de Datos en Desarrollo Web
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            Ejemplos prácticos de cómo las bases de datos potencian las aplicaciones web modernas
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white rounded p-4 sm:p-5 border border-[#336791]/20 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#336791]/10 rounded mx-auto mb-3">
                <i className={`${useCase.icon} text-[#336791] text-xl sm:text-2xl`}></i>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#313131] mb-1">{useCase.title}</h4>
              <p className="text-xs text-[#274e6d]">{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* Registration Flow Diagram */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#336791]/20 shadow-sm mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#313131] mb-2 text-center">
            <i className="ri-flow-chart text-[#336791] mr-2"></i>
            Diagrama de Flujo: Registro de Usuario
          </h3>
          <p className="text-sm text-[#274e6d] text-center mb-6">
            Haz clic en cada paso para ver los detalles
          </p>

          {/* Flow Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 mb-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                {/* Step Card */}
                <div 
                  className={`w-full md:w-36 cursor-pointer transition-all duration-300 ${
                    activeFlow === index ? 'scale-105 z-10' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveFlow(index)}
                >
                  <div 
                    className={`rounded p-3 sm:p-4 border-2 transition-all ${
                      activeFlow === index ? 'shadow-lg' : 'shadow-sm'
                    }`}
                    style={{ 
                      borderColor: step.color,
                      backgroundColor: activeFlow === index ? `${step.color}15` : 'white'
                    }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div 
                        className="w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div 
                      className="w-10 h-10 flex items-center justify-center rounded mx-auto mb-2"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <i className={`${step.icon} text-xl`} style={{ color: step.color }}></i>
                    </div>
                    <p className="text-xs font-medium text-[#313131] text-center leading-tight">{step.title}</p>
                    <p className="text-[10px] text-center mt-1" style={{ color: step.color }}>{step.actor}</p>
                  </div>
                </div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <>
                    <div className="hidden md:flex items-center px-1">
                      <div className="w-4 h-0.5 bg-[#336791]"></div>
                      <i className="ri-arrow-right-s-line text-[#336791]"></i>
                    </div>
                    <div className="md:hidden flex flex-col items-center py-1">
                      <div className="w-0.5 h-4 bg-[#336791]"></div>
                      <i className="ri-arrow-down-s-line text-[#336791]"></i>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Step Detail */}
          <div 
            className="rounded p-4 sm:p-5 border-l-4 transition-all duration-300"
            style={{ 
              backgroundColor: `${flowSteps[activeFlow].color}10`,
              borderColor: flowSteps[activeFlow].color
            }}
          >
            <div className="flex items-start gap-3">
              <div 
                className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
                style={{ backgroundColor: `${flowSteps[activeFlow].color}20` }}
              >
                <i className={`${flowSteps[activeFlow].icon} text-xl`} style={{ color: flowSteps[activeFlow].color }}></i>
              </div>
              <div>
                <h4 className="font-bold text-[#313131] mb-1">
                  Paso {flowSteps[activeFlow].step}: {flowSteps[activeFlow].title}
                </h4>
                <p className="text-sm text-[#274e6d]">{flowSteps[activeFlow].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Query Console Simulation */}
        <div className="bg-[#313131] rounded overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#274e6d]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-white/70 font-mono">postgres@webacatlan:~</span>
          </div>
          
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
            <div className="mb-4">
              <p className="text-gray-500"># Insertar nuevo usuario</p>
              <p className="text-white">
                <span className="text-[#ff9900]">INSERT INTO</span> <span className="text-[#336791]">usuarios</span> (nombre, email, password_hash)
              </p>
              <p className="text-white">
                <span className="text-[#ff9900]">VALUES</span> (<span className="text-green-400">'María'</span>, <span className="text-green-400">'maria@email.com'</span>, <span className="text-green-400">'$2b$10...'</span>);
              </p>
            </div>
            
            <div className="mb-4 pb-4 border-b border-gray-700">
              <p className="text-green-400">
                <i className="ri-checkbox-circle-fill mr-1"></i>
                INSERT 0 1  <span className="text-gray-500">-- Query ejecutada con éxito</span>
              </p>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-500"># Consultar el usuario insertado</p>
              <p className="text-white">
                <span className="text-[#ff9900]">SELECT</span> id, nombre, email <span className="text-[#ff9900]">FROM</span> <span className="text-[#336791]">usuarios</span> <span className="text-[#ff9900]">WHERE</span> email = <span className="text-green-400">'maria@email.com'</span>;
              </p>
            </div>
            
            <div className="bg-[#274e6d]/30 rounded p-3 overflow-x-auto">
              <table className="w-full text-[#dbe9f4]">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left px-2 py-1 text-[#ff9900]">id</th>
                    <th className="text-left px-2 py-1 text-[#ff9900]">nombre</th>
                    <th className="text-left px-2 py-1 text-[#ff9900]">email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-1">1</td>
                    <td className="px-2 py-1">María</td>
                    <td className="px-2 py-1">maria@email.com</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-500 text-xs mt-2">(1 row)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
