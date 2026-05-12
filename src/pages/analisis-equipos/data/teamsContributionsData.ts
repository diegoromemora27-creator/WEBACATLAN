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
      { usuario: 'SinR0stro', rol: 'Collaborator', estado: 'Approved', contribuciones: 1 },
      { usuario: 'JazGil', rol: 'Collaborator', estado: 'Approved', contribuciones: 1 },
      { usuario: 'ZairaP-coder', rol: 'Collaborator', estado: 'Approved', contribuciones: 1 },
      { usuario: 'SaraiCruces', rol: 'Collaborator', estado: 'Approved Inicializa', contribuciones: 1 },
    ],
  },
  {
    equipo: 2,
    github_repo: 'https://github.com/4-de-Asada',
    integrantes: [
      { usuario: 'sav1209', rol: 'Collaborator', estado: 'Approved', contribuciones: 1 },
      { usuario: 'CarLos4479', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
      { usuario: 'Antonio4240', rol: 'N/A', estado: 'Review required', contribuciones: 1 },
    ],
  },
  {
    equipo: 3,
    github_repo: 'https://github.com/RecursosMAC',
    integrantes: [
      { usuario: 'Angel0017', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
      { usuario: 'Emiliano15', rol: 'N/A', estado: 'Approved', contribuciones: 3 },
      { usuario: 'MonserratSa', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
      { usuario: 'EstefaniDL', rol: 'N/A', estado: 'Review required', contribuciones: 1 },
    ],
  },
  {
    equipo: 4,
    github_repo: 'https://github.com/Null-Nexus',
    integrantes: [
      { usuario: 'BrunoAG2610', rol: 'N/A', estado: 'Approved', contribuciones: 5 },
      { usuario: 'FernandoM', rol: 'N/A', estado: 'Approved', contribuciones: 3 },
      { usuario: 'JosueTP09', rol: 'N/A', estado: 'Approved', contribuciones: 3 },
      { usuario: 'danielamh130', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 5,
    github_repo: 'https://github.com/AcaShop-Acatlan',
    integrantes: [
      { usuario: 'vianethsaiz-w', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
      { usuario: 'Itzog', rol: 'Member', estado: 'Approved', contribuciones: 1 },
      { usuario: 'aliiiiscf', rol: 'Member', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 6,
    github_repo: 'https://github.com/Angeles-de-MAC',
    integrantes: [
      { usuario: 'mxnlinesdev', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
      { usuario: 'Pascua1Quac', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
      { usuario: 'MysticMichelle', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
      { usuario: 'SadLib', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
      { usuario: '321265302-an', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 7,
    github_repo: 'https://github.com/Academicos-Web',
    integrantes: [
      { usuario: 'miguelacch', rol: 'N/A', estado: 'Approved', contribuciones: 3 },
      { usuario: 'ArmandoHG', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
      { usuario: 'TheArtico05', rol: 'Member', estado: 'Approved', contribuciones: 1 },
      { usuario: 'EriTeo', rol: 'Member', estado: 'Approved', contribuciones: 3 },
      { usuario: 'Mouns-a', rol: 'Member', estado: 'Approved', contribuciones: 1 },
      { usuario: 'AlynMarquez', rol: 'N/A', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 8,
    github_repo: 'https://github.com/ExtraWeb0rdinarios',
    integrantes: [
      { usuario: 'Dieg0He', rol: 'N/A', estado: 'Approved', contribuciones: 5 },
      { usuario: 'mauriciob', rol: 'N/A', estado: 'Approved', contribuciones: 4 },
      { usuario: 'Less-lie', rol: 'Member', estado: 'Approved', contribuciones: 2 },
      { usuario: 'Vanesa-SC2', rol: 'N/A', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 9,
    github_repo: 'https://github.com',
    integrantes: [{ usuario: 'Arili22', rol: 'N/A', estado: 'Approved', contribuciones: 2 }],
  },
];

export const getContribucionesTotales = (): number =>
  equiposContribuciones.reduce(
    (total, team) => total + team.integrantes.reduce((sum, member) => sum + member.contribuciones, 0),
    0
  );

export const getIntegrantesTotales = (): number =>
  equiposContribuciones.reduce((total, team) => total + team.integrantes.length, 0);
