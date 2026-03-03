import { useEffect, useState } from 'react';
import {
  onlyTeams,
  getAllTeams,
  type SimpleTeam as Team,
  getTotalMembers,
} from '../data/OnlyTeams';

export default function AnalisisEquiposTeams() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const defaultSprint = 1;

  const toggleDropdown = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

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

            {/* Autoevaluación / Scrum Section */}
            <div className="bg-purple-50 rounded-xl border-2 border-purple-200 mb-6">
              {/* Dropdown Header */}
              <button
                onClick={() => toggleDropdown('autoevaluacion')}
                className="w-full flex items-center justify-between p-6 hover:bg-purple-100 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-purple-900 flex items-center">
                  <i className="ri-survey-line mr-2"></i>
                  1. Autoevaluación / Scrum (2.5% por sprint = 20% total)
                </h3>
                <i className={`ri-chevron-down-line text-purple-900 text-2xl transition-transform duration-300 ${openDropdown === 'autoevaluacion' ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Content */}
              {openDropdown === 'autoevaluacion' && (
                <div className="px-6 pb-6 border-t-2 border-purple-200">
                  <div className="bg-purple-100 border-l-4 border-purple-600 p-4 mb-6">
                    <p className="text-sm text-purple-900 font-semibold">
                      <i className="ri-calendar-check-line mr-2"></i>
                      Evaluación al final del semestre con el reporte de los 8 formularios
                    </p>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Esta evaluación se basa en dos componentes que miden tanto la <strong>constancia</strong> en 
                    responder los formularios como la <strong>calidad de la autoevaluación</strong> que haces de 
                    tu trabajo durante todo el semestre.
                  </p>

              {/* Componente 1: Participación */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-3 flex items-center text-lg">
                    <i className="ri-file-list-3-line mr-2"></i>
                    Componente 1: Participación y constancia en formularios
                    <span className="ml-auto text-purple-700">8 puntos de 20</span>
                  </h4>
                  
                  <p className="text-sm text-gray-700 mb-4 italic">
                    No importa qué tan bien te autoevalúes si no respondiste. Este criterio premia 
                    simplemente haber completado los 8 formularios a lo largo del semestre.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-purple-700 text-white">
                          <th className="border border-purple-600 px-4 py-2 text-center font-bold">Formularios respondidos</th>
                          <th className="border border-purple-600 px-4 py-2 text-center font-bold">Puntos obtenidos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            8 de 8
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-green-700">
                            8 pts
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            7 de 8
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-blue-700">
                            6 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            6 de 8
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-yellow-700">
                            4 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            5 de 8
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-orange-700">
                            2 pts
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            4 o menos
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Componente 2: Autoevaluación */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-3 flex items-center text-lg">
                    <i className="ri-star-line mr-2"></i>
                    Componente 2: Autoevaluación de contribución personal
                    <span className="ml-auto text-purple-700">12 puntos de 20</span>
                  </h4>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    Se calcula con el <strong>promedio de las respuestas</strong> dadas a lo largo de los 8 formularios. 
                    Cada formulario usa escala 1–5 en la pregunta <strong>Autoevaluación de mi Contribución Personal al Sprint</strong> 
                    (máximo 5 puntos por formulario).
                  </p>

                  {/* Fórmula */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-4 border border-purple-200">
                    <p className="text-xs text-purple-900 font-semibold mb-2">📐 Fórmula de cálculo:</p>
                    <div className="bg-white rounded p-3 font-mono text-sm text-center border border-purple-300">
                      <div className="mb-2">
                        Promedio general = <span className="text-purple-700 font-bold">(Σ Respuesta formulario<sub>i</sub> / (8 × 5)) × 100</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-2">
                        Donde: Respuesta formulario<sub>i</sub> = respuesta del formulario i (rango 1-5, máx. 5 pts)
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Total posible: 8 formularios × 5 pts = <strong>40 puntos</strong>
                      </div>
                    </div>
                  </div>

                  {/* Tabla de conversión */}
                  <p className="text-sm text-gray-700 mb-3 font-semibold">
                    Ese porcentaje se convierte a los 12 puntos de la siguiente manera:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-purple-700 text-white">
                          <th className="border border-purple-600 px-4 py-2 text-center font-bold">Promedio general</th>
                          <th className="border border-purple-600 px-4 py-2 text-center font-bold">Puntos obtenidos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            90–100%
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-green-700">
                            12 pts
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            75–89%
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-blue-700">
                            9 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            60–74%
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-yellow-700">
                            6 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            45–59%
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-orange-700">
                            3 pts
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-purple-300 px-4 py-2 text-center font-semibold text-gray-700">
                            Menos del 45%
                          </td>
                          <td className="border border-purple-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Verificación con Jira */}
              <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4">
                <h5 className="font-bold text-amber-900 mb-2 flex items-center">
                  <i className="ri-shield-check-line mr-2"></i>
                  Verificación cruzada con Jira / ClickUp
                </h5>
                <p className="text-sm text-amber-900">
                  <strong>Importante:</strong> Se coteja el rendimiento reportado en los formularios con la 
                  actividad real en Jira/ClickUp:
                </p>
                <ul className="text-sm text-amber-900 mt-2 space-y-1 ml-5">
                  <li className="flex items-start">
                    <i className="ri-close-circle-fill text-red-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Sin actividad en Jira:</strong> Si no hay movimiento de tickets, creación de tareas, 
                      o actualización del board, la calificación se reduce a <strong>solo 0.5 décimas</strong> 
                      (independiente de lo que hayas reportado en los formularios).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-green-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Con actividad en Jira:</strong> Si hay tickets creados, movimientos en el board, 
                      comentarios y evidencia de trabajo, se respeta la autoevaluación calculada.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Ejemplo de cálculo */}
              <div className="mt-6 bg-white rounded-lg p-5 border-2 border-purple-400">
                <h5 className="font-bold text-purple-900 mb-3 flex items-center">
                  <i className="ri-calculator-line mr-2"></i>
                  Ejemplo de cálculo completo
                </h5>

                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-500 pl-3 bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-800 mb-2">✅ Caso ideal:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Respondiste los <strong>8 formularios</strong> → 8 pts (Componente 1)</li>
                      <li>• Suma total de tus respuestas: 38 de 40 posibles (8 formularios × 5 pts máx.)</li>
                      <li>• Promedio: (38 / 40) × 100 = <strong>95%</strong> → 12 pts (Componente 2)</li>
                      <li>• Hay actividad en Jira → Se respeta la autoevaluación</li>
                      <li className="font-bold text-green-700 pt-2 border-t border-green-300 mt-2">
                        = <strong>8 + 12 = 20 puntos de 20</strong> ✓
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-3 bg-yellow-50 p-3 rounded">
                    <p className="font-semibold text-yellow-800 mb-2">⚠️ Caso con fallas:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Respondiste solo <strong>6 formularios</strong> → 4 pts (Componente 1)</li>
                      <li>• Suma total de esos 6 formularios: 28 de 40 posibles (promediaste 4.67 de 5 en cada uno)</li>
                      <li>• Promedio: (28 / 40) × 100 = <strong>70%</strong> → 6 pts (Componente 2)</li>
                      <li>• Hay actividad en Jira → Se respeta</li>
                      <li className="font-bold text-yellow-700 pt-2 border-t border-yellow-300 mt-2">
                        = <strong>4 + 6 = 10 puntos de 20</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-3 bg-red-50 p-3 rounded">
                    <p className="font-semibold text-red-800 mb-2">❌ Caso sin actividad en Jira:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Respondiste los <strong>8 formularios</strong> → 8 pts (Componente 1)</li>
                      <li>• Promedio: 95% → 12 pts (Componente 2)</li>
                      <li className="text-red-700 font-semibold">
                        ⚠️ PERO: No hay tickets, ni movimientos en Jira durante el semestre
                      </li>
                      <li className="font-bold text-red-700 pt-2 border-t border-red-300 mt-2">
                        = Calificación ajustada a <strong>0.5 puntos de 20</strong> ❌
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                </div>
              )}
            </div>

            {/* Desempeño Individual / Commits Section */}
            <div className="bg-blue-50 rounded-xl border-2 border-blue-200 mb-6">
              {/* Dropdown Header */}
              <button
                onClick={() => toggleDropdown('desempeno')}
                className="w-full flex items-center justify-between p-6 hover:bg-blue-100 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-blue-900 flex items-center">
                  <i className="ri-git-commit-line mr-2"></i>
                  2. Desempeño Individual Técnico (2.5% por sprint = 20% total)
                </h3>
                <i className={`ri-chevron-down-line text-blue-900 text-2xl transition-transform duration-300 ${openDropdown === 'desempeno' ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Content */}
              {openDropdown === 'desempeno' && (
                <div className="px-6 pb-6 border-t-2 border-blue-200">
                  <div className="bg-blue-100 border-l-4 border-blue-600 p-4 mb-6">
                    <p className="text-sm text-blue-900 font-semibold">
                      <i className="ri-calendar-check-line mr-2"></i>
                      Evaluación al final del semestre con reporte de GitHub y tablero
                    </p>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Esta evaluación mide tu <strong>contribución técnica real</strong> al proyecto a través de dos 
                    componentes: tu actividad en GitHub (commits, PRs, code reviews) y tu gestión de tareas en el 
                    tablero del equipo (Jira/ClickUp/Trello).
                  </p>

              {/* Componente 1: Actividad en GitHub */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center text-lg">
                    <i className="ri-github-fill mr-2"></i>
                    Componente 1: Actividad en GitHub
                    <span className="ml-auto text-blue-700">12 puntos de 20</span>
                  </h4>
                  
                  <p className="text-sm text-gray-700 mb-4 italic">
                    Se revisa el historial completo de commits, PRs y code reviews del alumno a lo largo de 
                    los 8 sprints. La calidad y consistencia del trabajo técnico son fundamentales.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-blue-700 text-white">
                          <th className="border border-blue-600 px-4 py-2 text-left font-bold">Evidencia</th>
                          <th className="border border-blue-600 px-4 py-2 text-center font-bold">Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Commits consistentes</strong> en todos los sprints, mensajes descriptivos, 
                            participó en PRs y/o code reviews
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-green-700">
                            12 pts
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Commits en la mayoría</strong> de los sprints, mensajes aceptables, 
                            al menos algunos PRs
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-blue-700">
                            9 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Commits irregulares</strong>, mensajes genéricos (fix, update), 
                            pocos o ningún PR
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-yellow-700">
                            6 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Commits solo al final</strong> de varios sprints o concentrados en 1–2 sprints
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-orange-700">
                            3 pts
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Sin actividad relevante</strong> en GitHub
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* GitHub Best Practices */}
                  <div className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
                    <p className="text-xs text-blue-900 font-semibold mb-2">
                      <i className="ri-lightbulb-line mr-1"></i>
                      Buenas prácticas para maximizar puntos:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1 ml-4">
                      <li>✓ Commits pequeños y frecuentes en lugar de commits gigantes</li>
                      <li>✓ Mensajes descriptivos: "Implementa validación de formulario de login" en lugar de "fix"</li>
                      <li>✓ Participar en Pull Requests: crear, revisar código de compañeros, comentar</li>
                      <li>✓ Distribuir commits a lo largo de todos los sprints (no solo al final)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Componente 2: Gestión de tareas */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center text-lg">
                    <i className="ri-kanban-view mr-2"></i>
                    Componente 2: Gestión de tareas en el tablero
                    <span className="ml-auto text-blue-700">8 puntos de 20</span>
                  </h4>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    Se revisa el historial del tablero (Jira / ClickUp / Trello) al final del semestre. 
                    No basta con cerrar tickets, se busca evidencia de <strong>seguimiento real</strong> 
                    del trabajo durante todos los sprints.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-blue-700 text-white">
                          <th className="border border-blue-600 px-4 py-2 text-left font-bold">Evidencia</th>
                          <th className="border border-blue-600 px-4 py-2 text-center font-bold">Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Tickets asignados, movidos y cerrados</strong> consistentemente sprint a sprint 
                            con comentarios o actualizaciones visibles
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-green-700">
                            8 pts
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>La mayoría de tickets cerrados</strong>, movimientos visibles pero sin 
                            comentarios o estimaciones
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-blue-700">
                            6 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Tickets cerrados de forma irregular</strong> o solo actualizados al final del sprint
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-yellow-700">
                            4 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>Pocos tickets completados</strong> o movidos sin seguimiento real
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-orange-700">
                            2 pts
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-blue-300 px-4 py-2 text-gray-700">
                            <strong>No interactuó</strong> con el tablero o no tiene tickets asignados
                          </td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Board Best Practices */}
                  <div className="bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
                    <p className="text-xs text-blue-900 font-semibold mb-2">
                      <i className="ri-lightbulb-line mr-1"></i>
                      Buenas prácticas para maximizar puntos:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1 ml-4">
                      <li>✓ Asignar y completar tickets en cada sprint (no acumular para el final)</li>
                      <li>✓ Mover tickets entre columnas (To Do → In Progress → Done) con regularidad</li>
                      <li>✓ Agregar comentarios sobre progreso, bloqueos o decisiones técnicas</li>
                      <li>✓ Incluir estimaciones de tiempo o story points cuando sea posible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ejemplo de cálculo */}
              <div className="mt-6 bg-white rounded-lg p-5 border-2 border-blue-400">
                <h5 className="font-bold text-blue-900 mb-3 flex items-center">
                  <i className="ri-calculator-line mr-2"></i>
                  Ejemplos de cálculo completo
                </h5>

                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-500 pl-3 bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-800 mb-2">✅ Caso ideal - Desarrollador activo:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>GitHub:</strong> 40+ commits distribuidos en los 8 sprints, mensajes claros 
                      ("Implementa API de usuarios", "Refactoriza servicio de autenticación"), creó 5 PRs, 
                      revisó código de 3 compañeros → <strong>12 pts</strong></li>
                      <li>• <strong>Tablero:</strong> 24 tickets completados (3 por sprint en promedio), todos 
                      con comentarios de progreso, movidos consistentemente entre columnas, estimaciones agregadas 
                      → <strong>8 pts</strong></li>
                      <li className="font-bold text-green-700 pt-2 border-t border-green-300 mt-2">
                        = <strong>12 + 8 = 20 puntos de 20</strong> ✓
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-3 bg-yellow-50 p-3 rounded">
                    <p className="font-semibold text-yellow-800 mb-2">⚠️ Caso intermedio - Trabajo irregular:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>GitHub:</strong> 20 commits concentrados en 5 sprints (3 sprints sin actividad), 
                      mensajes genéricos ("update", "fix bug"), sin PRs ni code reviews → <strong>6 pts</strong></li>
                      <li>• <strong>Tablero:</strong> 12 tickets cerrados pero sin comentarios, la mayoría movidos 
                      solo al final de cada sprint → <strong>4 pts</strong></li>
                      <li className="font-bold text-yellow-700 pt-2 border-t border-yellow-300 mt-2">
                        = <strong>6 + 4 = 10 puntos de 20</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-3 bg-red-50 p-3 rounded">
                    <p className="font-semibold text-red-800 mb-2">❌ Caso crítico - Sin evidencia técnica:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>GitHub:</strong> 5 commits totales concentrados en los últimos 2 sprints, 
                      todos con mensaje "update" → <strong>3 pts</strong></li>
                      <li>• <strong>Tablero:</strong> Solo 2 tickets asignados en todo el semestre, sin movimientos 
                      visibles ni comentarios → <strong>2 pts</strong></li>
                      <li className="font-bold text-red-700 pt-2 border-t border-red-300 mt-2">
                        = <strong>3 + 2 = 5 puntos de 20</strong> ❌
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-3 bg-purple-50 p-3 rounded">
                    <p className="font-semibold text-purple-800 mb-2">🎯 Caso avanzado - Líder técnico:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>GitHub:</strong> 60+ commits bien distribuidos, mensajes con contexto completo, 
                      creó 8 PRs con descripciones detalladas, hizo 10+ code reviews con sugerencias constructivas 
                      → <strong>12 pts</strong></li>
                      <li>• <strong>Tablero:</strong> 30 tickets completados, todos con comentarios técnicos, 
                      estimaciones precisas, bloqueadores documentados, ayudó a desbloquear tickets de otros 
                      → <strong>8 pts</strong></li>
                      <li className="font-bold text-purple-700 pt-2 border-t border-purple-300 mt-2">
                        = <strong>12 + 8 = 20 puntos de 20</strong> ⭐ (Excelencia técnica)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mt-6">
                <h5 className="font-bold text-amber-900 mb-2 flex items-center">
                  <i className="ri-alert-line mr-2"></i>
                  Notas importantes
                </h5>
                <ul className="text-sm text-amber-900 space-y-2">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Consistencia {'>'} Cantidad:</strong> Es mejor tener commits pequeños distribuidos en 
                      todos los sprints que muchos commits concentrados al final del semestre.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Calidad de mensajes:</strong> Los commits con mensajes descriptivos demuestran 
                      profesionalismo y facilitan el trabajo en equipo.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Trabajo en equipo:</strong> Participar en PRs y code reviews no solo suma puntos, 
                      también mejora la calidad del código del equipo completo.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Tablero actualizado:</strong> El tablero debe reflejar el trabajo real. Actualízalo 
                      durante el sprint, no solo al final.
                    </span>
                  </li>
                </ul>
              </div>
                </div>
              )}
            </div>

            {/* Funcionalidad de Equipo Section */}
            <div className="bg-green-50 rounded-xl border-2 border-green-200 mb-6">
              {/* Dropdown Header */}
              <button
                onClick={() => toggleDropdown('funcionalidad')}
                className="w-full flex items-center justify-between p-6 hover:bg-green-100 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-green-900 flex items-center">
                  <i className="ri-rocket-line mr-2"></i>
                  3. Funcionalidad de Equipo (3.75% por sprint = 30% total)
                </h3>
                <i className={`ri-chevron-down-line text-green-900 text-2xl transition-transform duration-300 ${openDropdown === 'funcionalidad' ? 'rotate-180' : ''}`}></i>
              </button>

              {/* Dropdown Content */}
              {openDropdown === 'funcionalidad' && (
                <div className="px-6 pb-6 border-t-2 border-green-200">
                  <div className="bg-green-100 border-l-4 border-green-600 p-4 mb-6">
                    <p className="text-sm text-green-900 font-semibold">
                      <i className="ri-calendar-check-line mr-2"></i>
                      Evaluación acumulada al final del semestre
                    </p>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Esta evaluación mide el <strong>resultado técnico colectivo</strong> del equipo: que el proyecto 
                    esté desplegado en internet, que tenga endpoints funcionales de punta a punta, y que esté 
                    documentado adecuadamente. Es el componente de mayor peso (30%).
                  </p>

              {/* Componente 1: Despliegue */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center text-lg">
                    <i className="ri-cloud-line mr-2"></i>
                    Componente 1: Despliegue y accesibilidad en internet
                    <span className="ml-auto text-green-700">15 puntos de 30</span>
                  </h4>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4">
                    <p className="text-sm text-red-800 font-bold flex items-center">
                      <i className="ri-alert-fill mr-2"></i>
                      ⚠️ OBLIGATORIO - Este es el criterio de mayor peso
                    </p>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    El proyecto debe ser <strong>accesible desde internet</strong> con frontend, servidor y 
                    base de datos desplegados. No basta con que funcione en local, debe estar en producción 
                    y ser accesible desde cualquier navegador.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-700 text-white">
                          <th className="border border-green-600 px-4 py-2 text-left font-bold">Evidencia</th>
                          <th className="border border-green-600 px-4 py-2 text-center font-bold">Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Frontend, servidor y base de datos desplegados</strong> y accesibles desde 
                            internet, todo funciona de forma integrada
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-green-700">
                            15 pts
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Los tres están desplegados</strong> pero hay intermitencia o algún servicio 
                            falla ocasionalmente
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-blue-700">
                            10 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Solo 2 de los 3 están desplegados</strong> (ej. frontend y servidor pero 
                            sin base de datos en producción)
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-yellow-700">
                            6 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Solo el frontend está desplegado</strong>, el servidor corre en local
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-orange-700">
                            3 pts
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Nada está desplegado</strong>, el proyecto solo corre en local
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Deployment Best Practices */}
                  <div className="bg-green-50 rounded-lg p-4 mt-4 border border-green-200">
                    <p className="text-xs text-green-900 font-semibold mb-2">
                      <i className="ri-lightbulb-line mr-1"></i>
                      Plataformas recomendadas para despliegue:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1 ml-4">
                      <li>✓ <strong>Frontend:</strong> Vercel, Netlify, GitHub Pages, Railway</li>
                      <li>✓ <strong>Backend/Servidor:</strong> Railway, Render, Heroku, AWS, Google Cloud</li>
                      <li>✓ <strong>Base de datos:</strong> Railway (PostgreSQL/MySQL), MongoDB Atlas, Supabase, PlanetScale</li>
                      <li>✓ Asegúrate de que las variables de entorno estén configuradas correctamente</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Componente 2: Endpoints */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center text-lg">
                    <i className="ri-link mr-2"></i>
                    Componente 2: Endpoints implementados (flujo completo)
                    <span className="ml-auto text-green-700">10 puntos de 30</span>
                  </h4>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    Se revisa que los endpoints vayan <strong>de punta a punta</strong>: frontend → servidor → 
                    base de datos. El mínimo esperado es de 3 a 4 endpoints funcionales. No basta con tener 
                    código en el backend, debe estar conectado y funcionar en producción.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-700 text-white">
                          <th className="border border-green-600 px-4 py-2 text-left font-bold">Evidencia</th>
                          <th className="border border-green-600 px-4 py-2 text-center font-bold">Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>4 o más endpoints funcionales</strong> de punta a punta, con al menos un 
                            CRUD completo o flujo representativo
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-green-700">
                            10 pts
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>3 endpoints funcionales</strong> de punta a punta, flujo básico completo
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-blue-700">
                            7 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>2 endpoints funcionales</strong>, flujo incompleto o sin conexión real a 
                            base de datos
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-yellow-700">
                            4 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>1 endpoint</strong> o endpoints que no llegan a la base de datos
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-orange-700">
                            2 pts
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Sin endpoints funcionales</strong> o sin conexión entre capas
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Endpoints Examples */}
                  <div className="bg-green-50 rounded-lg p-4 mt-4 border border-green-200">
                    <p className="text-xs text-green-900 font-semibold mb-2">
                      <i className="ri-lightbulb-line mr-1"></i>
                      Ejemplos de endpoints de punta a punta:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1 ml-4">
                      <li>✓ <strong>GET /api/users</strong> - Listar usuarios desde la base de datos</li>
                      <li>✓ <strong>POST /api/users</strong> - Crear nuevo usuario en la base de datos</li>
                      <li>✓ <strong>PUT /api/users/:id</strong> - Actualizar usuario existente</li>
                      <li>✓ <strong>DELETE /api/users/:id</strong> - Eliminar usuario de la base de datos</li>
                      <li>✓ Cada endpoint debe ser invocado desde el frontend y reflejarse en la UI</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Componente 3: Documentación */}
              <div className="mb-6">
                <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center text-lg">
                    <i className="ri-file-text-line mr-2"></i>
                    Componente 3: Documentación del proyecto
                    <span className="ml-auto text-green-700">5 puntos de 30</span>
                  </h4>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    El README del repositorio debe servir como <strong>carta de presentación</strong> del proyecto. 
                    Debe incluir el link al proyecto desplegado, instrucciones de uso y descripción de los endpoints.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-700 text-white">
                          <th className="border border-green-600 px-4 py-2 text-left font-bold">Evidencia</th>
                          <th className="border border-green-600 px-4 py-2 text-center font-bold">Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>README completo</strong> con link al proyecto desplegado, instrucciones de 
                            uso y descripción de endpoints
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-green-700">
                            5 pts
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>README con link desplegado</strong> pero sin descripción de endpoints o 
                            instrucciones incompletas
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-yellow-700">
                            3 pts
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Documentación mínima</strong>, sin link o sin estructura clara
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-orange-700">
                            1 pt
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="border border-green-300 px-4 py-2 text-gray-700">
                            <strong>Sin documentación</strong>
                          </td>
                          <td className="border border-green-300 px-4 py-2 text-center font-bold text-red-700">
                            0 pts
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Documentation Template */}
                  <div className="bg-green-50 rounded-lg p-4 mt-4 border border-green-200">
                    <p className="text-xs text-green-900 font-semibold mb-2">
                      <i className="ri-lightbulb-line mr-1"></i>
                      Contenido mínimo esperado en el README:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1 ml-4">
                      <li>✓ <strong>Link al proyecto desplegado</strong> (URL funcional)</li>
                      <li>✓ <strong>Descripción del proyecto</strong> (qué hace, para qué sirve)</li>
                      <li>✓ <strong>Tecnologías utilizadas</strong> (React, NestJS, PostgreSQL, etc.)</li>
                      <li>✓ <strong>Lista de endpoints</strong> con método HTTP y descripción</li>
                      <li>✓ <strong>Instrucciones de uso</strong> (cómo navegar la aplicación)</li>
                      <li>✓ <strong>Credenciales de prueba</strong> (si aplica para login/autenticación)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ejemplos de cálculo */}
              <div className="mt-6 bg-white rounded-lg p-5 border-2 border-green-400">
                <h5 className="font-bold text-green-900 mb-3 flex items-center">
                  <i className="ri-calculator-line mr-2"></i>
                  Ejemplos de cálculo completo
                </h5>

                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-green-500 pl-3 bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-800 mb-2">✅ Caso ideal - Proyecto completo en producción:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>Despliegue:</strong> Frontend en Vercel, backend en Railway, PostgreSQL en Railway 
                      → todo accesible y funcional desde internet → <strong>15 pts</strong></li>
                      <li>• <strong>Endpoints:</strong> 5 endpoints funcionales (CRUD completo de usuarios + login), 
                      todos conectan frontend → servidor → base de datos → <strong>10 pts</strong></li>
                      <li>• <strong>Documentación:</strong> README con link desplegado, descripción de todos los 
                      endpoints, instrucciones de uso, credenciales de prueba → <strong>5 pts</strong></li>
                      <li className="font-bold text-green-700 pt-2 border-t border-green-300 mt-2">
                        = <strong>15 + 10 + 5 = 30 puntos de 30</strong> ✓ (Proyecto profesional)
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 p-3 rounded">
                    <p className="font-semibold text-blue-800 mb-2">✅ Caso bueno - Proyecto funcional con intermitencias:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>Despliegue:</strong> Los 3 servicios desplegados pero el backend ocasionalmente 
                      tiene timeouts o la DB se duerme (free tier) → <strong>10 pts</strong></li>
                      <li>• <strong>Endpoints:</strong> 3 endpoints funcionales (GET users, POST user, GET user/:id), 
                      flujo básico completo → <strong>7 pts</strong></li>
                      <li>• <strong>Documentación:</strong> README con link y lista de endpoints, pero sin 
                      instrucciones detalladas de uso → <strong>3 pts</strong></li>
                      <li className="font-bold text-blue-700 pt-2 border-t border-blue-300 mt-2">
                        = <strong>10 + 7 + 3 = 20 puntos de 30</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-3 bg-yellow-50 p-3 rounded">
                    <p className="font-semibold text-yellow-800 mb-2">⚠️ Caso intermedio - Despliegue parcial:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>Despliegue:</strong> Solo frontend y backend desplegados, pero la base de datos 
                      corre en local (datos mockeados en producción) → <strong>6 pts</strong></li>
                      <li>• <strong>Endpoints:</strong> 2 endpoints que funcionan con datos mock, no llegan a DB real 
                      → <strong>4 pts</strong></li>
                      <li>• <strong>Documentación:</strong> README básico con link pero sin descripción de endpoints 
                      → <strong>1 pt</strong></li>
                      <li className="font-bold text-yellow-700 pt-2 border-t border-yellow-300 mt-2">
                        = <strong>6 + 4 + 1 = 11 puntos de 30</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3 bg-orange-50 p-3 rounded">
                    <p className="font-semibold text-orange-800 mb-2">⚠️ Caso mínimo - Solo frontend desplegado:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>Despliegue:</strong> Solo frontend desplegado en Vercel, backend y DB corren en 
                      local → <strong>3 pts</strong></li>
                      <li>• <strong>Endpoints:</strong> 1 endpoint funcional con datos hardcoded → <strong>2 pts</strong></li>
                      <li>• <strong>Documentación:</strong> Sin README o solo con título del proyecto → <strong>0 pts</strong></li>
                      <li className="font-bold text-orange-700 pt-2 border-t border-orange-300 mt-2">
                        = <strong>3 + 2 + 0 = 5 puntos de 30</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-3 bg-red-50 p-3 rounded">
                    <p className="font-semibold text-red-800 mb-2">❌ Caso crítico - Proyecto solo en local:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>Despliegue:</strong> Nada está desplegado, todo corre en localhost → <strong>0 pts</strong></li>
                      <li>• <strong>Endpoints:</strong> Sin endpoints funcionales o sin conexión entre capas → <strong>0 pts</strong></li>
                      <li>• <strong>Documentación:</strong> Sin README → <strong>0 pts</strong></li>
                      <li className="font-bold text-red-700 pt-2 border-t border-red-300 mt-2">
                        = <strong>0 + 0 + 0 = 0 puntos de 30</strong> ❌ (Proyecto no entregable)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mt-6">
                <h5 className="font-bold text-amber-900 mb-2 flex items-center">
                  <i className="ri-alert-line mr-2"></i>
                  Notas críticas para la entrega final
                </h5>
                <ul className="text-sm text-amber-900 space-y-2">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>El despliegue es OBLIGATORIO:</strong> Un proyecto que solo corre en local no es 
                      entregable profesionalmente. El 50% de esta rúbrica (15 pts) depende del despliegue.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Prueben antes de la entrega:</strong> Asegúrense de que el proyecto desplegado 
                      funcione desde navegadores de sus compañeros y del profesor.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Variables de entorno:</strong> Configuren correctamente las URLs de producción en 
                      las variables de entorno (no dejen localhost hardcoded).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>Base de datos persistente:</strong> Usen un servicio de base de datos real en la nube, 
                      no datos mock ni bases de datos que se borren al reiniciar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-circle-fill text-amber-600 mr-2 mt-1"></i>
                    <span>
                      <strong>README profesional:</strong> Es lo primero que ve cualquier persona que revisa su 
                      proyecto. Dediquen tiempo a documentar bien.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Summary Card */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-5 mt-6 text-white">
                <h5 className="font-bold mb-3 flex items-center text-lg">
                  <i className="ri-trophy-line mr-2"></i>
                  Resumen del componente de Funcionalidad (30%)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-bold text-lg mb-1">15 pts</div>
                    <div className="text-white/90">Despliegue completo (frontend + backend + DB)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-bold text-lg mb-1">10 pts</div>
                    <div className="text-white/90">Endpoints funcionales (mínimo 3-4)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-bold text-lg mb-1">5 pts</div>
                    <div className="text-white/90">Documentación completa en README</div>
                  </div>
                </div>
                <p className="text-white/90 mt-4 text-sm">
                  💡 <strong>Tip final:</strong> Desplieguen temprano y con frecuencia. No esperen al último sprint 
                  para desplegar por primera vez.
                </p>
              </div>
                </div>
              )}
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
