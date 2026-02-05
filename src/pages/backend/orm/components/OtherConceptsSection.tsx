
export default function OtherConceptsSection() {
  const concepts = [
    {
      icon: 'ri-database-line',
      title: 'Repository',
      description: 'Interfaz para realizar operaciones CRUD sobre una entidad',
      color: '#00d4ff',
      code: `const userRepo = dataSource.getRepository(User);
await userRepo.find();`
    },
    {
      icon: 'ri-search-line',
      title: 'Query Builder',
      description: 'Construye consultas SQL complejas de forma programática',
      color: '#a78bfa',
      code: `await userRepo
  .createQueryBuilder("user")
  .where("user.age > :age", { age: 18 })
  .getMany();`
    },
    {
      icon: 'ri-git-commit-line',
      title: 'Migrations',
      description: 'Control de versiones para cambios en el esquema de la base de datos',
      color: '#fbbf24',
      code: `typeorm migration:create ./src/migration/AddEmailToUser
typeorm migration:run`
    },
    {
      icon: 'ri-refresh-line',
      title: 'Subscribers',
      description: 'Escucha eventos del ciclo de vida de las entidades',
      color: '#f59e0b',
      code: `@EventSubscriber()
export class UserSubscriber {
  @BeforeInsert()
  beforeInsert(event: InsertEvent<User>) {
    console.log("Antes de insertar usuario");
  }
}`
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Otros Conceptos Importantes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            Herramientas adicionales que TypeORM ofrece para trabajar con bases de datos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${concept.color}15` }}
                >
                  <i className={`${concept.icon} text-lg sm:text-xl md:text-2xl`} style={{ color: concept.color }}></i>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-1.5 md:mb-2">{concept.title}</h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-relaxed">{concept.description}</p>
                </div>
              </div>
              
              <div className="bg-[#0d1117] rounded-lg p-2 sm:p-3 md:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-300 whitespace-pre">
                  <code>{concept.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-br from-[#00d4ff]/5 to-[#a78bfa]/5 rounded-xl p-4 sm:p-6 md:p-8 border border-white/5">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Buenas Prácticas</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: 'ri-shield-check-line', text: 'Usa migraciones en producción, no synchronize: true', color: '#00d4ff' },
              { icon: 'ri-file-list-line', text: 'Define índices en columnas que usas frecuentemente en WHERE', color: '#a78bfa' },
              { icon: 'ri-link', text: 'Carga relaciones solo cuando las necesites (lazy loading)', color: '#fbbf24' },
              { icon: 'ri-code-box-line', text: 'Usa Query Builder para consultas complejas', color: '#f59e0b' },
              { icon: 'ri-error-warning-line', text: 'Maneja errores de validación y constraints', color: '#ef4444' },
              { icon: 'ri-test-tube-line', text: 'Escribe tests para tus repositories y queries', color: '#10b981' }
            ].map((practice, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 bg-[#0f1419]/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/5"
              >
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${practice.color}15` }}
                >
                  <i className={`${practice.icon} text-base sm:text-xl`} style={{ color: practice.color }}></i>
                </div>
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{practice.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 sm:mt-8 bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-[#00d4ff]/20 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#00d4ff]/10 rounded-xl mx-auto mb-3 sm:mb-4">
            <i className="ri-lightbulb-line text-[#00d4ff] text-2xl sm:text-3xl"></i>
          </div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">Resumen</h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            TypeORM te permite trabajar con bases de datos usando clases y objetos TypeScript, eliminando la necesidad de escribir SQL manualmente. Con decoradores defines tus entidades, con repositories realizas operaciones CRUD, y con migraciones mantienes el control de cambios en tu esquema de base de datos.
          </p>
        </div>
      </div>
    </section>
  );
}
