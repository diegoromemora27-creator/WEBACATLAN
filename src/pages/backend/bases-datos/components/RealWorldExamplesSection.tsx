import { useState } from 'react';

export default function RealWorldExamplesSection() {
  const [activeCompany, setActiveCompany] = useState('amazon');

  const companies = [
    {
      id: 'amazon',
      name: 'Amazon',
      icon: 'ri-shopping-cart-2-line',
      color: '#ff9900',
      description: 'E-commerce y servicios en la nube',
      databases: [
        { name: 'Amazon Aurora', type: 'Relacional', use: 'Pedidos, usuarios, inventario, pagos', color: '#336791' },
        { name: 'DynamoDB', type: 'NoSQL', use: 'Carritos de compra, sesiones, datos de alta velocidad', color: '#ff9900' }
      ],
      diagram: {
        title: 'Flujo de compra en Amazon',
        steps: [
          { action: 'Agregar al carrito', target: 'DynamoDB', icon: 'ri-shopping-cart-line' },
          { action: 'Ver carrito', target: 'DynamoDB', icon: 'ri-file-list-line' },
          { action: 'Confirmar compra', target: 'Aurora (SQL)', icon: 'ri-bank-card-line' },
          { action: 'Procesar pago', target: 'Aurora (SQL)', icon: 'ri-check-double-line' }
        ]
      }
    },
    {
      id: 'netflix',
      name: 'Netflix',
      icon: 'ri-movie-line',
      color: '#E50914',
      description: 'Plataforma de streaming global',
      databases: [
        { name: 'Cassandra', type: 'Columnas Anchas', use: 'Historial de reproducciones, métricas, recomendaciones', color: '#1287B1' },
        { name: 'Redis', type: 'Cache', use: 'Catálogos, sesiones, datos frecuentes', color: '#DC382D' },
        { name: 'MySQL', type: 'Relacional', use: 'Datos transaccionales, suscripciones', color: '#00758F' }
      ],
      diagram: {
        title: 'Arquitectura Netflix',
        steps: [
          { action: 'Catálogo de películas', target: 'Redis (Cache)', icon: 'ri-film-line' },
          { action: 'Historial visto', target: 'Cassandra', icon: 'ri-history-line' },
          { action: 'Recomendaciones', target: 'Cassandra', icon: 'ri-star-line' },
          { action: 'Suscripción/Pago', target: 'MySQL', icon: 'ri-bank-card-line' }
        ]
      }
    },
    {
      id: 'bank',
      name: 'Banca en Línea',
      icon: 'ri-bank-line',
      color: '#336791',
      description: 'Sistemas financieros con alta consistencia',
      databases: [
        { name: 'Oracle/PostgreSQL', type: 'Relacional', use: 'Cuentas, movimientos, transferencias, auditoría', color: '#336791' },
        { name: 'Data Warehouse', type: 'Analítica', use: 'Análisis histórico, detección de fraude', color: '#274e6d' },
        { name: 'NoSQL/Logs', type: 'Monitoreo', use: 'Logs en tiempo real, alertas de seguridad', color: '#ff9900' }
      ],
      diagram: {
        title: 'Flujo de transferencia bancaria',
        steps: [
          { action: 'Iniciar transferencia', target: 'Validación', icon: 'ri-send-plane-line' },
          { action: 'Cargo en cuenta origen', target: 'PostgreSQL', icon: 'ri-subtract-line' },
          { action: 'Abono en cuenta destino', target: 'PostgreSQL', icon: 'ri-add-line' },
          { action: 'Registro en auditoría', target: 'Data Warehouse', icon: 'ri-file-shield-line' }
        ]
      }
    },
    {
      id: 'social',
      name: 'Redes Sociales',
      icon: 'ri-group-line',
      color: '#1877F2',
      description: 'Conexiones y contenido social',
      databases: [
        { name: 'PostgreSQL/MySQL', type: 'Relacional', use: 'Usuarios, posts, comentarios básicos', color: '#336791' },
        { name: 'Neo4j', type: 'Grafos', use: 'Relaciones de amistad, recomendaciones', color: '#008CC1' },
        { name: 'Redis', type: 'Cache', use: 'Timeline, notificaciones, contadores', color: '#DC382D' }
      ],
      diagram: {
        title: 'Arquitectura de red social',
        steps: [
          { action: 'Ver perfil', target: 'PostgreSQL', icon: 'ri-user-line' },
          { action: 'Amigos sugeridos', target: 'Neo4j (Grafos)', icon: 'ri-user-add-line' },
          { action: 'Timeline/Feed', target: 'Redis (Cache)', icon: 'ri-list-check' },
          { action: 'Publicar post', target: 'PostgreSQL', icon: 'ri-edit-line' }
        ]
      }
    },
    {
      id: 'messaging',
      name: 'Apps de Mensajería',
      icon: 'ri-chat-3-line',
      color: '#25D366',
      description: 'Comunicación en tiempo real',
      databases: [
        { name: 'MongoDB', type: 'Documentos', use: 'Mensajes flexibles (texto, imágenes, reacciones)', color: '#47A248' },
        { name: 'Redis/Kafka', type: 'Colas/Eventos', use: 'Mensajes en tiempo real, notificaciones push', color: '#DC382D' },
        { name: 'PostgreSQL', type: 'Relacional', use: 'Usuarios, contactos, grupos', color: '#336791' }
      ],
      diagram: {
        title: 'Flujo de mensaje',
        steps: [
          { action: 'Enviar mensaje', target: 'Redis/Kafka', icon: 'ri-send-plane-line' },
          { action: 'Guardar mensaje', target: 'MongoDB', icon: 'ri-save-line' },
          { action: 'Notificar destinatario', target: 'Redis (Push)', icon: 'ri-notification-line' },
          { action: 'Sincronizar historial', target: 'MongoDB', icon: 'ri-refresh-line' }
        ]
      }
    }
  ];

  const activeData = companies.find(c => c.id === activeCompany)!;

  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Bases de Datos en Aplicaciones Reales
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            Las empresas grandes <strong className="text-[#336791]">combinan varios tipos de bases de datos</strong> según el caso de uso
          </p>
        </div>

        {/* Company Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => setActiveCompany(company.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded transition-all duration-300 text-xs sm:text-sm font-medium ${
                activeCompany === company.id
                  ? 'shadow-md scale-105'
                  : 'bg-white border border-[#dbe9f4] hover:border-[#336791] hover:shadow-sm'
              }`}
              style={{
                backgroundColor: activeCompany === company.id ? company.color : undefined,
                color: activeCompany === company.id ? 'white' : '#313131'
              }}
            >
              <i className={`${company.icon} text-base sm:text-lg`}></i>
              <span>{company.name}</span>
            </button>
          ))}
        </div>

        {/* Active Company Content */}
        <div className="bg-white rounded p-6 sm:p-8 border border-[#dbe9f4] shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#dbe9f4]">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded"
              style={{ backgroundColor: `${activeData.color}15` }}
            >
              <i className={`${activeData.icon} text-2xl sm:text-3xl`} style={{ color: activeData.color }}></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#313131]">{activeData.name}</h3>
              <p className="text-sm text-[#274e6d]">{activeData.description}</p>
            </div>
          </div>

          {/* Databases Used */}
          <div className="mb-8">
            <h4 className="text-base sm:text-lg font-bold text-[#313131] mb-4 flex items-center gap-2">
              <i className="ri-database-2-line text-[#336791]"></i>
              Bases de datos utilizadas
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {activeData.databases.map((db, index) => (
                <div 
                  key={index}
                  className="bg-[#f8f9fa] rounded p-4 border-l-4 hover:shadow-md transition-shadow"
                  style={{ borderColor: db.color }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-8 h-8 flex items-center justify-center rounded"
                      style={{ backgroundColor: `${db.color}15` }}
                    >
                      <i className="ri-database-2-line text-sm" style={{ color: db.color }}></i>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#313131]">{db.name}</p>
                      <p className="text-[10px] font-medium" style={{ color: db.color }}>{db.type}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#274e6d]">{db.use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="bg-[#dbe9f4] rounded p-4 sm:p-6">
            <h4 className="text-base sm:text-lg font-bold text-[#313131] mb-4 text-center flex items-center justify-center gap-2">
              <i className="ri-flow-chart text-[#336791]"></i>
              {activeData.diagram.title}
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              {activeData.diagram.steps.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center">
                  <div className="bg-white rounded p-3 sm:p-4 text-center min-w-[140px] sm:min-w-[160px] border border-[#336791]/20 hover:shadow-md transition-shadow">
                    <div 
                      className="w-10 h-10 flex items-center justify-center rounded mx-auto mb-2"
                      style={{ backgroundColor: `${activeData.color}15` }}
                    >
                      <i className={`${step.icon} text-lg`} style={{ color: activeData.color }}></i>
                    </div>
                    <p className="text-xs font-medium text-[#313131] mb-1">{step.action}</p>
                    <p className="text-[10px] px-2 py-0.5 bg-[#336791]/10 text-[#336791] rounded inline-block">{step.target}</p>
                  </div>
                  {index < activeData.diagram.steps.length - 1 && (
                    <>
                      <i className="hidden sm:block ri-arrow-right-line text-[#336791] text-xl mx-2"></i>
                      <i className="sm:hidden ri-arrow-down-line text-[#336791] text-xl my-1"></i>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Distribution Note */}
        <div className="mt-8 bg-gradient-to-r from-[#336791]/5 to-[#ff9900]/5 rounded p-4 sm:p-6 border border-[#dbe9f4]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[#336791]/10 rounded flex-shrink-0">
              <i className="ri-global-line text-[#336791] text-xl"></i>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#313131] mb-1">Servicios Globales</h4>
              <p className="text-sm text-[#274e6d]">
                Las empresas como Netflix y Amazon usan <strong className="text-[#336791]">bases de datos distribuidas</strong> en múltiples datacenters alrededor del mundo. Esto permite que el servicio siga funcionando incluso si falla un datacenter completo, garantizando alta disponibilidad para millones de usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
