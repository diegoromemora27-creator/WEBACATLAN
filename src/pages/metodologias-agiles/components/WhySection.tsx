export default function WhySection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#7dd3c0] to-[#5fb8a6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            ¿Por qué lo hacen así?
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto">
            Los beneficios clave de trabajar con Scrum
          </p>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Reducción de riesgos */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Reducción de Riesgos
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              Si te equivocas, solo pierdes 2 semanas, no 6 meses de trabajo.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl font-bold text-red-500">2</span>
                <span className="text-sm text-gray-600">semanas vs</span>
                <span className="text-2xl font-bold text-gray-400 line-through">6</span>
                <span className="text-sm text-gray-600">meses</span>
              </div>
            </div>
          </div>

          {/* Flexibilidad */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-refresh-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Flexibilidad
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              Puedes cambiar prioridades en el siguiente Sprint si el mercado cambia.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-blue-500">
                <i className="ri-arrow-left-right-line text-2xl"></i>
                <span className="text-sm font-semibold">Adaptación Continua</span>
              </div>
            </div>
          </div>

          {/* Motivación */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-emotion-happy-line text-4xl text-white"></i>
            </div>
            <h3 className="font-bold text-xl text-[#1b3d70] mb-4 text-center">
              Motivación
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed text-center">
              Los equipos tienen autonomía y ven resultados reales constantemente.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-1">
                <i className="ri-star-fill text-xl text-yellow-400"></i>
                <i className="ri-star-fill text-xl text-yellow-400"></i>
                <i className="ri-star-fill text-xl text-yellow-400"></i>
                <i className="ri-star-fill text-xl text-yellow-400"></i>
                <i className="ri-star-fill text-xl text-yellow-400"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <i className="ri-checkbox-circle-fill text-2xl text-white flex-shrink-0 mt-1"></i>
              <div>
                <h4 className="font-semibold text-white mb-1">Entrega Continua de Valor</h4>
                <p className="text-white/80 text-sm">Productos funcionales cada Sprint</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="ri-checkbox-circle-fill text-2xl text-white flex-shrink-0 mt-1"></i>
              <div>
                <h4 className="font-semibold text-white mb-1">Transparencia Total</h4>
                <p className="text-white/80 text-sm">Todos saben qué está pasando</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="ri-checkbox-circle-fill text-2xl text-white flex-shrink-0 mt-1"></i>
              <div>
                <h4 className="font-semibold text-white mb-1">Mejora Continua</h4>
                <p className="text-white/80 text-sm">Retrospectivas para evolucionar</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="ri-checkbox-circle-fill text-2xl text-white flex-shrink-0 mt-1"></i>
              <div>
                <h4 className="font-semibold text-white mb-1">Colaboración Efectiva</h4>
                <p className="text-white/80 text-sm">Equipos autoorganizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
