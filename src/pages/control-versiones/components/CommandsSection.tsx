export default function CommandsSection() {
  const commands = [
    { cmd: 'git init', desc: 'Crea un nuevo repositorio Git local.' },
    { cmd: 'git clone [url]', desc: 'Descarga un proyecto existente desde GitHub a tu PC.' },
    { cmd: 'git status', desc: 'Muestra qué archivos han cambiado y cuáles están listos para guardarse.' },
    { cmd: 'git add .', desc: 'Prepara todos los archivos cambiados para el siguiente guardado.' },
    { cmd: 'git commit -m "mensaje"', desc: 'Guarda los cambios en el historial con un comentario descriptivo.' },
    { cmd: 'git push', desc: 'Sube tus cambios locales al repositorio remoto (GitHub).' },
    { cmd: 'git pull', desc: 'Trae y combina los cambios más recientes del servidor a tu PC.' },
    { cmd: 'git branch', desc: 'Lista las ramas (versiones paralelas) de tu proyecto.' },
    { cmd: 'git checkout [nombre]', desc: 'Te cambia a una rama específica.' },
    { cmd: 'git checkout -b [nombre]', desc: 'Crea una rama nueva y te cambia a ella de inmediato.' },
    { cmd: 'git merge [rama]', desc: 'Une los cambios de una rama con la rama actual.' },
    { cmd: 'git log', desc: 'Muestra el historial de todos los commits realizados.' },
    { cmd: 'git remote add origin [url]', desc: 'Conecta tu repositorio local con uno en GitHub.' },
    { cmd: 'git diff', desc: 'Muestra las diferencias exactas línea por línea de lo que cambiaste.' },
    { cmd: 'git reset [archivo]', desc: 'Quita un archivo del área de preparación (unstage).' },
    { cmd: 'git rm [archivo]', desc: 'Elimina un archivo del proyecto y del seguimiento de Git.' },
    { cmd: 'git stash', desc: 'Guarda temporalmente cambios sin terminar para limpiar el área de trabajo.' },
    { cmd: 'git stash pop', desc: 'Recupera los cambios guardados previamente con stash.' },
    { cmd: 'git fetch', desc: 'Descarga el historial del servidor pero sin aplicar los cambios aún.' },
    { cmd: 'git remote -v', desc: 'Muestra las URLs de los servidores remotos conectados.' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Los 20 Comandos de Git Más Usados
          </h2>
          <p className="text-[#8b949e] text-base sm:text-lg max-w-3xl mx-auto">
            Domina estos comandos y estarás listo para trabajar profesionalmente con Git
          </p>
          <div className="w-24 h-1 bg-[#3fb950] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden shadow-xl">
            {/* Table Header */}
            <div className="bg-[#161b22] border-b border-[#30363d] px-6 py-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5 font-bold text-sm text-[#58a6ff] uppercase tracking-wide">
                  Comando
                </div>
                <div className="col-span-7 font-bold text-sm text-[#58a6ff] uppercase tracking-wide">
                  Descripción
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#30363d]">
              {commands.map((item, index) => (
                <div
                  key={index}
                  className="px-6 py-4 hover:bg-[#161b22] transition-colors duration-200"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5">
                      <code className="text-[#3fb950] font-mono text-sm bg-[#161b22] px-3 py-1.5 rounded border border-[#30363d] inline-block">
                        {item.cmd}
                      </code>
                    </div>
                    <div className="col-span-7">
                      <p className="text-[#8b949e] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
