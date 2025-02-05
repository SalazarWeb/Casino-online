interface CrashControlsProps {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  autoPayoutAt: number;
  setAutoPayoutAt: (amount: number) => void;
  onStart: () => void;
  onCashOut: () => void;
  gameState: 'waiting' | 'playing' | 'crashed';
  currentMultiplier: number;
}

export const CrashControls = ({
  betAmount,
  setBetAmount,
  autoPayoutAt,
  setAutoPayoutAt,
  onStart,
  onCashOut,
  gameState,
  currentMultiplier,
}: CrashControlsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Cantidad de apuesta</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full bg-[#2a2a3e] rounded px-4 py-2"
            disabled={gameState === 'playing'}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Auto-retiro en</label>
          <input
            type="number"
            value={autoPayoutAt}
            onChange={(e) => setAutoPayoutAt(Number(e.target.value))}
            className="w-full bg-[#2a2a3e] rounded px-4 py-2"
            disabled={gameState === 'playing'}
            step="0.1"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        {gameState === 'waiting' ? (
          <button
            onClick={onStart}
            disabled={betAmount <= 0}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg w-full"
          >
            APOSTAR
          </button>
        ) : (
          <button
            onClick={onCashOut}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg w-full"
          >
            RETIRAR {(betAmount * currentMultiplier).toFixed(2)}
          </button>
        )}
      </div>
    </div>
  );
};
