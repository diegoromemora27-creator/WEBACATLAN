export default function DockerfileReactSection() {
  const comandos = [
    {
      comando: 'FROM node:18-alpine as build-stage',
      descripcion: 'Usa la imagen base de Node.js ligera (Alpine) para la compilación y la etiqueta como "build-stage".',
      icon: 'ri-download-cloud-line',
      color: '#2560ff'
    },
    {
      comando: 'WORKDIR /app',
      descripcion: 'Establece el directorio de trabajo dentro del contenedor en /app.',
      icon: 'ri-folder-line',
      color: '#0DB7ED'
    },
    {
      comando: 'COPY package*.json ./',
      descripcion: 'Copia los archivos package.json y package-lock.json al contenedor para instalar dependencias.',
      icon: 'ri-file-copy-line',
      color: '#2560ff'
    },
    {
      comando: 'RUN npm install',
      descripcion: 'Ejecuta la instalación de dependencias de Node.',
      icon: 'ri-terminal-box-line',
      color: '#0DB7ED'
    },
    {
      comando: 'COPY . .',
      descripcion: 'Copia todo el código fuente al contenedor.',
      icon: 'ri-file-transfer-line',
      color: '#2560ff'
    },
    {
      comando: 'ARG REACT_APP_API_URL',
      descripcion: 'Define un argumento de build para la URL de la API (visible solo en build).',
      icon: 'ri-settings-3-line',
      color: '#0DB7ED'
    },
    {
      comando: 'ENV REACT_APP_API_URL=$REACT_APP_API_URL',
      descripcion: 'Establece una variable de entorno para React (debe empezar con REACT_APP_).',
      icon: 'ri-global-line',
      color: '#2560ff'
    },
    {
      comando: 'RUN npm run build',
      descripcion: 'Compila la app React en modo producción, generando la carpeta /build.',
      icon: 'ri-hammer-line',
      color: '#0DB7ED'
    },
    {
      comando: 'FROM nginx:alpine',
      descripcion: 'Cambia a imagen ligera de Nginx para servir archivos estáticos.',
      icon: 'ri-server-line',
      color: '#2560ff'
    },
    {
      comando: 'COPY --from=build-stage ...',
      descripcion: 'Copia la carpeta build de la etapa anterior a Nginx.',
      icon: 'ri-arrow-right-line',
      color: '#0DB7ED'
    },
    {
      comando: 'EXPOSE 80',
      descripcion: 'Expone el puerto 80 (interno, no publica al host).',
      icon: 'ri-door-open-line',
      color: '#2560ff'
    },
    {
      comando: 'CMD ["nginx", "-g", "daemon off;"]',
      descripcion: 'Inicia Nginx en foreground para que Docker lo supervise.',
      icon: 'ri-play-circle-line',
      color: '#0DB7ED'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-reactjs-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">Dockerfile React</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Ejemplo de Dockerfile para React
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Un Dockerfile básico para una app React, que compila la aplicación y la sirve con Nginx
          </p>
        </div>

        {/* Código del Dockerfile */}
        <div className="bg-[#1D2327] rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <i className="ri-file-code-line text-[#0DB7ED] text-lg"></i>
            <span className="text-white/90 text-sm font-medium">Dockerfile</span>
          </div>
          <pre className="text-xs sm:text-sm text-white/90 leading-relaxed font-mono">
{`# Etapa 1: Construir la app React
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
          </pre>
        </div>

        {/* Explicación de Comandos */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-6 text-center">
            Explicación de Comandos del Dockerfile
          </h3>
          <div className="grid gap-4">
            {comandos.map((item, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FA] rounded-lg p-4 sm:p-5 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <i 
                      className={`${item.icon} text-lg`}
                      style={{ color: item.color }}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <code 
                      className="text-sm sm:text-base font-mono font-semibold block mb-2"
                      style={{ color: item.color }}
                    >
                      {item.comando}
                    </code>
                    <p className="text-xs sm:text-sm text-[#1D2327]/70 leading-relaxed">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ventajas del Multi-Stage Build */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl flex-shrink-0">
              <i className="ri-lightbulb-line text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Ventajas del Multi-Stage Build
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Este Dockerfile usa dos etapas: primero compila con Node.js y luego sirve con Nginx. Esto reduce el tamaño final de la imagen, ya que solo incluye los archivos estáticos compilados y Nginx, sin las dependencias de desarrollo.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <i className="ri-file-reduce-line text-2xl mb-2"></i>
              <p className="text-xs sm:text-sm font-semibold">Imagen más ligera</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <i className="ri-shield-check-line text-2xl mb-2"></i>
              <p className="text-xs sm:text-sm font-semibold">Mayor seguridad</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <i className="ri-speed-line text-2xl mb-2"></i>
              <p className="text-xs sm:text-sm font-semibold">Despliegue rápido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
