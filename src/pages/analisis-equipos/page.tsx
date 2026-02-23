import { useEffect, useState } from 'react';
import {
  teams,
  sprintData,
  felicitaciones,
  getAvailableSprints,
  calculateTeamAverages,
  getSprintDataByTeam,
  getFelicitacionesByTeam,
  countFelicitaciones,
  Team,
  SprintEvaluation,
} from './data/teamsData';

export default function AnalisisEquipos() {
  const [selectedSprint, setSelectedSprint] = useState<number>(1);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const availableSprints = getAvailableSprints();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Count total members and responses
  const totalMembers = teams.reduce((sum, team) => sum + team.members.length, 0);
  const totalResponses = sprintData.filter(d => d.sprint === selectedSprint).length;
  const felicitacionesCounts = countFelicitaciones(selectedSprint);
  
  // Get top felicitados
  const topFelicitados = Array.from(felicitacionesCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

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
              <div className="font-bold text-base leading-tight">Análisis de Equipos</div>
              <div className="text-xs opacity-70">Dashboard Sprint {selectedSprint}</div>
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
              Análisis de Equipos Scrum
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dashboard de seguimiento y evaluación de los equipos de desarrollo.
              Datos actualizados cada 2 semanas.
            </p>
          </div>

          {/* Sprint Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-white rounded-xl shadow-md p-2">
              <span className="px-4 text-[#1b3d70] font-medium">Sprint:</span>
              {availableSprints.map(sprint => (
                <button
                  key={sprint}
                  onClick={() => setSelectedSprint(sprint)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedSprint === sprint
                      ? 'bg-[#1b3d70] text-white'
                      : 'text-[#1b3d70] hover:bg-blue-50'
                  }`}
                >
                  Sprint {sprint}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              icon="ri-group-line"
              label="Total Equipos"
              value={teams.length}
              color="blue"
            />
            <StatCard
              icon="ri-user-line"
              label="Total Integrantes"
              value={totalMembers}
              color="green"
            />
            <StatCard
              icon="ri-file-list-3-line"
              label="Respuestas Sprint"
              value={totalResponses}
              color="purple"
            />
            <StatCard
              icon="ri-award-line"
              label="Felicitaciones"
              value={felicitaciones.filter(f => f.sprint === selectedSprint).length}
              color="yellow"
            />
          </div>
        </section>

        {/* Felicitaciones Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-[#1b3d70] mb-6 flex items-center">
              <i className="ri-trophy-line text-yellow-500 mr-3"></i>
              🎉 Reconocimientos del Sprint {selectedSprint}
            </h2>
            
            {topFelicitados.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topFelicitados.map(([name, count], index) => (
                  <div
                    key={name}
                    className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${
                      index === 0 ? 'border-yellow-400' : 
                      index === 1 ? 'border-gray-400' :
                      index === 2 ? 'border-amber-600' : 'border-blue-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '⭐'}
                      </span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {count} {count === 1 ? 'voto' : 'votos'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1b3d70] capitalize">{name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Reconocido por sus compañeros
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No hay felicitaciones registradas para este sprint.</p>
            )}

            {/* All Felicitaciones List */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#1b3d70] mb-4">
                Todas las Felicitaciones
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                {felicitaciones
                  .filter(f => f.sprint === selectedSprint)
                  .map((f, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-yellow-100 flex items-start space-x-3">
                      <i className="ri-heart-fill text-red-400 mt-1"></i>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium text-gray-700">{f.from}</span>
                          <span className="text-gray-400 mx-2">→</span>
                          <span className="font-semibold text-[#1b3d70]">{f.to}</span>
                        </p>
                        {f.reason && (
                          <p className="text-xs text-gray-500 mt-1 italic">"{f.reason}"</p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Teams Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1b3d70] mb-6 flex items-center">
            <i className="ri-team-fill mr-3"></i>
            Equipos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map(team => (
              <TeamCard
                key={team.id}
                team={team}
                sprint={selectedSprint}
                isSelected={selectedTeam === team.id}
                onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
              />
            ))}
          </div>
        </section>

        {/* Selected Team Details */}
        {selectedTeam && (
          <TeamDetails teamId={selectedTeam} sprint={selectedSprint} />
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
  color: 'blue' | 'green' | 'purple' | 'yellow';
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
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

function TeamCard({ team, sprint, isSelected, onClick }: { 
  team: Team; 
  sprint: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  const averages = calculateTeamAverages(team.id, sprint);
  const teamFelicitaciones = getFelicitacionesByTeam(team.id, sprint);

  const getBoardIcon = (tool: string) => {
    switch (tool) {
      case 'Jira': return 'ri-jira-line';
      case 'Notion': return 'ri-notion-line';
      case 'ClickUp': return 'ri-checkbox-circle-line';
      case 'Trello': return 'ri-trello-line';
      default: return 'ri-kanban-view';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
        isSelected ? 'border-[#1b3d70]' : 'border-transparent'
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#1b3d70]">{team.name}</h3>
            {team.projectName && (
              <p className="text-sm text-gray-500">{team.projectName}</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {team.members.length} <i className="ri-user-line ml-1"></i>
            </span>
          </div>
        </div>

        {/* Members */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Integrantes</p>
          <div className="space-y-1">
            {team.members.slice(0, 3).map((member, idx) => (
              <p key={idx} className="text-sm text-gray-700 truncate">
                <i className="ri-user-3-line mr-2 text-gray-400"></i>
                {member.name}
              </p>
            ))}
            {team.members.length > 3 && (
              <p className="text-sm text-gray-400">
                +{team.members.length - 3} más...
              </p>
            )}
          </div>
        </div>

        {/* Performance Badge */}
        {averages && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Promedio General:</span>
              <span className={`font-bold ${
                averages.overall >= 4.5 ? 'text-green-600' :
                averages.overall >= 3.5 ? 'text-blue-600' :
                averages.overall >= 2.5 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {averages.overall.toFixed(1)}/5.0
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full ${
                  averages.overall >= 4.5 ? 'bg-green-500' :
                  averages.overall >= 3.5 ? 'bg-blue-500' :
                  averages.overall >= 2.5 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${(averages.overall / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Links */}
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

        {/* Felicitaciones indicator */}
        {teamFelicitaciones.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <span className="text-xs text-yellow-600">
              <i className="ri-star-fill mr-1"></i>
              {teamFelicitaciones.length} felicitación(es) dadas
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function TeamDetails({ teamId, sprint }: { teamId: number; sprint: number }) {
  const team = teams.find(t => t.id === teamId);
  const evaluations = getSprintDataByTeam(teamId, sprint);
  const averages = calculateTeamAverages(teamId, sprint);

  if (!team) return null;

  const scoreToText = (score: number) => {
    if (score >= 4.5) return 'Excelente';
    if (score >= 3.5) return 'Bueno';
    if (score >= 2.5) return 'Aceptable';
    if (score >= 1.5) return 'Bajo';
    return 'Muy Bajo';
  };

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1b3d70]">
            <i className="ri-bar-chart-box-line mr-3"></i>
            Detalles del {team.name}
            {team.projectName && <span className="text-gray-400 ml-2">- {team.projectName}</span>}
          </h2>
        </div>

        {/* Team Links */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-[#1b3d70] mb-3">Enlaces del Equipo</h3>
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

        {/* All Members */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#1b3d70] mb-3">
            <i className="ri-group-line mr-2"></i>
            Integrantes ({team.members.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {team.members.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#1b3d70] rounded-full flex items-center justify-center text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{member.name}</p>
                  {member.email && (
                    <p className="text-xs text-gray-500">{member.email}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
        {averages && (
          <div className="mb-6">
            <h3 className="font-semibold text-[#1b3d70] mb-3">
              <i className="ri-line-chart-line mr-2"></i>
              Métricas del Sprint {sprint}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <MetricCard label="Productividad" value={averages.productivity} />
              <MetricCard label="Colaboración" value={averages.collaboration} />
              <MetricCard label="Calidad" value={averages.quality} />
              <MetricCard label="Objetivos" value={averages.objectivesCompleted} />
              <MetricCard label="Autoevaluación" value={averages.selfEvaluation} highlight />
            </div>
          </div>
        )}

        {/* Individual Evaluations */}
        {evaluations.length > 0 && (
          <div>
            <h3 className="font-semibold text-[#1b3d70] mb-3">
              <i className="ri-file-user-line mr-2"></i>
              Evaluaciones Individuales
            </h3>
            <div className="space-y-4">
              {evaluations.map((eval_, idx) => (
                <EvaluationCard key={idx} evaluation={eval_} />
              ))}
            </div>
          </div>
        )}

        {evaluations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <i className="ri-file-search-line text-4xl mb-2"></i>
            <p>No hay evaluaciones registradas para este sprint.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function MetricCard({ label, value, highlight = false }: { 
  label: string; 
  value: number; 
  highlight?: boolean;
}) {
  const getColor = (val: number) => {
    if (val >= 4.5) return 'text-green-600 bg-green-50';
    if (val >= 3.5) return 'text-blue-600 bg-blue-50';
    if (val >= 2.5) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className={`rounded-xl p-4 text-center ${highlight ? 'bg-[#1b3d70] text-white' : getColor(value)}`}>
      <p className={`text-xs uppercase tracking-wider mb-1 ${highlight ? 'opacity-80' : 'opacity-70'}`}>
        {label}
      </p>
      <p className="text-2xl font-bold">{value.toFixed(1)}</p>
      <p className={`text-xs mt-1 ${highlight ? 'opacity-80' : ''}`}>/ 5.0</p>
    </div>
  );
}

function EvaluationCard({ evaluation }: { evaluation: SprintEvaluation }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#1b3d70] rounded-full flex items-center justify-center text-white font-bold">
            {evaluation.memberName.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-gray-800">{evaluation.memberName}</p>
            <p className="text-sm text-gray-500">
              Autoevaluación: <span className="font-semibold">{evaluation.selfEvaluation}/5</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${getEvalColor(evaluation.productivity)}`}>
              {evaluation.productivity}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${getEvalColor(evaluation.collaboration)}`}>
              {evaluation.collaboration}
            </span>
          </div>
          <i className={`ri-arrow-${isExpanded ? 'up' : 'down'}-s-line text-xl text-gray-400`}></i>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <EvalBadge label="Productividad" value={evaluation.productivity} />
            <EvalBadge label="Colaboración" value={evaluation.collaboration} />
            <EvalBadge label="Calidad" value={evaluation.quality} />
            <EvalBadge label="Objetivos" value={evaluation.objectivesCompleted} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-700 mb-1">
                <i className="ri-checkbox-circle-line mr-1 text-green-500"></i>
                Tareas Completadas:
              </p>
              <p className="text-gray-600 bg-white p-2 rounded">{evaluation.tasksCompleted || 'No especificado'}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-1">
                <i className="ri-error-warning-line mr-1 text-red-500"></i>
                Bloqueos:
              </p>
              <p className="text-gray-600 bg-white p-2 rounded">{evaluation.blockers || 'Ninguno'}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-1">
                <i className="ri-lightbulb-line mr-1 text-yellow-500"></i>
                Áreas de Mejora:
              </p>
              <p className="text-gray-600 bg-white p-2 rounded">{evaluation.areasToImprove || 'No especificado'}</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-1">
                <i className="ri-focus-3-line mr-1 text-blue-500"></i>
                Enfoque Próximo Sprint:
              </p>
              <p className="text-gray-600 bg-white p-2 rounded">{evaluation.nextSprintFocus || 'No especificado'}</p>
            </div>
          </div>

          {evaluation.improvementProposals && (
            <div className="text-sm">
              <p className="font-medium text-gray-700 mb-1">
                <i className="ri-magic-line mr-1 text-purple-500"></i>
                Propuestas de Mejora:
              </p>
              <p className="text-gray-600 bg-white p-2 rounded">{evaluation.improvementProposals}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function EvalBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className={`text-center p-2 rounded-lg ${getEvalColor(value)}`}>
      <p className="text-xs opacity-70">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

function getEvalColor(value: string): string {
  switch (value) {
    case 'Excelente': return 'bg-green-100 text-green-700';
    case 'Bueno': return 'bg-blue-100 text-blue-700';
    case 'Aceptable': return 'bg-yellow-100 text-yellow-700';
    case 'Bajo': return 'bg-orange-100 text-orange-700';
    case 'Muy Bajo': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}
