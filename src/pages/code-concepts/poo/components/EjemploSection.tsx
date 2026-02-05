export default function EjemploSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-3 sm:mb-4">
            Un ejemplo rápido de Herencia y Encapsulamiento
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#666666] max-w-3xl mx-auto">
            Aplicando los conceptos en código real con TypeORM
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* BaseEntity */}
          <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-6 border-2 border-[#28A745]/30 hover:border-[#28A745] transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#28A745]/20 flex items-center justify-center">
                <i className="ri-git-branch-line text-[#28A745] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#333333]">
                  BaseEntity.ts
                </h3>
                <p className="text-[10px] sm:text-xs text-[#666666]">(Herencia)</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[9px] sm:text-[10px] md:text-xs text-white whitespace-pre">
{`// BaseEntity.ts (Herencia)
export abstract class Base {
  @PrimaryGeneratedColumn()
  private id: number; 
  // Encapsulamiento: nadie fuera 
  // puede cambiar el ID directamente
}`}
              </pre>
            </div>

            <div className="mt-4 flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-information-line text-[#28A745] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#666666]">
                La clase <span className="font-semibold text-[#28A745]">Base</span> es abstracta y 
                define propiedades comunes que heredarán otras entidades.
              </p>
            </div>
          </div>

          {/* User Entity */}
          <div className="bg-[#F8F8F8] rounded-xl p-4 sm:p-6 border-2 border-[#007BFF]/30 hover:border-[#007BFF] transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#007BFF]/20 flex items-center justify-center">
                <i className="ri-user-line text-[#007BFF] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#333333]">
                  User.entity.ts
                </h3>
                <p className="text-[10px] sm:text-xs text-[#666666]">(Hereda de Base)</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[9px] sm:text-[10px] md:text-xs text-white whitespace-pre">
{`// User.entity.ts
@Entity()
export class User extends Base {
  @Column()
  username: string;
}`}
              </pre>
            </div>

            <div className="mt-4 flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-arrow-right-line text-[#007BFF] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#666666]">
                La entidad <span className="font-semibold text-[#007BFF]">User</span> hereda 
                automáticamente el campo <code className="bg-[#F8F8F8] px-1.5 py-0.5 rounded text-[#28A745] font-mono text-[9px] sm:text-[10px]">id</code> de 
                la clase Base.
              </p>
            </div>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-[#28A745]/10 to-[#28A745]/5 rounded-xl p-4 sm:p-6 border border-[#28A745]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#28A745]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-recycle-line text-[#28A745] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#333333] mb-2">
              Reutilización de Código
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#666666]">
              No repites los campos comunes en cada entidad
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-xl p-4 sm:p-6 border border-[#007BFF]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#007BFF]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-shield-check-line text-[#007BFF] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#333333] mb-2">
              Protección de Datos
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#666666]">
              El modificador <code className="bg-white px-1.5 py-0.5 rounded text-[#007BFF] font-mono text-[10px]">private</code> protege el ID
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#00BCD4]/10 to-[#00BCD4]/5 rounded-xl p-4 sm:p-6 border border-[#00BCD4]/20 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#00BCD4]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-tools-line text-[#00BCD4] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#333333] mb-2">
              Mantenimiento Fácil
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#666666]">
              Cambios en Base se reflejan en todas las entidades hijas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
