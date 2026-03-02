/**
 * LISTA SIMPLIFICADA DE EQUIPOS - Sprint 1
 * Datos extraídos de las autoevaluaciones de desempeño del equipo Scrum
 */

export interface TeamMember {
  name: string;
  email?: string;
}

export interface SimpleTeam {
  id: number;
  name: string;
  projectName?: string;
  members: TeamMember[];
  githubUrl: string;
  boardUrl: string;
  boardTool: 'Jira' | 'Notion' | 'ClickUp' | 'Trello' | 'Google Docs' | 'Readdy' | 'Other';
}

/**
 * EQUIPOS SPRINT 1
 * 57 respuestas totales de autoevaluación
 */
export const onlyTeams: SimpleTeam[] = [
  // ========== EQUIPO 1 - DevStudy ==========
  {
    id: 1,
    name: "Equipo 1",
    projectName: "DevStudy",
    members: [
      {
        name: "Hernández Peña Ángel Adrián",
        email: "ahangel2005@gmail.com",
      },
      {
        name: "Gil De Gaona Jazmín",
        email: "giljazmin2005@gmail.com",
      },
      {
        name: "Medina Hernández Ramón",
        email: "321283108@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Buenrostro Cruces Saraí",
        email: "saraicruces158@gmail.com",
      },
      {
        name: "Pérez López Zaira Cecilia",
        email: "318331674@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/DevStudyJS",
    boardUrl: "https://www.notion.so/DevStudy-304ab752f7c481e78981d2368a11b709?source=copy_link",
    boardTool: "Notion",
  },

  // ========== EQUIPO 2 - 4 de Asada ==========
  {
    id: 2,
    name: "Equipo 2",
    projectName: "4 de Asada",
    members: [
      {
        name: "Velázquez Martínez Antonio",
        email: "424038247@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Herrera Franco Samuel",
        email: "samuelherrera11fh1@gmail.com",
      },
      {
        name: "Segura Loera Carlos Emiliano",
        email: "carlos4475segura@gmail.com",
      },
      {
        name: "Villeda López Saúl",
        email: "424079246@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/4-de-Asada",
    boardUrl: "https://trello.com/invite/b/698b39d51dd5ae0e02affc48/ATTI31b3053c0a6ac18a6bef929b9c34e0d059E15BAF/4-de",
    boardTool: "Trello",
  },

  // ========== EQUIPO 3 - StudyLink ==========
  {
    id: 3,
    name: "Equipo 3",
    projectName: "StudyLink",
    members: [
      {
        name: "Pérez Mendoza Estefaní",
        email: "321339968@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Del Angel Santiago Monserrat Guadalupe",
        email: "318000787@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Ruiz García Emiliano",
        email: "424126694@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Raygoza Islas José Ángel",
        email: "421103605@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/RecursosMAC/Recursos",
    boardUrl:
      "https://www.notion.so/StudyLink-30dc408c7286802691b1d11e3702c9de?source=copy_link",
    boardTool: "Notion",
  },

  // ========== EQUIPO 4 - Null Nexus ==========
  {
    id: 4,
    name: "Equipo 4",
    projectName: "Null Nexus",
    members: [
      {
        name: "Martínez Rodríguez Fernando",
        email: "424138251@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Trinidad Potrero Josué",
        email: "423073210@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Aguilar Buendía Bruno",
        email: "brunoaguilar.2610@gmail.com",
      },
      {
        name: "Mendoza Hernández Daniela Itzel",
        email: "318352378@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/Null-Nexus",
    boardUrl: "https://app.clickup.com/9017897580/v/s/90174290770",
    boardTool: "ClickUp",
  },

  // ========== EQUIPO 5 - AcaShop ==========
  {
    id: 5,
    name: "Equipo 5",
    projectName: "AcaShop",
    members: [
      {
        name: "Alitzel Sophia Camacho Flores",
        email: "321238940@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Cristina Vianeth Saiz Pérez",
        email: "317152522@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Chávez González Itzel",
        email: "321573577@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Toledo Méndez Ximena",
        email: "421114564@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/AcaShop-Acatlan",
    boardUrl:
      "https://cristinavianethsaizperez.atlassian.net/jira/software/projects/SCRUM/boards/1",
    boardTool: "Jira",
  },

  // ========== EQUIPO 6 - Angeles de MAC ==========
  {
    id: 6,
    name: "Equipo 6",
    projectName: "Angeles de MAC",
    members: [
      {
        name: "Escutia Pascacio Eduardo Emiliano",
        email: "319035148@pcpuma.acatlan.unam.mx",
      },
      {
        name: "González Sánchez Raúl Alejandro",
        email: "321265302@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Moctezuma Isidro Michelle",
        email: "318690597@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Libonatti Valdivia Sadrach Neftali",
        email: "320020171@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/Angeles-de-MAC",
    boardUrl: "https://miro.com/welcomeonboard/N2FybWh0VndPTXEydzI1MTZvTDBGdzRES2ZkcFVWblpvbGw1eGw1dGlRS0dTMXZDUWVUUjN6UHV0UTRyWHJmcGhycnJqTDE2c0hQYWJnRC9FNy9vTWw0WWNMdE1wV21UdS94emdpamNQN0lrOXhZdFZMQjl6OTJHNGIyRFZPQml3VHhHVHd5UWtSM1BidUtUYmxycDRnPT0hdjE=?share_link_id=997238655474",
    boardTool: "Other",
  },

  // ========== EQUIPO 7 - Académicos Web ==========
  {
    id: 7,
    name: "Equipo 7",
    projectName: "Académicos Web",
    members: [
      {
        name: "Hernández González Armando",
        email: "317042735@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Rodríguez Rodríguez Erick Tadeo",
        email: "424073141@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Márquez Espinoza Alyn Verónica",
        email: "alynmarquezespinoza63@gmail.com",
      },
      {
        name: "Hernández Martínez Monserrat",
        email: "424119221@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Moreno Vigueras Arturo Tadeo",
        email: "424092250@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Cruz Chávez Miguel Ángel",
        email: "424022596@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/Academicos-Web",
    boardUrl:
      "https://academicosweb.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiN2JlOGNiZThiMjg1NGY1MGFlNGFmY2IwODc1ZWUyMjEiLCJwIjoiaiJ9",
    boardTool: "Jira",
  },

  // ========== EQUIPO 8 - ExtraWeb0rdinarios ==========
  {
    id: 8,
    name: "Equipo 8",
    projectName: "ExtraWeb0rdinarios",
    members: [
      {
        name: "Herrera Hernández Diego",
        email: "321331546@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Cervantes Vanesa Sebastián",
        email: "423129472@pcpuma.acatlan.unam.mx",
      },
      {
        name: "González Hernández Leslie Danaé",
        email: "424092281@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Báez Villanueva Mauricio Omar",
        email: "318181778@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/ExtraWeb0rdinarios",
    boardUrl:
      "https://diego0hh013.atlassian.net/jira/software/projects/SCRUM/boards/1?jql=&atlOrigin=eyJpIjoiZmZlNGU1MDdiYTI2NDRlMmI4MTNiMzEyNzZiYzYwNmYiLCJwIjoiaiJ9",
    boardTool: "Jira",
  },

  // ========== EQUIPO 9 ==========
  {
    id: 9,
    name: "Equipo 9",
    projectName: "Sistema de Gestión",
    members: [
      {
        name: "Cortés Cortés Bryan Yael",
        email: "317110375@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Ríos Barrera Arantza Ilian",
        email: "321103097@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Romero Velázquez Luis Fernando",
        email: "320584622@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Valdovinos Sedano Daniela Ariday",
        email: "424066376@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/317110375/Equipo9-",
    boardUrl:
      "https://docs.google.com/document/d/1eVdBiVaXQEN7dR-_-o9rjnTMMecKeFFMJqoCcMiTV68/edit?usp=sharing",
    boardTool: "Google Docs",
  },

  // ========== EQUIPO 10 ==========
  {
    id: 10,
    name: "Equipo 10",
    projectName: "Monitoreo",
    members: [
      {
        name: "Velázquez García Leonardo Daniel",
        email: "leonardoxvelazquezz@gmail.com",
      },
      {
        name: "Rojas Uriostigue Rodrigo",
        email: "uriostiguerodrigo@gmail.com",
      },
      {
        name: "Luna Martínez Escobar Guillermo",
        email: "guilumaesco@gmail.com",
      },
      {
        name: "Martínez Hernández Ricardo Ramón",
        email: "317162783@pcpuma.acatlan.unam.mx",
      },
      {
        name: "Álvarez Casas Jesús",
        email: "424032496@pcpuma.acatlan.unam.mx",
      },
    ],
    githubUrl: "https://github.com/Equipo10MAC",
    boardUrl:
      "https://trello.com/invite/b/S6VcFXq9/ATTIc9c4a486d0b073b64170a2a61dba3e893A9F2D6A/proyecto",
    boardTool: "Trello",
  },
];

/**
 * Función auxiliar para obtener un equipo por ID
 */
export function getTeamById(teamId: number): SimpleTeam | undefined {
  return onlyTeams.find(team => team.id === teamId);
}

/**
 * Función auxiliar para obtener todos los equipos
 */
export function getAllTeams(): SimpleTeam[] {
  return onlyTeams;
}

/**
 * Función auxiliar para contar miembros totales
 */
export function getTotalMembers(): number {
  return onlyTeams.reduce((sum, team) => sum + team.members.length, 0);
}
