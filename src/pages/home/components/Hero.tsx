
export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0">
      <div className="absolute inset-0">
        <img
          src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/bb5696a8477cb77db983f2fe85108259.jpeg"
          alt="Campus UNAM"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b3d70]/90 via-[#1b3d70]/85 to-[#1b3d70]/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide">
            Matemáticas Aplicadas y Computación &gt; Desarrollo de Aplicaciones Web
          </div>
          
          <h1 className="font-bold text-white mb-4 sm:mb-6">
            <div className="text-3xl sm:text-5xl md:text-7xl mb-1 sm:mb-2">DESARROLLO DE</div>
            <div className="text-4xl sm:text-6xl md:text-8xl">APLICACIONES WEB</div>
          </h1>
          
          <p className="text-white/90 text-base sm:text-xl md:text-2xl font-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Construye soluciones digitales con tecnología de vanguardia
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#bb8800] flex items-center justify-center border-3 sm:border-4 border-white shadow-lg">
                <i className="ri-code-s-slash-line text-white text-base sm:text-xl"></i>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#bb8800] flex items-center justify-center border-3 sm:border-4 border-white shadow-lg">
                <i className="ri-server-line text-white text-base sm:text-xl"></i>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#bb8800] flex items-center justify-center border-3 sm:border-4 border-white shadow-lg">
                <i className="ri-database-2-line text-white text-base sm:text-xl"></i>
              </div>
            </div>
            <span className="text-white text-sm sm:text-lg font-medium text-center">64 horas de experiencia práctica intensiva</span>
          </div>

          <a
            href="https://mac.acatlan.unam.mx/media/temarios/1644/1607.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#bb8800] text-black font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#d49a00] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 whitespace-nowrap cursor-pointer"
          >
            <span>Ver Temario Oficial</span>
            <i className="ri-file-text-line text-lg sm:text-xl"></i>
          </a>

          <a
            href="https://forms.gle/MU7hjm9UvSyZjQK4A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 whitespace-nowrap cursor-pointer mt-4 sm:mt-0 sm:ml-4"
          >
            <i className="ri-survey-line text-lg sm:text-xl"></i>
            <span>Cuéntanos sobre ti</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl sm:text-3xl"></i>
      </div>
    </section>
  );
}
