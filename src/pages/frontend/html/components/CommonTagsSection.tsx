export default function CommonTagsSection() {
  const categories = [
    {
      title: '1. Texto y Estructura Básica',
      icon: 'ri-text',
      color: '#ff79c6',
      tags: [
        { tag: '<h1> a <h6>', desc: 'Encabezados de mayor a menor importancia' },
        { tag: '<p>', desc: 'Párrafos de texto' },
        { tag: '<br>', desc: 'Salto de línea' },
        { tag: '<hr>', desc: 'Línea horizontal separadora' },
        { tag: '<strong>', desc: 'Texto importante (negrita)' },
        { tag: '<em>', desc: 'Énfasis (cursiva)' },
        { tag: '<span>', desc: 'Contenedor en línea' },
        { tag: '<div>', desc: 'Contenedor en bloque' },
      ],
      example: `<span class="text-[#ff79c6]">&lt;h1&gt;</span><span class="text-[#f8f8f2]">Título de la página</span><span class="text-[#ff79c6]">&lt;/h1&gt;</span>
<span class="text-[#ff79c6]">&lt;p&gt;</span><span class="text-[#f8f8f2]">Un párrafo con </span><span class="text-[#ff79c6]">&lt;strong&gt;</span><span class="text-[#f8f8f2]">texto importante</span><span class="text-[#ff79c6]">&lt;/strong&gt;</span><span class="text-[#f8f8f2]"> y </span><span class="text-[#ff79c6]">&lt;em&gt;</span><span class="text-[#f8f8f2]">énfasis</span><span class="text-[#ff79c6]">&lt;/em&gt;</span><span class="text-[#f8f8f2]">.</span><span class="text-[#ff79c6]">&lt;/p&gt;</span>
<span class="text-[#ff79c6]">&lt;div</span> <span class="text-[#50fa7b]">class</span>=<span class="text-[#f1fa8c]">"tarjeta"</span><span class="text-[#ff79c6]">&gt;</span>
  <span class="text-[#ff79c6]">&lt;h2&gt;</span><span class="text-[#f8f8f2]">Subtítulo</span><span class="text-[#ff79c6]">&lt;/h2&gt;</span>
  <span class="text-[#ff79c6]">&lt;p&gt;</span><span class="text-[#f8f8f2]">Contenido de la tarjeta.</span><span class="text-[#ff79c6]">&lt;/p&gt;</span>
<span class="text-[#ff79c6]">&lt;/div&gt;</span>`
    },
    {
      title: '2. Listas',
      icon: 'ri-list-check',
      color: '#50fa7b',
      tags: [
        { tag: '<ul>', desc: 'Lista desordenada (viñetas)' },
        { tag: '<ol>', desc: 'Lista ordenada (numerada)' },
        { tag: '<li>', desc: 'Elemento de lista' },
      ],
      example: `<span class="text-[#ff79c6]">&lt;h2&gt;</span><span class="text-[#f8f8f2]">Lista de compras</span><span class="text-[#ff79c6]">&lt;/h2&gt;</span>
<span class="text-[#ff79c6]">&lt;ul&gt;</span>
  <span class="text-[#ff79c6]">&lt;li&gt;</span><span class="text-[#f8f8f2]">Pan</span><span class="text-[#ff79c6]">&lt;/li&gt;</span>
  <span class="text-[#ff79c6]">&lt;li&gt;</span><span class="text-[#f8f8f2]">Leche</span><span class="text-[#ff79c6]">&lt;/li&gt;</span>
  <span class="text-[#ff79c6]">&lt;li&gt;</span><span class="text-[#f8f8f2]">Huevos</span><span class="text-[#ff79c6]">&lt;/li&gt;</span>
<span class="text-[#ff79c6]">&lt;/ul&gt;</span>`
    },
    {
      title: '3. Enlaces e Imágenes',
      icon: 'ri-links-line',
      color: '#8be9fd',
      tags: [
        { tag: '<a>', desc: 'Enlace (hipervínculo)' },
        { tag: '<img>', desc: 'Imagen' },
      ],
      example: `<span class="text-[#ff79c6]">&lt;a</span> <span class="text-[#50fa7b]">href</span>=<span class="text-[#f1fa8c]">"https://www.google.com"</span> <span class="text-[#50fa7b]">target</span>=<span class="text-[#f1fa8c]">"_blank"</span><span class="text-[#ff79c6]">&gt;</span><span class="text-[#f8f8f2]">Ir a Google</span><span class="text-[#ff79c6]">&lt;/a&gt;</span>

<span class="text-[#ff79c6]">&lt;img</span> <span class="text-[#50fa7b]">src</span>=<span class="text-[#f1fa8c]">"logo.png"</span> <span class="text-[#50fa7b]">alt</span>=<span class="text-[#f1fa8c]">"Logo del sitio"</span> <span class="text-[#50fa7b]">width</span>=<span class="text-[#f1fa8c]">"150"</span><span class="text-[#ff79c6]">&gt;</span>`
    },
    {
      title: '4. Estructura Semántica',
      icon: 'ri-layout-grid-line',
      color: '#f1fa8c',
      tags: [
        { tag: '<header>', desc: 'Cabecera (logo, menú, título)' },
        { tag: '<nav>', desc: 'Navegación' },
        { tag: '<main>', desc: 'Contenido principal' },
        { tag: '<section>', desc: 'Secciones generales' },
        { tag: '<article>', desc: 'Contenido independiente' },
        { tag: '<aside>', desc: 'Contenido lateral' },
        { tag: '<footer>', desc: 'Pie de página' },
      ],
      example: `<span class="text-[#ff79c6]">&lt;body&gt;</span>
  <span class="text-[#ff79c6]">&lt;header&gt;</span>
    <span class="text-[#ff79c6]">&lt;h1&gt;</span><span class="text-[#f8f8f2]">Mi sitio</span><span class="text-[#ff79c6]">&lt;/h1&gt;</span>
    <span class="text-[#ff79c6]">&lt;nav&gt;</span>
      <span class="text-[#ff79c6]">&lt;a</span> <span class="text-[#50fa7b]">href</span>=<span class="text-[#f1fa8c]">"#inicio"</span><span class="text-[#ff79c6]">&gt;</span><span class="text-[#f8f8f2]">Inicio</span><span class="text-[#ff79c6]">&lt;/a&gt;</span>
      <span class="text-[#ff79c6]">&lt;a</span> <span class="text-[#50fa7b]">href</span>=<span class="text-[#f1fa8c]">"#blog"</span><span class="text-[#ff79c6]">&gt;</span><span class="text-[#f8f8f2]">Blog</span><span class="text-[#ff79c6]">&lt;/a&gt;</span>
    <span class="text-[#ff79c6]">&lt;/nav&gt;</span>
  <span class="text-[#ff79c6]">&lt;/header&gt;</span>

  <span class="text-[#ff79c6]">&lt;main&gt;</span>
    <span class="text-[#ff79c6]">&lt;section</span> <span class="text-[#50fa7b]">id</span>=<span class="text-[#f1fa8c]">"inicio"</span><span class="text-[#ff79c6]">&gt;</span>
      <span class="text-[#ff79c6]">&lt;h2&gt;</span><span class="text-[#f8f8f2]">Bienvenido</span><span class="text-[#ff79c6]">&lt;/h2&gt;</span>
    <span class="text-[#ff79c6]">&lt;/section&gt;</span>
  <span class="text-[#ff79c6]">&lt;/main&gt;</span>

  <span class="text-[#ff79c6]">&lt;footer&gt;</span>
    <span class="text-[#ff79c6]">&lt;p&gt;</span><span class="text-[#f8f8f2]">&copy; 2026 Mi sitio</span><span class="text-[#ff79c6]">&lt;/p&gt;</span>
  <span class="text-[#ff79c6]">&lt;/footer&gt;</span>
<span class="text-[#ff79c6]">&lt;/body&gt;</span>`
    },
    {
      title: '5. Tablas',
      icon: 'ri-table-line',
      color: '#bd93f9',
      tags: [
        { tag: '<table>', desc: 'Tabla' },
        { tag: '<tr>', desc: 'Fila de tabla' },
        { tag: '<th>', desc: 'Celda de encabezado' },
        { tag: '<td>', desc: 'Celda normal' },
      ],
      example: `<span class="text-[#ff79c6]">&lt;table&gt;</span>
  <span class="text-[#ff79c6]">&lt;tr&gt;</span>
    <span class="text-[#ff79c6]">&lt;th&gt;</span><span class="text-[#f8f8f2]">Nombre</span><span class="text-[#ff79c6]">&lt;/th&gt;</span>
    <span class="text-[#ff79c6]">&lt;th&gt;</span><span class="text-[#f8f8f2]">Edad</span><span class="text-[#ff79c6]">&lt;/th&gt;</span>
  <span class="text-[#ff79c6]">&lt;/tr&gt;</span>
  <span class="text-[#ff79c6]">&lt;tr&gt;</span>
    <span class="text-[#ff79c6]">&lt;td&gt;</span><span class="text-[#f8f8f2]">Ana</span><span class="text-[#ff79c6]">&lt;/td&gt;</span>
    <span class="text-[#ff79c6]">&lt;td&gt;</span><span class="text-[#f8f8f2]">25</span><span class="text-[#ff79c6]">&lt;/td&gt;</span>
  <span class="text-[#ff79c6]">&lt;/tr&gt;</span>
<span class="text-[#ff79c6]">&lt;/table&gt;</span>`
    },
    {
      title: '6. Formularios',
      icon: 'ri-file-list-3-line',
      color: '#ff6e67',
      tags: [
        { tag: '<form>', desc: 'Formulario' },
        { tag: '<input>', desc: 'Campo de entrada' },
        { tag: '<label>', desc: 'Etiqueta para inputs' },
        { tag: '<textarea>', desc: 'Campo de texto largo' },
        { tag: '<button>', desc: 'Botón' },
        { tag: '<select> / <option>', desc: 'Listas desplegables' },
      ],
      example: `<span class="text-[#ff79c6]">&lt;form</span> <span class="text-[#50fa7b]">action</span>=<span class="text-[#f1fa8c]">"/registro"</span> <span class="text-[#50fa7b]">method</span>=<span class="text-[#f1fa8c]">"post"</span><span class="text-[#ff79c6]">&gt;</span>
  <span class="text-[#ff79c6]">&lt;label</span> <span class="text-[#50fa7b]">for</span>=<span class="text-[#f1fa8c]">"nombre"</span><span class="text-[#ff79c6]">&gt;</span><span class="text-[#f8f8f2]">Nombre:</span><span class="text-[#ff79c6]">&lt;/label&gt;</span>
  <span class="text-[#ff79c6]">&lt;input</span> <span class="text-[#50fa7b]">id</span>=<span class="text-[#f1fa8c]">"nombre"</span> <span class="text-[#50fa7b]">name</span>=<span class="text-[#f1fa8c]">"nombre"</span> <span class="text-[#50fa7b]">type</span>=<span class="text-[#f1fa8c]">"text"</span> <span class="text-[#50fa7b]">required</span><span class="text-[#ff79c6]">&gt;</span>

  <span class="text-[#ff79c6]">&lt;label</span> <span class="text-[#50fa7b]">for</span>=<span class="text-[#f1fa8c]">"email"</span><span class="text-[#ff79c6]">&gt;</span><span class="text-[#f8f8f2]">Email:</span><span class="text-[#ff79c6]">&lt;/label&gt;</span>
  <span class="text-[#ff79c6]">&lt;input</span> <span class="text-[#50fa7b]">id</span>=<span class="text-[#f1fa8c]">"email"</span> <span class="text-[#50fa7b]">name</span>=<span class="text-[#f1fa8c]">"email"</span> <span class="text-[#50fa7b]">type</span>=<span class="text-[#f1fa8c]">"email"</span><span class="text-[#ff79c6]">&gt;</span>

  <span class="text-[#ff79c6]">&lt;button</span> <span class="text-[#50fa7b]">type</span>=<span class="text-[#f1fa8c]">"submit"</span><span class="text-[#ff79c6]">&gt;</span><span class="text-[#f8f8f2]">Enviar</span><span class="text-[#ff79c6]">&lt;/button&gt;</span>
<span class="text-[#ff79c6]">&lt;/form&gt;</span>`
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Tipos Comunes de Etiquetas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Las etiquetas más utilizadas en el desarrollo web
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#282a36] rounded-xl p-4 sm:p-6 md:p-8 border border-[#f8f8f2]/10"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f8f8f2] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <i className={`${category.icon} text-xl sm:text-2xl`} style={{ color: category.color }}></i>
                </div>
                {category.title}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Lista de etiquetas */}
                <div className="space-y-2">
                  {category.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="bg-[#1e1e2e] rounded-lg p-2 sm:p-3 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <code
                          className="text-xs sm:text-sm font-bold flex-shrink-0"
                          style={{ color: category.color }}
                        >
                          {tag.tag}
                        </code>
                        <span className="text-[10px] sm:text-xs text-[#f8f8f2]/70">
                          {tag.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ejemplo de código */}
                <div className="bg-[#1e1e2e] rounded-xl p-3 sm:p-4 border border-[#f8f8f2]/10">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 pb-2 border-b border-[#f8f8f2]/10">
                    <i className="ri-code-s-slash-line text-[#8be9fd] text-sm sm:text-base"></i>
                    <span className="text-[#f8f8f2]/50 text-[10px] sm:text-xs">Ejemplo</span>
                  </div>
                  <div className="bg-[#282a36] rounded-lg p-2 sm:p-3 border border-[#f8f8f2]/10">
                    <pre className="text-[9px] sm:text-[10px] md:text-xs overflow-x-auto">
                      <code dangerouslySetInnerHTML={{ __html: category.example }} />
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
