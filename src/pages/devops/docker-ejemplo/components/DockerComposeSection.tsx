export default function DockerComposeSection() {
  const comandos = [
    {
      comando: 'version: \'3.8\'',
      descripcion: 'Versión del formato de Docker Compose.',
      icon: 'ri-git-branch-line',
      color: '#2560ff'
    },
    {
      comando: 'services:',
      descripcion: 'Define contenedores independientes (mysql-db, backend, frontend).',
      icon: 'ri-stack-line',
      color: '#0DB7ED'
    },
    {
      comando: 'image: mysql:8.0',
      descripcion: 'Usa imagen oficial de MySQL versión 8.',
      icon: 'ri-database-2-line',
      color: '#2560ff'
    },
    {
      comando: 'environment:',
      descripcion: 'Variables para credenciales DB (MYSQL_ROOT_PASSWORD obliga inicialización).',
      icon: 'ri-key-2-line',
      color: '#0DB7ED'
    },
    {
      comando: 'ports: "3307:3306"',
      descripcion: 'Mapea puerto host 3307 al 3306 del contenedor.',
      icon: 'ri-door-open-line',
      color: '#2560ff'
    },
    {
      comando: 'volumes: - mysql_data:/var/lib/mysql',
      descripcion: 'Volumen persistente para datos DB (sobrevive restarts).',
      icon: 'ri-save-line',
      color: '#0DB7ED'
    },
    {
      comando: 'build: ./backend',
      descripcion: 'Construye imagen desde Dockerfile en carpeta backend.',
      icon: 'ri-hammer-line',
      color: '#2560ff'
    },
    {
      comando: 'depends_on:',
      descripcion: 'Inicia mysql-db antes que backend. No garantiza readiness, usa healthchecks para eso.',
      icon: 'ri-links-line',
      color: '#0DB7ED'
    },
    {
      comando: 'DB_HOST: mysql-db',
      descripcion: 'Nombre del servicio como hostname (resolución DNS interna de Docker).',
      icon: 'ri-global-line',
      color: '#2560ff'
    },
    {
      comando: 'networks:',
      descripcion: 'Crea red bridge para comunicación entre servicios por nombre.',
      icon: 'ri-share-line',
      color: '#0DB7ED'
    },
    {
      comando: 'restart: unless-stopped',
      descripcion: 'Reinicia automáticamente salvo detención manual.',
      icon: 'ri-refresh-line',
      color: '#2560ff'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0DB7ED]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-stack-line text-[#0DB7ED] text-base sm:text-lg"></i>
            <span className="text-[#0DB7ED] text-xs sm:text-sm font-semibold">Docker Compose</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Ejemplo de docker-compose.yml
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Orquesta React (frontend), backend Node.js y MySQL en un solo archivo
          </p>
        </div>

        {/* Código del docker-compose.yml */}
        <div className="bg-[#1D2327] rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 overflow-x-auto">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <i className="ri-file-code-line text-[#0DB7ED] text-lg"></i>
            <span className="text-white/90 text-sm font-medium">docker-compose.yml</span>
          </div>
          <pre className="text-xs sm:text-sm text-white/90 leading-relaxed font-mono">
{`version: '3.8'
services:
  mysql-db:
    image: mysql:8.0
    container_name: mysql_react
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: reactdb
      MYSQL_USER: user
      MYSQL_PASSWORD: pass
    ports:
      - "3307:3306"  # Host:Container
    volumes:
      - mysql_data:/var/lib/mysql

  backend:  # API Node para conectar React-MySQL
    build: ./backend
    container_name: backend_react
    restart: unless-stopped
    ports:
      - "5000:5000"
    environment:
      DB_HOST: mysql-db
      DB_USER: user
      DB_PASSWORD: pass
      DB_NAME: reactdb
    depends_on:
      - mysql-db
    networks:
      - app-network

  frontend:
    build: ./frontend
    container_name: frontend_react
    restart: unless-stopped
    ports:
      - "3000:80"
    environment:
      REACT_APP_API_URL: http://localhost:5000/api
    depends_on:
      - backend
    networks:
      - app-network

volumes:
  mysql_data:

networks:
  app-network:
    driver: bridge`}
          </pre>
        </div>

        {/* Explicación de Comandos */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-6 text-center">
            Explicación de Comandos docker-compose.yml
          </h3>
          <div className="grid gap-4">
            {comandos.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 sm:p-5 border border-[#2A2A2A]/10 hover:shadow-lg transition-all duration-300"
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

        {/* Arquitectura del Sistema */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#2A2A2A]/10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-6 text-center">
            Arquitectura del Sistema
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-xl p-5 text-white text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4">
                <i className="ri-reactjs-line text-3xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-2">Frontend</h4>
              <p className="text-sm text-white/90 mb-3">React App</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-mono">
                localhost:3000
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0DB7ED] to-[#2560ff] rounded-xl p-5 text-white text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4">
                <i className="ri-nodejs-line text-3xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-2">Backend</h4>
              <p className="text-sm text-white/90 mb-3">Node.js + Express</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-mono">
                localhost:5000
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2560ff] to-[#0DB7ED] rounded-xl p-5 text-white text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4">
                <i className="ri-database-2-line text-3xl"></i>
              </div>
              <h4 className="text-lg font-bold mb-2">Database</h4>
              <p className="text-sm text-white/90 mb-3">MySQL 8.0</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-mono">
                localhost:3307
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-[#1D2327]/60">
            <i className="ri-arrow-right-line text-xl"></i>
            <span className="text-sm">Comunicación a través de red Docker (app-network)</span>
            <i className="ri-arrow-left-line text-xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
