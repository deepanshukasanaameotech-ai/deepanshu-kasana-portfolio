
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Beaker, FlaskConical, Atom } from 'lucide-react';
import PeriodicElement from './components/PeriodicElement';
import SkillsSection from './components/SkillsMarquee';
import ChatBot from './components/ChatBot';
import { EXPERIENCE } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-bb-green selection:text-white cursor-none">
      
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-bb-yellow rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-bb-crystal rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 1500, damping: 20 }}
      />

      {/* Header */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-1">
             {/* Small Logo */}
             <div className="w-8 h-8 bg-bb-green flex items-center justify-center font-bold font-display text-white border border-white/20">
                DK
             </div>
             <span className="text-xl font-display tracking-wider ml-2 text-gray-300">PORTFOLIO</span>
          </div>
          <div className="hidden md:flex gap-8 font-display uppercase tracking-widest text-sm text-gray-400">
             <a href="#about" className="hover:text-bb-yellow transition-colors">About</a>
             <a href="#skills" className="hover:text-bb-yellow transition-colors">Formulas</a>
             <a href="#experience" className="hover:text-bb-yellow transition-colors">Empire</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter grayscale contrast-125"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-5xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
             <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter flex items-center gap-2 md:gap-4 text-white">
                <span className="flex items-center">
                    I<span className="text-bb-green">T</span>S
                </span>
                <span className="flex items-center">
                    <PeriodicElement symbol="De" name="Deepanshu" number="42" color="green" />
                    epanshu
                </span>
                <span className="flex items-center">
                    <PeriodicElement symbol="Ka" name="Kasana" number="19" color="green" />
                    sana
                </span>
             </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-400 font-sans tracking-widest uppercase mb-12"
          >
            Frontend Engineer <span className="text-bb-yellow mx-2">•</span> Intern at Ameotech Informatics
          </motion.p>
          
          <div className="flex gap-6">
             <a href="https://github.com/deepanshukasanaameotech-ai" target="_blank" rel="noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                <Github size={24} />
             </a>
             <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all hover:scale-110">
                <Linkedin size={24} />
             </a>
             <a href="mailto:contact@deepanshu.dev" className="p-3 border border-white/20 rounded-full hover:bg-bb-yellow hover:border-bb-yellow hover:text-black transition-all hover:scale-110">
                <Mail size={24} />
             </a>
          </div>

          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute bottom-10"
          >
             <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-bb-green to-transparent"></div>
          </motion.div>
        </div>
      </header>

      {/* About Section - Lando Style (Big Contrast) */}
      <section id="about" className="py-24 bg-white text-black relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bb-yellow opacity-20 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <div className="aspect-square bg-zinc-900 overflow-hidden relative">
                    <img 
                        src="https://picsum.photos/seed/deepanshu/800/800" 
                        alt="Profile" 
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border-[20px] border-bb-yellow/20 pointer-events-none"></div>
                </div>
            </div>
            <div>
                <h2 className="text-6xl font-display font-bold mb-8 uppercase leading-[0.9]">
                    Respect <br/> <span className="text-bb-green">The Chemistry</span>
                </h2>
                <p className="text-xl font-sans text-zinc-600 mb-6 leading-relaxed">
                    I am a passionate frontend developer currently refining my craft at Ameotech Informatics. 
                    Like a precise chemical reaction, I blend clean code with dynamic visuals to create explosive web experiences.
                </p>
                <p className="text-xl font-sans text-zinc-600 mb-8 leading-relaxed">
                    Specializing in React, TypeScript, and modern UI libraries, I ensure every pixel serves a purpose. 
                    No half measures.
                </p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 border border-black px-4 py-2">
                        <Atom className="text-bb-green" />
                        <span className="font-display font-bold">CLEAN ARCHITECTURE</span>
                    </div>
                    <div className="flex items-center gap-2 border border-black px-4 py-2">
                        <Beaker className="text-bb-yellow" />
                        <span className="font-display font-bold">EXPERIMENTAL UI</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Skills Section (Previously Marquee) */}
      <section id="skills">
         <SkillsSection />
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-5xl font-display font-bold text-center mb-24 text-white">
                THE <span className="text-bb-crystal">EMPIRE</span> BUSINESS
            </h2>
            
            <div className="border-l-2 border-zinc-800 ml-4 md:ml-0">
                {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="mb-16 relative pl-8 md:pl-16">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-2 w-4 h-4 bg-bb-yellow rounded-full shadow-[0_0_10px_#F7B538]"></div>
                        
                        <div className="bg-zinc-900/50 p-8 border border-zinc-800 hover:border-bb-green transition-colors duration-300">
                            <span className="text-bb-green font-display text-lg tracking-widest">{exp.period}</span>
                            <h3 className="text-3xl font-display font-bold text-white mt-2">{exp.company}</h3>
                            <h4 className="text-xl text-gray-400 font-sans mb-6">{exp.role}</h4>
                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 font-sans">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-bb-yellow flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-zinc-800 text-center">
         <div className="flex items-center justify-center gap-2 mb-4">
             <FlaskConical className="text-bb-green" />
             <span className="font-display font-bold text-xl">DEEPANSHU KASANA</span>
         </div>
         <p className="text-gray-600 font-sans text-sm">© {new Date().getFullYear()} All rights reserved. Let's Cook.</p>
      </footer>

      {/* AI Assistant */}
      <ChatBot />
      
    </div>
  );
};

export default App;
