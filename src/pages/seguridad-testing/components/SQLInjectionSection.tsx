export default function SQLInjectionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#CCFF00]/30">
            <span className="text-[#CCFF00] text-xs sm:text-sm font-bold">#1</span>
            <span className="text-[#D1D1D1] text-xs sm:text-sm font-medium">Vulnerabilidad Crítica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Inyección SQL (SQL Injection)
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-bug-line text-2xl sm:text-3xl text-red-400"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                ¿Qué es la Inyección SQL?
              </h3>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
                La inyección SQL ocurre cuando un atacante <span className="text-[#CCFF00] font-semibold">inserta código malicioso en consultas SQL no sanitizadas</span>, permitiendo acceso no autorizado a bases de datos, modificación o eliminación de información sensible.
              </p>
            </div>
          </div>

          {/* Código Vulnerable */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="px-3 py-1 bg-red-500/20 rounded-lg border border-red-500/30">
                <span className="text-red-400 text-xs sm:text-sm font-bold">❌ VULNERABLE</span>
              </div>
              <span className="text-[#D1D1D1] text-xs sm:text-sm">Código sin protección</span>
            </div>
            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm leading-relaxed">
                <code>
                  <span className="text-[#ff79c6]">nombre</span> <span className="text-[#D1D1D1]">=</span> <span className="text-[#D1D1D1]">request.GET.get(</span><span className="text-[#50fa7b]">'nombre'</span><span className="text-[#D1D1D1]">)</span>{'\n'}
                  <span className="text-[#D1D1D1]">cur.execute(</span><span className="text-[#50fa7b]">"SELECT * FROM usuarios WHERE nombre = '"</span> <span className="text-[#D1D1D1]">+</span> <span className="text-[#ff79c6]">nombre</span> <span className="text-[#D1D1D1]">+</span> <span className="text-[#50fa7b]">"'"</span><span className="text-[#D1D1D1]">)</span> <span className="text-[#6272a4]"># Vulnerable</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Código Seguro */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="px-3 py-1 bg-[#CCFF00]/20 rounded-lg border border-[#CCFF00]/30">
                <span className="text-[#CCFF00] text-xs sm:text-sm font-bold">✓ SEGURO</span>
              </div>
              <span className="text-[#D1D1D1] text-xs sm:text-sm">Consulta parametrizada</span>
            </div>
            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm leading-relaxed">
                <code>
                  <span className="text-[#ff79c6]">nombre</span> <span className="text-[#D1D1D1]">=</span> <span className="text-[#D1D1D1]">request.GET.get(</span><span className="text-[#50fa7b]">'nombre'</span><span className="text-[#D1D1D1]">)</span>{'\n'}
                  <span className="text-[#D1D1D1]">cur.execute(</span><span className="text-[#50fa7b]">"SELECT * FROM usuarios WHERE nombre = %s"</span><span className="text-[#D1D1D1]">, (</span><span className="text-[#ff79c6]">nombre</span><span className="text-[#D1D1D1]">,))</span> <span className="text-[#6272a4]"># Parametrizado</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Caso Real */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-alarm-warning-line text-xl sm:text-2xl text-red-400 flex-shrink-0"></i>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Caso Real: Heartland Payment Systems (2008)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed mb-3">
                  Heartland Payment Systems sufrió una brecha masiva por inyección SQL, exponiendo <span className="text-red-400 font-bold">130 millones de tarjetas de crédito</span>. Fue uno de los mayores robos de datos financieros en la historia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mitigación */}
        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <i className="ri-shield-check-line text-[#CCFF00]"></i>
            Cómo Prevenir SQL Injection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Consultas Parametrizadas</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Usa placeholders en lugar de concatenación</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">ORMs (Object-Relational Mapping)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">TypeORM, Sequelize, Prisma automatizan la protección</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Validación de Entradas</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Sanitiza y valida todos los datos del usuario</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Cloud Armor / WAF</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Firewalls que bloquean patrones de SQLi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}