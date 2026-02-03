export default function IntroduccionDockerSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-ship-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">¿Qué es Docker?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Introducción a Docker
          </h2>
        </div>

        {/* Analogía Musical */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 md:p-10 text-white mb-8 sm:mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
              <i className="ri-music-2-line text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                La Analogía Musical
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Imagina que cada aplicación que desarrollas es como un <strong>instrumento musical</strong>: uno puede sonar bien en tu estudio, pero al llevarlo a un escenario diferente, con otra acústica, de pronto deja de funcionar igual. En el mundo del software, esto pasa cuando una aplicación corre sin problemas en tu computadora, pero falla al desplegarla en un servidor distinto.
              </p>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              <strong>Docker llegó para resolver esta disonancia</strong>, estandarizando el entorno en el que cada "instrumento" (aplicación) toca su melodía.
            </p>
          </div>
        </div>

        {/* Definición Principal */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-box-3-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  ¿Qué es Docker?
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed">
                  Docker es la <strong className="text-[#2560ff]">plataforma líder en contenedorización</strong>, una tecnología que permite empaquetar tus aplicaciones junto con todo lo que necesitan para funcionar —bibliotecas, dependencias, configuraciones del sistema— y ejecutar ese paquete en cualquier lugar, desde tu laptop hasta un clúster en la nube.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-speed-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Ventaja sobre VMs
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed">
                  A diferencia de las máquinas virtuales, donde cada entorno tiene su propio sistema operativo completo, los contenedores <strong className="text-[#0DB7ED]">comparten el kernel del sistema anfitrión</strong> y solo aíslan lo necesario. Esto los hace mucho más ligeros, veloces y eficientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-[#2A2A2A]/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg">
              <i className="ri-lightbulb-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327]">
              Ideales Para
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#2A2A2A]/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-code-s-slash-line text-[#2560ff] text-2xl"></i>
                <h4 className="font-bold text-base sm:text-lg text-[#1D2327]">Desarrollo</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70 leading-relaxed">
                Entornos consistentes para todos los desarrolladores del equipo
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#2A2A2A]/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-refresh-line text-[#0DB7ED] text-2xl"></i>
                <h4 className="font-bold text-base sm:text-lg text-[#1D2327]">CI/CD</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70 leading-relaxed">
                Pipelines automatizados con builds reproducibles
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#2A2A2A]/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-apps-line text-[#2560ff] text-2xl"></i>
                <h4 className="font-bold text-base sm:text-lg text-[#1D2327]">Microservicios</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70 leading-relaxed">
                Arquitecturas distribuidas con servicios independientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
