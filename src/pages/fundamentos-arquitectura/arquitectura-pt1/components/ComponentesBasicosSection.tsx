
export default function ComponentesBasicosSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#3B82F6]/10 rounded-full">
            <i className="ri-stack-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Componentes Básicos</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Unidades Fundamentales del Sistema
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Los componentes, módulos y servicios son unidades con responsabilidades específicas
          </p>
        </div>

        {/* Definición */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Los componentes son unidades funcionales con <strong className="text-[#1A2332]">responsabilidades específicas</strong>, como UI para interfaz, lógica de negocio para reglas y acceso a datos para persistencia. En microservicios actuales, como en e-commerce de <strong className="text-[#3B82F6]">Shein</strong>, cada servicio maneja un dominio independiente (ej. pagos o inventario) para escalabilidad.
          </p>
        </div>

        {/* Tipos de componentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {/* UI */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl mb-4 md:mb-6">
              <i className="ri-layout-line text-[#3B82F6] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-3 md:mb-4">UI (Interfaz)</h3>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
              Componentes visuales que interactúan con el usuario, como formularios, botones y navegación. Responsables de la presentación y experiencia del usuario.
            </p>
          </div>

          {/* Lógica de Negocio */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#10B981]/10 rounded-xl mb-4 md:mb-6">
              <i className="ri-settings-3-line text-[#10B981] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-3 md:mb-4">Lógica de Negocio</h3>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
              Reglas y procesos que definen el comportamiento del sistema, como validaciones, cálculos y flujos de trabajo específicos del dominio.
            </p>
          </div>

          {/* Acceso a Datos */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl mb-4 md:mb-6">
              <i className="ri-database-2-line text-[#3B82F6] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-3 md:mb-4">Acceso a Datos</h3>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed">
              Componentes que gestionan la persistencia y recuperación de información, abstrayendo la comunicación con bases de datos y sistemas de almacenamiento.
            </p>
          </div>
        </div>

        {/* Microservicios */}
        <div className="bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-6 md:p-10 border-l-4 border-[#3B82F6] mb-10 md:mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6] rounded-lg flex-shrink-0">
              <i className="ri-apps-2-line text-white text-xl md:text-2xl"></i>
            </div>
            <div className="space-y-3 md:space-y-4 w-full">
              <h4 className="text-xl md:text-2xl font-bold text-[#1A2332]">Microservicios en E-commerce</h4>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                En plataformas como <strong className="text-[#3B82F6]">Shein</strong>, cada servicio maneja un dominio independiente:
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-bank-card-line text-[#3B82F6] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Servicio de Pagos</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-archive-line text-[#10B981] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Servicio de Inventario</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-user-line text-[#3B82F6] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Servicio de Usuarios</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-shopping-cart-line text-[#10B981] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Servicio de Pedidos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 border border-[#E2E8F0] shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6 md:mb-8">Beneficios de la Modularidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0">
                <i className="ri-checkbox-circle-line text-[#10B981] text-lg md:text-xl"></i>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#1A2332] mb-1 md:mb-2">Actualizaciones Independientes</h4>
                <p className="text-sm md:text-base text-[#64748B]">Cada componente puede evolucionar sin afectar al resto del sistema</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg flex-shrink-0">
                <i className="ri-scales-3-line text-[#3B82F6] text-lg md:text-xl"></i>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#1A2332] mb-1 md:mb-2">Escalabilidad Selectiva</h4>
                <p className="text-sm md:text-base text-[#64748B]">Escala solo los servicios que necesitan más recursos</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0">
                <i className="ri-test-tube-line text-[#10B981] text-lg md:text-xl"></i>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#1A2332] mb-1 md:mb-2">Testing Simplificado</h4>
                <p className="text-sm md:text-base text-[#64748B]">Pruebas unitarias más fáciles en componentes aislados</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg flex-shrink-0">
                <i className="ri-recycle-line text-[#3B82F6] text-lg md:text-xl"></i>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#1A2332] mb-1 md:mb-2">Reutilización</h4>
                <p className="text-sm md:text-base text-[#64748B]">Componentes pueden usarse en múltiples contextos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
