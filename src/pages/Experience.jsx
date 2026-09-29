import { Reveal } from '../components/ui/Reveal';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-blue-600 dark:text-blue-400">
            Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14 text-gray-900 dark:text-gray-100">
            Where I've worked.
          </h2>
        </Reveal>

        <div className="space-y-10">
          {experience.map((entry, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="pl-6 relative">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 shadow-lg shadow-blue-500/50" />
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                  <p className="text-xs font-mono tracking-widest uppercase mb-1 text-blue-600 dark:text-blue-400">
                    {entry.period}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                    {entry.role}
                  </h3>
                  <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{entry.company}</p>
                  <ul className="space-y-2">
                    {entry.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="text-sm flex gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-blue-600 dark:text-blue-400">▸</span>
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
