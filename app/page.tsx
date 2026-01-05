import About from './components/sections/About';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Tools from './components/sections/Tools';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}
