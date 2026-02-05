
export default function DependencyInjectionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#E0234E]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <i className="ri-links-line text-xl sm:text-2xl text-[#E0234E]"></i>
            <span className="text-[#E0234E] font-semibold text-sm sm:text-lg">Concepto Clave</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] mb-4 sm:mb-6">
            Inyección de Dependencias (DI)
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Este es el concepto más importante para entender cómo Nest une todo. La Inyección de Dependencias es un patrón de diseño en el que una clase solicita sus dependencias externas en lugar de crearlas ella misma.
          </p>
        </div>

        {/* Analogía del Restaurante */}
        <div className="bg-gradient-to-br from-[#E0234E]/5 to-[#E0234E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-[#E0234E]/20">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#E0234E] rounded-lg sm:rounded-xl flex-shrink-0">
              <i className="ri-restaurant-line text-xl sm:text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F8FAFC] mb-1 sm:mb-2">La Analogía del Restaurante</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8]">Entendiendo DI con un ejemplo del mundo real</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Sin DI */}
            <div className="bg-[#0B1120] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-500/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <i className="ri-close-circle-line text-xl sm:text-2xl text-red-400"></i>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-red-400">Sin DI</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                El <strong className="text-[#F8FAFC]">Chef</strong> tiene que detenerse, buscar metal, forjar su propio cuchillo y luego empezar a cocinar. El Chef es responsable de crear su herramienta.
              </p>
            </div>

            {/* Con DI */}
            <div className="bg-[#0B1120] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-500/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <i className="ri-checkbox-circle-line text-xl sm:text-2xl text-green-400"></i>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-green-400">Con DI</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                El <strong className="text-[#F8FAFC]">Chef</strong> simplemente llega a la cocina y dice: "Necesito un cuchillo". El <strong className="text-[#F8FAFC]">Dueño del Restaurante (NestJS)</strong> ya tiene un cuchillo listo y se lo entrega en la mano. El Chef solo se preocupa por usar el cuchillo, no por fabricarlo.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#0B1120]/50 rounded-lg border-l-4 border-[#E0234E]">
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              <strong className="text-[#F8FAFC]">El Chef (Clase):</strong> Necesita un <strong className="text-[#E0234E]">Cuchillo (Dependencia)</strong> para trabajar.
            </p>
          </div>
        </div>

        {/* Concepto Técnico: IoC */}
        <div className="bg-[#1a1f35] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 border border-[#E0234E]/20">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#E0234E] rounded-lg sm:rounded-xl flex-shrink-0">
              <i className="ri-refresh-line text-xl sm:text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#F8FAFC] mb-1 sm:mb-2">1. El concepto técnico: Inversión de Control (IoC)</h3>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed">
              Normalmente, si la <strong className="text-[#F8FAFC]">Clase A</strong> necesita la <strong className="text-[#F8FAFC]">Clase B</strong>, tú escribes <code className="px-1 sm:px-2 py-0.5 sm:py-1 bg-[#0B1120] rounded text-[#E0234E] font-mono text-[10px] sm:text-xs md:text-sm break-all">const b = new ClaseB()</code> dentro de A. Esto "acopla" las clases: si ClaseB cambia, tienes que cambiar Clase A.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed">
              En NestJS, usamos el <strong className="text-[#F8FAFC]">Contenedor IoC</strong>. Tú no creas las instancias con <code className="px-1 sm:px-2 py-0.5 sm:py-1 bg-[#0B1120] rounded text-[#E0234E] font-mono text-[10px] sm:text-xs md:text-sm">new</code>; NestJS las crea por ti en el arranque, las guarda en una "caja" y las reparte a quien las pida.
            </p>
          </div>
        </div>

        {/* Los 3 Pasos */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4 sm:mb-6 md:mb-8 text-center">
            2. Los 3 pasos de la DI en NestJS
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#94A3B8] text-center mb-6 sm:mb-8 md:mb-12">
            Para que la magia ocurra, NestJS necesita seguir estos pasos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Paso A */}
            <div className="bg-[#1a1f35] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E0234E]/20 hover:border-[#E0234E]/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#E0234E] rounded-lg text-white font-bold text-sm sm:text-base">
                  A
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#F8FAFC]">Declarar el Proveedor</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-3 sm:mb-4">
                Le dices a Nest que esta clase puede ser "inyectada" en otros lugares.
              </p>
              <div className="bg-[#0B1120] rounded-lg p-2 sm:p-3 md:p-4 border border-[#E0234E]/10 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-[#94A3B8] whitespace-pre">
                  <code>{`@Injectable()
export class CuchilloService {
  cortar() { 
    return 'Cortando ingredientes...'; 
  }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Paso B */}
            <div className="bg-[#1a1f35] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E0234E]/20 hover:border-[#E0234E]/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#E0234E] rounded-lg text-white font-bold text-sm sm:text-base">
                  B
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#F8FAFC]">Registrar en el Módulo</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-3 sm:mb-4">
                Le dices al "Dueño del Restaurante" (el Módulo) que debe tener ese cuchillo disponible en su inventario.
              </p>
              <div className="bg-[#0B1120] rounded-lg p-2 sm:p-3 md:p-4 border border-[#E0234E]/10 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-[#94A3B8] whitespace-pre">
                  <code>{`@Module({
  providers: [CuchilloService],
  // Aquí Nest crea la 
  // instancia única (Singleton)
})
export class CocinaModule {}`}</code>
                </pre>
              </div>
            </div>

            {/* Paso C */}
            <div className="bg-[#1a1f35] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E0234E]/20 hover:border-[#E0234E]/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#E0234E] rounded-lg text-white font-bold text-sm sm:text-base">
                  C
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#F8FAFC]">Inyectar vía Constructor</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-3 sm:mb-4">
                Aquí es donde ocurre la conexión. El Controlador o Servicio pide la dependencia en su constructor.
              </p>
              <div className="bg-[#0B1120] rounded-lg p-2 sm:p-3 md:p-4 border border-[#E0234E]/10 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm text-[#94A3B8] whitespace-pre">
                  <code>{`@Controller('chef')
export class ChefController {
  constructor(
    private readonly cuchillo: 
      CuchilloService
  ) {}

  @Get()
  cocinar() {
    return this.cuchillo.cortar();
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla Comparativa */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4 sm:mb-6 md:mb-8 text-center">
            3. ¿Por qué esto es "mucho mejor" que hacerlo manual?
          </h3>

          <div className="bg-[#1a1f35] rounded-xl sm:rounded-2xl overflow-hidden border border-[#E0234E]/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-[#E0234E]">
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-white font-bold text-xs sm:text-sm md:text-base">Problema sin DI</th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-white font-bold text-xs sm:text-sm md:text-base">Solución con NestJS DI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E0234E]/10">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#94A3B8] text-xs sm:text-sm">
                      <strong className="text-red-400">Gasto de Memoria:</strong> Si 10 clases usan un servicio, tendrías 10 copias en memoria.
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#94A3B8] text-xs sm:text-sm">
                      <strong className="text-green-400">Singleton:</strong> Nest crea una sola instancia y la comparte con todos (ahorro de RAM).
                    </td>
                  </tr>
                  <tr className="border-b border-[#E0234E]/10">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#94A3B8] text-xs sm:text-sm">
                      <strong className="text-red-400">Código Rígido:</strong> Si el servicio necesita un parámetro nuevo en el constructor, debes cambiarlo en todos lados.
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#94A3B8] text-xs sm:text-sm">
                      <strong className="text-green-400">Centralizado:</strong> Solo cambias el servicio; Nest se encarga de actualizar cómo se entrega.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#94A3B8] text-xs sm:text-sm">
                      <strong className="text-red-400">Dificultad para Testear:</strong> Es difícil probar un Chef si él mismo fabrica sus cuchillos reales.
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-[#94A3B8] text-xs sm:text-sm">
                      <strong className="text-green-400">Mocking:</strong> En un test, puedes darle al Chef un "cuchillo de juguete" (Mock) sin cambiar el código del Chef.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* El Mecanismo bajo el capó */}
        <div className="bg-gradient-to-br from-[#E0234E]/5 to-[#E0234E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#E0234E]/20">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#E0234E] rounded-lg sm:rounded-xl flex-shrink-0">
              <i className="ri-settings-3-line text-xl sm:text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#F8FAFC] mb-1 sm:mb-2">4. El "Mecanismo" bajo el capó</h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed mb-4 sm:mb-6">
            NestJS utiliza los <strong className="text-[#F8FAFC]">Metadatos de TypeScript</strong>. Gracias a que TypeScript sabe de qué tipo es la variable en el constructor (<code className="px-1 sm:px-2 py-0.5 sm:py-1 bg-[#0B1120] rounded text-[#E0234E] font-mono text-[10px] sm:text-xs md:text-sm break-all">cuchillo: CuchilloService</code>), NestJS puede buscar en su mapa interno: "Ah, el Chef quiere un CuchilloService, yo tengo uno guardado aquí, ¡tómalo!".
          </p>

          <div className="bg-[#0B1120] rounded-lg p-4 sm:p-6 border-l-4 border-[#E0234E]">
            <div className="flex items-start gap-2 sm:gap-3">
              <i className="ri-lightbulb-line text-xl sm:text-2xl text-[#E0234E] flex-shrink-0 mt-0.5 sm:mt-1"></i>
              <div>
                <p className="text-[#F8FAFC] font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Dato clave:</p>
                <p className="text-xs sm:text-sm md:text-base text-[#94A3B8] leading-relaxed">
                  La inyección ocurre en el momento en que se instancia la clase. Si NestJS detecta una <strong className="text-[#E0234E]">"dependencia circular"</strong> (A necesita a B y B necesita a A), te lanzará un error para proteger la arquitectura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
