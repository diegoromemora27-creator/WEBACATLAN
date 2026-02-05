export default function ProvidersSection() {
  const serviceExample = `import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository&lt;User&gt;,
  ) {}

  async findAll(): Promise&lt;User[]&gt; {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise&lt;User&gt; {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async create(userData: CreateUserDto): Promise&lt;User&gt; {
    const user = this.usersRepository.create(userData);
    return await this.usersRepository.save(user);
  }

  async calculateUserStats(userId: string) {
    // Lógica compleja de cálculos
    const user = await this.findOne(userId);
    // ... más operaciones
    return stats;
  }
}`;

  const responsibilities = [
    {
      icon: 'ri-database-2-line',
      title: 'Consultar bases de datos',
      description: 'Realizar operaciones CRUD y queries complejas',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10'
    },
    {
      icon: 'ri-calculator-line',
      title: 'Realizar cálculos complejos',
      description: 'Procesar datos y ejecutar lógica de negocio',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Conectar con APIs externas',
      description: 'Integrar servicios de terceros y microservicios',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10'
    }
  ];

  const providerTypes = [
    {
      name: 'Services',
      description: 'El tipo más común. Contienen la lógica de negocio',
      icon: 'ri-service-line',
      color: 'text-[#E0234E]',
      example: 'UsersService, AuthService'
    },
    {
      name: 'Repositories',
      description: 'Manejan el acceso a datos y persistencia',
      icon: 'ri-database-2-line',
      color: 'text-[#10b981]',
      example: 'UserRepository, ProductRepository'
    },
    {
      name: 'Factories',
      description: 'Crean instancias de objetos complejos',
      icon: 'ri-factory-line',
      color: 'text-[#3b82f6]',
      example: 'ConnectionFactory, ConfigFactory'
    },
    {
      name: 'Helpers',
      description: 'Funciones auxiliares y utilidades',
      icon: 'ri-tools-line',
      color: 'text-[#f59e0b]',
      example: 'DateHelper, ValidationHelper'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#1a1f35] to-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#10b981]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#10b981]/30">
            <i className="ri-service-line text-[#10b981] text-xl"></i>
            <span className="text-[#10b981] text-sm font-medium">Providers &amp; Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-4">
            ¿Qué son los Providers y Services?
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Casi todo en Nest puede ser considerado un <span className="text-[#E0234E] font-semibold">Provider</span> (proveedor). La idea principal de un proveedor es que puede ser <span className="text-[#10b981] font-semibold">inyectado como una dependencia</span>.
          </p>
        </div>

        {/* Provider Types */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Tipos de Providers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#E0234E]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg mb-4">
                  <i className={`${type.icon} ${type.color} text-2xl`}></i>
                </div>
                <h4 className={`${type.color} font-bold text-lg mb-2`}>{type.name}</h4>
                <p className="text-[#94A3B8] text-sm mb-3">{type.description}</p>
                <div className="bg-[#0B1120] border border-white/10 rounded-lg p-2">
                  <code className="text-xs font-mono text-[#94A3B8]">{type.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#E0234E]/10 to-[#E0234E]/5 backdrop-blur-sm border border-[#E0234E]/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-[#E0234E] rounded-lg">
                <i className="ri-service-line text-white"></i>
              </span>
              Services (Servicios)
            </h3>
            <p className="text-[#94A3B8] mb-4">
              Los servicios son el tipo de Provider más común. <span className="text-[#E0234E] font-semibold">Aquí es donde vive la lógica de negocio</span>.
            </p>
            <div className="flex items-start gap-3 bg-[#0B1120]/50 border border-white/10 rounded-lg p-4">
              <i className="ri-information-line text-[#E0234E] text-xl flex-shrink-0 mt-1"></i>
              <p className="text-[#94A3B8] text-sm">
                Se definen con el decorador <code className="text-[#E0234E] font-mono">@Injectable()</code>, lo que le indica a Nest que esta clase puede ser gestionada por el contenedor de inversión de control (IoC).
              </p>
            </div>
          </div>

          {/* Code Example */}
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg">
              <i className="ri-code-s-slash-line text-white"></i>
            </span>
            Ejemplo de Servicio
          </h3>
          
          <div className="bg-[#1a1f35] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#0B1120] px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-[#94A3B8] text-sm ml-4 font-mono">users.service.ts</span>
            </div>
            <div className="p-6">
              <pre className="text-sm font-mono text-[#94A3B8] overflow-x-auto">
                <code>{serviceExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Responsabilidades de los Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {responsibilities.map((resp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-14 h-14 flex items-center justify-center ${resp.bgColor} rounded-xl mb-4`}>
                  <i className={`${resp.icon} ${resp.color} text-2xl`}></i>
                </div>
                <h4 className="text-[#F8FAFC] font-bold text-lg mb-2">{resp.title}</h4>
                <p className="text-[#94A3B8] text-sm">{resp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
