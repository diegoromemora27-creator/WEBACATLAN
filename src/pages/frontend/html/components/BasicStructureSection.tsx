export default function BasicStructureSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Estructura Básica de HTML
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Todo documento HTML sigue esta estructura fundamental
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Código */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 border-b border-[#f8f8f2]/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5555]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f1fa8c]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#50fa7b]"></div>
              </div>
              <span className="text-[#f8f8f2]/50 text-[10px] sm:text-xs">index.html</span>
            </div>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">&lt;!DOCTYPE</span> <span className="text-[#50fa7b]">html</span><span className="text-[#ff79c6]">&gt;</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;html</span> <span className="text-[#50fa7b]">lang</span>=<span className="text-[#f1fa8c]">"es"</span><span className="text-[#ff79c6]">&gt;</span>{'\n'}
                  {'  '}<span className="text-[#ff79c6]">&lt;head&gt;</span>{'\n'}
                  {'    '}<span className="text-[#ff79c6]">&lt;meta</span> <span className="text-[#50fa7b]">charset</span>=<span className="text-[#f1fa8c]">"UTF-8"</span><span className="text-[#ff79c6]">&gt;</span>{'\n'}
                  {'    '}<span className="text-[#ff79c6]">&lt;title&gt;</span><span className="text-[#f8f8f2]">Mi primera página</span><span className="text-[#ff79c6]">&lt;/title&gt;</span>{'\n'}
                  {'  '}<span className="text-[#ff79c6]">&lt;/head&gt;</span>{'\n'}
                  {'  '}<span className="text-[#ff79c6]">&lt;body&gt;</span>{'\n'}
                  {'    '}<span className="text-[#ff79c6]">&lt;h1&gt;</span><span className="text-[#f8f8f2]">Hola mundo</span><span className="text-[#ff79c6]">&lt;/h1&gt;</span>{'\n'}
                  {'    '}<span className="text-[#ff79c6]">&lt;p&gt;</span><span className="text-[#f8f8f2]">Este es mi primer documento HTML.</span><span className="text-[#ff79c6]">&lt;/p&gt;</span>{'\n'}
                  {'  '}<span className="text-[#ff79c6]">&lt;/body&gt;</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;/html&gt;</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Explicación */}
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                tag: '<!DOCTYPE html>',
                desc: 'Indica el tipo de documento (HTML5)',
                icon: 'ri-file-info-line',
                color: '#ff79c6'
              },
              {
                tag: '<html>',
                desc: 'Raíz del documento, contiene todo',
                icon: 'ri-folder-open-line',
                color: '#50fa7b'
              },
              {
                tag: '<head>',
                desc: 'Metadatos: título, codificación, enlaces a CSS',
                icon: 'ri-settings-4-line',
                color: '#8be9fd'
              },
              {
                tag: '<body>',
                desc: 'Todo lo que el usuario ve e interactúa',
                icon: 'ri-eye-line',
                color: '#f1fa8c'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1e1e2e] rounded-xl p-3 sm:p-4 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <i className={`${item.icon} text-lg sm:text-xl`} style={{ color: item.color }}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <code className="text-xs sm:text-sm font-bold block mb-1 sm:mb-2" style={{ color: item.color }}>
                      {item.tag}
                    </code>
                    <p className="text-[10px] sm:text-xs text-[#f8f8f2]/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
