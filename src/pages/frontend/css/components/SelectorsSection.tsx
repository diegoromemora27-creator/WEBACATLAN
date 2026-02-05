export default function SelectorsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-3 sm:mb-4">
            Tipos de Selectores
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#f8f8f2]/70 max-w-3xl mx-auto">
            Diferentes formas de seleccionar elementos HTML para aplicar estilos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {[
            {
              type: 'De Etiqueta',
              syntax: 'p, h1, div',
              desc: 'Seleccionan por nombre de tag',
              example: 'p { color: blue; }',
              color: '#ff79c6'
            },
            {
              type: 'De Clase',
              syntax: '.card, .btn-primary',
              desc: 'Seleccionan por atributo class',
              example: '.card { padding: 20px; }',
              color: '#8be9fd'
            },
            {
              type: 'De ID',
              syntax: '#header, #login-form',
              desc: 'Seleccionan por atributo id (único)',
              example: '#header { height: 80px; }',
              color: '#50fa7b'
            },
            {
              type: 'Combinados',
              syntax: 'header nav a',
              desc: 'Seleccionan descendientes',
              example: 'nav a { color: white; }',
              color: '#f1fa8c'
            },
            {
              type: 'Pseudo-clases',
              syntax: ':hover, :focus',
              desc: 'Estados especiales de elementos',
              example: 'a:hover { color: red; }',
              color: '#ff79c6'
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e2e] rounded-xl p-4 sm:p-5 border border-[#f8f8f2]/10 hover:border-[#f8f8f2]/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <i className="ri-cursor-line text-lg sm:text-xl" style={{ color: item.color }}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#f8f8f2] mb-1">{item.type}</h3>
                  <code className="text-[10px] sm:text-xs block mb-2" style={{ color: item.color }}>
                    {item.syntax}
                  </code>
                  <p className="text-[10px] sm:text-xs text-[#f8f8f2]/70 mb-2">{item.desc}</p>
                  <div className="bg-[#282a36] rounded p-2 border border-[#f8f8f2]/10">
                    <code className="text-[10px] sm:text-xs text-[#50fa7b]">{item.example}</code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ejemplo completo */}
        <div className="bg-[#1e1e2e] rounded-xl p-4 sm:p-6 border border-[#8be9fd]/20">
          <h3 className="text-base sm:text-lg font-bold text-[#f8f8f2] mb-3 sm:mb-4 flex items-center gap-2">
            <i className="ri-code-s-slash-line text-[#8be9fd]"></i>
            Ejemplo Completo
          </h3>
          <div className="bg-[#282a36] rounded-lg p-3 sm:p-4 border border-[#f8f8f2]/10">
            <pre className="text-[10px] sm:text-xs md:text-sm overflow-x-auto">
              <code>
                <span className="text-[#6272a4]">/* Todos los enlaces */</span>{'\n'}
                <span className="text-[#ff79c6]">a</span> {'{'}{'\n'}
                {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">blue</span>;{'\n'}
                {'}'}{'\n\n'}
                <span className="text-[#6272a4]">/* Enlaces dentro del nav */</span>{'\n'}
                <span className="text-[#ff79c6]">nav a</span> {'{'}{'\n'}
                {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">white</span>;{'\n'}
                {'}'}{'\n\n'}
                <span className="text-[#6272a4]">/* Botón principal por clase */</span>{'\n'}
                <span className="text-[#8be9fd]">.btn-primary</span> {'{'}{'\n'}
                {'  '}<span className="text-[#50fa7b]">background-color</span>: <span className="text-[#f1fa8c]">#007bff</span>;{'\n'}
                {'  '}<span className="text-[#50fa7b]">color</span>: <span className="text-[#f1fa8c]">white</span>;{'\n'}
                {'}'}{'\n\n'}
                <span className="text-[#6272a4]">/* Enlace cuando el mouse pasa encima */</span>{'\n'}
                <span className="text-[#ff79c6]">a:hover</span> {'{'}{'\n'}
                {'  '}<span className="text-[#50fa7b]">text-decoration</span>: <span className="text-[#f1fa8c]">underline</span>;{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
