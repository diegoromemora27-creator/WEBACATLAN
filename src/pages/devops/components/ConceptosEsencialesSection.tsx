export default function ConceptosEsencialesSection() {
  const conceptos = [
    {
      icon: 'ri-team-line',
      title: 'Colaboración',
      color: '#2560ff',
      description: 'DevOps elimina las barreras entre los equipos de desarrollo y operaciones. Todos comparten la responsabilidad del ciclo completo del software, desde la planificación hasta la operación en producción.',
      benefit: 'Reduce tiempos de entrega y mejora la estabilidad del sistema'
    },
    {
      icon: 'ri-robot-line',
      title: 'Automatización',
      color: '#0DB7ED',
      description: 'Uno de los pilares centrales. Automatizar procesos repetitivos —como pruebas, integración, despliegue e infraestructura— minimiza errores humanos y acelera la entrega de valor.',
      benefit: 'Permite enfocarse en innovación y mejora del producto'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Mejora Continua',
      color: '#2560ff',
      description: 'DevOps se basa en iteraciones rápidas apoyadas en feedback constante de usuarios, métricas de rendimiento y resultados de despliegues.',
      benefit: 'Optimiza velocidad, costo y calidad de forma incremental'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Integración Continua (CI)',
      color: '#0DB7ED',
      description: 'Consiste en integrar frecuentes cambios de código en un repositorio compartido con pruebas automáticas.',
      benefit: 'Detecta errores tempranamente, garantizando software siempre integrable y estable'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Entrega Continua (CD)',
      color: '#2560ff',
      description: 'Extiende la CI mediante la automatización del despliegue hacia entornos de producción.',
      benefit: 'Lanzamientos rápidos, repetibles y confiables'
    },
    {
      icon: 'ri-infinity-line',
      title: 'Ciclo de Vida DevOps',
      color: '#0DB7ED',
      description: 'Representado por el símbolo de infinito, describe fases interconectadas que se retroalimentan: Planificar → Codificar → Construir → Probar → Liberar → Desplegar → Operar → Monitorear.',
      benefit: 'Refleja la naturaleza iterativa y continua de DevOps'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Cultura DevOps',
      color: '#2560ff',
      description: 'Más allá de las herramientas, DevOps es una mentalidad. Promueve comunicación abierta, responsabilidades compartidas y la filosofía de shift-left.',
      benefit: 'Aborda pruebas, seguridad y calidad lo más pronto posible en el pipeline'
    },
    {
      icon: 'ri-eye-line',
      title: 'Observabilidad',
      color: '#0DB7ED',
      description: 'Involucra la capacidad de entender el estado interno del sistema a través de logs, métricas y trazas.',
      benefit: 'Detecta anomalías en tiempo real, acelera resolución de incidentes y anticipa problemas'
    },
    {
      icon: 'ri-file-code-line',
      title: 'Infraestructura como Código (IaC)',
      color: '#2560ff',
      description: 'Define y gestiona la infraestructura de manera programática. Usando herramientas como Terraform, Ansible o CloudFormation, se versiona la infraestructura como si fuera código.',
      benefit: 'Garantiza coherencia, reproducibilidad y automatización'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'DevSecOps',
      color: '#0DB7ED',
      description: 'Integra la seguridad dentro del flujo DevOps. En lugar de revisar vulnerabilidades al final, la seguridad se incorpora desde el desarrollo hasta la operación.',
      benefit: 'Asegura cumplimiento normativo y protección continua'
    },
    {
      icon: 'ri-apps-line',
      title: 'Microservicios',
      color: '#2560ff',
      description: 'Arquitectura que descompone aplicaciones monolíticas en servicios pequeños e independientes, cada uno con su propia lógica y base de datos.',
      benefit: 'Facilita escalabilidad, resiliencia y despliegues ágiles con contenedores (Docker) y orquestadores (Kubernetes)'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-book-open-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">Conceptos Clave</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Conceptos Esenciales de DevOps
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Los pilares fundamentales que sostienen la filosofía DevOps
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {conceptos.map((concepto, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 sm:p-6 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${concepto.color}15` }}
                >
                  <i 
                    className={`${concepto.icon} text-2xl`}
                    style={{ color: concepto.color }}
                  ></i>
                </div>
                <h3 
                  className="text-base sm:text-lg font-bold leading-tight"
                  style={{ color: concepto.color }}
                >
                  {concepto.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#1D2327]/70 leading-relaxed mb-4">
                {concepto.description}
              </p>

              <div className="pt-4 border-t border-[#2A2A2A]/10">
                <div className="flex items-start gap-2">
                  <i 
                    className="ri-checkbox-circle-fill text-base flex-shrink-0 mt-0.5"
                    style={{ color: concepto.color }}
                  ></i>
                  <p className="text-xs text-[#1D2327]/60 leading-relaxed">
                    <strong style={{ color: concepto.color }}>Beneficio:</strong> {concepto.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4">
              <i className="ri-rocket-2-line text-3xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              El Futuro del Desarrollo de Software
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-6">
              DevOps no es solo un conjunto de herramientas, es una <strong>transformación cultural</strong> que permite a las organizaciones entregar valor de forma más rápida, segura y confiable. Al adoptar estos conceptos esenciales, los equipos pueden responder ágilmente a las demandas del mercado y mantener sistemas robustos en producción.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-speed-line text-base sm:text-lg"></i>
                <span>Más Rápido</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-shield-check-line text-base sm:text-lg"></i>
                <span>Más Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-checkbox-circle-line text-base sm:text-lg"></i>
                <span>Más Confiable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
