/**
 * DATOS DE EQUIPOS - SPRINT 1
 * 
 * Este archivo contiene toda la información de los equipos para el dashboard de análisis.
 * Para actualizar (cada 2 semanas):
 * 1. Agrega nuevos miembros al array 'members' de cada equipo si es necesario
 * 2. Actualiza los datos de sprint en 'sprintData'
 * 3. Actualiza las felicitaciones en 'felicitaciones'
 * 
 * ESTRUCTURA:
 * - teams: Información base de cada equipo (miembros, links)
 * - sprintData: Evaluaciones por sprint
 * - felicitaciones: Reconocimientos entre compañeros
 */

export interface TeamMember {
  name: string;
  email?: string;
}

export interface Team {
  id: number;
  name: string;
  projectName?: string;
  members: TeamMember[];
  githubUrl: string;
  boardUrl: string;
  boardTool: 'Jira' | 'Notion' | 'ClickUp' | 'Trello' | 'Other';
}

export interface SprintEvaluation {
  memberId: string;
  memberName: string;
  teamId: number;
  sprint: number;
  // Evaluación del equipo (Excelente, Bueno, Aceptable, Bajo, Muy Bajo)
  productivity: string;
  collaboration: string;
  quality: string;
  objectivesCompleted: string;
  // Autoevaluación (1-5)
  selfEvaluation: number;
  // Información adicional
  tasksCompleted: string;
  blockers: string;
  areasToImprove: string;
  nextSprintFocus: string;
  improvementProposals: string;
}

export interface Felicitacion {
  from: string;
  fromTeam: number;
  to: string;
  sprint: number;
  reason?: string;
}

