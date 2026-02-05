
export default function SeguridadSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EA4335]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-shield-check-line text-[#EA4335] text-base sm:text-lg"></i>
            <span className="text-[#EA4335] text-xs sm:text-sm font-semibold">Seguridad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2327] mb-3 sm:mb-4">
            Seguridad en la Nube
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#1D2327]/70 max-w-3xl mx-auto">
            Protege tus aplicaciones y datos con controles de acceso y redes virtuales seguras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* IAM */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center bg-[#4285F4] rounded-xl flex-shrink-0">
                <i className="ri-user-settings-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-2">
                  IAM
                </h3>
                <p className="text-xs sm:text-sm text-[#1D2327]/60 font-medium">
                  Identity and Access Management
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              IAM (Identity and Access Management) controla accesos vía usuarios, grupos y roles con principio de menor privilegio.
            </p>

            <div className="mb-6 p-3 bg-[#F8F9FA] rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-lightbulb-line text-[#FBBC04]"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Integración:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70">
                Integra con JWT en backends FastAPI para autenticación temporal segura.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-user-line text-[#4285F4]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Usuarios</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Identidades individuales con credenciales únicas</p>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-group-line text-[#34A853]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Grupos</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Colecciones de usuarios con permisos compartidos</p>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-shield-user-line text-[#FBBC04]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Roles</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Permisos asignables a servicios y recursos</p>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-file-shield-line text-[#EA4335]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Políticas</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Documentos JSON que definen permisos específicos</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 rounded-lg border border-[#4285F4]/20">
              <div className="flex items-start gap-2">
                <i className="ri-shield-check-line text-[#34A853] text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-semibold text-[#1D2327] mb-1">Principio de Menor Privilegio</h4>
                  <p className="text-xs text-[#1D2327]/70">
                    Otorga solo los permisos mínimos necesarios para realizar una tarea específica, reduciendo el riesgo de accesos no autorizados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VPC */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#2A2A2A]/10 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center bg-[#34A853] rounded-xl flex-shrink-0">
                <i className="ri-shield-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D2327] mb-2">
                  VPC y Redes Virtuales
                </h3>
                <p className="text-xs sm:text-sm text-[#1D2327]/60 font-medium">
                  Virtual Private Cloud
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1D2327]/70 leading-relaxed mb-4">
              VPC aísla redes privadas con subnets, firewalls (Security Groups/NACLs); peering conecta VPCs privadas sin Internet pública.
            </p>

            <div className="mb-6 p-3 bg-[#F8F9FA] rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-lightbulb-line text-[#FBBC04]"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Caso de Uso:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1D2327]/70">
                Úsalo para microservicios seguros, reduciendo vectores de ataque DDoS.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-layout-grid-line text-[#4285F4]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Subnets</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Segmentos de red públicos o privados dentro de la VPC</p>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-firewall-line text-[#EA4335]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">Security Groups</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Firewalls virtuales a nivel de instancia (stateful)</p>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-shield-cross-line text-[#FBBC04]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">NACLs</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Listas de control de acceso a nivel de subnet (stateless)</p>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <i className="ri-links-line text-[#34A853]"></i>
                  <span className="text-xs sm:text-sm font-semibold text-[#1D2327]">VPC Peering</span>
                </div>
                <p className="text-xs text-[#1D2327]/70">Conexión privada entre VPCs sin Internet pública</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-[#34A853]/10 to-[#4285F4]/10 rounded-lg border border-[#34A853]/20">
              <div className="flex items-start gap-2">
                <i className="ri-shield-check-line text-[#34A853] text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <h4 className="text-sm font-semibold text-[#1D2327] mb-1">Aislamiento de Red</h4>
                  <p className="text-xs text-[#1D2327]/70">
                    Crea entornos aislados para desarrollo, staging y producción, protegiendo recursos críticos de accesos no autorizados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC04] rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
              <i className="ri-cloud-line text-white text-3xl"></i>
            </div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Domina Cloud Computing
          </h3>
          
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-6">
            Con estos fundamentos de Cloud Computing, estás listo para diseñar, desplegar y escalar aplicaciones modernas en la nube con seguridad, eficiencia y alta disponibilidad.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i className="ri-checkbox-circle-line"></i>
              <span>Escalabilidad Global</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i className="ri-checkbox-circle-line"></i>
              <span>Alta Disponibilidad</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i className="ri-checkbox-circle-line"></i>
              <span>Seguridad Robusta</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <i className="ri-checkbox-circle-line"></i>
              <span>Costos Optimizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
