
const consejos = [
  {
    emoji: '🍄',
    titulo: 'Repasa los conceptos clave',
    desc: 'No memorices, entiende. Pregúntate: ¿puedo explicar esto con mis propias palabras? Si no puedes, vuelve a repasar.',
    color: '#E52521',
    border: '#8B0000',
  },
  {
    emoji: '⭐',
    titulo: 'Practica con código real',
    desc: 'Para los temas de Backend y Frontend, escribe código. La práctica activa fija mucho mejor que solo leer.',
    color: '#228B22',
    border: '#145214',
  },
  {
    emoji: '🗺️',
    titulo: 'Haz mapas mentales',
    desc: 'Conecta los conceptos entre sí. Por ejemplo: NestJS → Módulos → Controladores → Servicios → TypeORM → Entidades.',
    color: '#C8860A',
    border: '#8B6914',
  },
  {
    emoji: '⏰',
    titulo: 'Simula el tiempo del examen',
    desc: 'Practica respondiendo preguntas con límite de tiempo. 90 minutos para 30 preguntas = 3 min por pregunta.',
    color: '#1b3d70',
    border: '#0d2040',
  },
  {
    emoji: '🔍',
    titulo: 'Lee bien las preguntas',
    desc: 'Muchos errores vienen de no leer completo. Palabras como "NO", "EXCEPTO", "SIEMPRE" cambian todo el sentido.',
    color: '#5B3A8B',
    border: '#3B0764',
  },
  {
    emoji: '💡',
    titulo: 'Usa ejemplos reales',
    desc: 'En respuestas cortas, menciona apps reales (Netflix, Uber, WhatsApp). Demuestra que entiendes el contexto.',
    color: '#8B4513',
    border: '#5C2E0A',
  },
];

export default function ConsejosSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#fff' }}>
      {/* Pixel top border */}
      <div className="absolute top-0 left-0 right-0 h-3 flex">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="flex-1" style={{ background: i % 3 === 0 ? '#E52521' : i % 3 === 1 ? '#FFD700' : '#228B22' }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#228B22] border-4 border-[#145214] px-5 py-2 mb-4 shadow-[4px_4px_0px_#145214]">
            <span className="text-white font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              POWER-UPS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1b3d70] mb-4">
            Consejos para Ganar
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Recoge estos power-ups antes del examen. ¡Cada uno te dará una ventaja extra en la batalla!
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {consejos.map((c, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border-4 p-5 md:p-6 bg-white transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 cursor-default"
              style={{ borderColor: c.border }}
            >
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: c.color }} />

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl border-4 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]"
                  style={{ background: c.color, borderColor: c.border }}
                >
                  {c.emoji}
                </div>
                <div>
                  <h3 className="font-black text-[#1b3d70] text-sm md:text-base mb-2">{c.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ background: c.color }}
              />
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-14 md:mt-20 text-center">
          <div
            className="inline-block border-4 px-8 py-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] max-w-2xl w-full"
            style={{ background: '#1b3d70', borderColor: '#0d2040' }}
          >
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-white font-black text-xl md:text-2xl mb-2">¡Tú puedes lograrlo!</h3>
            <p className="text-white/80 text-sm md:text-base">
              Recuerda: el conocimiento que adquieres en este curso no es solo para el examen, es para tu carrera profesional. ¡Estudia con propósito!
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {['⭐', '⭐', '⭐'].map((s, i) => (
                <span key={i} className="text-2xl animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pixel bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-3 flex">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="flex-1" style={{ background: i % 3 === 0 ? '#E52521' : i % 3 === 1 ? '#FFD700' : '#228B22' }} />
        ))}
      </div>
    </section>
  );
}
