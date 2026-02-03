export default function TerminalCommandsSection() {
  const terminalCommands = [
    { cmd: 'pwd', desc: 'Muestra la ruta completa del directorio actual' },
    { cmd: 'ls', desc: 'Lista los archivos y carpetas del directorio actual' },
    { cmd: 'ls -la', desc: 'Lista todos los archivos (incluyendo ocultos) con detalles' },
    { cmd: 'cd [carpeta]', desc: 'Cambia al directorio especificado' },
    { cmd: 'cd ..', desc: 'Sube un nivel en la estructura de carpetas' },
    { cmd: 'mkdir [nombre]', desc: 'Crea una nueva carpeta' },
    { cmd: 'touch [archivo]', desc: 'Crea un archivo vacío' },
    { cmd: 'rm [archivo]', desc: 'Elimina un archivo' },
    { cmd: 'rm -rf [carpeta]', desc: 'Elimina una carpeta y todo su contenido' },
    { cmd: 'cp [origen] [destino]', desc: 'Copia archivos o carpetas' },
    { cmd: 'mv [origen] [destino]', desc: 'Mueve o renombra archivos/carpetas' },
    { cmd: 'cat [archivo]', desc: 'Muestra el contenido de un archivo' },
    { cmd: 'clear', desc: 'Limpia la pantalla del terminal' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Comandos de Terminal Indispensables
          </h2>
          <p className="text-[#8b949e] text-base sm:text-lg max-w-3xl mx-auto">
            Bash/Zsh - Navega por tu sistema como un profesional
          </p>
          <div className="w-24 h-1 bg-[#ffa657] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#1c2128] border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f85149]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffa657]"></div>
                <div className="w-3 h-3 rounded-full bg-[#3fb950]"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-[#8b949e] text-xs font-mono">bash - Terminal</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4 font-mono text-sm">
              {terminalCommands.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-3">
                    <span className="text-[#3fb950] select-none">$</span>
                    <div className="flex-1">
                      <code className="text-[#58a6ff] font-semibold">{item.cmd}</code>
                      <p className="text-[#8b949e] text-xs mt-1 ml-0 group-hover:text-[#c9d1d9] transition-colors duration-200">
                        # {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip */}
          <div className="mt-8 bg-gradient-to-r from-[#161b22] to-[#1c2128] rounded-xl p-6 border border-[#30363d]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#ffa657]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-lightbulb-line text-xl text-[#ffa657]"></i>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Pro Tip</h4>
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  Usa <code className="text-[#3fb950] bg-[#0d1117] px-2 py-1 rounded text-xs">Tab</code> para autocompletar nombres de archivos y carpetas. Usa las flechas <code className="text-[#3fb950] bg-[#0d1117] px-2 py-1 rounded text-xs">↑ ↓</code> para navegar por el historial de comandos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
