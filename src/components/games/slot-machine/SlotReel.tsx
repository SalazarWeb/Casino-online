import React, { useState, useEffect } from 'react';

interface SlotReelProps {
  symbol: string;
  isSpinning: boolean;
  delay: number;
}

export const SlotReel: React.FC<SlotReelProps> = ({ symbol, isSpinning, delay }) => {
  const [showSymbol, setShowSymbol] = useState(symbol);
  const symbols = ['7️⃣', '🎰', '💎', '🍒', '⭐'];
  
  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setShowSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setShowSymbol(symbol);
    }
  }, [isSpinning, symbol]);

  return (
    <div className="relative w-24 h-24 bg-white rounded-lg overflow-hidden border-4 border-gray-700 perspective-[1000px]">
      <div
        className={`flex items-center justify-center w-full h-full text-5xl transition-transform preserve-3d ${
          isSpinning ? 'animate-[slot-spin_2s_ease-out]' : ''
        }`}
        style={{
          animationDelay: `${delay}ms`,
        }}
      >
        {showSymbol}
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-10" />
    </div>
  );
};