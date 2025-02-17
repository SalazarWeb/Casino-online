'use client'

import { useState } from 'react';
import { Coins } from 'lucide-react';
import { SlotReel } from './SlotReel';
import { SlotControls } from './SlotControls';

const SYMBOLS = ['7️⃣', '🎰', '💎', '🍒', '⭐'];
const INITIAL_CREDITS = 100;
const BET_AMOUNT = 10;

export const SlotMachine = () => {
  const [reels, setReels] = useState<string[]>(['7️⃣', '7️⃣', '7️⃣']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [winAmount, setWinAmount] = useState(0);

  const getRandomSymbol = () => {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  };

  const checkWin = (symbols: string[]) => {
    const uniqueSymbols = new Set(symbols);
    
    if (uniqueSymbols.size === 1) {
      // Three of a kind
      const symbol = symbols[0];
      const multipliers: { [key: string]: number } = {
        '7️⃣': 15,
        '💎': 12.5,
        '⭐': 10,
        '🎰': 7.5,
        '🍒': 5,
      };
      return BET_AMOUNT * (multipliers[symbol] || 10);
    } else if (uniqueSymbols.size === 2) {
      // Two of a kind
      return BET_AMOUNT * 2;
    }
    return 0;
  };

  const spin = () => {
    if (isSpinning || credits < BET_AMOUNT) return;

    setIsSpinning(true);
    setWinAmount(0);
    setCredits(prev => prev - BET_AMOUNT);

    setTimeout(() => {
      const newSymbols = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
      setReels(newSymbols);
      const win = checkWin(newSymbols);
      setWinAmount(win);
      setCredits(prev => prev + win);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center bg-purple-900 p-8 rounded-xl shadow-2xl max-w-2xl mx-auto">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full">
          <Coins className="w-5 h-5 mr-2" />
          <span className="font-bold">{credits}</span>
        </div>
        {winAmount > 0 && (
          <div className="animate-bounce bg-green-500 text-white px-4 py-2 rounded-full">
            +{winAmount}
          </div>
        )}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-6">
        <div className="flex gap-2">
          {reels.map((symbol, i) => (
            <SlotReel 
              key={i} 
              symbol={symbol} 
              isSpinning={isSpinning} 
              delay={i * 100}
            />
          ))}
        </div>
      </div>

      <SlotControls
        onSpin={spin}
        disabled={isSpinning || credits < BET_AMOUNT}
        betAmount={BET_AMOUNT}
      />

      <div className="mt-4 text-white text-center">
        <h3 className="font-bold mb-2">Premios:</h3>
        <p><strong>3x</strong></p>
        <p>7️⃣ = 150x</p>
        <p>💎 = 125x</p>
        <p>⭐ = 100x</p>
        <p>🎰 = 75x</p>
        <p>🍒 = 50x</p>
        <p><strong>2 iguales 20$</strong></p>
      </div>
    </div>
  );
};