export default function CaracteristicasSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3178C6]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-rocket-line text-[#3178C6] text-base sm:text-lg"></i>
            <span className="text-[#3178C6] text-xs sm:text-sm font-medium">Características</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#235A97] mb-3 sm:mb-4">
            Características Principales
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto">
            Lo que hace a TypeScript una herramienta poderosa para el desarrollo moderno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 border-2 border-[#3178C6]/20 hover:border-[#3178C6] transition-all duration-300 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-shield-check-line text-[#3178C6] text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97] mb-2">
              Tipado Estático (Opcional)
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]">
              Puedes declarar tipos (string, number, interfaces, etc.), lo que permite detectar errores en tiempo de compilación
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 border-2 border-[#235A97]/20 hover:border-[#235A97] transition-all duration-300 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-javascript-line text-[#235A97] text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97] mb-2">
              Superset de JavaScript
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]">
              Cualquier JS válido es también TS; puedes migrar poco a poco un proyecto existente
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 border-2 border-[#3178C6]/20 hover:border-[#3178C6] transition-all duration-300 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-code-box-line text-[#3178C6] text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97] mb-2">
              Orientado a Objetos
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]">
              Soporta clases, interfaces, herencia, public/private, abstract, enum, etc.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 border-2 border-[#235A97]/20 hover:border-[#235A97] transition-all duration-300 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-stack-line text-[#235A97] text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97] mb-2">
              Tipos Avanzados
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]">
              Uniones (string | number), genéricos, intersecciones, tipos mapeados
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 border-2 border-[#3178C6]/20 hover:border-[#3178C6] transition-all duration-300 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-refresh-line text-[#3178C6] text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97] mb-2">
              Compila a JavaScript
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]">
              El código TS nunca se ejecuta directamente; siempre se transforma a JS para navegador o Node
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 border-2 border-[#235A97]/20 hover:border-[#235A97] transition-all duration-300 hover:shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-tools-line text-[#235A97] text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97] mb-2">
              Mejor Tooling
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#333333]">
              Autocompletado inteligente, refactoring y detección de errores en tiempo real
            </p>
          </div>
        </div>

        {/* Ejemplo Simple */}
        <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
              <i className="ri-code-s-slash-line text-[#3178C6] text-xl sm:text-2xl"></i>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                Ejemplo Simple
              </h3>
              <p className="text-[10px] sm:text-xs text-[#333333]">Declaración de variables con tipos</p>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`let nombre: string = "Ana";
let edad: number = 25;
let activo: boolean = true;`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
