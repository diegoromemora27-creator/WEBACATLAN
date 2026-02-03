export default function NetflixSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E50914]/20 px-4 py-2 rounded-full mb-4">
            <i className="ri-netflix-fill text-[#E50914] text-xl"></i>
            <span className="text-white text-sm font-semibold">Caso de Estudio: Netflix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Clean Architecture
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Netflix necesita ser "Limpia" porque funciona en miles de dispositivos (TVs, celulares, refrigeradores).
          </p>
        </div>

        {/* Two Main Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Independencia de Frameworks */}
          <div className="bg-[#1F1F1F] rounded-xl border border-[#2F2F2F] p-8 hover:border-[#E50914] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-[#E50914]/20 rounded-lg mb-4">
              <i className="ri-git-branch-line text-[#E50914] text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Independencia de Frameworks
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Si Netflix decide dejar de usar una base de datos específica por una más rápida, el código que decide <strong>"qué serie recomendarte"</strong> no cambia. El "corazón" del negocio es independiente de la tecnología.
            </p>
          </div>

          {/* Testabilidad */}
          <div className="bg-[#1F1F1F] rounded-xl border border-[#2F2F2F] p-8 hover:border-[#E50914] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-[#E50914]/20 rounded-lg mb-4">
              <i className="ri-test-tube-line text-[#E50914] text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Testabilidad
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Permite probar si el botón de <strong>"Saltar Intro"</strong> funciona correctamente en un entorno simulado antes de lanzarlo a millones de personas.
            </p>
          </div>
        </div>

        {/* UI Description */}
        <div className="bg-gradient-to-r from-[#E50914] to-[#B20710] rounded-2xl p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg flex-shrink-0">
              <i className="ri-movie-2-line text-white text-xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Descripción de la UI</h4>
              <p className="text-white/95 leading-relaxed mb-4">
                Diseño cinemático e inmersivo. Utiliza un fondo oscuro profundo para que los pósteres de las películas resalten. La interfaz es modular, con filas horizontales que permiten un scroll infinito, priorizando las imágenes de alta resolución sobre el texto descriptivo.
              </p>
              <a 
                href="https://medium.com/@_sroldan/clean-architecture-la-forma-de-crear-c%C3%B3digo-limpio-testable-y-escalable-9af26ccf2028"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#E50914] px-5 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap cursor-pointer"
              >
                <span>Más Información</span>
                <i className="ri-external-link-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
