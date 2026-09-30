import { Reveal } from '../components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-8">
      <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-12">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-sky-600 dark:text-sky-400">
            About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            I enjoy turning ideas into useful software.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-12">
            From learning platforms to job platforms, I build full-stack systems that combine
            thoughtful interfaces with reliable backend architecture.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.3}>
            <div className="p-6 rounded-2xl glass-panel">
              <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-sky-600 dark:text-sky-400">
                Full-Stack
              </h3>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">Development</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 rounded-2xl glass-panel">
              <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-sky-600 dark:text-sky-400">
                Python
              </h3>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">Backend</p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="p-6 rounded-2xl glass-panel">
              <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-sky-600 dark:text-sky-400">
                Modern
              </h3>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">Web</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
