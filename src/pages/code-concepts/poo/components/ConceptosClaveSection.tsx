export default function ConceptosClaveSection() {
  const conceptos = [
    {
      concepto: 'Clase',
      aplicacion: 'Tus @Injectable() (servicios) y @Entity() (modelos de datos).',
      icon: 'ri-file-code-line',
    },
    {
      concepto: 'Instancia',
      aplicacion: 'NestJS crea instancias únicas (Singletons) de tus servicios por ti.',
      icon: 'ri-instance-line',
    },
    {
      concepto: 'Decoradores',
      aplicacion: '(Meta-programación) @Controller(), @Get(), @Column(). No son POO puro, pero son esenciales en TS para añadir metadatos a las clases.',
      icon: 'ri-at-line',
    },
    {
      concepto: 'Interfaces',
      aplicacion: 'Definen "contratos" para tus datos (DTOs) para asegurar que los objetos tengan la forma correcta.',
      icon: 'ri-file-list-3-line',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-3 sm:mb-4">
            Conceptos clave de POO en el mundo NestJS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#666666] max-w-3xl mx-auto">
            Cómo se aplican los conceptos de POO en tu día a día con NestJS
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#007BFF] to-[#00BCD4]">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-bold text-white">
                    Concepto
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm md:text-base font-bold text-white">
                    Aplicación Real
                  </th>
                </tr>
              </thead>
              <tbody>
                {conceptos.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-[#F8F8F8]' : 'bg-white'
                    } hover:bg-[#007BFF]/5 transition-colors duration-200`}
                  >
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#007BFF]/10 flex items-center justify-center flex-shrink-0">
                          <i className={`${item.icon} text-[#007BFF] text-base sm:text-lg`}></i>
                        </div>
                        <span className="font-semibold text-[#333333] text-xs sm:text-sm md:text-base">
                          {item.concepto}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <p className="text-[#666666] text-[11px] sm:text-xs md:text-sm leading-relaxed">
                        {item.aplicacion}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 rounded-xl p-4 sm:p-6 border-l-4 border-[#28A745]">
          <div className="flex items-start gap-3">
            <i className="ri-lightbulb-line text-[#28A745] text-xl sm:text-2xl flex-shrink-0 mt-1"></i>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#333333] mb-2">
                Nota importante
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed">
                En NestJS, la POO se mezcla con la <span className="font-semibold text-[#007BFF]">Inyección de Dependencias</span>. 
                No sueles crear objetos con <code className="bg-white px-2 py-0.5 rounded text-[#28A745] font-mono text-[10px] sm:text-xs">new MyService()</code>, 
                sino que dejas que el framework "inyecte" la instancia en el constructor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
