export default function BrokenAccessSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#CCFF00]/30">
            <span className="text-[#CCFF00] text-xs sm:text-sm font-bold">#4</span>
            <span className="text-[#D1D1D1] text-xs sm:text-sm font-medium">Vulnerabilidad Crítica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Control de Acceso Roto (Broken Access Control)
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-cross-line text-2xl sm:text-3xl text-yellow-400"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                ¿Qué es Broken Access Control?
              </h3>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
                Falla en <span className="text-[#CCFF00] font-semibold">restricciones de acceso</span>, permitiendo que usuarios vean o modifiquen datos no autorizados cambiando parámetros en URL, IDs o manipulando tokens.
              </p>
            </div>
          </div>

          {/* Ejemplos de Ataques */}
          <div className="mb-6">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">Vectores de Ataque Comunes</h4>
            <div className="space-y-4">
              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
                <div className="flex items-start gap-3 mb-3">
                  <i className="ri-link text-xl text-yellow-400 flex-shrink-0"></i>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-base font-bold text-white mb-2">IDOR (Insecure Direct Object Reference)</h5>
                    <p className="text-xs sm:text-sm text-[#D1D1D1] mb-3">
                      Cambiar IDs en URLs para acceder a recursos de otros usuarios
                    </p>
                    <div className="bg-[#121212] border border-[#2A2A2A] rounded p-3 overflow-x-auto">
                      <code className="text-xs text-[#50fa7b] break-all">
                        /api/usuario/<span className="text-yellow-400">123</span>/perfil → /api/usuario/<span className="text-red-400">456</span>/perfil
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
                <div className="flex items-start gap-3 mb-3">
                  <i className="ri-user-settings-line text-xl text-yellow-400 flex-shrink-0"></i>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-base font-bold text-white mb-2">Escalación de Privilegios</h5>
                    <p className="text-xs sm:text-sm text-[#D1D1D1] mb-3">
                      Usuario normal accede a funciones de administrador
                    </p>
                    <div className="bg-[#121212] border border-[#2A2A2A] rounded p-3 overflow-x-auto">
                      <code className="text-xs text-[#50fa7b] break-all">
                        POST /api/usuario/actualizar {'{'}role: "<span className="text-red-400">admin</span>"{'}'}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-4 sm:p-5">
                <div className="flex items-start gap-3 mb-3">
                  <i className="ri-file-forbid-line text-xl text-yellow-400 flex-shrink-0"></i>
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-base font-bold text-white mb-2">Bypass de Validación</h5>
                    <p className="text-xs sm:text-sm text-[#D1D1D1] mb-3">
                      Validación solo en frontend, no en backend
                    </p>
                    <div className="bg-[#121212] border border-[#2A2A2A] rounded p-3 overflow-x-auto">
                      <code className="text-xs text-[#50fa7b] break-all">
                        Cliente valida rol → Atacante envía request directo al API
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caso Real */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-alarm-warning-line text-xl sm:text-2xl text-yellow-400 flex-shrink-0"></i>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Caso Real: MOVEit (2023)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed">
                  Brecha en MOVEit Transfer permitió <span className="text-yellow-400 font-bold">SQL injection no autorizado vía controles de acceso débiles</span>, robando datos de <span className="text-yellow-400 font-bold">miles de organizaciones</span> incluyendo gobiernos y empresas Fortune 500.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mitigación */}
        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <i className="ri-shield-check-line text-[#CCFF00]"></i>
            Cómo Prevenir Broken Access Control
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Principio de Menor Privilegio</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Usuarios solo acceden a lo estrictamente necesario</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Validación en Servidor</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Nunca confiar en validaciones del cliente</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Verificar Propiedad de Recursos</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Validar que el usuario es dueño del recurso solicitado</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">RBAC (Role-Based Access Control)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Sistema de roles y permisos bien definido</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">IAP (Identity-Aware Proxy)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Control de acceso contextual basado en identidad</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Auditoría de Permisos</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Revisar y registrar accesos a recursos sensibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}