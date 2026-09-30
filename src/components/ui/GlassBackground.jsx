/**
 * Animated backdrop behind glass panels.
 * Brighter highlights; motion is transform/opacity only.
 */
const SPECKS = [
  { left: '6%', delay: '0s', duration: '16s', size: 4 },
  { left: '18%', delay: '2s', duration: '20s', size: 3 },
  { left: '30%', delay: '6s', duration: '15s', size: 4 },
  { left: '44%', delay: '1s', duration: '22s', size: 3 },
  { left: '58%', delay: '4s', duration: '18s', size: 4 },
  { left: '70%', delay: '8s', duration: '17s', size: 3 },
  { left: '82%', delay: '3s', duration: '19s', size: 4 },
  { left: '93%', delay: '5.5s', duration: '16s', size: 3 },
];

export function GlassBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none contain-paint"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-sky-300 to-teal-300 dark:from-zinc-950 dark:via-slate-900 dark:to-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(56,189,248,0.55),transparent_50%),radial-gradient(ellipse_at_85%_15%,rgba(255,255,255,0.65),transparent_45%),radial-gradient(ellipse_at_60%_85%,rgba(45,212,191,0.45),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_15%_20%,rgba(56,189,248,0.3),transparent_50%),radial-gradient(ellipse_at_85%_15%,rgba(148,163,184,0.2),transparent_45%),radial-gradient(ellipse_at_60%_85%,rgba(45,212,191,0.22),transparent_50%)]" />

      {/* Bright aurora wash */}
      <div className="absolute top-[8%] left-[15%] h-72 w-[40rem] rounded-full bg-sky-300/55 blur-3xl dark:bg-sky-400/30 animate-aurora" />
      <div className="absolute bottom-[15%] right-[10%] h-56 w-[28rem] rounded-full bg-teal-300/45 blur-3xl dark:bg-teal-400/20 animate-soft-glow" />

      {/* Floating color orbs */}
      <div className="absolute -top-28 -left-24 h-[28rem] w-[28rem] rounded-full bg-sky-400/60 blur-3xl dark:bg-sky-500/40 animate-orb-drift animate-orb-breathe" />
      <div className="absolute top-[40%] -right-28 h-[24rem] w-[24rem] rounded-full bg-white/70 blur-3xl dark:bg-slate-300/30 animate-orb-drift-slow" />
      <div className="absolute -bottom-24 left-[25%] h-[26rem] w-[26rem] rounded-full bg-teal-300/55 blur-3xl dark:bg-teal-400/25 animate-soft-glow" />

      {/* Drifting tech grid — more visible */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.32] dark:opacity-[0.22]">
        <div
          className="absolute -inset-y-12 inset-x-0 animate-grid-pan"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px),
              linear-gradient(90deg, rgba(125,211,252,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse at center, black 8%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 8%, transparent 72%)',
          }}
        />
      </div>

      {/* Strong light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[160%] w-32 bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-sky-200/40 blur-md animate-beam-pass" />
        <div className="absolute top-0 left-0 h-[160%] w-20 bg-gradient-to-r from-transparent via-sky-200/55 to-transparent dark:via-cyan-300/25 blur-sm animate-beam-pass-delayed" />
      </div>

      {/* Brighter pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[min(58vw,460px)] w-[min(58vw,460px)] rounded-full border-2 border-sky-300/50 dark:border-sky-400/35 animate-ring-pulse" />
        <div className="absolute inset-[12%] rounded-full border border-cyan-300/45 dark:border-cyan-400/30 animate-ring-pulse-slow" />
        <div className="absolute inset-[26%] rounded-full border border-teal-300/35 dark:border-teal-400/25 animate-ring-pulse" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Rising highlight particles */}
      {SPECKS.map((s) => (
        <span
          key={s.left}
          className="absolute bottom-0 rounded-full bg-white shadow-[0_0_8px_rgba(56,189,248,0.9)] dark:bg-sky-200 animate-float-speck"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* Lighter vignette so highlights stay visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-slate-600/15 dark:from-black/20 dark:via-transparent dark:to-black/40" />
    </div>
  );
}
