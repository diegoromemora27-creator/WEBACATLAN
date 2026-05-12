import { useEffect, useMemo, useState } from 'react';
import {
  equiposContribuciones,
  getContribucionesTotales,
  getIntegrantesTotales,
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

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getEstadoColor = (estado: string): string => {
  const normalized = estado.toLowerCase();
  if (normalized.includes('review')) return 'text-orange-700 bg-orange-100';
  if (normalized.includes('approved')) return 'text-green-700 bg-green-100';
  return 'text-gray-700 bg-gray-100';
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
  const [simuladorBase, setSimuladorBase] = useState<number>(8.75);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalContribuciones = getContribucionesTotales();
  const totalIntegrantes = getIntegrantesTotales();

  const teamStats = useMemo(
    () => equiposContribuciones.map((team) => buildTeamStats(team)).sort((a, b) => b.totalContribuciones - a.totalContribuciones),
    []
  );

  const rankingUsuarios = useMemo<UsuarioStats[]>(() => {
    const usuarios = equiposContribuciones.flatMap((team) => {
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
  }, [totalContribuciones]);

  const topUsuarios = rankingUsuarios.slice(0, 5);

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

        <section className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard label="Equipos" icon="ri-team-line" value={equiposContribuciones.length} tone="cyan" />
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
              Top 5 contribuyentes
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
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-cyan-100">
            <h2 className="text-xl font-bold text-[#1b3d70] mb-4 flex items-center gap-2">
              <i className="ri-calculator-line text-indigo-600"></i>
              Simulador de reparto de nota
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Ajusta una nota base del equipo y revisa la propuesta por usuario con la fórmula:
              <span className="font-mono text-[#1b3d70]"> nota_base × (% aporte real / % aporte ideal)</span>
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
              <label htmlFor="nota-base" className="text-sm font-semibold text-[#1b3d70] block mb-2">
                Nota base del sprint por equipo (0 a 10)
              </label>
              <input
                id="nota-base"
                type="number"
                min={0}
                max={10}
                step={0.1}
                value={simuladorBase}
                onChange={(e) => setSimuladorBase(clamp(Number(e.target.value || 0), 0, 10))}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-[#1b3d70] font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                Si el usuario aporta más que el ideal de su equipo, su nota sugerida sube.
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-checkbox-circle-line text-emerald-600 mt-0.5"></i>
                Si aporta menos que el ideal, su nota sugerida baja proporcionalmente.
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-alert-line text-amber-600 mt-0.5"></i>
                Es una referencia cuantitativa. Puedes combinarla con calidad del código y revisión técnica.
              </li>
            </ul>
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

                      <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                        <Badge label="Total" value={`${team.totalContribuciones} commits`} tone="cyan" />
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
                            <th className="px-3 py-2 text-center">Nota Sugerida</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usuarios.map((user) => {
                            const proposedScore = clamp(
                              simuladorBase * (user.shareEquipo / Math.max(user.idealShareEquipo, 0.01)),
                              0,
                              10
                            );

                            return (
                              <tr key={user.usuario} className="bg-white shadow-sm">
                                <td className="px-3 py-3 rounded-l-lg">
                                  <div className="font-semibold text-[#1b3d70]">{user.usuario}</div>
                                  <div className="text-xs text-gray-500">{user.rol}</div>
                                </td>
                                <td className="px-3 py-3 text-center font-semibold text-gray-800">{user.contribuciones}</td>
                                <td className="px-3 py-3 text-center">
                                  <div className="font-semibold text-cyan-700">{numberFormatter.format(user.shareEquipo)}%</div>
                                  <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
                                    <div
                                      className="bg-cyan-500 h-2 rounded-full"
                                      style={{ width: `${clamp(user.shareEquipo, 0, 100)}%` }}
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
                                <td className="px-3 py-3 text-center rounded-r-lg">
                                  <span className="font-bold text-indigo-700 text-lg">
                                    {numberFormatter.format(proposedScore)}
                                  </span>
                                  <div className="text-xs text-gray-500">sobre 10</div>
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
