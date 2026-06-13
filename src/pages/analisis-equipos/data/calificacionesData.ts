/**
 * DATOS DE CALIFICACIONES - Semestre 2025-2
 *
 * Escala de evaluaciÃ³n:
 *   30% ExÃ¡menes (promedio de examen 1 y 2)
 *   70% Trabajo en equipo:
 *     - 20% AutoevaluaciÃ³n (pendiente - formulario Google)
 *     - 20% DesempeÃ±o Individual / PRs cerradas (basado en contribuciones)
 *     - 30% Proyecto en Vercel (pendiente - revisiÃ³n por equipo)
 *
 * Primera vuelta (F1): estudiantes con tareas no entregadas o 0 en algÃºn examen.
 */

export interface EstudianteCalificacion {
  nombre: string;
  equipoId: number;
  tareasNoEntregadas: string[];
  examen1: number;
  examen2: number;
  examen3: number;
  calificacionExamenes: number;
  /** true si tiene tareas pendientes o 0 en un examen */
  primeraVuelta: boolean;
  /** Motivo de primera vuelta */
  motivoPrimeraVuelta: string;
}

export interface CalificacionFinal {
  nombre: string;
  equipoId: number;
  /** 30% - Promedio de exÃ¡menes */
  notaExamenes: number;
  porcentajeExamenes: number;
  /** 20% - AutoevaluaciÃ³n (pendiente) */
  autoevaluacion: number | null;
  porcentajeAutoevaluacion: number | null;
  /** 20% - DesempeÃ±o individual / PRs */
  desempenoPRs: number | null;
  porcentajeDesempenoPRs: number | null;
  /** 30% - Proyecto Vercel (pendiente) */
  proyectoVercel: number | null;
  porcentajeProyectoVercel: number | null;
  /** Nota final calculada */
  notaFinal: number | null;
  primeraVuelta: boolean;
  motivoPrimeraVuelta: string;
}

/**
 * EvaluaciÃ³n del proyecto desplegado en Vercel por equipo.
 * La calificaciÃ³n es directa sobre 30 puntos (peso del 30%).
 */
export interface ProyectoEvaluacion {
  equipoId: number;
  /** CalificaciÃ³n directa sobre 30 */
  calificacion: number;
  /** Comentarios / observaciones de la revisiÃ³n */
  comentarios: string[];
}

export const proyectoEvaluaciones: ProyectoEvaluacion[] = [
  {
    equipoId: 1,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 3,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 4,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 7,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 8,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 2,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 6,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 9,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 5,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 10,
    calificacion: 30,
    comentarios: [],
  },
];

/**
 * Obtener evaluaciÃ³n del proyecto para un equipo
 */
export function getProyectoEvaluacion(equipoId: number): ProyectoEvaluacion | undefined {
  return proyectoEvaluaciones.find((p) => p.equipoId === equipoId);
}

