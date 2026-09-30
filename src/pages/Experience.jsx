import { Reveal } from '../components/ui/Reveal';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-8">
      <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-12">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-sky-600 dark:text-sky-400">
            Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14 text-slate-900 dark:text-slate-100">
            Where I've worked.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {experience.map((entry, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="pl-6 relative">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sky-500 shadow-lg shadow-sky-500/40" />
                <div className="border-l-2 border-sky-500/20 pl-6">
                  <p className="text-xs font-mono tracking-widest uppercase mb-1 text-sky-600 dark:text-sky-400">
                    {entry.period}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-1 text-slate-900 dark:text-slate-100">
                    {entry.role}
                  </h3>
                  <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">{entry.company}</p>
                  <ul className="space-y-2">
                    {entry.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="text-sm flex gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-sky-600 dark:text-sky-400">▸</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
