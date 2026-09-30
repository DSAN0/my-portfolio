import { Reveal } from '../components/ui/Reveal';
import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-28 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-sky-600 dark:text-sky-400">
            Education
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14 text-slate-900 dark:text-slate-100">
            Where I studied.
          </h2>
        </Reveal>

        <div className="space-y-6">
          {education.map((entry, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl glass-panel">
                <p className="text-xs font-mono tracking-widest uppercase mb-1 text-sky-600 dark:text-sky-400">
                  {entry.period}
                </p>
                <h3 className="font-display text-xl font-bold mb-1 text-slate-900 dark:text-slate-100">
                  {entry.degree}
                </h3>
                <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">{entry.institution}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="text-xs px-3 py-1 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
