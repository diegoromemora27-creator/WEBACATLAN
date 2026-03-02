
const reglas = [
  {
    icon: '⏱️',
    titulo: 'Tiempo Límite',
    descripcion: 'Tienes 90 minutos exactos. Una vez iniciado el examen, el cronómetro no se detiene. ¡Administra bien tu tiempo de vuelo!',
    color: '#FF4444',
    border: '#AA0000',
  },
  {
    icon: '📵',
    titulo: 'Sin Recursos Externos',
    descripcion: 'Examen a libro cerrado. No se permite consultar apuntes, internet ni dispositivos durante la batalla.',
    color: '#00DDFF',
    border: '#0099BB',
  },
  {
    icon: '✏️',
    titulo: 'Respuestas Definitivas',
    descripcion: 'Una vez enviada una respuesta en línea, no podrá modificarse. Lee bien antes de disparar.',
    color: '#00FF88',
    border: '#00AA55',
  },
  {
    icon: '🎯',
    titulo: 'Calificación Mínima',
    descripcion: 'La calificación mínima aprobatoria es 6.0. Este examen representa el 20% de la calificación final.',
    color: '#FFD700',
    border: '#CC9900',
  },
  {
    icon: '🔄',
    titulo: 'Sin Reposición Automática',
    descripcion: 'No hay exámenes de reposición automáticos. En caso de falta justificada, hablar directamente con el profesor.',
    color: '#AA88FF',
    border: '#7755CC',
  },
  {
    icon: '🤝',
    titulo: 'Trabajo Individual',
    descripcion: 'Los exámenes son individuales. Cualquier intento de copia resultará en calificación de 0. ¡Sin trampa!',
    color: '#FF6644',
    border: '#CC3322',
  },
];

export default function ReglasSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#000C1A' }}>
      {/* Scanline top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-1" style={{ background: i % 3 === 0 ? '#00FF88' : i % 3 === 1 ? '#00DDFF' : '#FFD700' }} />
        ))}
      </div>

      {/* Stars */}
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 7 === 0 ? '3px' : '2px',
            height: i % 7 === 0 ? '3px' : '2px',
            top: `${(i * 17 + 9) % 100}%`,
            left: `${(i * 29 + 5) % 100}%`,
            opacity: 0.15 + (i % 5) * 0.06,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-block border-2 px-5 py-2 mb-4"
            style={{ borderColor: '#FF4444', background: 'rgba(255,68,68,0.08)', boxShadow: '0 0 16px rgba(255,68,68,0.25)' }}
          >
            <span className="font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace", color: '#FF4444' }}>
              GAME RULES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white drop-shadow-lg">
            Reglas del Juego
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#00FF8899' }}>
            Antes de entrar al campo de batalla, conoce las reglas. Todo piloto debe saber las condiciones de combate.
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reglas.map((regla, i) => (
            <div
              key={i}
              className="relative border-2 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                borderColor: regla.border,
                background: 'rgba(0,10,20,0.95)',
                boxShadow: `0 0 12px ${regla.color}22`,
              }}
            >
              {/* Corner pixels */}
              <div className="absolute top-1 left-1 w-2 h-2" style={{ background: regla.color + '44' }} />
              <div className="absolute top-1 right-1 w-2 h-2" style={{ background: regla.color + '44' }} />
              <div className="absolute bottom-1 left-1 w-2 h-2" style={{ background: regla.color + '44' }} />
              <div className="absolute bottom-1 right-1 w-2 h-2" style={{ background: regla.color + '44' }} />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: regla.color }} />

              <div className="flex items-start gap-4">
                <div
                  className="text-3xl md:text-4xl flex-shrink-0 w-12 h-12 flex items-center justify-center border-2"
                  style={{ borderColor: regla.border, background: regla.color + '11' }}
                >
                  {regla.icon}
                </div>
                <div>
                  <h3 className="font-black text-base md:text-lg mb-2" style={{ color: regla.color }}>{regla.titulo}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#AACCBB' }}>{regla.descripcion}</p>
                </div>
              </div>

              {/* Rule number */}
              <div
                className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center border-2 font-black text-xs"
                style={{ background: regla.color, borderColor: regla.border, color: '#000' }}
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scanline bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-1" style={{ background: i % 3 === 0 ? '#00FF88' : i % 3 === 1 ? '#00DDFF' : '#FFD700' }} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </section>
  );
}
