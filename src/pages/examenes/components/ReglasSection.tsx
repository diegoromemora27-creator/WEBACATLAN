
const reglas = [
  {
    icon: '⏱️',
    titulo: 'Tiempo Límite',
    descripcion: 'Cada examen tiene un tiempo específico. Una vez iniciado, el cronómetro no se detiene. ¡Administra bien tu tiempo!',
    color: '#E52521',
    border: '#8B0000',
  },
  {
    icon: '📵',
    titulo: 'Sin Recursos Externos',
    descripcion: 'Los exámenes son a libro cerrado. No se permite consultar apuntes, internet ni dispositivos durante la evaluación.',
    color: '#1b3d70',
    border: '#0d2040',
  },
  {
    icon: '✏️',
    titulo: 'Respuestas Definitivas',
    descripcion: 'Una vez enviada una respuesta en los exámenes en línea, no podrá modificarse. Lee bien antes de responder.',
    color: '#228B22',
    border: '#145214',
  },
  {
    icon: '🎯',
    titulo: 'Calificación Mínima',
    descripcion: 'La calificación mínima aprobatoria es 6.0. Los exámenes representan el 60% de la calificación final del curso.',
    color: '#C8860A',
    border: '#8B6914',
  },
  {
    icon: '🔄',
    titulo: 'Sin Reposición Automática',
    descripcion: 'No hay exámenes de reposición automáticos. En caso de falta justificada, hablar directamente con el profesor.',
    color: '#8B4513',
    border: '#5C2E0A',
  },
  {
    icon: '🤝',
    titulo: 'Trabajo Individual',
    descripcion: 'Los exámenes son individuales. Cualquier intento de copia o deshonestidad académica resultará en calificación de 0.',
    color: '#5B3A8B',
    border: '#3B0764',
  },
];

export default function ReglasSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#1b3d70' }}>
      {/* Pixel decoration top */}
      <div className="absolute top-0 left-0 right-0 h-4 flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-1" style={{ background: i % 2 === 0 ? '#FFD700' : '#DAA520' }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#E52521] border-4 border-[#8B0000] px-5 py-2 mb-4 shadow-[4px_4px_0px_#8B0000]">
            <span className="text-white font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              GAME RULES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            Reglas del Juego
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Antes de enfrentarte al jefe final, conoce las reglas. ¡Todo jugador debe saber las condiciones de la partida!
          </p>
        </div>

        {/* Rules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reglas.map((regla, i) => (
            <div
              key={i}
              className="relative rounded-none border-4 p-5 md:p-6 transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.4)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:-translate-y-1 cursor-default"
              style={{ background: regla.color, borderColor: regla.border }}
            >
              {/* Pixel corner decorations */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-white/20" />
              <div className="absolute top-1 right-1 w-2 h-2 bg-white/20" />
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/20" />
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/20" />

              <div className="flex items-start gap-4">
                <div className="text-3xl md:text-4xl flex-shrink-0">{regla.icon}</div>
                <div>
                  <h3 className="text-white font-black text-base md:text-lg mb-2">{regla.titulo}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{regla.descripcion}</p>
                </div>
              </div>

              {/* Rule number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FFD700] border-2 border-[#DAA520] rounded-full flex items-center justify-center shadow-md">
                <span className="text-[#5C3A1E] font-black text-xs">{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pixel decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-1" style={{ background: i % 2 === 0 ? '#FFD700' : '#DAA520' }} />
        ))}
      </div>
    </section>
  );
}
