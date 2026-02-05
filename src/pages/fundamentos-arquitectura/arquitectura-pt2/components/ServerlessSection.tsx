
export default function ServerlessSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#3B82F6]/10 rounded-full">
            <i className="ri-cloud-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Arquitectura Serverless</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Sin Gestión de Servidores
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            El proveedor de nube ejecuta código en funciones que escalan automáticamente
          </p>
        </div>

        {/* Definición */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Elimina la gestión de servidores: el proveedor de nube (<strong className="text-[#3B82F6]">AWS Lambda, Azure Functions</strong>) ejecuta código en funciones stateless que escalan automáticamente por invocaciones. Funciona en eventos: una petición activa una función, que procesa y responde sin estado persistente, con DB externa como DynamoDB.
          </p>
        </div>

        {/* Diagrama visual */}
        <div className="bg-gradient-to-br from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#3B82F6]/20">
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            {/* Eventos */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 w-full">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E2E8F0] text-center">
                <i className="ri-flashlight-line text-[#3B82F6] text-2xl md:text-3xl mb-2 md:mb-3"></i>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]">Evento HTTP</div>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E2E8F0] text-center">
                <i className="ri-database-2-line text-[#10B981] text-2xl md:text-3xl mb-2 md:mb-3"></i>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]">Evento DB</div>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 border border-[#E2E8F0] text-center">
                <i className="ri-timer-line text-[#3B82F6] text-2xl md:text-3xl mb-2 md:mb-3"></i>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]">Evento Programado</div>
              </div>
            </div>

            {/* Flecha */}
            <div className="flex items-center justify-center">
              <i className="ri-arrow-down-line text-[#64748B] text-2xl md:text-3xl"></i>
            </div>

            {/* Funciones Lambda */}
            <div className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-xl p-5 md:p-8 text-center w-full max-w-2xl">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <i className="ri-cloud-line text-white text-2xl md:text-4xl"></i>
                <h3 className="text-lg md:text-2xl font-bold text-white">Funciones Serverless</h3>
              </div>
              <p className="text-white/90 text-xs md:text-sm">Escalan automáticamente según demanda</p>
              <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
                  <i className="ri-function-line text-white text-xl md:text-2xl"></i>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
                  <i className="ri-function-line text-white text-xl md:text-2xl"></i>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
                  <i className="ri-function-line text-white text-xl md:text-2xl"></i>
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
                <span className="text-sm md:text-base text-[#475569]">Pago por uso (barato para tráfico variable)</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Escalado automático infinito</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#10B981] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Foco total en código sin operaciones</span>
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
                <span className="text-sm md:text-base text-[#475569]">Cold starts (latencia inicial)</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Límites en ejecución larga</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <i className="ri-arrow-right-s-line text-[#EF4444] text-lg md:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-sm md:text-base text-[#475569]">Vendor lock-in con proveedores cloud</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Casos de uso */}
        <div className="bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-5 md:p-10 border-l-4 border-[#3B82F6] mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2332] mb-4 md:mb-6">Casos de Uso</h3>
          <p className="text-sm md:text-base text-[#475569] leading-relaxed mb-4 md:mb-6">
            APIs intermitentes, chatbots o procesamiento event-driven con tráfico impredecible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-slack-line text-[#4A154B] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Slack</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">Chatbots y webhooks</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-plane-line text-[#3B82F6] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Expedia</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">Sistema de reservas</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 border border-[#E2E8F0]">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="ri-shopping-bag-3-line text-[#10B981] text-xl md:text-2xl"></i>
                <span className="text-[#1A2332] font-semibold text-sm md:text-base">Nordstrom</span>
              </div>
              <p className="text-xs md:text-sm text-[#64748B] mt-2">E-commerce con picos</p>
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
                <strong className="text-[#3B82F6]">Tráfico impredecible</strong> o <strong className="text-[#3B82F6]">startups minimizando costos</strong>. Perfecta para aplicaciones con cargas variables donde pagar solo por uso es crítico, y cuando no quieres gestionar infraestructura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
