/**
 * DATOS DE EQUIPOS - SPRINT 1
 * 
 * Este archivo contiene toda la informaciÃ³n de los equipos para el dashboard de anÃ¡lisis.
 * Para actualizar (cada 2 semanas):
 * 1. Agrega nuevos miembros al array 'members' de cada equipo si es necesario
 * 2. Actualiza los datos de sprint en 'sprintData'
 * 3. Actualiza las felicitaciones en 'felicitaciones'
 * 
 * ESTRUCTURA:
 * - teams: InformaciÃ³n base de cada equipo (miembros, links)
 * - sprintData: Evaluaciones por sprint
 * - felicitaciones: Reconocimientos entre compaÃ±eros
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
  // EvaluaciÃ³n del equipo (Excelente, Bueno, Aceptable, Bajo, Muy Bajo)
  productivity: string;
  collaboration: string;
  quality: string;
  objectivesCompleted: string;
  // AutoevaluaciÃ³n (1-5)
  selfEvaluation: number;
  // InformaciÃ³n adicional
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
// EQUIPOS - Actualizar miembros y links aquÃ­
// ========================================
export const teams: Team[] = [
  {
    id: 1,
    name: "Equipo 1",
    projectName: "DevStudy",
    members: [
      { name: "HernÃ¡ndez PeÃ±a Angel Adrian", email: "estudiante@ejemplo.com" },
      { name: "Gil De Gaona JazmÃ­n", email: "estudiante@ejemplo.com" },
      { name: "Medina HernÃ¡ndez RamÃ³n", email: "estudiante@ejemplo.com" },
      { name: "Buenrostro Cruces Sarai", email: "estudiante@ejemplo.com" },
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
      { name: "VelÃ¡zquez MartÃ­nez Antonio", email: "estudiante@ejemplo.com" },
      { name: "Herrera Franco Samuel", email: "estudiante@ejemplo.com" },
      { name: "Segura Loera Carlos Emiliano", email: "estudiante@ejemplo.com" },
      { name: "Villeda LÃ³pez SaÃºl", email: "estudiante@ejemplo.com" },
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
      { name: "StudyLink", email: "estudiante@ejemplo.com" },
      { name: "Del Angel Santiago Monserrat Guadalupe", email: "estudiante@ejemplo.com" },
      { name: "Dominguez Lira Estefani Michelle (Sin respuesta)" },
      { name: "Ruiz GarcÃ­a Emiliano (Sin respuesta)" },
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
      { name: "Martinez Rodriguez Fernando", email: "estudiante@ejemplo.com" },
      { name: "Trinidad Potrero Josue", email: "estudiante@ejemplo.com" },
      { name: "Aguilar BuendÃ­a Bruno", email: "estudiante@ejemplo.com" },
    ],
    githubUrl: "https://github.com/Null-Nexus",
    boardUrl: "https://app.clickup.com/9017897580/v/s/90174290770",
    boardTool: "ClickUp",
  },
  {
    id: 5,
    name: "Equipo 5",
    projectName: "AcaShop",
    members: [
      { name: "Alitzel Sophia Camacho Flores", email: "estudiante@ejemplo.com" },
      { name: "Cristina Vianeth Saiz Perez", email: "estudiante@ejemplo.com" },
    ],
    githubUrl: "https://github.com/AcaShop-Acatlan",
    boardUrl: "https://cristinavianethsaizperez.atlassian.net/jira/software/projects/SCRUM/boards/1",
    boardTool: "Jira",
  },
  {
    id: 6,
    name: "Equipo 6",
    members: [
      { name: "Escutia Pascacio Eduardo Emiliano", email: "estudiante@ejemplo.com" },
      { name: "GonzÃ¡lez SÃ¡nchez RaÃºl Alejandro", email: "estudiante@ejemplo.com" },
      { name: "Moctezuma Isidro Michelle (Sin respuesta)" },
    ],
    githubUrl: "https://github.com",
    boardUrl: "https://readdy.ai",
    boardTool: "Other",
  },
  {
    id: 7,
    name: "Equipo 7",
    projectName: "AcadÃ©micos Web",
    members: [
      { name: "Hernandez Gonzalez Armando", email: "estudiante@ejemplo.com" },
      { name: "RodrÃ­guez RodrÃ­guez Erick Tadeo", email: "estudiante@ejemplo.com" },
      { name: "Marquez Espinoza Alyn Veronica", email: "estudiante@ejemplo.com" },
      { name: "Hernandez Martinez Monserrat", email: "estudiante@ejemplo.com" },
      { name: "Moreno Vigueras Arturo Tadeo", email: "estudiante@ejemplo.com" },
      { name: "Cruz ChÃ¡vez Miguel Ãngel", email: "estudiante@ejemplo.com" },
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
      { name: "Herrera HernÃ¡ndez Diego", email: "estudiante@ejemplo.com" },
      { name: "SebastiÃ¡n Cervantes Vanesa", email: "estudiante@ejemplo.com" },
      { name: "GonzÃ¡lez HernÃ¡ndez Leslie DanaÃ©", email: "estudiante@ejemplo.com" },
      { name: "Baez Villanueva Mauricio Omar", email: "estudiante@ejemplo.com" },
    ],
    githubUrl: "https://github.com/ExtraWeb0rdinarios",
    boardUrl: "https://diego0hh013.atlassian.net/jira/software/projects/SCRUM/boards/1",
    boardTool: "Jira",
  },
  {
    id: 9,
    name: "Equipo 9",
    members: [
      { name: "Cortes Cortes Bryan Yael", email: "estudiante@ejemplo.com" },
      { name: "RÃ­os Barrera Arantza Ilian", email: "estudiante@ejemplo.com" },
    ],
    githubUrl: "https://github.com/EQUIPO9-DESARROLLOWEB/Front-end-proyecto",
    boardUrl: "https://docs.google.com/document/d/1eVdBiVaXQEN7dR-_-o9rjnTMMecKeFFMJqoCcMiTV68/edit",
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
    memberName: "HernÃ¡ndez PeÃ±a Angel Adrian",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "OrganizaciÃ³n y definiciÃ³n de actividades y roles. DescripciÃ³n del proyecto. Compartir materiales y documentaciÃ³n. ValidaciÃ³n y entrevistas a profesores.",
    blockers: "QuerÃ­a hacer y acabar todo sin considerar tiempos del equipo.",
    areasToImprove: "ComunicaciÃ³n en lÃ­nea, conocimientos de PostgreSQL y MongoDB.",
    nextSprintFocus: "Front End del landing page, DiseÃ±o de actividades, Sistema de Login/SignUp.",
    improvementProposals: "RepositorFio de ideas, sistema de recompensas, mejorar manejo de Git/GitHub.",
  },
  {
    memberId: "e1-2",
    memberName: "Gil De Gaona JazmÃ­n",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "OrganizaciÃ³n y comunicaciÃ³n constante.",
    blockers: "Manejo del estrÃ©s.",
    areasToImprove: "Manejo de tiempos.",
    nextSprintFocus: "Base de datos, estructura de los juegos.",
    improvementProposals: "Por ahora, todo va bien.",
  },
  {
    memberId: "e1-3",
    memberName: "Medina HernÃ¡ndez RamÃ³n",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "CreaciÃ³n de diagramas E-R, aporte de ideas, construcciÃ³n de BD.",
    blockers: "Poco conocimiento en Git y GitHub, bloqueos mentales.",
    areasToImprove: "Git/GitHub, SQL, front-end.",
    nextSprintFocus: "CreaciÃ³n de la base de datos, alojar BD en repositorio, conectar BD al login.",
    improvementProposals: "Buen avance, comunicaciÃ³n y apoyo mutuo con herramientas.",
  },
  {
    memberId: "e1-4",
    memberName: "Buenrostro Cruces Sarai",
    teamId: 1,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Aporte en la realizaciÃ³n del prototipo de la pÃ¡gina web en Readdy.",
    blockers: "Ninguno, realicÃ© la tarea que me correspondÃ­a.",
    areasToImprove: "SQL, ya que en conjunto con mi compaÃ±ero RamÃ³n, vamos a trabajar en esa Ã¡rea del proyecto.",
    nextSprintFocus: "Base de datos.",
    improvementProposals: "Hasta ahora considero que vamos bastante bien.",
  },

  // === EQUIPO 2 ===
  {
    memberId: "e2-1",
    memberName: "VelÃ¡zquez MartÃ­nez Antonio",
    teamId: 2,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Bueno",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "La idea del proyecto, la pensamos mi compaÃ±ero Samuel y yo, Ã©l se las compartiÃ³ al resto.",
    blockers: "Falta de comunicaciÃ³n que puede afectar la productividad.",
    areasToImprove: "ComunicaciÃ³n entre integrantes.",
    nextSprintFocus: "Ya se verÃ¡, dependiendo cÃ³mo se desarrolle la semana.",
    improvementProposals: "ComunicaciÃ³n, ya que solo nos reunimos en lab.",
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
    tasksCompleted: "Ideas para el proyecto, propuestas para el front, desarrollo de endpoints.",
    blockers: "Conocimiento cruzado, APIs, endpoints.",
    areasToImprove: "Definiciones, APIs, endpoints.",
    nextSprintFocus: "DefiniciÃ³n de la base de datos, definiciÃ³n del tipo de base de datos a ocupar.",
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
    blockers: "La creatividad.",
    areasToImprove: "Falta de comunicaciÃ³n con mi equipo.",
    nextSprintFocus: "Todo lo que tenga que ver con diseÃ±o.",
    improvementProposals: "Que mi equipo sÃ­ quiera aportar al trabajo.",
  },
  {
    memberId: "e2-4",
    memberName: "Villeda LÃ³pez SaÃºl",
    teamId: 2,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 2,
    tasksCompleted: "Aportes para ampliar el mercado de nuestro sitio web.",
    blockers: "Falta de comunicaciÃ³n y desconocimiento de algunos temas.",
    areasToImprove: "Falta de conocimientos en bases de datos y mejorar habilidades blandas.",
    nextSprintFocus: "AÃºn no las defino.",
    improvementProposals: "Ninguna por el momento.",
  },

  // === EQUIPO 3 ===
  {
    memberId: "e3-1",
    memberName: "StudyLink",
    teamId: 3,
    sprint: 1,
    productivity: "Bajo",
    collaboration: "Aceptable",
    quality: "Bueno",
    objectivesCompleted: "Bajo",
    selfEvaluation: 5,
    tasksCompleted: "OrganizaciÃ³n de GitHub, board en Notion, prompt para UI, backend en ReqRes, GETs y POSTs en Postman, documento con capturas.",
    blockers: "Ninguno.",
    areasToImprove: "Repasar conceptos de Bases de Datos y Estructuras de Datos.",
    nextSprintFocus: "CreaciÃ³n de entidades y relaciones.",
    improvementProposals: "ComunicaciÃ³n y que dejen de faltar.",
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
    tasksCompleted: "Requerimientos del proyecto, definiciÃ³n y alcance, soluciÃ³n a problemas en prueba de backend.",
    blockers: "Problemas con la luz.",
    areasToImprove: "ImplementaciÃ³n tÃ©cnica.",
    nextSprintFocus: "Diagrama ER y esquema inicial en PostgreSQL.",
    improvementProposals: "ComunicaciÃ³n activa de todos los integrantes.",
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
    tasksCompleted: "Tipos de Usuario y roles, ideas para la problemÃ¡tica.",
    blockers: "Falta hablar mÃ¡s.",
    areasToImprove: "Falta de conocimiento en BS.",
    nextSprintFocus: "Diagrama ER y migraciones.",
    improvementProposals: "Mejorar un poco la comunicaciÃ³n.",
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
    tasksCompleted: "CompletÃ© idea del compaÃ±ero, tomÃ© iniciativa en documento, propuse ideas y herramientas.",
    blockers: "Backend, Git y ClickUp (herramientas nuevas).",
    areasToImprove: "Git, ClickUp.",
    nextSprintFocus: "Aprender herramientas, aportar ideas, ayudar compaÃ±eros.",
    improvementProposals: "Buen trabajo con herramientas del profesor y Google Docs.",
  },
  {
    memberId: "e4-3",
    memberName: "Aguilar BuendÃ­a Bruno",
    teamId: 4,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Parte del punto 4 y 5 del README y PDF de UI para lab1.",
    blockers: "SaturaciÃ³n de la escuela.",
    areasToImprove: "Ninguna.",
    nextSprintFocus: "Backend.",
    improvementProposals: "Mejor organizaciÃ³n y definir lÃ­der/Scrum Master.",
  },

  // === EQUIPO 5 ===
  {
    memberId: "e5-1",
    memberName: "Alitzel Sophia Camacho Flores",
    teamId: 5,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Excelente",
    objectivesCompleted: "Bueno",
    selfEvaluation: 5,
    tasksCompleted: "Pdf del Readdy, organizaciÃ³n de github (readme e inicio de frontend), organizaciÃ³n del equipo.",
    blockers: "No entender del todo que era lo que habÃ­a por entregar.",
    areasToImprove: "Aprender y enseÃ±ar a mis compaÃ±eras github.",
    nextSprintFocus: "ImplementaciÃ³n tÃ©cnica.",
    improvementProposals: "ComunicaciÃ³n entre todas las integrantes los dÃ­as que no hay clases sobre el progreso.",
  },
  {
    memberId: "e5-2",
    memberName: "Cristina Vianeth Saiz Perez",
    teamId: 5,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Bueno",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Realice la organizaciÃ³n en Jira asÃ­ como el escrito de documentaciÃ³n de iniciaciÃ³n del proyecto asÃ­ como la conexiÃ³n del backend.",
    blockers: "Se me complican mucho entender todo el proceso de backend y frontend, son muchas terminologÃ­as y estoy revuelta.",
    areasToImprove: "Falta de conocimiento de Git.",
    nextSprintFocus: "AÃºn no nos hemos organizado entre el equipo en el siguiente Sprint.",
    improvementProposals: "ComunicaciÃ³n.",
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
    tasksCompleted: "Desarrollo del frontend, recordatorio de tiempos, propuestas de trabajo, delimitar alcances por medio de llamada.",
    blockers: "Falta de conocimiento de ciertas herramientas.",
    areasToImprove: "Repasar conocimientos generales, desarrollo backend, JavaScript.",
    nextSprintFocus: "Mayor escrutinio a los alcances y definir entidades para BD.",
    improvementProposals: "MÃ¡s espacios de trabajo en paralelo.",
  },
  {
    memberId: "e6-2",
    memberName: "GonzÃ¡lez SÃ¡nchez RaÃºl Alejandro",
    teamId: 6,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "CreaciÃ³n del backend y pruebas en Postman.",
    blockers: "Por razones personales no pudo conectarse a la reuniÃ³n en lÃ­nea del equipo.",
    areasToImprove: "Aprender a usar las distintas pÃ¡ginas/herramientas.",
    nextSprintFocus: "Apoyo en las fases avanzadas de lo que se pida.",
    improvementProposals: "El equipo trabajÃ³ muy bien de la forma en que lo hizo.",
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
    tasksCompleted: "OrganizaciÃ³n del tablero JIRA, ideas para prompt final.",
    blockers: "Ninguno.",
    areasToImprove: "Por el momento no.",
    nextSprintFocus: "DiseÃ±o del diagrama ER.",
    improvementProposals: "Ninguna.",
  },
  {
    memberId: "e7-2",
    memberName: "RodrÃ­guez RodrÃ­guez Erick Tadeo",
    teamId: 7,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Diagrama de arquitectura, ayuda con prompt completo.",
    blockers: "NÃºmero de personas (no supieron dividirse bien).",
    areasToImprove: "ComunicaciÃ³n hacia compaÃ±eros.",
    nextSprintFocus: "Aprender mÃ¡s sobre backend.",
    improvementProposals: "Organizarse mejor desde el primer dÃ­a.",
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
    tasksCompleted: "Entendimiento de peticiones y comunicaciÃ³n en equipo.",
    blockers: "Enfermedad, llegÃ³ tarde al equipo.",
    areasToImprove: "ComunicaciÃ³n y acercamiento con compaÃ±eros.",
    nextSprintFocus: "Entender mejor el backend.",
    improvementProposals: "ReuniÃ³n de al menos 20 minutos tipo junta.",
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
    tasksCompleted: "IniciÃ³ documento con objetivo, usuarios, etc.",
    blockers: "Falta de instrucciones, confusiÃ³n.",
    areasToImprove: "Backend, APIs y funcionamiento.",
    nextSprintFocus: "CreaciÃ³n de tablas de SQL.",
    improvementProposals: "El equipo fue muy bueno organizÃ¡ndose.",
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
    tasksCompleted: "OrganizaciÃ³n e idea inicial, creaciÃ³n de repos Git, monitoreo de avances, unificaciÃ³n de prompts.",
    blockers: "No conocer al equipo.",
    areasToImprove: "Repasar temas para evitar lagunas.",
    nextSprintFocus: "Modelos ER.",
    improvementProposals: "Declarar tareas desde el dÃ­a 1.",
  },
  {
    memberId: "e7-6",
    memberName: "Cruz ChÃ¡vez Miguel Ãngel",
    teamId: 7,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "RedacciÃ³n del enfoque, definiciÃ³n de usuarios, README en GitHub.",
    blockers: "PerdiÃ³ la organizaciÃ³n inicial.",
    areasToImprove: "Estar atento y en comunicaciÃ³n constante.",
    nextSprintFocus: "DiseÃ±o del modelo de datos.",
    improvementProposals: "Definir tareas y apoyar si hay problemas.",
  },

  // === EQUIPO 8 ===
  {
    memberId: "e8-1",
    memberName: "Herrera HernÃ¡ndez Diego",
    teamId: 8,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Excelente",
    objectivesCompleted: "Excelente",
    selfEvaluation: 5,
    tasksCompleted: "Checar lo del Backend, organizar la reuniÃ³n para finalizar el trabajo.",
    blockers: "AdaptaciÃ³n a mi horario del servicio social que hago actualmente, y otras actividades.",
    areasToImprove: "Hacer las cosas un poco antes.",
    nextSprintFocus: "Desenvolverme en la programaciÃ³n en general.",
    improvementProposals: "Repartir mejor las tareas y establecer momentos de reuniÃ³n para realizar el trabajo de manera rutinaria.",
  },
  {
    memberId: "e8-2",
    memberName: "SebastiÃ¡n Cervantes Vanesa",
    teamId: 8,
    sprint: 1,
    productivity: "Excelente",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "DocumentaciÃ³n, diseÃ±o de la IA.",
    blockers: "No supo cÃ³mo hacer endpoints.",
    areasToImprove: "MÃ¡s conocimientos de cÃ³mo manejar las diferentes plataformas.",
    nextSprintFocus: "Manejo de plataformas, aterrizar idea inicial.",
    improvementProposals: "MÃ¡s organizaciÃ³n y mejorar conocimiento.",
  },
  {
    memberId: "e8-3",
    memberName: "GonzÃ¡lez HernÃ¡ndez Leslie DanaÃ©",
    teamId: 8,
    sprint: 1,
    productivity: "Aceptable",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 3,
    tasksCompleted: "Simulador de UI, documento de requerimientos, objetivos del proyecto, diagrama bÃ¡sico. IntentÃ³ ayudar con endpoints.",
    blockers: "Dificultad con desarrollo de endpoints.",
    areasToImprove: "Manejo de plataformas para backend.",
    nextSprintFocus: "Identificar relaciones entre secciones.",
    improvementProposals: "Mejorar comunicaciÃ³n, familiarizarse con temas.",
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
    tasksCompleted: "Apoye en la documentaciÃ³n y en el prompt original para todo el desarrollo.",
    blockers: "Tiempo limitado por otras materias y responsabilidades.",
    areasToImprove: "Mejor gestiÃ³n de tiempo y dedicarle mÃ¡s tiempo a entender cada entorno.",
    nextSprintFocus: "Mejorar experiencia de usuario.",
    improvementProposals: "Dividir tareas grandes en mÃ¡s pequeÃ±as.",
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
    tasksCompleted: "RealizaciÃ³n de gran parte de los requerimientos, formato y desglose del documento.",
    blockers: "Desconocimiento del desarrollo del sistema, conceptos y herramientas.",
    areasToImprove: "Conocimientos bÃ¡sicos de desarrollo de sistemas.",
    nextSprintFocus: "APIs.",
    improvementProposals: "Mejor aportaciÃ³n, solo dos personas estÃ¡n trabajando.",
  },
  {
    memberId: "e9-2",
    memberName: "RÃ­os Barrera Arantza Ilian",
    teamId: 9,
    sprint: 1,
    productivity: "Aceptable",
    collaboration: "Bajo",
    quality: "Bajo",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Prompt de UI y pruebas en Postman.",
    blockers: "Falta de familiaridad con algunos tÃ©rminos.",
    areasToImprove: "Tener los conceptos claros y mejorar conocimientos.",
    nextSprintFocus: "Backend.",
    improvementProposals: "Mejorar la comunicaciÃ³n y la forma de repartir el trabajo.",
  },
];

// ========================================
// FELICITACIONES - Actualizar cada sprint
// ========================================
export const felicitaciones: Felicitacion[] = [
  // Sprint 1
  { from: "Martinez Rodriguez Fernando", fromTeam: 4, to: "Josue", sprint: 1, reason: "Aporta mucho y organiza" },
  { from: "Martinez Rodriguez Fernando", fromTeam: 4, to: "Bruno", sprint: 1, reason: "Aporta mucho" },
  { from: "Trinidad Potrero Josue", fromTeam: 4, to: "Bruno", sprint: 1, reason: "Muy buen desempeÃ±o" },
  { from: "Trinidad Potrero Josue", fromTeam: 4, to: "Fernando", sprint: 1, reason: "Muy buen desempeÃ±o" },
  { from: "Aguilar BuendÃ­a Bruno", fromTeam: 4, to: "Fernando", sprint: 1 },
  { from: "StudyLink", fromTeam: 3, to: "Estefani", sprint: 1 },
  { from: "Del Angel Santiago Monserrat Guadalupe", fromTeam: 3, to: "Dominguez Lira Estefani Michelle", sprint: 1 },
  { from: "Del Angel Santiago Monserrat Guadalupe", fromTeam: 3, to: "Ruiz GarcÃ­a Emiliano", sprint: 1 },
  { from: "HernÃ¡ndez PeÃ±a Angel Adrian", fromTeam: 1, to: "RamÃ³n Medina", sprint: 1 },
  { from: "Gil De Gaona JazmÃ­n", fromTeam: 1, to: "Ãngel", sprint: 1 },
  { from: "Medina HernÃ¡ndez RamÃ³n", fromTeam: 1, to: "Angel", sprint: 1 },
  { from: "Buenrostro Cruces Sarai", fromTeam: 1, to: "Angel", sprint: 1 },
  { from: "VelÃ¡zquez MartÃ­nez Antonio", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Herrera Franco Samuel", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Villeda LÃ³pez SaÃºl", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Herrera HernÃ¡ndez Diego", fromTeam: 8, to: "Todos colaboraron igual", sprint: 1 },
  { from: "SebastiÃ¡n Cervantes Vanesa", fromTeam: 8, to: "Diego Herrera HernÃ¡ndez", sprint: 1 },
  { from: "GonzÃ¡lez HernÃ¡ndez Leslie DanaÃ©", fromTeam: 8, to: "Diego Herrera HernÃ¡ndez", sprint: 1 },
  { from: "Baez Villanueva Mauricio Omar", fromTeam: 8, to: "Diego", sprint: 1 },
  { from: "RodrÃ­guez RodrÃ­guez Erick Tadeo", fromTeam: 7, to: "Todo el equipo", sprint: 1, reason: "Se complementaron muy bien" },
  { from: "Marquez Espinoza Alyn Veronica", fromTeam: 7, to: "Arturo", sprint: 1 },
  { from: "Hernandez Martinez Monserrat", fromTeam: 7, to: "Arthur", sprint: 1, reason: "Buen lÃ­der y explicando" },
  { from: "Moreno Vigueras Arturo Tadeo", fromTeam: 7, to: "Miguel Ãngel", sprint: 1, reason: "SacÃ³ de dudas" },
  { from: "Cruz ChÃ¡vez Miguel Ãngel", fromTeam: 7, to: "Todos", sprint: 1, reason: "Muy proactivos" },
  { from: "Cortes Cortes Bryan Yael", fromTeam: 9, to: "Cortes Cortes Bryan Yael", sprint: 1 },
  { from: "RÃ­os Barrera Arantza Ilian", fromTeam: 9, to: "Yael Cortes", sprint: 1 },
  { from: "Escutia Pascacio Eduardo Emiliano", fromTeam: 6, to: "Michelle", sprint: 1 },
  { from: "GonzÃ¡lez SÃ¡nchez RaÃºl Alejandro", fromTeam: 6, to: "Moctezuma Isidro Michelle", sprint: 1 },
  { from: "Alitzel Sophia Camacho Flores", fromTeam: 5, to: "Cristina", sprint: 1, reason: "Por la idea del proyecto y estar al pendiente" },
  { from: "Cristina Vianeth Saiz Perez", fromTeam: 5, to: "Ali", sprint: 1 },
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

// Normaliza nombres para agrupar variaciones (Ãngel/Angel, Arturo/Arthur, Diego/Diego Herrera, etc)
const normalizeStudentName = (name: string): string => {
  let normalized = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remover acentos
  
  // Mapeo de nombres equivalentes
  const nameAliases: Record<string, string> = {
    'angel': 'angel',
    'Ã¡ngel': 'angel',
    'arturo': 'arturo',
    'arthur': 'arturo',
    'diego': 'diego',
    'diego herrera hernandez': 'diego',
    'diego herrera': 'diego',
    'estefani': 'estefani',
    'dominguez lira estefani michelle': 'estefani',
    'carlos': 'carlos',
    'carlos emiliano': 'carlos',
    'ramon': 'ramon',
    'ramon medina': 'ramon',
    'miguel angel': 'miguel angel',
    'miguel': 'miguel angel',
  };
  
  // Buscar si hay un alias directo
  if (nameAliases[normalized]) {
    return nameAliases[normalized];
  }
  
  // Buscar coincidencia parcial
  for (const [alias, canonical] of Object.entries(nameAliases)) {
    if (normalized.includes(alias) || alias.includes(normalized)) {
      return canonical;
    }
  }
  
  return normalized;
};

export const countFelicitaciones = (sprint?: number): Map<string, number> => {
  const counts = new Map<string, number>();
  const displayNames = new Map<string, string>(); // Para guardar la versiÃ³n capitalizada
  const filtered = sprint !== undefined 
    ? felicitaciones.filter(f => f.sprint === sprint) 
    : felicitaciones;
  
  filtered.forEach(f => {
    // Ignorar felicitaciones genÃ©ricas como "Todos" o "Todo el equipo"
    if (f.to.toLowerCase().includes('todos') || f.to.toLowerCase().includes('todo el equipo')) {
      return;
    }
    
    const key = normalizeStudentName(f.to);
    counts.set(key, (counts.get(key) || 0) + 1);
    
    // Guardar una versiÃ³n capitalizada del nombre
    if (!displayNames.has(key)) {
      displayNames.set(key, f.to);
    }
  });
  
  // Retornar con nombres capitalizados
  const result = new Map<string, number>();
  counts.forEach((count, key) => {
    const displayName = displayNames.get(key) || key;
    result.set(displayName, count);
  });
  
  return result;
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

// ========================================
// RECOMENDACIONES POR EQUIPO
// Basadas en anÃ¡lisis de las respuestas
// ========================================
export interface TeamRecommendation {
  teamId: number;
  sprint: number;
  strengths: string[];
  areasToImprove: string[];
  recommendations: string[];
  blockersSummary: string[];
}

export const teamRecommendations: TeamRecommendation[] = [
  {
    teamId: 1,
    sprint: 1,
    strengths: [
      "Excelente comunicaciÃ³n y organizaciÃ³n del equipo",
      "Proactividad en compartir materiales y documentaciÃ³n",
      "Buena validaciÃ³n con usuarios finales (profesores)",
    ],
    areasToImprove: [
      "Conocimientos tÃ©cnicos en Git/GitHub",
      "Manejo de bases de datos (PostgreSQL, MongoDB)",
      "ComunicaciÃ³n en lÃ­nea (mensajes, documentos)",
    ],
    recommendations: [
      "Implementar sesiones de pair programming para Git/GitHub",
      "Crear un repositorio de ideas y sistema de recompensas internas",
      "Establecer canales de comunicaciÃ³n asÃ­ncrona mÃ¡s efectivos",
    ],
    blockersSummary: [
      "Bloqueos mentales por proyectos de gran magnitud",
      "Manejo del estrÃ©s y tiempos",
    ],
  },
  {
    teamId: 2,
    sprint: 1,
    strengths: [
      "Buenas ideas iniciales para el proyecto",
      "Un integrante reconocido por 3 compaÃ±eros - aporte valioso al equipo",
      "Creatividad en propuestas de diseÃ±o",
      "Aportes para ampliar el mercado del sitio web",
    ],
    areasToImprove: [
      "ComunicaciÃ³n entre integrantes - CRÃTICO (mencionado por todos)",
      "Conocimiento de APIs, endpoints y bases de datos",
      "Habilidades blandas y trabajo en equipo",
      "PercepciÃ³n de participaciÃ³n desigual",
    ],
    recommendations: [
      "URGENTE: Establecer reuniones obligatorias semanales fuera del laboratorio",
      "Crear un canal de comunicaciÃ³n activo (WhatsApp/Discord) para coordinaciÃ³n diaria",
      "Definir roles claros y responsabilidades especÃ­ficas para cada miembro",
      "Realizar sesiones de capacitaciÃ³n en APIs REST y bases de datos",
      "Abordar conflicto de percepciones entre integrantes sobre participaciÃ³n",
      "Establecer mÃ©tricas claras de contribuciÃ³n para evitar malentendidos",
    ],
    blockersSummary: [
      "Solo se reÃºnen en el laboratorio - sin comunicaciÃ³n fuera de clase",
      "PercepciÃ³n encontrada sobre participaciÃ³n del equipo",
      "Desconocimiento de temas tÃ©cnicos (APIs, BD)",
      "Profesor no agregado al board (agregar: diegoromemora27@gmail.com)",
      "Solo 2 integrantes agregados en GitHub - faltan 2",
    ],
  },
  {
    teamId: 3,
    sprint: 1,
    strengths: [
      "LÃ­der muy proactivo y organizado",
      "Buena documentaciÃ³n y uso de herramientas (Notion, Postman)",
      "Claridad en la definiciÃ³n de requerimientos",
    ],
    areasToImprove: [
      "Asistencia y participaciÃ³n del equipo completo",
      "Conceptos de Bases de Datos y Estructuras de Datos",
      "ComunicaciÃ³n activa de todos los integrantes",
    ],
    recommendations: [
      "Establecer compromisos de asistencia con el equipo",
      "Distribuir tareas de forma que todos participen activamente",
      "Organizar sesiones de repaso de conceptos tÃ©cnicos",
    ],
    blockersSummary: [
      "Inasistencia de integrantes",
      "Problemas externos (electricidad)",
    ],
  },
  {
    teamId: 4,
    sprint: 1,
    strengths: [
      "Buen trabajo en equipo usando herramientas colaborativas",
      "Iniciativa en proponer ideas y herramientas",
      "Uso efectivo de Google Docs para trabajo simultÃ¡neo",
    ],
    areasToImprove: [
      "Definir mejor roles (Scrum Master)",
      "Conocimientos de backend y Git",
      "ComunicaciÃ³n verbal mÃ¡s activa",
    ],
    recommendations: [
      "Designar un Scrum Master oficial rotativo",
      "Mejorar la comunicaciÃ³n y hablar mÃ¡s en las reuniones",
      "Continuar usando herramientas colaborativas",
    ],
    blockersSummary: [
      "Herramientas nuevas (Git, ClickUp)",
      "SaturaciÃ³n escolar",
    ],
  },
  {
    teamId: 5,
    sprint: 1,
    strengths: [
      "Excelente calidad en los entregables",
      "Buena organizaciÃ³n con Jira",
      "DocumentaciÃ³n completa del proyecto (PDF, README)",
      "ConexiÃ³n exitosa del backend",
      "Apoyo mutuo y reconocimiento entre integrantes",
    ],
    areasToImprove: [
      "Conocimiento de Git/GitHub para todo el equipo",
      "ComprensiÃ³n de terminologÃ­a tÃ©cnica (backend/frontend)",
      "ComunicaciÃ³n en dÃ­as sin clases presenciales",
      "PlanificaciÃ³n anticipada del prÃ³ximo sprint",
    ],
    recommendations: [
      "Establecer reuniones de seguimiento en dÃ­as sin clases",
      "Crear sesiones de capacitaciÃ³n en Git/GitHub (integrante con experiencia puede enseÃ±ar)",
      "Elaborar un glosario de terminologÃ­a tÃ©cnica del proyecto",
      "Definir tareas del siguiente sprint antes de terminar el actual",
      "Clarificar entregables con el profesor al inicio del sprint",
    ],
    blockersSummary: [
      "ConfusiÃ³n sobre quÃ© era lo que habÃ­a que entregar",
      "Muchas terminologÃ­as tÃ©cnicas nuevas",
    ],
  },
  {
    teamId: 6,
    sprint: 1,
    strengths: [
      "Buen desarrollo de frontend y backend (trabajo complementario)",
      "Seguimiento de tiempos y recordatorios efectivos",
      "DelimitaciÃ³n efectiva de alcances mediante llamadas",
      "Buena colaboraciÃ³n y reconocimiento mutuo entre integrantes",
      "Trabajo bien organizado segÃºn los integrantes",
    ],
    areasToImprove: [
      "Conocimiento de herramientas especÃ­ficas",
      "Desarrollo backend y JavaScript",
      "Un integrante no respondiÃ³ la encuesta",
      "Disponibilidad para reuniones en lÃ­nea",
    ],
    recommendations: [
      "Crear mÃ¡s espacios de trabajo en paralelo",
      "Enfocarse en definir entidades para la base de datos",
      "CapacitaciÃ³n en JavaScript para desarrollo futuro",
      "Involucrar a todos los integrantes activamente en el siguiente sprint",
      "Flexibilizar horarios de reuniones para todos los integrantes",
    ],
    blockersSummary: [
      "Falta de conocimiento de ciertas herramientas",
      "Razones personales impidieron asistencia a reuniones",
      "Un integrante no respondiÃ³ la encuesta",
    ],
  },
  {
    teamId: 7,
    sprint: 1,
    strengths: [
      "Excelente organizaciÃ³n con JIRA",
      "Equipo grande pero bien coordinado",
      "Liderazgo efectivo del equipo",
      "Buena unificaciÃ³n de prompts y visiÃ³n del proyecto",
      "Alta proactividad de todos los miembros",
    ],
    areasToImprove: [
      "DivisiÃ³n de tareas al inicio del sprint",
      "Conocimientos de backend y APIs",
      "Algunos miembros llegaron tarde al equipo",
    ],
    recommendations: [
      "Implementar reuniones diarias de 15 minutos (Daily Standup)",
      "Declarar tareas desde el dÃ­a 1 del sprint",
      "Continuar con el modelo de liderazgo actual",
      "CapacitaciÃ³n en backend para todo el equipo",
    ],
    blockersSummary: [
      "No conocerse previamente",
      "Falta de instrucciones claras al inicio",
    ],
  },
  {
    teamId: 8,
    sprint: 1,
    strengths: [
      "Un integrante reconocido por 3 compaÃ±eros - liderazgo valorado",
      "Excelente colaboraciÃ³n del equipo (todos respondieron)",
      "Buena documentaciÃ³n y prompts originales",
      "Trabajo en diseÃ±o de IA y simulador de UI",
      "El lÃ­der busca involucrar a todos sin dejar a nadie atrÃ¡s",
    ],
    areasToImprove: [
      "Manejo de endpoints y backend",
      "FamiliarizaciÃ³n con nuevas plataformas",
      "GestiÃ³n del tiempo personal (otras materias y servicio social)",
    ],
    recommendations: [
      "Establecer reuniones rutinarias de trabajo",
      "Dividir tareas grandes en mÃ¡s pequeÃ±as",
      "CapacitaciÃ³n en endpoints y backend para todo el equipo",
      "Mejorar comunicaciÃ³n y conocimiento tÃ©cnico",
    ],
    blockersSummary: [
      "Tiempo limitado por otras materias y servicio social",
      "Dificultad con desarrollo de endpoints",
      "AdaptaciÃ³n a nuevas plataformas",
    ],
  },
  {
    teamId: 9,
    sprint: 1,
    strengths: [
      "Buen trabajo en documentaciÃ³n de requerimientos",
      "Prompt de UI y pruebas en Postman completadas",
      "Reconocimiento mutuo entre los dos integrantes activos",
    ],
    areasToImprove: [
      "ComunicaciÃ³n y forma de repartir el trabajo",
      "Conocimientos bÃ¡sicos de desarrollo de sistemas",
      "FamiliarizaciÃ³n con tÃ©rminos tÃ©cnicos",
      "ParticipaciÃ³n: solo dos personas respondieron",
    ],
    recommendations: [
      "Mejorar la comunicaciÃ³n entre integrantes",
      "Definir mejor la distribuciÃ³n de tareas",
      "Sesiones de capacitaciÃ³n en conceptos bÃ¡sicos de desarrollo",
      "Verificar si hay mÃ¡s integrantes y hacer seguimiento",
      "Enfocarse en backend y APIs para el siguiente sprint",
    ],
    blockersSummary: [
      "Desconocimiento del desarrollo del sistema",
      "Falta de familiaridad con tÃ©rminos tÃ©cnicos",
      "Solo dos personas trabajando activamente",
    ],
  },
];

export const getTeamRecommendations = (teamId: number, sprint?: number): TeamRecommendation | undefined => {
  return teamRecommendations.find(r => 
    r.teamId === teamId && (sprint === undefined || r.sprint === sprint)
  );
};

// FunciÃ³n para obtener el equipo de un estudiante reconocido
export const findStudentTeam = (studentName: string): Team | undefined => {
  const normalized = studentName.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return teams.find(team => 
    team.members.some(member => {
      const memberNormalized = member.name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const firstName = memberNormalized.split(' ')[0];
      const lastName = memberNormalized.split(' ').slice(-1)[0];
      
      return memberNormalized.includes(normalized) || 
        normalized.includes(firstName) ||
        normalized.includes(lastName) ||
        firstName === normalized;
    })
  );
};
