export default function AnimationsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Transiciones y Animaciones
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Añade movimiento y vida a tus diseños con transiciones suaves y animaciones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Transiciones */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#8be9fd]/10 flex items-center justify-center">
                <i className="ri-speed-line text-[#8be9fd] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Transiciones</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-4">
              Suavizan cambios de propiedades CSS
            </p>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10 mb-4">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#8be9fd]">.boton</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">background-color</span>: <span className="text-[#f1fa8c]">#007bff</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">white</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">padding</span>: <span className="text-[#f1fa8c]">10px 20px</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">transition</span>: <span className="text-[#f1fa8c]">all 0.3s ease</span>;{'\n'}
                  {'}'}{'\n\n'}
                  <span className="text-[#8be9fd]">.boton:hover</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">background-color</span>: <span className="text-[#f1fa8c]">#0056b3</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">transform</span>: <span className="text-[#f1fa8c]">translateY(-2px)</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">box-shadow</span>: <span className="text-[#f1fa8c]">0 4px 8px rgba(0,0,0,.2)</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            {/* Demo interactivo */}
            <div className="bg-[#282a36] rounded-lg p-4 border border-[#8be9fd]/20">
              <p className="text-xs text-[#f8f8f2]/70 mb-3 text-center">Pasa el mouse sobre el botón:</p>
              <div className="flex justify-center">
                <button
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: '#007bff' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0056b3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#007bff';
                  }}
                >
                  Hover Me
                </button>
              </div>
            </div>
          </div>

          {/* Animaciones con Keyframes */}
          <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#50fa7b]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#50fa7b]/10 flex items-center justify-center">
                <i className="ri-magic-line text-[#50fa7b] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Animaciones con @keyframes</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#f8f8f2]/70 mb-4">
              Para animaciones más complejas y controladas
            </p>
            <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10 mb-4">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#ff79c6]">@keyframes</span> <span className="text-[#f1fa8c]">fadeIn</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#8be9fd]">0%</span> {'{'}{'\n'}
                  {'    '}<span className="text-[#50fa7b]">opacity</span>: <span className="text-[#f1fa8c]">0</span>;{'\n'}
                  {'    '}<span className="text-[#50fa7b]">transform</span>: <span className="text-[#f1fa8c]">translateY(20px)</span>;{'\n'}
                  {'  }'}{'\n'}
                  {'  '}<span className="text-[#8be9fd]">100%</span> {'{'}{'\n'}
                  {'    '}<span className="text-[#50fa7b]">opacity</span>: <span className="text-[#f1fa8c]">1</span>;{'\n'}
                  {'    '}<span className="text-[#50fa7b]">transform</span>: <span className="text-[#f1fa8c]">translateY(0)</span>;{'\n'}
                  {'  }'}{'\n'}
                  {'}'}{'\n\n'}
                  <span className="text-[#8be9fd]">.elemento</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">animation</span>: <span className="text-[#f1fa8c]">fadeIn 1s ease-out</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            {/* Demo animación */}
            <div className="bg-[#282a36] rounded-lg p-4 border border-[#50fa7b]/20">
              <p className="text-xs text-[#f8f8f2]/70 mb-3 text-center">Animación fadeIn en loop:</p>
              <div className="flex justify-center">
                <div
                  className="w-20 h-20 bg-gradient-to-br from-[#50fa7b] to-[#8be9fd] rounded-lg flex items-center justify-center"
                  style={{
                    animation: 'fadeInDemo 2s ease-in-out infinite',
                  }}
                >
                  <i className="ri-star-fill text-white text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Propiedades de animación */}
        <div className="mt-8 bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#ff79c6]/20">
          <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-4 flex items-center gap-2">
            <i className="ri-settings-3-line text-[#ff79c6]"></i>
            Propiedades de Animación
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { prop: 'animation-name', desc: 'Nombre del @keyframes', example: 'fadeIn' },
              { prop: 'animation-duration', desc: 'Duración de la animación', example: '1s, 500ms' },
              { prop: 'animation-timing-function', desc: 'Curva de velocidad', example: 'ease, linear, ease-in-out' },
              { prop: 'animation-delay', desc: 'Retraso antes de iniciar', example: '0.5s' },
              { prop: 'animation-iteration-count', desc: 'Número de repeticiones', example: '1, 3, infinite' },
              { prop: 'animation-direction', desc: 'Dirección de la animación', example: 'normal, reverse, alternate' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#282a36] rounded-lg p-3 border border-[#f8f8f2]/10"
              >
                <code className="text-[10px] sm:text-xs text-[#ff79c6] font-bold block mb-1">
                  {item.prop}
                </code>
                <p className="text-[10px] sm:text-xs text-[#f8f8f2]/70 mb-2">{item.desc}</p>
                <code className="text-[10px] text-[#50fa7b]">{item.example}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDemo {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
          }
        }
      `}</style>
    </section>
  );
}
