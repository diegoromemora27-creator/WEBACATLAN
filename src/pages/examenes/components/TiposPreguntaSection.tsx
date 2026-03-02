
import { useState } from 'react';

const tipos = [
  {
    nivel: 'NIVEL 1',
    nombre: 'Pregunta de Opción Múltiple',
    emoji: '🍄',
    color: '#E52521',
    border: '#8B0000',
    bg: '#FFF5F5',
    puntos: '1 punto c/u',
    descripcion: 'Se presenta una pregunta con 4 opciones de respuesta (A, B, C, D). Solo una es correcta. Evalúa comprensión de conceptos clave.',
    ejemplo: '¿Cuál de los siguientes NO es un principio SOLID?\nA) Single Responsibility\nB) Open/Closed\nC) Dependency Injection ✓\nD) Liskov Substitution',
    tips: ['Lee todas las opciones antes de elegir', 'Elimina las claramente incorrectas', 'Confía en tu primera intuición'],
  },
  {
    nivel: 'NIVEL 2',
    nombre: 'Pregunta Abierta',
    emoji: '📝',
    color: '#228B22',
    border: '#145214',
    bg: '#F0FFF0',
    puntos: '2.5 puntos c/u',
    descripcion: 'Preguntas que requieren una respuesta abierta donde explicas, describes o argumentas. Evalúa la comprensión profunda y la capacidad de comunicar conceptos.',
    ejemplo: '¿Qué diferencia hay entre una imagen y un contenedor en Docker y cuál es la importancia de esta distinción?\n→ La imagen es la plantilla inmutable que contiene el código y dependencias; el contenedor es la instancia en ejecución de esa imagen.',
    tips: ['Sé claro y preciso en tu explicación', 'Usa terminología técnica correcta', 'Organiza tu respuesta de forma lógica'],
  },
  {
    nivel: 'NIVEL 3',
    nombre: 'Completar Código',
    emoji: '🔧',
    color: '#C8860A',
    border: '#8B6914',
    bg: '#FFFBF0',
    puntos: '3 puntos c/u',
    descripcion: 'Se presenta un fragmento de código con espacios en blanco. Debes completar la sintaxis correcta. Evalúa conocimiento práctico y dominio sintáctico.',
    ejemplo: 'async function getUsers() {\n  const response = _____ fetch(url);\n  return response._____();\n}\n→ await y json',
    tips: ['Recuerda decoradores y sintaxis exacta', 'Piensa en el contexto del fragmento', 'Revisa imports necesarios'],
  },
  {
    nivel: 'NIVEL 4',
    nombre: 'Relacionar Columnas',
    emoji: '🗝️',
    color: '#5B3A8B',
    border: '#3B0764',
    bg: '#FAF5FF',
    puntos: '1.5 puntos c/u',
    descripcion: 'Dos columnas de conceptos que debes emparejar correctamente. Evalúa la comprensión de relaciones entre términos, conceptos y definiciones.',
    ejemplo: 'Controller → Maneja peticiones HTTP\nService → Lógica de negocio\nModule → Agrupa componentes\nEntity → Representa tabla BD',
    tips: ['Empieza por los que conoces con certeza', 'Usa descarte para los dudosos', 'Revisa que no repitas opciones'],
  },
  {
    nivel: 'NIVEL 5',
    nombre: 'Caso de Uso',
    emoji: '🚀',
    color: '#1b3d70',
    border: '#0d2040',
    bg: '#F0F4FF',
    puntos: '4 puntos c/u',
    descripcion: 'Se presenta un escenario práctico y debes justificar la mejor decisión técnica usando varios conceptos del curso.',
    ejemplo: '¿Qué arquitectura elegirías para lanzar un MVP rápidamente y por qué?\n→ Monolítica con capas + Supabase para acelerar desarrollo y reducir complejidad inicial.',
    tips: ['Justifica tu decisión técnica', 'Menciona trade-offs', 'Relaciona 2 o más conceptos del curso'],
  },
];

export default function TiposPreguntaSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#F8F6F0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#228B22] border-4 border-[#145214] px-5 py-2 mb-4 shadow-[4px_4px_0px_#145214]">
            <span className="text-white font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              ENEMY TYPES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1b3d70] mb-4">
            Tipos de Preguntas
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Cada nivel tiene sus propios enemigos. Conoce los tipos de preguntas que encontrarás en cada examen.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {tipos.map((tipo, i) => (
            <div
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="cursor-pointer group"
            >
              <div
                className={`border-4 transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 overflow-hidden ${selected === i ? 'scale-[1.02]' : ''}`}
                style={{ borderColor: tipo.border, background: tipo.bg }}
              >
                {/* Card header */}
                <div className="px-5 py-4 flex items-center justify-between" style={{ background: tipo.color }}>
                  <div>
                    <div className="text-white/70 text-xs font-bold tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                      {tipo.nivel}
                    </div>
                    <div className="text-white font-black text-lg">{tipo.nombre}</div>
                  </div>
                  <div className="text-4xl">{tipo.emoji}</div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-coin-line text-[#DAA520]"></i>
                    </div>
                    <span className="font-black text-sm" style={{ color: tipo.color }}>{tipo.puntos}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{tipo.descripcion}</p>

                  {/* Expand button */}
                  <button
                    className="text-xs font-bold flex items-center gap-1 transition-all"
                    style={{ color: tipo.color }}
                  >
                    {selected === i ? 'Ocultar ejemplo' : 'Ver ejemplo'}
                    <i className={`ri-arrow-${selected === i ? 'up' : 'down'}-s-line`}></i>
                  </button>

                  {/* Expanded content */}
                  {selected === i && (
                    <div className="mt-4 space-y-3 animate-fadeIn">
                      {/* Example */}
                      <div className="rounded-none border-2 p-3" style={{ borderColor: tipo.border, background: 'rgba(0,0,0,0.04)' }}>
                        <div className="text-xs font-black mb-1 uppercase tracking-wide" style={{ color: tipo.color }}>Ejemplo:</div>
                        <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">{tipo.ejemplo}</pre>
                      </div>
                      {/* Tips */}
                      <div>
                        <div className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color: tipo.color }}>Tips:</div>
                        <ul className="space-y-1">
                          {tipo.tips.map((tip, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
      `}</style>
    </section>
  );
}
