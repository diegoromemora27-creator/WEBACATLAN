
import { useEffect, useState } from 'react';

export default function EvaluationDashboard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('evaluacion');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="evaluacion" className="py-12 sm:py-20 bg-gray-50">
      <div className="bg-[#c41e3a] py-4 sm:py-6 mb-10 sm:mb-16 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-alert-line text-[#c41e3a] text-xl sm:text-2xl"></i>
          </div>
          <p className="text-white font-semibold text-sm sm:text-lg md:text-xl text-center">
            IMPORTANTE: Aprobar los 3 exámenes es requisito indispensable para ser evaluado
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b3d70] mb-4">
            Sistema de Evaluación
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#bb8800] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-10 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#bb8800] to-[#d49a00] h-20 sm:h-28 relative flex items-center justify-center">
                <h3 className="text-white text-2xl sm:text-3xl font-bold">PROYECTO</h3>
                <div className="absolute top-2 sm:top-4 right-4 sm:right-6 text-white/40 text-4xl sm:text-6xl font-bold">70%</div>
              </div>
              
              <div className="p-6 sm:p-10">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm">Autoevaluación/Scrum</span>
                      <span className="text-[#1b3d70] font-bold text-sm sm:text-base">20%</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full transition-all duration-1000 ${
                          isVisible ? 'w-[20%]' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm">Desempeño Individual/Commits</span>
                      <span className="text-[#1b3d70] font-bold text-sm sm:text-base">20%</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded-full transition-all duration-1000 delay-200 ${
                          isVisible ? 'w-[20%]' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold text-xs sm:text-sm">Funcionalidad de Equipo</span>
                      <span className="text-[#1b3d70] font-bold text-sm sm:text-base">30%</span>
                    </div>
                    <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-[#1e40af] to-[#2563eb] rounded-full transition-all duration-1000 delay-400 ${
                          isVisible ? 'w-[30%]' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-[#bb8800]/10 rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-700 text-center">
                    <i className="ri-information-line text-[#bb8800] mr-2"></i>
                    El proyecto se desarrolla en equipo durante todo el semestre
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#1b3d70] to-[#2a5490] h-20 sm:h-28 relative flex items-center justify-center">
                <h3 className="text-white text-2xl sm:text-3xl font-bold">EXÁMENES</h3>
                <div className="absolute top-2 sm:top-4 right-4 sm:right-6 text-white/40 text-4xl sm:text-6xl font-bold">30%</div>
              </div>
              
              <div className="p-6 sm:p-10 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#1b3d70]/30"></div>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="flex flex-col items-center relative z-10">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-[#1b3d70] bg-white flex items-center justify-center shadow-lg">
                          <span className="text-[#1b3d70] text-xl sm:text-2xl font-bold">{num}</span>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 font-medium">Parcial {num}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-[#c41e3a]/10 rounded-xl w-full">
                  <p className="text-xs sm:text-sm text-gray-700 text-center font-semibold">
                    <i className="ri-error-warning-line text-[#c41e3a] mr-2"></i>
                    Aprobar los 3 es obligatorio
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] h-20 sm:h-28 relative flex items-center justify-center">
                <h3 className="text-white text-2xl sm:text-3xl font-bold">TAREAS</h3>
                <div className="absolute top-2 sm:top-4 right-3 sm:right-6 bg-[#c41e3a] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                  OBLIGATORIO
                </div>
              </div>
              
              <div className="p-6 sm:p-10 flex flex-col items-center justify-center h-[calc(100%-5rem)] sm:h-[calc(100%-7rem)]">
                <div className="w-24 h-24 sm:w-32 sm:h-32 text-[#2c3e50] mb-4 sm:mb-6 flex items-center justify-center">
                  <i className="ri-task-line text-6xl sm:text-8xl"></i>
                </div>
                
                <p className="text-gray-700 text-center font-semibold text-base sm:text-lg">
                  Condición para derecho a examen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
