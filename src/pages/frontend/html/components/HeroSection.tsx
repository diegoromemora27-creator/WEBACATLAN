export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 overflow-hidden">
      {/* Fondo con patrón de código */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255, 255, 255, 0.1) 35px, rgba(255, 255, 255, 0.1) 36px)`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8be9fd]/10 border border-[#8be9fd]/30 rounded-full mb-4 sm:mb-6">
            <i className="ri-code-box-line text-[#8be9fd] text-sm sm:text-base"></i>
            <span className="text-[#8be9fd] text-xs sm:text-sm font-medium">Lenguaje de Marcado</span>
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f8f2] mb-4 sm:mb-6 leading-tight">
            HTML: Fundamentos del
            <span className="block mt-2 bg-gradient-to-r from-[#ff79c6] via-[#8be9fd] to-[#50fa7b] bg-clip-text text-transparent">
              Desarrollo Web
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            El lenguaje de marcado que estructura el contenido de todas las páginas web: texto, imágenes, enlaces, formularios y más.
          </p>

          {/* Características destacadas */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-4">
            {[
              { icon: 'ri-markup-line', text: 'Etiquetas' },
              { icon: 'ri-file-code-line', text: 'Estructura' },
              { icon: 'ri-layout-grid-line', text: 'Semántico' },
              { icon: 'ri-links-line', text: 'Hipertexto' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f8f8f2]/5 border border-[#f8f8f2]/10 rounded-lg hover:border-[#8be9fd]/30 transition-all duration-300"
              >
                <i className={`${item.icon} text-[#8be9fd] text-sm sm:text-base`}></i>
                <span className="text-[#f8f8f2] text-xs sm:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Ejemplo de código visual */}
          <div className="max-w-2xl mx-auto bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#f8f8f2]/10 shadow-2xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 border-b border-[#f8f8f2]/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5555]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f1fa8c]"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#50fa7b]"></div>
              </div>
              <span className="text-[#f8f8f2]/50 text-[10px] sm:text-xs">index.html</span>
            </div>
            <pre className="text-left text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <code>
                <span className="text-[#ff79c6]">&lt;!DOCTYPE</span> <span className="text-[#50fa7b]">html</span><span className="text-[#ff79c6]">&gt;</span>{'\n'}
                <span className="text-[#ff79c6]">&lt;html</span> <span className="text-[#50fa7b]">lang</span>=<span className="text-[#f1fa8c]">"es"</span><span className="text-[#ff79c6]">&gt;</span>{'\n'}
                {'  '}<span className="text-[#ff79c6]">&lt;head&gt;</span>{'\n'}
                {'    '}<span className="text-[#ff79c6]">&lt;title&gt;</span><span className="text-[#f8f8f2]">Mi Primera Página</span><span className="text-[#ff79c6]">&lt;/title&gt;</span>{'\n'}
                {'  '}<span className="text-[#ff79c6]">&lt;/head&gt;</span>{'\n'}
                {'  '}<span className="text-[#ff79c6]">&lt;body&gt;</span>{'\n'}
                {'    '}<span className="text-[#ff79c6]">&lt;h1&gt;</span><span className="text-[#f8f8f2]">¡Hola Mundo!</span><span className="text-[#ff79c6]">&lt;/h1&gt;</span>{'\n'}
                {'  '}<span className="text-[#ff79c6]">&lt;/body&gt;</span>{'\n'}
                <span className="text-[#ff79c6]">&lt;/html&gt;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
