import { useEffect, useState } from 'react';
import {
  onlyTeams,
  getAllTeams,
  type SimpleTeam as Team,
  getTotalMembers,
} from '../data/OnlyTeams';

export default function AnalisisEquiposTeams() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const defaultSprint = 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Count total members
  const totalMembers = getTotalMembers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="flex items-center space-x-2 text-[#1b3d70] hover:text-[#bb8800] transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-semibold text-sm">Volver al Inicio</span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-12 w-auto"
            />
            <div className="text-[#1b3d70]">
              <div className="font-bold text-base leading-tight">Gestión de Equipos</div>
              <div className="text-xs opacity-70">Directorio de Proyectos</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#1b3d70] mb-4">
              <i className="ri-team-line mr-3"></i>
              Equipos de Desarrollo
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Directorio completo de todos los equipos del curso. Accede a los repositorios,
              boards de proyecto y contactos de cada equipo.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon="ri-group-line"
              label="Total Equipos"
              value={onlyTeams.length}
              color="blue"
            />
            <StatCard
              icon="ri-user-line"
              label="Total Integrantes"
              value={totalMembers}
              color="green"
            />
            <StatCard
              icon="ri-map-pin-line"
              label="Proyectos Activos"
              value={onlyTeams.filter(t => t.projectName).length}
              color="purple"
            />
          </div>
        </section>

        {/* Evaluation System */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-[#1b3d70]">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-[#1b3d70] mb-2 flex items-center justify-center">
                <i className="ri-bar-chart-box-line mr-3"></i>
                Sistema de Evaluación por Equipos
              </h2>
              <p className="text-gray-600">
                Cada sprint representa el 8.75% de tu calificación final, distribuido en 3 componentes clave
              </p>
            </div>

            {/* Evaluation Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#1b3d70] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Componente</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">% Total</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">% por Sprint (×8)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                      Autoevaluación / Scrum
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-purple-700">20%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-purple-700">2.5%</td>
                  </tr>
                  <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                      Desempeño Individual / Commits
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-700">20%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-700">2.5%</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                      Funcionalidad de Equipo
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-700">30%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-700">3.75%</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="border border-gray-300 px-4 py-3 text-gray-900">Total por sprint</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-900">70%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-[#1b3d70] text-lg">8.75%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Autoevaluación Explanation */}
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 mb-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                <i className="ri-survey-line mr-2"></i>
                1. Autoevaluación / Scrum (2.5%)
              </h3>
              
              <p className="text-gray-700 mb-4">
                Esta evaluación se calcula en base al <strong>promedio del equipo</strong> sobre dos preguntas
                clave del formulario de desempeño:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                    <i className="ri-star-line mr-2"></i>
                    Pregunta 1
                  </h4>
                  <p className="text-sm text-gray-700 mb-2 font-semibold">
                    Autoevaluación de mi Contribución Personal al Sprint
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>Baja ⬤</span>
                    <span className="flex gap-1">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </span>
                    <span>⬤ Alta</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-2 flex items-center">
                    <i className="ri-team-line mr-2"></i>
                    Pregunta 2
                  </h4>
                  <p className="text-sm text-gray-700 mb-2 font-semibold">
                    Evaluación General del Equipo
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>Baja ⬤</span>
                    <span className="flex gap-1">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </span>
                    <span>⬤ Alta</span>
                  </div>
                </div>
              </div>

              {/* Calculation Examples */}
              <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                  <i className="ri-calculator-line mr-2"></i>
                  Cómo se calcula:
                </h4>
                
                <div className="space-y-4">
                  {/* Example 1: Perfect Score */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-semibold text-green-800 mb-1">
                      ✅ Caso ideal: Todos responden 5/5
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      Si todos los integrantes califican con 5 tanto su contribución personal como el desempeño del equipo:
                    </p>
                    <div className="bg-green-50 rounded p-2 text-xs">
                      <span className="font-mono">Promedio = (5 + 5) / 2 = <strong className="text-green-700">5.0</strong></span><br/>
                      <span className="font-mono">Calificación = (5.0 / 5.0) × 2.5% = <strong className="text-green-700">2.5%</strong> ✓</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      <strong>Nota importante:</strong> Este puntaje se coteja con el avance real del proyecto. 
                      Si no hay evidencia de trabajo (commits, entregas), el puntaje puede ajustarse.
                    </p>
                  </div>

                  {/* Example 2: Good Performance */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-semibold text-blue-800 mb-1">
                      👍 Buen desempeño: Promedio 4/5
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      El equipo en general se autoevalúa con 4s y algunos 5s:
                    </p>
                    <div className="bg-blue-50 rounded p-2 text-xs">
                      <span className="font-mono">Promedio = 4.0</span><br/>
                      <span className="font-mono">Calificación = (4.0 / 5.0) × 2.5% = <strong className="text-blue-700">2.0%</strong></span>
                    </div>
                  </div>

                  {/* Example 3: Mixed Performance */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm font-semibold text-yellow-800 mb-1">
                      ⚠️ Desempeño variado: Promedio 3/5
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      Algunas respuestas bajas (2-3) y otras altas (4-5):
                    </p>
                    <div className="bg-yellow-50 rounded p-2 text-xs">
                      <span className="font-mono">Promedio = 3.0</span><br/>
                      <span className="font-mono">Calificación = (3.0 / 5.0) × 2.5% = <strong className="text-yellow-700">1.5%</strong></span>
                    </div>
                  </div>

                  {/* Example 4: Poor Performance */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-sm font-semibold text-red-800 mb-1">
                      ❌ Bajo desempeño: Promedio 2/5 o menos
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      El equipo reporta problemas serios de colaboración o contribución:
                    </p>
                    <div className="bg-red-50 rounded p-2 text-xs">
                      <span className="font-mono">Promedio = 2.0</span><br/>
                      <span className="font-mono">Calificación = (2.0 / 5.0) × 2.5% = <strong className="text-red-700">1.0%</strong></span>
                    </div>
                  </div>
                </div>

                {/* Important Note */}
                <div className="mt-4 bg-amber-50 border border-amber-300 rounded-lg p-3">
                  <p className="text-xs text-amber-900 flex items-start">
                    <i className="ri-alert-line mr-2 mt-0.5 flex-shrink-0"></i>
                    <span>
                      <strong>Verificación cruzada:</strong> Aunque todos califiquen con 5, el profesor 
                      verificará el avance real del proyecto (commits, funcionalidades entregadas, 
                      cumplimiento de deadlines). Si no hay evidencia de trabajo, el puntaje se ajustará proporcionalmente.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Desempeño Individual Explanation */}
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <i className="ri-git-commit-line mr-2"></i>
                2. Desempeño Individual / Commits (2.5%)
              </h3>

              <div className="bg-white rounded-lg p-4 mb-5 border-l-4 border-amber-400">
                <p className="text-sm text-amber-900 flex items-start gap-2">
                  <span className="font-bold">💡 Importante:</span>
                  <span>
                    <strong>2%</strong> está en juego basado en tu desempeño real.
                    <strong>0.5%</strong> es "de regalo" si respondes el formulario de evaluación.
                    Si no respondes el formulario, pierdes automáticamente esos 0.5 puntos.
                  </span>
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Esta evaluación se mide en base a <strong>dos criterios</strong>:
              </p>

              {/* Criterion 1: GitHub Activity */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <i className="ri-github-fill mr-2"></i>
                  Criterio 1: Actividad en GitHub (commits y PRs) - <span className="text-blue-700 ml-1">0.8 pts</span>
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="border border-blue-600 px-3 py-2 text-center font-bold">Puntos</th>
                        <th className="border border-blue-600 px-3 py-2 text-left font-bold">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-green-700">0.8</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          ≥5 commits atómicos con mensajes descriptivos, distribuidos a lo largo del sprint, 
                          PR abierto con descripción y participación en al menos un code review
                        </td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-blue-700">0.6</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          3–4 commits con mensajes aceptables y PR abierto, sin descripción completa o sin code review
                        </td>
                      </tr>
                      <tr className="bg-yellow-50 hover:bg-yellow-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-yellow-700">0.4</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          1–2 commits o mensajes genéricos (fix, update), push directo sin PR
                        </td>
                      </tr>
                      <tr className="bg-orange-50 hover:bg-orange-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-orange-700">0.2</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          Solo 1 commit al final del sprint, sin mensaje claro y sin PR
                        </td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-red-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-red-700">0</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          Sin commits registrados en el sprint
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Criterion 2: Task Management */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <i className="ri-kanban-view mr-2"></i>
                  Criterio 2: Gestión de tareas en Jira / ClickUp / Trello - <span className="text-blue-700 ml-1">1.2 pts</span>
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="border border-blue-600 px-3 py-2 text-center font-bold">Puntos</th>
                        <th className="border border-blue-600 px-3 py-2 text-left font-bold">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-green-700">1.2</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          100% - 90% de tickets en "Done" al cierre del sprint, con actualizaciones visibles durante el sprint
                        </td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-blue-700">0.9</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          75–90% de tickets completados, actualizados pero sin comentarios o estimaciones
                        </td>
                      </tr>
                      <tr className="bg-yellow-50 hover:bg-yellow-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-yellow-700">0.6</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          50–74% de tickets completados o movidos solo al final del sprint
                        </td>
                      </tr>
                      <tr className="bg-orange-50 hover:bg-orange-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-orange-700">0.3</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          Menos del 50% completados o sin movimiento durante el sprint
                        </td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-red-100">
                        <td className="border border-blue-300 px-3 py-2 text-center font-bold text-red-700">0</td>
                        <td className="border border-blue-300 px-3 py-2 text-gray-700">
                          Sin tickets asignados, no los creó o no interactuó con el tablero
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-gray-600 mt-3 italic flex items-start gap-2">
                  <span className="flex-shrink-0">📌</span>
                  <span>
                    <strong>Nota importante:</strong> Si no hay commits a revisar en un sprint, 
                    toda la evaluación se carga a las actividades de seguimiento en Jira/ClickUp/Trello.
                  </span>
                </p>
              </div>

              {/* Calculation Examples */}
              <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                  <i className="ri-calculator-line mr-2"></i>
                  Cómo se calcula:
                </h4>

                <div className="space-y-4">
                  {/* Example 1: Perfect */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-semibold text-green-800 mb-1">
                      ✅ Desempeño excelente
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      GitHub 0.8 + Jira 1.2 = 2.0 pts (máximo en juego)
                    </p>
                    <div className="bg-green-50 rounded p-2 text-xs space-y-1">
                      <span className="font-mono block"><strong>0.8</strong> (GitHub: 5+ commits + PR + code review)</span>
                      <span className="font-mono block"><strong>+ 1.2</strong> (Jira: 90-100% tickets Done)</span>
                      <span className="font-mono block border-t pt-1"><strong className="text-green-700">= 2.0 pts</strong> + 0.5 (formulario) = <strong className="text-green-700">2.5%</strong> ✓</span>
                    </div>
                  </div>

                  {/* Example 2: Good */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-semibold text-blue-800 mb-1">
                      👍 Buen desempeño
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      GitHub 0.6 + Jira 0.9 = 1.5 pts (en juego)
                    </p>
                    <div className="bg-blue-50 rounded p-2 text-xs space-y-1">
                      <span className="font-mono block"><strong>0.6</strong> (GitHub: 3-4 commits + PR)</span>
                      <span className="font-mono block"><strong>+ 0.9</strong> (Jira: 75-90% tickets Done)</span>
                      <span className="font-mono block border-t pt-1"><strong className="text-blue-700">= 1.5 pts</strong> + 0.5 (formulario) = <strong className="text-blue-700">2.0%</strong></span>
                    </div>
                  </div>

                  {/* Example 3: Mixed */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm font-semibold text-yellow-800 mb-1">
                      ⚠️ Desempeño variado
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      GitHub 0.4 + Jira 0.6 = 1.0 pts (en juego)
                    </p>
                    <div className="bg-yellow-50 rounded p-2 text-xs space-y-1">
                      <span className="font-mono block"><strong>0.4</strong> (GitHub: 1-2 commits, sin PR)</span>
                      <span className="font-mono block"><strong>+ 0.6</strong> (Jira: 50-74% tickets completados)</span>
                      <span className="font-mono block border-t pt-1"><strong className="text-yellow-700">= 1.0 pts</strong> + 0.5 (formulario) = <strong className="text-yellow-700">1.5%</strong></span>
                    </div>
                  </div>

                  {/* Example 4: Sin formulario */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-sm font-semibold text-red-800 mb-1">
                      ❌ Olvidas responder el formulario
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      Aunque tengas buen desempeño: GitHub 0.8 + Jira 1.2 = 2.0 pts
                    </p>
                    <div className="bg-red-50 rounded p-2 text-xs space-y-1">
                      <span className="font-mono block"><strong>0.8</strong> (GitHub: excelente)</span>
                      <span className="font-mono block"><strong>+ 1.2</strong> (Jira: 100% Done)</span>
                      <span className="font-mono block border-t pt-1"><strong className="text-red-700">= 2.0 pts</strong> + 0 (SIN formulario) = <strong className="text-red-700">2.0%</strong> ❌</span>
                    </div>
                    <p className="text-xs text-red-700 font-semibold mt-2">
                      Perdiste los 0.5 puntos de regalo por no responder el formulario
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Funcionalidad de Equipo Explanation */}
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <i className="ri-checkbox-multiple-line mr-2"></i>
                3. Funcionalidad de Equipo (3.75% por sprint)
              </h3>

              <p className="text-gray-700 mb-4 text-sm">
                <strong>Acumulado en 8 sprints:</strong> 3.75 × 8 = 30 puntos = 30%
              </p>

              <p className="text-gray-700 mb-4">
                Esta evaluación se mide en base a <strong>tres criterios</strong> que valoran 
                qué y cuán bien entrega el equipo:
              </p>

              {/* Criterion 1: Completeness */}
              <div className="mb-6">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <i className="ri-checkbox-circle-line mr-2"></i>
                  Criterio 1: Funcionalidades completadas vs. planeadas - <span className="text-green-700 ml-1">1.5 pts</span>
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-green-600 px-3 py-2 text-center font-bold">Puntos</th>
                        <th className="border border-green-600 px-3 py-2 text-left font-bold">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-green-700">1.5</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          El equipo completó el 100% de lo que se comprometió a entregar en el sprint. 
                          Todo lo planeado en el tablero está en "Done" y fue demostrado en el sprint review
                        </td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-blue-700">1.1</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Se completó entre el 75–99% de lo planeado. Lo que faltó es menor y no afecta el flujo principal de la funcionalidad entregada
                        </td>
                      </tr>
                      <tr className="bg-yellow-50 hover:bg-yellow-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-yellow-700">0.7</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Se completó entre el 50–74% de lo planeado. Hay partes incompletas que limitan la funcionalidad, 
                          pero existe algo demostrable
                        </td>
                      </tr>
                      <tr className="bg-orange-50 hover:bg-orange-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-orange-700">0.3</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Se completó menos del 50% de lo planeado o la demo fue muy parcial y no refleja el sprint goal
                        </td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-red-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-red-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          No hubo entrega, demo ni evidencia de avance en el sprint
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Criterion 2: Quality */}
              <div className="mb-6">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <i className="ri-bug-line mr-2"></i>
                  Criterio 2: Calidad funcional - <span className="text-green-700 ml-1">1.25 pts</span>
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-green-600 px-3 py-2 text-center font-bold">Puntos</th>
                        <th className="border border-green-600 px-3 py-2 text-left font-bold">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-green-700">1.25</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Lo entregado funciona sin errores bloqueantes. El flujo principal corre de principio a fin 
                          durante la demo sin interrupciones
                        </td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-blue-700">0.9</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Hay 1–2 detalles menores (visuales, mensajes de error, casos edge), pero el flujo principal funciona correctamente
                        </td>
                      </tr>
                      <tr className="bg-yellow-50 hover:bg-yellow-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-yellow-700">0.6</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Hay errores evidentes que interrumpen partes del flujo, pero el equipo puede mostrar al menos una funcionalidad estable
                        </td>
                      </tr>
                      <tr className="bg-orange-50 hover:bg-orange-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-orange-700">0.3</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Lo entregado falla frecuentemente o solo funciona en condiciones muy controladas
                        </td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-red-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-red-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Nada de lo entregado funciona o no hubo demo
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Criterion 3: Documentation */}
              <div className="mb-6">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <i className="ri-file-text-line mr-2"></i>
                  Criterio 3: Documentación del sprint - <span className="text-green-700 ml-1">1.0 pts</span>
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-green-600 px-3 py-2 text-center font-bold">Puntos</th>
                        <th className="border border-green-600 px-3 py-2 text-left font-bold">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50 hover:bg-green-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-green-700">1.0</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Todos los tickets del sprint están cerrados y actualizados. Existe evidencia escrita del avance 
                          (README, comentarios en tickets, wiki, notas de retrospectiva o cualquier documento del equipo)
                        </td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-blue-700">0.7</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          La mayoría de los tickets están cerrados. Hay algo de documentación pero incompleta o sin estructura clara
                        </td>
                      </tr>
                      <tr className="bg-yellow-50 hover:bg-yellow-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-yellow-700">0.4</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Pocos tickets actualizados o la documentación es mínima (solo títulos, sin descripciones ni evidencia)
                        </td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-red-100">
                        <td className="border border-green-300 px-3 py-2 text-center font-bold text-red-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-gray-700">
                          Los tickets no fueron actualizados y no existe ningún tipo de documentación del sprint
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sum Table */}
              <div className="bg-white rounded-lg p-5 border-2 border-green-400 mb-6">
                <h4 className="font-bold text-green-900 mb-3 flex items-center">
                  <i className="ri-calculator-line mr-2"></i>
                  Tabla de suma por sprint
                </h4>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-700 text-white">
                        <th className="border border-green-600 px-3 py-2 text-center font-bold text-xs">Funcionalidades<br/>(máx. 1.5)</th>
                        <th className="border border-green-600 px-3 py-2 text-center font-bold text-xs">Calidad funcional<br/>(máx. 1.25)</th>
                        <th className="border border-green-600 px-3 py-2 text-center font-bold text-xs">Documentación<br/>(máx. 1.0)</th>
                        <th className="border border-green-600 px-3 py-2 text-center font-bold text-xs">Total sprint<br/>(máx. 3.75 pts)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50 font-bold">
                        <td className="border border-green-300 px-3 py-2 text-center text-green-700">1.5</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-green-700">1.25</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-green-700">1.0</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-green-700 text-base">✅ 3.75</td>
                      </tr>
                      <tr className="bg-blue-50 font-bold">
                        <td className="border border-green-300 px-3 py-2 text-center text-blue-700">1.1</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-blue-700">0.9</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-blue-700">0.7</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-blue-700 text-base">👍 2.7</td>
                      </tr>
                      <tr className="bg-yellow-50 font-bold">
                        <td className="border border-green-300 px-3 py-2 text-center text-yellow-700">0.7</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-yellow-700">0.6</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-yellow-700">0.4</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-yellow-700 text-base">⚠️ 1.7</td>
                      </tr>
                      <tr className="bg-orange-50 font-bold">
                        <td className="border border-green-300 px-3 py-2 text-center text-orange-700">0.3</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-orange-700">0.3</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-orange-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-orange-700 text-base">⚠️ 0.6</td>
                      </tr>
                      <tr className="bg-red-50 font-bold">
                        <td className="border border-green-300 px-3 py-2 text-center text-red-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-red-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-red-700">0</td>
                        <td className="border border-green-300 px-3 py-2 text-center text-red-700 text-base">❌ 0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Notes */}
              <div className="space-y-3">
                <div className="bg-green-100 border border-green-400 rounded-lg p-3">
                  <p className="text-xs text-green-900 flex items-start gap-2">
                    <span className="flex-shrink-0">✅</span>
                    <span>
                      <strong>Caso ideal:</strong> El equipo completa todo (1.5), sin bugs (1.25) 
                      y documenta bien (1.0) = <strong>3.75 pts</strong>
                    </span>
                  </p>
                </div>

                <div className="bg-amber-100 border border-amber-400 rounded-lg p-3">
                  <p className="text-xs text-amber-900 flex items-start gap-2">
                    <span className="flex-shrink-0">💡</span>
                    <span>
                      <strong>Nota:</strong> Los 3.75 puntos por sprint se repiten 8 veces a lo largo del curso. 
                      Tu calificación final de funcionalidad (30%) es el promedio de los 8 sprints.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1b3d70] flex items-center">
              <i className="ri-layout-grid-fill mr-3"></i>
              Todos los Equipos
            </h2>
            <a
              href="/analisis-equipos/sprint-1"
              className="flex items-center space-x-2 bg-[#1b3d70] text-white px-4 py-2 rounded-lg hover:bg-[#bb8800] transition-colors"
            >
              <i className="ri-bar-chart-grouped-line"></i>
              <span>Ver Análisis Sprint 1</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlyTeams.map(team => (
              <TeamCard
                key={team.id}
                team={team}
                isSelected={selectedTeam === team.id}
                onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
              />
            ))}
          </div>
        </section>

        {/* Selected Team Details */}
        {selectedTeam && (
          <TeamDetails teamId={selectedTeam} />
        )}
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#1b3d70] text-white rounded-full shadow-lg hover:bg-[#bb8800] transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 z-40"
        aria-label="Volver arriba"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </div>
  );
}

// ========================================
// COMPONENTS
// ========================================

function StatCard({ icon, label, value, color }: { 
  icon: string; 
  label: string; 
  value: number; 
  color: 'blue' | 'green' | 'purple';
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
  };

  return (
    <div className={`rounded-xl p-6 border ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{label}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <i className={`${icon} text-4xl opacity-50`}></i>
      </div>
    </div>
  );
}

function TeamCard({ team, isSelected, onClick }: { 
  team: Team; 
  isSelected: boolean;
  onClick: () => void;
}) {
  const MIN_TEAM_SIZE = 4;
  const hasLowMembers = team.members.length < MIN_TEAM_SIZE;

  const getBoardIcon = (tool: string) => {
    switch (tool) {
      case 'Jira': return 'ri-jira-line';
      case 'Notion': return 'ri-notion-line';
      case 'ClickUp': return 'ri-checkbox-circle-line';
      case 'Trello': return 'ri-trello-line';
      case 'Google Docs': return 'ri-google-docs-line';
      case 'Readdy': return 'ri-edit-line';
      default: return 'ri-kanban-view';
    }
  };

  // Check if this is a top team
  const isTopTeam = team.id === 7 || team.id === 8;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
        isSelected ? 'border-[#1b3d70]' : isTopTeam ? 'border-yellow-300' : 'border-transparent'
      }`}
    >
      <div className="p-6">
        {/* Top Team Badge */}
        {isTopTeam && (
          <div className="mb-3">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              🏆 TOP PERFORMER
            </span>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#1b3d70]">{team.name}</h3>
            {team.projectName && (
              <p className="text-sm text-gray-500">{team.projectName}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              hasLowMembers 
                ? 'bg-red-100 text-red-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {team.members.length} <i className="ri-user-line ml-1"></i>
            </span>
          </div>
        </div>

        {/* Low Members Warning */}
        {hasLowMembers && (
          <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-700 flex items-center">
              <i className="ri-alarm-warning-line mr-2"></i>
              <span><strong>Faltan integrantes:</strong> Mínimo {MIN_TEAM_SIZE} miembros</span>
            </p>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          {team.members.length} miembros trabajando en el proyecto <strong>{team.projectName || 'Sin nombre'}</strong>
        </p>

        {/* Team Links */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <a
            href={team.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#1b3d70] transition-colors text-sm"
          >
            <i className="ri-github-fill text-lg"></i>
            <span>GitHub</span>
          </a>
          {team.boardUrl && (
            <a
              href={team.boardUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#1b3d70] transition-colors text-sm"
            >
              <i className={`${getBoardIcon(team.boardTool)} text-lg`}></i>
              <span>{team.boardTool}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function TeamDetails({ teamId }: { teamId: number }) {
  const team = onlyTeams.find(t => t.id === teamId);

  if (!team) return null;

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1b3d70]">
            <i className="ri-information-line mr-3"></i>
            Información del {team.name}
          </h2>
          {(teamId === 7 || teamId === 8) && (
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🏆 TOP PERFORMER
            </span>
          )}
        </div>

        {/* Project Info */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <h3 className="font-semibold text-[#1b3d70] mb-4">
            <i className="ri-folder-line mr-2"></i>
            Proyecto
          </h3>
          <p className="text-gray-700 text-lg font-medium mb-2">{team.projectName || 'Sin nombre asignado'}</p>
          <p className="text-gray-600">Este equipo está trabajando en el desarrollo y mantenimiento del proyecto <strong>{team.projectName}</strong>.</p>
        </div>

        {/* Team Links */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-[#1b3d70] mb-4">
            <i className="ri-links-line mr-2"></i>
            Enlaces del Equipo
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={team.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#1b3d70]"
            >
              <i className="ri-github-fill text-2xl"></i>
              <span className="font-medium">Repositorio GitHub</span>
              <i className="ri-external-link-line"></i>
            </a>
            {team.boardUrl && (
              <a
                href={team.boardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-[#1b3d70]"
              >
                <i className="ri-kanban-view text-2xl"></i>
                <span className="font-medium">Board ({team.boardTool})</span>
                <i className="ri-external-link-line"></i>
              </a>
            )}
          </div>
        </div>

        {/* Members List */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#1b3d70] mb-4 flex items-center">
            <i className="ri-group-line mr-2"></i>
            Integrantes del Equipo
            <span className="ml-2 px-2 py-0.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
              {team.members.length}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {team.members.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#1b3d70] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800">{member.name}</p>
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-xs text-blue-600 hover:text-blue-800 transition-colors truncate block"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1b3d70] to-blue-600 rounded-xl p-6 text-white text-center">
          <h3 className="text-lg font-semibold mb-2">
            <i className="ri-bar-chart-grouped-line mr-2"></i>
            Ver Análisis de Desempeño
          </h3>
          <p className="text-white/80 mb-4">Accede al dashboard de análisis de Sprint 1 para ver métricas de desempeño y recomendaciones.</p>
          <a
            href="/analisis-equipos/sprint-1"
            className="inline-block bg-white text-[#1b3d70] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Ver Análisis Sprint 1
          </a>
        </div>
      </div>
    </section>
  );
}
