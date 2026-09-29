import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Cpu, 
  Sparkles, 
  Activity, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Terminal,
  ShieldCheck
} from 'lucide-react';

const techPillars = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400',
    borderGlow: 'hover:border-blue-500/50',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    status: 'Interactive & Responsive',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    color: 'from-emerald-500 to-teal-400',
    borderGlow: 'hover:border-emerald-500/50',
    tags: ['Python', 'Django', 'Django REST', 'RESTful APIs'],
    status: 'Robust & High Performance',
  },
  {
    id: 'database',
    title: 'Database & Data',
    icon: Database,
    color: 'from-indigo-500 to-purple-400',
    borderGlow: 'hover:border-indigo-500/50',
    tags: ['PostgreSQL', 'Supabase', 'ORM', 'Schema Design'],
    status: 'ACID Compliant & Scalable',
  },
  {
    id: 'cloud-ai',
    title: 'Cloud & Modern AI',
    icon: Cpu,
    color: 'from-amber-500 to-rose-400',
    borderGlow: 'hover:border-amber-500/50',
    tags: ['Vercel', 'Render', 'LLMs', 'RAG Integration'],
    status: 'Deployed & Production Ready',
  },
];

const metrics = [
  { label: 'Uptime / Health', value: '99.9%', icon: Activity, change: '+100%' },
  { label: 'Avg Latency', value: '< 45ms', icon: Zap, change: 'Optimal' },
  { label: 'Architecture', value: 'REST + Micro', icon: Layers, change: 'Modular' },
];

export function SystemVisualization() {
  const [activeTab, setActiveTab] = useState('frontend');
  const selectedPillar = techPillars.find((p) => p.id === activeTab) || techPillars[0];

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/20 dark:bg-blue-600/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-500/20 dark:bg-purple-600/25 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Floating Decorative Glass Badge 1 (Top-Right) */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -right-3 sm:-right-6 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-gray-700/60 shadow-xl shadow-blue-500/10 text-xs font-semibold text-gray-800 dark:text-gray-200"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Clean Code Architecture</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
      </motion.div>

      {/* Floating Decorative Glass Badge 2 (Bottom-Left) */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-5 -left-3 sm:-left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/60 dark:border-gray-700/60 shadow-xl shadow-purple-500/10 text-xs font-medium text-gray-700 dark:text-gray-300"
      >
        <ShieldCheck className="w-4 h-4 text-blue-500" />
        <span>Full-Stack Engineering</span>
      </motion.div>

      {/* Main Glassmorphic Card Container */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/80 dark:border-gray-700/70 shadow-2xl shadow-blue-900/10">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200/70 dark:border-gray-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono font-medium text-gray-500 dark:text-gray-400">
              dev.stack // architecture
            </span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-[11px] font-mono text-blue-600 dark:text-blue-400">
            <Terminal className="w-3 h-3" />
            <span>v2.0 • Live</span>
          </div>
        </div>

        {/* Tech Pillars Interactive Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {techPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === pillar.id;

            return (
              <motion.button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left p-3.5 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-gray-800 border-blue-500/60 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/5'
                    : 'bg-gray-50/70 dark:bg-gray-800/40 border-gray-200/60 dark:border-gray-800/60 hover:bg-white/90 dark:hover:bg-gray-800/80'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 pointer-events-none"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                  {pillar.tags.join(' • ')}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Detail Card with Smooth Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPillar.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800/80 dark:to-blue-950/20 border border-gray-200/80 dark:border-gray-700/80 mb-6"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {selectedPillar.status}
              </span>
              <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
                MODULE: {selectedPillar.id.toUpperCase()}
              </span>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedPillar.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200/70 dark:border-gray-800/80">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="text-center p-2 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/40 dark:border-gray-800/40"
              >
                <div className="flex items-center justify-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 mb-0.5">
                  <Icon className="w-3 h-3 text-blue-500" />
                  <span className="truncate">{item.label}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold font-mono text-gray-900 dark:text-gray-100">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
