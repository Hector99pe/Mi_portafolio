import skills from '@/app/data/skills.json';

export default function Skills() {
  const skillsData = skills;

  return (
    <section className="min-h-fit bg-transparent text-white relative py-12">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="border border-amber-500/50 p-8 hover:border-amber-400 transition-all duration-300 group"
            >
              {/* Título de categoría */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-amber-300 transition-colors">
                {category.category}
              </h3>

              {/* Grid de skills */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 border border-amber-500/50 hover:border-amber-400 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-amber-400"></div>
                    <div className="flex-1">
                      <p className="text-slate-200 text-sm font-semibold">{skill.name}</p>
                      {'level' in skill && skill.level && (
                        <p className="text-xs text-yellow-400 capitalize">{skill.level}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
