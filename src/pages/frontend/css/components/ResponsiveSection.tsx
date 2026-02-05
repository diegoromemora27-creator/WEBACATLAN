export default function ResponsiveSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Responsividad y Media Queries
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Adapta tu sitio a móviles, tablets y escritorio con media queries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Código */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#ff79c6]/20">
            <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-4 flex items-center gap-2">
              <i className="ri-code-s-slash-line text-[#ff79c6]"></i>
              Ejemplo de Media Queries
            </h3>
            <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#6272a4]">/* Estilos por defecto (móvil primero) */</span>{'\n'}
                  <span className="text-[#8be9fd]">.card</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">width</span>: <span className="text-[#f1fa8c]">100%</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">padding</span>: <span className="text-[#f1fa8c]">16px</span>;{'\n'}
                  {'}'}{'\n\n'}
                  <span className="text-[#6272a4]">/* A partir de 768px (tablets) */</span>{'\n'}
                  <span className="text-[#ff79c6]">@media</span> (<span className="text-[#50fa7b]">min-width</span>: <span className="text-[#f1fa8c]">768px</span>) {'{'}{'\n'}
                  {'  '}<span className="text-[#8be9fd]">.card</span> {'{'}{'\n'}
                  {'    '}<span className="text-[#50fa7b]">width</span>: <span className="text-[#f1fa8c]">50%</span>;{'\n'}
                  {'    '}<span className="text-[#50fa7b]">padding</span>: <span className="text-[#f1fa8c]">24px</span>;{'\n'}
                  {'  }'}{'\n'}
                  {'}'}{'\n\n'}
                  <span className="text-[#6272a4]">/* A partir de 1024px (escritorio) */</span>{'\n'}
                  <span className="text-[#ff79c6]">@media</span> (<span className="text-[#50fa7b]">min-width</span>: <span className="text-[#f1fa8c]">1024px</span>) {'{'}{'\n'}
                  {'  '}<span className="text-[#8be9fd]">.card</span> {'{'}{'\n'}
                  {'    '}<span className="text-[#50fa7b]">width</span>: <span className="text-[#f1fa8c]">33.33%</span>;{'\n'}
                  {'    '}<span className="text-[#50fa7b]">padding</span>: <span className="text-[#f1fa8c]">32px</span>;{'\n'}
                  {'  }'}{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>

          {/* Visualización */}
          <div className="space-y-4">
            {/* Móvil */}
            <div className="bg-[#282a36] rounded-xl p-4 border border-[#8be9fd]/20">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-smartphone-line text-[#8be9fd]"></i>
                <h4 className="text-sm font-bold text-[#f8f8f2]">Móvil (&lt; 768px)</h4>
              </div>
              <div className="bg-[#1e1e2e] rounded-lg p-3">
                <div className="w-full h-16 bg-[#8be9fd]/20 border-2 border-[#8be9fd] rounded flex items-center justify-center">
                  <span className="text-xs text-[#8be9fd] font-bold">100% width</span>
                </div>
              </div>
            </div>

            {/* Tablet */}
            <div className="bg-[#282a36] rounded-xl p-4 border border-[#50fa7b]/20">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-tablet-line text-[#50fa7b]"></i>
                <h4 className="text-sm font-bold text-[#f8f8f2]">Tablet (≥ 768px)</h4>
              </div>
              <div className="bg-[#1e1e2e] rounded-lg p-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-[#50fa7b]/20 border-2 border-[#50fa7b] rounded flex items-center justify-center">
                    <span className="text-xs text-[#50fa7b] font-bold">50%</span>
                  </div>
                  <div className="h-16 bg-[#50fa7b]/20 border-2 border-[#50fa7b] rounded flex items-center justify-center">
                    <span className="text-xs text-[#50fa7b] font-bold">50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Escritorio */}
            <div className="bg-[#282a36] rounded-xl p-4 border border-[#ff79c6]/20">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-computer-line text-[#ff79c6]"></i>
                <h4 className="text-sm font-bold text-[#f8f8f2]">Escritorio (≥ 1024px)</h4>
              </div>
              <div className="bg-[#1e1e2e] rounded-lg p-3">
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="h-16 bg-[#ff79c6]/20 border-2 border-[#ff79c6] rounded flex items-center justify-center"
                    >
                      <span className="text-xs text-[#ff79c6] font-bold">33%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakpoints comunes */}
        <div className="mt-8 bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#f1fa8c]/20">
          <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-4 flex items-center gap-2">
            <i className="ri-ruler-line text-[#f1fa8c]"></i>
            Breakpoints Comunes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { device: 'Móvil', size: '&lt; 768px', icon: 'ri-smartphone-line' },
              { device: 'Tablet', size: '≥ 768px', icon: 'ri-tablet-line' },
              { device: 'Laptop', size: '≥ 1024px', icon: 'ri-computer-line' },
              { device: 'Desktop', size: '≥ 1280px', icon: 'ri-tv-line' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1e1e2e] rounded-lg p-3 border border-[#f8f8f2]/10 text-center"
              >
                <i className={`${item.icon} text-[#f1fa8c] text-2xl mb-2`}></i>
                <div className="text-xs font-bold text-[#f8f8f2] mb-1">{item.device}</div>
                <div className="text-[10px] text-[#f8f8f2]/70">{item.size}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
