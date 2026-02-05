export default function ModulesSection() {
  const moduleExample = `import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [],
  exports: [UsersService]
})
export class UsersModule {}`;

  const properties = [
    {
      name: 'controllers',
      description: 'Los controladores definidos en este módulo',
      icon: 'ri-route-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10'
    },
    {
      name: 'providers',
      description: 'Los servicios que serán instanciados por el inyector de Nest',
      icon: 'ri-service-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10'
    },
    {
      name: 'imports',
      description: 'Otros módulos cuyas exportaciones son necesarias aquí',
      icon: 'ri-download-cloud-line',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10'
    },
    {
      name: 'exports',
      description: 'Qué proveedores de este módulo deben ser visibles en otros módulos',
      icon: 'ri-upload-cloud-line',
      color: 'text-[#E0234E]',
      bgColor: 'bg-[#E0234E]/10'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0B1120] to-[#1a1f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E0234E]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#E0234E]/30">
            <i className="ri-stack-line text-[#E0234E] text-xl"></i>
            <span className="text-[#E0234E] text-sm font-medium">Módulos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-4">
            ¿Qué son los Módulos (Modules)?
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Los módulos son el <span className="text-[#E0234E] font-semibold">corazón de la organización</span> en NestJS. Imagínalos como contenedores que agrupan un conjunto de funcionalidades estrechamente relacionadas.
          </p>
        </div>

        {/* Purpose */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-[#E0234E]/10 rounded-lg flex-shrink-0">
              <i className="ri-lightbulb-line text-[#E0234E] text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">Propósito</h3>
              <p className="text-[#94A3B8] mb-3">
                Organizar el código en límites claros. Cada aplicación tiene al menos un <span className="text-[#E0234E] font-mono">Root Module</span> (Módulo Raíz), pero se recomienda crear módulos por funcionalidad.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#E0234E]/10 border border-[#E0234E]/30 rounded-lg text-[#E0234E] text-sm font-mono">
                  UsersModule
                </span>
                <span className="px-3 py-1 bg-[#E0234E]/10 border border-[#E0234E]/30 rounded-lg text-[#E0234E] text-sm font-mono">
                  AuthModule
                </span>
                <span className="px-3 py-1 bg-[#E0234E]/10 border border-[#E0234E]/30 rounded-lg text-[#E0234E] text-sm font-mono">
                  ProductsModule
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#E0234E] to-[#B01B3E] rounded-lg">
              <i className="ri-code-s-slash-line text-white"></i>
            </span>
            Estructura de un Módulo
          </h3>
          
          <div className="bg-[#1a1f35] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#0B1120] px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-[#94A3B8] text-sm ml-4 font-mono">users.module.ts</span>
            </div>
            <div className="p-6">
              <pre className="text-sm font-mono text-[#94A3B8] overflow-x-auto">
                <code>{moduleExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Propiedades del decorador @Module()
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((prop, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#E0234E]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center ${prop.bgColor} rounded-lg flex-shrink-0`}>
                    <i className={`${prop.icon} ${prop.color} text-2xl`}></i>
                  </div>
                  <div>
                    <code className={`${prop.color} font-mono font-bold text-lg block mb-2`}>
                      {prop.name}
                    </code>
                    <p className="text-[#94A3B8] text-sm">{prop.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
