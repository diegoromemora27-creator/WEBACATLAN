export default function SintaxisBasicaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3178C6]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-file-code-line text-[#3178C6] text-base sm:text-lg"></i>
            <span className="text-[#3178C6] text-xs sm:text-sm font-medium">Sintaxis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#235A97] mb-3 sm:mb-4">
            Sintaxis Básica
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto">
            La sintaxis base es JavaScript + anotaciones de tipo
          </p>
        </div>

        {/* Tipos Primitivos */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-text text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  Tipos Primitivos
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Los tipos básicos de TypeScript</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`let nombre: string = "Carlos";
let edad: number = 30;
let esAdmin: boolean = false;
let nada: null = null;
let indefinido: undefined = undefined;`}
              </pre>
            </div>
          </div>
        </div>

        {/* Objetos e Interfaces */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#235A97]/30 hover:border-[#235A97] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center">
                <i className="ri-braces-line text-[#235A97] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  Objetos e Interfaces
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Define la forma de tus objetos</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`interface Usuario {
  id: number;
  nombre: string;
  email?: string; // opcional
}

const u: Usuario = { id: 1, nombre: "Ana" };`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-[#F8F9FA] rounded-lg p-3">
              <i className="ri-information-line text-[#235A97] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                La <span className="font-semibold text-[#235A97]">interface</span> describe la forma del objeto, y el compilador valida que la respetes.
              </p>
            </div>
          </div>
        </div>

        {/* Arrays y Tuplas */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-list-check text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  Arrays y Tuplas
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Colecciones tipadas</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Ana", "Luis"];

// Tuplas (longitud fija y tipos en cada posición)
let tupla: [string, number];
tupla = ["edad", 30];     // OK
// tupla = [30, "edad"];  // Error de tipos`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-[#F8F9FA] rounded-lg p-3">
              <i className="ri-lightbulb-line text-[#3178C6] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                Las tuplas son útiles para devolver pares <code className="bg-white px-1.5 py-0.5 rounded text-[#3178C6] font-mono text-[9px] sm:text-[10px]">[valor, error]</code> o coordenadas <code className="bg-white px-1.5 py-0.5 rounded text-[#3178C6] font-mono text-[9px] sm:text-[10px]">[x, y]</code>
              </p>
            </div>
          </div>
        </div>

        {/* Ciclos y Estructuras de Control */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#235A97]/30 hover:border-[#235A97] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center">
                <i className="ri-loop-right-line text-[#235A97] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  Ciclos y Estructuras de Control
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Igual que JavaScript, pero con tipos</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`for (let i: number = 0; i < 5; i++) {
  console.log(i);
}

const valor: number = 10;
if (valor > 5) {
  console.log("Mayor que 5");
} else {
  console.log("Menor o igual que 5");
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Funciones */}
        <div>
          <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-function-line text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  Funciones
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Con tipos para parámetros y retorno</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#235A97] mb-2">Funciones básicas:</p>
                <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`function sumar(a: number, b: number): number {
  return a + b;
}

const restar = (a: number, b: number): number => {
  return a - b;
};`}
                  </pre>
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#235A97] mb-2">Parámetros opcionales y por defecto:</p>
                <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`function saludar(nombre: string, saludo: string = "Hola", emoji?: string): string {
  return \`\${saludo} \${nombre} \${emoji ?? ""}\`;
}`}
                  </pre>
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#235A97] mb-2">Funciones genéricas:</p>
                <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`function identidad<T>(valor: T): T {
  return valor;
}

const n = identidad<number>(10);
const s = identidad<string>("texto");`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
