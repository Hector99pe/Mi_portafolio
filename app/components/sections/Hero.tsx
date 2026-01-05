import profile from '@/app/data/profile.json';
import Image from 'next/image';

export default function Hero() {
  const { name, role, bio, stats } = profile[0];

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-12 items-center relative z-10">
        {/* Imagen mejorada */}
        <div className="col-span-5 flex items-center justify-center">
          <div className="relative group">
            {/* Borde con gradiente animado - Sin rounded */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Imagen */}
            <div className="relative bg-slate-950 overflow-hidden">
              <Image
                src={profile[0].image}
                alt={name}
                width={400}
                height={400}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Contenido de texto mejorado */}
        <div className="col-span-7 flex flex-col justify-center space-y-6">
          {/* Badge de rol */}
          <div className="inline-flex items-center gap-2 w-fit">
            <div className="w-2 h-2 bg-amber-400 animate-pulse"></div>
            <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase">
              {role}
            </span>
          </div>

          {/* Título principal */}
          <div>
            <h1 className="text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                {name.split(' ').slice(0, 2).join(' ')}
              </span>
            </h1>
            <h2 className="text-4xl font-bold text-slate-300 mt-2">
              {name.split(' ').slice(2).join(' ')}
            </h2>
          </div>

          {/* Descripción con mejor estilo */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mt-4">{bio}</p>

          {/* Enlaces de contacto */}
          <div className="flex gap-4 mt-12 pt-8 border-t border-slate-700">
            {stats.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-amber-600/20 border border-slate-700 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
                title={social.label}
              >
                <span className="text-amber-400 text-lg font-bold group-hover:scale-125 transition-transform duration-300">
                  {social.icon === 'linkedin' && '𝕷'}
                  {social.icon === 'github' && '𝐆'}
                  {social.icon === 'email' && '✉'}
                  {social.icon === 'whatsapp' && '💬'}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
