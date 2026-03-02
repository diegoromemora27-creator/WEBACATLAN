
const examenes = [
  {
    numero: '01',
    nombre: 'Examen Parcial 1',
    subtitulo: 'Fundamentos & Arquitectura',
    emoji: '🏰',
    color: '#5B3A8B',
    border: '#3B0764',
    peso: '20%',
    duracion: '90 min',
    preguntas: 30,
    temas: [
      'Arquitectura de Software (qué es, capas, módulos)',
      'Principios: Modularidad, Escalabilidad, Mantenibilidad',
      'Patrones: Capas (n-tier) y Hexagonal',
      'Arquitecturas: Monolítica, Microservicios, MVC, Serverless',
      'Metodologías Ágiles (Scrum, roles, ceremonias)',
      'Control de Versiones (Git, ramas, flujos)',
    ],
    distribucion: [
      { tipo: 'Pregunta de Opción Múltiple', cantidad: 12, puntos: 12 },
      { tipo: 'Pregunta Abierta', cantidad: 10, puntos: 20 },
      { tipo: 'Completar Código', cantidad: 5, puntos: 10 },
      { tipo: 'Relacionar Columnas', cantidad: 3, puntos: 4.5 },
    ],
  },
];

export default function ExamenesListSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#F0F4FF' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#E52521] border-4 border-[#8B0000] px-5 py-2 mb-4 shadow-[4px_4px_0px_#8B0000]">
            <span className="text-white font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              WORLD MAP
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1b3d70] mb-4">
            Detalles del Examen
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Conoce los temas, duración y distribución de puntos del Examen Parcial 1.
          </p>
        </div>

        {/* Exam */}
        <div className="space-y-8 md:space-y-10">
          {examenes.map((examen, i) => (
            <div
              key={i}
              className="border-4 overflow-hidden shadow-[5px_5px_0px_rgba(0,0,0,0.2)] hover:shadow-[7px_7px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: examen.border, background: '#fff' }}
            >
              {/* Header */}
              <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ background: examen.color }}>
                <div className="flex items-center gap-4">
                  <div className="text-4xl md:text-5xl">{examen.emoji}</div>
                  <div>
                    <div className="text-white/70 text-xs font-bold tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                      EXAMEN {examen.numero}
                    </div>
                    <h3 className="text-white font-black text-xl md:text-2xl">{examen.nombre}</h3>
                    <p className="text-white/80 text-sm">{examen.subtitulo}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/20 border-2 border-white/40 px-3 py-2 text-center">
                    <div className="text-white/70 text-xs">Peso</div>
                    <div className="text-white font-black text-lg">{examen.peso}</div>
                  </div>
                  <div className="bg-white/20 border-2 border-white/40 px-3 py-2 text-center">
                    <div className="text-white/70 text-xs">Duración</div>
                    <div className="text-white font-black text-lg">{examen.duracion}</div>
                  </div>
                  <div className="bg-white/20 border-2 border-white/40 px-3 py-2 text-center">
                    <div className="text-white/70 text-xs">Preguntas</div>
                    <div className="text-white font-black text-lg">{examen.preguntas}</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Temas */}
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: examen.color }}>
                    <i className="ri-book-open-line"></i> Temas Evaluados
                  </h4>
                  <ul className="space-y-2">
                    {examen.temas.map((tema, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: examen.color }}>▶</span>
                        <span>{tema}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Distribución */}
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: examen.color }}>
                    <i className="ri-pie-chart-line"></i> Distribución de Puntos
                  </h4>
                  <div className="space-y-2">
                    {examen.distribucion.map((d, j) => (
                      <div key={j} className="flex items-center justify-between p-2 border-l-4" style={{ borderLeftColor: examen.color, background: '#FAFAFA' }}>
                        <div>
                          <span className="font-bold text-sm text-gray-800">{d.tipo}</span>
                          <span className="text-gray-500 text-xs ml-2">({d.cantidad} preguntas)</span>
                        </div>
                        <span className="font-black text-sm" style={{ color: examen.color }}>{d.puntos} pts</span>
                      </div>
                    ))}
                    {/* Total */}
                    <div className="flex items-center justify-between p-2 border-l-4 mt-1" style={{ borderLeftColor: examen.border, background: examen.color + '15' }}>
                      <span className="font-black text-sm text-gray-800">TOTAL</span>
                      <span className="font-black text-sm" style={{ color: examen.color }}>
                        {examen.distribucion.reduce((acc, d) => acc + d.puntos, 0)} pts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
