import React, { useState } from 'react';
import SolarSystem from '../components/SolarSystem';
import InfoPanel from '../components/InfoPanel';
import { ElementData } from '../types';
import { Menu } from 'lucide-react';

const ChemicalSystem: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleElementSelect = (element: ElementData) => {
    setSelectedElement(element);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedElement(null);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-bb-dark text-white font-sans selection:bg-bb-light-green selection:text-black">
      
      {/* Mobile Toggle */}
      {selectedElement && !isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 right-4 z-50 p-2 bg-bb-green rounded-full md:hidden text-white"
          >
            <Menu />
          </button>
      )}

      {/* Main Solar System View */}
      <div className={`flex-1 relative transition-all duration-500 ease-in-out ${isSidebarOpen ? 'w-0 md:w-auto' : 'w-full'}`}>
        <SolarSystem 
            onElementSelect={handleElementSelect} 
            selectedElementId={selectedElement?.atomicNumber}
        />
        
        {/* Overlay Title */}
        <div className="absolute top-6 left-6 pointer-events-none z-10 opacity-70">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">
                <span className="text-bb-light-green">[Ch]</span>emical <br/>
                <span className="text-bb-light-green">[Sy]</span>stem
            </h1>
            <p className="text-xs tracking-[0.5em] text-bb-light-green mt-2 uppercase">Heisenberg Laboratories</p>
        </div>
      </div>

      {/* Info Panel Sidebar */}
      <div 
        className={`
            fixed inset-y-0 right-0 z-40 transform transition-transform duration-300 ease-in-out
            md:relative md:transform-none md:transition-all
            ${isSidebarOpen ? 'translate-x-0 w-full md:w-[400px]' : 'translate-x-full w-0 md:w-0'}
        `}
      >
        <div className="h-full w-full">
            <InfoPanel 
                selectedElement={selectedElement} 
                onClose={closeSidebar} 
            />
        </div>
      </div>
      
      {/* Fog/Smoke overlay for atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-[5] bg-[url('https://raw.githubusercontent.com/s1mpson/css-smoke/master/images/smoke.png')] bg-cover opacity-10 mix-blend-screen animate-pulse-slow"></div>

    </div>
  );
};

export default ChemicalSystem;
