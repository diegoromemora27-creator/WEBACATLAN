
import React from "react";

export default function BEMSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#282a36] to-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#ff79c6]/20 px-6 py-2 rounded-full border border-[#ff79c6]/30 mb-6">
            <span className="text-[#ff79c6] font-bold text-lg">Práctica #2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff79c6] mb-6">
            Convención BEM
          </h2>
          <p className="text-lg text-[#f8f8f2]/80 max-w-3xl mx-auto">
            BEM = Block – Element – Modifier, para nombrar clases de forma estructurada
          </p>
        </div>

        {/* Estructura BEM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1e1e2e] rounded-xl p-6 border border-[#ff79c6]/30">
            <div className="w-12 h-12 flex items-center justify-center bg-[#ff79c6]/20 rounded-lg mb-4">
              <i className="ri-box-3-line text-2xl text-[#ff79c6]"></i>
            </div>
            <h3 className="text-xl font-bold text-[#ff79c6] mb-3">Block</h3>
            <p className="text-[#f8f8f2]/80 mb-4">Componente independiente</p>
            <div className="bg-[#282a36] rounded-lg p-3">
              <code className="text-[#50fa7b] text-sm">.card</code>
              <br />
              <code className="text-[#50fa7b] text-sm">.header</code>
              <br />
              <code className="text-[#50fa7b] text-sm">.button</code>
            </div>
          </div>

          <div className="bg-[#1e1e2e] rounded-xl p-6 border border-[#8be9fd]/30">
            <div className="w-12 h-12 flex items-center justify-center bg-[#8be9fd]/20 rounded-lg mb-4">
              <i className="ri-puzzle-line text-2xl text-[#8be9fd]"></i>
            </div>
            <h3 className="text-xl font-bold text-[#8be9fd] mb-3">Element</h3>
            <p className="text-[#f8f8f2]/80 mb-4">Parte del bloque, con __</p>
            <div className="bg-[#282a36] rounded-lg p-3">
              <code className="text-[#50fa7b] text-sm">.card__title</code>
              <br />
              <code className="text-[#50fa7b] text-sm">.card__image</code>
              <br />
              <code className="text-[#50fa7b] text-sm">.card__text</code>
            </div>
          </div>

          <div className="bg-[#1e1e2e] rounded-xl p-6 border border-[#50fa7b]/30">
            <div className="w-12 h-12 flex items-center justify-center bg-[#50fa7b]/20 rounded-lg mb-4">
              <i className="ri-settings-3-line text-2xl text-[#50fa7b]"></i>
            </div>
            <h3 className="text-xl font-bold text-[#50fa7b] mb-3">Modifier</h3>
            <p className="text-[#f8f8f2]/80 mb-4">Variación/estado, con --</p>
            <div className="bg-[#282a36] rounded-lg p-3">
              <code className="text-[#50fa7b] text-sm">.card--featured</code>
              <br />
              <code className="text-[#50fa7b] text-sm">.button--primary</code>
              <br />
              <code className="text-[#50fa7b] text-sm">.button--disabled</code>
            </div>
          </div>
        </div>

        {/* Ejemplo Completo */}
        <div className="bg-gradient-to-br from-[#282a36] to-[#1e2e2e] rounded-2xl p-8 border border-[#ff79c6]/30 mb-12">
          <h3 className="text-2xl font-bold text-[#f8f8f2] mb-6 flex items-center gap-3">
            <i className="ri-code-s-slash-line text-[#ff79c6]"></i>
            Ejemplo BEM Completo
          </h3>

          <div className="bg-[#282a36] rounded-xl p-6 border border-[#ff79c6]/20 overflow-x-auto mb-6">
            <pre className="text-sm md:text-base leading-relaxed">
              <code>
{`<article class="card card--featured">
  <h3 class="card__title">Artículo destacado</h3>
  <p class="card__text">Contenido...</p>
  <button class="card__button button button--primary">
    Leer más
  </button>
</article>`}
              </code>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#ff79c6]/10 rounded-lg p-4 border border-[#ff79c6]/30">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-box-3-line text-[#ff79c6]"></i>
                <span className="text-[#ff79c6] font-bold">Bloques</span>
              </div>
              <code className="text-[#f8f8f2] text-sm">card, button</code>
            </div>
            <div className="bg-[#8be9fd]/10 rounded-lg p-4 border border-[#8be9fd]/30">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-puzzle-line text-[#8be9fd]"></i>
                <span className="text-[#8be9fd] font-bold">Elementos</span>
              </div>
              <code className="text-[#f8f8f2] text-sm">card__title, card__text, card__button</code>
            </div>
            <div className="bg-[#50fa7b]/10 rounded-lg p-4 border border-[#50fa7b]/30">
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-settings-3-line text-[#50fa7b]"></i>
                <span className="text-[#50fa7b] font-bold">Modificadores</span>
              </div>
              <code className="text-[#f8f8f2] text-sm">card--featured, button--primary</code>
            </div>
          </div>
        </div>

        {/* Ventajas */}
        <div className="bg-[#1e1e2e] rounded-2xl p-8 border border-[#50fa7b]/30">
          <h3 className="text-2xl font-bold text-[#50fa7b] mb-6 flex items-center gap-3">
            <i className="ri-star-line"></i>
            Ventajas de BEM
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <i className="ri-check-double-line text-2xl text-[#50fa7b] flex-shrink-0"></i>
              <div>
                <h4 className="font-bold text-[#f8f8f2] mb-1">Lectura Rápida</h4>
                <p className="text-[#f8f8f2]/70 text-sm">
                  Entiendes la estructura solo viendo las clases
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-shield-check-line text-2xl text-[#50fa7b] flex-shrink-0"></i>
              <div>
                <h4 className="font-bold text-[#f8f8f2] mb-1">Sin Conflictos</h4>
                <p className="text-[#f8f8f2]/70 text-sm">
                  Menos choques de nombres entre componentes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-stack-line text-2xl text-[#50fa7b] flex-shrink-0"></i>
              <div>
                <h4 className="font-bold text-[#f8f8f2] mb-1">Escalable</h4>
                <p className="text-[#f8f8f2]/70 text-sm">
                  Funciona perfecto en proyectos grandes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
