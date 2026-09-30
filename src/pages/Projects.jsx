import { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { projects } from '../data/projects';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'AI', 'Other'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-sky-600 dark:text-sky-400">
            Selected Work
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Things I've built.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                  filter === category
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'glass-subtle text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <div
                className={`rounded-2xl p-8 glass-panel ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.category}</p>
                  </div>
                  {project.status && (
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-xl ${
                        project.status === 'Live'
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                          : project.status === 'In Development'
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                          : 'glass-subtle text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                  {project.description}
                </p>

                {project.points && project.points.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {project.points.map((point) => (
                      <li key={point} className="text-sm flex gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-sky-600 dark:text-sky-400">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.featured && (
                    <button className="inline-flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
