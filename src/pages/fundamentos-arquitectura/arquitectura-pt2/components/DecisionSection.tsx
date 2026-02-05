
export default function DecisionSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#3B82F6]/10 rounded-full">
            <i className="ri-compass-3-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Guía de Decisión</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Cuándo Elegir Uno u Otro
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Evalúa por tamaño de equipo, tráfico y complejidad para tomar la mejor decisión
          </p>
        </div>

        {/* Resumen principal */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Usa <strong className="text-[#3B82F6]">monolítica</strong> para simplicidad inicial (prototipos &lt;100k usuarios); migra a <strong className="text-[#10B981]">microservicios</strong> si necesitas escalar partes independientes (alto tráfico como Netflix). <strong className="text-[#3B82F6]">Serverless</strong> brilla en cargas variables (APIs esporádicas), mientras <strong className="text-[#10B981]">MVC</strong> organiza código en monolitos o micros. Evalúa por tamaño de equipo, tráfico y complejidad: monolito para speed-to-market, micro/serverless para scale.
          </p>
        </div>

        {/* Matriz de decisión */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
          {/* Monolítica */}
          <div className="bg-white border-2 border-[#3B82F6] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg">
                <i className="ri-building-4-line text-[#3B82F6] text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Monolítica</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-user-line text-[#3B82F6] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Equipo</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Pequeño (1-10 personas)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-line-chart-line text-[#3B82F6] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Tráfico</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Bajo a medio (&lt;100k usuarios)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-time-line text-[#3B82F6] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Prioridad</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Speed-to-market</div>
                </div>
              </div>
            </div>
          </div>

          {/* Microservicios */}
          <div className="bg-white border-2 border-[#10B981] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg">
                <i className="ri-apps-2-line text-[#10B981] text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Microservicios</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-team-line text-[#10B981] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Equipo</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Grande (múltiples equipos)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-rocket-line text-[#10B981] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Tráfico</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Alto (millones de usuarios)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-scales-3-line text-[#10B981] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Prioridad</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Escalabilidad independiente</div>
                </div>
              </div>
            </div>
          </div>

          {/* Serverless */}
          <div className="bg-white border-2 border-[#3B82F6] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg">
                <i className="ri-cloud-line text-[#3B82F6] text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Serverless</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-user-star-line text-[#3B82F6] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Equipo</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Pequeño (startups)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-pulse-line text-[#3B82F6] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Tráfico</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Variable e impredecible</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-money-dollar-circle-line text-[#3B82F6] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Prioridad</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Minimizar costos</div>
                </div>
              </div>
            </div>
          </div>

          {/* MVC */}
          <div className="bg-white border-2 border-[#10B981] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg">
                <i className="ri-layout-grid-line text-[#10B981] text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">MVC</h3>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-group-line text-[#10B981] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Equipo</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Mediano (5-20 personas)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-bar-chart-line text-[#10B981] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Complejidad</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Media (UI dinámica)</div>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <i className="ri-file-code-line text-[#10B981] text-base md:text-lg flex-shrink-0 mt-0.5"></i>
                <div>
                  <div className="font-semibold text-[#1A2332] text-sm md:text-base">Prioridad</div>
                  <div className="text-xs md:text-sm text-[#64748B]">Organización de código</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flujo de decisión */}
        <div className="bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-5 md:p-10 border border-[#3B82F6]/20">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-6 md:mb-8 text-center">Flujo de Decisión</h3>
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-lg p-4 md:p-6 border-l-4 border-[#3B82F6]">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#3B82F6] rounded-full text-white font-bold flex-shrink-0 text-xs md:text-base">1</div>
                <div>
                  <h4 className="font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">¿Es un prototipo o MVP?</h4>
                  <p className="text-xs md:text-base text-[#64748B]">→ Usa <strong className="text-[#3B82F6]">Monolítica</strong> para lanzar rápido</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 border-l-4 border-[#10B981]">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#10B981] rounded-full text-white font-bold flex-shrink-0 text-xs md:text-base">2</div>
                <div>
                  <h4 className="font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">¿Necesitas escalar partes independientes?</h4>
                  <p className="text-xs md:text-base text-[#64748B]">→ Migra a <strong className="text-[#10B981]">Microservicios</strong></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 border-l-4 border-[#3B82F6]">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#3B82F6] rounded-full text-white font-bold flex-shrink-0 text-xs md:text-base">3</div>
                <div>
                  <h4 className="font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">¿Tráfico impredecible o esporádico?</h4>
                  <p className="text-xs md:text-base text-[#64748B]">→ Considera <strong className="text-[#3B82F6]">Serverless</strong></p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 border-l-4 border-[#10B981]">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-[#10B981] rounded-full text-white font-bold flex-shrink-0 text-xs md:text-base">4</div>
                <div>
                  <h4 className="font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">¿Necesitas organizar código complejo?</h4>
                  <p className="text-xs md:text-base text-[#64748B]">→ Aplica <strong className="text-[#10B981]">MVC</strong> en cualquier arquitectura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
