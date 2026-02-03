
export default function TiposNubeSection() {
  const tipos = [
    {
      title: 'Nube Pública',
      icon: 'ri-global-line',
      color: '#4285F4',
      description: 'La nube pública comparte recursos de proveedores como AWS, Azure o GCP, con pago por uso y escalabilidad global ilimitada.',
      caracteristicas: [
        'Alta disponibilidad (hasta 100% SLA en GCP)',
        'Redes privadas seguras contra ciberataques',
        'Escalabilidad global ilimitada',
        'Pago por uso sin inversión inicial'
      ],
      usoCaso: 'En México, accede a regiones locales para baja latencia en apps web.',
      proveedores: ['AWS', 'Azure', 'Google Cloud Platform']
    },
    {
      title: 'Nube Privada',
      icon: 'ri-lock-line',
      color: '#EA4335',
      description: 'La nube privada usa infraestructura dedicada on-premise o de proveedores locales, priorizando datos sensibles y compliance como regulaciones mexicanas.',
      caracteristicas: [
        'Control total sobre infraestructura',
        'SLAs personalizados',
        'Cumplimiento de regulaciones locales',
        'Máxima seguridad para datos sensibles'
      ],
      usoCaso: 'Ideal para sectores regulados (salud, finanzas) con control total y SLAs personalizados. Úsala para tesis con datos CONAGUA si necesitas soberanía total.',
      proveedores: ['VMware', 'OpenStack', 'Nutanix']
    },
    {
      title: 'Nube Híbrida',
      icon: 'ri-shuffle-line',
      color: '#34A853',
      description: 'La nube híbrida combina pública y privada, permitiendo datos locales sensibles con escalado en cloud pública.',
      caracteristicas: [
        'Flexibilidad entre nubes',
        'Datos sensibles locales',
        'Escalado en nube pública',
        'Gestión unificada'
      ],
      usoCaso: 'Nutanix o AWS facilitan migraciones y gestión unificada, común para apps web con storage local y compute en nube. En México, resuelve latencia y compliance híbrido para microservicios.',
      proveedores: ['AWS Outposts', 'Azure Arc', 'Google Anthos']
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#34A853]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-cloud-fill text-[#34A853] text-base sm:text-lg"></i>
            <span className="text-[#34A853] text-xs sm:text-sm font-semibold">Tipos de Nube</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Tipos de Nube
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Elige el modelo de despliegue que mejor se adapte a tus necesidades de seguridad, control y escalabilidad
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {tipos.map((tipo, index) => (
            <div 
              key={index}
              className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-xl mb-4"
                  style={{ backgroundColor: tipo.color }}
                >
                  <i className={`${tipo.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-2">
                  {tipo.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-6">
                {tipo.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Características:</span>
                </div>
                <div className="space-y-2">
                  {tipo.caracteristicas.map((caracteristica, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: tipo.color }}></div>
                      <span className="text-xs sm:text-sm text-[#1D2327]/70">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-3 bg-white rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-lightbulb-line text-[#FBBC04]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Caso de Uso:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1D2327]/70">{tipo.usoCaso}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-building-line text-[#4285F4]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Proveedores:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tipo.proveedores.map((proveedor, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: tipo.color }}
                    >
                      {proveedor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
