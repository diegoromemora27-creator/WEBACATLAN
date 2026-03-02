
export default function HeroSection() {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden flex items-center justify-center pt-20">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5C94FC] via-[#5C94FC] to-[#6BA3FF]" />

      {/* Clouds */}
      <div className="absolute top-16 left-[5%] w-24 h-12 md:w-36 md:h-16 opacity-90">
        <div className="absolute bottom-0 left-4 w-16 h-8 md:w-24 md:h-10 bg-white rounded-full" />
        <div className="absolute bottom-3 left-0 w-12 h-8 md:w-16 md:h-10 bg-white rounded-full" />
        <div className="absolute bottom-3 right-0 w-12 h-8 md:w-16 md:h-10 bg-white rounded-full" />
      </div>
      <div className="absolute top-24 right-[10%] w-20 h-10 md:w-32 md:h-14 opacity-90">
        <div className="absolute bottom-0 left-3 w-14 h-7 md:w-20 md:h-9 bg-white rounded-full" />
        <div className="absolute bottom-2 left-0 w-10 h-7 md:w-14 md:h-9 bg-white rounded-full" />
        <div className="absolute bottom-2 right-0 w-10 h-7 md:w-14 md:h-9 bg-white rounded-full" />
      </div>
      <div className="absolute top-10 left-[40%] w-28 h-12 md:w-40 md:h-16 opacity-80">
        <div className="absolute bottom-0 left-4 w-20 h-8 md:w-28 md:h-10 bg-white rounded-full" />
        <div className="absolute bottom-3 left-0 w-14 h-8 md:w-18 md:h-10 bg-white rounded-full" />
        <div className="absolute bottom-3 right-0 w-14 h-8 md:w-18 md:h-10 bg-white rounded-full" />
      </div>

      {/* Ground blocks */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 flex">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 border border-[#8B4513]/40"
            style={{ background: i % 2 === 0 ? '#8B4513' : '#A0522D' }}
          />
        ))}
      </div>

      {/* Brick blocks row */}
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 flex justify-center gap-1 px-4">
        {['?', '?', '?', '■', '■', '?', '■', '■', '?'].map((b, i) => (
          <div
            key={i}
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-sm md:text-base border-2 shadow-md cursor-pointer hover:scale-110 transition-transform ${
              b === '?'
                ? 'bg-[#FFD700] border-[#DAA520] text-[#8B6914]'
                : 'bg-[#C8A060] border-[#8B6914] text-[#5C3A1E]'
            }`}
          >
            {b}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        {/* Pixel-style title box */}
        <div className="inline-block bg-[#E52521] border-4 border-[#8B0000] px-6 py-2 mb-4 shadow-[4px_4px_0px_#8B0000]">
          <span className="text-white font-black text-xs md:text-sm tracking-widest uppercase" style={{ fontFamily: "'Press Start 2P', monospace, sans-serif" }}>
            WORLD EXAM
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-[3px_3px_0px_#1b3d70]" style={{ fontFamily: "'Press Start 2P', monospace, sans-serif", lineHeight: 1.2 }}>
          EXAMEN 1
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-bold mb-6 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
          ¡Prepárate para superar el primer nivel del curso!
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </section>
  );
}
