export default function BoxModelSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Modelo de Caja (Box Model)
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Todo elemento se representa como una caja: content + padding + border + margin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Visualización */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-4 flex items-center gap-2">
              <i className="ri-box-3-line text-[#8be9fd]"></i>
              Visualización del Modelo
            </h3>
            <div className="bg-[#282a36] rounded-lg p-4 sm:p-6">
              {/* Margin */}
              <div className="border-2 border-dashed border-[#f1fa8c] p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-[#f1fa8c] mb-2 font-bold">MARGIN (20px)</div>
                {/* Border */}
                <div className="border-4 border-[#ff79c6] p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-[#ff79c6] mb-2 font-bold">BORDER (1px)</div>
                  {/* Padding */}
                  <div className="bg-[#50fa7b]/20 border-2 border-dashed border-[#50fa7b] p-3 sm:p-4">
                    <div className="text-[10px] sm:text-xs text-[#50fa7b] mb-2 font-bold">PADDING (16px)</div>
                    {/* Content */}
                    <div className="bg-[#8be9fd]/20 border-2 border-[#8be9fd] p-3 sm:p-4 text-center">
                      <div className="text-[10px] sm:text-xs text-[#8be9fd] font-bold mb-1">CONTENT</div>
                      <div className="text-[10px] sm:text-xs text-[#f8f8f2]/70">300px × auto</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Código y explicación */}
          <div className="space-y-4 sm:space-y-6">
            {/* Código */}
            <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-5 border border-[#50fa7b]/20">
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-3 flex items-center gap-2">
                <i className="ri-code-s-slash-line text-[#50fa7b]"></i>
                Código CSS
              </h3>
              <div className="bg-[#282a36] rounded-lg p-3 border border-[#f8f8f2]/10">
                <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                  <code>
                    <span className="text-[#8be9fd]">.card</span> {'{'}{'\n'}
                    {'  '}<span className="text-[#50fa7b]">width</span>: <span className="text-[#f1fa8c]">300px</span>; <span className="text-[#6272a4]">/* content */</span>{'\n'}
                    {'  '}<span className="text-[#50fa7b]">padding</span>: <span className="text-[#f1fa8c]">16px</span>; <span className="text-[#6272a4]">/* espacio interno */</span>{'\n'}
                    {'  '}<span className="text-[#50fa7b]">border</span>: <span className="text-[#f1fa8c]">1px solid #ccc</span>; <span className="text-[#6272a4]">/* borde */</span>{'\n'}
                    {'  '}<span className="text-[#50fa7b]">margin</span>: <span className="text-[#f1fa8c]">20px</span>; <span className="text-[#6272a4]">/* espacio externo */</span>{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>

            {/* Explicación de cada parte */}
            <div className="space-y-3">
              {[
                {
                  name: 'Margin',
                  desc: 'Espacio afuera de la caja, separa elementos entre sí',
                  color: '#f1fa8c',
                  icon: 'ri-arrow-left-right-line'
                },
                {
                  name: 'Border',
                  desc: 'Línea que envuelve el contenido + padding',
                  color: '#ff79c6',
                  icon: 'ri-checkbox-blank-line'
                },
                {
                  name: 'Padding',
                  desc: 'Espacio entre contenido y borde (interno)',
                  color: '#50fa7b',
                  icon: 'ri-space'
                },
                {
                  name: 'Content',
                  desc: 'El contenido real: texto, imágenes, etc.',
                  color: '#8be9fd',
                  icon: 'ri-file-text-line'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <i className={`${item.icon} text-sm`} style={{ color: item.color }}></i>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold mb-1" style={{ color: item.color }}>
                        {item.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#f8f8f2]/70">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
