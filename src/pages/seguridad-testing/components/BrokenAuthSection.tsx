export default function BrokenAuthSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#CCFF00]/30">
            <span className="text-[#CCFF00] text-xs sm:text-sm font-bold">#2</span>
            <span className="text-[#D1D1D1] text-xs sm:text-sm font-medium">Vulnerabilidad Crítica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Autenticación Rota (Broken Authentication)
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-lock-unlock-line text-2xl sm:text-3xl text-orange-400"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                ¿Qué es Broken Authentication?
              </h3>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
                Se refiere a <span className="text-[#CCFF00] font-semibold">fallos en identificación y autenticación</span> que permiten ataques de fuerza bruta, reutilización de credenciales comprometidas, sesiones débiles o tokens predecibles.
              </p>
            </div>
          </div>

          {/* Vectores de Ataque */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-key-line text-xl text-orange-400"></i>
                <h4 className="text-sm sm:text-base font-bold text-white">Credenciales Débiles</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D1D1D1]">
                Contraseñas predecibles, sin requisitos de complejidad o reutilizadas de brechas anteriores
              </p>
            </div>

            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-time-line text-xl text-orange-400"></i>
                <h4 className="text-sm sm:text-base font-bold text-white">Sesiones Inseguras</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D1D1D1]">
                Tokens de sesión expuestos en URL, sin expiración o sin invalidación al cerrar sesión
              </p>
            </div>

            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-hammer-line text-xl text-orange-400"></i>
                <h4 className="text-sm sm:text-base font-bold text-white">Fuerza Bruta</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D1D1D1]">
                Sin límite de intentos de login, permitiendo probar miles de combinaciones
              </p>
            </div>

            <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <i className="ri-refresh-line text-xl text-orange-400"></i>
                <h4 className="text-sm sm:text-base font-bold text-white">Recuperación Débil</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#D1D1D1]">
                Preguntas de seguridad fáciles de adivinar o tokens de recuperación predecibles
              </p>
            </div>
          </div>

          {/* Caso Real */}
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-alarm-warning-line text-xl sm:text-2xl text-orange-400 flex-shrink-0"></i>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Caso Real: CCSS Costa Rica (2022)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed">
                  La Caja Costarricense de Seguro Social fue atacada vía <span className="text-orange-400 font-bold">autenticación débil</span>, afectando <span className="text-orange-400 font-bold">800 servidores con ransomware</span>. Los atacantes explotaron credenciales comprometidas y falta de autenticación multifactor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mitigación */}
        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <i className="ri-shield-check-line text-[#CCFF00]"></i>
            Cómo Prevenir Broken Authentication
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">MFA (Multi-Factor Authentication)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Requiere segundo factor: SMS, app autenticadora, biometría</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Rate Limiting</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Limita intentos de login (ej: 5 intentos en 15 minutos)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Contraseñas Fuertes</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Mínimo 12 caracteres, mayúsculas, números y símbolos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Tokens Seguros</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">JWT con expiración corta, HttpOnly, Secure flags</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Verificar Contraseñas Comprometidas</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Usar APIs como HaveIBeenPwned para detectar leaks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Sesiones con Timeout</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Expiración automática tras inactividad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}