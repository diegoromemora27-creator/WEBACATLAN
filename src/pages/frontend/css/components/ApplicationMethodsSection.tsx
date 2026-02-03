export default function ApplicationMethodsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Cómo se Aplica el CSS
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Tres formas de aplicar estilos a tus páginas web
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Inline */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-5 border border-[#ff79c6]/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff79c6]/10 flex items-center justify-center">
                <i className="ri-code-line text-[#ff79c6]"></i>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#f8f8f2]">1. Inline</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-3">
              En el propio atributo del elemento
            </p>
            <div className="bg-[#1e1e2e] rounded-lg p-3 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">&lt;p</span> <span className="text-[#50fa7b]">style</span>=<span className="text-[#f1fa8c]">"color: red;"</span><span className="text-[#ff79c6]">&gt;</span>{'\n'}
                  {'  '}<span className="text-[#f8f8f2]">Texto rojo</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;/p&gt;</span>
                </code>
              </pre>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs text-[#f8f8f2]/50">
              <i className="ri-information-line"></i>
              <span>No recomendado para proyectos grandes</span>
            </div>
          </div>

          {/* Interno */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-5 border border-[#8be9fd]/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#8be9fd]/10 flex items-center justify-center">
                <i className="ri-file-code-line text-[#8be9fd]"></i>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#f8f8f2]">2. Interno</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-3">
              En un &lt;style&gt; dentro del &lt;head&gt;
            </p>
            <div className="bg-[#1e1e2e] rounded-lg p-3 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">&lt;head&gt;</span>{'\n'}
                  {'  '}<span className="text-[#ff79c6]">&lt;style&gt;</span>{'\n'}
                  {'    '}<span className="text-[#8be9fd]">p</span> {'{'}{'\n'}
                  {'      '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">green</span>;{'\n'}
                  {'    }'}{'\n'}
                  {'  '}<span className="text-[#ff79c6]">&lt;/style&gt;</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;/head&gt;</span>
                </code>
              </pre>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs text-[#f8f8f2]/50">
              <i className="ri-information-line"></i>
              <span>Útil para páginas individuales</span>
            </div>
          </div>

          {/* Externo */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-5 border border-[#50fa7b]/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#50fa7b]/10 flex items-center justify-center">
                <i className="ri-file-list-3-line text-[#50fa7b]"></i>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#f8f8f2]">3. Externo</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-3">
              Archivo .css enlazado (recomendado)
            </p>
            <div className="bg-[#1e1e2e] rounded-lg p-3 border border-[#f8f8f2]/10 mb-2">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">&lt;link</span> <span className="text-[#50fa7b]">rel</span>=<span className="text-[#f1fa8c]">"stylesheet"</span>{'\n'}
                  {'      '}<span className="text-[#50fa7b]">href</span>=<span className="text-[#f1fa8c]">"styles.css"</span><span className="text-[#ff79c6]">&gt;</span>
                </code>
              </pre>
            </div>
            <div className="bg-[#1e1e2e] rounded-lg p-3 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#6272a4]">/* styles.css */</span>{'\n'}
                  <span className="text-[#8be9fd]">p</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">purple</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs text-[#50fa7b]">
              <i className="ri-check-line"></i>
              <span>Mejor práctica para proyectos reales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
