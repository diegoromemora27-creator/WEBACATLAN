
export default function EscalabilidadSection() {
  const conceptos = [
    {
      title: 'Elasticidad y Autoescalado',
      icon: 'ri-line-chart-line',
      color: '#4285F4',
      description: 'La elasticidad ajusta recursos dinámicamente por demanda; autoescalado en Kubernetes (EKS/GKE) agrega/quita nodos automáticamente según tráfico.',
      detalles: 'GKE escala clústeres sin sobreprovisionamiento, esencial para apps web de alto tráfico como tus dashboards ML. Configura mínimos/máximos para costos óptimos.',
      beneficios: ['Ajuste dinámico de recursos', 'Sin sobreprovisionamiento', 'Optimización de costos', 'Alta disponibilidad']
    },
    {
      title: 'Contenedores y Orquestación',
      icon: 'ri-stack-line',
      color: '#34A853',
      description: 'Docker empaqueta apps con dependencias en contenedores portables; Kubernetes orquesta despliegues, escalado y recuperación en clústeres para microservicios.',
      detalles: 'En AKS/EKS/GKE, gestiona múltiples pods como un host virtual, ideal para full-stack con FastAPI en producción.',
      beneficios: ['Portabilidad', 'Gestión automatizada', 'Recuperación automática', 'Microservicios']
    },
    {
      title: 'CDN',
      icon: 'ri-global-line',
      color: '#FBBC04',
      description: 'CDN (Content Delivery Network) cachea assets estáticos en edges globales para reducir latencia.',
      detalles: 'Cloudflare ofrece seguridad DDoS/WAF; AWS CloudFront integra con S3 para sitios web rápidos, mejorando SEO y UX en México.',
      beneficios: ['Baja latencia global', 'Protección DDoS', 'Mejora SEO', 'Caché inteligente']
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FBBC04]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-line-chart-line text-[#FBBC04] text-base sm:text-lg"></i>
            <span className="text-[#FBBC04] text-xs sm:text-sm font-semibold">Escalabilidad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Escalabilidad en la Nube
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Tecnologías y estrategias para escalar aplicaciones de forma eficiente y automática
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {conceptos.map((concepto, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: concepto.color }}
                >
                  <i className={`${concepto.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327]">
                  {concepto.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
                {concepto.description}
              </p>

              <div className="mb-4 p-3 bg-[#F8F9FA] rounded-lg">
                <p className="text-xs sm:text-sm text-[#1D2327]/70">{concepto.detalles}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Beneficios:</span>
                </div>
                <div className="space-y-2">
                  {concepto.beneficios.map((beneficio, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: concepto.color }}></div>
                      <span className="text-xs sm:text-sm text-[#1D2327]/70">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparación Visual */}
        <div className="bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-2xl p-6 sm:p-8 md:p-10 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-scales-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Escalabilidad: Vertical vs Horizontal
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <i className="ri-arrow-up-line text-3xl"></i>
                <h4 className="font-bold text-lg">Escalado Vertical</h4>
              </div>
              <p className="text-sm text-white/90 mb-4">
                Aumentar recursos de una sola máquina (más CPU, RAM, disco)
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <i className="ri-add-circle-line text-[#34A853]"></i>
                  <span className="text-xs">Implementación simple</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-subtract-circle-line text-[#EA4335]"></i>
                  <span className="text-xs">Límite físico de hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-subtract-circle-line text-[#EA4335]"></i>
                  <span className="text-xs">Downtime al escalar</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <i className="ri-arrow-right-line text-3xl"></i>
                <h4 className="font-bold text-lg">Escalado Horizontal</h4>
              </div>
              <p className="text-sm text-white/90 mb-4">
                Agregar más instancias/nodos al sistema
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <i className="ri-add-circle-line text-[#34A853]"></i>
                  <span className="text-xs">Escalabilidad ilimitada</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-add-circle-line text-[#34A853]"></i>
                  <span className="text-xs">Alta disponibilidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-add-circle-line text-[#34A853]"></i>
                  <span className="text-xs">Sin downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
