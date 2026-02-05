export default function ModernLayoutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Flexbox y Grid: Layout Moderno
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Sistemas de layout potentes para crear diseños complejos y responsivos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Flexbox */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#8be9fd]/10 flex items-center justify-center">
                <i className="ri-layout-row-line text-[#8be9fd] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Flexbox</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-4">
              Para distribuir elementos en una dimensión (fila o columna)
            </p>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10 mb-4">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#8be9fd]">.contenedor</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">display</span>: <span className="text-[#f1fa8c]">flex</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">justify-content</span>: <span className="text-[#f1fa8c]">center</span>; <span className="text-[#6272a4]">/* eje principal */</span>{'\n'}
                  {'  '}<span className="text-[#50fa7b]">align-items</span>: <span className="text-[#f1fa8c]">center</span>; <span className="text-[#6272a4]">/* eje cruzado */</span>{'\n'}
                  {'  '}<span className="text-[#50fa7b]">gap</span>: <span className="text-[#f1fa8c]">20px</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">flex-direction</span>: <span className="text-[#f1fa8c]">row</span>; <span className="text-[#6272a4]">/* o column */</span>{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            {/* Visualización Flexbox */}
            <div className="bg-[#282a36] rounded-lg p-4 border border-[#8be9fd]/20">
              <div className="flex justify-center items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#8be9fd]/20 border-2 border-[#8be9fd] rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-[#8be9fd] font-bold">1</span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#8be9fd]/20 border-2 border-[#8be9fd] rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-[#8be9fd] font-bold">2</span>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#8be9fd]/20 border-2 border-[#8be9fd] rounded flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs text-[#8be9fd] font-bold">3</span>
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-[#f8f8f2]/50 text-center mt-3">
                Elementos centrados horizontal y verticalmente
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#50fa7b]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#50fa7b]/10 flex items-center justify-center">
                <i className="ri-layout-grid-line text-[#50fa7b] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Grid</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-4">
              Para layouts en dos dimensiones (filas y columnas)
            </p>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10 mb-4">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#8be9fd]">.grid</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">display</span>: <span className="text-[#f1fa8c]">grid</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">grid-template-columns</span>: <span className="text-[#f1fa8c]">1fr 1fr 1fr</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">gap</span>: <span className="text-[#f1fa8c]">16px</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">grid-auto-rows</span>: <span className="text-[#f1fa8c]">minmax(100px, auto)</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            {/* Visualización Grid */}
            <div className="bg-[#282a36] rounded-lg p-4 border border-[#50fa7b]/20">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="h-12 sm:h-16 bg-[#50fa7b]/20 border-2 border-[#50fa7b] rounded flex items-center justify-center"
                  >
                    <span className="text-[10px] sm:text-xs text-[#50fa7b] font-bold">{num}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-[#f8f8f2]/50 text-center mt-3">
                Grid de 3 columnas con espaciado uniforme
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
