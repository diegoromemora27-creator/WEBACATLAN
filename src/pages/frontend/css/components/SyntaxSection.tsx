export default function SyntaxSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Sintaxis Básica
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Una regla CSS tiene tres partes: selector, bloque de declaración, propiedades/valores
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Estructura */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-3 sm:mb-4 flex items-center gap-2">
              <i className="ri-code-box-line text-[#8be9fd]"></i>
              Estructura de una Regla
            </h3>
            <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">selector</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">propiedad</span>: <span className="text-[#f1fa8c]">valor</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">otra-propiedad</span>: <span className="text-[#f1fa8c]">otro-valor</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff79c6] mt-1.5 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-[#f8f8f2]/70">
                  <strong className="text-[#ff79c6]">Selector:</strong> Define qué elementos se estilizan
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#50fa7b] mt-1.5 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-[#f8f8f2]/70">
                  <strong className="text-[#50fa7b]">Propiedad:</strong> Aspecto que se modifica
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f1fa8c] mt-1.5 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-[#f8f8f2]/70">
                  <strong className="text-[#f1fa8c]">Valor:</strong> Cómo se modifica la propiedad
                </p>
              </div>
            </div>
          </div>

          {/* Ejemplo práctico */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#50fa7b]/20">
            <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-3 sm:mb-4 flex items-center gap-2">
              <i className="ri-file-code-line text-[#50fa7b]"></i>
              Ejemplo Práctico
            </h3>
            <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">p</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">blue</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">font-size</span>: <span className="text-[#f1fa8c]">16px</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="mt-4 bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#8be9fd]/20">
              <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-2">
                <strong className="text-[#8be9fd]">Resultado:</strong>
              </p>
              <p className="text-sm sm:text-base" style={{ color: 'blue', fontSize: '16px' }}>
                Todos los párrafos tendrán texto azul de 16px
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
