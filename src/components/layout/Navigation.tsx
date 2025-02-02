import { Gift, Trophy, Gamepad2, Dice5 } from 'lucide-react';
import { NavItem } from '../ui/NavItem.tsx';

export const Navigation = () => {
  return (
    <nav className="bg-[#00246B] border-b border-white/10">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex items-center space-x-4 sm:space-x-8 py-4 min-w-max">
          <NavItem icon={<Gift />} text="Bonos" />
          <NavItem icon={<Trophy />} text="Torneos" />
          <NavItem icon={<Gamepad2 />} text="Tragamonedas" />
          <NavItem icon={<Dice5 />} text="Casino en Vivo" />
        </div>
      </div>
    </nav>
  );
}; 