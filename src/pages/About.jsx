import { Reveal } from '../components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-4 text-blue-600 dark:text-blue-400">
            About
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            I enjoy turning ideas into useful software.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-12">
            From learning platforms to job platforms, I build full-stack systems that combine
            thoughtful interfaces with reliable backend architecture.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-blue-600 dark:text-blue-400">
                Full-Stack
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">Development</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-blue-600 dark:text-blue-400">
                Python
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">Backend</p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-mono text-sm tracking-widest uppercase mb-2 text-blue-600 dark:text-blue-400">
                Modern
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">Web</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
