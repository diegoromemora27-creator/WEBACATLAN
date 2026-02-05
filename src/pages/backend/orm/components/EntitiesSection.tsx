
export default function EntitiesSection() {
  const decorators = [
    {
      name: '@Entity()',
      description: 'Marca una clase como entidad (tabla)',
      color: '#00d4ff'
    },
    {
      name: '@PrimaryGeneratedColumn()',
      description: 'Define una columna ID autogenerada',
      color: '#a78bfa'
    },
    {
      name: '@Column()',
      description: 'Define una columna normal',
      color: '#fbbf24'
    },
    {
      name: '@CreateDateColumn()',
      description: 'Columna con fecha de creación automática',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#1a1f2e] to-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#00d4ff]/20">
            <i className="ri-file-code-line text-[#00d4ff] text-sm sm:text-base"></i>
            <span className="text-[#00d4ff] text-xs sm:text-sm font-medium">Entities</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Entidades y Decoradores
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            En TypeORM, una <strong className="text-white">Entity</strong> es una clase que se mapea a una tabla de base de datos. Usamos decoradores para definir cómo se estructura esa tabla.
          </p>
        </div>

        {/* Decorators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {decorators.map((decorator, index) => (
            <div
              key={index}
              className="bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group text-center"
            >
              <div
                className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: `${decorator.color}15` }}
              >
                <code className="text-xs sm:text-sm font-mono font-semibold" style={{ color: decorator.color }}>
                  {decorator.name}
                </code>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{decorator.description}</p>
            </div>
          ))}
        </div>

        {/* Entity Example */}
        <div className="bg-gradient-to-br from-[#0f1419]/80 to-[#1a1f2e]/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-[#00d4ff]/20">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#00d4ff]/10 rounded-lg">
              <i className="ri-code-box-line text-[#00d4ff] text-base sm:text-xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Ejemplo de Entity</h3>
          </div>

          <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 md:p-6 border border-gray-700/50 overflow-x-auto">
            <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
              <code>{`import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}`}</code>
            </pre>
          </div>

          <div className="mt-4 sm:mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-2 sm:gap-3 bg-[#00d4ff]/5 rounded-lg p-3 sm:p-4 border border-[#00d4ff]/20">
              <i className="ri-information-line text-[#00d4ff] text-base sm:text-xl mt-0.5 flex-shrink-0"></i>
              <div>
                <p className="text-xs sm:text-sm text-white font-semibold mb-1">Clase = Tabla</p>
                <p className="text-xs sm:text-sm text-gray-300">
                  La clase <code className="text-[#00d4ff]">User</code> se convierte en una tabla <code className="text-[#00d4ff]">user</code> en la base de datos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3 bg-[#a78bfa]/5 rounded-lg p-3 sm:p-4 border border-[#a78bfa]/20">
              <i className="ri-information-line text-[#a78bfa] text-base sm:text-xl mt-0.5 flex-shrink-0"></i>
              <div>
                <p className="text-xs sm:text-sm text-white font-semibold mb-1">Propiedades = Columnas</p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Cada propiedad decorada con <code className="text-[#a78bfa]">@Column()</code> se convierte en una columna.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Repository Usage */}
        <div className="mt-6 sm:mt-8 bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/5">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#fbbf24]/10 rounded-lg">
              <i className="ri-database-line text-[#fbbf24] text-base sm:text-xl"></i>
            </div>
            Usando el Repository
          </h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Crear un usuario</h4>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                  <code>{`const user = userRepository.create({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com"
});
await userRepository.save(user);`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Buscar usuarios</h4>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                  <code>{`const users = await userRepository.find({
  where: { isActive: true },
  order: { createdAt: "DESC" }
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
