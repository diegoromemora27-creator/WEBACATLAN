
import { useState } from 'react';

const tipos = [
  {
    nivel: 'WAVE 1',
    nombre: 'Pregunta de Opción Múltiple',
    emoji: '👾',
    color: '#00FF88',
    border: '#00AA55',
    bg: 'rgba(0,255,136,0.05)',
    puntos: '1 punto c/u',
    descripcion: 'Se presenta una pregunta con 4 opciones (A, B, C, D). Solo una es correcta. Evalúa comprensión de conceptos clave de Frontend y Código.',
    ejemplo: '¿Cuál propiedad CSS activa el modelo de caja flexible?\nA) display: block\nB) display: flex ✓\nC) display: grid\nD) display: inline',
    tips: ['Lee todas las opciones antes de elegir', 'Elimina las claramente incorrectas', 'Confía en tu primera intuición'],
  },
  {
    nivel: 'WAVE 2',
    nombre: 'Pregunta Abierta',
    emoji: '⚡',
    color: '#AA88FF',
    border: '#7755CC',
    bg: 'rgba(170,136,255,0.05)',
    puntos: '2 puntos c/u',
    descripcion: 'Preguntas que requieren una respuesta abierta. Explica, describe o argumenta conceptos de Frontend, TypeScript o POO con terminología técnica correcta.',
    ejemplo: '¿Qué diferencia hay entre SSR y SSG en Next.js y cuándo usarías cada uno?\n→ SSR genera HTML en cada petición (dinámico); SSG en build time (estático). Usa SSR para contenido dinámico, SSG para contenido estático y mejor rendimiento.',
    tips: ['Sé claro y preciso en tu explicación', 'Usa terminología técnica correcta', 'Organiza tu respuesta de forma lógica'],
  },
  {
    nivel: 'WAVE 3',
    nombre: 'Completar Código',
    emoji: '💥',
    color: '#FFD700',
    border: '#CC9900',
    bg: 'rgba(255,215,0,0.05)',
    puntos: '2 puntos c/u',
    descripcion: 'Fragmento de código con espacios en blanco. Completa la sintaxis correcta de TypeScript, HTML semántico o CSS.',
    ejemplo: 'interface ___<T> {\n  items: T[];\n  total: _____;\n}\n→ Respuesta: Paginated<T> y number',
    tips: ['Recuerda la sintaxis exacta de TypeScript', 'Piensa en el contexto del fragmento', 'Revisa tipos y genéricos'],
  },
  {
    nivel: 'WAVE 4',
    nombre: 'Relacionar Columnas',
    emoji: '🔫',
    color: '#FF6644',
    border: '#CC3322',
    bg: 'rgba(255,102,68,0.05)',
    puntos: '1.5 puntos c/u',
    descripcion: 'Dos columnas de conceptos que debes emparejar. Evalúa relaciones entre términos de HTML, CSS, POO y Next.js.',
    ejemplo: 'display: flex → Layout unidimensional\ndisplay: grid → Layout bidimensional\n<article> → Contenido independiente\nherencia → extends en clases',
    tips: ['Empieza por los que conoces con certeza', 'Usa descarte para los dudosos', 'Revisa que no repitas opciones'],
  },
];

export default function TiposPreguntaSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#000C1A' }}>
      {/* Stars */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: '2px', height: '2px',
            top: `${(i * 23 + 7) % 100}%`,
            left: `${(i * 37 + 13) % 100}%`,
            opacity: 0.15 + (i % 5) * 0.05,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-block border-2 px-5 py-2 mb-4"
            style={{ borderColor: '#FFD700', background: 'rgba(255,215,0,0.08)', boxShadow: '0 0 16px rgba(255,215,0,0.2)' }}
          >
            <span className="font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace", color: '#FFD700' }}>
              ENEMY WAVES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
            Tipos de Preguntas
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#00FF8899' }}>
            Cada wave tiene su propio tipo de enemigo. Conoce los tipos de preguntas que enfrentarás.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {tipos.map((tipo, i) => (
            <div
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="cursor-pointer"
            >
              <div
                className={`border-2 transition-all duration-300 overflow-hidden ${selected === i ? 'scale-[1.02]' : 'hover:-translate-y-1'}`}
                style={{
                  borderColor: tipo.border,
                  background: 'rgba(0,10,20,0.95)',
                  boxShadow: selected === i ? `0 0 20px ${tipo.color}44` : `0 0 8px ${tipo.color}22`,
                }}
              >
                {/* Card header */}
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${tipo.color}22 0%, ${tipo.color}08 100%)`, borderBottom: `2px solid ${tipo.border}` }}
                >
                  <div>
                    <div className="font-black text-xs tracking-widest mb-1" style={{ fontFamily: "'Press Start 2P', monospace", color: tipo.color }}>
                      {tipo.nivel}
                    </div>
                    <div className="font-black text-lg text-white">{tipo.nombre}</div>
                  </div>
                  <div className="text-4xl">{tipo.emoji}</div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-coin-line" style={{ color: '#FFD700' }}></i>
                    </div>
                    <span className="font-black text-sm" style={{ color: tipo.color }}>{tipo.puntos}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#AACCBB' }}>{tipo.descripcion}</p>

                  <button className="text-xs font-bold flex items-center gap-1 transition-all" style={{ color: tipo.color }}>
                    {selected === i ? 'Ocultar ejemplo' : 'Ver ejemplo'}
                    <i className={`ri-arrow-${selected === i ? 'up' : 'down'}-s-line`}></i>
                  </button>

                  {selected === i && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      <div className="border p-3" style={{ borderColor: tipo.border, background: 'rgba(0,0,0,0.3)' }}>
                        <div className="text-xs font-black mb-1 uppercase tracking-wide" style={{ color: tipo.color }}>Ejemplo:</div>
                        <pre className="text-xs whitespace-pre-wrap font-mono leading-relaxed" style={{ color: '#CCFFEE' }}>{tipo.ejemplo}</pre>
                      </div>
                      <div>
                        <div className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color: tipo.color }}>Tips:</div>
                        <ul className="space-y-1">
                          {tipo.tips.map((tip, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs" style={{ color: '#AACCBB' }}>
                              <span style={{ color: tipo.color }}>▶</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
      `}</style>
    </section>
  );
}
