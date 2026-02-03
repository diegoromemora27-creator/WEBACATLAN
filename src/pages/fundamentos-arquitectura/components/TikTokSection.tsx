export default function TikTokSection() {
  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#00F2EA]"></div>
        <div className="absolute top-20 left-0 w-full h-1 bg-[#FF0050]"></div>
        <div className="absolute bottom-20 left-0 w-full h-1 bg-[#00F2EA]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF0050]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <i className="ri-tiktok-fill text-white text-xl"></i>
            <span className="text-white text-sm font-semibold">Caso de Estudio: TikTok</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative inline-block">
            KISS (Keep It Simple, Stupid)
            <span className="absolute inset-0 text-[#00F2EA] opacity-50 blur-sm" style={{ transform: 'translate(2px, 2px)' }}>
              KISS (Keep It Simple, Stupid)
            </span>
            <span className="absolute inset-0 text-[#FF0050] opacity-50 blur-sm" style={{ transform: 'translate(-2px, -2px)' }}>
              KISS (Keep It Simple, Stupid)
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            TikTok es el rey del KISS. Su interfaz es ridículamente simple: deslizas hacia arriba para ver más.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Simplicidad sobre complejidad */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-white/10 p-8 hover:border-[#00F2EA] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-2xl mb-6">
              <i className="ri-arrow-up-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Simplicidad sobre Complejidad
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Por detrás hay una IA compleja, pero para el usuario (y para el programador que mantiene esa pantalla), la lógica es directa.
            </p>
          </div>

          {/* Evitar Over-engineering */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-white/10 p-8 hover:border-[#FF0050] transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-2xl mb-6">
              <i className="ri-focus-3-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Evitar Over-engineering
            </h3>
            <p className="text-gray-300 leading-relaxed">
              No añaden 20 botones de configuración en la pantalla principal. Mantienen el código enfocado en lo que realmente importa: el video y el scroll.
            </p>
          </div>
        </div>

        {/* Visual Example - Phone Mockup */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-72 h-[600px] bg-[#0A0A0A] rounded-[3rem] border-8 border-white/20 shadow-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="h-8 bg-black flex items-center justify-between px-8 text-white text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <i className="ri-signal-wifi-fill"></i>
                  <i className="ri-battery-fill"></i>
                </div>
              </div>

              {/* Video Area */}
              <div className="relative h-[calc(100%-2rem)] bg-gradient-to-br from-[#FF0050]/20 to-[#00F2EA]/20 flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-play-circle-line text-white text-6xl mb-4 opacity-50"></i>
                  <p className="text-white text-sm">Video a Pantalla Completa</p>
                </div>

                {/* Side Actions */}
                <div className="absolute right-4 bottom-24 flex flex-col gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full">
                    <i className="ri-heart-line text-white text-xl"></i>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full">
                    <i className="ri-chat-3-line text-white text-xl"></i>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full">
                    <i className="ri-share-forward-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UI Description */}
        <div className="bg-gradient-to-r from-[#00F2EA] via-[#FF0050] to-[#00F2EA] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg flex-shrink-0">
              <i className="ri-smartphone-line text-white text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Descripción de la UI</h4>
              <p className="text-white/95 leading-relaxed">
                Diseño minimalista con mucho "espacio en negro" para maximizar el contraste con el video a pantalla completa. Una sola imagen central grande (el video) y poco texto. Usa el efecto de "glitch" característico de TikTok en los títulos para darle dinamismo y un toque urbano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
