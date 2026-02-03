export default function CeremoniesSection() {
  const ceremonies = [
    {
      name: 'The Sprint',
      description: 'Es el corazón de Scrum. Un periodo de 1 a 4 semanas donde se crea el producto.',
      duration: 'Variable (1-4 semanas)',
      icon: 'ri-heart-pulse-line',
      color: 'from-red-500 to-pink-500',
    },
    {
      name: 'Sprint Planning',
      description: 'El equipo decide qué tareas del Backlog se compromete a terminar en este Sprint.',
      duration: '2h por semana de Sprint',
      icon: 'ri-calendar-check-line',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Daily Scrum',
      description: 'Una reunión de 15 min de pie para sincronizarse: ¿Qué hice ayer? ¿Qué haré hoy? ¿Tengo bloqueos?',
      duration: '15 minutos',
      icon: 'ri-time-line',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Sprint Review',
      description: 'Se muestra el trabajo terminado a los interesados para recibir feedback.',
      duration: '1h por semana de Sprint',
      icon: 'ri-presentation-line',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Sprint Retrospective',
      description: 'El equipo mira hacia adentro: ¿Qué hicimos bien? ¿Qué podemos mejorar?',
      duration: '45 min por semana de Sprint',
      icon: 'ri-feedback-line',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#1b3d70] mb-4">
            Las Ceremonias (Eventos) de Scrum
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
            Eventos estructurados que garantizan la transparencia, inspección y adaptación
          </p>
          <div className="w-24 h-1 bg-[#7dd3c0] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {ceremonies.map((ceremony, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                {/* Icon Section */}
                <div className={`md:w-32 flex items-center justify-center p-6 bg-gradient-to-br ${ceremony.color}`}>
                  <i className={`${ceremony.icon} text-5xl text-white`}></i>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h3 className="font-bold text-xl text-[#1b3d70] mb-2 sm:mb-0">
                      {ceremony.name}
                    </h3>
                    <div className="inline-flex items-center space-x-2 bg-[#7dd3c0]/10 text-[#1b3d70] px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">
                      <i className="ri-timer-line"></i>
                      <span>{ceremony.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {ceremony.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-[#1b3d70] to-[#2a5490] rounded-2xl p-8 text-center">
          <i className="ri-information-line text-5xl text-[#7dd3c0] mb-4"></i>
          <p className="text-white text-base leading-relaxed">
            Estas ceremonias son el ritmo del corazón de Scrum. Cada una tiene un propósito específico y juntas crean un ciclo de mejora continua que mantiene al equipo sincronizado y enfocado en entregar valor.
          </p>
        </div>
      </div>
    </section>
  );
}
