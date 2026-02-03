
export default function CourseInfo() {
  return (
    <section id="curso" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b3d70] mb-4">
            Información del Curso
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#bb8800] mx-auto"></div>
        </div>

        <div className="bg-white border-4 border-[#1b3d70] rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1b3d70] mb-6 sm:mb-8 text-center">
            Información Técnica
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Modalidad</div>
              <div className="text-[#1b3d70] font-bold text-base sm:text-xl">Curso</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Carácter</div>
              <div className="text-[#1b3d70] font-bold text-base sm:text-xl">Obligatoria</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Tipo</div>
              <div className="text-[#1b3d70] font-bold text-base sm:text-xl">Teórico-Práctica</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Horas/Semestre</div>
              <div className="text-[#1b3d70] font-bold text-base sm:text-xl">64</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Horas/Semana</div>
              <div className="text-[#1b3d70] font-bold text-base sm:text-xl">4</div>
            </div>
            <div className="text-center">
              <div className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Créditos</div>
              <div className="text-[#1b3d70] font-bold text-base sm:text-xl">6</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#1b3d70] to-[#2a5490] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bb8800] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-book-open-line text-2xl sm:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Materia Antecedente</h3>
                <p className="text-white/80 text-xs sm:text-sm">Requisito previo</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Ingeniería de Software</p>
              <p className="text-white/70 text-xs sm:text-sm">
                Fundamentos de análisis, diseño y gestión de proyectos de software
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#bb8800] to-[#d49a00] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1b3d70] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-rocket-line text-2xl sm:text-3xl"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Materias Subsecuentes</h3>
                <p className="text-white/90 text-xs sm:text-sm">Continúa tu formación</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6">
              <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Tópicos Avanzados de Programación</p>
              <p className="text-white/90 text-xs sm:text-sm">
                Profundiza en arquitecturas modernas y tecnologías emergentes
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1b3d70] mb-6 text-center">
            Características del Curso
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1b3d70] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="ri-team-line text-3xl sm:text-4xl text-white"></i>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#1b3d70] mb-2">Trabajo en Equipo</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Desarrollo colaborativo con metodologías ágiles y roles definidos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#bb8800] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="ri-code-box-line text-3xl sm:text-4xl text-white"></i>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#1b3d70] mb-2">Práctica Intensiva</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                64 horas de desarrollo práctico con tecnologías actuales del mercado
              </p>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1b3d70] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className="ri-git-branch-line text-3xl sm:text-4xl text-white"></i>
              </div>
              <h4 className="font-bold text-base sm:text-lg text-[#1b3d70] mb-2">Control de Versiones</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Gestión profesional de código con Git y repositorios públicos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
