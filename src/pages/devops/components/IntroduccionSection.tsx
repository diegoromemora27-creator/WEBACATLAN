export default function IntroduccionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-information-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">Fundamentos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Introducción a DevOps
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Una filosofía que transforma la forma en que desarrollamos y operamos software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Definición */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-lightbulb-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  ¿Qué es DevOps?
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed">
                  DevOps es una <strong className="text-[#2560ff]">filosofía y conjunto de prácticas</strong> que busca integrar y alinear los equipos de desarrollo (Dev) y operaciones (Ops) para mejorar la colaboración, la automatización y la entrega continua de software.
                </p>
              </div>
            </div>
          </div>

          {/* Objetivo */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-target-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Objetivo Principal
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed">
                  Acortar el <strong className="text-[#0DB7ED]">ciclo de vida del desarrollo</strong>, incrementar la calidad de las entregas y fomentar una cultura de mejora continua mediante sistemas más ágiles y confiables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filosofía DevOps */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 md:p-10 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-team-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              La Filosofía DevOps
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-chat-3-line text-2xl"></i>
                <h4 className="font-bold text-base sm:text-lg">Comunicación Abierta</h4>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Elimina barreras entre equipos promoviendo diálogo constante y transparente
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-shield-user-line text-2xl"></i>
                <h4 className="font-bold text-base sm:text-lg">Responsabilidad Compartida</h4>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Todos comparten el ciclo completo del software, desde planificación hasta producción
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-tools-line text-2xl"></i>
                <h4 className="font-bold text-base sm:text-lg">Automatización Intensiva</h4>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Uso de herramientas que facilitan integración y despliegue automatizado
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-3">
              <i className="ri-arrow-right-circle-line text-2xl flex-shrink-0 mt-1"></i>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-2">Resultado</h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Sistemas más <strong>ágiles</strong>, <strong>confiables</strong> y <strong>orientados al cambio constante</strong> del entorno tecnológico, con tiempos de entrega reducidos y mayor estabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infinity Loop */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#0DB7ED]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4">
            <i className="ri-infinity-line text-[#0DB7ED] text-base sm:text-lg"></i>
            <span className="text-[#0DB7ED] text-xs sm:text-sm font-semibold">Ciclo Continuo</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-4">
            Ciclo de Vida DevOps (Infinity Loop)
          </h3>
          <p className="text-sm sm:text-base text-[#1D2327]/70 max-w-3xl mx-auto mb-6">
            Representado por el símbolo de infinito, describe fases interconectadas que se retroalimentan continuamente
          </p>

          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {[
                { icon: 'ri-calendar-line', label: 'Planificar', color: '#2560ff' },
                { icon: 'ri-code-line', label: 'Codificar', color: '#0DB7ED' },
                { icon: 'ri-hammer-line', label: 'Construir', color: '#2560ff' },
                { icon: 'ri-test-tube-line', label: 'Probar', color: '#0DB7ED' },
                { icon: 'ri-gift-line', label: 'Liberar', color: '#2560ff' },
                { icon: 'ri-rocket-line', label: 'Desplegar', color: '#0DB7ED' },
                { icon: 'ri-settings-3-line', label: 'Operar', color: '#2560ff' },
                { icon: 'ri-eye-line', label: 'Monitorear', color: '#0DB7ED' },
              ].map((phase, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-white font-medium text-xs sm:text-sm whitespace-nowrap"
                    style={{ backgroundColor: phase.color }}
                  >
                    <i className={`${phase.icon} text-base sm:text-lg`}></i>
                    <span>{phase.label}</span>
                  </div>
                  {index < 7 && (
                    <i className="ri-arrow-right-line text-[#1D2327]/30 text-lg hidden sm:block"></i>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-[#1D2327]/60 text-xs sm:text-sm">
              <i className="ri-refresh-line text-[#0DB7ED] text-xl"></i>
              <span className="font-medium">Este flujo continuo refleja la naturaleza iterativa de DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
