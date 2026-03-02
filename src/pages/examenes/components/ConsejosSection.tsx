
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

        {/* Tabla de Puntuaciones */}
        <div className="mt-14 md:mt-20 mb-14">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-[#1b3d70] mb-2">Ejemplos de Puntuaciones</h3>
            <p className="text-gray-600 text-sm md:text-base">Conoce diferentes perfiles de estudiantes y sus resultados esperados</p>
          </div>

          <div className="overflow-x-auto border-4 border-[#1b3d70] shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
            <table className="w-full">
              <thead>
                <tr style={{ background: '#1b3d70' }}>
                  <th className="px-3 py-3 md:px-4 md:py-4 text-white font-black text-xs md:text-sm text-left">Perfil</th>
                  <th className="px-2 py-3 md:px-3 md:py-4 text-white font-black text-xs md:text-sm text-center">OM (×3)</th>
                  <th className="px-2 py-3 md:px-3 md:py-4 text-white font-black text-xs md:text-sm text-center">Abierta (×6)</th>
                  <th className="px-2 py-3 md:px-3 md:py-4 text-white font-black text-xs md:text-sm text-center">Código (×4)</th>
                  <th className="px-2 py-3 md:px-3 md:py-4 text-white font-black text-xs md:text-sm text-center">Caso (×10)</th>
                  <th className="px-3 py-3 md:px-4 md:py-4 text-white font-black text-xs md:text-sm text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#E8F5E9', borderBottom: '2px solid #ddd' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Sobresaliente</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">8/8 → 24</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">6/6 → 36</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">5/5 → 20</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">2/2 → 20</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#228B22' }}>100 ✅</td>
                </tr>
                <tr style={{ background: '#fff', borderBottom: '2px solid #ddd' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Sólido</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">8/8 → 24</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">5/6 → 30</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">5/5 → 20</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">2/2 → 20</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#228B22' }}>94 ✅</td>
                </tr>
                <tr style={{ background: '#F3E5F5', borderBottom: '2px solid #ddd' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Teórico fuerte</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">8/8 → 24</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">5/6 → 30</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">1/5 → 4</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">1/2 → 10</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#228B22' }}>68 ✅</td>
                </tr>
                <tr style={{ background: '#FFFDE7', borderBottom: '2px solid #ddd' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Pasa justo</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">6/8 → 18</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">4/6 → 24</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">2/5 → 8</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">1/2 → 10</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#228B22' }}>60 ✅</td>
                </tr>
                <tr style={{ background: '#FFEBEE', borderBottom: '2px solid #ddd' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Solo memoriza</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">8/8 → 24</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">2/6 → 12</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">1/5 → 4</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">0/2 → 0</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#E52521' }}>40 ❌</td>
                </tr>
                <tr style={{ background: '#FFEBEE' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Solo código</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">2/8 → 6</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">1/6 → 6</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">5/5 → 20</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">0/2 → 0</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#E52521' }}>32 ❌</td>
                </tr>
                <tr style={{ background: '#F5F5F5', borderTop: '3px solid #1b3d70' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Máximo posible</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center font-black text-gray-800">24</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center font-black text-gray-800">36</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center font-black text-gray-800">20</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center font-black text-gray-800">20</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right" style={{ color: '#1b3d70' }}>100</td>
                </tr>
                <tr style={{ background: '#F5F5F5' }}>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-gray-800">Peso relativo</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">24%</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">36%</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">20%</td>
                  <td className="px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm text-center text-gray-700">20%</td>
                  <td className="px-3 py-2 md:px-4 md:py-3 font-black text-xs md:text-sm text-right text-gray-700">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
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
