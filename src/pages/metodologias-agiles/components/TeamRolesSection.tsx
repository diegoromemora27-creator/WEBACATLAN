export default function TeamRolesSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#1b3d70] mb-4">
            Los Roles en un Scrum Team
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
            Un equipo pequeño (5 a 10 personas), autogestionado y multidisciplinario. Sin jefes tradicionales.
          </p>
          <div className="w-24 h-1 bg-[#7dd3c0] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Product Owner */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#7dd3c0]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7dd3c0] to-[#5fb8a6] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-user-star-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Product Owner
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              Es la voz del cliente. Decide qué se hace y prioriza las tareas para maximizar el valor del producto.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-[#7dd3c0] font-semibold text-xs">
                <i className="ri-focus-3-line"></i>
                <span>Visión del Producto</span>
              </div>
            </div>
          </div>

          {/* Scrum Master */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#1b3d70]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1b3d70] to-[#2a5490] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-user-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Scrum Master
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              Es el facilitador y 'coach'. Se asegura de que el equipo entienda Scrum y elimina cualquier obstáculo (piedras en el camino) que les impida avanzar.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-[#1b3d70] font-semibold text-xs">
                <i className="ri-compass-3-line"></i>
                <span>Facilitador del Proceso</span>
              </div>
            </div>
          </div>

          {/* Developers */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#bb8800]">
            <div className="w-20 h-20 bg-gradient-to-br from-[#bb8800] to-[#d49a00] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-team-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Developers
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              Las personas que hacen el trabajo técnico. Ellos deciden cómo se hace la magia.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-[#bb8800] font-semibold text-xs">
                <i className="ri-code-s-slash-line"></i>
                <span>Ejecución Técnica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Image */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/7f7a943e4717601c591703e82212a7b9.png"
              alt="Scrum Framework Diagram"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
