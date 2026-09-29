import { Reveal } from '../components/ui/Reveal';
import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-28 px-6 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-blue-600 dark:text-blue-400">
            Education
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14 text-gray-900 dark:text-gray-100">
            Where I studied.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {education.map((entry, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <p className="text-xs font-mono tracking-widest uppercase mb-1 text-blue-600 dark:text-blue-400">
                  {entry.period}
                </p>
                <h3 className="font-display text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                  {entry.degree}
                </h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{entry.institution}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
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
