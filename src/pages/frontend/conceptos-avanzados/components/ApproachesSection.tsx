
import React from 'react';

export default function ApproachesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1e1e2e] to-[#282a36]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff79c6] mb-6">
            Dos Enfoques Principales
          </h2>
          <p className="text-lg text-[#f8f8f2]/80 max-w-3xl mx-auto">
            Los frameworks CSS se dividen en dos filosofías: componentes predefinidos o utilidades
            componibles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basados en Componentes */}
          <div className="bg-[#1e1e2e] rounded-2xl p-8 border border-[#ff79c6]/30 hover:border-[#ff79c6]/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-[#ff79c6]/20 rounded-xl">
                <i className="ri-layout-4-line text-3xl text-[#ff79c6]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#ff79c6]">
                  Basados en Componentes
                </h3>
                <p className="text-[#f8f8f2]/60 text-sm">
                  Bootstrap, Bulma, Foundation
                </p>
              </div>
            </div>

            <p className="text-[#f8f8f2]/80 mb-6 leading-relaxed">
              Te dan clases <span className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">btn</span>,{' '}
              <span className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">btn-primary</span>,{' '}
              <span className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">card</span>,{' '}
              <span className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">navbar</span>, etc.
            </p>

            <p className="text-[#f8f8f2]/80 mb-6 leading-relaxed">
              Muy buenos para prototipar rápido y mantener uniformidad visual sin diseñar todo.
            </p>

            {/* Ejemplo Bootstrap */}
            <div className="bg-[#282a36] rounded-xl p-6 border border-[#ff79c6]/20 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-code-s-slash-line text-[#ff79c6]"></i>
                <span className="text-[#f8f8f2]/60 text-sm">Ejemplo Bootstrap</span>
              </div>
              <pre className="text-sm leading-relaxed">
                <code>
                  <span className="text-[#ff79c6]">&lt;button</span>{' '}
                  <span className="text-[#50fa7b]">class=</span>
                  <span className="text-[#f1fa8c]">"btn btn-primary"</span>
                  <span className="text-[#ff79c6]">&gt;</span>{'\n'}
                  {'  '}
                  <span className="text-[#f8f8f2]">Guardar</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;/button&gt;</span>
                </code>
              </pre>
            </div>

            {/* Ventajas */}
            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-[#50fa7b] text-xl mt-1"></i>
                <span className="text-[#f8f8f2]/80">Menos clases en el HTML</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-[#50fa7b] text-xl mt-1"></i>
                <span className="text-[#f8f8f2]/80">Prototipado ultra rápido</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-[#50fa7b] text-xl mt-1"></i>
                <span className="text-[#f8f8f2]/80">Diseño consistente por defecto</span>
              </div>
            </div>
          </div>

          {/* Utility-First */}
          <div className="bg-[#1e1e2e] rounded-2xl p-8 border border-[#8be9fd]/30 hover:border-[#8be9fd]/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-[#8be9fd]/20 rounded-xl">
                <i className="ri-tools-line text-3xl text-[#8be9fd]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#8be9fd]">Utility-First</h3>
                <p className="text-[#f8f8f2]/60 text-sm">Tailwind CSS</p>
              </div>
            </div>

            <p className="text-[#f8f8f2]/80 mb-6 leading-relaxed">
              En lugar de{' '}
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">
                btn-primary
              </code>
              , usas muchas clases pequeñas que representan una propiedad:{' '}
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">
                bg-blue-500
              </code>
              ,{' '}
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">
                text-white
              </code>
              ,{' '}
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">
                px-4
              </code>
              ,{' '}
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">
                py-2
              </code>
              ,{' '}
              <code className="text-[#50fa7b] bg-[#282a36] px-2 py-1 rounded">
                rounded
              </code>
              .
            </p>

            <p className="text-[#f8f8f2]/80 mb-6 leading-relaxed">
              Diseñas "componiendo utilidades" directamente en el HTML, sin casi escribir CSS propio.
            </p>

            {/* Ejemplo Tailwind */}
            <div className="bg-[#282a36] rounded-xl p-6 border border-[#8be9fd]/20 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-code-s-slash-line text-[#8be9fd]"></i>
                <span className="text-[#f8f8f2]/60 text-sm">Ejemplo Tailwind</span>
              </div>
              <pre className="text-sm leading-relaxed">
                <code>
                  <span className="text-[#ff79c6]">&lt;button</span>{' '}
                  <span className="text-[#50fa7b]">class=</span>
                  <span className="text-[#f1fa8c]">
                    "bg-emerald-400 text-white px-4 py-2 rounded-lg"
                  </span>
                  <span className="text-[#ff79c6]">&gt;</span>{'\n'}
                  {'  '}
                  <span className="text-[#f8f8f2]">Guardar</span>{'\n'}
                  <span className="text-[#ff79c6]">&lt;/button&gt;</span>
                </code>
              </pre>
            </div>

            {/* Ventajas */}
            <div className="mt-6 space-y-2">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-[#50fa7b] text-xl mt-1"></i>
                <span className="text-[#f8f8f2]/80">Control total del diseño</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-[#50fa7b] text-xl mt-1"></i>
                <span className="text-[#f8f8f2]/80">No necesitas escribir CSS custom</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-[#50fa7b] text-xl mt-1"></i>
                <span className="text-[#f8f8f2]/80">Diseños únicos sin limitaciones</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="mt-12 bg-gradient-to-r from-[#ff79c6]/10 to-[#8be9fd]/10 rounded-xl p-6 border border-[#f8f8f2]/10">
          <p className="text-[#f8f8f2] text-center text-lg">
            <span className="font-bold text-[#50fa7b]">
              Ambos enfoques son válidos:
            </span>{' '}
            componente = menos clases pero estilos más rígidos; utility‑first = más control y
            más clases en el HTML.
          </p>
        </div>
      </div>
    </section>
  );
}
