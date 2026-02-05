
export default function FrameworkIntegrationSection() {
  return (
    <section className="py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8be9fd] mb-6">
            Cómo Encajan las Buenas Prácticas con los Frameworks
          </h2>
          <p className="text-lg text-[#f8f8f2]/80 max-w-3xl mx-auto">
            Combina las clases de frameworks con metodologías como BEM para código limpio y escalable
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Con Bootstrap */}
          <div className="bg-gradient-to-br from-[#282a36] to-[#1e1e2e] rounded-2xl p-8 border border-[#ff79c6]/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff79c6]/20 rounded-xl">
                <i className="ri-bootstrap-line text-3xl text-[#ff79c6]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#ff79c6]">Con Bootstrap</h3>
                <p className="text-[#f8f8f2]/60 text-sm">Componentes + BEM</p>
              </div>
            </div>

            <p className="text-[#f8f8f2]/80 mb-6 leading-relaxed">
              Usas las clases del framework (
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">.container</code>,
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">.row</code>,
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">.col-6</code>,
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">.btn</code>,
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">.alert</code>) y las combinas con tus propias clases BEM para lógica de negocio.
            </p>

            {/* Code snippet */}
            <div className="bg-[#282a36] rounded-xl p-6 border border-[#ff79c6]/20 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-code-s-slash-line text-[#ff79c6]"></i>
                <span className="text-[#f8f8f2]/60 text-sm">bootstrap-bem.html</span>
              </div>
              <pre className="text-sm leading-relaxed">
                <code>
                  {`<div class="card product-card">
  <div class="card-body product-card__body">
    <h5 class="card-title product-card__title">
      Producto
    </h5>
  </div>
</div>`}
                </code>
              </pre>
            </div>

            {/* Tip */}
            <div className="mt-6 bg-[#ff79c6]/10 rounded-lg p-4 border border-[#ff79c6]/30">
              <div className="flex items-start gap-3">
                <i className="ri-lightbulb-line text-[#ff79c6] text-xl flex-shrink-0 mt-1"></i>
                <p className="text-[#f8f8f2]/80 text-sm">
                  <strong className="text-[#ff79c6]">Tip:</strong> Usa clases de Bootstrap para layout y estilos base, y clases BEM para componentes específicos de tu aplicación.
                </p>
              </div>
            </div>
          </div>

          {/* Con Tailwind */}
          <div className="bg-gradient-to-br from-[#282a36] to-[#1e1e2e] rounded-2xl p-8 border border-[#8be9fd]/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-[#8be9fd]/20 rounded-xl">
                <i className="ri-tailwind-css-line text-3xl text-[#8be9fd]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#8be9fd]">Con Tailwind</h3>
                <p className="text-[#f8f8f2]/60 text-sm">Utility-First + BEM</p>
              </div>
            </div>

            <p className="text-[#f8f8f2]/80 mb-6 leading-relaxed">
              Puedes seguir usando nombres BEM para la estructura y utilidades Tailwind para el estilo.
            </p>

            {/* Code snippet */}
            <div className="bg-[#282a36] rounded-xl p-6 border border-[#8be9fd]/20 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-code-s-slash-line text-[#8be9fd]"></i>
                <span className="text-[#f8f8f2]/60 text-sm">tailwind-bem.html</span>
              </div>
              <pre className="text-sm leading-relaxed">
                <code>
                  {`<article class="card card--featured bg-white shadow-lg p-4">
  <h3 class="card__title text-xl font-bold mb-2">Título</h3>
  <p class="card__text text-sm text-slate-600">Texto…</p>
</article>`}
                </code>
              </pre>
            </div>

            {/* Tip */}
            <div className="mt-6 bg-[#8be9fd]/10 rounded-lg p-4 border border-[#8be9fd]/30">
              <div className="flex items-start gap-3">
                <i className="ri-lightbulb-line text-[#8be9fd] text-xl flex-shrink-0 mt-1"></i>
                <p className="text-[#f8f8f2]/80 text-sm">
                  <strong className="text-[#8be9fd]">Tip:</strong> Mantén un HTML legible con BEM y aprovecha la velocidad de Tailwind para estilos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusión Final */}
        <div className="mt-12 bg-gradient-to-r from-[#ff79c6]/10 via-[#8be9fd]/10 to-[#50fa7b]/10 rounded-2xl p-8 border border-[#f8f8f2]/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-[#50fa7b]/20 rounded-xl flex-shrink-0">
              <i className="ri-check-double-line text-2xl text-[#50fa7b]"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f8f8f2] mb-3">Conclusión</h3>
              <p className="text-[#f8f8f2]/80 text-lg leading-relaxed">
                Así mantienes un HTML legible (por BEM / nombres claros) y al mismo tiempo aprovechas la velocidad de un framework CSS. Lo mejor de ambos mundos: <span className="text-[#50fa7b] font-bold">estructura clara</span> + <span className="text-[#8be9fd] font-bold">desarrollo rápido</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
