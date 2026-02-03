
export default function WhatIsFrameworkSection() {
  const features = [
    {
      icon: "ri-palette-line",
      title: "Sistema de Diseño",
      description: "Colores, tipografías y espaciados consistentes",
    },
    {
      icon: "ri-layout-grid-line",
      title: "Componentes Listos",
      description: "Botones, cards, formularios y más pre-diseñados",
    },
    {
      icon: "ri-speed-line",
      title: "Desarrollo Rápido",
      description: "Prototipa y construye interfaces en menos tiempo",
    },
    {
      icon: "ri-smartphone-line",
      title: "Responsive por Defecto",
      description: "Breakpoints y utilidades para todos los dispositivos",
    },
    {
      icon: "ri-team-line",
      title: "Consistencia en Equipo",
      description: "Todos usan el mismo sistema y nomenclatura",
    },
    {
      icon: "ri-book-open-line",
      title: "Documentación Completa",
      description: "Guías, ejemplos y comunidad activa",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8be9fd] mb-6">
            ¿Qué es un Framework de CSS?
          </h2>
          <p className="text-lg md:text-xl text-[#f8f8f2]/80 max-w-3xl mx-auto">
            Un framework de CSS es una colección de estilos y componentes ya hechos
            (botones, grids, formularios, etc.) que usas mediante clases para
            construir interfaces más rápido y con diseño consistente.
          </p>
        </div>

        {/* Definición */}
        <div className="bg-gradient-to-br from-[#282a36] to-[#1e1e2e] rounded-2xl p-8 md:p-12 border border-[#8be9fd]/20 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-[#8be9fd]/20 rounded-xl flex-shrink-0">
              <i className="ri-information-line text-2xl text-[#8be9fd]"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f8f8f2] mb-3">
                Definición
              </h3>
              <p className="text-[#f8f8f2]/80 leading-relaxed">
                Es un conjunto de CSS (a veces + JS) empaquetado y documentado,
                que te da componentes y utilidades listas para usar.
              </p>
              <p className="text-[#f8f8f2]/80 leading-relaxed mt-3">
                Te ahorra escribir estilos desde cero, y define un "sistema de
                diseño" común: colores, tamaño de fuente, espacios, breakpoints
                responsive.
              </p>
              <p className="text-[#50fa7b] font-medium mt-4">
                Ejemplos conocidos: Bootstrap, Tailwind CSS, Bulma, Foundation,
                Materialize
              </p>
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#282a36] rounded-xl p-6 border border-[#8be9fd]/10 hover:border-[#8be9fd]/30 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#8be9fd]/20 rounded-lg mb-4">
                <i className={`${feature.icon} text-2xl text-[#8be9fd]}`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#f8f8f2] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#f8f8f2]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
