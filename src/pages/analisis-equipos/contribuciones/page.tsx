import { useEffect, useMemo, useState } from 'react';
import {
  equiposContribuciones,
  type TeamContribuciones,
} from '../data/teamsContributionsData';

interface UsuarioStats {
  usuario: string;
  equipo: number;
  contribuciones: number;
  rol: string;
  estado: string;
  shareEquipo: number;
  shareGlobal: number;
  idealShareEquipo: number;
  deltaEquidad: number;
}

interface TeamStats {
  equipo: number;
  integrantes: number;
  totalContribuciones: number;
  promedioPorIntegrante: number;
  maxContribuciones: number;
  minContribuciones: number;
  dispersion: number;
}

const numberFormatter = new Intl.NumberFormat('es-MX', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const getEstadoColor = (estado: string): string => {
  const normalized = estado.toLowerCase();
  if (normalized.includes('review')) return 'text-orange-700 bg-orange-100';
  if (normalized.includes('approved')) return 'text-green-700 bg-green-100';
  return 'text-gray-700 bg-gray-100';
};

const getContributionScale = (shareEquipo: number, idealShareEquipo: number) => {
  const tolerance = 0.1;

  if (shareEquipo > idealShareEquipo + tolerance) {
    return {
      text: 'text-emerald-700',
      bar: 'bg-emerald-500',
    };
  }

  if (Math.abs(shareEquipo - idealShareEquipo) <= tolerance) {
    return {
      text: 'text-blue-700',
      bar: 'bg-blue-500',
    };
  }

  return {
    text: 'text-amber-700',
    bar: 'bg-amber-500',
  };
};

const buildTeamStats = (team: TeamContribuciones): TeamStats => {
  const values = team.integrantes.map((i) => i.contribuciones);
  const total = values.reduce((sum, value) => sum + value, 0);
  const integrantes = team.integrantes.length;
  const promedio = integrantes > 0 ? total / integrantes : 0;
  const max = values.length ? Math.max(...values) : 0;
  const min = values.length ? Math.min(...values) : 0;

  return {
    equipo: team.equipo,
    integrantes,
    totalContribuciones: total,
    promedioPorIntegrante: promedio,
    maxContribuciones: max,
    minContribuciones: min,
    dispersion: max - min,
  };
};

export default function AnalisisContribucionesPage() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | 'all'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equiposFiltrados = useMemo(
    () =>
      selectedTeamId === 'all'
        ? equiposContribuciones
        : equiposContribuciones.filter((team) => team.equipo === selectedTeamId),
    [selectedTeamId]
  );

  const totalContribuciones = useMemo(
    () =>
      equiposFiltrados.reduce(
        (total, team) => total + team.integrantes.reduce((sum, member) => sum + member.contribuciones, 0),
        0
      ),
    [equiposFiltrados]
  );

  const totalIntegrantes = useMemo(
    () => equiposFiltrados.reduce((total, team) => total + team.integrantes.length, 0),
    [equiposFiltrados]
  );

  const teamStats = useMemo(
    () => equiposFiltrados.map((team) => buildTeamStats(team)).sort((a, b) => b.totalContribuciones - a.totalContribuciones),
    [equiposFiltrados]
  );

  const rankingUsuarios = useMemo<UsuarioStats[]>(() => {
    const usuarios = equiposFiltrados.flatMap((team) => {
      const teamTotal = team.integrantes.reduce((sum, member) => sum + member.contribuciones, 0);
      const idealShare = team.integrantes.length > 0 ? 100 / team.integrantes.length : 0;

      return team.integrantes.map((member) => {
        const shareEquipo = teamTotal > 0 ? (member.contribuciones / teamTotal) * 100 : 0;
        const shareGlobal = totalContribuciones > 0 ? (member.contribuciones / totalContribuciones) * 100 : 0;
        return {
          usuario: member.usuario,
          equipo: team.equipo,
          contribuciones: member.contribuciones,
          rol: member.rol,
          estado: member.estado,
          shareEquipo,
          shareGlobal,
          idealShareEquipo: idealShare,
          deltaEquidad: shareEquipo - idealShare,
        };
      });
    });

    return usuarios.sort((a, b) => b.contribuciones - a.contribuciones || b.shareEquipo - a.shareEquipo);
  }, [equiposFiltrados, totalContribuciones]);

  const topUsuarios = rankingUsuarios.slice(0, 5);
  const selectedTeamData =
    selectedTeamId === 'all' ? null : equiposContribuciones.find((team) => team.equipo === selectedTeamId) ?? null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-indigo-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/analisis-equipos/sprint-1')}
            className="flex items-center space-x-2 text-[#1b3d70] hover:text-[#0e7490] transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-semibold text-sm">Volver a Sprint 1</span>
          </button>

          <div className="flex items-center space-x-3">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-12 w-auto"
            />
            <div className="text-[#1b3d70]">
              <div className="font-bold text-base leading-tight">Dashboard de Contribuciones</div>
              <div className="text-xs opacity-70">Distribución justa por usuario</div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-cyan-100">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1b3d70] mb-4 flex items-center gap-3">
              <i className="ri-funds-box-line text-cyan-600"></i>
              Análisis de contribuciones por usuario
            </h1>
            <p className="text-gray-600 max-w-3xl">
              Este tablero usa las contribuciones registradas en GitHub por integrante para generar
              una propuesta de distribución de calificación más equitativa dentro de cada equipo.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-cyan-100">
            <h2 className="text-lg sm:text-xl font-bold text-[#1b3d70] mb-4 flex items-center gap-2">
              <i className="ri-filter-3-line text-cyan-600"></i>
              Filtrar equipo a analizar
            </h2>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedTeamId('all')}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  selectedTeamId === 'all'
                    ? 'bg-cyan-600 text-white border-cyan-600'
                    : 'bg-white text-[#1b3d70] border-slate-300 hover:border-cyan-500 hover:text-cyan-700'
                }`}
              >
                Todos los equipos
              </button>
              {equiposContribuciones.map((team) => (
                <button
                  key={team.equipo}
                  onClick={() => setSelectedTeamId(team.equipo)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    selectedTeamId === team.equipo
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-[#1b3d70] border-slate-300 hover:border-indigo-500 hover:text-indigo-700'
                  }`}
                >
                  Equipo {team.equipo}
                </button>
              ))}
            </div>

            {selectedTeamData && (
              <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-sm text-indigo-700 font-semibold">Mostrando información del Equipo {selectedTeamData.equipo}</p>
                  <p className="text-xs text-indigo-600">Al seleccionar un team, el dashboard sustituye la información global por ese equipo.</p>
                </div>
                <a
                  href={selectedTeamData.github_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                  <i className="ri-github-fill"></i>
                  Ver código en GitHub
                  <i className="ri-external-link-line"></i>
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard label="Equipos" icon="ri-team-line" value={equiposFiltrados.length} tone="cyan" />
          <StatCard label="Integrantes" icon="ri-user-line" value={totalIntegrantes} tone="blue" />
          <StatCard label="Contribuciones" icon="ri-git-commit-line" value={totalContribuciones} tone="indigo" />
          <StatCard
            label="Promedio Global"
            icon="ri-line-chart-line"
            value={numberFormatter.format(totalContribuciones / Math.max(totalIntegrantes, 1))}
            tone="emerald"
          />
        </section>

        <section className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-cyan-100">
            <h2 className="text-xl font-bold text-[#1b3d70] mb-5 flex items-center gap-2">
              <i className="ri-trophy-line text-amber-500"></i>
              {selectedTeamData ? `Top contribuyentes - Equipo ${selectedTeamData.equipo}` : 'Top 5 contribuyentes'}
            </h2>
            <div className="space-y-4">
              {topUsuarios.map((user, index) => (
                <div key={user.usuario} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div>
                      <p className="font-semibold text-[#1b3d70]">
                        #{index + 1} {user.usuario}
                      </p>
                      <p className="text-sm text-gray-600">Equipo {user.equipo}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getEstadoColor(user.estado)}`}>
                      {user.estado}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <MetricMini label="Commits" value={user.contribuciones} />
                    <MetricMini label="% Equipo" value={`${numberFormatter.format(user.shareEquipo)}%`} />
                    <MetricMini label="% Global" value={`${numberFormatter.format(user.shareGlobal)}%`} />
                  </div>
                </div>
              ))}
              {topUsuarios.length === 0 && (
                <div className="text-sm text-gray-500 bg-slate-50 rounded-xl border border-slate-200 p-4">
                  No hay datos de contribuciones para el filtro seleccionado.
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-cyan-100">
            <h2 className="text-xl font-bold text-[#1b3d70] mb-4 flex items-center gap-2">
              <i className="ri-information-line text-indigo-600"></i>
              Criterio de evaluación final
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                El delta de equidad muestra qué tan arriba o abajo está cada integrante respecto al aporte ideal del equipo.
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                Delta positivo: aporta más que el ideal. Delta negativo: aporta menos que el ideal.
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-alert-line text-amber-600 mt-0.5"></i>
                Esta métrica es referencia cuantitativa de contribución, no una calificación final automática.
              </li>
            </ul>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-semibold flex items-center gap-2 mb-1">
                <i className="ri-shield-check-line"></i>
                Leyenda importante
              </p>
              <p>
                Luego hay una revisión de calidad de PRs por el profesor para determinar la nota final.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg border border-cyan-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-[#1b3d70] flex items-center gap-2">
                <i className="ri-group-2-line text-cyan-600"></i>
                Distribución por equipo
              </h2>
            </div>

            <div className="p-6 space-y-8">
              {teamStats.map((team) => {
                const usuarios = rankingUsuarios.filter((u) => u.equipo === team.equipo);

                return (
                  <article key={team.equipo} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1b3d70]">Equipo {team.equipo}</h3>
                        <p className="text-sm text-gray-600">{team.integrantes} integrantes</p>
                      </div>

                      <a
                        href={equiposContribuciones.find((item) => item.equipo === team.equipo)?.github_repo || 'https://github.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
                      >
                        <i className="ri-github-fill"></i>
                        Código GitHub
                      </a>

                      <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                        <Badge label="Total" value={`${team.totalContribuciones} PRS`} tone="cyan" />
                        <Badge label="Promedio" value={numberFormatter.format(team.promedioPorIntegrante)} tone="blue" />
                        <Badge label="Brecha" value={numberFormatter.format(team.dispersion)} tone="amber" />
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[720px] border-separate border-spacing-y-2">
                        <thead>
                          <tr className="text-left text-xs uppercase tracking-wider text-slate-500">
                            <th className="px-3 py-2">Usuario</th>
                            <th className="px-3 py-2 text-center">Contribuciones</th>
                            <th className="px-3 py-2 text-center">% Equipo</th>
                            <th className="px-3 py-2 text-center">% Ideal</th>
                            <th className="px-3 py-2 text-center">Delta Equidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usuarios.map((user) => {
                            const contributionScale = getContributionScale(user.shareEquipo, user.idealShareEquipo);

                            return (
                              <tr key={user.usuario} className="bg-white shadow-sm">
                                <td className="px-3 py-3 rounded-l-lg">
                                  <div className="font-semibold text-[#1b3d70]">{user.usuario}</div>
                                  <div className="text-xs text-gray-500">{user.rol}</div>
                                </td>
                                <td className="px-3 py-3 text-center font-semibold text-gray-800">{user.contribuciones}</td>
                                <td className="px-3 py-3 text-center">
                                  <div className={`font-semibold ${contributionScale.text}`}>{numberFormatter.format(user.shareEquipo)}%</div>
                                  <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
                                    <div
                                      className={`${contributionScale.bar} h-2 rounded-full`}
                                      style={{ width: `${Math.min(Math.max(user.shareEquipo, 0), 100)}%` }}
                                    />
                                  </div>
                                </td>
                                <td className="px-3 py-3 text-center text-gray-700">
                                  {numberFormatter.format(user.idealShareEquipo)}%
                                </td>
                                <td className="px-3 py-3 text-center">
                                  <span
                                    className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                                      user.deltaEquidad >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                                    }`}
                                  >
                                    {user.deltaEquidad >= 0 ? '+' : ''}
                                    {numberFormatter.format(user.deltaEquidad)}%
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
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
  tone: 'cyan' | 'blue' | 'indigo' | 'emerald';
}) {
  const toneMap: Record<string, string> = {
    cyan: 'from-cyan-500 to-cyan-600',
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600',
    emerald: 'from-emerald-500 to-emerald-600',
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

function MetricMini({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-semibold text-[#1b3d70]">{value}</div>
    </div>
  );
}

function Badge({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'cyan' | 'blue' | 'amber';
}) {
  const toneMap: Record<string, string> = {
    cyan: 'bg-cyan-100 text-cyan-700',
    blue: 'bg-blue-100 text-blue-700',
    amber: 'bg-amber-100 text-amber-700',
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full font-semibold ${toneMap[tone]}`}>
      <span className="opacity-80">{label}:</span>
      <span>{value}</span>
    </span>
  );
}
