import React, { useState, useEffect } from 'react';
import { ElementData, GeminiResponse } from '../types';
import { X, Atom, ShieldAlert, FlaskConical, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { generateElementInfo } from '../services/geminiService'; // Placeholder for now

interface InfoPanelProps {
  selectedElement: ElementData | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ selectedElement, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<GeminiResponse | null>(null);

  useEffect(() => {
    if (selectedElement) {
      // Simulate AI loading for now since we don't have the service connected yet
      setLoading(true);
      setAiData(null);
      
      // Mock API call
      setTimeout(() => {
        setAiData({
          description: `${selectedElement.name} is a chemical element with symbol ${selectedElement.symbol} and atomic number ${selectedElement.atomicNumber}. It has a standard atomic weight of ${selectedElement.mass}.`,
          dangerLevel: "Moderate. Handle with care in a controlled environment.",
          uses: "Used in various chemical synthesis processes and industrial applications."
        });
        setLoading(false);
      }, 1500);
    }
  }, [selectedElement]);

  if (!selectedElement) return null;

  return (
    <div className="h-full w-full bg-black/90 backdrop-blur-xl border-l border-bb-green/30 p-6 overflow-y-auto relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="text-gray-400 hover:text-white" />
      </button>

      <div className="mt-8">
        <div className="flex items-end gap-4 mb-8">
          <div className="w-24 h-24 bg-bb-green flex items-center justify-center border-2 border-bb-light-green shadow-[0_0_20px_#50c878]">
            <span className="text-4xl font-bold text-white">{selectedElement.symbol}</span>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">{selectedElement.name}</h2>
            <p className="text-bb-light-green font-mono text-lg">Atomic No. {selectedElement.atomicNumber}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="flex items-center gap-2 mb-2 text-bb-gold">
              <Atom size={20} />
              <h3 className="font-bold uppercase tracking-wider">Properties</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Atomic Mass</p>
                <p className="text-white font-mono">{selectedElement.mass}</p>
              </div>
              <div>
                <p className="text-gray-500">Electron Shell</p>
                <p className="text-white font-mono">{selectedElement.orbitIndex}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10 min-h-[200px]">
             <div className="flex items-center gap-2 mb-4 text-bb-light-green">
              <Sparkles size={20} />
              <h3 className="font-bold uppercase tracking-wider">Heisenberg Analysis</h3>
            </div>
            
            {loading ? (
              <div className="flex flex-col items-center justify-center h-32 gap-3">
                <div className="w-8 h-8 border-2 border-bb-light-green border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs text-bb-light-green animate-pulse">Synthesizing data...</p>
              </div>
            ) : aiData ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div>
                  <p className="text-gray-300 leading-relaxed">{aiData.description}</p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <ShieldAlert size={16} />
                    <span className="text-xs font-bold uppercase">Danger Level</span>
                  </div>
                  <p className="text-sm text-gray-300">{aiData.dangerLevel}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <FlaskConical size={16} />
                    <span className="text-xs font-bold uppercase">Applications</span>
                  </div>
                  <p className="text-sm text-gray-300">{aiData.uses}</p>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
