export default function ConexionMySQLSection() {
  const pasos = [
    {
      numero: '1',
      titulo: 'Crear estructura de carpetas',
      descripcion: 'Crea las carpetas del proyecto y organiza tu código',
      comando: 'mkdir mi-proyecto && cd mi-proyecto && mkdir frontend backend',
      detalle: 'Coloca tu app React en frontend/ y crea backend simple en backend/ (usa Express + mysql2 para API).',
      icon: 'ri-folder-add-line',
      color: '#2560ff'
    },
    {
      numero: '2',
      titulo: 'Crear Dockerfiles',
      descripcion: 'Configura los Dockerfiles para frontend y backend',
      comando: 'touch frontend/Dockerfile backend/Dockerfile',
      detalle: 'En frontend/Dockerfile, usa el ejemplo de React. En backend/, crea Dockerfile similar: FROM node:18-alpine, copia código, RUN npm install, CMD ["npm", "start"].',
      icon: 'ri-file-add-line',
      color: '#0DB7ED'
    },
    {
      numero: '3',
      titulo: 'Configurar docker-compose.yml',
      descripcion: 'Crea el archivo de orquestación',
      comando: 'touch docker-compose.yml',
      detalle: 'Crea docker-compose.yml como en el ejemplo anterior. Ajusta credenciales y puertos según tus necesidades.',
      icon: 'ri-settings-3-line',
      color: '#2560ff'
    },
    {
      numero: '4',
      titulo: 'Configurar backend',
      descripcion: 'Instala dependencias y configura conexión a MySQL',
      comando: 'npm i express mysql2 cors dotenv',
      detalle: 'En backend (Node), configura conexión: const connection = mysql.createConnection({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME}).',
      icon: 'ri-nodejs-line',
      color: '#0DB7ED'
    },
    {
      numero: '5',
      titulo: 'Conectar React con API',
      descripcion: 'Configura las llamadas HTTP desde React',
      comando: 'npm i axios',
      detalle: 'En React, usa axios/fetch a http://localhost:5000/api (URL del backend). Backend consulta MySQL y responde JSON.',
      icon: 'ri-reactjs-line',
      color: '#2560ff'
    },
    {
      numero: '6',
      titulo: 'Ejecutar y probar',
      descripcion: 'Levanta los contenedores y verifica el funcionamiento',
      comando: 'docker compose up --build -d',
      detalle: 'Accede React en http://localhost:3000, MySQL en localhost:3307 (usa tool como MySQL Workbench). Prueba: docker compose down para parar; docker compose logs para logs. Datos persisten en volumen.',
      icon: 'ri-play-circle-line',
      color: '#0DB7ED'
    }
  ];

  const comandosUtiles = [
    {
      comando: 'docker compose up --build -d',
      descripcion: 'Construye y levanta todos los servicios en segundo plano',
      icon: 'ri-rocket-line'
    },
    {
      comando: 'docker compose down',
      descripcion: 'Detiene y elimina todos los contenedores',
      icon: 'ri-stop-circle-line'
    },
    {
      comando: 'docker compose logs',
      descripcion: 'Muestra los logs de todos los servicios',
      icon: 'ri-file-list-line'
    },
    {
      comando: 'docker compose logs -f frontend',
      descripcion: 'Sigue los logs del servicio frontend en tiempo real',
      icon: 'ri-eye-line'
    },
    {
      comando: 'docker compose ps',
      descripcion: 'Lista el estado de todos los servicios',
      icon: 'ri-list-check'
    },
    {
      comando: 'docker compose restart backend',
      descripcion: 'Reinicia solo el servicio backend',
      icon: 'ri-refresh-line'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2560ff]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-links-line text-[#2560ff] text-base sm:text-lg"></i>
            <span className="text-[#2560ff] text-xs sm:text-sm font-semibold">Conexión Completa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Pasos para Conectar React con MySQL Localmente
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Guía paso a paso para dockerizar tu aplicación completa
          </p>
        </div>

        {/* Pasos */}
        <div className="mb-12 sm:mb-16">
          <div className="space-y-6">
            {pasos.map((paso, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FA] rounded-xl p-5 sm:p-6 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl flex-shrink-0"
                    style={{ backgroundColor: `${paso.color}15`, color: paso.color }}
                  >
                    {paso.numero}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <i 
                        className={`${paso.icon} text-xl`}
                        style={{ color: paso.color }}
                      ></i>
                      <h3 
                        className="text-lg sm:text-xl font-bold"
                        style={{ color: paso.color }}
                      >
                        {paso.titulo}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-[#1D2327]/70 mb-3">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>

                {/* Comando */}
                <div className="bg-[#1D2327] rounded-lg p-3 sm:p-4 mb-3">
                  <code className="text-xs sm:text-sm text-[#0DB7ED] font-mono">
                    $ {paso.comando}
                  </code>
                </div>

                {/* Detalle */}
                <div className="flex items-start gap-2 bg-white rounded-lg p-3 sm:p-4">
                  <i className="ri-information-line text-[#0DB7ED] text-base flex-shrink-0 mt-0.5"></i>
                  <p className="text-xs sm:text-sm text-[#1D2327]/70 leading-relaxed">
                    {paso.detalle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comandos Útiles */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-6 text-center">
            Comandos Útiles de Docker Compose
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {comandosUtiles.map((item, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FA] rounded-lg p-4 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <i className={`${item.icon} text-[#2560ff] text-lg flex-shrink-0 mt-1`}></i>
                  <div className="flex-1">
                    <code className="text-xs sm:text-sm text-[#1D2327] font-mono font-semibold block mb-2">
                      {item.comando}
                    </code>
                    <p className="text-xs text-[#1D2327]/60">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4">
              <i className="ri-checkbox-circle-line text-3xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              ¡Listo para Producción!
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-6">
              Ahora tienes una aplicación completa dockerizada con React, Node.js y MySQL. Los datos persisten en volúmenes, los servicios se comunican a través de redes Docker, y todo está orquestado con un solo comando. Este setup es escalable y listo para desplegar en cualquier entorno.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-checkbox-circle-line text-base sm:text-lg"></i>
                <span>Portable</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-shield-check-line text-base sm:text-lg"></i>
                <span>Aislado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-rocket-line text-base sm:text-lg"></i>
                <span>Escalable</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg">
                <i className="ri-refresh-line text-base sm:text-lg"></i>
                <span>Reproducible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
