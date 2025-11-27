import React from 'react';
import { ELEMENTS, ORBIT_RADII } from '../constants';
import { ElementData } from '../types';
import PeriodicSquare from './PeriodicSquare';

interface SolarSystemProps {
  onElementSelect: (e: ElementData) => void;
  selectedElementId?: number;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ onElementSelect, selectedElementId }) => {
  // Group elements by orbit
  const orbits = ORBIT_RADII.map((radius, index) => {
    if (index === 0) return null; // Center is special
    return {
      radius,
      elements: ELEMENTS.filter(e => e.orbitIndex === index)
    };
  }).filter(Boolean);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-bb-green/10 to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bb-green/20 via-transparent to-black pointer-events-none"></div>

      {/* Central Nucleus / Sun */}
      <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="flex gap-1">
            <div className="w-16 h-16 bg-bb-light-green text-white font-bold flex items-center justify-center text-3xl border-2 border-white shadow-[0_0_30px_#50c878]">
                Br
            </div>
            <div className="w-16 h-16 bg-bb-light-green text-white font-bold flex items-center justify-center text-3xl border-2 border-white shadow-[0_0_30px_#50c878]">
                Ba
            </div>
        </div>
        <div className="text-bb-light-green tracking-[0.5em] text-xs mt-2 uppercase font-bold">System</div>
      </div>

      {/* Orbits */}
      {orbits.map((orbit, i) => {
          if (!orbit) return null;
          const { radius, elements } = orbit;
          const size = radius * 2;
          // Alternating duration and direction for visual complexity
          const isEven = i % 2 === 0;
          const animationDuration = isEven ? 60 + (i * 20) : 70 + (i * 20); 
          const direction = isEven ? 'normal' : 'reverse';

          return (
            <div 
                key={`orbit-${i}`}
                className="absolute rounded-full border border-bb-light-green/20"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            >
                {/* Rotating Container for Elements */}
                <div 
                    className="w-full h-full absolute inset-0 animate-spin-slow"
                    style={{
                        animationDuration: `${animationDuration}s`,
                        animationDirection: direction
                    }}
                >
                    {elements.map((element) => {
                        return (
                            <div
                                key={element.symbol}
                                className="absolute top-0 left-1/2 -ml-6 -mt-6 transform origin-center"
                                style={{
                                    transform: `rotate(${element.startAngle}deg) translateY(-${radius}px) rotate(-${element.startAngle}deg)`,
                                }}
                            >
                                {/* Counter-rotation wrapper to keep text upright */}
                                <div 
                                    className="animate-spin-reverse-slow"
                                    style={{
                                        animationDuration: `${animationDuration}s`,
                                        animationDirection: direction === 'normal' ? 'reverse' : 'normal'
                                    }}
                                >
                                    <PeriodicSquare 
                                        element={element}
                                        onClick={onElementSelect}
                                        isActive={selectedElementId === element.atomicNumber}
                                        size="sm"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
          );
      })}
    </div>
  );
};

export default SolarSystem;
