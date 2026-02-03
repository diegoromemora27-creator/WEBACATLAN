export default function CommonPropertiesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Propiedades Más Usadas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Las propiedades CSS esenciales que usarás constantemente
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Texto y Fuentes */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#ff79c6]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#ff79c6]/10 flex items-center justify-center">
                <i className="ri-text text-[#ff79c6] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Texto y Fuentes</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
                <pre className="text-[10px] sm:text-xs overflow-x-auto">
                  <code>
                    <span className="text-[#8be9fd]">body</span> {'{'}{'\n'}
                    {'  '}<span className="text-[#50fa7b]">font-family</span>: <span className="text-[#f1fa8c]">Arial, sans-serif</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">font-size</span>: <span className="text-[#f1fa8c]">16px</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">#333</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">line-height</span>: <span className="text-[#f1fa8c]">1.5</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">text-align</span>: <span className="text-[#f1fa8c]">left</span>;{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
              <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
                <pre className="text-[10px] sm:text-xs overflow-x-auto">
                  <code>
                    <span className="text-[#8be9fd]">h1</span> {'{'}{'\n'}
                    {'  '}<span className="text-[#50fa7b]">font-size</span>: <span className="text-[#f1fa8c]">32px</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">font-weight</span>: <span className="text-[#f1fa8c]">bold</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">text-transform</span>: <span className="text-[#f1fa8c]">uppercase</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">text-decoration</span>: <span className="text-[#f1fa8c]">none</span>;{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Colores y Fondos */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#8be9fd]/10 flex items-center justify-center">
                <i className="ri-palette-line text-[#8be9fd] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Colores y Fondos</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
                <pre className="text-[10px] sm:text-xs overflow-x-auto">
                  <code>
                    <span className="text-[#8be9fd]">body</span> {'{'}{'\n'}
                    {'  '}<span className="text-[#50fa7b]">background-color</span>: <span className="text-[#f1fa8c]">#f5f5f5</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">background-image</span>: <span className="text-[#f1fa8c]">url('bg.jpg')</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">background-size</span>: <span className="text-[#f1fa8c]">cover</span>;{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
              <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
                <pre className="text-[10px] sm:text-xs overflow-x-auto">
                  <code>
                    <span className="text-[#8be9fd]">.card</span> {'{'}{'\n'}
                    {'  '}<span className="text-[#50fa7b]">background-color</span>: <span className="text-[#f1fa8c]">white</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">border</span>: <span className="text-[#f1fa8c]">1px solid #ddd</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">border-radius</span>: <span className="text-[#f1fa8c]">8px</span>;{'\n'}
                    {'  '}<span className="text-[#50fa7b]">box-shadow</span>: <span className="text-[#f1fa8c]">0 2px 6px rgba(0,0,0,.15)</span>;{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Display y Layout */}
          <div className="bg-[#282a36] rounded-xl p-4 sm:p-6 border border-[#50fa7b]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#50fa7b]/10 flex items-center justify-center">
                <i className="ri-layout-grid-line text-[#50fa7b] text-lg"></i>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2]">Display y Layout Básico</h3>
            </div>
            <div className="bg-[#1e1e2e] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
              <pre className="text-[10px] sm:text-xs overflow-x-auto">
                <code>
                  <span className="text-[#8be9fd]">header</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">display</span>: <span className="text-[#f1fa8c]">flex</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">justify-content</span>: <span className="text-[#f1fa8c]">space-between</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">align-items</span>: <span className="text-[#f1fa8c]">center</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">position</span>: <span className="text-[#f1fa8c]">fixed</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">top</span>: <span className="text-[#f1fa8c]">0</span>;{'\n'}
                  {'  '}<span className="text-[#50fa7b]">z-index</span>: <span className="text-[#f1fa8c]">100</span>;{'\n'}
                  {'}'}{'\n\n'}
                  <span className="text-[#8be9fd]">nav a</span> {'{'}{'\n'}
                  {'  '}<span className="text-[#50fa7b]">margin-right</span>: <span className="text-[#f1fa8c]">16px</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="mt-3 text-[10px] sm:text-xs text-[#f8f8f2]/70">
              <strong className="text-[#50fa7b]">Propiedades clave:</strong> display (block, inline, flex, grid), position (static, relative, absolute, fixed, sticky), top, left, right, bottom, z-index
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
