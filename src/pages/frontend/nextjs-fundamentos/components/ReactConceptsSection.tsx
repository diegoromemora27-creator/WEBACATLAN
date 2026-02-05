export default function ReactConceptsSection() {
  const concepts = [
    {
      title: 'Componentes',
      icon: 'ri-puzzle-line',
      description: 'Son las piezas de construcción de la interfaz. Piensa en ellos como funciones de JavaScript que devuelven HTML (vía JSX).',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'Props',
      icon: 'ri-arrow-right-line',
      description: 'Es la forma en que pasamos información de un componente padre a un componente hijo. Son inmutables (el hijo no puede modificarlas).',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'State',
      icon: 'ri-database-2-line',
      description: 'Es la "memoria" de un componente. Permite que React sepa cuándo algo ha cambiado para que pueda volver a renderizar la interfaz.',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Hooks',
      icon: 'ri-git-branch-line',
      description: 'Funciones especiales como useState (para el estado) o useEffect (para efectos secundarios como llamadas a APIs).',
      color: 'from-pink-500/20 to-cyan-500/20',
      borderColor: 'border-pink-500/30'
    },
    {
      title: 'Virtual DOM',
      icon: 'ri-speed-line',
      description: 'React crea una copia ligera del DOM real. Cuando algo cambia, React compara ambos y solo actualiza la parte exacta que cambió.',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    }
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#333] rounded-full mb-4">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">Fundamentos</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Los Cimientos: Conceptos Clave de React
        </h2>
        
        <p className="text-lg text-gray-400 max-w-3xl">
          Para entender Next.js, primero debemos dominar qué ocurre "bajo el capó" con React:
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${concept.color} backdrop-blur-sm border border-[#333] rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] ${
              index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-[#333] rounded-xl mb-4 group-hover:bg-white/10 transition-all duration-300">
              <i className={`${concept.icon} text-2xl text-white`}></i>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3">{concept.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {concept.description}
            </p>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
