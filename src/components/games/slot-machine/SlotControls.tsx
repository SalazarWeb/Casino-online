import React from 'react';
import { Play } from 'lucide-react';

interface SlotControlsProps {
  onSpin: () => void;
  disabled: boolean;
  betAmount: number;
}

export const SlotControls: React.FC<SlotControlsProps> = ({
  onSpin,
  disabled,
  betAmount,
}) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onSpin}
        disabled={disabled}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold ${
          disabled
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        <Play className="w-5 h-5" />
        Spin ({betAmount})
      </button>
    </div>
  );
};