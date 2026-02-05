
import { useState } from 'react';

export default function ProjectTimeline() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: 'Formación de Equipos',
      description: 'Máximo 4 personas por equipo',
      icon: 'ri-team-line'
    },
    {
      number: 2,
      title: 'Asignación de Roles',
      description: 'Scrum Master, Product Owner, Developer, Admin BD/Seguridad',
      icon: 'ri-user-settings-line'
    },
    {
      number: 3,
      title: 'Tracking en Trello',
      description: 'Gestión ágil del proyecto',
      icon: 'ri-trello-line'
    },
    {
      number: 4,
      title: 'Commits Quincenales',
      description: 'Mínimo 3 commits significativos',
      icon: 'ri-git-commit-line'
    },
    {
      number: 5,
      title: 'Código Público',
      description: 'Repositorio abierto en GitHub',
      icon: 'ri-github-line'
    },
    {
      number: 6,
      title: 'Presentación Final',
      description: 'Demo grupal del proyecto',
      icon: 'ri-presentation-line'
    }
  ];

  return (
    <section id="proyecto" className="py-12 sm:py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b3d70] mb-4">
            Dinámica del Proyecto
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#bb8800] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Sigue estos pasos para completar exitosamente tu proyecto de desarrollo web
          </p>
        </div>

        <div className="mb-10 sm:mb-16 bg-gradient-to-r from-[#1b3d70] to-[#2a5490] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-white">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-lightbulb-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Enfoque del Proyecto</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Los proyectos deben atender <strong>problemáticas universitarias actuales</strong>, de la comunidad o familiares. 
                La idea es que tu proyecto pueda convertirse en un futuro <strong>MVP (Producto Mínimo Viable)</strong> o incluso 
                presentarlo en una <strong>Semana de MAC</strong> como proyecto a desarrollar.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-user-heart-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Desarrollo de Habilidades Blandas</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                En el proyecto desarrollarás tus <strong>habilidades blandas</strong>: comunicación efectiva, trabajo en equipo, 
                resolución de conflictos, liderazgo y gestión del tiempo. Estas competencias son fundamentales en el entorno profesional.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 sm:mb-16 bg-[#c41e3a] rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-white">
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-user-line text-2xl sm:text-4xl text-[#c41e3a]"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 flex items-center flex-wrap">
                <i className="ri-alert-line mr-2 sm:mr-3"></i>
                <span>IMPORTANTE: Respeto y Profesionalismo</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 text-white/95 leading-relaxed text-sm sm:text-base">
                <p>
                  Deben mantener <strong>SIEMPRE el respeto</strong> por sus compañeros. La idea no es causar conflictos, 
                  es <strong>aprender a solucionarlos</strong> como en un entorno profesional real.
                </p>
                <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                  <p className="font-semibold mb-2 text-sm sm:text-lg">
                    <i className="ri-error-warning-line mr-2"></i>
                    Reporta cualquier situación de incumplimiento
                  </p>
                  <p className="text-xs sm:text-base">
                    Si algún miembro del equipo no cumple con sus responsabilidades, repórtalo al profesor. 
                    Esto es parte del aprendizaje profesional.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm border-2 border-white/30">
                  <p className="text-base sm:text-xl font-bold mb-2">
                    <i className="ri-close-circle-line mr-2"></i>
                    Consecuencia por Falta de Respeto
                  </p>
                  <p className="text-sm sm:text-lg">
                    Si alguien le falta al respeto a otro estudiante, <strong>perderá derecho a ser evaluado 
                    en la dinámica de equipo</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1.5 bg-[#bb8800] transform -translate-y-1/2"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                onMouseEnter={() => setHoveredStep(step.number)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`flex flex-col items-center ${index % 2 === 0 ? 'lg:flex-col' : 'lg:flex-col-reverse'}`}>
                  <div
                    className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 lg:mb-8 w-full transition-all duration-300 ${
                      hoveredStep === step.number ? 'shadow-2xl -translate-y-2' : ''
                    } ${index % 2 === 0 ? 'lg:mb-16' : 'lg:mt-16'}`}
                  >
                    <div className="text-center">
                      <div className={`w-10 h-10 sm:w-14 md:w-16 sm:h-14 md:h-16 mx-auto mb-2 sm:mb-4 rounded-full flex items-center justify-center ${
                        hoveredStep === step.number ? 'bg-[#bb8800]' : 'bg-[#1b3d70]'
                      } transition-colors duration-300`}>
                        <i className={`${step.icon} text-xl sm:text-2xl md:text-3xl text-white`}></i>
                      </div>
                      <h3 className="text-[#1b3d70] font-bold text-xs sm:text-sm md:text-lg mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 hidden lg:block">
                    <div
                      className={`w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 rounded-full border-4 md:border-8 flex items-center justify-center transition-all duration-300 ${
                        hoveredStep === step.number
                          ? 'bg-[#bb8800] border-[#bb8800] scale-110'
                          : 'bg-white border-[#bb8800]'
                      }`}
                    >
                      <span
                        className={`text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                          hoveredStep === step.number ? 'text-white' : 'text-[#1b3d70]'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Mobile number badge */}
                  <div className="lg:hidden absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#bb8800] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">{step.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1b3d70] mb-6 text-center">
            Requisitos Importantes del Proyecto
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-check-line text-white text-lg sm:text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#1b3d70] mb-1 sm:mb-2 text-sm sm:text-base">Commits Significativos</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Cada miembro debe realizar al menos 3 commits significativos cada quincena, 
                  demostrando contribución real al proyecto.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-check-line text-white text-lg sm:text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#1b3d70] mb-1 sm:mb-2 text-sm sm:text-base">Repositorio Público</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  El código debe estar disponible en un repositorio público de GitHub, 
                  permitiendo la revisión y evaluación continua.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-check-line text-white text-lg sm:text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#1b3d70] mb-1 sm:mb-2 text-sm sm:text-base">Metodología Scrum</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Implementación de Scrum con roles definidos, sprints y reuniones de seguimiento 
                  documentadas en Trello.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-check-line text-white text-lg sm:text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#1b3d70] mb-1 sm:mb-2 text-sm sm:text-base">Presentación Grupal</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Demo final donde cada miembro presenta su contribución y el equipo 
                  demuestra la funcionalidad completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