// ========================================
// EQUIPOS - Actualizar miembros y links aquí
// ========================================
export const teams: Team[] = [
  {
    id: 1,
    name: "Equipo 1",
    projectName: "DevStudy",
    members: [
      { name: "Hernández Peña Angel Adrian", email: "ahangel2005@gmail.com" },
      { name: "Gil De Gaona Jazmín", email: "giljazmin2005@gmail.com" },
      { name: "Medina Hernández Ramón", email: "321283108@pcpuma.acatlan.unam.mx" },
    ],
    githubUrl: "https://github.com/DevStudyJS",
    boardUrl: "https://www.notion.so/DevStudy-304ab752f7c481e78981d2368a11b709",
    boardTool: "Notion",
  },
  {
    id: 2,
    name: "Equipo 2",
    projectName: "4 de Asada",
    members: [
      { name: "Velázquez Martínez Antonio", email: "424038247@pcpuma.acatlan.unam.mx" },
      { name: "Herrera Franco Samuel", email: "samuelherrera11fh1@gmail.com" },
      { name: "Segura Loera Carlos Emiliano", email: "carlos4475segura@gmail.com" },
    ],
    githubUrl: "https://github.com/4-de-Asada",
    boardUrl: "https://trello.com/b/698b39d5/4-de",
    boardTool: "Trello",
  },
  {
    id: 3,
    name: "Equipo 3",
    projectName: "StudyLink",
    members: [
      { name: "StudyLink (Líder)", email: "321339968@pcpuma.acatlan.unam.mx" },
      { name: "Del Angel Santiago Monserrat Guadalupe", email: "318181778@pcpuma.acatlan.unam.mx" },
      { name: "Dominguez Lira Estefani Michelle" },
      { name: "Ruiz García Emiliano" },
    ],
    githubUrl: "https://github.com/RecursosMAC",
    boardUrl: "https://www.notion.so/StudyLink-30dc408c7286802691b1d11e3702c9de",
    boardTool: "Notion",
  },
  {
    id: 4,
    name: "Equipo 4",
    projectName: "Null Nexus",
    members: [
      { name: "Martinez Rodriguez Fernando", email: "424138251@pcpuma.acatlan.unam.mx" },
      { name: "Trinidad Potrero Josue", email: "423073210@pcpuma.acatlan.unam.mx" },
      { name: "Aguilar Buendía Bruno", email: "brunoaguilar.2610@gmail.com" },
    ],
    githubUrl: "https://github.com/Null-Nexus",
    boardUrl: "https://app.clickup.com/9017897580/v/s/90174290770",
    boardTool: "ClickUp",
  },
  {
    id: 6,
    name: "Equipo 6",
    members: [
      { name: "Escutia Pascacio Eduardo Emiliano", email: "319035148@pcpuma.acatlan.unam.mx" },
      { name: "Michelle" }, // Mencionado en felicitaciones
    ],
    githubUrl: "https://github.com/Equipo6", // Actualizar con link real
    boardUrl: "", // Actualizar con link real
    boardTool: "Other",
  },
  {
    id: 7,
    name: "Equipo 7",
    projectName: "Académicos Web",
    members: [
      { name: "Hernandez Gonzalez Armando", email: "317042735@pcpuma.acatlan.unam.mx" },
      { name: "Rodríguez Rodríguez Erick Tadeo", email: "424073141@pcpuma.acatlan.unam.mx" },
      { name: "Marquez Espinoza Alyn Veronica", email: "alynmarquezespinoza63@gmail.com" },
      { name: "Hernandez Martinez Monserrat", email: "424119221@pcpuma.acatlan.unam.mx" },
      { name: "Moreno Vigueras Arturo Tadeo", email: "424092250@pcpuma.acatlan.unam.mx" },
      { name: "Cruz Chávez Miguel Ángel", email: "424022596@pcpuma.acatlan.unam.mx" },
    ],
    githubUrl: "https://github.com/Academicos-Web",
    boardUrl: "https://academicosweb.atlassian.net/jira/software/projects/SCRUM/boards/1",
    boardTool: "Jira",
  },
  {
    id: 8,
    name: "Equipo 8",
    projectName: "ExtraWeb0rdinarios",
    members: [
      { name: "Herrera Hernández Diego", email: "321331546@pcpuma.acatlan.unam.mx" },
      { name: "Sebastián Cervantes Vanesa", email: "423129472@pcpuma.acatlan.unam.mx" },
      { name: "González Hernández Leslie Danaé", email: "424092281@pcpuma.acatlan.unam.mx" },
      { name: "Baez Villanueva Mauricio Omar", email: "318181778@pcpuma.acatlan.unam.mx" },
    ],
    githubUrl: "https://github.com/ExtraWeb0rdinarios",
    boardUrl: "https://diego0hh013.atlassian.net/jira/software/projects/SCRUM/boards/1",
    boardTool: "Jira",
  },
  {
    id: 9,
    name: "Equipo 9",
    members: [
      { name: "Cortes Cortes Bryan Yael", email: "317110375@pcpuma.acatlan.unam.mx" },
    ],
    githubUrl: "https://github.com/317110375/Equipo9-",
    boardUrl: "https://reqres.in/api/collections", // Este parece incorrecto en el CSV
    boardTool: "Other",
  },
];

