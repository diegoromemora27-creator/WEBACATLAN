export default function SensitiveDataSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#CCFF00]/30">
            <span className="text-[#CCFF00] text-xs sm:text-sm font-bold">#3</span>
            <span className="text-[#D1D1D1] text-xs sm:text-sm font-medium">Vulnerabilidad Crítica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Exposición de Datos Sensibles
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <i className="ri-eye-off-line text-2xl sm:text-3xl text-purple-400"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                ¿Qué es Sensitive Data Exposure?
              </h3>
              <p className="text-sm sm:text-base text-[#D1D1D1] leading-relaxed">
                Ocurre cuando <span className="text-[#CCFF00] font-semibold">datos sensibles</span> (contraseñas, tarjetas de crédito, información personal) se exponen por <span className="text-[#CCFF00] font-semibold">cifrado débil, transmisión insegura o almacenamiento inadecuado</span>.
              </p>
            </div>
          </div>

          {/* Tipos de Datos Sensibles */}
          <div className="mb-6">
            <h4 className="text-base sm:text-lg font-bold text-white mb-4">Datos que Requieren Protección Especial</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-lock-password-line text-purple-400"></i>
                  <span className="text-xs sm:text-sm font-bold text-white">Credenciales</span>
                </div>
                <p className="text-xs text-[#D1D1D1]">Contraseñas, tokens, API keys</p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-bank-card-line text-purple-400"></i>
                  <span className="text-xs sm:text-sm font-bold text-white">Datos Financieros</span>
                </div>
                <p className="text-xs text-[#D1D1D1]">Tarjetas, cuentas bancarias</p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-user-heart-line text-purple-400"></i>
                  <span className="text-xs sm:text-sm font-bold text-white">Datos Personales</span>
                </div>
                <p className="text-xs text-[#D1D1D1]">SSN, direcciones, teléfonos</p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-health-book-line text-purple-400"></i>
                  <span className="text-xs sm:text-sm font-bold text-white">Datos Médicos</span>
                </div>
                <p className="text-xs text-[#D1D1D1]">Historiales, diagnósticos</p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-file-shield-line text-purple-400"></i>
                  <span className="text-xs sm:text-sm font-bold text-white">Propiedad Intelectual</span>
                </div>
                <p className="text-xs text-[#D1D1D1]">Código fuente, secretos comerciales</p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#2A2A2A] rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-message-2-line text-purple-400"></i>
                  <span className="text-xs sm:text-sm font-bold text-white">Comunicaciones</span>
                </div>
                <p className="text-xs text-[#D1D1D1]">Emails, mensajes privados</p>
              </div>
            </div>
          </div>

          {/* Caso Real */}
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3 mb-3">
              <i className="ri-alarm-warning-line text-xl sm:text-2xl text-purple-400 flex-shrink-0"></i>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Caso Real: LinkedIn (2012)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed">
                  LinkedIn expuso <span className="text-purple-400 font-bold">6.5 millones de contraseñas</span> por usar <span className="text-purple-400 font-bold">hashing obsoleto (SHA-1 sin salt)</span>. Los atacantes descifraron las contraseñas fácilmente, facilitando accesos no autorizados a cuentas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mitigación */}
        <div className="bg-[#1a1a1a] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
            <i className="ri-shield-check-line text-[#CCFF00]"></i>
            Cómo Proteger Datos Sensibles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">TLS/HTTPS Obligatorio</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Cifra toda transmisión de datos entre cliente y servidor</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Cifrado Fuerte (AES-256)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Para datos en reposo en bases de datos y almacenamiento</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Hashing con Salt (bcrypt, Argon2)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Para contraseñas, nunca almacenar en texto plano</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Rotación de Claves</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Cambiar claves de cifrado periódicamente</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Clasificación de Datos</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Identifica qué datos son sensibles y aplica controles</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-checkbox-circle-fill text-[#CCFF00] text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">Cloud DLP (Data Loss Prevention)</h4>
                <p className="text-xs sm:text-sm text-[#D1D1D1]">Herramientas que detectan y protegen datos sensibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}