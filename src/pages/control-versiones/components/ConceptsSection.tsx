export default function ConceptsSection() {
  const concepts = [
    {
      icon: 'ri-folder-3-line',
      title: 'Repository (Repositorio)',
      description: 'El proyecto en sí. Contiene carpetas, archivos y el historial de Git.',
      color: '#58a6ff'
    },
    {
      icon: 'ri-file-text-line',
      title: 'README.md',
      description: 'El archivo más importante. Es la cara de tu proyecto, escrito en Markdown, donde explicas qué hace el código y cómo instalarlo.',
      color: '#3fb950'
    },
    {
      icon: 'ri-git-pull-request-line',
      title: 'Pull Requests (PR)',
      description: 'Es el corazón de la colaboración. Es una solicitud para que el dueño del proyecto revise tus cambios y los "fusione" (merge) con el código principal.',
      color: '#a371f7'
    },
    {
      icon: 'ri-error-warning-line',
      title: 'Issues',
      description: 'Un tablero de tareas o reporte de errores. Aquí se discuten mejoras o fallos encontrados.',
      color: '#f85149'
    },
    {
      icon: 'ri-git-fork-line',
      title: 'Forks',
      description: 'Una copia exacta del repositorio de otra persona en tu propia cuenta para que puedas experimentar sin alterar el original.',
      color: '#ffa657'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Conceptos Generales
          </h2>
          <p className="text-[#8b949e] text-base sm:text-lg max-w-3xl mx-auto">
            Los elementos fundamentales que debes conocer para trabajar con Git y GitHub
          </p>
          <div className="w-24 h-1 bg-[#58a6ff] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-[#161b22] rounded-xl p-6 border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${concept.color}20` }}
              >
                <i className={`${concept.icon} text-3xl`} style={{ color: concept.color }}></i>
              </div>
              <h3 className="font-bold text-lg text-white mb-3">
                {concept.title}
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
