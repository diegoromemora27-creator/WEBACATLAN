
export default function Gamification() {
  return (
    <section id="gamificacion" className="py-12 sm:py-20 bg-[#bb8800] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 sm:w-32 h-20 sm:h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 sm:w-40 h-28 sm:h-40 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
            <i className="ri-trophy-line text-[#bb8800] text-2xl sm:text-4xl"></i>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Sistema de Recompensas
          </h2>
          <p className="text-white/90 text-base sm:text-xl">
            Gana beneficios por tu participación activa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative">
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#1b3d70] text-white text-lg sm:text-2xl font-bold w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg leading-tight text-center">
              TOP<br/>3
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bb8800] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="ri-medal-line text-white text-2xl sm:text-3xl"></i>
            </div>
            <h3 className="text-[#1b3d70] text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
              Exención de Examen
            </h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
              Los 3 estudiantes con mayor participación en clase pueden 
              <strong className="text-[#1b3d70]"> exentar el examen más cercano</strong>. 
              ¡Participa activamente y gana este beneficio!
            </p>
            <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">
                1
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">
                2
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm sm:text-base">
                3
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bb8800] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="ri-star-line text-white text-2xl sm:text-3xl"></i>
            </div>
            <h3 className="text-[#1b3d70] text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
              Acumulación de Décimas
            </h3>
            <p className="text-gray-600 text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Cada participación valiosa suma décimas a tu calificación final. 
              Acumula puntos y mejora tu promedio.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 sm:p-3">
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Participación activa</span>
                <span className="text-[#bb8800] font-bold text-sm sm:text-base">+0.1</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 sm:p-3">
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Pregunta relevante</span>
                <span className="text-[#bb8800] font-bold text-sm sm:text-base">+0.1</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 sm:p-3">
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Aportación valiosa</span>
                <span className="text-[#bb8800] font-bold text-sm sm:text-base">+0.2</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#bb8800] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="ri-exchange-line text-white text-2xl sm:text-3xl"></i>
            </div>
            <h3 className="text-[#1b3d70] text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
              Canje de Participaciones
            </h3>
            <p className="text-gray-600 text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Acumula participaciones y canjéalas por tareas faltantes. 
              Una excelente forma de recuperar entregas.
            </p>
            <div className="bg-gradient-to-r from-[#1b3d70] to-[#2a5490] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-2xl sm:text-3xl font-bold">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <i className="ri-chat-voice-line"></i>
                  <span>3</span>
                </div>
                <span>=</span>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <i className="ri-file-list-line"></i>
                  <span>1</span>
                </div>
              </div>
              <p className="text-center text-xs sm:text-sm mt-3 sm:mt-4 text-white/80">
                3 Participaciones = 1 Tarea
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/30 pt-8 sm:pt-12">
          <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Oportunidades de Puntos Extra
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1b3d70] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-mic-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-[#1b3d70] text-lg sm:text-xl font-bold">Conferencias MAC</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Asiste a eventos académicos</p>
                </div>
              </div>
              <div className="bg-[#bb8800] text-white rounded-xl p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-1">Al menos 1</div>
                <p className="text-xs sm:text-sm text-white/90">Equivalentes por conferencia</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1b3d70] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-graduation-cap-line text-white text-xl sm:text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-[#1b3d70] text-lg sm:text-xl font-bold">Cursos Externos</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Certificaciones complementarias</p>
                </div>
              </div>
              <div className="bg-[#bb8800] text-white rounded-xl p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-4xl font-bold mb-1">6 Horas min</div>
                <p className="text-xs sm:text-sm text-white/90">Por curso certificado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
