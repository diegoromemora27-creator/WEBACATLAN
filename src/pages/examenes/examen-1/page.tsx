import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Examen1() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Animación de puntos (score)
    const interval = setInterval(() => {
      setScore(prev => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const conceptos = [
    {
      id: 1,
      tema: "DevOps & Containerización",
      puntos: [
        "¿Qué es DevOps y cuáles son sus principios fundamentales?",
        "Diferencias entre contenedores y máquinas virtuales",
        "Comandos básicos de Docker (build, run, push, pull)",
        "¿Qué es un Dockerfile y cómo se estructura?",
        "CI/CD: Conceptos y beneficios"
      ],
      color: "#00FFFF"
    },
    {
      id: 2,
      tema: "Metodologías Ágiles",
      puntos: [
        "Principios del Manifiesto Ágil",
        "Diferencias entre Scrum y Kanban",
        "Roles en Scrum: Product Owner, Scrum Master, Development Team",
        "Artefactos: Product Backlog, Sprint Backlog, Increment",
        "Ceremoniasde Scrum"
      ],
      color: "#FFA500"
    },
    {
      id: 3,
      tema: "Control de Versiones (Git)",
      puntos: [
        "Comandos básicos: clone, add, commit, push, pull",
        "Branching strategies: Git Flow",
        "Resolución de conflictos",
        "¿Qué es un Pull Request?",
        "Diferencia entre merge y rebase"
      ],
      color: "#FF0000"
    },
    {
      id: 4,
      tema: "Arquitectura de Software",
      puntos: [
        "Patrones arquitectónicos: Monolítico vs Microservicios",
        "Principios SOLID",
        "Arquitectura en capas (Layered Architecture)",
        "Escalabilidad: Horizontal vs Vertical",
        "¿Qué es un API Gateway?"
      ],
      color: "#FFB8FF"
    },
    {
      id: 5,
      tema: "Backend & APIs",
      puntos: [
        "Principios REST",
        "Métodos HTTP: GET, POST, PUT, PATCH, DELETE",
        "Códigos de estado HTTP (200, 201, 400, 401, 404, 500)",
        "¿Qué es una API RESTful?",
        "Asincronía: Promesas, async/await"
      ],
      color: "#FFFF00"
    }
  ];

  const formatosPreguntas = [
    {
      tipo: "Opción Múltiple",
      descripcion: "Pregunta con 4 opciones, solo una correcta",
      ejemplo: "¿Cuál de los siguientes NO es un principio de DevOps? a) Automatización b) Colaboración c) Cascada d) Monitoreo",
      puntos: "1 punto"
    },
    {
      tipo: "Verdadero/Falso",
      descripcion: "Afirmación que debe evaluarse como verdadera o falsa",
      ejemplo: "Docker utiliza virtualización a nivel de hardware. (V/F)",
      puntos: "0.5 puntos"
    },
    {
      tipo: "Pregunta Abierta Corta",
      descripcion: "Respuesta breve (2-3 líneas máximo)",
      ejemplo: "Explica brevemente qué es un contenedor Docker.",
      puntos: "2 puntos"
    },
    {
      tipo: "Relacionar Columnas",
      descripcion: "Emparejar conceptos de dos columnas",
      ejemplo: "Relaciona el comando Git con su función",
      puntos: "1.5 puntos"
    }
  ];

  const reglas = [
    {
      icon: "🎮",
      titulo: "Duración",
      descripcion: "60 minutos totales"
    },
    {
      icon: "📱",
      titulo: "Material Permitido",
      descripcion: "Solo lápiz/pluma. NO dispositivos electrónicos"
    },
    {
      icon: "👤",
      titulo: "Trabajo Individual",
      descripcion: "Examen completamente individual, sin colaboración"
    },
    {
      icon: "✍️",
      titulo: "Formato",
      descripcion: "Examen escrito en formato presencial"
    },
    {
      icon: "⚡",
      titulo: "Puntuación",
      descripcion: "Total: 100 puntos. Mínimo aprobatorio: 60 puntos"
    },
    {
      icon: "🎯",
      titulo: "Concentración",
      descripcion: "Lee cada pregunta cuidadosamente antes de responder"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000033] via-[#000066] to-[#000033] relative overflow-hidden">
      {/* Efecto de puntos estilo Pac-Man en el fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 p-8">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Header con estilo arcade */}
      <div className="relative z-10 bg-black border-b-4 border-yellow-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="mb-4 flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-all transform hover:scale-105 font-mono text-sm"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span>VOLVER AL INICIO</span>
          </button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-6xl animate-bounce" style={{ animationDuration: '1s' }}>🎮</span>
                <h1 className="text-4xl md:text-6xl font-black text-yellow-400 tracking-wider font-mono drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]">
                  EXAMEN 1
                </h1>
              </div>
              <p className="text-lg md:text-xl text-cyan-400 font-mono animate-pulse">
                &gt; GUÍA DE ESTUDIO - NIVEL 1
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 rounded-lg border-4 border-yellow-400 transform hover:scale-105 transition-all">
              <div className="text-yellow-400 font-mono text-sm mb-1">SCORE</div>
              <div className="text-4xl font-black text-white font-mono">{score}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Información del Examen */}
        <div className="mb-12 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-2xl p-1 shadow-2xl">
          <div className="bg-black rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📅</span>
              <h2 className="text-3xl md:text-4xl font-black text-yellow-400 font-mono tracking-wider">
                INFORMACIÓN DEL EXAMEN
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-6 border-4 border-cyan-400 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">📆</span>
                  <h3 className="text-xl font-bold text-white font-mono">FECHA TENTATIVA</h3>
                </div>
                <p className="text-cyan-100 text-lg font-mono">Semana del 15-19 de Marzo, 2026</p>
                <p className="text-cyan-200 text-sm mt-2 font-mono">* Fecha sujeta a cambios - se confirmará con anticipación</p>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-6 border-4 border-orange-400 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">⏰</span>
                  <h3 className="text-xl font-bold text-white font-mono">DURACIÓN</h3>
                </div>
                <p className="text-orange-100 text-lg font-mono">60 minutos</p>
                <p className="text-orange-200 text-sm mt-2 font-mono">+ 5 minutos de tolerancia para entrega</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conceptos a Estudiar */}
        <div className="mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl p-1 shadow-2xl">
          <div className="bg-black rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">📚</span>
              <h2 className="text-3xl md:text-4xl font-black text-pink-400 font-mono tracking-wider">
                CONCEPTOS CLAVE
              </h2>
            </div>

            <div className="grid gap-6">
              {conceptos.map((concepto, index) => (
                <div
                  key={concepto.id}
                  className="bg-gradient-to-r rounded-xl p-1 shadow-lg transform hover:scale-[1.02] transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${concepto.color}40, ${concepto.color}80)`
                  }}
                >
                  <div className="bg-black rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-black text-black font-mono border-4"
                        style={{
                          background: concepto.color,
                          borderColor: concepto.color
                        }}
                      >
                        {index + 1}
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-bold font-mono"
                        style={{ color: concepto.color }}
                      >
                        {concepto.tema}
                      </h3>
                    </div>

                    <ul className="space-y-3 ml-4">
                      {concepto.puntos.map((punto, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <span
                            className="mt-1 text-lg group-hover:scale-125 transition-transform"
                            style={{ color: concepto.color }}
                          >
                            ●
                          </span>
                          <span className="text-white font-mono text-sm md:text-base flex-1 group-hover:text-gray-200 transition-colors">
                            {punto}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formato de Preguntas */}
        <div className="mb-12 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 rounded-2xl p-1 shadow-2xl">
          <div className="bg-black rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">❓</span>
              <h2 className="text-3xl md:text-4xl font-black text-green-400 font-mono tracking-wider">
                FORMATOS DE PREGUNTAS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {formatosPreguntas.map((formato, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl p-6 border-4 border-cyan-400 hover:border-green-400 transform hover:scale-105 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-cyan-300 font-mono">
                      {formato.tipo}
                    </h3>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-black font-mono">
                      {formato.puntos}
                    </span>
                  </div>
                  
                  <p className="text-cyan-100 mb-3 text-sm font-mono">
                    {formato.descripcion}
                  </p>
                  
                  <div className="bg-black/50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-white text-sm font-mono italic">
                      "{formato.ejemplo}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reglas del Examen */}
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-2xl p-1 shadow-2xl">
          <div className="bg-black rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">⚠️</span>
              <h2 className="text-3xl md:text-4xl font-black text-red-400 font-mono tracking-wider">
                REGLAS DEL EXAMEN
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reglas.map((regla, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-600 to-red-700 rounded-xl p-6 border-4 border-yellow-400 transform hover:scale-105 hover:rotate-1 transition-all"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3 animate-bounce" style={{ animationDuration: `${1 + index * 0.2}s` }}>
                      {regla.icon}
                    </div>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2 font-mono">
                      {regla.titulo}
                    </h3>
                    <p className="text-orange-100 text-sm font-mono">
                      {regla.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mensaje de ánimo final */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 border-4 border-yellow-400 text-center">
              <p className="text-2xl md:text-3xl font-black text-yellow-300 mb-2 font-mono animate-pulse">
                🌟 ¡READY PLAYER ONE! 🌟
              </p>
              <p className="text-white text-lg font-mono">
                Estudia estos conceptos y estarás listo para el examen
              </p>
              <p className="text-cyan-300 text-sm mt-2 font-mono">
                &gt; GAME LEVEL: BEGINNER | REWARD: MAX SCORE POSSIBLE
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Decoración lateral - Ghosts estilo Pac-Man */}
      <div className="fixed bottom-8 right-8 hidden lg:flex flex-col gap-4 z-50">
        <div className="text-5xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>👻</div>
        <div className="text-5xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>👻</div>
        <div className="text-5xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>👻</div>
      </div>

      {/* Pac-Man decorativo */}
      <div className="fixed bottom-8 left-8 hidden lg:block">
        <div className="text-6xl animate-pulse">🎮</div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
