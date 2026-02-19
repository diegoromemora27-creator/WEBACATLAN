import { useState } from 'react';

export default function DatabaseUseCasesSection() {
  const [activeType, setActiveType] = useState<string | null>(null);

  const databaseTypes = [
    {
      id: 'relational',
      name: 'Bases de Datos Relacionales',
      shortName: 'SQL',
      icon: 'ri-table-line',
      color: '#336791',
      examples: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'SQLite'],
      characteristics: [
        'Tablas, filas, columnas, claves primarias y foráneas',
        'Lenguaje SQL para consultar y modificar datos',
        'Garantías ACID para transacciones',
        'Integridad referencial'
      ],
      whenToUse: [
        'E-commerce (productos, pedidos, usuarios, pagos)',
        'Banca, nómina, sistemas académicos',
        'Cualquier sistema donde la integridad y transacciones sean clave'
      ],
      diagram: {
        type: 'ER',
        entities: [
          { name: 'clientes', fields: ['id', 'nombre', 'email'] },
          { name: 'pedidos', fields: ['id', 'cliente_id', 'fecha'] },
          { name: 'productos', fields: ['id', 'nombre', 'precio'] }
        ]
      }
    },
    {
      id: 'document',
      name: 'Bases de Datos de Documentos',
      shortName: 'NoSQL Docs',
      icon: 'ri-braces-line',
      color: '#47A248',
      examples: ['MongoDB', 'CouchDB', 'Firestore'],
      characteristics: [
        'Guardan documentos tipo JSON con estructura flexible',
        'Buenas para datos que cambian de forma frecuente',
        'Escalan horizontalmente con facilidad',
        'Sin esquema rígido'
      ],
      whenToUse: [
        'Apps con perfiles de usuario variados',
        'Contenido generado por usuarios (posts, comentarios)',
        'Prototipos rápidos y MVPs'
      ],
      sampleDocument: `{
  "_id": "user_123",
  "nombre": "Ana García",
  "preferencias": {
    "tema": "oscuro",
    "idioma": "es"
  },
  "tags": ["premium", "activo"]
}`
    },
    {
      id: 'keyvalue',
      name: 'Bases de Datos Clave-Valor',
      shortName: 'Cache',
      icon: 'ri-key-line',
      color: '#DC382D',
      examples: ['Redis', 'Memcached', 'DynamoDB'],
      characteristics: [
        'Acceso extremadamente rápido por clave',
        'Funcionan como un gran diccionario',
        'Se usan mucho como cache en memoria',
        'Datos volátiles o temporales'
      ],
      whenToUse: [
        'Guardar sesiones de usuario (tokens)',
        'Cachear respuestas de consultas costosas',
        'Contar vistas, likes o métricas en tiempo real'
      ],
      cacheFlow: [
        { step: 1, action: 'Buscar en Redis', result: '¿Existe en cache?' },
        { step: 2, action: 'Si NO existe → Consultar DB', result: 'SELECT ...' },
        { step: 3, action: 'Guardar en Redis', result: 'SET key value' },
        { step: 4, action: 'Retornar respuesta', result: 'JSON Response' }
      ]
    },
    {
      id: 'columnar',
      name: 'Bases de Datos de Columnas Anchas',
      shortName: 'Big Data',
      icon: 'ri-bar-chart-horizontal-line',
      color: '#1287B1',
      examples: ['Cassandra', 'HBase', 'ScyllaDB'],
      characteristics: [
        'Diseñadas para grandes volúmenes distribuidos',
        'Buen desempeño para escrituras masivas',
        'Consultas eficientes sobre muchas filas',
        'Alta disponibilidad y tolerancia a fallos'
      ],
      whenToUse: [
        'Sistemas de logging y analítica a gran escala',
        'Historial de eventos de millones de usuarios',
        'Métricas de uso (clickstream, telemetría)'
      ],
      scaleVisualization: {
        metric: 'Eventos por segundo',
        values: [10000, 50000, 100000, 500000, 1000000],
        label: 'Escala horizontal'
      }
    },
    {
      id: 'graph',
      name: 'Bases de Datos de Grafos',
      shortName: 'Grafos',
      icon: 'ri-mind-map',
      color: '#008CC1',
      examples: ['Neo4j', 'Amazon Neptune', 'ArangoDB'],
      characteristics: [
        'Modelo de nodos y relaciones (grafo)',
        'Potentes para consultas sobre redes',
        'Amigos de amigos, rutas más cortas',
        'Recomendaciones basadas en conexiones'
      ],
      whenToUse: [
        'Redes sociales (amigos, seguidores, grupos)',
        'Recomendadores (compraron X también Y)',
        'Detección de fraude por patrones de conexión'
      ],
      graphExample: {
        nodes: [
          { id: 'A', name: 'Ana' },
          { id: 'B', name: 'Carlos' },
          { id: 'C', name: 'María' },
          { id: 'D', name: 'Juan' }
        ],
        edges: [
          { from: 'A', to: 'B', label: 'amigo' },
          { from: 'A', to: 'C', label: 'amigo' },
          { from: 'B', to: 'D', label: 'amigo' },
          { from: 'C', to: 'D', label: 'amigo' }
        ]
      }
    }
  ];

  const useCasesTable = [
    { system: 'Tienda en línea pequeña', dbType: 'Relacional (MySQL/Postgres)', reason: 'Catálogo, pedidos, pagos; integridad y transacciones son críticas', color: '#336791' },
    { system: 'Plataforma de streaming', dbType: 'Columnas anchas + cache', reason: 'Millones de eventos, métricas en tiempo real y recomendaciones', color: '#1287B1' },
    { system: 'App de redes sociales', dbType: 'Relacional + grafo + cache', reason: 'Usuarios y posts relacionales, relaciones complejas y timelines rápidos', color: '#008CC1' },
    { system: 'Banco en línea', dbType: 'Relacional enterprise', reason: 'Movimientos financieros con alta consistencia y auditoría', color: '#336791' },
    { system: 'App de mensajería', dbType: 'Documentos (MongoDB)', reason: 'Mensajes con estructura flexible y alto volumen', color: '#47A248' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#313131] mb-3 sm:mb-4">
            Tipos de Bases de Datos y Cuándo Usarlas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#274e6d] max-w-3xl mx-auto px-2">
            Cada tipo de base de datos tiene fortalezas únicas para diferentes casos de uso
          </p>
        </div>

        {/* Database Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {databaseTypes.map((db) => (
            <button
              key={db.id}
              onClick={() => setActiveType(activeType === db.id ? null : db.id)}
              className={`p-4 sm:p-5 rounded text-left transition-all duration-300 ${
                activeType === db.id 
                  ? 'shadow-lg scale-105' 
                  : 'bg-white border border-[#dbe9f4] hover:shadow-md hover:border-[#336791]'
              }`}
              style={{
                backgroundColor: activeType === db.id ? `${db.color}10` : undefined,
                border: activeType === db.id ? `2px solid ${db.color}` : undefined,
                boxShadow: activeType === db.id ? `0 0 0 2px ${db.color}30` : undefined
              }}
            >
              <div 
                className="w-12 h-12 flex items-center justify-center rounded mb-3"
                style={{ backgroundColor: `${db.color}15` }}
              >
                <i className={`${db.icon} text-2xl`} style={{ color: db.color }}></i>
              </div>
              <p className="font-bold text-sm text-[#313131] mb-1">{db.shortName}</p>
              <p className="text-[10px] text-[#274e6d] leading-tight">{db.name}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {db.examples.slice(0, 2).map((ex, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: `${db.color}15`, color: db.color }}
                  >
                    {ex}
                  </span>
                ))}
                {db.examples.length > 2 && (
                  <span className="text-[9px] text-[#274e6d]">+{db.examples.length - 2}</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Expanded Detail */}
        {activeType && (
          <div className="bg-white rounded p-6 sm:p-8 border border-[#336791]/20 shadow-sm mb-8 animate-fadeIn">
            {(() => {
              const db = databaseTypes.find(d => d.id === activeType)!;
              return (
                <>
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#dbe9f4]">
                    <div 
                      className="w-14 h-14 flex items-center justify-center rounded"
                      style={{ backgroundColor: `${db.color}15` }}
                    >
                      <i className={`${db.icon} text-3xl`} style={{ color: db.color }}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#313131]">{db.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {db.examples.map((ex, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-0.5 rounded font-medium"
                            style={{ backgroundColor: `${db.color}15`, color: db.color }}
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Characteristics */}
                    <div>
                      <h4 className="text-sm font-bold text-[#313131] mb-3 flex items-center gap-2">
                        <i className="ri-list-check text-[#336791]"></i>
                        Características
                      </h4>
                      <ul className="space-y-2">
                        {db.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#274e6d]">
                            <i className="ri-check-line mt-0.5 flex-shrink-0" style={{ color: db.color }}></i>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* When to Use */}
                    <div>
                      <h4 className="text-sm font-bold text-[#313131] mb-3 flex items-center gap-2">
                        <i className="ri-lightbulb-line text-[#ff9900]"></i>
                        Cuándo usarlas en web
                      </h4>
                      <ul className="space-y-2">
                        {db.whenToUse.map((use, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#274e6d]">
                            <i className="ri-arrow-right-s-line mt-0.5 flex-shrink-0" style={{ color: db.color }}></i>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Specific Visualizations */}
                  <div className="mt-6 pt-6 border-t border-[#dbe9f4]">
                    {/* ER Diagram for Relational */}
                    {db.diagram && (
                      <div className="bg-[#dbe9f4] rounded p-4">
                        <h4 className="text-sm font-bold text-[#313131] mb-4 text-center">
                          Diagrama Entidad-Relación (Mini)
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                          {db.diagram.entities.map((entity, i) => (
                            <div key={i} className="bg-white rounded border-2 border-[#336791] overflow-hidden min-w-[140px]">
                              <div className="bg-[#336791] text-white px-3 py-1.5 text-sm font-bold text-center">
                                {entity.name}
                              </div>
                              <div className="p-2">
                                {entity.fields.map((field, fi) => (
                                  <div key={fi} className="text-xs text-[#313131] py-0.5 flex items-center gap-1">
                                    {fi === 0 && <i className="ri-key-2-line text-[#ff9900] text-[10px]"></i>}
                                    {field}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sample Document for NoSQL */}
                    {db.sampleDocument && (
                      <div className="bg-[#313131] rounded p-4 overflow-x-auto">
                        <p className="text-xs text-gray-400 mb-2">Documento JSON de ejemplo:</p>
                        <pre className="text-xs sm:text-sm text-green-400 font-mono">{db.sampleDocument}</pre>
                      </div>
                    )}

                    {/* Cache Flow */}
                    {db.cacheFlow && (
                      <div className="bg-[#dbe9f4] rounded p-4">
                        <h4 className="text-sm font-bold text-[#313131] mb-4 text-center">
                          Flujo de Cache
                        </h4>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
                          {db.cacheFlow.map((step, i) => (
                            <div key={i} className="flex flex-col sm:flex-row items-center">
                              <div className="bg-white rounded p-3 text-center min-w-[120px] border border-[#DC382D]/30">
                                <div className="w-6 h-6 flex items-center justify-center bg-[#DC382D] text-white text-xs font-bold rounded-full mx-auto mb-1">
                                  {step.step}
                                </div>
                                <p className="text-xs font-medium text-[#313131]">{step.action}</p>
                                <p className="text-[10px] text-[#DC382D]">{step.result}</p>
                              </div>
                              {i < db.cacheFlow.length - 1 && (
                                <>
                                  <i className="hidden sm:block ri-arrow-right-line text-[#DC382D] mx-2"></i>
                                  <i className="sm:hidden ri-arrow-down-line text-[#DC382D] my-1"></i>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Scale Visualization */}
                    {db.scaleVisualization && (
                      <div className="bg-[#dbe9f4] rounded p-4">
                        <h4 className="text-sm font-bold text-[#313131] mb-4 text-center">
                          {db.scaleVisualization.label}
                        </h4>
                        <div className="flex items-end justify-center gap-2 h-32">
                          {db.scaleVisualization.values.map((val, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                              <div 
                                className="w-8 sm:w-12 rounded-t transition-all duration-300"
                                style={{ 
                                  height: `${(val / 1000000) * 100}%`,
                                  backgroundColor: db.color,
                                  minHeight: '20px'
                                }}
                              ></div>
                              <span className="text-[9px] text-[#274e6d]">{val >= 1000000 ? '1M' : `${val/1000}K`}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-center text-[#274e6d] mt-2">{db.scaleVisualization.metric}</p>
                      </div>
                    )}

                    {/* Graph Example */}
                    {db.graphExample && (
                      <div className="bg-[#dbe9f4] rounded p-4">
                        <h4 className="text-sm font-bold text-[#313131] mb-4 text-center">
                          Ejemplo de Grafo: "Amigos de mis amigos"
                        </h4>
                        <div className="flex justify-center">
                          <svg viewBox="0 0 200 150" className="w-full max-w-md">
                            {/* Edges */}
                            <line x1="50" y1="40" x2="100" y2="75" stroke="#008CC1" strokeWidth="2" />
                            <line x1="50" y1="110" x2="100" y2="75" stroke="#008CC1" strokeWidth="2" />
                            <line x1="100" y1="75" x2="150" y2="40" stroke="#008CC1" strokeWidth="2" />
                            <line x1="100" y1="75" x2="150" y2="110" stroke="#008CC1" strokeWidth="2" />
                            <line x1="150" y1="40" x2="150" y2="110" stroke="#008CC1" strokeWidth="2" strokeDasharray="4" />
                            
                            {/* Nodes */}
                            <circle cx="50" cy="40" r="20" fill="#008CC1" />
                            <text x="50" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Ana</text>
                            
                            <circle cx="50" cy="110" r="20" fill="#008CC1" />
                            <text x="50" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">María</text>
                            
                            <circle cx="150" cy="40" r="20" fill="#008CC1" />
                            <text x="150" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Carlos</text>
                            
                            <circle cx="150" cy="110" r="20" fill="#ff9900" />
                            <text x="150" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Juan</text>
                            
                            {/* Center node */}
                            <circle cx="100" cy="75" r="8" fill="#336791" />
                          </svg>
                        </div>
                        <p className="text-xs text-center text-[#274e6d] mt-2">
                          Consulta: "¿Quién es amigo de mis amigos?" → <span className="text-[#ff9900] font-bold">Juan</span>
                        </p>
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Use Cases Table */}
        <div className="bg-white rounded overflow-hidden border border-[#336791]/20 shadow-sm">
          <div className="bg-[#336791] px-4 sm:px-6 py-3 sm:py-4">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <i className="ri-table-line"></i>
              Casos de Uso Reales
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#dbe9f4]">
                  <th className="px-4 py-3 text-left text-[#313131] font-bold">Sistema Web</th>
                  <th className="px-4 py-3 text-left text-[#313131] font-bold">Tipo de DB Principal</th>
                  <th className="px-4 py-3 text-left text-[#313131] font-bold">Razón Principal</th>
                </tr>
              </thead>
              <tbody>
                {useCasesTable.map((row, i) => (
                  <tr key={i} className="border-b border-[#dbe9f4] last:border-0 hover:bg-[#f8f9fa] transition-colors">
                    <td className="px-4 py-3 font-medium text-[#313131]">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: row.color }}
                        ></div>
                        {row.system}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span 
                        className="text-xs px-2 py-1 rounded font-medium"
                        style={{ backgroundColor: `${row.color}15`, color: row.color }}
                      >
                        {row.dbType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#274e6d] text-xs sm:text-sm">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
