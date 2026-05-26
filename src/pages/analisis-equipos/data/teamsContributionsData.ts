export interface IntegranteContribucion {
  usuario: string;
  rol: string;
  estado: string;
  contribuciones: number;
}

export interface TeamContribuciones {
  equipo: number;
  github_repo: string;
  integrantes: IntegranteContribucion[];
}

export const equiposContribuciones: TeamContribuciones[] = [
  {
    equipo: 1,
    github_repo: 'https://github.com/DevStudyJS',
    integrantes: [
      { usuario: 'SinR0str0', rol: 'Collaborator', estado: 'Approved', contribuciones: 9 },
      { usuario: 'JazGil', rol: 'Collaborator', estado: 'Approved', contribuciones: 5 },
      { usuario: 'RamonMedina04', rol: 'Collaborator', estado: 'Approved', contribuciones: 5 },
      { usuario: 'ZairaP-coder', rol: 'Collaborator', estado: 'Approved', contribuciones: 3 },
      { usuario: 'SaraiCruces', rol: 'Collaborator', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 2,
    github_repo: 'https://github.com/4-de-Asada',
    integrantes: [
      { usuario: 'SamuelHeFra', rol: 'Collaborator', estado: 'Approved', contribuciones: 8 },
      { usuario: 'DiegoMoctezuma', rol: 'Collaborator', estado: 'Approved', contribuciones: 6 },
      { usuario: 'Antonio4240', rol: 'Collaborator', estado: 'Approved', contribuciones: 4 },
      { usuario: 'CarLos4475', rol: 'Collaborator', estado: 'Approved', contribuciones: 4 },
      { usuario: 'sav1209', rol: 'Collaborator', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 3,
    github_repo: 'https://github.com/RecursosMAC/FrontEnd-Project',
    integrantes: [
      { usuario: 'EstefaniDL', rol: 'Contributor', estado: 'Approved', contribuciones: 8 },
      { usuario: 'Emiliano1502', rol: 'Contributor', estado: 'Approved', contribuciones: 7 },
      { usuario: 'MonserratSantiago8', rol: 'Contributor', estado: 'Approved', contribuciones: 3 },
      { usuario: 'Angel0017', rol: 'Contributor', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 4,
    github_repo: 'https://github.com/Null-Nexus/Frontend-Proyecto',
    integrantes: [
      { usuario: 'BrunoAG2610', rol: 'Collaborator', estado: 'Approved', contribuciones: 8 },
      { usuario: 'FernandoMR10', rol: 'Collaborator', estado: 'Approved', contribuciones: 7 },
      { usuario: 'JosueTP09', rol: 'Collaborator', estado: 'Approved', contribuciones: 6 },
      { usuario: 'danielamh1302', rol: 'Collaborator', estado: 'Approved', contribuciones: 3 },
    ],
  },
  {
    equipo: 5,
    github_repo: 'https://github.com/AcaShop-Acatlan',
    integrantes: [
      { usuario: 'aliiiiscf', rol: 'Collaborator', estado: 'Approved', contribuciones: 8 },
      { usuario: 'Itzcg', rol: 'Collaborator', estado: 'Approved', contribuciones: 7 },
      { usuario: 'vianethsaiz-wq', rol: 'Collaborator', estado: 'Approved', contribuciones: 8 },
    ],
  },
  {
    equipo: 6,
    github_repo: 'https://github.com/Angeles-de-MAC',
    integrantes: [
      { usuario: 'mxnlinesdev', rol: 'N/A', estado: 'Approved', contribuciones: 3 },
      { usuario: 'Pascua1Quac', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
      { usuario: 'MysticMichelle', rol: 'N/A', estado: 'Approved', contribuciones: 3 },
      { usuario: 'SadLib', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
      { usuario: '321265302-an', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 7,
    github_repo: 'https://github.com/Academicos-Web',
    integrantes: [
      { usuario: 'TheArtico05', rol: 'Contributor', estado: 'Approved', contribuciones: 6 },
      { usuario: 'EriTeo', rol: 'Contributor', estado: 'Approved', contribuciones: 5 },
      { usuario: 'miguelacch', rol: 'Contributor', estado: 'Approved', contribuciones: 6 },
      { usuario: 'Mouns-a', rol: 'Contributor', estado: 'Approved', contribuciones: 5 },
      { usuario: 'AlynMarquez', rol: 'Contributor', estado: 'Approved', contribuciones: 7 },
      { usuario: 'ArmandoHG22', rol: 'Contributor', estado: 'Approved', contribuciones: 4 },
    ],
  },
  {
    equipo: 8,
    github_repo: 'https://github.com/ExtraWeb0rdinarios',
    integrantes: [
      { usuario: 'Dieg0Her13ra', rol: 'Collaborator', estado: 'Approved', contribuciones: 8 },
      { usuario: 'mauriciobaezv', rol: 'Collaborator', estado: 'Approved', contribuciones: 7 },
      { usuario: 'Less-lie', rol: 'Collaborator', estado: 'Approved', contribuciones: 4 },
      { usuario: 'Vanesa-SC28', rol: 'Collaborator', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 9,
    github_repo: 'https://github.com/EQUIPO9-DESARROLLOWEB/Front-end-proyecto',
    integrantes: [
      { usuario: '317110375', rol: 'Contributor', estado: 'Approved', contribuciones: 3 },
      { usuario: 'Ariiiiii22', rol: 'Contributor', estado: 'Approved', contribuciones: 4 },
      { usuario: '320584622-glitch', rol: 'Contributor', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 10,
    github_repo: 'https://github.com/Equipo10MAC/FrontEndProject',
    integrantes: [
      { usuario: 'RojasUriostigue', rol: 'Contributor', estado: 'Approved', contribuciones: 3 },
      { usuario: 'RicardoMH', rol: 'Contributor', estado: 'Approved', contribuciones: 1 },
    ],
  },
];

export const getContribucionesTotales = (): number =>
  equiposContribuciones.reduce(
    (total, team) => total + team.integrantes.reduce((sum, member) => sum + member.contribuciones, 0),
    0
  );

export const getIntegrantesTotales = (): number =>
  equiposContribuciones.reduce((total, team) => total + team.integrantes.length, 0);
