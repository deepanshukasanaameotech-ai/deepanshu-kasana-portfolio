import React from 'react';
import { ElementData } from '../types';

interface PeriodicSquareProps {
  element: ElementData;
  onClick: (e: ElementData) => void;
  isActive: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const PeriodicSquare: React.FC<PeriodicSquareProps> = ({ element, onClick, isActive, size = 'md' }) => {
  const baseClasses = "relative flex flex-col justify-center items-center font-bold border-2 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]";
  
  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-16 h-16 text-sm",
    lg: "w-24 h-24 text-base"
  };

  const activeClasses = isActive 
    ? "bg-bb-light-green text-white border-white scale-110 shadow-[0_0_20px_#50c878]" 
    : "bg-bb-green/80 text-white border-bb-light-green hover:bg-bb-light-green hover:scale-105 hover:text-black";

  return (
    <div 
      className={`${baseClasses} ${sizeClasses[size]} ${activeClasses}`}
      onClick={() => onClick(element)}
    >
      <span className="absolute top-0.5 left-1 text-[0.6em] opacity-80">{element.atomicNumber}</span>
      <span className={`text-2xl font-bold ${size === 'sm' ? 'text-lg' : ''}`}>{element.symbol}</span>
      {size !== 'sm' && <span className="text-[0.6em] mt-[-2px] tracking-wider uppercase opacity-90">{element.name}</span>}
    </div>
  );
};

export default PeriodicSquare;
