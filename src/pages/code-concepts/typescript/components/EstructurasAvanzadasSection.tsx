export default function EstructurasAvanzadasSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3178C6]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-stack-line text-[#3178C6] text-base sm:text-lg"></i>
            <span className="text-[#3178C6] text-xs sm:text-sm font-medium">Avanzado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#235A97] mb-3 sm:mb-4">
            Estructuras Avanzadas de TypeScript
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto">
            Herramientas poderosas para proyectos complejos
          </p>
        </div>

        {/* 1. Interface */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-file-list-line text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  1. Interface
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Definen contratos de objetos, clases o funciones</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`interface Usuario {
  id: number;
  nombre: string;
  email?: string; // opcional
}

const u1: Usuario = { id: 1, nombre: "Ana" };
const u2: Usuario = { id: 2, nombre: "Luis", email: "luis@example.com" };`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-information-line text-[#3178C6] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                Aquí la <span className="font-semibold text-[#235A97]">interface</span> define la forma que deben tener los objetos Usuario.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Clase con modificadores */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#235A97]/30 hover:border-[#235A97] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center">
                <i className="ri-lock-line text-[#235A97] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  2. Clase con Modificadores
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">public, private, protected, readonly, abstract</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`class Persona {
  private id: number;
  public nombre: string;
  protected edad: number;

  constructor(id: number, nombre: string, edad: number) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }

  public saludar(): void {
    console.log(\`Hola, soy \${this.nombre}\`);
  }
}

const p = new Persona(1, "Carlos", 30);
p.saludar();`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-information-line text-[#235A97] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                Uso de <span className="font-semibold text-[#235A97]">public</span>, <span className="font-semibold text-[#235A97]">private</span> y <span className="font-semibold text-[#235A97]">protected</span> para controlar la visibilidad de las propiedades y métodos.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Enum */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-list-ordered text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  3. Enums
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Conjuntos de valores nombrados</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`enum Rol {
  Admin = "ADMIN",
  Usuario = "USER",
  Invitado = "GUEST",
}

function tienePermisos(rol: Rol): boolean {
  return rol === Rol.Admin || rol === Rol.Usuario;
}

tienePermisos(Rol.Admin);   // true
tienePermisos(Rol.Invitado); // false`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-lightbulb-line text-[#3178C6] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                El <span className="font-semibold text-[#235A97]">enum</span> agrupa constantes con nombre y te evita usar "magic strings" dispersas.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Tipo de unión */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#235A97]/30 hover:border-[#235A97] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center">
                <i className="ri-git-branch-line text-[#235A97] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  4. Tipos de Unión (|)
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">string | number</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`type Id = number | string;

function imprimirId(id: Id): void {
  if (typeof id === "string") {
    console.log(\`ID string: \${id.toUpperCase()}\`);
  } else {
    console.log(\`ID numérico: \${id.toFixed(0)}\`);
  }
}

imprimirId(123);
imprimirId("abc-123");`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-information-line text-[#235A97] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                La <span className="font-semibold text-[#235A97]">unión</span> permite que una variable acepte varios tipos y obliga a hacer narrowing con typeof o checks.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Genérico sencillo */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#3178C6]/30 hover:border-[#3178C6] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#3178C6]/20 flex items-center justify-center">
                <i className="ri-code-s-slash-line text-[#3178C6] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  5. Genérico Sencillo
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Funciones reutilizables con tipos consistentes</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`function envolverEnArray<T>(valor: T): T[] {
  return [valor];
}

const numeros = envolverEnArray<number>(10);     // T = number → number[]
const textos  = envolverEnArray("hola");         // T inferido como string → string[]`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-lightbulb-line text-[#3178C6] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                El genérico <code className="bg-[#1e1e1e] px-1.5 py-0.5 rounded text-[#3178C6] font-mono text-[9px] sm:text-[10px]">T</code> hace que la función sea reutilizable manteniendo el tipo de entrada y salida consistente.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Genérico en interfaz */}
        <div>
          <div className="bg-gradient-to-br from-[#235A97]/10 to-[#235A97]/5 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#235A97]/30 hover:border-[#235A97] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#235A97]/20 flex items-center justify-center">
                <i className="ri-code-box-line text-[#235A97] text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#235A97]">
                  6. Genérico en Interface
                </h3>
                <p className="text-[10px] sm:text-xs text-[#333333]">Interfaces reutilizables para cualquier tipo de dato</p>
              </div>
            </div>

            <div className="bg-[#1e1e1e] rounded-lg p-3 sm:p-4 overflow-x-auto mb-4">
              <pre className="text-[10px] sm:text-xs md:text-sm text-white whitespace-pre">
{`interface RespuestaApi<T> {
  ok: boolean;
  data: T;
  error?: string;
}

type UsuarioDTO = { id: number; nombre: string };

const respUsuario: RespuestaApi<UsuarioDTO> = {
  ok: true,
  data: { id: 1, nombre: "Ana" },
};`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-white rounded-lg p-3">
              <i className="ri-information-line text-[#235A97] text-base sm:text-lg flex-shrink-0 mt-0.5"></i>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#333333]">
                La interface genérica <code className="bg-[#1e1e1e] px-1.5 py-0.5 rounded text-[#235A97] font-mono text-[9px] sm:text-[10px]">RespuestaApi&lt;T&gt;</code> se puede reutilizar para cualquier tipo de dato (UsuarioDTO, Producto, etc.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}