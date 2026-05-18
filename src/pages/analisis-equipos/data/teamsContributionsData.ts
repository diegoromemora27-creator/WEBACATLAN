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
      { usuario: 'SamuelHeFra', rol: 'Member', estado: 'Approved', contribuciones: 5 },
      { usuario: 'CarLos4475', rol: 'Member', estado: 'Approved', contribuciones: 3 },
      { usuario: 'DiegoMoctezuma', rol: 'Member', estado: 'Approved', contribuciones: 2 },
      { usuario: 'sav1209', rol: 'Member', estado: 'Approved', contribuciones: 1 },
      { usuario: 'Antonio4240', rol: 'Member', estado: 'Review required', contribuciones: 1 },
    ],
  },
  {
    equipo: 3,
    github_repo: 'https://github.com/RecursosMAC',
    integrantes: [
      { usuario: 'EstefaniDL', rol: 'Member', estado: 'Approved', contribuciones: 5 },
      { usuario: 'Emiliano1502', rol: 'Member', estado: 'Approved', contribuciones: 4 },
      { usuario: 'Angel0017', rol: 'Member', estado: 'Approved', contribuciones: 2 },
      { usuario: 'MonserratSantiago8', rol: 'Member', estado: 'Approved', contribuciones: 1 },
    ],
  },
  {
    equipo: 4,
    github_repo: 'https://github.com/Null-Nexus',
    integrantes: [
      { usuario: 'BrunoAG2610', rol: 'Member', estado: 'Approved', contribuciones: 6 },
      { usuario: 'FernandoMR10', rol: 'Member', estado: 'Approved', contribuciones: 6 },
      { usuario: 'JosueTP09', rol: 'Member', estado: 'Approved', contribuciones: 6 },
      { usuario: 'danielamh1302', rol: 'Member', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 5,
    github_repo: 'https://github.com/AcaShop-Acatlan',
    integrantes: [
      { usuario: 'aliiiiscf', rol: 'Member', estado: 'Approved', contribuciones: 4 },
      { usuario: 'Itzcg', rol: 'Member', estado: 'Approved', contribuciones: 2 },
      { usuario: 'vianethsaiz-wq', rol: 'Member', estado: 'Approved', contribuciones: 2 },
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
      { usuario: 'EriTeo', rol: 'Member', estado: 'Approved', contribuciones: 5 },
      { usuario: 'miguelacch', rol: 'Member', estado: 'Approved', contribuciones: 5 },
      { usuario: 'TheArtico05', rol: 'Member', estado: 'Approved', contribuciones: 4 },
      { usuario: 'Mouns-a', rol: 'Member', estado: 'Approved', contribuciones: 3 },
      { usuario: 'AlynMarquez', rol: 'Member', estado: 'Approved', contribuciones: 2 },
      { usuario: 'ArmandoHG22', rol: 'Member', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 8,
    github_repo: 'https://github.com/ExtraWeb0rdinarios',
    integrantes: [
      { usuario: 'Dieg0Her13ra', rol: 'Member', estado: 'Approved', contribuciones: 7 },
      { usuario: 'mauriciobaezv', rol: 'Member', estado: 'Approved', contribuciones: 6 },
      { usuario: 'Less-lie', rol: 'Member', estado: 'Approved', contribuciones: 4 },
      { usuario: 'Vanesa-SC28', rol: 'Member', estado: 'Approved', contribuciones: 2 },
    ],
  },
  {
    equipo: 9,
    github_repo: 'https://github.com/EQUIPO9-DESARROLLOWEB/Front-end-proyecto',
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
