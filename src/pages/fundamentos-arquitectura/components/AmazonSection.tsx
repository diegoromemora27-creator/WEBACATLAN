export default function AmazonSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF9900]/10 px-4 py-2 rounded-full mb-4">
            <i className="ri-shopping-cart-line text-[#FF9900] text-xl"></i>
            <span className="text-[#232F3E] text-sm font-semibold">Caso de Estudio: Amazon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232F3E] mb-4">
            Arquitectura en Capas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Imagina que haces un pedido en Amazon. Para que ese paquete llegue a tu casa, la empresa se divide en capas.
          </p>
        </div>

        {/* Three Layers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Presentación */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-[#FF9900]/10 rounded-lg mb-4">
              <i className="ri-layout-line text-[#FF9900] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#232F3E] mb-3">
              Presentación (Frontend)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Es la web o app donde ves el botón naranja de <strong>"Comprar ahora"</strong>. Su única misión es capturar tu clic y mostrarte fotos bonitas de los productos.
            </p>
          </div>

          {/* Lógica de Negocio */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-[#FF9900]/10 rounded-lg mb-4">
              <i className="ri-brain-line text-[#FF9900] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#232F3E] mb-3">
              Lógica de Negocio (Backend)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Es el cerebro logístico. Cuando haces clic, esta capa calcula: "¿Hay stock en el almacén más cercano?", "¿El usuario tiene Prime?", "¿Cuánto impuesto se aplica?".
            </p>
          </div>

          {/* Persistencia */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 flex items-center justify-center bg-[#FF9900]/10 rounded-lg mb-4">
              <i className="ri-database-2-line text-[#FF9900] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#232F3E] mb-3">
              Persistencia (Base de Datos)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Es el inventario gigante. Aquí se guarda cuántos iPhones quedan, tu historial de direcciones y tus métodos de pago.
            </p>
          </div>
        </div>

        {/* UI Description */}
        <div className="bg-gradient-to-br from-[#232F3E] to-[#37475A] rounded-2xl p-8 sm:p-10 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#FF9900] rounded-lg flex-shrink-0">
              <i className="ri-palette-line text-white text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Descripción de la UI</h4>
              <p className="text-white/90 leading-relaxed">
                Diseño orientado a la conversión y la densidad de información. Predominan las tarjetas de producto con sombras suaves sobre fondos blancos, jerarquía clara en los precios (color naranja/ámbar) y una barra de búsqueda prominente que actúa como el eje central de la experiencia.
              </p>
            </div>
          </div>
          
          {/* More Info Button */}
          <div className="flex justify-center">
            <a 
              href="https://view.genially.com/6980cc93131f64b0cbedf739/interactive-content-arquitectura-de-capas-en-aws"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-external-link-line text-xl"></i>
              <span>Ver Ejemplo Interactivo en AWS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
