import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1b3d70] to-[#0f2847] flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating code symbols */}
        <div className="absolute top-[10%] left-[5%] text-[#bb8800]/10 text-6xl font-mono animate-pulse select-none">&lt;/&gt;</div>
        <div className="absolute top-[20%] right-[10%] text-[#bb8800]/10 text-5xl font-mono animate-pulse select-none" style={{ animationDelay: '1s' }}>&#123; &#125;</div>
        <div className="absolute bottom-[15%] left-[15%] text-[#bb8800]/10 text-4xl font-mono animate-pulse select-none" style={{ animationDelay: '2s' }}>npm run 404</div>
        <div className="absolute bottom-[30%] right-[5%] text-[#bb8800]/10 text-5xl font-mono animate-pulse select-none" style={{ animationDelay: '0.5s' }}>git checkout --lost</div>
        <div className="absolute top-[60%] left-[60%] text-[#bb8800]/10 text-3xl font-mono animate-pulse select-none" style={{ animationDelay: '1.5s' }}>404: route not found</div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* UNAM Logo area */}
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
            <img
              src="https://static.readdy.ai/image/f0504b97139bc354dc5720a1b109b5af/be47f2a0a2638e93881bb6a05d2eb8d4.png"
              alt="UNAM FES Acatlán"
              className="h-14 w-auto"
            />
          </div>
        </div>

        {/* 404 number */}
        <div className="relative mb-4">
          <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter bg-gradient-to-b from-[#bb8800] via-[#d4a017] to-[#bb8800]/40 bg-clip-text text-transparent select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter text-[#bb8800]/5 blur-2xl select-none">
            404
          </div>
        </div>

        {/* Terminal-style error */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 mb-8 text-left shadow-2xl mx-auto max-w-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-2 text-xs text-gray-500 font-mono">terminal — desarrollo-web</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <p className="text-gray-400">
              <span className="text-emerald-400">$</span> cd {location.pathname}
            </p>
            <p className="text-rose-400">
              Error: La ruta no existe en el proyecto
            </p>
            <p className="text-gray-500">
              → Tal vez esta página aún está en desarrollo 🚧
            </p>
            <p className="text-amber-400 mt-2">
              <span className="text-emerald-400">$</span> git status
            </p>
            <p className="text-gray-500">
              nothing to commit, working tree clean... pero esta ruta no se encuentra.
            </p>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          Aún no es tiempo 🕐
        </h2>
        <p className="text-gray-400 mb-8 text-sm md:text-base max-w-md mx-auto">
          Nos vemos este jueves.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#bb8800] text-white font-semibold hover:bg-[#d4a017] transition-all duration-300 shadow-lg shadow-[#bb8800]/20 cursor-pointer"
          >
            <i className="ri-home-4-line"></i>
            Volver al inicio
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            Página anterior
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-600 font-mono">
          FES Acatlán · Desarrollo Web · 2025-2
        </p>
      </div>
    </div>
  );
}