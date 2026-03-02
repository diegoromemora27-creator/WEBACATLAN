
const consejos = [
  {
    emoji: '🛸',
    titulo: 'Repasa HTML y CSS a fondo',
    desc: 'Practica el Box Model, Flexbox y Grid con ejemplos reales. Dibuja layouts en papel y luego impleméntalos en código.',
    color: '#00FF88',
    border: '#00AA55',
  },
  {
    emoji: '👾',
    titulo: 'Escribe TypeScript todos los días',
    desc: 'Crea interfaces, usa genéricos y practica los Utility Types. La práctica activa fija mucho mejor que solo leer.',
    color: '#00DDFF',
    border: '#0099BB',
  },
  {
    emoji: '⚡',
    titulo: 'Entiende los 4 pilares de POO',
    desc: 'Encapsulamiento, Herencia, Polimorfismo y Abstracción. Crea ejemplos propios con clases reales como "Vehículo" o "Animal".',
    color: '#FFD700',
    border: '#CC9900',
  },
  {
    emoji: '🔫',
    titulo: 'Simula el tiempo del examen',
    desc: 'Practica respondiendo preguntas con límite de tiempo. 90 minutos para 30 preguntas = 3 minutos por pregunta.',
    color: '#AA88FF',
    border: '#7755CC',
  },
  {
    emoji: '🎯',
    titulo: 'Lee bien las preguntas',
    desc: 'Muchos errores vienen de no leer completo. Palabras como "NO", "EXCEPTO", "SIEMPRE" cambian todo el sentido.',
    color: '#FF6644',
    border: '#CC3322',
  },
  {
    emoji: '💥',
    titulo: 'Usa ejemplos reales en tus respuestas',
    desc: 'En respuestas cortas, menciona apps reales (Twitter, Instagram, Netflix). Demuestra que entiendes el contexto.',
    color: '#FF4444',
    border: '#AA0000',
  },
];

export default function ConsejosSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#000820' }}>
      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 6 === 0 ? '3px' : '2px',
            height: i % 6 === 0 ? '3px' : '2px',
            top: `${(i * 13 + 7) % 100}%`,
            left: `${(i * 27 + 3) % 100}%`,
            opacity: 0.1 + (i % 5) * 0.06,
            animation: `twinkle2 ${2 + (i % 4) * 0.5}s ease-in-out infinite`,
            animationDelay: `${(i % 6) * 0.4}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-block border-2 px-5 py-2 mb-4"
            style={{ borderColor: '#00FF88', background: 'rgba(0,255,136,0.08)', boxShadow: '0 0 16px rgba(0,255,136,0.25)' }}
          >
            <span className="font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace", color: '#00FF88' }}>
              POWER-UPS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
            Consejos para Ganar
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#00FF8899' }}>
            Recoge estos power-ups antes del examen. ¡Cada uno te dará una ventaja extra en la batalla espacial!
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {consejos.map((c, i) => (
            <div
              key={i}
              className="group relative border-2 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
              style={{
                borderColor: c.border,
                background: 'rgba(0,10,20,0.95)',
                boxShadow: `0 0 10px ${c.color}18`,
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: c.color }} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${c.color}08 0%, transparent 70%)` }}
              />

              <div className="flex items-start gap-4 relative z-10">
                <div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-2xl border-2"
                  style={{ borderColor: c.border, background: c.color + '15' }}
                >
                  {c.emoji}
                </div>
                <div>
                  <h3 className="font-black text-sm md:text-base mb-2" style={{ color: c.color }}>{c.titulo}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#AACCBB' }}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-14 md:mt-20 text-center">
          <div
            className="inline-block border-2 px-8 py-6 max-w-2xl w-full relative overflow-hidden"
            style={{
              borderColor: '#00FF88',
              background: 'rgba(0,10,20,0.98)',
              boxShadow: '0 0 40px rgba(0,255,136,0.2)',
            }}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-r-0 border-b-0 border-2" style={{ borderColor: '#00FF88' }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-l-0 border-b-0 border-2" style={{ borderColor: '#00FF88' }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-r-0 border-t-0 border-2" style={{ borderColor: '#00FF88' }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-l-0 border-t-0 border-2" style={{ borderColor: '#00FF88' }} />

            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-black text-xl md:text-2xl mb-2 text-white">¡Tú puedes lograrlo!</h3>
            <p className="text-sm md:text-base" style={{ color: '#AACCBB' }}>
              El conocimiento que adquieres no es solo para el examen, es para tu carrera profesional. ¡Estudia con propósito y derrota a todos los enemigos!
            </p>
            <div className="mt-4 flex justify-center gap-3">
              {['👾', '🛸', '⚡'].map((s, i) => (
                <span key={i} className="text-2xl" style={{ animation: `pulse2 ${1 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @keyframes twinkle2 {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse2 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
