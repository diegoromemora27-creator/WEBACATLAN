
export default function RelationsSection() {
  const relations = [
    {
      type: 'One-to-One',
      icon: 'ri-arrow-left-right-line',
      description: 'Un registro se relaciona con exactamente un registro de otra tabla',
      example: 'User ↔ Profile',
      color: '#00d4ff',
      decorator: '@OneToOne()'
    },
    {
      type: 'One-to-Many',
      icon: 'ri-git-branch-line',
      description: 'Un registro se relaciona con múltiples registros de otra tabla',
      example: 'User → Posts',
      color: '#a78bfa',
      decorator: '@OneToMany()'
    },
    {
      type: 'Many-to-One',
      icon: 'ri-git-merge-line',
      description: 'Múltiples registros se relacionan con un registro de otra tabla',
      example: 'Posts → User',
      color: '#fbbf24',
      decorator: '@ManyToOne()'
    },
    {
      type: 'Many-to-Many',
      icon: 'ri-share-line',
      description: 'Múltiples registros se relacionan con múltiples registros',
      example: 'Students ↔ Courses',
      color: '#f59e0b',
      decorator: '@ManyToMany()'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#a78bfa]/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 border border-[#a78bfa]/20">
            <i className="ri-links-line text-[#a78bfa] text-sm sm:text-base"></i>
            <span className="text-[#a78bfa] text-xs sm:text-sm font-medium">Relations</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Relaciones entre Entidades
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
            TypeORM facilita la definición de relaciones entre tablas usando decoradores especiales
          </p>
        </div>

        {/* Relations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {relations.map((relation, index) => (
            <div
              key={index}
              className="bg-[#1a1f2e]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${relation.color}15` }}
                >
                  <i className={`${relation.icon} text-xl sm:text-2xl`} style={{ color: relation.color }}></i>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{relation.type}</h3>
                  <code className="text-xs sm:text-sm font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded" style={{ backgroundColor: `${relation.color}15`, color: relation.color }}>
                    {relation.decorator}
                  </code>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">{relation.description}</p>
              
              <div className="bg-[#0d1117] rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-700/30">
                <p className="text-xs sm:text-sm font-mono" style={{ color: relation.color }}>
                  {relation.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* One-to-Many Example */}
        <div className="bg-gradient-to-br from-[#0f1419]/80 to-[#1a1f2e]/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-[#a78bfa]/20 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#a78bfa]/10 rounded-lg">
              <i className="ri-code-box-line text-[#a78bfa] text-base sm:text-xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Ejemplo: One-to-Many / Many-to-One</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#00d4ff]/10 rounded text-[#00d4ff] text-xs sm:text-sm">1</span>
                User Entity
              </h4>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                  <code>{`@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#a78bfa]/10 rounded text-[#a78bfa] text-xs sm:text-sm">2</span>
                Post Entity
              </h4>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                  <code>{`@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-[#a78bfa]/5 rounded-lg p-3 sm:p-4 border border-[#a78bfa]/20">
            <div className="flex items-start gap-2 sm:gap-3">
              <i className="ri-information-line text-[#a78bfa] text-base sm:text-xl mt-0.5 flex-shrink-0"></i>
              <p className="text-xs sm:text-sm text-gray-300">
                Un <strong className="text-white">User</strong> puede tener muchos <strong className="text-white">Posts</strong>, pero cada <strong className="text-white">Post</strong> pertenece a un solo <strong className="text-white">User</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Loading Relations */}
        <div className="bg-[#0f1419]/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/5">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#fbbf24]/10 rounded-lg">
              <i className="ri-download-cloud-line text-[#fbbf24] text-base sm:text-xl"></i>
            </div>
            Cargando Relaciones
          </h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Con relations</h4>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                  <code>{`const user = await userRepository.findOne({
  where: { id: 1 },
  relations: ["posts"]
});
// user.posts está disponible`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Con Query Builder</h4>
              <div className="bg-[#0d1117] rounded-lg p-3 sm:p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-pre">
                  <code>{`const user = await userRepository
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.posts", "posts")
  .where("user.id = :id", { id: 1 })
  .getOne();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
