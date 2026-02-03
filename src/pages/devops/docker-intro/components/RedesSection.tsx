export default function RedesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0DB7ED]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-share-line text-[#0DB7ED] text-base sm:text-lg"></i>
            <span className="text-[#0DB7ED] text-xs sm:text-sm font-semibold">Conectividad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Redes en Docker
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            La comunicación entre contenedores es esencial en entornos con múltiples servicios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Red Puente */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-router-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Red Puente (Bridge)
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Es la <strong className="text-[#2560ff]">red predeterminada</strong> que permite que varios contenedores se comuniquen entre sí dentro del mismo host, como si estuvieran conectados a un mismo router virtual.
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-check-line text-[#2560ff] text-lg"></i>
                    <span className="text-xs sm:text-sm text-[#1D2327]/80 font-medium">Red por defecto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Red Host */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-computer-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Red Host
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  El contenedor <strong className="text-[#0DB7ED]">comparte directamente la red del ordenador anfitrión</strong>, eliminando el aislamiento. Útil para maximizar el rendimiento en algunos casos, aunque menos seguro.
                </p>
                <div className="bg-[#0DB7ED]/10 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-speed-line text-[#0DB7ED] text-lg"></i>
                    <span className="text-xs sm:text-sm text-[#1D2327]/80 font-medium">Máximo rendimiento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Red Overlay */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-global-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Red Overlay
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Ideal para <strong className="text-[#2560ff]">arquitecturas distribuidas</strong>. Permite que contenedores en diferentes máquinas dentro de un clúster Docker Swarm se comuniquen como si estuvieran en la misma red local.
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-server-line text-[#2560ff] text-lg"></i>
                    <span className="text-xs sm:text-sm text-[#1D2327]/80 font-medium">Multi-host</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Puertos */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-door-open-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Puertos
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  El <strong className="text-[#0DB7ED]">mapeo de puertos</strong> conecta el puerto del contenedor con el del host, haciendo accesible un servicio desde el exterior.
                </p>
                <div className="bg-[#0DB7ED]/10 rounded-lg p-3 sm:p-4">
                  <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono">-p 8080:80</code>
                  <p className="text-xs text-[#1D2327]/60 mt-1">Puerto 80 del contenedor → Puerto 8080 del host</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagrama Visual */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-flow-chart text-white text-xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Comunicación entre Contenedores
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-box-3-line text-xl"></i>
                <span className="font-bold text-sm sm:text-base">Contenedor A</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90">Frontend (React)</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <i className="ri-arrow-right-line text-2xl"></i>
                <span className="text-xs sm:text-sm font-medium">Bridge Network</span>
                <i className="ri-arrow-right-line text-2xl"></i>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-box-3-line text-xl"></i>
                <span className="font-bold text-sm sm:text-base">Contenedor B</span>
              </div>
              <p className="text-xs sm:text-sm text-white/90">Backend (Node.js)</p>
            </div>
          </div>

          <div className="mt-6 p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-3">
              <i className="ri-information-line text-xl flex-shrink-0 mt-0.5"></i>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Los contenedores pueden comunicarse usando sus <strong>nombres de servicio</strong> como hostnames, sin necesidad de conocer IPs específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
