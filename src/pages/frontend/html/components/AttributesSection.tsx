export default function AttributesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Atributos HTML
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Los atributos agregan información extra a las etiquetas
          </p>
        </div>

        <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 md:p-8 border border-[#50fa7b]/20 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f8f8f2] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <i className="ri-settings-3-line text-[#50fa7b] text-xl sm:text-2xl"></i>
            Sintaxis de Atributos
          </h3>
          
          <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 md:p-6 border border-[#f8f8f2]/10 mb-4 sm:mb-6">
            <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <code>
                <span className="text-[#ff79c6]">&lt;a</span> <span className="text-[#50fa7b]">href</span>=<span className="text-[#f1fa8c]">"https://example.com"</span> <span className="text-[#50fa7b]">target</span>=<span className="text-[#f1fa8c]">"_blank"</span><span className="text-[#ff79c6]">&gt;</span>
                <span className="text-[#f8f8f2]">Ir al sitio</span>
                <span className="text-[#ff79c6]">&lt;/a&gt;</span>{'\n\n'}
                <span className="text-[#ff79c6]">&lt;img</span> <span className="text-[#50fa7b]">src</span>=<span className="text-[#f1fa8c]">"foto.jpg"</span> <span className="text-[#50fa7b]">alt</span>=<span className="text-[#f1fa8c]">"Foto de perfil"</span> <span className="text-[#50fa7b]">width</span>=<span className="text-[#f1fa8c]">"200"</span><span className="text-[#ff79c6]">&gt;</span>
              </code>
            </pre>
          </div>

          <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#50fa7b]/20">
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-2 sm:mb-3">
              La forma general es: <span className="text-[#50fa7b] font-mono">atributo="valor"</span>
            </p>
          </div>
        </div>

        {/* Atributos comunes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            { attr: 'href', desc: 'URL de destino en enlaces', example: 'href="https://..."', color: '#ff79c6' },
            { attr: 'src', desc: 'Ruta de la imagen o recurso', example: 'src="imagen.jpg"', color: '#50fa7b' },
            { attr: 'alt', desc: 'Texto alternativo para imágenes', example: 'alt="Descripción"', color: '#8be9fd' },
            { attr: 'class', desc: 'Clases CSS para estilos', example: 'class="btn primary"', color: '#f1fa8c' },
            { attr: 'id', desc: 'Identificador único del elemento', example: 'id="header"', color: '#ff79c6' },
            { attr: 'style', desc: 'Estilos CSS en línea', example: 'style="color: red"', color: '#50fa7b' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#282a36] rounded-xl p-3 sm:p-4 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <i className="ri-code-line text-base sm:text-lg" style={{ color: item.color }}></i>
                </div>
                <code className="text-xs sm:text-sm font-bold" style={{ color: item.color }}>
                  {item.attr}
                </code>
              </div>
              <p className="text-[10px] sm:text-xs text-[#f8f8f2]/70 mb-2">
                {item.desc}
              </p>
              <div className="bg-[#1e1e2e] rounded px-2 py-1 border border-[#f8f8f2]/10">
                <code className="text-[9px] sm:text-[10px] text-[#f8f8f2]/60">
                  {item.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
