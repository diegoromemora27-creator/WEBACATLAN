import { useEffect, useMemo, useState } from 'react';
import {
  estudiantesCalificaciones,
  getNombreEquipo,
  getVercelUrl,
  getEquiposConEstudiantes,
  getEstudiantesPrimeraVuelta,
  getPromedioEquipo,
  getProyectoEvaluacion,
  proyectoEvaluaciones,
  type EstudianteCalificacion,
} from '../data/calificacionesData';
import { equiposContribuciones } from '../data/teamsContributionsData';
import { onlyTeams } from '../data/OnlyTeams';
import participantsData from '../data/courseid_21860_participants.json';

const FORM_AUTOEVALUACION = 'https://docs.google.com/forms/d/e/1FAIpQLScs_f0NFgeT30QgCtcFWb9q49Vik534LKRSshwrcV4mmAYQIw/viewform';

// Mapa normalizado de nombre → correo del SEA
function normalizeName(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

const emailMap: Record<string, string> = {};
const participants = (participantsData as any).flat();
for (const p of participants) {
  if (p.apellidos && p.direccinemail) {
    emailMap[normalizeName(p.apellidos)] = p.direccinemail.toLowerCase();
  }
}

function getEmailForStudent(nombre: string): string | null {
  return emailMap[normalizeName(nombre)] || null;
}

// Mapa de nombre real -> usuario de GitHub para PRs
const mapNombreAUsuarioGH: Record<string, string> = {
  'Hernández Peña Ángel Adrián': 'SinR0str0',
  'Gil De Gaona Jazmín': 'JazGil',
  'Medina Hernández Ramón': 'RamonMedina04',
  'Buenrostro Cruces Saraí': 'SaraiCruces',
  'Velázquez Martínez Antonio': 'Antonio4240',
  'Herrera Franco Samuel': 'SamuelHeFra',
  'Segura Loera Carlos Emiliano': 'CarLos4475',
  'Villeda López Saúl': 'sav1209',
  'Moctezuma Ramírez Diego Rafael': 'DiegoMoctezuma',
  'Domínguez Lira Estefani Michelle': 'EstefaniDL',
  'Ruiz García Emiliano': 'Emiliano1502',
  'Del Ángel Santiago Monserrat Guadalupe': 'MonserratSantiago8',
  'Raygoza Islas José Ángel': 'Angel0017',
  'Martínez Rodríguez Fernando': 'FernandoMR10',
  'Trinidad Potrero Josué': 'JosueTP09',
  'Aguilar Buendía Bruno': 'BrunoAG2610',
  'Mendoza Hernández Daniela Itzel': 'danielamh1302',
  'Camacho Flores Alitzel Sophia': 'aliiiiscf',
  'Saiz Pérez Cristina Vianeth': 'vianethsaiz-wq',
  'Chávez González Itzel': 'Itzcg',
  'González Sánchez Raúl Alejandro': '321265302-an',
  'Escutia Pascacio Eduardo Emiliano': 'Pascua1Quac',
  'Libonatti Valdivia Sadrach Neftali': 'SadLib',
  'Moctezuma Isidro Michelle': 'MysticMichelle',
  'Elías García Luis David': 'mxnlinesdev',
  'Hernández González Armando': 'ArmandoHG22',
  'Rodríguez Rodríguez Erick Tadeo': 'EriTeo',
  'Márquez Espinoza Alyn Verónica': 'AlynMarquez',
  'Hernández Martínez Monserrat': 'Mouns-a',
  'Moreno Vigueras Arturo Tadeo': 'TheArtico05',
  'Cruz Chávez Miguel Ángel': 'miguelacch',
  'Herrera Hernández Diego': 'Dieg0Her13ra',
  'Sebastián Cervantes Vanesa': 'Vanesa-SC28',
  'González Hernández Leslie Danaé': 'Less-lie',
  'Báez Villanueva Mauricio Omar': 'mauriciobaezv',
  'Cortés Cortés Bryan Yael': '317110375',
  'Ríos Barrera Arantza Ilian': 'Ariiiiii22',
  'Romero Velázquez Luis Fernando': '320584622-glitch',
  'Valdovinos Sedano Daniela Ariday': '',
  'Rojas Uriostigue Rodrigo': 'RojasUriostigue',
  'Luna Martínez Escobar Guillermo': '',
  'Velázquez García Leonardo Daniel': '',
  'Martínez Hernández Ricardo Ramón': 'RicardoMH',
  'Pérez López Zaira Cecilia': 'ZairaP-coder',
};

function getContribucionesPorNombre(nombre: string): number {
  const ghUser = mapNombreAUsuarioGH[nombre];
  if (!ghUser) return 0;
  for (const team of equiposContribuciones) {
    const found = team.integrantes.find(
      (i) => i.usuario.toLowerCase() === ghUser.toLowerCase()
    );
    if (found) return found.contribuciones;
  }
  return 0;
}

/**
 * Calcula nota de PRs basada en equidad de participación dentro del equipo.
 * Si todos participan igual → todos obtienen 100.
 * Si participas menos que tu parte equitativa → proporcionalmente menos.
 */
function calcularNotaPRs(nombre: string, equipoId: number): number {
  const ghUser = mapNombreAUsuarioGH[nombre];
  if (!ghUser) return 0;

  // Buscar el equipo de contribuciones
  const teamContrib = equiposContribuciones.find((t) => {
    return t.integrantes.some((i) => i.usuario.toLowerCase() === ghUser.toLowerCase());
  });
  if (!teamContrib) return 0;

  const totalEquipo = teamContrib.integrantes.reduce((s, i) => s + i.contribuciones, 0);
  const numIntegrantes = teamContrib.integrantes.length;
  if (totalEquipo === 0 || numIntegrantes === 0) return 0;

  const miembro = teamContrib.integrantes.find(
    (i) => i.usuario.toLowerCase() === ghUser.toLowerCase()
  );
  if (!miembro) return 0;

  const shareReal = miembro.contribuciones / totalEquipo; // ej: 0.25
  const shareIdeal = 1 / numIntegrantes; // ej: 0.25 para 4 miembros

  // Si tu share >= ideal, tienes 100. Si no, proporcional.
  if (shareReal >= shareIdeal) return 100;
  return Math.round((shareReal / shareIdeal) * 100);
}

/**
 * Datos de autoevaluación.
 * notaNumerica: 1-10, cualitativa: 3=Bueno, 4=Muy Bueno, 5=Sobresaliente
 */
const autoevaluaciones: Record<string, { nota: number; cualitativa: number }> = {
  'Raygoza Islas José Ángel': { nota: 8, cualitativa: 3 },
  'Domínguez Lira Estefani Michelle': { nota: 10, cualitativa: 5 },
  'Ruiz García Emiliano': { nota: 9, cualitativa: 5 },
  'Romero Velázquez Luis Fernando': { nota: 7, cualitativa: 3 },
  'Gil De Gaona Jazmín': { nota: 8, cualitativa: 4 },
  'Hernández Peña Ángel Adrián': { nota: 9, cualitativa: 3 },
  'González Sánchez Raúl Alejandro': { nota: 8, cualitativa: 5 },
  'Rodríguez Rodríguez Erick Tadeo': { nota: 9, cualitativa: 5 },
  'Libonatti Valdivia Sadrach Neftali': { nota: 9, cualitativa: 3 },
  'Moreno Vigueras Arturo Tadeo': { nota: 10, cualitativa: 5 },
  'Cortés Cortés Bryan Yael': { nota: 9, cualitativa: 5 },
  'Cruz Chávez Miguel Ángel': { nota: 9, cualitativa: 4 },
  'Martínez Rodríguez Fernando': { nota: 9, cualitativa: 4 },
  'Moctezuma Isidro Michelle': { nota: 10, cualitativa: 5 },
  'Rojas Uriostigue Rodrigo': { nota: 10, cualitativa: 3 },
  'Márquez Espinoza Alyn Verónica': { nota: 9, cualitativa: 4 },
  'Hernández González Armando': { nota: 8, cualitativa: 3 },
  'Moctezuma Ramírez Diego Rafael': { nota: 6, cualitativa: 3 },
};

/**
 * Calcula puntos de autoevaluación basado en el porcentaje de contribuciones.
 * >= 70% de nota PRs → 20 pts
 * 25%-69% de nota PRs → 16 pts
 * < 25% → 15 pts
 * Solo aplica si el estudiante respondió la autoevaluación.
 */
function calcularNotaAutoevaluacion(nombre: string): number | null {
  const data = autoevaluaciones[nombre];
  if (!data) return null;
  return 100; // placeholder, el cálculo real se hace en porcentajeAuto
}

function calcularPuntosAutoevaluacion(nombre: string, equipoId: number): number {
  const notaPrs = calcularNotaPRs(nombre, equipoId);
  if (notaPrs >= 70) return 20;
  if (notaPrs >= 25) return 16;
  return 15;
}

function getColorByGrade(grade: number): string {
  if (grade >= 90) return 'text-emerald-700 bg-emerald-50';
  if (grade >= 80) return 'text-blue-700 bg-blue-50';
  if (grade >= 70) return 'text-amber-700 bg-amber-50';
  return 'text-rose-700 bg-rose-50';
}

function calcularCalificacionFinal(nombre: string, equipoId: number): number {
  const porcentajeExamen = Math.round(
    (estudiantesCalificaciones.find((e) => e.nombre === nombre)?.calificacionExamenes ?? 0) * 0.3
  );
  const prs = getContribucionesPorNombre(nombre);
  const notaPrs = calcularNotaPRs(nombre, equipoId);
  const porcentajePRs = Math.round(notaPrs * 0.2);
  const porcentajeAuto = calcularPuntosAutoevaluacion(nombre, equipoId);
  const evProyecto = getProyectoEvaluacion(equipoId);
  const porcentajeProyecto = prs === 0 ? 0 : (evProyecto ? evProyecto.calificacion : 0);
  const total = porcentajeExamen + porcentajePRs + porcentajeAuto + porcentajeProyecto;
  const ultimoDigito = total % 10;
  return ultimoDigito >= 5 ? total + (10 - ultimoDigito) : total;
}

export default function CalificacionesPage() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vista, setVista] = useState<'general' | 'individual'>('general');
  const [showModal, setShowModal] = useState(true);
  const [emailInputs, setEmailInputs] = useState<Record<string, string>>({});
  const [verifiedStudents, setVerifiedStudents] = useState<Record<string, boolean>>({});
  const [emailErrors, setEmailErrors] = useState<Record<string, string>>({});

  function handleVerifyEmail(nombre: string) {
    const inputEmail = (emailInputs[nombre] || '').trim().toLowerCase();
    const registeredEmail = getEmailForStudent(nombre);
    if (!registeredEmail) {
      setEmailErrors((prev) => ({ ...prev, [nombre]: 'No se encontró correo registrado.' }));
      return;
    }
    if (inputEmail === registeredEmail) {
      setVerifiedStudents((prev) => ({ ...prev, [nombre]: true }));
      setEmailErrors((prev) => ({ ...prev, [nombre]: '' }));
    } else {
      setEmailErrors((prev) => ({ ...prev, [nombre]: 'El correo no coincide con el registrado en el SEA.' }));
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equiposDisponibles = useMemo(() => getEquiposConEstudiantes(), []);
  const estudiantesPV = useMemo(() => getEstudiantesPrimeraVuelta(), []);



  const estudiantesFiltrados = useMemo(() => {
    let lista = [...estudiantesCalificaciones];
    if (selectedTeamId !== 'all') {
      lista = lista.filter((e) => e.equipoId === selectedTeamId);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      lista = lista.filter((e) => e.nombre.toLowerCase().includes(q));
    }
    lista.sort((a, b) => calcularCalificacionFinal(b.nombre, b.equipoId) - calcularCalificacionFinal(a.nombre, a.equipoId));
    return lista;
  }, [selectedTeamId, searchQuery]);

  const stats = useMemo(() => {
    const total = estudiantesFiltrados.length;
    const promExamenes = total > 0
      ? estudiantesFiltrados.reduce((s, e) => s + e.calificacionExamenes, 0) / total
      : 0;
    const enPV = estudiantesFiltrados.filter((e) => e.primeraVuelta).length;
    const aprobados = estudiantesFiltrados.filter((e) => e.calificacionExamenes >= 60 && !e.primeraVuelta).length;
    return { total, promExamenes, enPV, aprobados };
  }, [estudiantesFiltrados]);

  const equipoInfo = useMemo(() => {
    if (selectedTeamId === 'all') return null;
    return onlyTeams.find((t) => t.id === selectedTeamId) || null;
  }, [selectedTeamId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-indigo-50">
      {/* Modal de avisos */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-amber-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3 mb-4">
              <i className="ri-alert-line text-2xl text-red-600"></i>
              <h2 className="text-xl font-bold text-[#1b3d70]">Avisos Importantes</h2>
            </div>

            <div className="space-y-4">
              {/* Aviso F1 */}
              <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                <h3 className="font-bold text-red-700 mb-2">Estudiantes en situación F1 (Primera Vuelta)</h3>
                <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                  <li>Deberán presentarse el próximo <strong>martes 26 de mayo</strong> en el laboratorio de cómputo para aclarar su situación o presentar el examen o tareas faltantes.</li>
                  <li>En caso de no acreditar la materia por la suma total, la <strong>primera vuelta</strong> será el <strong>jueves 4 de junio</strong> a la hora de clase en el salón 207.</li>
                  <li>La <strong>segunda vuelta</strong> será el <strong>martes 09 de junio</strong> en el laboratorio de cómputo a la hora de clase.</li>
                </ul>
              </div>

              {/* Aviso aclaración */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h3 className="font-bold text-amber-700 mb-2">Aclaración de calificaciones</h3>
                <p className="text-sm text-amber-800">
                  En caso de aclaración de calificación, pueden acudir el próximo <strong>martes 26 de mayo</strong> al laboratorio de cómputo, de preferencia.
                </p>
              </div>

              {/* Aviso confirmación por correo */}
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                <h3 className="font-bold text-indigo-700 mb-2">Confirmación de calificación por correo</h3>
                <p className="text-sm text-indigo-800 mb-2">
                  Todos los estudiantes deben enviar un correo a:
                </p>
                <p className="text-sm font-mono bg-white px-3 py-1.5 rounded border border-indigo-200 text-indigo-900 mb-2">
                  diegoromemora27@gmail.com
                </p>
                <div className="text-sm text-indigo-800 space-y-1">
                  <p><strong>Asunto:</strong> Confirmación de calificación</p>
                  <p><strong>Cuerpo:</strong> "Yo, [Nombre completo], estoy de acuerdo con la calificación asignada."</p>
                </div>
                <p className="text-xs text-red-600 font-semibold mt-3">
                  ⚠️ Si no se recibe el correo, no se aceptarán reclamaciones posteriores.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-3 bg-[#1b3d70] text-white font-semibold rounded-xl hover:bg-[#bb8800] transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/analisis-equipos/contribuciones')}
            className="flex items-center space-x-2 text-[#1b3d70] hover:text-[#bb8800] transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-semibold text-sm">Volver a Contribuciones</span>
          </button>

          <div className="flex items-center space-x-3">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-12 w-auto"
            />
            <div className="text-[#1b3d70]">
              <div className="font-bold text-base leading-tight">Dashboard de Calificaciones</div>
              <div className="text-xs opacity-70">Evaluación integral del semestre</div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-100">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1b3d70] mb-4 flex items-center gap-3">
              <i className="ri-file-list-3-line text-amber-600"></i>
              Calificaciones del Curso
            </h1>
            <p className="text-gray-600 max-w-3xl mb-4">
              Tablero integral de evaluación. La calificación final se compone de:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3">
                <p className="font-bold text-indigo-700 text-lg">30%</p>
                <p className="text-sm text-indigo-600">Exámenes (promedio)</p>
              </div>
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                <p className="font-bold text-emerald-700 text-lg">20%</p>
                <p className="text-sm text-emerald-600">Autoevaluación</p>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{Object.keys(autoevaluaciones).length} respuestas</span>
              </div>
              <div className="rounded-xl bg-cyan-50 border border-cyan-200 p-3">
                <p className="font-bold text-cyan-700 text-lg">20%</p>
                <p className="text-sm text-cyan-600">Desempeño Individual / PRs</p>
              </div>
              <div className="rounded-xl bg-purple-50 border border-purple-200 p-3">
                <p className="font-bold text-purple-700 text-lg">30%</p>
                <p className="text-sm text-purple-600">Proyecto Vercel</p>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">{proyectoEvaluaciones.length}/10 evaluados</span>
              </div>
            </div>

            {/* Aviso Primera Vuelta */}
            <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-700 flex items-center gap-2 mb-2">
                <i className="ri-error-warning-line text-lg"></i>
                Aviso para estudiantes en situación F1 (Primera Vuelta)
              </h3>
              <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                <li>Deberán presentarse el próximo <strong>martes 26 de mayo</strong> en el laboratorio de cómputo para aclarar su situación o presentar el examen o tareas faltantes.</li>
                <li>En caso de no acreditar la materia por la suma total, la <strong>primera vuelta</strong> será el <strong>jueves 5 de junio</strong> a la hora de clase en el salón 207.</li>
                <li>La <strong>segunda vuelta</strong> será el <strong>martes 10 de junio</strong> en el laboratorio de cómputo a la hora de clase.</li>
              </ul>
            </div>

            {/* Aviso aclaración de calificaciones */}
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <p className="text-sm text-amber-800">
                <i className="ri-information-line text-amber-600 mr-1"></i>
                En caso de aclaración de calificación, pueden acudir el próximo <strong>martes 26 de mayo</strong> al laboratorio de cómputo, de preferencia.
              </p>
            </div>

            {/* Aviso confirmación por correo */}
            <div className="mt-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
              <h3 className="font-bold text-indigo-700 flex items-center gap-2 mb-2">
                <i className="ri-mail-line text-lg"></i>
                Confirmación de calificación por correo
              </h3>
              <p className="text-sm text-indigo-800 mb-2">
                Todos los estudiantes deben enviar un correo a:
              </p>
              <p className="text-sm font-mono bg-white px-3 py-1.5 rounded border border-indigo-200 text-indigo-900 inline-block mb-2">
                diegoromemora27@gmail.com
              </p>
              <div className="text-sm text-indigo-800 space-y-1">
                <p><strong>Asunto:</strong> Confirmación de calificación</p>
                <p><strong>Cuerpo:</strong> "Yo, [Nombre completo], estoy de acuerdo con la calificación asignada."</p>
              </div>
              <p className="text-xs text-red-600 font-semibold mt-3">
                ⚠️ Si no se recibe el correo, no se aceptarán reclamaciones posteriores.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-amber-100 flex flex-wrap gap-2">
            {(['general', 'individual'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVista(v)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  vista === v
                    ? 'bg-[#1b3d70] text-white border-[#1b3d70]'
                    : 'bg-white text-[#1b3d70] border-slate-300 hover:border-[#bb8800] hover:text-[#bb8800]'
                }`}
              >
                {v === 'general' && '📋 Vista General'}
                {v === 'individual' && '👤 Vista Individual'}
              </button>
            ))}
          </div>
        </section>

        {/* Filtros */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-amber-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#1b3d70] mb-4 flex items-center gap-2">
              <i className="ri-filter-3-line text-amber-600"></i>
              Filtros
            </h2>
            {/* Búsqueda por nombre */}
            <div className="mb-4">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-sm"
                />
              </div>
            </div>
            {/* Filtros por equipo */}
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedTeamId('all')}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  selectedTeamId === 'all'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-[#1b3d70] border-slate-300 hover:border-amber-500 hover:text-amber-700'
                }`}
              >
                Todos
              </button>
              {equiposDisponibles.map((eqId) => (
                <button
                  key={eqId}
                  onClick={() => setSelectedTeamId(eqId)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    selectedTeamId === eqId
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-[#1b3d70] border-slate-300 hover:border-indigo-500 hover:text-indigo-700'
                  }`}
                >
                  Eq. {eqId} - {getNombreEquipo(eqId)}
                </button>
              ))}
            </div>

            {/* Info equipo seleccionado */}
            {equipoInfo && (
              <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-sm text-indigo-700 font-semibold">
                      {equipoInfo.name} {equipoInfo.projectName ? `- ${equipoInfo.projectName}` : ''}
                    </p>
                    <p className="text-xs text-indigo-600">
                      {equipoInfo.members.length} integrantes · Board: {equipoInfo.boardTool}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={equipoInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                    >
                      <i className="ri-github-fill"></i>
                      GitHub
                    </a>
                    <a
                      href={equipoInfo.boardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      <i className="ri-kanban-view"></i>
                      Board
                    </a>
                    {getVercelUrl(equipoInfo.id) && (
                      <a
                        href={getVercelUrl(equipoInfo.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <i className="ri-global-line"></i>
                        Vercel
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Estudiantes" icon="ri-user-line" value={stats.total} tone="amber" />
          <StatCard label="Promedio Exámenes" icon="ri-bar-chart-2-line" value={stats.promExamenes.toFixed(1)} tone="indigo" />
          <StatCard label="Aprobados" icon="ri-checkbox-circle-line" value={stats.aprobados} tone="emerald" />
        </section>

        {/* Nota sobre PRs */}
        <section className="mb-10">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 shadow-md">
            <div className="flex items-start gap-3">
              <i className="ri-information-line text-2xl text-amber-600 mt-0.5"></i>
              <div>
                <p className="font-bold text-amber-800 mb-1">Nota sobre la calificación de PRs</p>
                <p className="text-sm text-amber-700">
                  La calificación asignada en el rubro de PRs es un <strong>estimado inicial</strong> basado únicamente en la cantidad de Pull Requests mergeadas por cada estudiante.
                  Posteriormente se realizará una <strong>calibración</strong> donde el profesor revisará la relevancia e impacto de cada aporte para ajustar la nota final de este rubro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primera Vuelta Warning */}
        {estudiantesPV.length > 0 && vista === 'general' && (
          <section className="mb-10">
            <div className="bg-rose-50 rounded-2xl shadow-lg border border-rose-200 px-6 py-5 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
                <i className="ri-alert-line text-2xl"></i>
              </div>
              <div>
                <h2 className="text-lg font-bold text-rose-700 flex items-center gap-2">
                  <span>Estudiantes en situación de alerta (F1)</span>
                </h2>
                <p className="text-sm text-rose-600 mt-1">
                  Revisar situación directamente con el profesor para más detalles.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* VISTA GENERAL - Tabla de calificaciones */}
        {vista === 'general' && (
          <section className="mb-10">
            <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-[#1b3d70] flex items-center gap-2">
                  <i className="ri-table-2 text-amber-600"></i>
                  Tabla de Calificaciones ({estudiantesFiltrados.length} estudiantes)
                </h2>
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full min-w-[900px] border-separate border-spacing-y-1.5">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
                      <th className="px-3 py-2">#</th>
                      <th className="px-3 py-2">Nombre</th>
                      <th className="px-3 py-2 text-center">Equipo</th>
                      <th className="px-3 py-2 text-center">Exam 1</th>
                      <th className="px-3 py-2 text-center">Exam 2</th>
                      <th className="px-3 py-2 text-center">Exam 3</th>
                      <th className="px-3 py-2 text-center">Prom. Exámenes</th>
                      <th className="px-3 py-2 text-center">PRs</th>
                      <th className="px-3 py-2 text-center">Nota PRs (20%)</th>
                      <th className="px-3 py-2 text-center">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estudiantesFiltrados.map((est, idx) => {
                      const prs = getContribucionesPorNombre(est.nombre);
                      const notaPrs = calcularNotaPRs(est.nombre, est.equipoId);
                      return (
                        <tr key={est.nombre} className={`${est.primeraVuelta ? 'bg-rose-50' : 'bg-white'} shadow-sm`}>
                          <td className="px-3 py-3 rounded-l-lg text-sm text-gray-500">{idx + 1}</td>
                          <td className="px-3 py-3">
                            <div className="font-semibold text-[#1b3d70] text-sm">{est.nombre}</div>
                            {est.tareasNoEntregadas.length > 0 && (
                              <div className="text-xs text-rose-600 mt-0.5">
                                ⚠️ Tareas pendientes: {est.tareasNoEntregadas.join(', ')}
                              </div>
                            )}
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                              Eq. {est.equipoId}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-semibold ${getColorByGrade(est.examen1)}`}>
                              {est.examen1}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-semibold ${getColorByGrade(est.examen2)}`}>
                              {est.examen2}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-semibold ${getColorByGrade(est.examen3)}`}>
                              {est.examen3}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`inline-flex px-2.5 py-1 rounded-lg text-sm font-bold ${getColorByGrade(est.calificacionExamenes)}`}>
                              {est.calificacionExamenes}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-center font-semibold text-sm">
                            {prs === 0 ? (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold text-orange-700 bg-orange-50">
                                <i className="ri-alert-line"></i> 0
                              </span>
                            ) : (
                              <span className="text-gray-700">{prs}</span>
                            )}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {prs === 0 ? (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold text-orange-700 bg-orange-50">
                                <i className="ri-error-warning-line"></i> Sin PRs
                              </span>
                            ) : (
                              <span className={`inline-flex px-2 py-1 rounded-lg text-xs font-semibold ${getColorByGrade(notaPrs)}`}>
                                {notaPrs}
                              </span>
                            )}
                          </td>
                          <td className="px-3 py-3 text-center rounded-r-lg">
                            {est.primeraVuelta ? (
                              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700">
                                🚨 F1
                              </span>
                            ) : (
                              <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                                ✓ OK
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* VISTA INDIVIDUAL */}
        {vista === 'individual' && (
          <section className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {estudiantesFiltrados.map((est) => {
                const prs = getContribucionesPorNombre(est.nombre);
                const notaPrs = calcularNotaPRs(est.nombre, est.equipoId);
                const team = onlyTeams.find((t) => t.id === est.equipoId);
                const porcentajeExamen = Math.round(est.calificacionExamenes * 0.3);
                const porcentajePRs = Math.round(notaPrs * 0.2);
                const porcentajeAuto = calcularPuntosAutoevaluacion(est.nombre, est.equipoId);
                const evProyecto = getProyectoEvaluacion(est.equipoId);
                const porcentajeProyecto = prs === 0 ? 0 : (evProyecto ? evProyecto.calificacion : 0);

                return (
                  <div
                    key={est.nombre}
                    className={`rounded-2xl p-5 shadow-lg border ${
                      est.primeraVuelta ? 'bg-rose-50 border-rose-200' : 'bg-white border-amber-100'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-[#1b3d70] text-sm leading-tight">{est.nombre}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Equipo {est.equipoId} - {getNombreEquipo(est.equipoId)}
                        </p>
                      </div>
                      {est.primeraVuelta && (
                        <span className="inline-flex px-2 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 whitespace-nowrap">
                          F1
                        </span>
                      )}
                    </div>

                    {/* Exámenes */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200 p-2 text-center">
                        <div className="text-xs text-gray-500">Exam 1</div>
                        <div className="font-bold text-[#1b3d70]">{est.examen1}</div>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200 p-2 text-center">
                        <div className="text-xs text-gray-500">Exam 2</div>
                        <div className="font-bold text-[#1b3d70]">{est.examen2}</div>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200 p-2 text-center">
                        <div className="text-xs text-gray-500">Exam 3</div>
                        <div className="font-bold text-[#1b3d70]">{est.examen3}</div>
                      </div>
                      <div className={`rounded-lg p-2 text-center ${getColorByGrade(est.calificacionExamenes)} border`}>
                        <div className="text-xs opacity-80">Promedio</div>
                        <div className="font-bold">{est.calificacionExamenes}</div>
                      </div>
                    </div>

                    {/* Desglose calificación */}
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">30% Exámenes:</span>
                        <span className="font-semibold text-indigo-700">{porcentajeExamen} pts</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">20% PRs ({prs} contribuciones):</span>
                        {prs === 0 ? (
                          <span className="font-semibold text-orange-600 flex items-center gap-1">
                            <i className="ri-error-warning-line"></i> Sin PRs
                          </span>
                        ) : (
                          <span className="font-semibold text-cyan-700">{porcentajePRs} pts</span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">20% Autoevaluación:</span>
                        {porcentajeAuto > 0 ? (
                          <span className="font-semibold text-emerald-700">{porcentajeAuto} pts</span>
                        ) : (
                          <span className="font-semibold text-amber-600">Pendiente</span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">30% Proyecto Vercel:</span>
                        {evProyecto ? (
                          <span className="font-semibold text-purple-700">{porcentajeProyecto} pts</span>
                        ) : (
                          <span className="font-semibold text-amber-600">Pendiente</span>
                        )}
                      </div>
                      <div className="border-t border-slate-200 pt-2 flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">Calificación actual:</span>
                        <span className={`font-bold text-lg ${getColorByGrade(calcularCalificacionFinal(est.nombre, est.equipoId))}`}>{calcularCalificacionFinal(est.nombre, est.equipoId)}</span>
                      </div>
                    </div>

                    {/* Team info */}
                    {team && (
                      <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap gap-3">
                        <a
                          href={team.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          <i className="ri-github-fill"></i>
                          {team.githubUrl.replace('https://github.com/', '')}
                        </a>
                        {getVercelUrl(est.equipoId) && (
                          <a
                            href={getVercelUrl(est.equipoId)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <i className="ri-global-line"></i>
                            Vercel
                          </a>
                        )}
                      </div>
                    )}

                    {est.tareasNoEntregadas.length > 0 && (
                      <div className="mt-2 text-xs text-rose-600 bg-rose-50 rounded-lg p-2">
                        ⚠️ {est.motivoPrimeraVuelta}
                      </div>
                    )}

                    {/* Botón confirmar calificación con verificación de correo */}
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      {verifiedStudents[est.nombre] ? (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&to=diegoromemora27@gmail.com&su=${encodeURIComponent('Confirmación de calificación')}&body=${encodeURIComponent(`Yo, ${est.nombre}, estoy de acuerdo con la calificación asignada.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors cursor-pointer"
                        >
                          <i className="ri-mail-send-line"></i>
                          Confirmar calificación
                        </a>
                      ) : (
                        <div className="space-y-2">
                          <label className="text-xs text-gray-600 font-medium">Ingresa tu correo del SEA para verificar tu calificación:</label>
                          <div className="flex gap-2">
                            <input
                              type="email"
                              placeholder="tucorreo@delSea.com"
                              value={emailInputs[est.nombre] || ''}
                              onChange={(e) => setEmailInputs((prev) => ({ ...prev, [est.nombre]: e.target.value }))}
                              className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                            />
                            <button
                              onClick={() => handleVerifyEmail(est.nombre)}
                              className="px-3 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
                            >
                              Verificar
                            </button>
                          </div>
                          {emailErrors[est.nombre] && (
                            <p className="text-xs text-red-600 font-medium">{emailErrors[est.nombre]}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Sección Pendientes */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
            <h2 className="text-2xl font-bold text-[#1b3d70] mb-5 flex items-center gap-2">
              <i className="ri-time-line text-amber-600"></i>
              Evaluaciones Pendientes (70% - Trabajo en Equipo)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Autoevaluación */}
              <div className="rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                    <i className="ri-user-star-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-700">20% Autoevaluación</h3>
                    <p className="text-xs text-emerald-600">Formulario individual</p>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 mb-4">
                  Cada estudiante debe responder el formulario de autoevaluación para completar este porcentaje.
                </p>
                <a
                  href={FORM_AUTOEVALUACION}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors w-full justify-center"
                >
                  <i className="ri-external-link-line"></i>
                  Abrir Formulario
                </a>
              </div>

              {/* PRs / Desempeño Individual */}
              <div className="rounded-2xl border-2 border-cyan-300 bg-cyan-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
                    <i className="ri-git-pull-request-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-700">20% Desempeño / PRs</h3>
                    <p className="text-xs text-cyan-600">Basado en contribuciones</p>
                  </div>
                </div>
                <p className="text-sm text-cyan-700 mb-4">
                  Calificación proporcional a la cantidad de PRs cerradas registradas en la sección de contribuciones.
                </p>
                <button
                  onClick={() => window.REACT_APP_NAVIGATE('/analisis-equipos/contribuciones')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-semibold hover:bg-cyan-700 transition-colors w-full justify-center cursor-pointer"
                >
                  <i className="ri-funds-box-line"></i>
                  Ver Contribuciones
                </button>
              </div>

              {/* Proyecto Vercel */}
              <div className="rounded-2xl border-2 border-purple-300 bg-purple-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-500 text-white flex items-center justify-center">
                    <i className="ri-global-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-700">30% Proyecto Vercel</h3>
                    <p className="text-xs text-purple-600">Revisión por equipo</p>
                  </div>
                </div>
                <p className="text-sm text-purple-700 mb-4">
                  Revisión del proyecto desplegado en Vercel. {proyectoEvaluaciones.length} de 10 equipos evaluados.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-semibold w-full justify-center">
                  <i className="ri-check-double-line"></i>
                  {proyectoEvaluaciones.length}/10 equipos evaluados
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluaciones de Proyecto por Equipo — solo visible con filtro de equipo */}
        {selectedTeamId !== 'all' && (
        <section className="mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
            <h2 className="text-2xl font-bold text-[#1b3d70] mb-2 flex items-center gap-2">
              <i className="ri-global-line text-purple-600"></i>
              Evaluación del Proyecto — {getNombreEquipo(selectedTeamId)} (30%)
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Calificación sobre 30 puntos. Se muestran los comentarios de la revisión del proyecto desplegado.
            </p>

            <div className="grid grid-cols-1 gap-5">
              {[selectedTeamId].map((eqId) => {
                const ev = getProyectoEvaluacion(eqId);
                const vercelUrl = getVercelUrl(eqId);
                return (
                  <div
                    key={eqId}
                    className={`rounded-2xl border-2 p-5 transition-colors ${
                      ev
                        ? ev.calificacion >= 25
                          ? 'border-emerald-200 bg-emerald-50/50'
                          : ev.calificacion >= 20
                            ? 'border-blue-200 bg-blue-50/50'
                            : ev.calificacion >= 15
                              ? 'border-amber-200 bg-amber-50/50'
                              : 'border-rose-200 bg-rose-50/50'
                        : 'border-dashed border-gray-200 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold ${
                          ev
                            ? ev.calificacion >= 25 ? 'bg-emerald-500'
                              : ev.calificacion >= 20 ? 'bg-blue-500'
                                : ev.calificacion >= 15 ? 'bg-amber-500'
                                  : 'bg-rose-500'
                            : 'bg-gray-400'
                        }`}>
                          {eqId}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1b3d70] text-sm">{getNombreEquipo(eqId)}</h3>
                          <p className="text-xs text-gray-500">Equipo {eqId}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {ev ? (
                          <div className={`text-2xl font-black ${
                            ev.calificacion >= 25 ? 'text-emerald-700'
                              : ev.calificacion >= 20 ? 'text-blue-700'
                                : ev.calificacion >= 15 ? 'text-amber-700'
                                  : 'text-rose-700'
                          }`}>
                            {ev.calificacion}<span className="text-sm font-semibold text-gray-400">/30</span>
                          </div>
                        ) : (
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-medium">Pendiente</span>
                        )}
                      </div>
                    </div>

                    {ev && ev.comentarios.length > 0 && (
                      <div className="mt-3 space-y-1.5">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Observaciones:</p>
                        {ev.comentarios.map((c, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <i className="ri-close-circle-fill text-rose-400 mt-0.5 shrink-0"></i>
                            <span className="text-gray-700">{c}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {ev && ev.comentarios.length === 0 && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600">
                        <i className="ri-checkbox-circle-fill"></i>
                        <span>Sin observaciones negativas</span>
                      </div>
                    )}

                    {!ev && (
                      <p className="text-sm text-gray-400 mt-2 italic">Evaluación pendiente de revisión</p>
                    )}

                    {vercelUrl && (
                      <a
                        href={vercelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                      >
                        <i className="ri-external-link-line"></i>
                        Ver proyecto en Vercel
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        )}
      </main>
    </div>
  );
}

function StatCard({
  label,
  icon,
  value,
  tone,
}: {
  label: string;
  icon: string;
  value: number | string;
  tone: 'amber' | 'indigo' | 'emerald' | 'rose';
}) {
  const toneMap: Record<string, string> = {
    amber: 'from-amber-500 to-amber-600',
    indigo: 'from-indigo-500 to-indigo-600',
    emerald: 'from-emerald-500 to-emerald-600',
    rose: 'from-rose-500 to-rose-600',
  };

  return (
    <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-4">
      <div className="flex items-center gap-3">
        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${toneMap[tone]} text-white flex items-center justify-center`}>
          <i className={`${icon} text-xl`} />
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-[#1b3d70]">{value}</p>
        </div>
      </div>
    </div>
  );
}
