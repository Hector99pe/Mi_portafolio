'use client';

import profile from '@/app/data/profile.json';

export default function Footer() {
  const { name, role, location, stats } = profile[0];
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Sobre Mí', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Habilidades', href: '#skills' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'Email', href: 'mailto:hperezvengoa@gmail.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hector-henrique-perez-vengoa/' },
        { label: 'GitHub', href: 'https://github.com/hperevengoa' },
        { label: 'WhatsApp', href: 'https://wa.me/51930404900' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Mi CV', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Portfolio', href: '#' },
        { label: 'Contacto', href: 'mailto:hperezvengoa@gmail.com' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950/30 backdrop-blur-md border-t border-amber-500/10 text-slate-300 relative py-16">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Info personal */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center font-black text-slate-950">
                HP
              </div>
              <div>
                <h3 className="font-bold text-white">{name.split(' ')[0]}</h3>
                <p className="text-xs text-amber-400">{role}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-3">{location}</p>
            <div className="flex gap-2">
              {stats.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-slate-800 hover:bg-amber-600/20 border border-slate-700 hover:border-amber-400 transition-all duration-300 text-amber-400 text-xs font-bold"
                  title={social.label}
                >
                  {social.icon === 'linkedin' && '𝕷'}
                  {social.icon === 'github' && '𝐆'}
                  {social.icon === 'email' && '✉'}
                  {social.icon === 'whatsapp' && '💬'}
                </a>
              ))}
            </div>
          </div>

          {/* Links por sección */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-amber-500/10 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} <span className="text-amber-400 font-semibold">{name}</span>. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Hecho con</span>
            <span className="text-amber-400 animate-pulse">♥</span>
            <span>usando</span>
            <span className="text-amber-400 font-semibold">Next.js</span>
            <span>&</span>
            <span className="text-amber-400 font-semibold">Tailwind CSS</span>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-amber-500/5 to-transparent rounded-full blur-3xl -z-10 opacity-50"></div>
      </div>
    </footer>
  );
}