// ========================================
// DATOS DE SPRINT - Actualizar cada 2 semanas
// ========================================
export const sprintData: SprintEvaluation[] = [
  // === EQUIPO 1 ===
  {
    memberId: "e1-1",
    memberName: "Hernández Peña Angel Adrian",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Organización y definición de actividades y roles. Descripción del proyecto. Compartir materiales y documentación. Validación y entrevistas a profesores.",
    blockers: "Quería hacer y acabar todo sin considerar tiempos del equipo.",
    areasToImprove: "Comunicación en línea, conocimientos de PostgreSQL y MongoDB.",
    nextSprintFocus: "Front End del landing page, Diseño de actividades, Sistema de Login/SignUp.",
    improvementProposals: "Repositorio de ideas, sistema de recompensas, mejorar manejo de Git/GitHub.",
  },
  {
    memberId: "e1-2",
    memberName: "Gil De Gaona Jazmín",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Organización y comunicación constante.",
    blockers: "Manejo del estrés.",
    areasToImprove: "Manejo de tiempos.",
    nextSprintFocus: "Base de datos, estructura de los juegos.",
    improvementProposals: "Por ahora, todo va bien.",
  },
  {
    memberId: "e1-3",
    memberName: "Medina Hernández Ramón",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Creación de diagramas E-R, aporte de ideas, construcción de BD.",
    blockers: "Poco conocimiento en Git y GitHub, bloqueos mentales.",
    areasToImprove: "Git/GitHub, SQL, front-end.",
    nextSprintFocus: "Creación de la base de datos, alojar BD en repositorio, conectar BD al login.",
    improvementProposals: "Buen avance, comunicación y apoyo mutuo con herramientas.",
  },

  // === EQUIPO 2 ===
  {
    memberId: "e2-1",
    memberName: "Velázquez Martínez Antonio",
    teamId: 2,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Bueno",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Idea del proyecto junto con Samuel.",
    blockers: "Falta de comunicación.",
    areasToImprove: "Comunicación entre integrantes.",
    nextSprintFocus: "Dependiendo del desarrollo de la semana.",
    improvementProposals: "Comunicación, solo se reúnen en lab.",
  },
  {
    memberId: "e2-2",
    memberName: "Herrera Franco Samuel",
    teamId: 2,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Aceptable",
    objectivesCompleted: "Aceptable",
    selfEvaluation: 4,
    tasksCompleted: "Ideas para proyecto, propuestas de front, desarrollo de endpoints.",
    blockers: "Conocimiento cruzado, APIs, endpoints.",
    areasToImprove: "Definiciones, APIs, endpoints.",
    nextSprintFocus: "Definición de base de datos, tipo de BD a ocupar.",
    improvementProposals: "Nada por ahora.",
  },
  {
    memberId: "e2-3",
    memberName: "Segura Loera Carlos Emiliano",
    teamId: 2,
    sprint: 1,
    productivity: "Muy Bajo",
    collaboration: "Muy Bajo",
    quality: "Aceptable",
    objectivesCompleted: "Aceptable",
    selfEvaluation: 5,
    tasksCompleted: "Todo.",
    blockers: "Creatividad.",
    areasToImprove: "Falta de comunicación con el equipo.",
    nextSprintFocus: "Todo lo relacionado con diseño.",
    improvementProposals: "Que el equipo quiera aportar al trabajo.",
  },

  // === EQUIPO 3 ===
  {
    memberId: "e3-1",
    memberName: "StudyLink (Líder)",
    teamId: 3,
    sprint: 1,
    productivity: "Bajo",
    collaboration: "Aceptable",
    quality: "Bueno",
    objectivesCompleted: "Bajo",
    selfEvaluation: 5,
    tasksCompleted: "Organización de GitHub, board en Notion, prompt para UI, backend en ReqRes, GETs y POSTs en Postman, documento con capturas.",
    blockers: "Ninguno.",
    areasToImprove: "Repasar conceptos de Bases de Datos y Estructuras de Datos.",
    nextSprintFocus: "Creación de entidades y relaciones.",
    improvementProposals: "Comunicación y que dejen de faltar.",
  },
  {
    memberId: "e3-2",
    memberName: "Del Angel Santiago Monserrat Guadalupe",
    teamId: 3,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Requerimientos del proyecto, definición y alcance, solución a problemas en prueba de backend.",
    blockers: "Problemas con la luz.",
    areasToImprove: "Implementación técnica.",
    nextSprintFocus: "Diagrama ER y esquema inicial en PostgreSQL.",
    improvementProposals: "Comunicación activa de todos los integrantes.",
  },

  // === EQUIPO 4 ===
  {
    memberId: "e4-1",
    memberName: "Martinez Rodriguez Fernando",
    teamId: 4,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Bueno",
    quality: "Excelente",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Tipos de Usuario y roles, ideas para la problemática.",
    blockers: "Falta hablar más.",
    areasToImprove: "Falta de conocimiento en BS.",
    nextSprintFocus: "Diagrama ER y migraciones.",
    improvementProposals: "Mejorar un poco la comunicación.",
  },
  {
    memberId: "e4-2",
    memberName: "Trinidad Potrero Josue",
    teamId: 4,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 5,
    tasksCompleted: "Completé idea del compañero, tomé iniciativa en documento, propuse ideas y herramientas.",
    blockers: "Backend, Git y ClickUp (herramientas nuevas).",
    areasToImprove: "Git, ClickUp.",
    nextSprintFocus: "Aprender herramientas, aportar ideas, ayudar compañeros.",
    improvementProposals: "Buen trabajo con herramientas del profesor y Google Docs.",
  },
  {
    memberId: "e4-3",
    memberName: "Aguilar Buendía Bruno",
    teamId: 4,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Parte del punto 4 y 5 del README y PDF de UI para lab1.",
    blockers: "Saturación de la escuela.",
    areasToImprove: "Ninguna.",
    nextSprintFocus: "Backend.",
    improvementProposals: "Mejor organización y definir líder/Scrum Master.",
  },

  // === EQUIPO 6 ===
  {
    memberId: "e6-1",
    memberName: "Escutia Pascacio Eduardo Emiliano",
    teamId: 6,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Desarrollo del frontend, recordatorio de tiempos, propuestas de trabajo, delimitar alcances.",
    blockers: "Falta de conocimiento de ciertas herramientas.",
    areasToImprove: "Repasar conocimientos generales, desarrollo backend, JavaScript.",
    nextSprintFocus: "Mayor escrutinio a los alcances y definir entidades para BD.",
    improvementProposals: "Más espacios de trabajo en paralelo.",
  },

  // === EQUIPO 7 ===
  {
    memberId: "e7-1",
    memberName: "Hernandez Gonzalez Armando",
    teamId: 7,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Organización del tablero JIRA, ideas para prompt final.",
    blockers: "Ninguno.",
    areasToImprove: "Por el momento no.",
    nextSprintFocus: "Diseño del diagrama ER.",
    improvementProposals: "Ninguna.",
  },
  {
    memberId: "e7-2",
    memberName: "Rodríguez Rodríguez Erick Tadeo",
    teamId: 7,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Diagrama de arquitectura, ayuda con prompt completo.",
    blockers: "Número de personas (no supieron dividirse bien).",
    areasToImprove: "Comunicación hacia compañeros.",
    nextSprintFocus: "Aprender más sobre backend.",
    improvementProposals: "Organizarse mejor desde el primer día.",
  },
  {
    memberId: "e7-3",
    memberName: "Marquez Espinoza Alyn Veronica",
    teamId: 7,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bajo",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 3,
    tasksCompleted: "Entendimiento de peticiones y comunicación en equipo.",
    blockers: "Enfermedad, llegó tarde al equipo.",
    areasToImprove: "Comunicación y acercamiento con compañeros.",
    nextSprintFocus: "Entender mejor el backend.",
    improvementProposals: "Reunión de al menos 20 minutos tipo junta.",
  },
  {
    memberId: "e7-4",
    memberName: "Hernandez Martinez Monserrat",
    teamId: 7,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Inició documento con objetivo, usuarios, etc.",
    blockers: "Falta de instrucciones, confusión.",
    areasToImprove: "Backend, APIs y funcionamiento.",
    nextSprintFocus: "Creación de tablas de SQL.",
    improvementProposals: "El equipo fue muy bueno organizándose.",
  },
  {
    memberId: "e7-5",
    memberName: "Moreno Vigueras Arturo Tadeo",
    teamId: 7,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Organización e idea inicial, creación de repos Git, monitoreo de avances, unificación de prompts.",
    blockers: "No conocer al equipo.",
    areasToImprove: "Repasar temas para evitar lagunas.",
    nextSprintFocus: "Modelos ER.",
    improvementProposals: "Declarar tareas desde el día 1.",
  },
  {
    memberId: "e7-6",
    memberName: "Cruz Chávez Miguel Ángel",
    teamId: 7,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Redacción del enfoque, definición de usuarios, README en GitHub.",
    blockers: "Perdió la organización inicial.",
    areasToImprove: "Estar atento y en comunicación constante.",
    nextSprintFocus: "Diseño del modelo de datos.",
    improvementProposals: "Definir tareas y apoyar si hay problemas.",
  },

  // === EQUIPO 8 ===
  {
    memberId: "e8-1",
    memberName: "Herrera Hernández Diego",
    teamId: 8,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Checar backend, organizar reunión para finalizar trabajo.",
    blockers: "Adaptación a horario del servicio social.",
    areasToImprove: "Hacer las cosas un poco antes.",
    nextSprintFocus: "Programación en general.",
    improvementProposals: "Repartir mejor tareas y establecer reuniones rutinarias.",
  },
  {
    memberId: "e8-2",
    memberName: "Sebastián Cervantes Vanesa",
    teamId: 8,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Documentación, diseño de la IA.",
    blockers: "No supo cómo hacer endpoints.",
    areasToImprove: "Manejo de diferentes plataformas.",
    nextSprintFocus: "Manejo de plataformas, aterrizar idea inicial.",
    improvementProposals: "Más organización y mejorar conocimiento.",
  },
  {
    memberId: "e8-3",
    memberName: "González Hernández Leslie Danaé",
    teamId: 8,
    sprint: 1,
    productivity: "Aceptable",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 3,
    tasksCompleted: "Simulador de UI, documento de requerimientos, objetivos del proyecto, diagrama básico. Intentó ayudar con endpoints.",
    blockers: "Dificultad con desarrollo de endpoints.",
    areasToImprove: "Manejo de plataformas para backend.",
    nextSprintFocus: "Identificar relaciones entre secciones.",
    improvementProposals: "Mejorar comunicación, familiarizarse con temas.",
  },
  {
    memberId: "e8-4",
    memberName: "Baez Villanueva Mauricio Omar",
    teamId: 8,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Documentación, prompt original para desarrollo.",
    blockers: "Tiempo limitado por otras materias.",
    areasToImprove: "Gestión de tiempo.",
    nextSprintFocus: "Mejorar experiencia de usuario.",
    improvementProposals: "Dividir tareas grandes en más pequeñas.",
  },

  // === EQUIPO 9 ===
  {
    memberId: "e9-1",
    memberName: "Cortes Cortes Bryan Yael",
    teamId: 9,
    sprint: 1,
    productivity: "Aceptable",
    collaboration: "Aceptable",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Gran parte de requerimientos, formato y desglose del documento.",
    blockers: "Desconocimiento del desarrollo del sistema.",
    areasToImprove: "Conocimientos básicos de desarrollo de sistemas.",
    nextSprintFocus: "APIs.",
    improvementProposals: "Mejor aportación, solo dos personas están trabajando.",
  },
];

