export default function WhatIsNestSection() {
  const pillars = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'TypeScript',
      description: 'Ofrece tipado fuerte, lo que reduce errores en tiempo de ejecución',
      color: 'from-[#3178C6] to-[#235A97]'
    },
    {
      icon: 'ri-stack-line',
      title: 'POO y Funcional',
      description: 'Combina lo mejor de ambos mundos para estructurar el código',
      color: 'from-[#E0234E] to-[#B01B3E]'
    }
  ];

  const benefits = [
    {
      icon: 'ri-rocket-line',
      title: 'Escalable',
      description: 'Arquitectura modular que crece con tu aplicación'
    },
    {
      icon: 'ri-test-tube-line',
      title: 'Testeable',
      description: 'Diseñado para facilitar pruebas unitarias e integración'
    },
    {
      icon: 'ri-tools-line',
      title: 'Mantenible',
      description: 'Código organizado y fácil de mantener a largo plazo'
    }
  ];

  return (
    <section className="py-16 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-4">
            ¿Qué es NestJS?
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
            NestJS es un framework para construir aplicaciones de lado del servidor (backend) con Node.js. Su gran valor es que proporciona una <span className="text-[#E0234E] font-semibold">arquitectura de desarrollo lista para usar</span>, permitiendo a los desarrolladores crear sistemas altamente escalables, testeables y fáciles de mantener.
          </p>
        </div>

        {/* Pillars */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Construido sobre dos pilares fundamentales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#E0234E]/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${pillar.color} rounded-xl mb-4`}>
                  <i className={`${pillar.icon} text-white text-3xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-3">{pillar.title}</h4>
                <p className="text-[#94A3B8]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6 text-center">
            Beneficios clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#E0234E]/10 rounded-full mx-auto mb-4">
                  <i className={`${benefit.icon} text-[#E0234E] text-2xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-[#F8FAFC] mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#94A3B8]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
