export default function RegistroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-cloud-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">Distribución</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Registro y Distribución
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Cómo almacenar, versionar y compartir imágenes Docker
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Registry / Docker Hub */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-cloud-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Registry / Docker Hub
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
                  Es el <strong className="text-[#2560ff]">"GitHub" de las imágenes</strong>. Permite almacenar, versionar y compartir imágenes con otros usuarios.
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4 mb-3">
                  <div className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-[#2560ff] text-lg flex-shrink-0 mt-0.5"></i>
                    <p className="text-xs sm:text-sm text-[#1D2327]/80">
                      <strong>Ejemplo:</strong> Descargar con <code className="bg-[#1D2327]/10 px-1.5 py-0.5 rounded text-[#2560ff]">docker pull nginx</code> la imagen oficial de Nginx desde Docker Hub.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1D2327]/70">
                    <i className="ri-check-line text-[#2560ff]"></i>
                    <span>Repositorios públicos y privados</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1D2327]/70">
                    <i className="ri-check-line text-[#2560ff]"></i>
                    <span>Imágenes oficiales verificadas</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1D2327]/70">
                    <i className="ri-check-line text-[#2560ff]"></i>
                    <span>Integración con CI/CD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-price-tag-3-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Tags
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
                  Las etiquetas sirven para <strong className="text-[#0DB7ED]">versionar imágenes</strong>, igual que etiquetas de versiones de software.
                </p>
                <div className="space-y-3">
                  <div className="bg-[#0DB7ED]/10 rounded-lg p-3">
                    <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono">nginx:latest</code>
                    <p className="text-xs text-[#1D2327]/60 mt-1">Última versión disponible</p>
                  </div>
                  <div className="bg-[#0DB7ED]/10 rounded-lg p-3">
                    <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono">nginx:1.23</code>
                    <p className="text-xs text-[#1D2327]/60 mt-1">Versión específica 1.23</p>
                  </div>
                  <div className="bg-[#0DB7ED]/10 rounded-lg p-3">
                    <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono">nginx:alpine</code>
                    <p className="text-xs text-[#1D2327]/60 mt-1">Versión ligera basada en Alpine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flujo de Trabajo */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-git-branch-line text-white text-xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Flujo de Trabajo con Registry
            </h3>
          </div>

          <div className="grid sm:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg">
                  <span className="font-bold text-sm">1</span>
                </div>
                <i className="ri-hammer-line text-xl"></i>
              </div>
              <h4 className="font-bold text-sm sm:text-base mb-2">Build</h4>
              <p className="text-xs sm:text-sm text-white/90">Construir imagen localmente</p>
              <code className="text-xs text-white/70 mt-2 block">docker build -t app:v1 .</code>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg">
                  <span className="font-bold text-sm">2</span>
                </div>
                <i className="ri-price-tag-3-line text-xl"></i>
              </div>
              <h4 className="font-bold text-sm sm:text-base mb-2">Tag</h4>
              <p className="text-xs sm:text-sm text-white/90">Etiquetar para registry</p>
              <code className="text-xs text-white/70 mt-2 block">docker tag app:v1 user/app:v1</code>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg">
                  <span className="font-bold text-sm">3</span>
                </div>
                <i className="ri-upload-cloud-line text-xl"></i>
              </div>
              <h4 className="font-bold text-sm sm:text-base mb-2">Push</h4>
              <p className="text-xs sm:text-sm text-white/90">Subir al registry</p>
              <code className="text-xs text-white/70 mt-2 block">docker push user/app:v1</code>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg">
                  <span className="font-bold text-sm">4</span>
                </div>
                <i className="ri-download-cloud-line text-xl"></i>
              </div>
              <h4 className="font-bold text-sm sm:text-base mb-2">Pull</h4>
              <p className="text-xs sm:text-sm text-white/90">Descargar en otro host</p>
              <code className="text-xs text-white/70 mt-2 block">docker pull user/app:v1</code>
            </div>
          </div>

          <div className="mt-6 p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-start gap-3">
              <i className="ri-lightbulb-line text-xl flex-shrink-0 mt-0.5"></i>
              <div>
                <h4 className="font-bold text-sm sm:text-base mb-2">Mejores Prácticas</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                    <span>Usa tags específicos en producción (evita <code className="bg-white/10 px-1 rounded">latest</code>)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                    <span>Implementa escaneo de vulnerabilidades en imágenes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-right-s-line flex-shrink-0 mt-0.5"></i>
                    <span>Mantén imágenes ligeras usando Alpine o Distroless</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
