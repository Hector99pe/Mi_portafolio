import projects from '@/app/data/projects.json';

export default function Projects() {
  const projectsList = projects;

  return (
    <section className="min-h-fit bg-transparent text-white relative py-20">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.title}
              className="group border border-amber-500/50 p-8 hover:border-amber-400 transition-all duration-300"
            >
              {/* Título */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              {/* Problema y Solución */}
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-amber-400 uppercase font-semibold mb-1">Problema</p>
                  <p className="text-slate-300 text-sm">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-yellow-400 uppercase font-semibold mb-1">Solución</p>
                  <p className="text-slate-300 text-sm">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs text-slate-400 uppercase font-semibold mb-2">Stack Técnico</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-amber-500 bg-opacity-20 border border-amber-500 border-opacity-30 text-amber-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <p className="text-xs text-slate-400 uppercase font-semibold mb-2">Destacados</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-amber-400 mt-1">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-amber-400 text-amber-400 hover:bg-amber-400/10 transition-all duration-300 text-sm font-semibold"
              >
                Ver Repositorio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
