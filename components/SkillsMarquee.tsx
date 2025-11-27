import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';
import PeriodicElement from './PeriodicElement';

const categories: SkillCategory[] = ['Frontend', 'Backend', 'Tools', 'AI'];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('Frontend');

  const getColor = (cat: SkillCategory) => {
    switch (cat) {
      case 'Frontend': return 'green';
      case 'Backend': return 'yellow';
      case 'Tools': return 'blue';
      case 'AI': return 'green';
      default: return 'green';
    }
  };

  return (
    <div className="w-full py-24 bg-bb-gray relative border-y border-bb-green/30 min-h-[800px]">
        {/* Smoke overlay effect */}
        <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-display uppercase tracking-widest text-bb-yellow mb-4">Chemical Composition</h3>
                <p className="text-gray-400 font-sans tracking-wide">SELECT COMPOUND GROUP</p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-3 md:px-8 md:py-3 text-lg font-display tracking-widest uppercase border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                            activeTab === cat 
                            ? 'bg-bb-green text-white border-bb-green shadow-[0_0_15px_rgba(74,124,89,0.5)] scale-105' 
                            : 'bg-transparent text-gray-500 border-gray-700 hover:border-bb-yellow hover:text-bb-yellow'
                        }`}
                    >
                        <span className="relative z-10">{cat}</span>
                        {activeTab !== cat && (
                            <div className="absolute inset-0 bg-bb-yellow/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        )}
                    </button>
                ))}
            </div>

            <motion.div 
                layout
                className="flex flex-wrap justify-center gap-8 md:gap-12 min-h-[400px] content-start"
            >
                <AnimatePresence mode='popLayout'>
                    {SKILLS.filter(s => s.category === activeTab).map((skill) => (
                        <motion.div
                            layout
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                            className="flex flex-col items-center gap-4 group cursor-default w-32 md:w-40"
                        >
                            <PeriodicElement 
                                symbol={skill.symbol} 
                                number={skill.atomicNumber}
                                color={getColor(activeTab)}
                                className="w-24 h-24 sm:w-28 sm:h-28 text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 bg-black/40 backdrop-blur-sm"
                            />
                            <div className="text-center">
                                <h4 className="text-white font-display text-xl tracking-wider group-hover:text-bb-yellow transition-colors">{skill.name}</h4>
                                <p className="text-gray-500 text-sm font-sans uppercase tracking-widest text-[10px] mt-1 group-hover:text-bb-green transition-colors">{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    </div>
  );
};

export default SkillsSection;