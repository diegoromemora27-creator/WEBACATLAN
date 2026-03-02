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
