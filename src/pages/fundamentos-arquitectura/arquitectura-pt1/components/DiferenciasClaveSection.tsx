
export default function DiferenciasClaveSection() {
  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-[#10B981]/10 rounded-full">
            <i className="ri-contrast-2-line text-[#10B981] text-base md:text-lg"></i>
            <span className="text-[#1A2332] text-xs md:text-sm font-semibold">Diferencias Clave</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A2332]">
            Arquitectura vs Diseño vs Programación
          </h2>
          <p className="text-base md:text-lg text-[#64748B] max-w-3xl mx-auto">
            Cada nivel opera con un enfoque y alcance diferente en el desarrollo de software
          </p>
        </div>

        {/* Tabla comparativa - Desktop */}
        <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E2E8F0]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#1A2332] to-[#2C3E50]">
                  <th className="px-4 lg:px-8 py-4 lg:py-6 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wider">
                    Nivel
                  </th>
                  <th className="px-4 lg:px-8 py-4 lg:py-6 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wider">
                    Enfoque Principal
                  </th>
                  <th className="px-4 lg:px-8 py-4 lg:py-6 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wider">
                    Ejemplo Actual
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {/* Arquitectura */}
                <tr className="hover:bg-[#F8FAFC] transition-colors duration-200">
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg">
                        <i className="ri-building-2-line text-[#3B82F6] text-lg lg:text-xl"></i>
                      </div>
                      <span className="text-base lg:text-lg font-bold text-[#1A2332]">Arquitectura</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                      Decisiones estructurales y cualidades de alto nivel del sistema
                    </p>
                  </td>
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                      Elegir <strong className="text-[#3B82F6]">microservicios</strong> para escalabilidad en apps como Amazon
                    </p>
                  </td>
                </tr>

                {/* Diseño */}
                <tr className="hover:bg-[#F8FAFC] transition-colors duration-200">
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#10B981]/10 rounded-lg">
                        <i className="ri-pencil-ruler-2-line text-[#10B981] text-lg lg:text-xl"></i>
                      </div>
                      <span className="text-base lg:text-lg font-bold text-[#1A2332]">Diseño</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                      Detalles de módulos, algoritmos y estructuras de datos
                    </p>
                  </td>
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                      Definir <strong className="text-[#10B981]">algoritmos de búsqueda</strong> en un módulo UI
                    </p>
                  </td>
                </tr>

                {/* Programación */}
                <tr className="hover:bg-[#F8FAFC] transition-colors duration-200">
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg">
                        <i className="ri-code-s-slash-line text-[#3B82F6] text-lg lg:text-xl"></i>
                      </div>
                      <span className="text-base lg:text-lg font-bold text-[#1A2332]">Programación</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                      Implementación concreta del código
                    </p>
                  </td>
                  <td className="px-4 lg:px-8 py-4 lg:py-6">
                    <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                      Escribir <strong className="text-[#3B82F6]">funciones en Python</strong> para un endpoint REST
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tarjetas comparativas - Mobile */}
        <div className="md:hidden space-y-4">
          {/* Arquitectura */}
          <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg">
                <i className="ri-building-2-line text-[#3B82F6] text-xl"></i>
              </div>
              <span className="text-lg font-bold text-[#1A2332]">Arquitectura</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B] uppercase mb-1">Enfoque</div>
                <p className="text-sm text-[#475569]">Decisiones estructurales y cualidades de alto nivel del sistema</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B] uppercase mb-1">Ejemplo</div>
                <p className="text-sm text-[#475569]">Elegir <strong className="text-[#3B82F6]">microservicios</strong> para escalabilidad en apps como Amazon</p>
              </div>
            </div>
          </div>

          {/* Diseño */}
          <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#10B981]/10 rounded-lg">
                <i className="ri-pencil-ruler-2-line text-[#10B981] text-xl"></i>
              </div>
              <span className="text-lg font-bold text-[#1A2332]">Diseño</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B] uppercase mb-1">Enfoque</div>
                <p className="text-sm text-[#475569]">Detalles de módulos, algoritmos y estructuras de datos</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B] uppercase mb-1">Ejemplo</div>
                <p className="text-sm text-[#475569]">Definir <strong className="text-[#10B981]">algoritmos de búsqueda</strong> en un módulo UI</p>
              </div>
            </div>
          </div>

          {/* Programación */}
          <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#3B82F6]/10 rounded-lg">
                <i className="ri-code-s-slash-line text-[#3B82F6] text-xl"></i>
              </div>
              <span className="text-lg font-bold text-[#1A2332]">Programación</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-[#64748B] uppercase mb-1">Enfoque</div>
                <p className="text-sm text-[#475569]">Implementación concreta del código</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#64748B] uppercase mb-1">Ejemplo</div>
                <p className="text-sm text-[#475569]">Escribir <strong className="text-[#3B82F6]">funciones en Python</strong> para un endpoint REST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="mt-8 md:mt-16 bg-white rounded-xl md:rounded-2xl p-6 md:p-10 border border-[#E2E8F0] shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-lg flex-shrink-0">
              <i className="ri-information-line text-white text-xl md:text-2xl"></i>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h4 className="text-xl md:text-2xl font-bold text-[#1A2332]">Conclusión</h4>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                La <strong className="text-[#3B82F6]">arquitectura</strong> opera a nivel estratégico para cualidades globales del sistema, mientras el <strong className="text-[#10B981]">diseño</strong> detalla componentes específicos y la <strong className="text-[#3B82F6]">programación</strong> los codifica. Cada nivel es esencial y complementario para construir software robusto y escalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
