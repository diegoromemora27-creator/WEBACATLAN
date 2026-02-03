
import React from "react";

export default function SemanticHTMLSection() {
  return (
    <section className="py-20 px-4 bg-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#282a36] to-[#1e1e2e] rounded-2xl p-8 md:p-12 border border-[#50fa7b]/30">
          <div className="inline-block bg-[#50fa7b]/20 px-6 py-2 rounded-full border border-[#50fa7b]/30 mb-6">
            <span className="text-[#50fa7b] font-bold text-lg">Práctica #3</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#50fa7b] mb-6">
            HTML Semántico + Clases
          </h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-3">
              <i className="ri-arrow-right-s-line text-2xl text-[#50fa7b] flex-shrink-0"></i>
              <p className="text-[#f8f8f2]/80 text-lg">
                Usa las etiquetas semánticas correctas:{" "}
                <code className="text-[#ff79c6] bg-[#282a36] px-2 py-1 rounded">
                  header
                </code>
                ,{" "}
                <code className="text-[#ff79c6] bg-[#282a36] px-2 py-1 rounded">
                  nav
                </code>
                ,{" "}
                <code className="text-[#ff79c6] bg-[#282a36] px-2 py-1 rounded">
                  main
                </code>
                ,{" "}
                <code className="text-[#ff79c6] bg-[#282a36] px-2 py-1 rounded">
                  section
                </code>
                ,{" "}
                <code className="text-[#ff79c6] bg-[#282a36] px-2 py-1 rounded">
                  article
                </code>
                ,{" "}
                <code className="text-[#ff79c6] bg-[#282a36] px-2 py-1 rounded">
                  footer
                </code>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <i className="ri-arrow-right-s-line text-2xl text-[#50fa7b] flex-shrink-0"></i>
              <p className="text-[#f8f8f2]/80 text-lg">
                Combínalas con clases con sentido de componente, no dupliques la
                semántica en el nombre
              </p>
            </div>
          </div>

          <div className="bg-[#282a36] rounded-xl p-6 border border-[#50fa7b]/20 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <i className="ri-code-s-slash-line text-[#50fa7b]"></i>
              <span className="text-[#f8f8f2]/60 text-sm">
                ejemplo-semantico.html
              </span>
            </div>
            <pre className="text-sm md:text-base leading-relaxed">
              <code>
                {"<"}header{" "}
                <span className="text-[#50fa7b]">class=</span>
                <span className="text-[#f1fa8c]">"site-header"</span>
                {">"}
                {"\n"}
                {"  "}{"<"}nav{" "}
                <span className="text-[#50fa7b]">class=</span>
                <span className="text-[#f1fa8c]">"site-header__nav"</span>
                {">"}
                {"\n"}
                {"    "}{"<"}a{" "}
                <span className="text-[#50fa7b]">class=</span>
                <span className="text-[#f1fa8c]">"site-header__link"</span>{" "}
                <span className="text-[#50fa7b]">href=</span>
                <span className="text-[#f1fa8c]">"/"</span>
                {">"}
                <span className="text-[#f8f8f2]">Inicio</span>
                {"</a>"}
                {"\n"}
                {"  "}{"</nav>"}
                {"\n"}
                {"</header>"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
