export default function SpotifySection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#191414] via-[#1DB954]/10 to-[#191414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1DB954]/20 px-4 py-2 rounded-full mb-4">
            <i className="ri-spotify-fill text-[#1DB954] text-xl"></i>
            <span className="text-white text-sm font-semibold">Caso de Estudio: Spotify</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Principios SOLID en TypeScript
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Spotify aplica los 5 principios SOLID para mantener un código escalable y mantenible.
          </p>
        </div>

        {/* SOLID Principles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Single Responsibility */}
          <div className="bg-[#282828] rounded-xl border border-[#3E3E3E] p-6 hover:border-[#1DB954] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1DB954] rounded-lg text-white font-bold">
                S
              </div>
              <h3 className="text-lg font-bold text-white">Single Responsibility</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              En Spotify, el servicio que gestiona los pagos de tu suscripción Premium es totalmente distinto al servicio que reproduce la música. Si el sistema de pagos se cae, tú deberías poder seguir escuchando tus canciones descargadas.
            </p>
          </div>

          {/* Open/Closed */}
          <div className="bg-[#282828] rounded-xl border border-[#3E3E3E] p-6 hover:border-[#1DB954] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1DB954] rounded-lg text-white font-bold">
                O
              </div>
              <h3 className="text-lg font-bold text-white">Open/Closed</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Spotify está "Abierto a extensión". Si quieren agregar un nuevo tipo de contenido (como Audiolibros), no modifican el código de las "Canciones". Simplemente extienden el sistema para que soporte el nuevo formato sin romper el reproductor actual.
            </p>
          </div>

          {/* Liskov Substitution */}
          <div className="bg-[#282828] rounded-xl border border-[#3E3E3E] p-6 hover:border-[#1DB954] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1DB954] rounded-lg text-white font-bold">
                L
              </div>
              <h3 className="text-lg font-bold text-white">Liskov Substitution</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Si tienes una clase Reproductor y creas una subclase ReproductorPremium, esta debe poder usarse en cualquier lugar donde se usaba la básica sin que la app explote. Ambas deben poder "Play", "Pause" y "Stop" de forma predecible.
            </p>
          </div>

          {/* Interface Segregation */}
          <div className="bg-[#282828] rounded-xl border border-[#3E3E3E] p-6 hover:border-[#1DB954] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1DB954] rounded-lg text-white font-bold">
                I
              </div>
              <h3 className="text-lg font-bold text-white">Interface Segregation</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              No obligues a un "Usuario Gratuito" a tener métodos en su código como DescargarParaModoOffline(). Crea interfaces específicas: una para UsuarioBasico y otra para UsuarioPremium.
            </p>
          </div>

          {/* Dependency Inversion */}
          <div className="bg-[#282828] rounded-xl border border-[#3E3E3E] p-6 hover:border-[#1DB954] transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1DB954] rounded-lg text-white font-bold">
                D
              </div>
              <h3 className="text-lg font-bold text-white">Dependency Inversion</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              El reproductor de Spotify no debería depender de "Unos audífonos Sony específicos". Depende de una "Salida de Audio" genérica (interfaz). Así, puede sonar en tus cascos, en el carro o en un altavoz Bluetooth.
            </p>
          </div>
        </div>

        {/* UI Description */}
        <div className="bg-gradient-to-r from-[#1DB954] to-[#1ED760] rounded-2xl p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-black/30 rounded-lg flex-shrink-0">
              <i className="ri-music-2-line text-white text-xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Descripción de la UI</h4>
              <p className="text-white/95 leading-relaxed mb-4">
                Diseño basado en el "Dark Mode" con acentos en verde vibrante. Destaca por el uso de gradientes de color que se adaptan al arte del álbum actual, manteniendo una interfaz limpia donde los controles de reproducción son siempre los protagonistas en la parte inferior.
              </p>
              <a 
                href="https://www.geeksforgeeks.org/system-design/solid-principle-in-programming-understand-with-real-life-examples/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#1DB954] px-5 py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap cursor-pointer"
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
