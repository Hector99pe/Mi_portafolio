import about from '@/app/data/about.json';

export default function About() {
  const { summary, focusAreas, currentStatus } = about[0];

  return (
    <section className="min-h-fit bg-transparent text-white relative py-12">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Resumen */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">{summary}</p>

            {/* Estado actual */}
            <div className="p-6 border border-amber-500/50">
              <h3 className="text-amber-400 font-semibold mb-2">Estado Actual</h3>
              <p className="text-slate-300">{currentStatus}</p>
            </div>
          </div>

          {/* Áreas de Enfoque */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Áreas de Enfoque</h3>
            <div className="grid grid-cols-1 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="p-4 border border-amber-500/50 hover:border-amber-400 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-amber-400 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-slate-200 group-hover:text-amber-300 transition-colors">
                      {area}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
