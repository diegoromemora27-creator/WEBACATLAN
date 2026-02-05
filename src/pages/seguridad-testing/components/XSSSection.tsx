export default function XSSSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#CCFF00]/30">
            <span className="text-[#CCFF00] text-xs sm:text-sm font-bold">#5</span>
            <span className="text-[#D1D1D1] text-xs sm:text-sm font-medium">Vulnerabilidad Crítica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Cross-Site Scripting (XSS)
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-code-s-slash-line text-2xl sm:text-3xl text-red-400"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                ¿Qué es Cross-Site Scripting?
              </h3>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
                Permite <span className="text-[#CCFF00] font-semibold">inyectar scripts maliciosos</span> en páginas vistas por otros usuarios, robando sesiones, cookies o datos vía entradas no escapadas o sanitizadas.
              </p>
            </div>
          </div>

          {/* Tipos de XSS */}
          <div className="mb-6">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">Tipos de XSS</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-database-2-line text-xl text-red-400"></i>
                  <h5 className="text-sm sm:text-base font-bold text-white">Stored XSS</h5>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">
                  Script guardado en BD, ejecutado cada vez que se carga la página
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-flashlight-line text-xl text-red-400"></i>
                  <h5 className="text-sm sm:text-base font-bold text-white">Reflected XSS</h5>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">
                  Script en URL, reflejado inmediatamente en la respuesta
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-window-line text-xl text-red-400"></i>
                  <h5 className="text-sm sm:text-base font-bold text-white">DOM-based XSS</h5>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">
                  Manipulación del DOM en el cliente sin pasar por servidor
                </p>
              </div>
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
                  <span className="text-[#D1D1D1]">document.getElementById(</span><span className="text-[#50fa7b]">'msg'</span><span className="text-[#D1D1D1]">).innerHTML =</span>{'\n'}
                  <span className="text-[#D1D1D1]">  location.hash.substring(</span><span className="text-[#ff79c6]">1</span><span className="text-[#D1D1D1]">);</span> <span className="text-[#6272a4]">// Vulnerable</span>
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
              <span className="text-[#D1D1D1] text-xs sm:text-sm">Usa textContent en lugar de innerHTML</span>
            </div>
            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm leading-relaxed">
                <code>
                  <span className="text-[#D1D1D1]">document.getElementById(</span><span className="text-[#50fa7b]">'msg'</span><span className="text-[#D1D1D1]">).textContent =</span>{'\n'}
                  <span className="text-[#D1D1D1]">  location.hash.substring(</span><span className="text-[#ff79c6]">1</span><span className="text-[#D1D1D1]">);</span> <span className="text-[#6272a4]">// Usa textContent</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Caso Real */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-alarm-warning-line text-xl sm:text-2xl text-red-400 flex-shrink-0"></i>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Caso Real: Gusano Samy en MySpace (2005)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed">
                  El gusano Samy usó <span className="text-red-400 font-bold">XSS para infectar 1 millón de perfiles en 20 horas</span>. El script se auto-replicaba en cada perfil visitado, agregando a "Samy" como amigo y propagando el código malicioso.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mitigación */}
        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <i className="ri-shield-check-line text-[#CCFF00]"></i>
            Cómo Prevenir XSS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Escapar Salidas (htmlspecialchars)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Convierte caracteres especiales en entidades HTML</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">CSP (Content Security Policy)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Headers que restringen fuentes de scripts permitidas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Validar y Sanitizar Entrada</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Filtrar caracteres peligrosos antes de procesar</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Usar textContent en lugar de innerHTML</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Evita ejecución de scripts en el DOM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">HttpOnly Cookies</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Previene acceso a cookies desde JavaScript</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Frameworks Modernos</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">React, Vue, Angular escapan automáticamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}