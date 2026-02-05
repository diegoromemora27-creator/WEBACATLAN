
export default function ConectoresSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#3B82F6]/10 rounded-full">
            <i className="ri-share-line text-[#3B82F6] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Conectores</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Mecanismos de Comunicación
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Los conectores gestionan la comunicación entre componentes según necesidades específicas
          </p>
        </div>

        {/* Introducción */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-xl md:rounded-2xl p-6 md:p-12 mb-10 md:mb-16 border border-[#E2E8F0]">
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Los conectores gestionan la comunicación entre componentes, eligiendo el mecanismo adecuado según necesidades como <strong className="text-[#3B82F6]">síncrona/asíncrona</strong> o <strong className="text-[#10B981]">volumen de datos</strong>. La elección correcta impacta directamente en el rendimiento, escalabilidad y resiliencia del sistema.
          </p>
        </div>

        {/* Tipos de conectores */}
        <div className="space-y-4 md:space-y-8 mb-10 md:mb-16">
          {/* HTTP/REST */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl md:rounded-2xl p-5 md:p-10 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl flex-shrink-0">
                <i className="ri-global-line text-[#3B82F6] text-2xl md:text-3xl"></i>
              </div>
              <div className="flex-1 space-y-3 md:space-y-4 w-full">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">HTTP/REST</h3>
                  <span className="px-2 md:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold rounded-full">SÍNCRONO</span>
                </div>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                  Para solicitudes síncronas simples, como APIs en e-commerce. Ideal para operaciones que requieren respuesta inmediata y son relativamente rápidas.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Fácil implementación</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Ampliamente soportado</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Stateless</span>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-3 md:p-4 border border-[#E2E8F0] mt-3 md:mt-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <i className="ri-shopping-bag-line text-[#3B82F6] text-sm md:text-base"></i>
                    <span className="text-xs md:text-sm font-bold text-[#1A2332]">Caso de Uso</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#64748B]">Consultar disponibilidad de productos en tiempo real</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colas de Mensajes */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl md:rounded-2xl p-5 md:p-10 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#10B981]/10 rounded-xl flex-shrink-0">
                <i className="ri-inbox-line text-[#10B981] text-2xl md:text-3xl"></i>
              </div>
              <div className="flex-1 space-y-3 md:space-y-4 w-full">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Colas de Mensajes (RabbitMQ)</h3>
                  <span className="px-2 md:px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-xs font-bold rounded-full">ASÍNCRONO</span>
                </div>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                  Asíncronas y confiables para tareas largas, como notificaciones en pedidos. Ideal para alta disponibilidad y desacoplamiento entre servicios.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Garantía de entrega</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Desacoplamiento</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Tolerancia a fallos</span>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-3 md:p-4 border border-[#E2E8F0] mt-3 md:mt-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <i className="ri-notification-line text-[#10B981] text-sm md:text-base"></i>
                    <span className="text-xs md:text-sm font-bold text-[#1A2332]">Caso de Uso</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#64748B]">Enviar notificaciones por email cuando se confirma un pedido</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eventos (Kafka) */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl md:rounded-2xl p-5 md:p-10 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#3B82F6]/10 rounded-xl flex-shrink-0">
                <i className="ri-broadcast-line text-[#3B82F6] text-2xl md:text-3xl"></i>
              </div>
              <div className="flex-1 space-y-3 md:space-y-4 w-full">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Eventos (Kafka)</h3>
                  <span className="px-2 md:px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-bold rounded-full">STREAMING</span>
                </div>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                  Para streaming en tiempo real y broadcast, como analítica en serverless. Soporta desacoplamiento en microservicios y procesamiento de grandes volúmenes de datos.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Alto throughput</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Múltiples consumidores</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Persistencia</span>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-3 md:p-4 border border-[#E2E8F0] mt-3 md:mt-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <i className="ri-line-chart-line text-[#3B82F6] text-sm md:text-base"></i>
                    <span className="text-xs md:text-sm font-bold text-[#1A2332]">Caso de Uso</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#64748B]">Analítica en tiempo real de comportamiento de usuarios</p>
                </div>
              </div>
            </div>
          </div>

          {/* gRPC */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl md:rounded-2xl p-5 md:p-10 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#10B981]/10 rounded-xl flex-shrink-0">
                <i className="ri-flashlight-line text-[#10B981] text-2xl md:text-3xl"></i>
              </div>
              <div className="flex-1 space-y-3 md:space-y-4 w-full">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A2332]">Llamadas Directas (gRPC)</h3>
                  <span className="px-2 md:px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-xs font-bold rounded-full">ALTO RENDIMIENTO</span>
                </div>
                <p className="text-sm md:text-base text-[#475569] leading-relaxed">
                  Eficientes para microservicios internos por su velocidad binaria. Usa Protocol Buffers para serialización rápida y soporta streaming bidireccional.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Baja latencia</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Tipado fuerte</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <i className="ri-check-line text-[#10B981] text-xs md:text-sm"></i>
                    <span className="text-xs md:text-sm text-[#475569]">Streaming bidireccional</span>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-3 md:p-4 border border-[#E2E8F0] mt-3 md:mt-4">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <i className="ri-server-line text-[#10B981] text-sm md:text-base"></i>
                    <span className="text-xs md:text-sm font-bold text-[#1A2332]">Caso de Uso</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#64748B]">Comunicación interna entre microservicios de alta frecuencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tendencias 2026 */}
        <div className="bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-xl md:rounded-2xl p-6 md:p-10 border-l-4 border-[#3B82F6]">
          <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-lg flex-shrink-0">
              <i className="ri-rocket-line text-white text-xl md:text-2xl"></i>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-[#1A2332]">Tendencias 2026: Event-Driven Architecture</h4>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                En las tendencias de 2026, las arquitecturas <strong className="text-[#3B82F6]">event-driven</strong> con Kafka dominan para resiliencia en datos reales. Permiten sistemas altamente escalables y desacoplados donde los servicios reaccionan a eventos en tiempo real, facilitando la implementación de patrones como Event Sourcing y CQRS para aplicaciones modernas que requieren alta disponibilidad y procesamiento distribuido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
