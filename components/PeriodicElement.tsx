import React from 'react';
import { motion } from 'framer-motion';

interface PeriodicElementProps {
  symbol: string;
  name?: string;
  number?: string;
  className?: string;
  color?: 'green' | 'yellow' | 'blue';
}

const PeriodicElement: React.FC<PeriodicElementProps> = ({ 
  symbol, 
  number = '56', 
  className = '',
  color = 'green'
}) => {
  
  const colorClasses = {
    green: 'bg-bb-green text-white border-bb-green',
    yellow: 'bg-bb-yellow text-black border-bb-yellow',
    blue: 'bg-bb-crystal text-black border-bb-crystal'
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`inline-flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border-4 ${colorClasses[color]} font-bold shadow-[0_0_15px_rgba(0,0,0,0.5)] mx-1 ${className}`}
    >
      <span className="self-start text-[10px] sm:text-xs ml-1 leading-none opacity-80">{number}</span>
      <span className="text-2xl sm:text-4xl leading-none font-display">{symbol}</span>
    </motion.div>
  );
};

export default PeriodicElement;
