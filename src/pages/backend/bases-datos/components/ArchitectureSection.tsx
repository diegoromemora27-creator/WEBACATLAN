import { useState } from 'react';

export default function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const architectureLayers = [
    {
      icon: 'ri-computer-line',
      title: 'Navegador (Cliente)',
      subtitle: 'Frontend',
      description: 'El usuario interactúa con la interfaz: HTML, CSS, JavaScript, React, etc.',
      color: '#ff9900',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      icon: 'ri-server-line',
      title: 'Servidor Web / API',
      subtitle: 'Backend',
      description: 'Recibe peticiones HTTP, valida datos, ejecuta lógica de negocio y hace consultas.',
      color: '#336791',
      technologies: ['Node.js', 'Django', 'FastAPI', 'NestJS']
    },
    {
      icon: 'ri-database-2-line',
      title: 'Base de Datos',
      subtitle: 'Persistencia',
      description: 'Almacena la información de forma estructurada y permanente.',
      color: '#274e6d',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB']
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#dbe9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Arquitectura de Tres Capas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            En la arquitectura típica de una aplicación web, la información fluye entre tres capas principales
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#336791]/20 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {architectureLayers.map((layer, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                {/* Layer Card */}
                <div 
                  className={`w-full md:w-48 bg-white rounded p-4 sm:p-5 border-2 transition-all duration-300 cursor-pointer ${
                    activeStep === index ? 'shadow-lg scale-105' : 'shadow-sm hover:shadow-md'
                  }`}
                  style={{ borderColor: layer.color }}
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                >
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded mx-auto mb-3"
                    style={{ backgroundColor: `${layer.color}15` }}
                  >
                    <i className={`${layer.icon} text-2xl sm:text-3xl`} style={{ color: layer.color }}></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#313131] text-center mb-1">{layer.title}</h3>
                  <p className="text-xs font-medium text-center" style={{ color: layer.color }}>{layer.subtitle}</p>
                  
                  {/* Expanded info */}
                  {activeStep === index && (
                    <div className="mt-3 pt-3 border-t border-[#dbe9f4]">
                      <p className="text-xs text-[#274e6d] mb-2">{layer.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {layer.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] px-2 py-0.5 rounded"
                            style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex items-center">
                    <div className="hidden md:flex items-center gap-1">
                      <div className="w-8 h-0.5" style={{ backgroundColor: '#336791' }}></div>
                      <i className="ri-arrow-right-line text-[#336791] text-xl"></i>
                    </div>
                    <div className="md:hidden flex flex-col items-center gap-1">
                      <div className="w-0.5 h-6" style={{ backgroundColor: '#336791' }}></div>
                      <i className="ri-arrow-down-line text-[#336791] text-xl"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-[#ff9900]/10 rounded p-4 sm:p-6 border border-[#ff9900]/30">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[#ff9900]/20 rounded flex-shrink-0">
              <i className="ri-error-warning-line text-[#ff9900] text-xl"></i>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#313131] mb-1">Importante</h4>
              <p className="text-sm text-[#274e6d]">
                El <strong className="text-[#336791]">frontend nunca habla directamente con la base de datos</strong>; siempre lo hace a través del backend, que recibe peticiones HTTP, valida datos, ejecuta consultas SQL (o a través de un ORM) y regresa la respuesta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
