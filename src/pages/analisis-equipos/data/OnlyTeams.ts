/**
 * LISTA SIMPLIFICADA DE EQUIPOS - Sprint 1
 * Datos extraÃ­dos de las autoevaluaciones de desempeÃ±o del equipo Scrum
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
 * 57 respuestas totales de autoevaluaciÃ³n
 */
export const onlyTeams: SimpleTeam[] = [
  // ========== EQUIPO 1 - DevStudy ==========
  {
    id: 1,
    name: "Equipo 1",
    projectName: "DevStudy",
    members: [
      {
        name: "HernÃ¡ndez PeÃ±a Ãngel AdriÃ¡n",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Gil De Gaona JazmÃ­n",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Medina HernÃ¡ndez RamÃ³n",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Buenrostro Cruces SaraÃ­",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "PÃ©rez LÃ³pez Zaira Cecilia",
        email: "estudiante@ejemplo.com",
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
        name: "VelÃ¡zquez MartÃ­nez Antonio",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Herrera Franco Samuel",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Segura Loera Carlos Emiliano",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Villeda LÃ³pez SaÃºl",
        email: "estudiante@ejemplo.com",
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
        name: "PÃ©rez Mendoza EstefanÃ­",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Del Angel Santiago Monserrat Guadalupe",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Ruiz GarcÃ­a Emiliano",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Raygoza Islas JosÃ© Ãngel",
        email: "estudiante@ejemplo.com",
      },
    ],
    githubUrl: "https://github.com/RecursosMAC/FrontEnd-Project",
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
        name: "MartÃ­nez RodrÃ­guez Fernando",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Trinidad Potrero JosuÃ©",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Aguilar BuendÃ­a Bruno",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Mendoza HernÃ¡ndez Daniela Itzel",
        email: "estudiante@ejemplo.com",
      },
    ],
    githubUrl: "https://github.com/Null-Nexus/Frontend-Proyecto",
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
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Cristina Vianeth Saiz PÃ©rez",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "ChÃ¡vez GonzÃ¡lez Itzel",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Toledo MÃ©ndez Ximena",
        email: "estudiante@ejemplo.com",
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
        name: "GonzÃ¡lez SÃ¡nchez RaÃºl Alejandro",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Escutia Pascacio Eduardo Emiliano",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Libonatti Valdivia Sadrach Neftali",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Moctezuma Isidro Michelle",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "ElÃ­as GarcÃ­a Luis David",
        email: "estudiante@ejemplo.com",
      },
    ],
    githubUrl: "https://github.com/Angeles-de-MAC",
    boardUrl: "https://miro.com/welcomeonboard/N2FybWh0VndPTXEydzI1MTZvTDBGdzRES2ZkcFVWblpvbGw1eGw1dGlRS0dTMXZDUWVUUjN6UHV0UTRyWHJmcGhycnJqTDE2c0hQYWJnRC9FNy9vTWw0WWNMdE1wV21UdS94emdpamNQN0lrOXhZdFZMQjl6OTJHNGIyRFZPQml3VHhHVHd5UWtSM1BidUtUYmxycDRnPT0hdjE=?share_link_id=997238655474",
    boardTool: "Other",
  },

  // ========== EQUIPO 7 - AcadÃ©micos Web ==========
  {
    id: 7,
    name: "Equipo 7",
    projectName: "AcadÃ©micos Web",
    members: [
      {
        name: "HernÃ¡ndez GonzÃ¡lez Armando",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "RodrÃ­guez RodrÃ­guez Erick Tadeo",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "MÃ¡rquez Espinoza Alyn VerÃ³nica",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "HernÃ¡ndez MartÃ­nez Monserrat",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Moreno Vigueras Arturo Tadeo",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Cruz ChÃ¡vez Miguel Ãngel",
        email: "estudiante@ejemplo.com",
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
        name: "Herrera HernÃ¡ndez Diego",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Cervantes Vanesa SebastiÃ¡n",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "GonzÃ¡lez HernÃ¡ndez Leslie DanaÃ©",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "BÃ¡ez Villanueva Mauricio Omar",
        email: "estudiante@ejemplo.com",
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
    projectName: "Sistema de GestiÃ³n",
    members: [
      {
        name: "CortÃ©s CortÃ©s Bryan Yael",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "RÃ­os Barrera Arantza Ilian",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Romero VelÃ¡zquez Luis Fernando",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Valdovinos Sedano Daniela Ariday",
        email: "estudiante@ejemplo.com",
      },
    ],
    githubUrl: "https://github.com/EQUIPO9-DESARROLLOWEB/Front-end-proyecto",
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
        name: "VelÃ¡zquez GarcÃ­a Leonardo Daniel",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Rojas Uriostigue Rodrigo",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Luna MartÃ­nez Escobar Guillermo",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "MartÃ­nez HernÃ¡ndez Ricardo RamÃ³n",
        email: "estudiante@ejemplo.com",
      },
      {
        name: "Ãlvarez Casas JesÃºs",
        email: "estudiante@ejemplo.com",
      },
    ],
    githubUrl: "https://github.com/Equipo10MAC",
    boardUrl:
      "https://trello.com/invite/b/S6VcFXq9/ATTIc9c4a486d0b073b64170a2a61dba3e893A9F2D6A/proyecto",
    boardTool: "Trello",
  },
];

/**
 * FunciÃ³n auxiliar para obtener un equipo por ID
 */
export function getTeamById(teamId: number): SimpleTeam | undefined {
  return onlyTeams.find(team => team.id === teamId);
}

/**
 * FunciÃ³n auxiliar para obtener todos los equipos
 */
export function getAllTeams(): SimpleTeam[] {
  return onlyTeams;
}

/**
 * FunciÃ³n auxiliar para contar miembros totales
 */
export function getTotalMembers(): number {
  return onlyTeams.reduce((sum, team) => sum + team.members.length, 0);
}
