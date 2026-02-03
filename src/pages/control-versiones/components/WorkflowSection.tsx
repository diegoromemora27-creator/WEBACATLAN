export default function WorkflowSection() {
  const phases = [
    {
      number: '1',
      title: 'Aislamiento (Feature Branching)',
      subtitle: 'Nunca trabajas en main',
      description: 'Creas una rama secundaria para tu tarea.',
      command: 'git checkout -b feature/dark-mode',
      reason: 'Si tu código falla, la rama main (la que ven los usuarios) sigue funcionando perfectamente.',
      icon: 'ri-git-branch-line',
      color: '#58a6ff'
    },
    {
      number: '2',
      title: 'Trabajo Local y Sincronización',
      subtitle: 'Commits frecuentes',
      description: 'Haces tus cambios, realizas commits frecuentes y subes tu rama a la nube.',
      command: 'git add . → git commit -m "feat: add toggle switch" → git push origin feature/dark-mode',
      reason: 'Mantén un historial claro y sincroniza tu trabajo constantemente.',
      icon: 'ri-upload-cloud-line',
      color: '#3fb950'
    },
    {
      number: '3',
      title: 'El Pull Request (PR) y Code Review',
      subtitle: 'Aquí es donde GitHub brilla',
      description: 'Abres un Pull Request para pedir permiso de unir tu rama a main.',
      command: null,
      reason: 'Revisión por pares: Otros desarrolladores leen tu código, dejan comentarios y sugieren mejoras. No se aprueba nada que no sea legible o que no siga los estándares de la empresa.',
      icon: 'ri-git-pull-request-line',
      color: '#a371f7'
    },
    {
      number: '4',
      title: 'Automatización con GitHub Actions (CI)',
      subtitle: 'Continuous Integration',
      description: 'Antes de que un humano dé el visto bueno final, GitHub Actions entra en escena de forma automática.',
      command: null,
      reason: 'Se ejecutan "Tests" automáticos. Si el test falla, el botón de "Merge" se bloquea. GitHub impide que subas basura al proyecto.',
      icon: 'ri-robot-line',
      color: '#ffa657'
    },
    {
      number: '5',
      title: 'El Merge y Deployment (CD)',
      subtitle: 'Continuous Deployment',
      description: 'Una vez aprobado y pasados los tests, se hace el Merge.',
      command: null,
      reason: 'GitHub Actions detecta el cambio en main y automáticamente envía el nuevo código al servidor real (AWS, Azure, Vercel, etc.). ¡El modo oscuro ya está en vivo!',
      icon: 'ri-rocket-line',
      color: '#f85149'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
            Git Workflow Profesional
          </h2>
          <p className="text-[#8b949e] text-base sm:text-lg max-w-3xl mx-auto">
            Paso a Paso: Imagina que trabajas en una app y quieres agregar un botón de "Modo Oscuro"
          </p>
          <div className="w-24 h-1 bg-[#58a6ff] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-[#0d1117] rounded-xl border border-[#30363d] overflow-hidden shadow-xl hover:border-[#58a6ff] transition-all duration-300"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-2xl text-white"
                    style={{ backgroundColor: `${phase.color}20`, border: `2px solid ${phase.color}` }}
                  >
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-1">
                      Fase {phase.number}: {phase.title}
                    </h3>
                    <p className="text-[#8b949e] text-sm italic">{phase.subtitle}</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${phase.color}20` }}
                  >
                    <i className={`${phase.icon} text-2xl`} style={{ color: phase.color }}></i>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#c9d1d9] text-base mb-4 leading-relaxed">
                  {phase.description}
                </p>

                {/* Command */}
                {phase.command && (
                  <div className="bg-[#161b22] rounded-lg p-4 mb-4 border border-[#30363d]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#3fb950] font-mono text-xs">$</span>
                      <span className="text-[#8b949e] text-xs font-semibold uppercase tracking-wide">Comando:</span>
                    </div>
                    <code className="text-[#3fb950] font-mono text-sm block">
                      {phase.command}
                    </code>
                  </div>
                )}

                {/* Reason */}
                <div className="bg-[#161b22] rounded-lg p-4 border-l-4" style={{ borderColor: phase.color }}>
                  <div className="flex items-start gap-3">
                    <i className="ri-information-line text-lg mt-0.5" style={{ color: phase.color }}></i>
                    <div>
                      <p className="text-[#8b949e] text-sm font-semibold mb-1">Por qué:</p>
                      <p className="text-[#8b949e] text-sm leading-relaxed">
                        {phase.reason}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Note */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#0d1117] to-[#161b22] rounded-xl p-8 border border-[#30363d] shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#3fb950]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-checkbox-circle-line text-2xl text-[#3fb950]"></i>
              </div>
              <div>
                <h4 className="font-bold text-xl text-white mb-3">Resultado Final</h4>
                <p className="text-[#8b949e] text-base leading-relaxed">
                  Este flujo de trabajo garantiza que el código sea <span className="text-[#3fb950] font-semibold">revisado</span>, <span className="text-[#58a6ff] font-semibold">probado</span> y <span className="text-[#ffa657] font-semibold">desplegado automáticamente</span>. Es la forma en que trabajan equipos profesionales en empresas como Google, Microsoft, Facebook y miles de startups alrededor del mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
