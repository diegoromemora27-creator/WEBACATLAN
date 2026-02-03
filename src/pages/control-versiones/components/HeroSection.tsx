export default function HeroSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#58a6ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3fb950] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <i className="ri-git-branch-line text-6xl text-[#58a6ff]"></i>
            <i className="ri-github-fill text-6xl text-white"></i>
          </div>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Git & GitHub
          </h1>
          <p className="text-[#8b949e] text-lg sm:text-xl max-w-3xl mx-auto font-light">
            El sistema de control de versiones que revolucionó el desarrollo de software
          </p>
          <div className="w-24 h-1 bg-[#3fb950] mx-auto rounded-full mt-8"></div>
        </div>

        {/* Main Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Git Card */}
          <div className="bg-[#161b22] rounded-xl p-8 border border-[#30363d] hover:border-[#58a6ff] transition-all duration-300 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-[#58a6ff] to-[#1f6feb] rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="ri-git-branch-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-2xl text-white mb-4 text-center">
              Git (El Motor)
            </h3>
            <p className="text-[#8b949e] text-base leading-relaxed text-center">
              Es un sistema de control de versiones local. Imagina que es una <span className="text-[#58a6ff] font-semibold">"máquina del tiempo"</span> que instalas en tu computadora para rastrear cada cambio en tu código. Te permite volver a una versión anterior si algo sale mal.
            </p>
            <div className="mt-6 pt-6 border-t border-[#30363d]">
              <div className="flex items-center justify-center space-x-2 text-[#3fb950] font-semibold text-sm">
                <i className="ri-time-line"></i>
                <span>Control de Versiones Local</span>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-[#161b22] rounded-xl p-8 border border-[#30363d] hover:border-[#3fb950] transition-all duration-300 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3fb950] to-[#2ea043] rounded-lg flex items-center justify-center mx-auto mb-6">
              <i className="ri-github-fill text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-2xl text-white mb-4 text-center">
              GitHub (La Plataforma)
            </h3>
            <p className="text-[#8b949e] text-base leading-relaxed text-center">
              Es una plataforma en la nube que aloja proyectos que usan Git. Es donde <span className="text-[#3fb950] font-semibold">compartes tu código con el mundo</span>, colaboras con otros y guardas una copia de seguridad de tus repositorios.
            </p>
            <div className="mt-6 pt-6 border-t border-[#30363d]">
              <div className="flex items-center justify-center space-x-2 text-[#58a6ff] font-semibold text-sm">
                <i className="ri-cloud-line"></i>
                <span>Colaboración en la Nube</span>
              </div>
            </div>
          </div>
        </div>

        {/* SDLC Importance */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#161b22] to-[#1c2128] rounded-xl p-8 border border-[#30363d] shadow-xl">
            <h3 className="font-bold text-xl text-white mb-6 text-center flex items-center justify-center gap-3">
              <i className="ri-refresh-line text-[#58a6ff]"></i>
              Importancia en el Ciclo de Vida del Software (SDLC)
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#58a6ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-team-line text-2xl text-[#58a6ff]"></i>
                </div>
                <p className="text-[#8b949e] text-sm">
                  Permiten que <span className="text-white font-semibold">100 personas</span> trabajen en el mismo archivo sin borrarse el trabajo entre sí
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#3fb950]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-rocket-line text-2xl text-[#3fb950]"></i>
                </div>
                <p className="text-[#8b949e] text-sm">
                  Facilitan la <span className="text-white font-semibold">integración continua (CI/CD)</span>
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#f85149]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className="ri-briefcase-line text-2xl text-[#f85149]"></i>
                </div>
                <p className="text-[#8b949e] text-sm">
                  Sirven como el <span className="text-white font-semibold">"Portafolio"</span> oficial de un desarrollador en el mundo TI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
