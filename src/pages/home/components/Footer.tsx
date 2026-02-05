export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1b3d70] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-16 sm:h-24 w-auto mb-4 sm:mb-6"
            />
            <p className="text-white/70 leading-relaxed mb-2 sm:mb-4 text-sm sm:text-base">
              Facultad de Estudios Superiores Acatlán
            </p>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              Matemáticas Aplicadas y Computación
            </p>
          </div>

          <div>
            <h3 className="text-[#bb8800] font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
              Navegación
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-white hover:text-[#bb8800] transition-colors cursor-pointer hover:underline text-sm sm:text-base"
                >
                  Inicio
                </button>
              </li>
              <li>
                <a
                  href="https://mac.acatlan.unam.mx/media/temarios/1644/1607.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#bb8800] transition-colors cursor-pointer hover:underline text-sm sm:text-base"
                >
                  Temario Oficial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#bb8800] font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
              Contacto
            </h3>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-[#bb8800] text-lg sm:text-xl flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                <span className="text-white/80 text-sm sm:text-base break-all">dr87152@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-linkedin-box-line text-[#bb8800] text-lg sm:text-xl flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                <a
                  href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#bb8800] transition-colors cursor-pointer hover:underline text-sm sm:text-base"
                >
                  Diego Romero Mora
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-[#bb8800] text-lg sm:text-xl flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                <span className="text-white/80 text-sm sm:text-base">FES Acatlán, UNAM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4 order-2 sm:order-1">
              <a
                href="https://www.facebook.com/FESAcatlan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#bb8800] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill text-white text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://twitter.com/FESAcatlan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#bb8800] transition-colors cursor-pointer"
              >
                <i className="ri-twitter-x-line text-white text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com/user/FESAcatlan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#bb8800] transition-colors cursor-pointer"
              >
                <i className="ri-youtube-fill text-white text-lg sm:text-xl"></i>
              </a>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm text-center order-1 sm:order-2">
              © 2025 UNAM FES Acatlán - Todos los derechos reservados
            </p>

            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm order-3">
              <a href="#" className="text-gray-400 hover:text-[#bb8800] transition-colors cursor-pointer hover:underline">
                Aviso de Privacidad
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#bb8800] transition-colors cursor-pointer hover:underline">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
