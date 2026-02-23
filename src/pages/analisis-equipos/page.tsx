import { useEffect, useState } from 'react';
import {
  teams,
  sprintData,
  felicitaciones,
  getAvailableSprints,
  calculateTeamAverages,
  getTeamRecommendations,
  Team,
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
  
  // Estudiantes destacados - Lista oficial por sprint
  const estudiantesDestacadosPorSprint: Record<number, { name: string; teamId: number }[]> = {
    1: [
      { name: "Carlos Emiliano Segura Loera", teamId: 2 },
      { name: "Hernández Peña Angel Adrian", teamId: 1 },
      { name: "Dominguez Lira Estefani Michelle", teamId: 3 },
      { name: "Trinidad Potrero Josue", teamId: 4 },
      { name: "Aguilar Buendía Bruno", teamId: 4 },
      { name: "Diego Herrera Hernández", teamId: 8 },
    ],
  };
  
  // Get top felicitados with team info
  const topFelicitados = (estudiantesDestacadosPorSprint[selectedSprint] || []).map(({ name, teamId }) => ({
    name,
    team: teams.find(t => t.id === teamId),
  }));

  // Top performing teams (7 and 8)
  const topTeams = [7, 8].map(id => ({
    team: teams.find(t => t.id === id)!,
    averages: calculateTeamAverages(id, selectedSprint),
  })).filter(t => t.team && t.averages);

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
          <div className="flex flex-col items-center mb-8">
            <div className="inline-flex items-center bg-white rounded-xl shadow-md p-2 mb-4">
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
            {selectedSprint === 1 && (
              <a
                href="https://docs.google.com/forms/d/1PMZg1pL03OtB4bhIMWK4Haft4H70VHMQ1Bl-MudcWx0/edit#responses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <i className="ri-file-list-3-line mr-2"></i>
                Formulario de Autoevaluación Sprint 1
                <i className="ri-external-link-line ml-1"></i>
              </a>
            )}
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

        {/* Top Teams Board */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <i className="ri-vip-crown-2-fill text-yellow-300 mr-3"></i>
              🏆 Equipos con Mejor Desempeño - Sprint {selectedSprint}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topTeams.map(({ team, averages }, index) => (
                <div
                  key={team.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl">{index === 0 ? '🥇' : '🥈'}</span>
                      <div>
                        <h3 className="text-xl font-bold">{team.name}</h3>
                        {team.projectName && (
                          <p className="text-white/70 text-sm">{team.projectName}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-yellow-300">
                        {averages?.overall.toFixed(1)}
                      </p>
                      <p className="text-white/70 text-sm">/ 5.0</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-white/60">Productividad</p>
                      <p className="font-bold">{averages?.productivity.toFixed(1)}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-white/60">Colaboración</p>
                      <p className="font-bold">{averages?.collaboration.toFixed(1)}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-white/60">Calidad</p>
                      <p className="font-bold">{averages?.quality.toFixed(1)}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-white/60">Objetivos</p>
                      <p className="font-bold">{averages?.objectivesCompleted.toFixed(1)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={team.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm"
                    >
                      <i className="ri-github-fill"></i>
                      <span>GitHub</span>
                    </a>
                    {team.boardUrl && (
                      <a
                        href={team.boardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm"
                      >
                        <i className="ri-kanban-view"></i>
                        <span>{team.boardTool}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estudiantes Destacados Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-[#1b3d70] mb-6 flex items-center">
              <i className="ri-trophy-line text-yellow-500 mr-3"></i>
              🎉 Estudiantes Destacados - Sprint {selectedSprint}
            </h2>
            <p className="text-gray-600 mb-6">
              Reconocimientos otorgados por los compañeros de equipo durante el sprint.
            </p>
            
            {topFelicitados.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topFelicitados.map(({ name, team }) => (
                  <div
                    key={name}
                    className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-400"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-3xl">⭐</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1b3d70] capitalize mb-2">{name}</h3>
                    {team && (
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          <i className="ri-team-line mr-1"></i>
                          {team.name}
                        </span>
                        {team.projectName && (
                          <span className="text-xs text-gray-500">
                            {team.projectName}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No hay reconocimientos registrados para este sprint.</p>
            )}
          </div>
        </section>

        {/* Teams Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1b3d70] mb-6 flex items-center">
            <i className="ri-team-fill mr-3"></i>
            Todos los Equipos
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
  const recommendations = getTeamRecommendations(team.id, sprint);
  const MIN_TEAM_SIZE = 4;
  const hasLowMembers = team.members.length < MIN_TEAM_SIZE;

  const getBoardIcon = (tool: string) => {
    switch (tool) {
      case 'Jira': return 'ri-jira-line';
      case 'Notion': return 'ri-notion-line';
      case 'ClickUp': return 'ri-checkbox-circle-line';
      case 'Trello': return 'ri-trello-line';
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
              <span><strong>Faltan integrantes:</strong> Mínimo {MIN_TEAM_SIZE} miembros requeridos</span>
            </p>
          </div>
        )}

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

        {/* Quick Recommendations Preview */}
        {recommendations && recommendations.areasToImprove.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Área de mejora principal:</p>
            <p className="text-sm text-orange-600 bg-orange-50 px-3 py-2 rounded-lg">
              <i className="ri-error-warning-line mr-1"></i>
              {recommendations.areasToImprove[0]}
            </p>
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
      </div>
    </div>
  );
}

function TeamDetails({ teamId, sprint }: { teamId: number; sprint: number }) {
  const team = teams.find(t => t.id === teamId);
  const averages = calculateTeamAverages(teamId, sprint);
  const recommendations = getTeamRecommendations(teamId, sprint);

  if (!team) return null;

  return (
    <section className="mb-12 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1b3d70]">
            <i className="ri-bar-chart-box-line mr-3"></i>
            Detalles del {team.name}
            {team.projectName && <span className="text-gray-400 ml-2">- {team.projectName}</span>}
          </h2>
          {(teamId === 7 || teamId === 8) && (
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🏆 TOP PERFORMER
            </span>
          )}
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

        {/* All Members with Emails */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-[#1b3d70] flex items-center">
              <i className="ri-group-line mr-2"></i>
              Integrantes 
              <span className={`ml-2 px-2 py-0.5 rounded-full text-sm font-semibold ${
                team.members.length < 4 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {team.members.length}
              </span>
            </h3>
            {team.members.length < 4 && (
              <span className="text-red-600 text-sm flex items-center">
                <i className="ri-alarm-warning-line mr-1"></i>
                Faltan respuestas (mín. 4)
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {team.members.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3 flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#1b3d70] rounded-full flex items-center justify-center text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 truncate">{member.name}</p>
                  {member.email && (
                    <p className="text-xs text-gray-500 truncate">{member.email}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
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

        {/* Recommendations Section */}
        {recommendations && (
          <div className="space-y-6">
            {/* Strengths */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-700 mb-4 flex items-center">
                <i className="ri-thumb-up-fill mr-2"></i>
                Fortalezas del Equipo
              </h3>
              <ul className="space-y-2">
                {recommendations.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-green-800">
                    <i className="ri-check-line mt-1 text-green-500"></i>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Improve */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-700 mb-4 flex items-center">
                <i className="ri-error-warning-fill mr-2"></i>
                Áreas de Mejora
              </h3>
              <ul className="space-y-2">
                {recommendations.areasToImprove.map((area, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-orange-800">
                    <i className="ri-alert-line mt-1 text-orange-500"></i>
                    <span className={area.includes('CRÍTICO') ? 'font-bold' : ''}>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-700 mb-4 flex items-center">
                <i className="ri-lightbulb-fill mr-2"></i>
                Recomendaciones para el Próximo Sprint
              </h3>
              <ul className="space-y-2">
                {recommendations.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-blue-800">
                    <i className="ri-arrow-right-circle-line mt-1 text-blue-500"></i>
                    <span className={rec.includes('URGENTE') ? 'font-bold text-red-600' : ''}>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blockers Summary */}
            {recommendations.blockersSummary.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                  <i className="ri-roadster-fill mr-2"></i>
                  Bloqueos Identificados
                </h3>
                <ul className="space-y-2">
                  {recommendations.blockersSummary.map((blocker, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <i className="ri-stop-circle-line mt-1 text-gray-400"></i>
                      <span>{blocker}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {!recommendations && (
          <div className="text-center py-8 text-gray-500">
            <i className="ri-file-search-line text-4xl mb-2"></i>
            <p>No hay recomendaciones disponibles para este sprint.</p>
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
