import { Reveal } from '../components/ui/Reveal';
import { Brain, Code, Database } from 'lucide-react';

const focusAreas = [
  {
    icon: Brain,
    title: 'AI Applications',
    items: ['LLMs', 'RAG', 'AI-powered products'],
  },
  {
    icon: Code,
    title: 'Full-Stack Engineering',
    items: ['React', 'Python', 'Django', 'PostgreSQL'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['SQL', 'Data pipelines', 'Data processing', 'Cloud systems'],
  },
];

export function CurrentFocus() {
  return (
    <section className="py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto glass-strong rounded-3xl p-8 md:p-12">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-sky-600 dark:text-sky-400">
            Current Focus
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14 text-slate-900 dark:text-slate-100">
            Currently exploring.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.1}>
              <div className="p-6 rounded-2xl glass-panel h-full">
                <area.icon className="w-8 h-8 mb-4 text-sky-600 dark:text-sky-400" />
                <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-slate-100">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 dark:text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
