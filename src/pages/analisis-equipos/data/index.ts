/**
 * Archivo de índice para los datos de equipos
 * Exporta todos los datos necesarios para las vistas de análisis
 */

// Exportar datos de OnlyTeams
export {
  onlyTeams,
  getAllTeams,
  getTeamById,
  getTotalMembers,
  type SimpleTeam,
  type TeamMember,
} from './OnlyTeams';

// Exportar datos de teamsData (para compatibilidad con vistas existentes)
export {
  teams,
  sprintData,
  felicitaciones,
  calculateTeamAverages,
  getTeamRecommendations,
  type Team,
  type SprintEvaluation,
  type Felicitacion,
} from './teamsData';
