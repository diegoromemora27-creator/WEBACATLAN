
import React from "react";

export default function OrganizationSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#282a36] to-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#1e1e2e] to-[#282a36] rounded-2xl p-8 md:p-12 border border-[#f1fa8c]/30">
          <div className="inline-block bg-[#f1fa8c]/20 px-6 py-2 rounded-full border border-[#f1fa8c]/30 mb-6">
            <span className="text-[#f1fa8c] font-bold text-lg">Práctica #5</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#f1fa8c] mb-8">
            Organización del CSS
          </h2>

          <div className="space-y-6 mb-8">
            {/* Agrupa por Componente/Bloque */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#f1fa8c]/20 rounded-lg flex-shrink-0">
                <i className="ri-folder-line text-xl text-[#f1fa8c]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f8f8f2] mb-2">
                  Agrupa por Componente/Bloque
                </h3>
                <p className="text-[#f8f8f2]/80">
                  Sobre todo si usas BEM, mantén todos los estilos de un
                  componente juntos
                </p>
              </div>
            </div>

            {/* Evita Selectores Ultra Específicos */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#ff5555]/20 rounded-lg flex-shrink-0">
                <i className="ri-close-circle-line text-xl text-[#ff5555]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f8f8f2] mb-2">
                  Evita Selectores Ultra Específicos
                </h3>
                <p className="text-[#f8f8f2]/80">
                  No uses selectores tipo{" "}
                  <code className="text-[#ff5555] bg-[#282a36] px-2 py-1 rounded">
                    main &gt; div &gt; ul li a
                  </code>
                </p>
              </div>
            </div>

            {/* Usa Clases Simples */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#50fa7b]/20 rounded-lg flex-shrink-0">
                <i className="ri-check-line text-xl text-[#50fa7b]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f8f8f2] mb-2">
                  Usa Clases Simples
                </h3>
                <p className="text-[#f8f8f2]/80">
                  Intenta que la mayor parte de tus selectores sean solo clases o
                  combinaciones simples
                </p>
              </div>
            </div>
          </div>

          {/* Code block */}
          <div className="bg-[#282a36] rounded-xl p-6 border border-[#f1fa8c]/20 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <i className="ri-code-s-slash-line text-[#f1fa8c]" />
              <span className="text-[#f8f8f2]/60 text-sm">styles.css</span>
            </div>
            <pre className="text-sm md:text-base leading-relaxed">
              <code>
                {/* ===== Card Component ===== */}
                <span className="text-[#6272a4]">{'/* ===== Card Component ===== */'}</span>
                {'\n'}
                <span className="text-[#50fa7b]">{'.card'}</span> {'{' + '\n'}
                {'  '}
                <span className="text-[#8be9fd]">{'background'}</span>
                {': '}
                <span className="text-[#f8f8f2]">{'white'}</span>;
                {'\n'}
                {'  '}
                <span className="text-[#8be9fd]">{'border-radius'}</span>
                {': '}
                <span className="text-[#bd93f9]">{'8px'}</span>;
                {'\n'}
                {'}'}
                {'\n\n'}
                <span className="text-[#50fa7b]">{'.card__title'}</span> {'{' + '\n'}
                {'  '}
                <span className="text-[#8be9fd]">{'font-size'}</span>
                {': '}
                <span className="text-[#bd93f9]">{'1.5rem'}</span>;
                {'\n'}
                {'  '}
                <span className="text-[#8be9fd]">{'font-weight'}</span>
                {': '}
                <span className="text-[#bd93f9]">{'bold'}</span>;
                {'\n'}
                {'}'}
                {'\n\n'}
                {/* ===== Navigation ===== */}
                <span className="text-[#6272a4]">{'/* ===== Navigation ===== */'}</span>
                {'\n'}
                <span className="text-[#50fa7b]">{'.nav a'}</span> {'{' + '\n'}
                {'  '}
                <span className="text-[#8be9fd]">{'color'}</span>
                {': '}
                <span className="text-[#f8f8f2]">{'white'}</span>;
                {'\n'}
                {'  '}
                <span className="text-[#8be9fd]">{'text-decoration'}</span>
                {': '}
                <span className="text-[#f8f8f2]">{'none'}</span>;
                {'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
