
export default function DatabaseConceptsSection() {
  const concepts = [
    {
      icon: 'ri-table-line',
      title: 'Tabla',
      description: 'Estructura de filas y columnas donde se guardan datos.',
      color: '#00d4ff',
      example: 'users, posts, products'
    },
    {
      icon: 'ri-key-2-line',
      title: 'Primary Key (PK)',
      description: 'El identificador único de un registro.',
      color: '#a78bfa',
      example: 'id: 1, 2, 3...'
    },
    {
      icon: 'ri-links-line',
      title: 'Foreign Key (FK)',
      description: 'Una columna que crea un vínculo entre dos tablas.',
      color: '#fbbf24',
      example: 'user_id en la tabla posts'
    },
    {
      icon: 'ri-code-box-line',
      title: 'Query Builder',
      description: 'Una forma intermedia de escribir SQL usando funciones, sin llegar a ser un ORM completo.',
      color: '#f59e0b',
      example: 'db.select().from("users")'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Conceptos Clave de Base de Datos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            Repaso de los fundamentos que necesitas conocer antes de trabajar con un ORM
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${concept.color}15` }}
                >
                  <i className={`${concept.icon} text-xl sm:text-2xl`} style={{ color: concept.color }}></i>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2">{concept.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 leading-relaxed">{concept.description}</p>
                  
                  <div className="bg-[#0d1117] rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 border border-gray-700/30 overflow-x-auto">
                    <code className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap" style={{ color: concept.color }}>
                      {concept.example}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Connection */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#00d4ff]/5 via-[#a78bfa]/5 to-[#fbbf24]/5 rounded-xl p-4 sm:p-6 md:p-8 border border-white/5">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#00d4ff]/10 rounded-xl mb-2 sm:mb-3 mx-auto">
                <i className="ri-table-line text-[#00d4ff] text-xl sm:text-2xl md:text-3xl"></i>
              </div>
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">Tabla: users</p>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#a78bfa]"></div>
              <i className="ri-arrow-right-line text-[#a78bfa] text-base sm:text-lg md:text-xl"></i>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#a78bfa]/10 rounded-xl mb-2 sm:mb-3 mx-auto">
                <i className="ri-key-2-line text-[#a78bfa] text-xl sm:text-2xl md:text-3xl"></i>
              </div>
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">PK: id</p>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-[#a78bfa] to-[#fbbf24]"></div>
              <i className="ri-arrow-right-line text-[#fbbf24] text-base sm:text-lg md:text-xl"></i>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#fbbf24]/10 rounded-xl mb-2 sm:mb-3 mx-auto">
                <i className="ri-links-line text-[#fbbf24] text-xl sm:text-2xl md:text-3xl"></i>
              </div>
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">FK: user_id</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
