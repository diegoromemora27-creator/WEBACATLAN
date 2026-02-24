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
      { name: "Villeda López Saúl", email: "424079246@pcpuma.acatlan.unam.mx" },
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
      { name: "StudyLink", email: "321339968@pcpuma.acatlan.unam.mx" },
      { name: "Del Angel Santiago Monserrat Guadalupe", email: "318000787@pcpuma.acatlan.unam.mx" },
      { name: "Dominguez Lira Estefani Michelle (Sin respuesta)" },
      { name: "Ruiz García Emiliano (Sin respuesta)" },
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
    id: 5,
    name: "Equipo 5",
    projectName: "AcaShop",
    members: [
      { name: "Alitzel Sophia Camacho Flores", email: "321238940@pcpuma.acatlan.unam.mx" },
      { name: "Cristina Vianeth Saiz Perez", email: "317152522@pcpuma.acatlan.unam.mx" },
    ],
    githubUrl: "https://github.com/AcaShop-Acatlan",
    boardUrl: "https://cristinavianethsaizperez.atlassian.net/jira/software/projects/SCRUM/boards/1",
    boardTool: "Jira",
  },
  {
    id: 6,
    name: "Equipo 6",
    members: [
      { name: "Escutia Pascacio Eduardo Emiliano", email: "319035148@pcpuma.acatlan.unam.mx" },
      { name: "González Sánchez Raúl Alejandro", email: "321265302@pcpuma.acatlan.unam.mx" },
      { name: "Moctezuma Isidro Michelle (Sin respuesta)" },
    ],
    githubUrl: "https://github.com",
    boardUrl: "https://readdy.ai",
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
      { name: "Ríos Barrera Arantza Ilian", email: "321103097@pcpuma.acatlan.unam.mx" },
    ],
    githubUrl: "https://github.com/317110375/Equipo9-",
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
    improvementProposals: "RepositorFio de ideas, sistema de recompensas, mejorar manejo de Git/GitHub.",
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
    tasksCompleted: "La idea del proyecto, la pensamos mi compañero Samuel y yo, él se las compartió al resto.",
    blockers: "Falta de comunicación que puede afectar la productividad.",
    areasToImprove: "Comunicación entre integrantes.",
    nextSprintFocus: "Ya se verá, dependiendo cómo se desarrolle la semana.",
    improvementProposals: "Comunicación, ya que solo nos reunimos en lab.",
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
    nextSprintFocus: "Definición de la base de datos, definición del tipo de base de datos a ocupar.",
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
    areasToImprove: "Falta de comunicación con mi equipo.",
    nextSprintFocus: "Todo lo que tenga que ver con diseño.",
    improvementProposals: "Que mi equipo sí quiera aportar al trabajo.",
  },
  {
    memberId: "e2-4",
    memberName: "Villeda López Saúl",
    teamId: 2,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Bueno",
    quality: "Bueno",
    objectivesCompleted: "Bueno",
    selfEvaluation: 2,
    tasksCompleted: "Aportes para ampliar el mercado de nuestro sitio web.",
    blockers: "Falta de comunicación y desconocimiento de algunos temas.",
    areasToImprove: "Falta de conocimientos en bases de datos y mejorar habilidades blandas.",
    nextSprintFocus: "Aún no las defino.",
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
    tasksCompleted: "Pdf del Readdy, organización de github (readme e inicio de frontend), organización del equipo.",
    blockers: "No entender del todo que era lo que había por entregar.",
    areasToImprove: "Aprender y enseñar a mis compañeras github.",
    nextSprintFocus: "Implementación técnica.",
    improvementProposals: "Comunicación entre todas las integrantes los días que no hay clases sobre el progreso.",
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
    tasksCompleted: "Realice la organización en Jira así como el escrito de documentación de iniciación del proyecto así como la conexión del backend.",
    blockers: "Se me complican mucho entender todo el proceso de backend y frontend, son muchas terminologías y estoy revuelta.",
    areasToImprove: "Falta de conocimiento de Git.",
    nextSprintFocus: "Aún no nos hemos organizado entre el equipo en el siguiente Sprint.",
    improvementProposals: "Comunicación.",
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
    improvementProposals: "Más espacios de trabajo en paralelo.",
  },
  {
    memberId: "e6-2",
    memberName: "González Sánchez Raúl Alejandro",
    teamId: 6,
    sprint: 1,
    productivity: "Bueno",
    collaboration: "Excelente",
    quality: "Bueno",
    objectivesCompleted: "Excelente",
    selfEvaluation: 4,
    tasksCompleted: "Creación del backend y pruebas en Postman.",
    blockers: "Por razones personales no pudo conectarse a la reunión en línea del equipo.",
    areasToImprove: "Aprender a usar las distintas páginas/herramientas.",
    nextSprintFocus: "Apoyo en las fases avanzadas de lo que se pida.",
    improvementProposals: "El equipo trabajó muy bien de la forma en que lo hizo.",
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
    tasksCompleted: "Checar lo del Backend, organizar la reunión para finalizar el trabajo.",
    blockers: "Adaptación a mi horario del servicio social que hago actualmente, y otras actividades.",
    areasToImprove: "Hacer las cosas un poco antes.",
    nextSprintFocus: "Desenvolverme en la programación en general.",
    improvementProposals: "Repartir mejor las tareas y establecer momentos de reunión para realizar el trabajo de manera rutinaria.",
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
    areasToImprove: "Más conocimientos de cómo manejar las diferentes plataformas.",
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
    tasksCompleted: "Apoye en la documentación y en el prompt original para todo el desarrollo.",
    blockers: "Tiempo limitado por otras materias y responsabilidades.",
    areasToImprove: "Mejor gestión de tiempo y dedicarle más tiempo a entender cada entorno.",
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
    tasksCompleted: "Realización de gran parte de los requerimientos, formato y desglose del documento.",
    blockers: "Desconocimiento del desarrollo del sistema, conceptos y herramientas.",
    areasToImprove: "Conocimientos básicos de desarrollo de sistemas.",
    nextSprintFocus: "APIs.",
    improvementProposals: "Mejor aportación, solo dos personas están trabajando.",
  },
  {
    memberId: "e9-2",
    memberName: "Ríos Barrera Arantza Ilian",
    teamId: 9,
    sprint: 1,
    productivity: "Aceptable",
    collaboration: "Bajo",
    quality: "Bajo",
    objectivesCompleted: "Bueno",
    selfEvaluation: 4,
    tasksCompleted: "Prompt de UI y pruebas en Postman.",
    blockers: "Falta de familiaridad con algunos términos.",
    areasToImprove: "Tener los conceptos claros y mejorar conocimientos.",
    nextSprintFocus: "Backend.",
    improvementProposals: "Mejorar la comunicación y la forma de repartir el trabajo.",
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
  { from: "StudyLink", fromTeam: 3, to: "Estefani", sprint: 1 },
  { from: "Del Angel Santiago Monserrat Guadalupe", fromTeam: 3, to: "Dominguez Lira Estefani Michelle", sprint: 1 },
  { from: "Del Angel Santiago Monserrat Guadalupe", fromTeam: 3, to: "Ruiz García Emiliano", sprint: 1 },
  { from: "Hernández Peña Angel Adrian", fromTeam: 1, to: "Ramón Medina", sprint: 1 },
  { from: "Gil De Gaona Jazmín", fromTeam: 1, to: "Ángel", sprint: 1 },
  { from: "Medina Hernández Ramón", fromTeam: 1, to: "Angel", sprint: 1 },
  { from: "Velázquez Martínez Antonio", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Herrera Franco Samuel", fromTeam: 2, to: "Carlos", sprint: 1 },
  { from: "Villeda López Saúl", fromTeam: 2, to: "Carlos", sprint: 1 },
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
  { from: "Ríos Barrera Arantza Ilian", fromTeam: 9, to: "Yael Cortes", sprint: 1 },
  { from: "Escutia Pascacio Eduardo Emiliano", fromTeam: 6, to: "Michelle", sprint: 1 },
  { from: "González Sánchez Raúl Alejandro", fromTeam: 6, to: "Moctezuma Isidro Michelle", sprint: 1 },
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

// Normaliza nombres para agrupar variaciones (Ángel/Angel, Arturo/Arthur, Diego/Diego Herrera, etc)
const normalizeStudentName = (name: string): string => {
  let normalized = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remover acentos
  
  // Mapeo de nombres equivalentes
  const nameAliases: Record<string, string> = {
    'angel': 'angel',
    'ángel': 'angel',
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
  const displayNames = new Map<string, string>(); // Para guardar la versión capitalizada
  const filtered = sprint !== undefined 
    ? felicitaciones.filter(f => f.sprint === sprint) 
    : felicitaciones;
  
  filtered.forEach(f => {
    // Ignorar felicitaciones genéricas como "Todos" o "Todo el equipo"
    if (f.to.toLowerCase().includes('todos') || f.to.toLowerCase().includes('todo el equipo')) {
      return;
    }
    
    const key = normalizeStudentName(f.to);
    counts.set(key, (counts.get(key) || 0) + 1);
    
    // Guardar una versión capitalizada del nombre
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
// Basadas en análisis de las respuestas
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
      "Excelente comunicación y organización del equipo",
      "Proactividad en compartir materiales y documentación",
      "Buena validación con usuarios finales (profesores)",
    ],
    areasToImprove: [
      "Conocimientos técnicos en Git/GitHub",
      "Manejo de bases de datos (PostgreSQL, MongoDB)",
      "Comunicación en línea (mensajes, documentos)",
    ],
    recommendations: [
      "Implementar sesiones de pair programming para Git/GitHub",
      "Crear un repositorio de ideas y sistema de recompensas internas",
      "Establecer canales de comunicación asíncrona más efectivos",
    ],
    blockersSummary: [
      "Bloqueos mentales por proyectos de gran magnitud",
      "Manejo del estrés y tiempos",
    ],
  },
  {
    teamId: 2,
    sprint: 1,
    strengths: [
      "Buenas ideas iniciales para el proyecto",
      "Un integrante reconocido por 3 compañeros - aporte valioso al equipo",
      "Creatividad en propuestas de diseño",
      "Aportes para ampliar el mercado del sitio web",
    ],
    areasToImprove: [
      "Comunicación entre integrantes - CRÍTICO (mencionado por todos)",
      "Conocimiento de APIs, endpoints y bases de datos",
      "Habilidades blandas y trabajo en equipo",
      "Percepción de participación desigual",
    ],
    recommendations: [
      "URGENTE: Establecer reuniones obligatorias semanales fuera del laboratorio",
      "Crear un canal de comunicación activo (WhatsApp/Discord) para coordinación diaria",
      "Definir roles claros y responsabilidades específicas para cada miembro",
      "Realizar sesiones de capacitación en APIs REST y bases de datos",
      "Abordar conflicto de percepciones entre integrantes sobre participación",
      "Establecer métricas claras de contribución para evitar malentendidos",
    ],
    blockersSummary: [
      "Solo se reúnen en el laboratorio - sin comunicación fuera de clase",
      "Percepción encontrada sobre participación del equipo",
      "Desconocimiento de temas técnicos (APIs, BD)",
      "Profesor no agregado al board (agregar: diegoromemora27@gmail.com)",
      "Solo 2 integrantes agregados en GitHub - faltan 2",
    ],
  },
  {
    teamId: 3,
    sprint: 1,
    strengths: [
      "Líder muy proactivo y organizado",
      "Buena documentación y uso de herramientas (Notion, Postman)",
      "Claridad en la definición de requerimientos",
    ],
    areasToImprove: [
      "Asistencia y participación del equipo completo",
      "Conceptos de Bases de Datos y Estructuras de Datos",
      "Comunicación activa de todos los integrantes",
    ],
    recommendations: [
      "Establecer compromisos de asistencia con el equipo",
      "Distribuir tareas de forma que todos participen activamente",
      "Organizar sesiones de repaso de conceptos técnicos",
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
      "Uso efectivo de Google Docs para trabajo simultáneo",
    ],
    areasToImprove: [
      "Definir mejor roles (Scrum Master)",
      "Conocimientos de backend y Git",
      "Comunicación verbal más activa",
    ],
    recommendations: [
      "Designar un Scrum Master oficial rotativo",
      "Mejorar la comunicación y hablar más en las reuniones",
      "Continuar usando herramientas colaborativas",
    ],
    blockersSummary: [
      "Herramientas nuevas (Git, ClickUp)",
      "Saturación escolar",
    ],
  },
  {
    teamId: 5,
    sprint: 1,
    strengths: [
      "Excelente calidad en los entregables",
      "Buena organización con Jira",
      "Documentación completa del proyecto (PDF, README)",
      "Conexión exitosa del backend",
      "Apoyo mutuo y reconocimiento entre integrantes",
    ],
    areasToImprove: [
      "Conocimiento de Git/GitHub para todo el equipo",
      "Comprensión de terminología técnica (backend/frontend)",
      "Comunicación en días sin clases presenciales",
      "Planificación anticipada del próximo sprint",
    ],
    recommendations: [
      "Establecer reuniones de seguimiento en días sin clases",
      "Crear sesiones de capacitación en Git/GitHub (integrante con experiencia puede enseñar)",
      "Elaborar un glosario de terminología técnica del proyecto",
      "Definir tareas del siguiente sprint antes de terminar el actual",
      "Clarificar entregables con el profesor al inicio del sprint",
    ],
    blockersSummary: [
      "Confusión sobre qué era lo que había que entregar",
      "Muchas terminologías técnicas nuevas",
    ],
  },
  {
    teamId: 6,
    sprint: 1,
    strengths: [
      "Buen desarrollo de frontend y backend (trabajo complementario)",
      "Seguimiento de tiempos y recordatorios efectivos",
      "Delimitación efectiva de alcances mediante llamadas",
      "Buena colaboración y reconocimiento mutuo entre integrantes",
      "Trabajo bien organizado según los integrantes",
    ],
    areasToImprove: [
      "Conocimiento de herramientas específicas",
      "Desarrollo backend y JavaScript",
      "Un integrante no respondió la encuesta",
      "Disponibilidad para reuniones en línea",
    ],
    recommendations: [
      "Crear más espacios de trabajo en paralelo",
      "Enfocarse en definir entidades para la base de datos",
      "Capacitación en JavaScript para desarrollo futuro",
      "Involucrar a todos los integrantes activamente en el siguiente sprint",
      "Flexibilizar horarios de reuniones para todos los integrantes",
    ],
    blockersSummary: [
      "Falta de conocimiento de ciertas herramientas",
      "Razones personales impidieron asistencia a reuniones",
      "Un integrante no respondió la encuesta",
    ],
  },
  {
    teamId: 7,
    sprint: 1,
    strengths: [
      "Excelente organización con JIRA",
      "Equipo grande pero bien coordinado",
      "Liderazgo efectivo del equipo",
      "Buena unificación de prompts y visión del proyecto",
      "Alta proactividad de todos los miembros",
    ],
    areasToImprove: [
      "División de tareas al inicio del sprint",
      "Conocimientos de backend y APIs",
      "Algunos miembros llegaron tarde al equipo",
    ],
    recommendations: [
      "Implementar reuniones diarias de 15 minutos (Daily Standup)",
      "Declarar tareas desde el día 1 del sprint",
      "Continuar con el modelo de liderazgo actual",
      "Capacitación en backend para todo el equipo",
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
      "Un integrante reconocido por 3 compañeros - liderazgo valorado",
      "Excelente colaboración del equipo (todos respondieron)",
      "Buena documentación y prompts originales",
      "Trabajo en diseño de IA y simulador de UI",
      "El líder busca involucrar a todos sin dejar a nadie atrás",
    ],
    areasToImprove: [
      "Manejo de endpoints y backend",
      "Familiarización con nuevas plataformas",
      "Gestión del tiempo personal (otras materias y servicio social)",
    ],
    recommendations: [
      "Establecer reuniones rutinarias de trabajo",
      "Dividir tareas grandes en más pequeñas",
      "Capacitación en endpoints y backend para todo el equipo",
      "Mejorar comunicación y conocimiento técnico",
    ],
    blockersSummary: [
      "Tiempo limitado por otras materias y servicio social",
      "Dificultad con desarrollo de endpoints",
      "Adaptación a nuevas plataformas",
    ],
  },
  {
    teamId: 9,
    sprint: 1,
    strengths: [
      "Buen trabajo en documentación de requerimientos",
      "Prompt de UI y pruebas en Postman completadas",
      "Reconocimiento mutuo entre los dos integrantes activos",
    ],
    areasToImprove: [
      "Comunicación y forma de repartir el trabajo",
      "Conocimientos básicos de desarrollo de sistemas",
      "Familiarización con términos técnicos",
      "Participación: solo dos personas respondieron",
    ],
    recommendations: [
      "Mejorar la comunicación entre integrantes",
      "Definir mejor la distribución de tareas",
      "Sesiones de capacitación en conceptos básicos de desarrollo",
      "Verificar si hay más integrantes y hacer seguimiento",
      "Enfocarse en backend y APIs para el siguiente sprint",
    ],
    blockersSummary: [
      "Desconocimiento del desarrollo del sistema",
      "Falta de familiaridad con términos técnicos",
      "Solo dos personas trabajando activamente",
    ],
  },
];

export const getTeamRecommendations = (teamId: number, sprint?: number): TeamRecommendation | undefined => {
  return teamRecommendations.find(r => 
    r.teamId === teamId && (sprint === undefined || r.sprint === sprint)
  );
};

// Función para obtener el equipo de un estudiante reconocido
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
