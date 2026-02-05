export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e2e] via-[#2a2a3e] to-[#1e1e2e]" />

      {/* Patrón de puntos */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #8be9fd 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <span className="px-4 py-2 bg-[#ff79c6]/20 text-[#ff79c6] rounded-full text-sm font-medium border border-[#ff79c6]/30">
            Frameworks CSS
          </span>
          <span className="px-4 py-2 bg-[#50fa7b]/20 text-[#50fa7b] rounded-full text-sm font-medium border border-[#50fa7b]/30">
            Buenas Prácticas
          </span>
          <span className="px-4 py-2 bg-[#8be9fd]/20 text-[#8be9fd] rounded-full text-sm font-medium border border-[#8be9fd]/30">
            BEM
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff79c6] via-[#8be9fd] to-[#50fa7b] bg-clip-text text-transparent">
          Conceptos Avanzados
        </h1>

        <p className="text-xl md:text-2xl text-[#f8f8f2]/80 text-center max-w-3xl mx-auto mb-12">
          Frameworks CSS, metodologías de nomenclatura y buenas prácticas para código escalable y
          mantenible
        </p>

        {/* Ejemplo de código visual */}
        <div className="bg-[#282a36] rounded-xl p-6 md:p-8 border border-[#8be9fd]/30 shadow-2xl max-w-4xl mx-auto overflow-x-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5555]" />
            <div className="w-3 h-3 rounded-full bg-[#f1fa8c]" />
            <div className="w-3 h-3 rounded-full bg-[#50fa7b]" />
            <span className="ml-3 text-[#f8f8f2]/60 text-sm">ejemplo-bem.html</span>
          </div>
          <pre className="text-sm md:text-base leading-relaxed">
            <code>
              <span className="text-[#ff79c6]">&lt;article</span>{' '}
              <span className="text-[#50fa7b]">class=</span>
              <span className="text-[#f1fa8c]">"card card--featured"</span>
              <span className="text-[#ff79c6]">&gt;</span>{'\n'}
              {'  '}
              <span className="text-[#ff79c6]">&lt;h3</span>{' '}
              <span className="text-[#50fa7b]">class=</span>
              <span className="text-[#f1fa8c]">"card__title"</span>
              <span className="text-[#ff79c6]">&gt;</span>
              <span className="text-[#f8f8f2]">Artículo destacado</span>
              <span className="text-[#ff79c6]">&lt;/h3&gt;</span>
              {'\n'}
              {'  '}
              <span className="text-[#ff79c6]">&lt;p</span>{' '}
              <span className="text-[#50fa7b]">class=</span>
              <span className="text-[#f1fa8c]">"card__text"</span>
              <span className="text-[#ff79c6]">&gt;</span>
              <span className="text-[#f8f8f2]">Contenido...</span>
              <span className="text-[#ff79c6]">&lt;/p&gt;</span>
              {'\n'}
              {'  '}
              <span className="text-[#ff79c6]">&lt;button</span>{' '}
              <span className="text-[#50fa7b]">class=</span>
              <span className="text-[#f1fa8c]">"card__button button--primary"</span>
              <span className="text-[#ff79c6]">&gt;</span>{'\n'}
              {'    '}
              <span className="text-[#f8f8f2]">Leer más</span>
              {'\n'}
              {'  '}
              <span className="text-[#ff79c6]">&lt;/button&gt;</span>
              {'\n'}
              <span className="text-[#ff79c6]">&lt;/article&gt;</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}