// ========================================
// FELICITACIONES - Actualizar cada sprint
// ========================================
export const felicitaciones: Felicitacion[] = [
  // Sprint 1
  { from: "Martinez Rodriguez Fernando", fromTeam: 4, to: "Josue", sprint: 1, reason: "Aporta mucho y organiza" },
  { from: "Martinez Rodriguez Fernando", fromTeam: 4, to: "Bruno", sprint: 1, reason: "Aporta mucho" },
  { from: "Trinidad Potrero Josue", fromTeam: 4, to: "Bruno", sprint: 1, reason: "Muy buen desempeño" },
  { from: "Trinidad Potrero Josue", fromTeam: 4, to: "Fernando", sprint: 1, reason: "Muy buen desempeño" },
  { from: "Aguilar Buendía Bruno", fromTeam: 4, to: "Fernando", sprint: 1 },
  { from: "StudyLink (Líder)", fromTeam: 3, to: "Estefani", sprint: 1 },
  { from: "Del Angel Santiago Monserrat Guadalupe", fromTeam: 3, to: "Dominguez Lira Estefani Michelle", sprint: 1 },
  { from: "Del Angel Santiago Monserrat Guadalupe", fromTeam: 3, to: "Ruiz García Emiliano", sprint: 1 },
  { from: "Hernández Peña Angel Adrian", fromTeam: 1, to: "Ramón Medina", sprint: 1 },
  { from: "Gil De Gaona Jazmín", fromTeam: 1, to: "Ángel", sprint: 1 },
  { from: "Medina Hernández Ramón", fromTeam: 1, to: "Angel", sprint: 1 },
  { from: "Velázquez Martínez Antonio", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Herrera Franco Samuel", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Herrera Hernández Diego", fromTeam: 8, to: "Todos colaboraron igual", sprint: 1 },
  { from: "Sebastián Cervantes Vanesa", fromTeam: 8, to: "Diego Herrera Hernández", sprint: 1 },
  { from: "González Hernández Leslie Danaé", fromTeam: 8, to: "Diego Herrera Hernández", sprint: 1 },
  { from: "Baez Villanueva Mauricio Omar", fromTeam: 8, to: "Diego", sprint: 1 },
  { from: "Rodríguez Rodríguez Erick Tadeo", fromTeam: 7, to: "Todo el equipo", sprint: 1, reason: "Se complementaron muy bien" },
  { from: "Marquez Espinoza Alyn Veronica", fromTeam: 7, to: "Arturo", sprint: 1 },
  { from: "Hernandez Martinez Monserrat", fromTeam: 7, to: "Arthur", sprint: 1, reason: "Buen líder y explicando" },
  { from: "Moreno Vigueras Arturo Tadeo", fromTeam: 7, to: "Miguel Ángel", sprint: 1, reason: "Sacó de dudas" },
  { from: "Cruz Chávez Miguel Ángel", fromTeam: 7, to: "Todos", sprint: 1, reason: "Muy proactivos" },
  { from: "Cortes Cortes Bryan Yael", fromTeam: 9, to: "Cortes Cortes Bryan Yael", sprint: 1 },
  { from: "Escutia Pascacio Eduardo Emiliano", fromTeam: 6, to: "Michelle", sprint: 1 },
];

