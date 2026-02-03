export default function ControllersSection() {
  const controllerExample = `import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }
}`;

  const decorators = [
    {
      name: '@Controller()',
      description: 'Define la ruta base del controlador',
      example: "@Controller('cats')",
      color: 'text-[#E0234E]',
      icon: 'ri-route-line'
    },
    {
      name: '@Get()',
      description: 'Maneja peticiones GET',
      example: '@Get() o @Get(\':id\')',
      color: 'text-[#10b981]',
      icon: 'ri-download-line'
    },
    {
      name: '@Post()',
      description: 'Maneja peticiones POST',
      example: '@Post()',
      color: 'text-[#3b82f6]',
      icon: 'ri-upload-line'
    },
    {
      name: '@Put()',
      description: 'Maneja peticiones PUT',
      example: '@Put(\':id\')',
      color: 'text-[#f59e0b]',
      icon: 'ri-refresh-line'
    },
    {
      name: '@Delete()',
      description: 'Maneja peticiones DELETE',
      example: '@Delete(\':id\')',
      color: 'text-[#ef4444]',
      icon: 'ri-delete-bin-line'
    },
    {
      name: '@Param()',
      description: 'Extrae parámetros de la URL',
      example: '@Param(\'id\') id: string',
      color: 'text-[#8b5cf6]',
      icon: 'ri-link'
    },
    {
      name: '@Body()',
      description: 'Extrae el cuerpo de la petición',
      example: '@Body() dto: CreateDto',
      color: 'text-[#ec4899]',
      icon: 'ri-file-text-line'
    },
    {
      name: '@Query()',
      description: 'Extrae query parameters',
      example: '@Query(\'page\') page: number',
      color: 'text-[#14b8a6]',
      icon: 'ri-search-line'
    }
  ];

  const responsibilities = [
    {
      icon: 'ri-check-line',
      title: 'Recibir la petición',
      description: 'Capturar los datos entrantes del cliente',
      color: 'text-[#10b981]'
    },
    {
      icon: 'ri-check-line',
      title: 'Validar mediante Pipes',
      description: 'Asegurar que los datos cumplen con el formato esperado',
      color: 'text-[#3b82f6]'
    },
    {
      icon: 'ri-check-line',
      title: 'Delegar al Servicio',
      description: 'Pasar la lógica de negocio a la capa de servicios',
      color: 'text-[#E0234E]'
    },
    {
      icon: 'ri-close-line',
      title: 'NO contener lógica compleja',
      description: 'Evitar consultas directas a base de datos o cálculos complejos',
      color: 'text-[#ef4444]'
    }
  ];

  return (
    <section className="py-16 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3b82f6]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#3b82f6]/30">
            <i className="ri-route-line text-[#3b82f6] text-xl"></i>
            <span className="text-[#3b82f6] text-sm font-medium">Controladores</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-4">
            ¿Qué son los Controladores (Controllers)?
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Los controladores son los <span className="text-[#E0234E] font-semibold">responsables de manejar las peticiones entrantes</span> y devolver las respuestas al cliente. Son la interfaz de tu API.
          </p>
        </div>

        {/* Code Example */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-lg">
              <i className="ri-code-s-slash-line text-white"></i>
            </span>
            Ejemplo de Controlador
          </h3>
          
          <div className="bg-[#1a1f35] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#0B1120] px-4 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              </div>
              <span className="text-[#94A3B8] text-sm ml-4 font-mono">cats.controller.ts</span>
            </div>
            <div className="p-6">
              <pre className="text-sm font-mono text-[#94A3B8] overflow-x-auto">
                <code>{controllerExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Decorators Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Decoradores principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {decorators.map((decorator, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#E0234E]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg">
                    <i className={`${decorator.icon} ${decorator.color} text-lg`}></i>
                  </div>
                  <code className={`${decorator.color} font-mono font-bold text-sm`}>
                    {decorator.name}
                  </code>
                </div>
                <p className="text-[#94A3B8] text-xs mb-2">{decorator.description}</p>
                <div className="bg-[#0B1120] border border-white/10 rounded-lg p-2">
                  <code className="text-xs font-mono text-[#94A3B8]">
                    {decorator.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div>
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Responsabilidades del Controlador
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((resp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className={`w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mx-auto mb-4`}>
                  <i className={`${resp.icon} ${resp.color} text-2xl`}></i>
                </div>
                <h4 className="text-[#F8FAFC] font-bold mb-2">{resp.title}</h4>
                <p className="text-[#94A3B8] text-sm">{resp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
