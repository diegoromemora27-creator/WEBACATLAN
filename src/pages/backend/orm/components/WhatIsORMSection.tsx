
export default function WhatIsORMSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            ¿Qué es un ORM?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            Un <strong className="text-white">ORM (Object-Relational Mapping)</strong> es una técnica que permite interactuar con una base de datos relacional usando objetos de tu lenguaje de programación, en lugar de escribir SQL directamente.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Without ORM */}
          <div className="bg-[#1a1f2e]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-500/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500/10 rounded-lg">
                <i className="ri-close-line text-red-500 text-lg sm:text-xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Sin ORM</h3>
            </div>
            
            <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                <code>{`const result = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);
const user = result.rows[0];`}</code>
              </pre>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
              Escribes SQL manualmente, manejas resultados crudos y te arriesgas a errores de sintaxis.
            </p>
          </div>

          {/* With ORM */}
          <div className="bg-[#1a1f2e]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-green-500/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-green-500/10 rounded-lg">
                <i className="ri-check-line text-green-500 text-lg sm:text-xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Con ORM</h3>
            </div>
            
            <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                <code>{`const user = await userRepository
  .findOne({ 
    where: { id: userId } 
  });`}</code>
              </pre>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
              Usas métodos de objetos, el ORM genera el SQL por ti y obtienes objetos tipados.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-[#00d4ff]/5 to-[#a78bfa]/5 rounded-xl p-6 sm:p-8 border border-white/5">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Ventajas de usar un ORM</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: 'ri-code-line', text: 'Código más limpio y mantenible', color: '#00d4ff' },
              { icon: 'ri-shield-check-line', text: 'Protección contra SQL Injection', color: '#a78bfa' },
              { icon: 'ri-database-2-line', text: 'Cambio de BD sin reescribir código', color: '#fbbf24' },
              { icon: 'ri-speed-line', text: 'Desarrollo más rápido', color: '#f59e0b' },
              { icon: 'ri-bug-line', text: 'Menos errores de sintaxis SQL', color: '#ef4444' },
              { icon: 'ri-team-line', text: 'Mejor colaboración en equipo', color: '#10b981' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-[#0f1419]/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5"
              >
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <i className={`${benefit.icon} text-base sm:text-xl`} style={{ color: benefit.color }}></i>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
