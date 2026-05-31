/**
 * DATOS DE CALIFICACIONES - Semestre 2025-2
 *
 * Escala de evaluación:
 *   30% Exámenes (promedio de examen 1 y 2)
 *   70% Trabajo en equipo:
 *     - 20% Autoevaluación (pendiente - formulario Google)
 *     - 20% Desempeño Individual / PRs cerradas (basado en contribuciones)
 *     - 30% Proyecto en Vercel (pendiente - revisión por equipo)
 *
 * Primera vuelta (F1): estudiantes con tareas no entregadas o 0 en algún examen.
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
  /** 30% - Promedio de exámenes */
  notaExamenes: number;
  porcentajeExamenes: number;
  /** 20% - Autoevaluación (pendiente) */
  autoevaluacion: number | null;
  porcentajeAutoevaluacion: number | null;
  /** 20% - Desempeño individual / PRs */
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
 * Evaluación del proyecto desplegado en Vercel por equipo.
 * La calificación es directa sobre 30 puntos (peso del 30%).
 */
export interface ProyectoEvaluacion {
  equipoId: number;
  /** Calificación directa sobre 30 */
  calificacion: number;
  /** Comentarios / observaciones de la revisión */
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
    comentarios: [
      'Proyecto destacado del curso por su nivel de desarrollo y funcionalidad',
      'Integración de Supabase verificada',
    ],
  },
  {
    equipoId: 6,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 9,
    calificacion: 15,
    comentarios: [
      'Las páginas o funcionalidades no implementadas deben mostrar una página 404 en lugar de quedar sin contenido',
      'Se requiere agregar más vistas con contenido estático para demostrar mayor cobertura funcional del proyecto',
      'Es necesario implementar al menos una integración funcional con Supabase',
    ],
  },
  {
    equipoId: 5,
    calificacion: 30,
    comentarios: [],
  },
  {
    equipoId: 10,
    calificacion: 20,
    comentarios: [],
  },
];

/**
 * Obtener evaluación del proyecto para un equipo
 */
export function getProyectoEvaluacion(equipoId: number): ProyectoEvaluacion | undefined {
  return proyectoEvaluaciones.find((p) => p.equipoId === equipoId);
}

