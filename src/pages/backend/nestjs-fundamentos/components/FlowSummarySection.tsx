export default function FlowSummarySection() {
  const flowSteps = [
    {
      number: '1',
      title: 'Cliente hace petición HTTP',
      description: 'El usuario envía una petición desde el navegador o aplicación',
      icon: 'ri-user-line',
      color: 'text-[#3b82f6]',
      bgColor: 'bg-[#3b82f6]/10',
      borderColor: 'border-[#3b82f6]/30'
    },
    {
      number: '2',
      title: 'Controller recibe y extrae datos',
      description: 'El controlador captura la petición y valida los datos mediante DTOs',
      icon: 'ri-route-line',
      color: 'text-[#10b981]',
      bgColor: 'bg-[#10b981]/10',
      borderColor: 'border-[#10b981]/30'
    },
    {
      number: '3',
      title: 'Controller llama al Service',
      description: 'Delega la lógica de negocio al servicio inyectado',
      icon: 'ri-arrow-right-line',
      color: 'text-[#f59e0b]',
      bgColor: 'bg-[#f59e0b]/10',
      borderColor: 'border-[#f59e0b]/30'
    },
    {
      number: '4',
      title: 'Service procesa la lógica',
      description: 'Ejecuta operaciones de base de datos, cálculos o llamadas a APIs',
      icon: 'ri-service-line',
      color: 'text-[#E0234E]',
      bgColor: 'bg-[#E0234E]/10',
      borderColor: 'border-[#E0234E]/30'
    },
    {
      number: '5',
      title: 'Service retorna los datos',
      description: 'Devuelve el resultado procesado al controlador',
      icon: 'ri-arrow-left-line',
      color: 'text-[#8b5cf6]',
      bgColor: 'bg-[#8b5cf6]/10',
      borderColor: 'border-[#8b5cf6]/30'
    },
    {
      number: '6',
      title: 'Controller envía respuesta',
      description: 'El controlador devuelve la respuesta HTTP al cliente',
      icon: 'ri-send-plane-line',
      color: 'text-[#ec4899]',
      bgColor: 'bg-[#ec4899]/10',
      borderColor: 'border-[#ec4899]/30'
    }
  ];

  const moduleConnection = `@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}`;

  return (
    <section className="py-16 bg-gradient-to-b from-[#1a1f35] to-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#10b981]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#10b981]/30">
            <i className="ri-flow-chart text-[#10b981] text-xl"></i>
            <span className="text-[#10b981] text-sm font-medium">Flujo Completo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-4">
            Resumen de Flujo
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            Así es como todos los conceptos trabajan juntos en una aplicación NestJS
          </p>
        </div>

        {/* Flow Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border ${step.borderColor} rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center ${step.bgColor} rounded-full flex-shrink-0`}>
                    <span className={`text-xl font-bold ${step.color}`}>{step.number}</span>
                  </div>
                  <div className={`w-12 h-12 flex items-center justify-center ${step.bgColor} rounded-lg flex-shrink-0`}>
                    <i className={`${step.icon} ${step.color} text-2xl`}></i>
                  </div>
                </div>
                <h4 className="text-[#F8FAFC] font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-[#94A3B8] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Module Connection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Todo ocurre dentro de un Module
          </h3>
          <p className="text-[#94A3B8] text-center mb-8 max-w-2xl mx-auto">
            El módulo mantiene todas las piezas conectadas y organizadas
          </p>
          
          <div className="bg-[#1a1f35] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
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
                <code>{moduleConnection}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Visual Summary */}
        <div className="bg-gradient-to-br from-[#E0234E]/10 to-[#E0234E]/5 backdrop-blur-sm border border-[#E0234E]/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center flex items-center justify-center gap-3">
            <i className="ri-lightbulb-flash-line text-[#E0234E]"></i>
            Concepto Clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-[#3b82f6]/10 rounded-full mx-auto mb-3">
                <i className="ri-route-line text-[#3b82f6] text-3xl"></i>
              </div>
              <h4 className="text-[#F8FAFC] font-bold mb-2">Controllers</h4>
              <p className="text-[#94A3B8] text-sm">Manejan las peticiones HTTP</p>
            </div>
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-[#E0234E]/10 rounded-full mx-auto mb-3">
                <i className="ri-service-line text-[#E0234E] text-3xl"></i>
              </div>
              <h4 className="text-[#F8FAFC] font-bold mb-2">Services</h4>
              <p className="text-[#94A3B8] text-sm">Contienen la lógica de negocio</p>
            </div>
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-[#10b981]/10 rounded-full mx-auto mb-3">
                <i className="ri-stack-line text-[#10b981] text-3xl"></i>
              </div>
              <h4 className="text-[#F8FAFC] font-bold mb-2">Modules</h4>
              <p className="text-[#94A3B8] text-sm">Organizan y conectan todo</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#94A3B8] text-lg">
              La <span className="text-[#E0234E] font-semibold">Inyección de Dependencias</span> es el pegamento que une todas estas piezas de forma automática y eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
