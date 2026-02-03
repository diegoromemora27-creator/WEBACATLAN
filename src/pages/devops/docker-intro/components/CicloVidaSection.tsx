export default function CicloVidaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0DB7ED]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-refresh-line text-[#0DB7ED] text-base sm:text-lg"></i>
            <span className="text-[#0DB7ED] text-xs sm:text-sm font-semibold">Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Ciclo de Vida de un Contenedor
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Los estados y comandos principales para gestionar contenedores Docker
          </p>
        </div>

        {/* Diagrama de Estados */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#2A2A2A]/10 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg">
              <i className="ri-flow-chart text-white text-xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327]">
              Estados del Contenedor
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {[
              { state: 'Created', icon: 'ri-file-add-line', color: '#2560ff', description: 'Contenedor creado pero no iniciado' },
              { state: 'Running', icon: 'ri-play-circle-line', color: '#0DB7ED', description: 'Contenedor en ejecución' },
              { state: 'Paused', icon: 'ri-pause-circle-line', color: '#2560ff', description: 'Procesos suspendidos temporalmente' },
              { state: 'Stopped', icon: 'ri-stop-circle-line', color: '#0DB7ED', description: 'Contenedor detenido' },
              { state: 'Exited', icon: 'ri-checkbox-circle-line', color: '#2560ff', description: 'Proceso finalizado' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-white min-w-[120px] sm:min-w-[140px]"
                  style={{ backgroundColor: item.color }}
                >
                  <i className={`${item.icon} text-2xl sm:text-3xl`}></i>
                  <span className="font-bold text-sm sm:text-base">{item.state}</span>
                </div>
                {index < 4 && (
                  <i className="ri-arrow-right-line text-[#1D2327]/30 text-xl hidden sm:block"></i>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comandos Principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Build */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-hammer-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Build
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Construye una imagen a partir de un Dockerfile
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3">
                  <code className="text-xs sm:text-sm text-[#2560ff] font-mono break-all">docker build -t myapp:v1 .</code>
                </div>
              </div>
            </div>
          </div>

          {/* Run */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-play-circle-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Run
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Crea y ejecuta un nuevo contenedor
                </p>
                <div className="bg-[#0DB7ED]/10 rounded-lg p-3">
                  <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono break-all">docker run -d -p 8080:80 myapp:v1</code>
                </div>
              </div>
            </div>
          </div>

          {/* Stop */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-stop-circle-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Stop
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Detiene un contenedor en ejecución
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3">
                  <code className="text-xs sm:text-sm text-[#2560ff] font-mono break-all">docker stop container_id</code>
                </div>
              </div>
            </div>
          </div>

          {/* Start */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-restart-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Start
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Reinicia un contenedor detenido
                </p>
                <div className="bg-[#0DB7ED]/10 rounded-lg p-3">
                  <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono break-all">docker start container_id</code>
                </div>
              </div>
            </div>
          </div>

          {/* Logs */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-file-list-3-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Logs
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Muestra los logs del contenedor
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3">
                  <code className="text-xs sm:text-sm text-[#2560ff] font-mono break-all">docker logs -f container_id</code>
                </div>
              </div>
            </div>
          </div>

          {/* Exec */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-terminal-box-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Exec
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Ejecuta comandos dentro del contenedor
                </p>
                <div className="bg-[#0DB7ED]/10 rounded-lg p-3">
                  <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono break-all">docker exec -it container_id bash</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comandos Adicionales */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-command-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Comandos Útiles Adicionales
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <code className="text-sm text-white font-mono block mb-2">docker ps</code>
              <p className="text-xs sm:text-sm text-white/90">Lista contenedores activos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <code className="text-sm text-white font-mono block mb-2">docker ps -a</code>
              <p className="text-xs sm:text-sm text-white/90">Lista todos los contenedores</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <code className="text-sm text-white font-mono block mb-2">docker images</code>
              <p className="text-xs sm:text-sm text-white/90">Lista imágenes locales</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <code className="text-sm text-white font-mono block mb-2">docker rm</code>
              <p className="text-xs sm:text-sm text-white/90">Elimina contenedor</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <code className="text-sm text-white font-mono block mb-2">docker rmi</code>
              <p className="text-xs sm:text-sm text-white/90">Elimina imagen</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <code className="text-sm text-white font-mono block mb-2">docker inspect</code>
              <p className="text-xs sm:text-sm text-white/90">Detalles del contenedor</p>
            </div>
          </div>

          <div className="mt-6 p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-3">
              <i className="ri-lightbulb-line text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-2">Tip Pro</h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  Usa <code className="bg-white/10 px-1.5 py-0.5 rounded">docker-compose</code> para gestionar múltiples contenedores con un solo archivo de configuración YAML, ideal para entornos de desarrollo complejos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
