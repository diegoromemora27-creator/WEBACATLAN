
export default function MicroserviciosSection() {
  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#10B981]/10 rounded-full">
            <i className="ri-apps-2-line text-[#10B981] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Arquitectura de Microservicios</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Servicios Independientes y Escalables
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Divide la aplicación en servicios pequeños con su propia base de datos y API
          </p>
        </div>

        {/* Definición */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Se basa en dividir la app en <strong className="text-[#1A2332]">servicios independientes pequeños</strong>, cada uno con su propia base de datos y API, que se comunican vía HTTP/REST o mensajería. Funciona de forma distribuida: un servicio maneja un dominio específico (ej. usuarios), y orquesta con otros mediante APIs para componer la app completa.
          </p>
        </div>

        {/* Diagrama visual */}
        <div className="bg-gradient-to-br from-[#10B981]/5 to-[#3B82F6]/5 rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#10B981]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#10B981] shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg mb-3 md:mb-4 mx-auto">
                <i className="ri-user-line text-[#10B981] text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-center font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">Servicio Usuarios</h4>
              <div className="text-xs text-[#64748B] text-center">API + DB propia</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#3B82F6] shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg mb-3 md:mb-4 mx-auto">
                <i className="ri-shopping-cart-line text-[#3B82F6] text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-center font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">Servicio Pedidos</h4>
              <div className="text-xs text-[#64748B] text-center">API + DB propia</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#10B981] shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg mb-3 md:mb-4 mx-auto">
                <i className="ri-bank-card-line text-[#10B981] text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-center font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">Servicio Pagos</h4>
              <div className="text-xs text-[#64748B] text-center">API + DB propia</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 border-2 border-[#3B82F6] shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg mb-3 md:mb-4 mx-auto">
                <i className="ri-archive-line text-[#3B82F6] text-xl md:text-2xl"></i>
              </div>
              <h4 className="text-center font-bold text-[#1A2332] mb-1 md:mb-2 text-sm md:text-base">Servicio Inventario</h4>
              <div className="text-xs text-[#64748B] text-center">API + DB propia</div>
            </div>
          </div>
          <div className="text-center mt-6 md:mt-8">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white rounded-lg border border-[#E2E8F0]">
              <i className="ri-arrow-left-right-line text-[#64748B] text-sm md:text-base"></i>
              <span className="text-xs md:text-sm text-[#475569] font-medium">Comunicación vía HTTP/REST o Mensajería</span>
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
                <span className="text-sm md:text-base text-[#475569]">Escalabilidad por servicio independiente</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Despliegues independientes sin afectar otros servicios</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Tolerancia a fallos (un servicio cae sin afectar todo)</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Equipos autónomos trabajando en paralelo</span>
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
                <span className="text-sm md:text-base text-[#475569]">Complejidad en comunicaciones (latencia de red)</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Gestión de datos distribuida compleja</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Debugging difícil en sistemas distribuidos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Casos de uso */}
        <div className="bg-gradient-to-r from-[#10B981]/5 to-[#3B82F6]/5 rounded-xl md:rounded-2xl p-5 md:p-10 border-l-4 border-[#10B981] mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-4 md:mb-6">Casos de Uso</h3>
          <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-4 md:mb-6">
            Apps de alto tráfico con equipos grandes que necesitan escalar componentes independientemente.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-netflix-line text-[#E50914] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-xs md:text-base">Netflix</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2 hidden sm:block">Streaming global escalado</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-amazon-line text-[#FF9900] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-xs md:text-base">Amazon</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2 hidden sm:block">E-commerce masivo</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-taxi-line text-[#000000] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-xs md:text-base">Uber</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2 hidden sm:block">Transporte en tiempo real</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-spotify-line text-[#1DB954] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-xs md:text-base">Spotify</span>
              </div>
              <p className="text-xs text-[#64748B] mt-2 hidden sm:block">Música streaming</p>
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
                Para <strong className="text-[#10B981]">crecimiento rápido</strong> y <strong className="text-[#10B981]">features independientes</strong>. Ideal cuando necesitas escalar partes específicas del sistema sin afectar el resto, y cuando tienes equipos grandes trabajando en paralelo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
