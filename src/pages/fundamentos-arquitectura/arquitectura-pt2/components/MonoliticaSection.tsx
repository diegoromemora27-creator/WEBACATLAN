
export default function MonoliticaSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#3B82F6]/10 rounded-full">
            <i className="ri-building-4-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Arquitectura Monolítica</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Una Sola Unidad de Código Unificada
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Frontend, backend, base de datos y lógica de negocio integrados en un único ejecutable
          </p>
        </div>

        {/* Definición */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Consiste en una sola unidad de código unificada donde <strong className="text-[#1A2332]">frontend, backend, base de datos y lógica de negocio</strong> se integran en un único ejecutable o repositorio. Funciona procesando todas las solicitudes en un solo proceso: el servidor recibe una petición, consulta la base de datos internamente, genera la respuesta y la envía al cliente sin dependencias externas.
          </p>
        </div>

        {/* Diagrama visual */}
        <div className="bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#3B82F6]/20">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-xl p-5 md:p-8 border-4 border-[#3B82F6] shadow-xl">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Aplicación Monolítica</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-[#3B82F6]/10 rounded-lg p-3 md:p-4 border-l-4 border-[#3B82F6]">
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-layout-line text-[#3B82F6] text-xl md:text-2xl"></i>
                    <span className="text-[#1A2332] font-semibold text-sm md:text-base">Frontend / UI</span>
                  </div>
                </div>
                <div className="bg-[#10B981]/10 rounded-lg p-3 md:p-4 border-l-4 border-[#10B981]">
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-settings-3-line text-[#10B981] text-xl md:text-2xl"></i>
                    <span className="text-[#1A2332] font-semibold text-sm md:text-base">Lógica de Negocio</span>
                  </div>
                </div>
                <div className="bg-[#3B82F6]/10 rounded-lg p-3 md:p-4 border-l-4 border-[#3B82F6]">
                  <div className="flex items-center gap-2 md:gap-3">
                    <i className="ri-database-2-line text-[#3B82F6] text-xl md:text-2xl"></i>
                    <span className="text-[#1A2332] font-semibold text-sm md:text-base">Base de Datos</span>
                  </div>
                </div>
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
                <span className="text-sm md:text-base text-[#475569]">Desarrollo y despliegue simples</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Alto rendimiento inicial por menor latencia de red</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Pruebas fáciles en un solo codebase</span>
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
                <span className="text-sm md:text-base text-[#475569]">Escalabilidad limitada (se escala todo junto)</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Mantenimiento complejo al crecer</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Un fallo afecta toda la aplicación</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Casos de uso */}
        <div className="bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-5 md:p-10 border-l-4 border-[#3B82F6] mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-4 md:mb-6">Casos de Uso</h3>
          <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-4 md:mb-6">
            Apps pequeñas o medianas con bajo tráfico, como blogs o sitios internos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-wordpress-line text-[#3B82F6] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">WordPress</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">Millones de blogs corporativos</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-code-box-line text-[#10B981] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Drupal</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">Sitios de contenido</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-shopping-bag-line text-[#3B82F6] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Magento</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">E-commerce simple</p>
            </div>
          </div>
        </div>

        {/* Cuándo usarla */}
        <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-10 border border-[#E2E8F0] shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6] rounded-lg flex-shrink-0">
              <i className="ri-lightbulb-line text-white text-xl md:text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-2 md:mb-3">Cuándo Usarla</h3>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                Ideal para <strong className="text-[#3B82F6]">prototipos rápidos</strong> o <strong className="text-[#3B82F6]">equipos pequeños</strong> sin necesidades de escalado masivo. Perfecta cuando la simplicidad y velocidad de desarrollo son prioritarias sobre la escalabilidad distribuida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
