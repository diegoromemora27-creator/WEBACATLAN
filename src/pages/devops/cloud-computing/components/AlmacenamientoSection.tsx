
export default function AlmacenamientoSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EA4335]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-database-2-line text-[#EA4335] text-base sm:text-lg"></i>
            <span className="text-[#EA4335] text-xs sm:text-sm font-semibold">Almacenamiento y Datos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Almacenamiento y Datos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Soluciones de almacenamiento y bases de datos gestionadas para aplicaciones modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Object Storage */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center bg-[#4285F4] rounded-xl flex-shrink-0">
                <i className="ri-folder-cloud-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-2">
                  Object Storage
                </h3>
                <p className="text-xs sm:text-sm text-[#1D2327]/60 font-medium">
                  Almacenamiento de Objetos
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              Almacena archivos no estructurados en buckets escalables (AWS S3, Google Cloud Storage), con opciones públicas/privadas y metadatos.
            </p>

            <div className="mb-4 p-3 bg-white rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-lightbulb-line text-[#FBBC04]"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Caso de Uso:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70">
                Perfecto para assets web estáticos; integra con FastAPI para uploads en apps de ML.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Escalabilidad ilimitada</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Alta durabilidad (99.999999999%)</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Versionado de archivos</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Control de acceso granular</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-code-box-line text-[#4285F4]"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Servicios:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#4285F4] text-white rounded-full text-xs font-medium">AWS S3</span>
                <span className="px-3 py-1 bg-[#4285F4] text-white rounded-full text-xs font-medium">Google Cloud Storage</span>
                <span className="px-3 py-1 bg-[#4285F4] text-white rounded-full text-xs font-medium">Azure Blob Storage</span>
              </div>
            </div>
          </div>

          {/* Bases de Datos Gestionadas */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center bg-[#34A853] rounded-xl flex-shrink-0">
                <i className="ri-database-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-2">
                  Bases de Datos Gestionadas
                </h3>
                <p className="text-xs sm:text-sm text-[#1D2327]/60 font-medium">
                  Managed Databases
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              Servicios como RDS (SQL), DynamoDB (NoSQL) o Firestore manejan escalado, backups y ORMs (SQLAlchemy en Python).
            </p>

            <div className="mb-4 p-3 bg-white rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-lightbulb-line text-[#FBBC04]"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Caso de Uso:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70">
                Firestore soporta queries en tiempo real; integra con Pandas para análisis de sequía.
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Backups automáticos</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Escalado automático</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Alta disponibilidad</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-[#34A853]"></i>
                <span className="text-xs sm:text-sm text-[#1D2327]/70">Monitoreo integrado</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-table-line text-[#4285F4]"></i>
                  <span className="text-xs font-semibold text-[#1D2327]">SQL</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs text-[#1D2327]/70">AWS RDS</span>
                  <span className="block text-xs text-[#1D2327]/70">Cloud SQL</span>
                  <span className="block text-xs text-[#1D2327]/70">Azure SQL</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-file-list-line text-[#34A853]"></i>
                  <span className="text-xs font-semibold text-[#1D2327]">NoSQL</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs text-[#1D2327]/70">DynamoDB</span>
                  <span className="block text-xs text-[#1D2327]/70">Firestore</span>
                  <span className="block text-xs text-[#1D2327]/70">Cosmos DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
