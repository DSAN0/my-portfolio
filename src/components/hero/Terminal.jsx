import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';

const commands = [
  { cmd: 'whoami', output: 'Dumindu Sankalpa' },
  { cmd: 'focus', output: 'full-stack\nbackend\nAI\ndata' },
  { cmd: 'status', output: 'building...' },
  { cmd: 'about', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { cmd: 'skills', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { cmd: 'projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { cmd: 'contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
];

export function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome! Try commands: about, skills, projects, contact' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const command = commands.find((c) => c.cmd === cmd.toLowerCase());
    if (command) {
      setHistory((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }]);

      if (command.action) {
        command.action();
        setHistory((prev) => [...prev, { type: 'output', content: 'Navigating...' }]);
      } else {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setHistory((prev) => [...prev, { type: 'output', content: command.output }]);
        }, 500);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'input', content: `$ ${cmd}` },
        { type: 'output', content: 'Command not found. Try: about, skills, projects, contact' },
      ]);
    }
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
    }
  };

  return (
    <Reveal>
      <div className="w-full max-w-md mx-auto">
        <div
          ref={terminalRef}
          className="bg-gray-900 rounded-lg p-4 font-mono text-sm h-64 overflow-y-auto border border-gray-700"
        >
          {history.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-2 ${entry.type === 'input' ? 'text-green-400' : 'text-gray-300'}`}
            >
              {entry.content.split('\n').map((line, lineIndex) => (
                <div key={lineIndex}>{line}</div>
              ))}
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400"
            >
              _
            </motion.div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command..."
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg font-mono text-sm border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </form>
        <div className="mt-2 flex flex-wrap gap-2">
          {commands
            .filter((c) => !c.action)
            .map((command) => (
              <button
                key={command.cmd}
                onClick={() => handleCommand(command.cmd)}
                className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-300 transition-colors"
              >
                {command.cmd}
              </button>
            ))}
        </div>
      </div>
    </Reveal>
  );
}
