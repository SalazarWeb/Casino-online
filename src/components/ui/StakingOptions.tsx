import React from 'react';
import { ChevronRight } from 'lucide-react';

interface StakingOptionProps {
  title: string;
  apr: string;
  icon: string;
  onClick?: () => void;
}

const StakingOption: React.FC<StakingOptionProps> = ({ title, apr, icon, onClick }) => (
  <div 
    className="flex items-center justify-between p-4 bg-[#1a1b1e] rounded-lg mb-2 cursor-pointer hover:bg-[#2a2b2e] transition-all duration-200"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <img src={icon} alt={title} className="w-8 h-8" />
      <div>
        <h3 className="text-white text-sm font-medium">{title}</h3>
        <p className="text-[#34eb4f] text-xs">APR {apr}</p>
      </div>
    </div>
    <div className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
      <ChevronRight className="text-white w-5 h-5" />
    </div>
  </div>
);

export const StakingOptions: React.FC = () => {
  return (
    <div className="w-full sm:col-span-2 max-w-none p-6 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 text-[#34eb4f]" 
            fill="currentColor"
          >
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
          <h2 className="text-[#34eb4f] text-lg font-medium">GANA!</h2>
        </div>
        <p className="text-gray-400 text-sm">
         Multiplica tus ganancias apostando por el staking de las criptomonedas líderes en el mercado con las tasas de retorno más elevadas.
        </p>
      </div>

      <div className="space-y-2">
        <StakingOption
          title="BTC Staking"
          apr="54.38%"
          icon="https://img.freepik.com/fotos-premium/bitcoin-fondo-btc-criptomoneda-bitcoin-moneda-blockchain-fondo-pantalla_691560-7915.jpg"
          onClick={() => console.log('BFG Staking clicked')}
        />
        <StakingOption
          title="Crypto Staking"
          apr="a un 65%"
          icon="https://aqru.io/app/uploads/2022/04/staking.png"
          onClick={() => console.log('Crypto Staking clicked')}
        />
      </div>
    </div>
  );
};
