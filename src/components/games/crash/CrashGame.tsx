"use client"
import { useState, useEffect, useCallback } from 'react';
import { CrashChart } from './CrashChart';
import { CrashControls } from './CrashControls';
import { CrashHistory } from './CrashHistory';

export const CrashGame = () => {
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'crashed'>('waiting');
  const [currentMultiplier, setCurrentMultiplier] = useState(1);
  const [betAmount, setBetAmount] = useState(0);
  const [autoPayoutAt, setAutoPayoutAt] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [maxMultiplier, setMaxMultiplier] = useState(1);

  const crash = useCallback(() => {
    if (gameState !== 'crashed') {
      setHistory((prev) => [currentMultiplier, ...prev].slice(0, 10));
      setGameState('crashed');
      setTimeout(() => {
        setGameState('waiting');
        setCurrentMultiplier(1);
      }, 2000);
    }
  }, [currentMultiplier, gameState]);

  const cashOut = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('waiting');
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        setCurrentMultiplier((prev) => {
          const newValue = prev + 0.01;
          if (autoPayoutAt > 0 && newValue >= autoPayoutAt) {
            cashOut();
            return prev;
          }
          if (newValue >= maxMultiplier) {
            crash();
            return prev;
          }
          return newValue;
        });
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameState, autoPayoutAt, cashOut, crash, maxMultiplier]);

  const startGame = () => {
    if (betAmount <= 0) return;
    setGameState('playing');
    setCurrentMultiplier(1);
    
    // Definir límites para el multiplicador
    const minMultiplier = 1.01;  // El multiplicador mínimo
    const maxMultiplier = 3;   // El multiplicador máximo
    
    // Generar un multiplicador aleatorio entre los límites
    const randomMultiplier = minMultiplier + Math.random() * (maxMultiplier - minMultiplier);
    setMaxMultiplier(randomMultiplier);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-[#1a1a2e] rounded-lg p-6 space-y-6">
        <CrashChart 
          multiplier={currentMultiplier}
          gameState={gameState}
        />
        
        <CrashControls
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          autoPayoutAt={autoPayoutAt}
          setAutoPayoutAt={setAutoPayoutAt}
          onStart={startGame}
          onCashOut={cashOut}
          gameState={gameState}
          currentMultiplier={currentMultiplier}
        />

        <CrashHistory history={history} />
      </div>
    </div>
  );
};
