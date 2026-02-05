export default function WhatIsHTMLSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            ¿Qué es HTML?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Tarjeta principal */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 md:p-8 border border-[#8be9fd]/20 hover:border-[#8be9fd]/40 transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#8be9fd]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <i className="ri-file-code-line text-[#8be9fd] text-2xl sm:text-3xl md:text-4xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
              Lenguaje de Marcado
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#f8f8f2]/70 leading-relaxed">
              HTML es un lenguaje de marcado para estructurar el contenido de una página web: texto, imágenes, enlaces, formularios, tablas, etc. Cada pieza de contenido se marca con etiquetas (tags) que el navegador interpreta.
            </p>
          </div>

          {/* Características */}
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                icon: 'ri-markup-line',
                title: 'Estructura Semántica',
                desc: 'Define el significado y la jerarquía del contenido',
                color: '#ff79c6'
              },
              {
                icon: 'ri-global-line',
                title: 'Estándar Universal',
                desc: 'Funciona en todos los navegadores y dispositivos',
                color: '#50fa7b'
              },
              {
                icon: 'ri-links-line',
                title: 'Hipertexto',
                desc: 'Conecta páginas mediante enlaces y referencias',
                color: '#8be9fd'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#282a36] rounded-xl p-3 sm:p-4 md:p-5 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <i className={`${item.icon} text-xl sm:text-2xl`} style={{ color: item.color }}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#f8f8f2] mb-1 sm:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#f8f8f2]/70">
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
