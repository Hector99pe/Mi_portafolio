import tools from '@/app/data/tools.json';

export default function Tools() {
  const toolsList = tools;

  return (
    <section className="min-h-fit bg-transparent text-white relative py-12">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Herramientas
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
        </div>

        {/* Grid de herramientas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsList.map((tool) => (
            <div
              key={tool.name}
              className="group border border-amber-500/50 p-6 hover:border-amber-400 transition-all duration-300"
            >
              {/* Nombre */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {tool.name}
              </h3>

              {/* Categoría */}
              <p className="text-amber-400 text-xs uppercase font-semibold mb-3 tracking-wider">
                {tool.category}
              </p>

              {/* Descripción */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{tool.usage}</p>

              {/* Indicator bar */}
              <div className="w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
