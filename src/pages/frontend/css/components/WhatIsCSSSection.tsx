export default function WhatIsCSSSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            ¿Qué es CSS?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Hojas de estilo en cascada que controlan la presentación visual
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Definición */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#8be9fd]/10 flex items-center justify-center flex-shrink-0">
                <i className="ri-file-text-line text-[#8be9fd] text-lg sm:text-xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-2">Definición</h3>
                <p className="text-xs sm:text-sm text-[#f8f8f2]/70 leading-relaxed">
                  Son reglas que se aplican sobre el HTML para definir cómo se ve cada elemento. Separa contenido (HTML) de presentación (CSS), haciendo el código más limpio y fácil de mantener.
                </p>
              </div>
            </div>
          </div>

          {/* Ejemplo */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#50fa7b]/20">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#50fa7b]/10 flex items-center justify-center flex-shrink-0">
                <i className="ri-code-s-slash-line text-[#50fa7b] text-lg sm:text-xl"></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-2">Ejemplo Mínimo</h3>
                <div className="bg-[#282a36] rounded-lg p-3 border border-[#f8f8f2]/10">
                  <pre className="text-[10px] sm:text-xs overflow-x-auto">
                    <code>
                      <span className="text-[#ff79c6]">&lt;p</span> <span className="text-[#50fa7b]">class</span>=<span className="text-[#f1fa8c]">"importante"</span><span className="text-[#ff79c6]">&gt;</span>
                      <span className="text-[#f8f8f2]">Hola mundo</span>
                      <span className="text-[#ff79c6]">&lt;/p&gt;</span>{'\n\n'}
                      <span className="text-[#ff79c6]">&lt;style&gt;</span>{'\n'}
                      <span className="text-[#8be9fd]">.importante</span> {'{'}{'\n'}
                      {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">red</span>;{'\n'}
                      {'  '}<span className="text-[#50fa7b]">font-weight</span>: <span className="text-[#f1fa8c]">bold</span>;{'\n'}
                      {'}'}{'\n'}
                      <span className="text-[#ff79c6]">&lt;/style&gt;</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: 'ri-palette-line',
              title: 'Colores y Fondos',
              desc: 'Control total sobre colores, gradientes, imágenes de fondo y sombras',
              color: '#ff79c6'
            },
            {
              icon: 'ri-layout-grid-line',
              title: 'Layout Moderno',
              desc: 'Flexbox y Grid para crear diseños complejos y responsivos',
              color: '#8be9fd'
            },
            {
              icon: 'ri-text',
              title: 'Tipografía',
              desc: 'Fuentes, tamaños, espaciados, alineación y transformaciones de texto',
              color: '#50fa7b'
            },
            {
              icon: 'ri-smartphone-line',
              title: 'Responsividad',
              desc: 'Media queries para adaptar el diseño a diferentes dispositivos',
              color: '#f1fa8c'
            },
            {
              icon: 'ri-magic-line',
              title: 'Animaciones',
              desc: 'Transiciones suaves y animaciones complejas con keyframes',
              color: '#ff79c6'
            },
            {
              icon: 'ri-box-3-line',
              title: 'Modelo de Caja',
              desc: 'Control de márgenes, padding, bordes y dimensiones',
              color: '#8be9fd'
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e2e] rounded-xl p-4 sm:p-5 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <i className={`${item.icon} text-lg sm:text-xl`} style={{ color: item.color }}></i>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#f8f8f2] mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#f8f8f2]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
