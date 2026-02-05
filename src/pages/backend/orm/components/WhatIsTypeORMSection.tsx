
export default function WhatIsTypeORMSection() {
  const features = [
    {
      icon: 'ri-typescript-line',
      title: 'TypeScript First',
      description: 'Aprovecha decoradores y tipos para una experiencia de desarrollo robusta',
      color: '#00d4ff'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Multi-Database',
      description: 'Soporta MySQL, PostgreSQL, MariaDB, SQLite, MongoDB y más',
      color: '#a78bfa'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Autocompletado',
      description: 'IntelliSense completo en tu IDE favorito',
      color: '#fbbf24'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Multi-Plataforma',
      description: 'Node.js, navegador, React Native y más',
      color: '#f59e0b'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#00d4ff]/20">
            <i className="ri-database-2-line text-[#00d4ff] text-sm sm:text-base"></i>
            <span className="text-[#00d4ff] text-xs sm:text-sm font-medium">TypeORM</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            ¿Qué es TypeORM?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            TypeORM es uno de los ORM más populares para el ecosistema de Node.js, escrito en TypeScript. Su gran ventaja es que aprovecha las características avanzadas de TypeScript (como decoradores) para ofrecer una experiencia de desarrollo muy robusta y con autocompletado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group text-center"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <i className={`${feature.icon} text-2xl sm:text-3xl`} style={{ color: feature.color }}></i>
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="bg-gradient-to-br from-[#0f1419]/80 to-[#1a1f2e]/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-[#00d4ff]/20">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#00d4ff]/10 rounded-lg">
              <i className="ri-code-box-line text-[#00d4ff] text-base sm:text-xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Ejemplo de Configuración</h3>
          </div>

          <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 md:p-6 border border-gray-700/50 overflow-x-auto">
            <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
              <code>{`import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});`}</code>
            </pre>
          </div>

          <div className="mt-4 sm:mt-6 flex items-start gap-2 sm:gap-3 bg-[#00d4ff]/5 rounded-lg p-3 sm:p-4 border border-[#00d4ff]/20">
            <i className="ri-information-line text-[#00d4ff] text-base sm:text-xl mt-0.5 flex-shrink-0"></i>
            <p className="text-xs sm:text-sm text-gray-300">
              <strong className="text-white">DataSource</strong> es el punto de entrada principal para configurar la conexión a tu base de datos y registrar todas las entidades que usarás.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
