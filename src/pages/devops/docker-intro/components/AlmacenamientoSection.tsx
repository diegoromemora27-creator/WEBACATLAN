export default function AlmacenamientoSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-database-2-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">Persistencia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Almacenamiento y Persistencia
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Por defecto, los contenedores son efímeros: si los eliminas, desaparecen sus datos. Docker ofrece distintas formas de mantener información persistente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Volúmenes */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg mb-4">
              <i className="ri-hard-drive-2-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-3">
              Volúmenes
            </h3>
            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              Actúan como <strong className="text-[#2560ff]">discos duros externos</strong> conectados al contenedor. Almacenan datos que persisten aunque el contenedor deje de existir.
            </p>
            <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4">
              <div className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-[#2560ff] text-lg flex-shrink-0 mt-0.5"></i>
                <p className="text-xs sm:text-sm text-[#1D2327]/80">
                  <strong>Ejemplo:</strong> Guardar los datos de una base de datos MySQL en un volumen para no perderlos al reiniciar.
                </p>
              </div>
            </div>
          </div>

          {/* Bind Mounts */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg mb-4">
              <i className="ri-folder-shared-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-3">
              Bind Mounts
            </h3>
            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              Permiten conectar un <strong className="text-[#0DB7ED]">directorio local del host</strong> directamente al contenedor. Muy útil en desarrollo, ya que cualquier cambio en tu archivo local se refleja en tiempo real dentro del contenedor.
            </p>
            <div className="bg-[#0DB7ED]/10 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <i className="ri-code-s-slash-line text-[#0DB7ED] text-lg"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/80 font-medium">Ideal para desarrollo</span>
              </div>
            </div>
          </div>

          {/* Overlay Filesystem */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg mb-4">
              <i className="ri-stack-line text-white text-xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-3">
              Overlay Filesystem
            </h3>
            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              Usa un sistema de <strong className="text-[#2560ff]">capas superpuestas</strong>, donde cada instrucción de una imagen añade una nueva capa. Esto ahorra espacio, ya que distintas imágenes pueden compartir capas comunes.
            </p>
            <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4">
              <div className="flex items-center gap-2">
                <i className="ri-save-line text-[#2560ff] text-lg"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/80 font-medium">Optimiza espacio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparación */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-contrast-2-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              ¿Cuándo usar cada uno?
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <h4 className="font-bold text-base sm:text-lg mb-2">Volúmenes</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Bases de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Datos de producción</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Backups</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <h4 className="font-bold text-base sm:text-lg mb-2">Bind Mounts</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Desarrollo local</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Hot reload</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Configuraciones</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <h4 className="font-bold text-base sm:text-lg mb-2">Overlay FS</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Imágenes base</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Capas compartidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                  <span>Optimización</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
