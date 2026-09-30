import { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { skills } from '../data/skills';

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-sky-600 dark:text-sky-400">
            Technology
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14 text-slate-900 dark:text-slate-100">
            Tools I build with.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => (
            <Reveal key={category} delay={categoryIndex * 0.1}>
              <div className="p-6 rounded-2xl glass-panel h-full">
                <h3 className="font-mono text-sm tracking-widest uppercase mb-4 text-sky-600 dark:text-sky-400">
                  {category}
                </h3>
                <div className="space-y-3">
                  {skills[category].map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      onMouseLeave={() => setSelectedSkill(null)}
                      className={`w-full text-left p-3 rounded-xl transition-colors ${
                        selectedSkill?.name === skill.name
                          ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300'
                          : 'hover:bg-white/40 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <p className="font-medium">{skill.name}</p>
                      {selectedSkill?.name === skill.name && (
                        <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">
                          {skill.description}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {selectedSkill && (
          <Reveal delay={0.2}>
            <div className="mt-8 p-6 rounded-2xl glass-strong">
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
                {selectedSkill.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{selectedSkill.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-sky-600 dark:text-sky-400">
                  Used for:
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {selectedSkill.usage}
                </span>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
