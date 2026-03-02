
const examen = {
  numero: '02',
  nombre: 'Examen Parcial 2',
  subtitulo: 'Backend, Frontend & Código',
  emoji: '👾',
  color: '#00AA55',
  border: '#006633',
  peso: '10%',
  duracion: '90 min',
  preguntas: 30,
  temas: [
    'HTML Semántico y estructura de documentos',
    'CSS: Box Model, Flexbox, Grid y Responsive Design',
    'TypeScript: tipos, interfaces, genéricos',
    'POO: encapsulamiento, herencia, polimorfismo, abstracción',
    'Next.js: App Router, Server Components, SSR/SSG',
    'Conceptos Avanzados de Frontend (BEM, frameworks)',
  ],
  distribucion: [
    { tipo: 'Pregunta de Opción Múltiple', cantidad: 12, puntos: 12 },
    { tipo: 'Pregunta Abierta', cantidad: 10, puntos: 20 },
    { tipo: 'Completar Código', cantidad: 5, puntos: 10 },
    { tipo: 'Relacionar Columnas', cantidad: 3, puntos: 4.5 },
  ],
};

export default function ExamenDetalleSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#000820' }}>
      {/* Subtle star bg */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: '2px', height: '2px',
            top: `${(i * 19 + 5) % 100}%`,
            left: `${(i * 31 + 11) % 100}%`,
            opacity: 0.2 + (i % 4) * 0.1,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-block border-2 px-5 py-2 mb-4"
            style={{ borderColor: '#00FF88', background: 'rgba(0,255,136,0.08)', boxShadow: '0 0 16px rgba(0,255,136,0.25)' }}
          >
            <span className="font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace", color: '#00FF88' }}>
              MISSION BRIEFING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: '#FFFFFF', textShadow: '0 0 12px rgba(0,255,136,0.4)' }}>
            Detalles del Examen
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#00FF88CC' }}>
            Conoce los temas, duración y distribución de puntos del Examen Parcial 2.
          </p>
        </div>

        {/* Exam card */}
        <div
          className="border-2 overflow-hidden transition-all duration-300"
          style={{ borderColor: examen.border, background: 'rgba(0,20,10,0.9)', boxShadow: '0 0 30px rgba(0,255,136,0.15)' }}
        >
          {/* Header */}
          <div
            className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ background: 'linear-gradient(135deg, #003322 0%, #001a11 100%)', borderBottom: '2px solid #00FF88' }}
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl md:text-5xl">{examen.emoji}</div>
              <div>
                <div className="font-black text-xs tracking-widest mb-1" style={{ fontFamily: "'Press Start 2P', monospace", color: '#00FF88' }}>
                  EXAMEN {examen.numero}
                </div>
                <h3 className="font-black text-xl md:text-2xl text-white">{examen.nombre}</h3>
                <p className="text-sm" style={{ color: '#00FF8899' }}>{examen.subtitulo}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Peso', value: examen.peso },
                { label: 'Duración', value: examen.duracion },
                { label: 'Preguntas', value: examen.preguntas },
              ].map((stat, i) => (
                <div key={i} className="border px-3 py-2 text-center" style={{ borderColor: '#00FF8844', background: 'rgba(0,255,136,0.05)' }}>
                  <div className="text-xs mb-1" style={{ color: '#00FF8877' }}>{stat.label}</div>
                  <div className="font-black text-lg text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Temas */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: '#00FF88' }}>
                <i className="ri-book-open-line"></i> Temas Evaluados
              </h4>
              <ul className="space-y-2">
                {examen.temas.map((tema, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#CCFFEE' }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: '#00FF88' }}>▶</span>
                    <span>{tema}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Distribución */}
            <div>
              <h4 className="font-black text-sm uppercase tracking-wide mb-3 flex items-center gap-2" style={{ color: '#00FF88' }}>
                <i className="ri-pie-chart-line"></i> Distribución de Puntos
              </h4>
              <div className="space-y-2">
                {examen.distribucion.map((d, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between p-2 border-l-4"
                    style={{ borderLeftColor: '#00FF88', background: 'rgba(0,255,136,0.05)' }}
                  >
                    <div>
                      <span className="font-bold text-sm text-white">{d.tipo}</span>
                      <span className="text-xs ml-2" style={{ color: '#00FF8877' }}>({d.cantidad} preguntas)</span>
                    </div>
                    <span className="font-black text-sm" style={{ color: '#00FF88' }}>{d.puntos} pts</span>
                  </div>
                ))}
                <div
                  className="flex items-center justify-between p-2 border-l-4 mt-1"
                  style={{ borderLeftColor: '#00AA55', background: 'rgba(0,255,136,0.1)' }}
                >
                  <span className="font-black text-sm text-white">TOTAL</span>
                  <span className="font-black text-sm" style={{ color: '#00FF88' }}>
                    {examen.distribucion.reduce((acc, d) => acc + d.puntos, 0)} pts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </section>
  );
}
