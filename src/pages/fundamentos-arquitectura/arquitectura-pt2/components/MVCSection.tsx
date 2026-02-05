
export default function MVCSection() {
  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#10B981]/10 rounded-full">
            <i className="ri-layout-grid-line text-[#10B981] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Patrón MVC</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Model-View-Controller
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Patrón de diseño que separa responsabilidades en tres componentes principales
          </p>
        </div>

        {/* Definición */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Es un patrón de diseño que separa responsabilidades: <strong className="text-[#1A2332]">Model</strong> (datos y lógica), <strong className="text-[#1A2332]">View</strong> (UI), <strong className="text-[#1A2332]">Controller</strong> (manejo de inputs y flujo). Funciona en ciclo: el Controller recibe input del usuario, actualiza el Model, y renderiza la View con datos actualizados.
          </p>
        </div>

        {/* Diagrama MVC */}
        <div className="bg-gradient-to-br from-[#10B981]/5 to-[#3B82F6]/5 rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#10B981]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Model */}
            <div className="bg-white rounded-xl p-5 md:p-8 border-2 border-[#10B981] shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#10B981]/10 rounded-xl mb-4 md:mb-6 mx-auto">
                <i className="ri-database-2-line text-[#10B981] text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] text-center mb-3 md:mb-4">Model</h3>
              <p className="text-sm md:text-base text-[#64748B] text-center leading-relaxed">
                Datos y lógica de negocio. Gestiona el estado de la aplicación.
              </p>
            </div>

            {/* View */}
            <div className="bg-white rounded-xl p-5 md:p-8 border-2 border-[#3B82F6] shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl mb-4 md:mb-6 mx-auto">
                <i className="ri-layout-line text-[#3B82F6] text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] text-center mb-3 md:mb-4">View</h3>
              <p className="text-sm md:text-base text-[#64748B] text-center leading-relaxed">
                Interfaz de usuario. Presenta los datos al usuario.
              </p>
            </div>

            {/* Controller */}
            <div className="bg-white rounded-xl p-5 md:p-8 border-2 border-[#10B981] shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#10B981]/10 rounded-xl mb-4 md:mb-6 mx-auto">
                <i className="ri-settings-3-line text-[#10B981] text-2xl md:text-3xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] text-center mb-3 md:mb-4">Controller</h3>
              <p className="text-sm md:text-base text-[#64748B] text-center leading-relaxed">
                Maneja inputs y coordina Model y View.
              </p>
            </div>
          </div>

          {/* Flujo */}
          <div className="mt-6 md:mt-10 bg-white rounded-lg p-4 md:p-6 border border-[#E2E8F0]">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#1A2332] font-semibold text-xs md:text-base">Usuario</span>
                <i className="ri-arrow-right-line text-[#64748B] text-sm md:text-base"></i>
              </div>
              <div className="px-2 md:px-4 py-1 md:py-2 bg-[#10B981]/10 rounded-lg border border-[#10B981]">
                <span className="text-[#10B981] font-semibold text-xs md:text-base">Controller</span>
              </div>
              <i className="ri-arrow-right-line text-[#64748B] text-sm md:text-base"></i>
              <div className="px-2 md:px-4 py-1 md:py-2 bg-[#10B981]/10 rounded-lg border border-[#10B981]">
                <span className="text-[#10B981] font-semibold text-xs md:text-base">Model</span>
              </div>
              <i className="ri-arrow-right-line text-[#64748B] text-sm md:text-base"></i>
              <div className="px-2 md:px-4 py-1 md:py-2 bg-[#3B82F6]/10 rounded-lg border border-[#3B82F6]">
                <span className="text-[#3B82F6] font-semibold text-xs md:text-base">View</span>
              </div>
              <i className="ri-arrow-right-line text-[#64748B] text-sm md:text-base"></i>
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#1A2332] font-semibold text-xs md:text-base">Usuario</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ventajas y Desventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
          {/* Ventajas */}
          <div className="bg-white border border-[#10B981]/30 rounded-xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg">
                <i className="ri-checkbox-circle-line text-[#10B981] text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Ventajas</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Código mantenible y testable por separación</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Reutilización de modelos en diferentes vistas</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Flexibilidad en UI sin afectar lógica</span>
              </li>
            </ul>
          </div>

          {/* Desventajas */}
          <div className="bg-white border border-[#EF4444]/30 rounded-xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#EF4444]/10 rounded-lg">
                <i className="ri-close-circle-line text-[#EF4444] text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Desventajas</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Curva de aprendizaje inicial</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Overhead en aplicaciones muy simples</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Casos de uso */}
        <div className="bg-gradient-to-r from-[#10B981]/5 to-[#3B82F6]/5 rounded-xl md:rounded-2xl p-5 md:p-10 border-l-4 border-[#10B981] mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-4 md:mb-6">Casos de Uso</h3>
          <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-4 md:mb-6">
            Apps web interactivas con interfaces dinámicas y lógica de negocio compleja.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-code-box-line text-[#CC0000] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Ruby on Rails</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">Airbnb (versión inicial)</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-python-line text-[#3776AB] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Django</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">Instagram backend</p>
            </div>
          </div>
        </div>

        {/* Cuándo usarla */}
        <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-10 border border-[#E2E8F0] shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981] rounded-lg flex-shrink-0">
              <i className="ri-lightbulb-line text-white text-xl md:text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-2 md:mb-3">Cuándo Usarla</h3>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                <strong className="text-[#10B981]">Proyectos medianos</strong> con <strong className="text-[#10B981]">UI dinámica</strong>. Ideal cuando necesitas separación clara de responsabilidades y planeas tener múltiples vistas para los mismos datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
