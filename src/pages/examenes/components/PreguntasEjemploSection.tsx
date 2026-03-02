import { useState } from 'react';

const preguntas = [
  {
    tipo: 'Caso de Uso',
    emoji: '🚀',
    color: '#E52521',
    border: '#8B0000',
    bg: '#FFF5F5',
    pregunta: '¿Qué arquitectura necesitas para un MVP (Producto Mínimo Viable)?',
    respuesta: 'Una arquitectura Monolítica con separación en capas es ideal para un MVP. Es simple de desplegar, fácil de mantener en una pequeña fase inicial y no requiere la complejidad de microservicios. Puedes usar un Backend as a Service como Supabase para acelerar el desarrollo sin infraestructura propia.',
    conceptosClave: ['Arquitectura Monolítica', 'Separación en Capas', 'Backend as a Service', 'Supabase'],
  },
  {
    tipo: 'Caso de Uso',
    emoji: '📈',
    color: '#228B22',
    border: '#145214',
    bg: '#F0FFF0',
    pregunta: '¿Cuándo es el momento ideal para migrar de Monolítica a Microservicios?',
    respuesta: 'Cuando el sistema ya está en producción, ha crecido significativamente y necesita escalar componentes independientemente. Por ejemplo, si tu API maneja 1000 req/s pero solo necesitas escalar el servicio de pagos, los microservicios permiten escalar solo esa parte. Además, cuando diferentes equipos trabajan en diferentes dominios, los microservicios evitan conflictos de despliegue.',
    conceptosClave: ['Arquitectura Monolítica', 'Microservicios', 'Escalabilidad'],
  },
  {
    tipo: 'Caso de Uso',
    emoji: '🌐',
    color: '#C8860A',
    border: '#8B6914',
    bg: '#FFFBF0',
    pregunta: '¿Cómo diseñarías una API REST para una app de redes sociales?',
    respuesta: 'Seguirías el patrón REST: GET /posts (listar), POST /posts (crear), GET /posts/:id (detalles), PUT /posts/:id (editar), DELETE /posts/:id (eliminar). Usarías códigos HTTP semánticos: 200 para éxito, 201 para creación, 400 para errores de validación, 404 si no existe el recurso. Cada endpoint seria asincrónico con async/await para no bloquear. Usarías Postman para documentar y probar cada endpoint.',
    conceptosClave: ['REST', 'HTTP Verbos', 'Códigos de Estado', 'Asincronía', 'Postman'],
  },
  {
    tipo: 'Caso de Uso',
    emoji: '⚡',
    color: '#5B3A8B',
    border: '#3B0764',
    bg: '#FAF5FF',
    pregunta: '¿Por qué elegirías Serverless para un bot de Telegram que solo se ejecuta ocasionalmente?',
    respuesta: 'Serverless (como AWS Lambda o Google Cloud Functions) es ideal porque pagas solo por ejecución. Si tu bot se ejecuta 100 veces al día por 2 segundos, pagas solo por esos 200 segundos totales. Con un servidor tradicional pagarías por 24/7, incluso si está inactivo. Además, el proveedor escala automáticamente si hay picos de uso. La desventaja es latencia en la primera ejecución (cold start), pero para bots no es crítico.',
    conceptosClave: ['Serverless', 'Escalabilidad', 'Arquitectura Cliente Servidor'],
  },
];

export default function PreguntasEjemploSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#F8F6F0' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-[#C8860A] border-4 border-[#8B6914] px-5 py-2 mb-4 shadow-[4px_4px_0px_#8B6914]">
            <span className="text-white font-black text-xs tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              EXAMPLE QUESTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1b3d70] mb-4">
            Preguntas de Ejemplo
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Casos de uso reales que combinan múltiples conceptos. Estudia estos patrones para el examen.
          </p>
        </div>

        {/* Questions list */}
        <div className="space-y-4 md:space-y-5">
          {preguntas.map((q, i) => (
            <div
              key={i}
              className="border-4 overflow-hidden transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 cursor-pointer"
              style={{ borderColor: q.border, background: q.bg }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              {/* Header */}
              <div className="px-5 py-4 flex items-center justify-between" style={{ background: q.color }}>
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-3xl md:text-4xl">{q.emoji}</div>
                  <div className="flex-1">
                    <div className="text-white/70 text-xs font-bold tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                      {q.tipo.toUpperCase()}
                    </div>
                    <h3 className="text-white font-black text-lg md:text-xl">{q.pregunta}</h3>
                  </div>
                </div>
                <div className="flex-shrink-0 text-white ml-4">
                  <i className={`ri-arrow-${expandedIndex === i ? 'up' : 'down'}-s-line text-2xl`}></i>
                </div>
              </div>

              {/* Content */}
              {expandedIndex === i && (
                <div className="p-5 md:p-6 space-y-4 animate-fadeIn">
                  {/* Answer */}
                  <div>
                    <div className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color: q.color }}>
                      📝 Respuesta:
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{q.respuesta}</p>
                  </div>

                  {/* Conceptos clave */}
                  <div>
                    <div className="text-xs font-black mb-2 uppercase tracking-wide" style={{ color: q.color }}>
                      🎯 Conceptos Clave:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {q.conceptosClave.map((concepto, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-bold text-white rounded-none border-2"
                          style={{ background: q.color, borderColor: q.border }}
                        >
                          {concepto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Study tip */}
        <div className="mt-12 p-5 md:p-6 border-4 bg-white" style={{ borderColor: '#FFD700' }}>
          <div className="flex items-start gap-3">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <h4 className="font-black text-[#1b3d70] mb-2 text-base md:text-lg">Consejo de Estudio</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Las preguntas de casos de uso combinan múltiples conceptos. Cuando estudies, no aprendas conceptos aislados. Pregúntate: ¿Cuándo usaría esto? ¿Cómo se relaciona con otros conceptos? Practica relacionando ideas.
              </p>
            </div>
          </div>
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
