export default function TagsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            ¿Qué es una Etiqueta HTML?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Las etiquetas son los bloques fundamentales de HTML
          </p>
        </div>

        {/* Estructura de una etiqueta */}
        <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 md:p-8 border border-[#ff79c6]/20 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f8f8f2] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <i className="ri-code-s-slash-line text-[#ff79c6] text-xl sm:text-2xl"></i>
            Estructura de una Etiqueta
          </h3>
          
          <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 md:p-6 border border-[#f8f8f2]/10 mb-4 sm:mb-6">
            <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <code>
                <span className="text-[#ff79c6]">&lt;nombre-etiq</span> <span className="text-[#50fa7b]">atributos</span>=<span className="text-[#f1fa8c]">"valor"</span><span className="text-[#ff79c6]">&gt;</span>
                <span className="text-[#f8f8f2]">contenido</span>
                <span className="text-[#ff79c6]">&lt;/nombre-etiq&gt;</span>
              </code>
            </pre>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#ff79c6]/20">
              <div className="text-[#ff79c6] font-bold text-xs sm:text-sm mb-1 sm:mb-2">Etiqueta de apertura</div>
              <div className="text-[#f8f8f2]/70 text-[10px] sm:text-xs">&lt;p&gt;, &lt;h1&gt;, &lt;div&gt;</div>
            </div>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/20">
              <div className="text-[#f8f8f2] font-bold text-xs sm:text-sm mb-1 sm:mb-2">Contenido</div>
              <div className="text-[#f8f8f2]/70 text-[10px] sm:text-xs">Texto u otras etiquetas</div>
            </div>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#ff79c6]/20">
              <div className="text-[#ff79c6] font-bold text-xs sm:text-sm mb-1 sm:mb-2">Etiqueta de cierre</div>
              <div className="text-[#f8f8f2]/70 text-[10px] sm:text-xs">&lt;/p&gt;, &lt;/h1&gt;, &lt;/div&gt;</div>
            </div>
          </div>
        </div>

        {/* Ejemplos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Etiquetas con contenido */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#50fa7b]/20">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#f8f8f2] mb-3 sm:mb-4 flex items-center gap-2">
              <i className="ri-file-text-line text-[#50fa7b] text-lg sm:text-xl"></i>
              Etiquetas con Contenido
            </h4>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">&lt;p&gt;</span>
                  <span className="text-[#f8f8f2]">Este es un párrafo.</span>
                  <span className="text-[#ff79c6]">&lt;/p&gt;</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;h1&gt;</span>
                  <span className="text-[#f8f8f2]">Título principal</span>
                  <span className="text-[#ff79c6]">&lt;/h1&gt;</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Etiquetas vacías */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#f8f8f2] mb-3 sm:mb-4 flex items-center gap-2">
              <i className="ri-file-code-line text-[#8be9fd] text-lg sm:text-xl"></i>
              Etiquetas Vacías
            </h4>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                <code>
                  <span className="text-[#6272a4]">{'<!-- salto de línea -->'}</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;br&gt;</span>{'\n\n'}
                  <span className="text-[#ff79c6]">&lt;img</span> <span className="text-[#50fa7b]">src</span>=<span className="text-[#f1fa8c]">"foto.jpg"</span> <span className="text-[#50fa7b]">alt</span>=<span className="text-[#f1fa8c]">"Descripción"</span><span className="text-[#ff79c6]">&gt;</span>
                </code>
              </pre>
            </div>
            <p className="text-[10px] sm:text-xs text-[#f8f8f2]/60 mt-2 sm:mt-3">
              No tienen contenido ni etiqueta de cierre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
