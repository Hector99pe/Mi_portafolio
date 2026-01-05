'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Herramientas', href: '#tools' },
    { label: 'Habilidades', href: '#skills' },
  ];

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.href.substring(1),
        label: item.label,
      }));

      let currentSection = 'hero';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/30 backdrop-blur-md border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-center relative">
        {/* Logo izquierda absoluto */}
        <div className="absolute left-8 shrink-0">
          <div className="w-11 h-11 bg-linear-to-r from-amber-500 to-yellow-400 flex items-center justify-center font-black text-slate-950 text-base">
            HP
          </div>
        </div>

        {/* Navegación Centro */}
        <nav className="hidden md:flex items-center gap-10">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`transition-all duration-300 text-base font-semibold uppercase tracking-wider ${
                activeSection === item.href.substring(1)
                  ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                  : 'text-slate-300 hover:text-amber-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Menu Hamburguesa Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 group absolute right-8"
        >
          <div
            className={`w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/30 backdrop-blur-md border-t border-amber-500/10">
          <nav className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-semibold uppercase tracking-wider text-left py-2 pl-3 transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-amber-400 border-l-2 border-amber-400'
                    : 'text-slate-300 border-l-2 border-transparent hover:text-amber-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links Mobile - Removido: Solo navegación en header */}
        </div>
      )}
    </header>
  );
}
