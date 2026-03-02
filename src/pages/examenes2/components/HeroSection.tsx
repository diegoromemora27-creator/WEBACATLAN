
export default function HeroSection() {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden flex items-center justify-center pt-20">
      {/* Space background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #000010 0%, #000820 40%, #001030 100%)' }} />

      {/* Stars layer 1 */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={`s1-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: i % 5 === 0 ? '3px' : '2px',
            height: i % 5 === 0 ? '3px' : '2px',
            top: `${(i * 17 + 3) % 100}%`,
            left: `${(i * 23 + 7) % 100}%`,
            opacity: 0.4 + (i % 5) * 0.12,
            animation: `twinkle ${1.5 + (i % 4) * 0.5}s ease-in-out infinite`,
            animationDelay: `${(i % 7) * 0.3}s`,
          }}
        />
      ))}

      {/* Galaga enemy row - top */}
      <div className="absolute top-24 left-0 right-0 flex justify-center gap-6 md:gap-10 opacity-70">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5" style={{ animation: `floatEnemy ${2 + (i % 3) * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}>
            {/* Galaga bug pixel art */}
            <div className="w-3 h-1 bg-[#FF4444]" />
            <div className="w-5 h-1 bg-[#FF6666]" />
            <div className="w-7 h-2 bg-[#FF4444]" />
            <div className="w-9 h-2 bg-[#FF2222]" />
            <div className="w-7 h-1 bg-[#FF4444]" />
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#FF6666]" />
              <div className="w-3 h-1 bg-[#FF4444]" />
              <div className="w-2 h-2 bg-[#FF6666]" />
            </div>
          </div>
        ))}
      </div>

      {/* Galaga enemy row - second */}
      <div className="absolute top-40 left-0 right-0 flex justify-center gap-8 md:gap-14 opacity-50">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5" style={{ animation: `floatEnemy ${2.5 + (i % 3) * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>
            <div className="w-2 h-1 bg-[#44FFFF]" />
            <div className="w-6 h-2 bg-[#22DDDD]" />
            <div className="w-8 h-2 bg-[#00BBBB]" />
            <div className="w-6 h-1 bg-[#22DDDD]" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#44FFFF]" />
              <div className="w-2 h-2 bg-[#44FFFF]" />
            </div>
          </div>
        ))}
      </div>

      {/* Laser beams */}
      <div className="absolute inset-0 pointer-events-none">
        {[15, 35, 55, 75, 90].map((left, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-[#FF4444] to-transparent"
            style={{
              left: `${left}%`,
              height: '60px',
              animation: `laserShoot ${1.2 + i * 0.3}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.6,
            }}
          />
        ))}
        {[20, 45, 65, 82].map((left, i) => (
          <div
            key={`up-${i}`}
            className="absolute w-0.5 bg-gradient-to-t from-transparent via-[#00FFFF] to-transparent"
            style={{
              left: `${left}%`,
              height: '50px',
              animation: `laserUp ${1.5 + i * 0.25}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Player ship at bottom */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
        <div className="w-2 h-3 bg-[#00FF88]" />
        <div className="w-4 h-2 bg-[#00DD66]" />
        <div className="w-8 h-3 bg-[#00FF88]" />
        <div className="w-12 h-2 bg-[#00DD66]" />
        <div className="flex gap-1">
          <div className="w-3 h-2 bg-[#00FF88]" />
          <div className="w-6 h-3 bg-[#00FF88]" />
          <div className="w-3 h-2 bg-[#00FF88]" />
        </div>
      </div>

      {/* Ground / score bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 border-t-2 border-[#00FF88]/30 flex items-center px-6 gap-8" style={{ background: 'rgba(0,255,136,0.05)' }}>
        <span className="text-[#00FF88] font-black text-xs tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>1UP</span>
        <span className="text-white font-black text-xs tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>HI-SCORE</span>
        <span className="text-[#FFD700] font-black text-xs tracking-widest" style={{ fontFamily: "'Press Start 2P', monospace" }}>EXAM 2</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-block border-2 border-[#00FF88] px-6 py-2 mb-4" style={{ background: 'rgba(0,255,136,0.1)', boxShadow: '0 0 20px rgba(0,255,136,0.3)' }}>
          <span className="text-[#00FF88] font-black text-xs md:text-sm tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            STAGE 2
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            lineHeight: 1.2,
            color: '#FFFFFF',
            textShadow: '0 0 20px rgba(0,255,136,0.8), 0 0 40px rgba(0,255,136,0.4), 3px 3px 0px #004422',
          }}
        >
          EXAMEN 2
        </h1>
        <p className="text-lg md:text-xl font-bold mb-6" style={{ color: '#00FF88', textShadow: '0 0 10px rgba(0,255,136,0.5)' }}>
          ¡Derrota a los enemigos del conocimiento y avanza al siguiente nivel!
        </p>

        {/* Lives indicator */}
        <div className="flex items-center justify-center gap-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center gap-0.5 opacity-80">
              <div className="w-1.5 h-2 bg-[#00FF88]" />
              <div className="w-3 h-1.5 bg-[#00DD66]" />
              <div className="w-5 h-2 bg-[#00FF88]" />
              <div className="w-7 h-1.5 bg-[#00DD66]" />
            </div>
          ))}
          <span className="text-[#00FF88] text-xs font-bold ml-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>x3</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes floatEnemy {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes laserShoot {
          0% { top: -60px; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes laserUp {
          0% { bottom: -50px; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { bottom: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
