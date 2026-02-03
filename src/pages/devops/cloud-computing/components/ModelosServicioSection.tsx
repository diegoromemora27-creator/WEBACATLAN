
export default function ModelosServicioSection() {
  const modelos = [
    {
      title: 'IaaS',
      subtitle: 'Infraestructura como Servicio',
      icon: 'ri-server-line',
      color: '#FBBC04',
      description: 'La IaaS (Infraestructura como Servicio) ofrece recursos básicos de computación como servidores virtuales, almacenamiento y redes bajo demanda, permitiendo control total sobre el SO y configuraciones.',
      ejemplos: 'AWS EC2, Google Compute Engine',
      usoCaso: 'Ideal para entornos de prueba personalizados en apps web con FastAPI donde necesitas VMs dedicadas. En México, úsalo para compliance local al gestionar todo manualmente, pagando solo por uso.',
      beneficios: ['Control total del SO', 'Escalabilidad bajo demanda', 'Pago por uso', 'Compliance local']
    },
    {
      title: 'PaaS',
      subtitle: 'Plataforma como Servicio',
      icon: 'ri-stack-line',
      color: '#4285F4',
      description: 'PaaS (Plataforma como Servicio) proporciona entornos preconfigurados para desplegar apps sin manejar servidores subyacentes, enfocándose en código y escalado automático.',
      ejemplos: 'Heroku, Google App Engine',
      usoCaso: 'Soporta FastAPI o Node.js directamente vía contenedores, perfecto para prototipos full-stack rápidos. Reduce costos en desarrollo educativo al automatizar builds y deploys desde GitHub.',
      beneficios: ['Sin gestión de servidores', 'Escalado automático', 'Despliegue rápido', 'Integración CI/CD']
    },
    {
      title: 'SaaS',
      subtitle: 'Software como Servicio',
      icon: 'ri-apps-line',
      color: '#EA4335',
      description: 'SaaS (Software como Servicio) entrega aplicaciones completas listas para usar vía web, sin instalación ni mantenimiento.',
      ejemplos: 'Google Workspace (Gmail, Drive)',
      usoCaso: 'Clave para integraciones en backends, como autenticación SSO o almacenamiento de documentos en tus cursos. Úsalo para flujos de trabajo colaborativos en equipos remotos en México City.',
      beneficios: ['Sin instalación', 'Actualizaciones automáticas', 'Acceso desde cualquier lugar', 'Colaboración en tiempo real']
    },
    {
      title: 'Serverless/FaaS',
      subtitle: 'Function as a Service',
      icon: 'ri-flashlight-line',
      color: '#34A853',
      description: 'Serverless o FaaS (Function as a Service) ejecuta código en respuesta a eventos sin provisionar servidores, escalando automáticamente y cobrando por ejecución.',
      ejemplos: 'AWS Lambda, Vercel',
      usoCaso: 'Ideal para APIs REST con FastAPI en microservicios, eliminando mantenimiento de servidores para tus predicciones de sequía. Perfecto para picos de tráfico en apps web sin costos fijos.',
      beneficios: ['Sin servidores', 'Escalado automático', 'Pago por ejecución', 'Respuesta a eventos']
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4285F4]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-service-line text-[#4285F4] text-base sm:text-lg"></i>
            <span className="text-[#4285F4] text-xs sm:text-sm font-semibold">Modelos de Servicio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Modelos de Servicio en la Nube
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Diferentes niveles de abstracción para satisfacer necesidades específicas de desarrollo y operación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {modelos.map((modelo, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: modelo.color }}
                >
                  <i className={`${modelo.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-1">
                    {modelo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1D2327]/60 font-medium">
                    {modelo.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
                {modelo.description}
              </p>

              <div className="mb-4 p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-code-box-line text-[#4285F4]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Ejemplos:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1D2327]/70">{modelo.ejemplos}</p>
              </div>

              <div className="mb-4 p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-lightbulb-line text-[#FBBC04]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Caso de Uso:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1D2327]/70">{modelo.usoCaso}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Beneficios:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {modelo.beneficios.map((beneficio, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: modelo.color }}></div>
                      <span className="text-xs text-[#1D2327]/70">{beneficio}</span>
                    </div>
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