export const estudiantesCalificaciones: EstudianteCalificacion[] = [
  // — Equipo 1: DevStudy —
  { nombre: 'Hernández Peña Ángel Adrián', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Domínguez Lira Estefani Michelle', equipoId: 3, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Gil De Gaona Jazmín', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Cruz Chávez Miguel Ángel', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Camacho Flores Alitzel Sophia', equipoId: 5, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Moctezuma Isidro Michelle', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Moreno Vigueras Arturo Tadeo', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Saiz Pérez Cristina Vianeth', equipoId: 5, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Libonatti Valdivia Sadrach Neftali', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Herrera Franco Samuel', equipoId: 2, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Aguilar Buendía Bruno', equipoId: 4, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Ruiz García Emiliano', equipoId: 3, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Rodríguez Rodríguez Erick Tadeo', equipoId: 7, tareasNoEntregadas: [], examen1: 100, examen2: 100, examen3: 100, calificacionExamenes: 100, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Martínez Rodríguez Fernando', equipoId: 4, tareasNoEntregadas: [], examen1: 98, examen2: 100, examen3: 100, calificacionExamenes: 99, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Herrera Hernández Diego', equipoId: 8, tareasNoEntregadas: [], examen1: 95, examen2: 100, examen3: 100, calificacionExamenes: 98, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Moctezuma Ramírez Diego Rafael', equipoId: 2, tareasNoEntregadas: [], examen1: 94, examen2: 100, examen3: 100, calificacionExamenes: 98, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Medina Hernández Ramón', equipoId: 1, tareasNoEntregadas: [], examen1: 100, examen2: 95, examen3: 100, calificacionExamenes: 98, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Segura Loera Carlos Emiliano', equipoId: 2, tareasNoEntregadas: [], examen1: 92, examen2: 100, examen3: 100, calificacionExamenes: 97, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Hernández Martínez Monserrat', equipoId: 7, tareasNoEntregadas: [], examen1: 90, examen2: 100, examen3: 100, calificacionExamenes: 97, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Sebastián Cervantes Vanesa', equipoId: 8, tareasNoEntregadas: [], examen1: 91, examen2: 100, examen3: 100, calificacionExamenes: 97, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Trinidad Potrero Josué', equipoId: 4, tareasNoEntregadas: [], examen1: 88, examen2: 100, examen3: 100, calificacionExamenes: 96, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Ríos Barrera Arantza Ilian', equipoId: 9, tareasNoEntregadas: [], examen1: 96, examen2: 100, examen3: 100, calificacionExamenes: 95, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Elías García Luis David', equipoId: 6, tareasNoEntregadas: [], examen1: 100, examen2: 93, examen3: 100, calificacionExamenes: 98, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'González Sánchez Raúl Alejandro', equipoId: 6, tareasNoEntregadas: [], examen1: 90, examen2: 91, examen3: 100, calificacionExamenes: 94, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'González Hernández Leslie Danaé', equipoId: 8, tareasNoEntregadas: [], examen1: 80, examen2: 100, examen3: 100, calificacionExamenes: 93, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Rojas Uriostigue Rodrigo', equipoId: 10, tareasNoEntregadas: [], examen1: 89, examen2: 96, examen3: 100, calificacionExamenes: 95, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Buenrostro Cruces Saraí', equipoId: 1, tareasNoEntregadas: [], examen1: 77, examen2: 100, examen3: 100, calificacionExamenes: 92, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Escutia Pascacio Eduardo Emiliano', equipoId: 6, tareasNoEntregadas: [], examen1: 84, examen2: 95, examen3: 100, calificacionExamenes: 93, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Del Ángel Santiago Monserrat Guadalupe', equipoId: 3, tareasNoEntregadas: [], examen1: 81, examen2: 86, examen3: 100, calificacionExamenes: 89, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Romero Velázquez Luis Fernando', equipoId: 9, tareasNoEntregadas: [], examen1: 86, examen2: 79, examen3: 100, calificacionExamenes: 88, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Velázquez Martínez Antonio', equipoId: 2, tareasNoEntregadas: [], examen1: 60, examen2: 99, examen3: 100, calificacionExamenes: 86, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Mendoza Hernández Daniela Itzel', equipoId: 4, tareasNoEntregadas: [], examen1: 80, examen2: 74, examen3: 100, calificacionExamenes: 85, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Luna Martínez Escobar Guillermo', equipoId: 10, tareasNoEntregadas: [], examen1: 76, examen2: 78, examen3: 100, calificacionExamenes: 85, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Villeda López Saúl', equipoId: 2, tareasNoEntregadas: [], examen1: 95, examen2: 0, examen3: 100, calificacionExamenes: 65, primeraVuelta: true, motivoPrimeraVuelta: 'Examen 2 con calificación 0' },
  { nombre: 'Márquez Espinoza Alyn Verónica', equipoId: 7, tareasNoEntregadas: [], examen1: 64, examen2: 87, examen3: 100, calificacionExamenes: 84, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Cortés Cortés Bryan Yael', equipoId: 9, tareasNoEntregadas: [], examen1: 69, examen2: 78, examen3: 100, calificacionExamenes: 82, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Báez Villanueva Mauricio Omar', equipoId: 8, tareasNoEntregadas: [], examen1: 62, examen2: 80, examen3: 100, calificacionExamenes: 81, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Chávez González Itzel', equipoId: 5, tareasNoEntregadas: [], examen1: 63, examen2: 71, examen3: 100, calificacionExamenes: 78, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Hernández González Armando', equipoId: 7, tareasNoEntregadas: [], examen1: 73, examen2: 78, examen3: 100, calificacionExamenes: 73, primeraVuelta: true, motivoPrimeraVuelta: 'Examen 2 no aprobado' },
  { nombre: 'Velázquez García Leonardo Daniel', equipoId: 10, tareasNoEntregadas: [], examen1: 67, examen2: 48, examen3: 100, calificacionExamenes: 72, primeraVuelta: true, motivoPrimeraVuelta: 'Examen 2 no aprobado' },
  { nombre: 'Pérez López Zaira Cecilia', equipoId: 1, tareasNoEntregadas: [], examen1: 82, examen2: 86, examen3: 100, calificacionExamenes: 57, primeraVuelta: false, motivoPrimeraVuelta: 'Examen 2 con calificación 0' },
  { nombre: 'Martínez Hernández Ricardo Ramón', equipoId: 10, tareasNoEntregadas: [], examen1: 72, examen2: 72, examen3: 100, calificacionExamenes: 81, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Raygoza Islas José Ángel', equipoId: 3, tareasNoEntregadas: [], examen1: 61, examen2: 61, examen3: 100, calificacionExamenes: 74, primeraVuelta: false, motivoPrimeraVuelta: '' },
  { nombre: 'Valdovinos Sedano Daniela Ariday', equipoId: 9, tareasNoEntregadas: ['T3', 'T1', 'T2'], examen1: 0, examen2: 0, examen3: 100, calificacionExamenes: 33, primeraVuelta: true, motivoPrimeraVuelta: 'Tareas T1, T2, T3 no entregadas y ambos exámenes con calificación 0' },
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
    6: 'Ángeles de MAC',
    7: 'Académicos Web',
    8: 'ExtraWeb0rdinarios',
    9: 'Sistema de Gestión',
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
 * Promedio de exámenes de un equipo
 */
export function getPromedioEquipo(equipoId: number): number {
  const del = estudiantesCalificaciones.filter((e) => e.equipoId === equipoId);
  if (del.length === 0) return 0;
  return del.reduce((sum, e) => sum + e.calificacionExamenes, 0) / del.length;
}