export const estudiantesCalificaciones: EstudianteCalificacion[] = [
  // â€” Equipo 1: DevStudy â€”
  { nombre: 'HernÃ¡ndez PeÃ±a Ãngel AdriÃ¡n', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'DomÃ­nguez Lira Estefani Michelle', equipoId: 3, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Gil De Gaona JazmÃ­n', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Cruz ChÃ¡vez Miguel Ãngel', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Camacho Flores Alitzel Sophia', equipoId: 5, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Moctezuma Isidro Michelle', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Moreno Vigueras Arturo Tadeo', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Saiz PÃ©rez Cristina Vianeth', equipoId: 5, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Libonatti Valdivia Sadrach Neftali', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Herrera Franco Samuel', equipoId: 2, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Aguilar BuendÃ­a Bruno', equipoId: 4, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Ruiz GarcÃ­a Emiliano', equipoId: 3, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'RodrÃ­guez RodrÃ­guez Erick Tadeo', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'MartÃ­nez RodrÃ­guez Fernando', equipoId: 4, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Herrera HernÃ¡ndez Diego', equipoId: 8, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Moctezuma RamÃ­rez Diego Rafael', equipoId: 2, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Medina HernÃ¡ndez RamÃ³n', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Segura Loera Carlos Emiliano', equipoId: 2, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'HernÃ¡ndez MartÃ­nez Monserrat', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'SebastiÃ¡n Cervantes Vanesa', equipoId: 8, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Trinidad Potrero JosuÃ©', equipoId: 4, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'RÃ­os Barrera Arantza Ilian', equipoId: 9, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'ElÃ­as GarcÃ­a Luis David', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'GonzÃ¡lez SÃ¡nchez RaÃºl Alejandro', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'GonzÃ¡lez HernÃ¡ndez Leslie DanaÃ©', equipoId: 8, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Rojas Uriostigue Rodrigo', equipoId: 10, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Buenrostro Cruces SaraÃ­', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Escutia Pascacio Eduardo Emiliano', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Del Ãngel Santiago Monserrat Guadalupe', equipoId: 3, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Romero VelÃ¡zquez Luis Fernando', equipoId: 9, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'VelÃ¡zquez MartÃ­nez Antonio', equipoId: 2, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Mendoza HernÃ¡ndez Daniela Itzel', equipoId: 4, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Luna MartÃ­nez Escobar Guillermo', equipoId: 10, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Villeda LÃ³pez SaÃºl', equipoId: 2, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'MÃ¡rquez Espinoza Alyn VerÃ³nica', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'CortÃ©s CortÃ©s Bryan Yael', equipoId: 9, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'BÃ¡ez Villanueva Mauricio Omar', equipoId: 8, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'ChÃ¡vez GonzÃ¡lez Itzel', equipoId: 5, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'HernÃ¡ndez GonzÃ¡lez Armando', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'VelÃ¡zquez GarcÃ­a Leonardo Daniel', equipoId: 10, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'PÃ©rez LÃ³pez Zaira Cecilia', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'MartÃ­nez HernÃ¡ndez Ricardo RamÃ³n', equipoId: 10, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Raygoza Islas JosÃ© Ãngel', equipoId: 3, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Valdovinos Sedano Daniela Ariday', equipoId: 9, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
];

/**
 * Obtener nombre del equipo por ID
 */
export function getNombreEquipo(equipoId: number): string {
  const nombres: Record<number, string> = {
    1: 'DevStudy',
    2: '4 de Asada',
    3: 'StudyLink',
    4: 'Null Nexus',
    5: 'AcaShop',
    6: 'Ãngeles de MAC',
    7: 'AcadÃ©micos Web',
    8: 'ExtraWeb0rdinarios',
    9: 'Sistema de GestiÃ³n',
    10: 'Monitoreo',
  };
  return nombres[equipoId] || `Equipo ${equipoId}`;
}

/**
 * Links de Vercel por equipo
 */
export function getVercelUrl(equipoId: number): string {
  const urls: Record<number, string> = {
    1: 'https://devstudy-eight.vercel.app/',
    2: 'https://frontend-project-two-mu.vercel.app/',
    3: 'https://front-end-project-beta-three.vercel.app/',
    4: 'https://lynx-beige.vercel.app/',
    5: 'https://front-end-proyect-delta.vercel.app/',
    6: 'https://front-end-proyecto-two.vercel.app/',
    7: 'https://frontend-next-js-ochre.vercel.app/',
    8: 'https://front-end-proyecto-lake.vercel.app/',
    9: 'https://front-end-proyecto-vert.vercel.app/',
    10: 'https://front-end-project-yd84.vercel.app/',
  };
  return urls[equipoId] || '';
}

/**
 * Todos los IDs de equipos que tienen estudiantes en la lista
 */
export function getEquiposConEstudiantes(): number[] {
  const ids = new Set(estudiantesCalificaciones.map((e) => e.equipoId));
  return Array.from(ids).sort((a, b) => a - b);
}

/**
 * Estudiantes en primera vuelta
 */
export function getEstudiantesPrimeraVuelta(): EstudianteCalificacion[] {
  return estudiantesCalificaciones.filter((e) => e.primeraVuelta);
}

/**
 * Promedio de exÃ¡menes de un equipo
 */
export function getPromedioEquipo(equipoId: number): number {
  const del = estudiantesCalificaciones.filter((e) => e.equipoId === equipoId);
  if (del.length === 0) return 0;
  return del.reduce((sum, e) => sum + e.calificacionExamenes, 0) / del.length;
}
