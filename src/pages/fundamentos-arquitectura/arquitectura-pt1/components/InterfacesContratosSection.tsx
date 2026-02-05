
export default function InterfacesContratosSection() {
  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#10B981]/10 rounded-full">
            <i className="ri-links-line text-[#10B981] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Interfaces & Contratos</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Comunicación entre Componentes
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Definen cómo se comunican los componentes mediante APIs, protocolos y especificaciones
          </p>
        </div>

        {/* Definición */}
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0] shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg flex-shrink-0">
              <i className="ri-file-list-3-line text-[#3B82F6] text-xl md:text-2xl"></i>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">¿Qué son las Interfaces y Contratos?</h3>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                Las interfaces y contratos definen <strong className="text-[#3B82F6]">cómo se comunican</strong> los componentes mediante APIs, protocolos y especificaciones como <strong className="text-[#10B981]">OpenAPI/Swagger</strong>. Un contrato API documenta endpoints, parámetros y respuestas para facilitar la colaboración y reducir la deuda técnica.
              </p>
            </div>
          </div>
        </div>

        {/* Elementos de un contrato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {/* Endpoints */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl mb-4 md:mb-6">
              <i className="ri-route-line text-[#3B82F6] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A2332] mb-3 md:mb-4">Endpoints</h3>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed mb-3 md:mb-4">
              URLs específicas que exponen funcionalidades del servicio
            </p>
            <div className="bg-[#F8FAFC] rounded-lg p-3 font-mono text-xs md:text-sm text-[#3B82F6] overflow-x-auto">
              GET /api/users/:id
            </div>
          </div>

          {/* Parámetros */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#10B981]/10 rounded-xl mb-4 md:mb-6">
              <i className="ri-input-method-line text-[#10B981] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A2332] mb-3 md:mb-4">Parámetros</h3>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed mb-3 md:mb-4">
              Datos de entrada requeridos u opcionales para cada operación
            </p>
            <div className="bg-[#F8FAFC] rounded-lg p-3 font-mono text-xs md:text-sm text-[#10B981]">
              &#123;id: string&#125;
            </div>
          </div>

          {/* Respuestas */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl mb-4 md:mb-6">
              <i className="ri-file-code-line text-[#3B82F6] text-2xl md:text-3xl"></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A2332] mb-3 md:mb-4">Respuestas</h3>
            <p className="text-sm md:text-base text-[#64748B] leading-relaxed mb-3 md:mb-4">
              Estructura de datos devuelta y códigos de estado HTTP
            </p>
            <div className="bg-[#F8FAFC] rounded-lg p-3 font-mono text-xs md:text-sm text-[#3B82F6]">
              200 OK, 404 Not Found
            </div>
          </div>
        </div>

        {/* OpenAPI/Swagger */}
        <div className="bg-gradient-to-r from-[#10B981]/5 to-[#3B82F6]/5 rounded-xl md:rounded-2xl p-6 md:p-10 border-l-4 border-[#10B981] mb-10 md:mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#10B981] rounded-lg flex-shrink-0">
              <i className="ri-file-text-line text-white text-xl md:text-2xl"></i>
            </div>
            <div className="space-y-3 md:space-y-4 w-full">
              <h4 className="text-xl md:text-2xl font-bold text-[#1A2332]">OpenAPI/Swagger</h4>
              <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                Especificación estándar para documentar APIs REST. Permite generar documentación interactiva, validar contratos automáticamente y generar código cliente/servidor. Ampliamente usado en plataformas no-code como <strong className="text-[#10B981]">AppMaster</strong> para reducir deuda técnica.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-book-open-line text-[#10B981] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Documentación Automática</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-shield-check-line text-[#3B82F6] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Validación de Contratos</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-code-box-line text-[#10B981] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Generación de Código</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg p-3 md:p-4 border border-[#E2E8F0]">
                  <i className="ri-test-tube-line text-[#3B82F6] text-lg md:text-xl"></i>
                  <span className="text-[#1A2332] font-medium text-xs md:text-base">Testing Integrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo actual */}
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 border border-[#E2E8F0] shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-lg flex-shrink-0">
              <i className="ri-hospital-line text-white text-xl md:text-2xl"></i>
            </div>
            <div className="space-y-3 md:space-y-4 w-full">
              <h4 className="text-xl md:text-2xl font-bold text-[#1A2332]">Ejemplo Actual: APIs REST en Salud</h4>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                En sistemas de salud modernos, las APIs REST permiten la <strong className="text-[#3B82F6]">interoperabilidad</strong> entre hospitales, clínicas y dispositivos IoT. Por ejemplo, un dispositivo de monitoreo cardíaco puede enviar datos en tiempo real a través de una API REST documentada con OpenAPI, permitiendo que diferentes sistemas médicos accedan a la información del paciente de forma estandarizada y segura.
              </p>
              <div className="bg-[#F8FAFC] rounded-lg p-4 md:p-6 border border-[#E2E8F0] mt-4 md:mt-6">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <i className="ri-code-s-slash-line text-[#3B82F6] text-base md:text-lg"></i>
                  <span className="text-xs md:text-sm font-bold text-[#1A2332]">Ejemplo de Endpoint</span>
                </div>
                <code className="text-xs md:text-sm text-[#475569] block overflow-x-auto">
                  POST /api/v1/patient/&#123;id&#125;/vitals<br/>
                  &#123; "heartRate": 72, "bloodPressure": "120/80" &#125;
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
