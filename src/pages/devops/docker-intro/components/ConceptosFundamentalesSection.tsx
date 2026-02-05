export default function ConceptosFundamentalesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0DB7ED]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-book-open-line text-[#0DB7ED] text-base sm:text-lg"></i>
            <span className="text-[#0DB7ED] text-xs sm:text-sm font-semibold">Fundamentos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Conceptos Fundamentales
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Los pilares esenciales para entender cómo funciona Docker
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contenedor */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-box-3-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Contenedor
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Un contenedor es como una <strong className="text-[#2560ff]">"caja sellada"</strong> que contiene tu aplicación junto con todo lo que necesita para ejecutarse. Si en tu computadora tienes distintos contenedores, todos pueden coexistir sin interferirse. Cada uno cree que tiene su propio sistema, aunque en realidad comparte recursos del host.
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-[#2560ff] text-lg flex-shrink-0 mt-0.5"></i>
                    <p className="text-xs sm:text-sm text-[#1D2327]/80">
                      <strong>Ejemplo:</strong> Puedes tener un contenedor que corre Nginx y otro que ejecuta tu backend de Flask, comunicándose entre sí sin complicaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-image-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Imagen
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Las imágenes son como <strong className="text-[#0DB7ED]">recetas de cocina</strong>: describen los ingredientes (archivos, dependencias y configuraciones) que definen cómo debe prepararse un contenedor. Son inmutables, por lo que si algo funciona bien, puedes replicarlo infinitas veces sin temor a cambios inesperados.
                </p>
                <div className="bg-[#0DB7ED]/10 rounded-lg p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-[#0DB7ED] text-lg flex-shrink-0 mt-0.5"></i>
                    <p className="text-xs sm:text-sm text-[#1D2327]/80">
                      <strong>Ejemplo:</strong> La imagen oficial <code className="bg-[#1D2327]/10 px-1.5 py-0.5 rounded text-[#0DB7ED]">python:3.10</code> contiene todo lo necesario para ejecutar aplicaciones Python en esa versión.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dockerfile */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-file-code-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Dockerfile
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-3">
                  Es el <strong className="text-[#2560ff]">recetario</strong>, una lista paso a paso que indica cómo construir una imagen. Cada instrucción (FROM, COPY, RUN, CMD, etc.) es como añadir un ingrediente o realizar una acción.
                </p>
                <div className="bg-[#2560ff]/10 rounded-lg p-3 sm:p-4">
                  <div className="flex items-start gap-2">
                    <i className="ri-checkbox-circle-line text-[#2560ff] text-lg flex-shrink-0 mt-0.5"></i>
                    <p className="text-xs sm:text-sm text-[#1D2327]/80">
                      <strong>Ejemplo:</strong> Un Dockerfile que parte de <code className="bg-[#1D2327]/10 px-1.5 py-0.5 rounded text-[#2560ff]">node:18</code> y copia el código de tu proyecto para instalar dependencias con <code className="bg-[#1D2327]/10 px-1.5 py-0.5 rounded text-[#2560ff]">npm install</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Docker Engine */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#0DB7ED] rounded-lg flex-shrink-0">
                <i className="ri-settings-3-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Docker Engine
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed">
                  Es el <strong className="text-[#0DB7ED]">corazón de Docker</strong>, el motor que se encarga de crear, ejecutar y administrar contenedores. Interpreta las órdenes del usuario y coordina la gestión de imágenes y redes.
                </p>
              </div>
            </div>
          </div>

          {/* Docker CLI */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300 md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#2560ff] rounded-lg flex-shrink-0">
                <i className="ri-terminal-box-line text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D2327] mb-2">
                  Docker CLI
                </h3>
                <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
                  La interfaz de línea de comandos es el <strong className="text-[#2560ff]">puente entre tú y el motor de Docker</strong>. Con comandos como docker build, docker run o docker ps, puedes construir, levantar y monitorear contenedores con facilidad.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-[#2560ff]/10 rounded-lg p-3">
                    <code className="text-xs sm:text-sm text-[#2560ff] font-mono">docker build</code>
                    <p className="text-xs text-[#1D2327]/60 mt-1">Construir imagen</p>
                  </div>
                  <div className="bg-[#2560ff]/10 rounded-lg p-3">
                    <code className="text-xs sm:text-sm text-[#2560ff] font-mono">docker run</code>
                    <p className="text-xs text-[#1D2327]/60 mt-1">Ejecutar contenedor</p>
                  </div>
                  <div className="bg-[#2560ff]/10 rounded-lg p-3">
                    <code className="text-xs sm:text-sm text-[#2560ff] font-mono">docker ps</code>
                    <p className="text-xs text-[#1D2327]/60 mt-1">Listar contenedores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