// ========================================
// HELPER FUNCTIONS
// ========================================

export const getTeamById = (id: number): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getSprintDataByTeam = (teamId: number, sprint?: number): SprintEvaluation[] => {
  return sprintData.filter(data => 
    data.teamId === teamId && (sprint === undefined || data.sprint === sprint)
  );
};

export const getFelicitacionesByTeam = (teamId: number, sprint?: number): Felicitacion[] => {
  return felicitaciones.filter(f => 
    f.fromTeam === teamId && (sprint === undefined || f.sprint === sprint)
  );
};

export const getFelicitacionesForPerson = (personName: string, sprint?: number): Felicitacion[] => {
  const lowerName = personName.toLowerCase();
  return felicitaciones.filter(f => 
    f.to.toLowerCase().includes(lowerName) && (sprint === undefined || f.sprint === sprint)
  );
};

export const countFelicitaciones = (sprint?: number): Map<string, number> => {
  const counts = new Map<string, number>();
  const filtered = sprint !== undefined 
    ? felicitaciones.filter(f => f.sprint === sprint) 
    : felicitaciones;
  
  filtered.forEach(f => {
    const key = f.to.toLowerCase();
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  
  return counts;
};

export const getAvailableSprints = (): number[] => {
  const sprints = new Set(sprintData.map(d => d.sprint));
  return Array.from(sprints).sort((a, b) => a - b);
};

export const calculateTeamAverages = (teamId: number, sprint?: number) => {
  const data = getSprintDataByTeam(teamId, sprint);
  if (data.length === 0) return null;

  const scoreMap: Record<string, number> = {
    'Excelente': 5,
    'Bueno': 4,
    'Aceptable': 3,
    'Bajo': 2,
    'Muy Bajo': 1,
  };

  const avgSelfEval = data.reduce((sum, d) => sum + d.selfEvaluation, 0) / data.length;
  const avgProductivity = data.reduce((sum, d) => sum + (scoreMap[d.productivity] || 3), 0) / data.length;
  const avgCollaboration = data.reduce((sum, d) => sum + (scoreMap[d.collaboration] || 3), 0) / data.length;
  const avgQuality = data.reduce((sum, d) => sum + (scoreMap[d.quality] || 3), 0) / data.length;
  const avgObjectives = data.reduce((sum, d) => sum + (scoreMap[d.objectivesCompleted] || 3), 0) / data.length;

  return {
    selfEvaluation: avgSelfEval,
    productivity: avgProductivity,
    collaboration: avgCollaboration,
    quality: avgQuality,
    objectivesCompleted: avgObjectives,
    overall: (avgProductivity + avgCollaboration + avgQuality + avgObjectives) / 4,
  };
};
