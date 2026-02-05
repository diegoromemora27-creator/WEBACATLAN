export default function DiferenciasJSSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3178C6]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-contrast-line text-[#3178C6] text-base sm:text-lg"></i>
            <span className="text-[#3178C6] text-xs sm:text-sm font-medium">Comparación</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#235A97] mb-3 sm:mb-4">
            Diferencias Clave con JavaScript
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto">
            Lo que hace a TypeScript diferente y más poderoso
          </p>
        </div>

        {/* Tabla de Diferencias */}
        <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 mb-8 sm:mb-12 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-[#3178C6]/20">
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-bold text-[#235A97]">
                  Aspecto
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-bold text-[#3178C6]">
                  TypeScript
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-bold text-[#333333]">
                  JavaScript
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#3178C6]/10">
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-semibold text-[#235A97]">
                  Tipado
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Estático (opcional)
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Dinámico en tiempo de ejecución
                </td>
              </tr>
              <tr className="border-b border-[#3178C6]/10">
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-semibold text-[#235A97]">
                  Compilación
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Necesita compilación a JS
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Se interpreta directamente
                </td>
              </tr>
              <tr className="border-b border-[#3178C6]/10">
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-semibold text-[#235A97]">
                  Estructuras de tipos
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Interfaces, enums, tuplas, genéricos
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  No los tiene como tales
                </td>
              </tr>
              <tr className="border-b border-[#3178C6]/10">
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-semibold text-[#235A97]">
                  Autocompletado
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Excelente gracias al sistema de tipos
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Limitado
                </td>
              </tr>
              <tr>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-semibold text-[#235A97]">
                  Migración
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  Puedes usar TS en proyectos JS (superset)
                </td>
                <td className="py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[#333333]">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ejemplo Comparativo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* JavaScript */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-[#333333]/30 hover:border-[#333333] transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#333333]/20 flex items-center justify-center">
                <i className="ri-javascript-line text-[#333333] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#333333]">
                  JavaScript
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]/70">Sin validación de tipos</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`function sumar(a, b) {
  return a + b;
}

sumar("1", "2"); // No se queja, pero es raro
// Resultado: "12" (concatenación)`}
              </pre>
            </div>

            <div className="mt-4 flex items-start gap-2 bg-[#F8F9FA] rounded-lg p-3">
              <i className="ri-alert-line text-[#333333] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                JavaScript no detecta el error hasta que se ejecuta el código
              </p>
            </div>
          </div>

          {/* TypeScript */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-code-s-slash-line text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  TypeScript
                </h3>
                <p className="text-[10px] sm:text-xs text-[#3178C6]">Con validación de tipos</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`function sumar(a: number, b: number): number {
  return a + b;
}

// sumar("1", "2"); // Error en compilación
// ✓ El compilador te avisa antes de ejecutar`}
              </pre>
            </div>

            <div className="mt-4 flex items-start gap-2 bg-[#3178C6]/10 rounded-lg p-3">
              <i className="ri-checkbox-circle-line text-[#3178C6] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                TypeScript detecta el error en tiempo de compilación, antes de ejecutar
              </p>
            </div>
          </div>
        </div>

        {/* Beneficios Finales */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 border border-[#3178C6]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-bug-line text-[#3178C6] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#235A97] mb-2">
              Menos Errores
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#333333]">
              Detecta problemas antes de ejecutar
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 border border-[#235A97]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-lightbulb-line text-[#235A97] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#235A97] mb-2">
              Mejor IDE
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#333333]">
              Autocompletado y refactoring inteligente
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 border border-[#3178C6]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-book-open-line text-[#3178C6] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#235A97] mb-2">
              Código Documentado
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#333333]">
              Los tipos sirven como documentación
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 border border-[#235A97]/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-team-line text-[#235A97] text-xl sm:text-2xl"></i>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#235A97] mb-2">
              Mejor en Equipo
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#333333]">
              Facilita la colaboración en proyectos grandes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
