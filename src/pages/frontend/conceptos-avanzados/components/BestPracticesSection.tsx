
import React from 'react';

export default function BestPracticesSection() {
  const practices = [
    {
      number: '1',
      title: 'Nombres de Clases Significativos',
      icon: 'ri-text',
      color: '#ff79c6',
      points: [
        'Nombra por rol/función, no por aspecto visual',
        'Usa minúsculas y guiones: main-header, site-footer, form-login',
      ],
      good: '.card, .navbar, .btn-primary, .product-list',
      bad: '.rojo, .big, .centrado2',
      example: `<!-- Bien -->
<div class="product-card">
  <h3 class="product-card__title">Laptop</h3>
  <p class="product-card__price">$999</p>
</div>`,
    },
    {
      number: '3',
      title: 'HTML Semántico + Clases',
      icon: 'ri-code-box-line',
      color: '#50fa7b',
      points: [
        'Usa las etiquetas semánticas correctas: header, nav, main, section, article, footer',
        'Combínalas con clases con sentido de componente',
      ],
      example: `<header class="site-header">
  <nav class="site-header__nav">
    <a class="site-header__link" href="/">Inicio</a>
  </nav>
</header>`,
    },
    {
      number: '4',
      title: 'Evita Abusar de IDs para Estilos',
      icon: 'ri-hashtag',
      color: '#8be9fd',
      points: [
        'Prefiere clases para estilizar (.btn-primario)',
        'Deja id para anclas, JS, accesibilidad',
        'Los IDs tienen más especificidad y son difíciles de sobreescribir',
      ],
      good: '<button class="btn btn--primary">Enviar</button>',
      bad: '<button id="enviar-boton">Enviar</button>',
    },
    {
      number: '5',
      title: 'Organización del CSS',
      icon: 'ri-folder-line',
      color: '#f1fa8c',
      points: [
        'Agrupa estilos por componente/bloque (sobre todo si usas BEM)',
        'Evita selectores ultra específicos tipo main > div > ul li a',
        'Intenta que la mayor parte sean solo clases o combinaciones simples',
      ],
      example: `.card { }
.card__title { }
.nav a { }`,
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#50fa7b] mb-4 md:mb-6">
            Buenas Prácticas de HTML y CSS
          </h2>
          <p className="text-sm md:text-lg text-[#f8f8f2]/80 max-w-3xl mx-auto px-2">
            La idea general: clases claras, consistentes y mantenibles, no nombres random
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#282a36] to-[#1e1e2e] rounded-xl md:rounded-2xl p-4 md:p-8 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl flex-shrink-0"
                  style={{ backgroundColor: `${practice.color}20` }}
                >
                  <span className="text-xl md:text-2xl font-bold" style={{ color: practice.color }}>
                    {practice.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f8f8f2] mb-3 md:mb-4">{practice.title}</h3>

                  <ul className="space-y-2 mb-4 md:mb-6">
                    {practice.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3">
                        <i
                          className="ri-arrow-right-s-line text-lg md:text-xl flex-shrink-0 mt-0.5"
                          style={{ color: practice.color }}
                        ></i>
                        <span className="text-sm md:text-base text-[#f8f8f2]/80 break-words">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {practice.good && practice.bad && (
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 mb-4 md:mb-6">
                      <div className="bg-[#50fa7b]/10 rounded-lg p-3 md:p-4 border border-[#50fa7b]/30">
                        <div className="flex items-center gap-2 mb-2">
                          <i className="ri-check-line text-[#50fa7b]"></i>
                          <span className="text-[#50fa7b] font-medium text-sm md:text-base">Mejor</span>
                        </div>
                        <code className="text-[#f8f8f2] text-xs md:text-sm break-all">{practice.good}</code>
                      </div>
                      <div className="bg-[#ff5555]/10 rounded-lg p-3 md:p-4 border border-[#ff5555]/30">
                        <div className="flex items-center gap-2 mb-2">
                          <i className="ri-close-line text-[#ff5555]"></i>
                          <span className="text-[#ff5555] font-medium text-sm md:text-base">Peor</span>
                        </div>
                        <code className="text-[#f8f8f2] text-xs md:text-sm break-all">{practice.bad}</code>
                      </div>
                    </div>
                  )}

                  {practice.example && (
                    <div className="bg-[#282a36] rounded-lg md:rounded-xl p-3 md:p-6 border border-[#f8f8f2]/10 overflow-x-auto">
                      <pre className="text-xs md:text-sm leading-relaxed">
                        <code className="text-[#f8f8f2]">{practice.example}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
