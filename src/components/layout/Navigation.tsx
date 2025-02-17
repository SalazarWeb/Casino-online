'use client'

import { Gift, Trophy, Gamepad2 } from 'lucide-react';
import { NavItem } from '../ui/NavItem';
import { useState } from 'react';

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = {
    bonos: [
      { title: 'Bono de Bienvenida', link: '/bonos/bienvenida' },
      { title: 'Bono sin Depósito', link: '/bonos/sin-deposito' },
      { title: 'Bono Recarga', link: '/bonos/recarga' },
      { title: 'Programa VIP', link: '/bonos/vip' },
    ],
    torneos: [
      { title: 'Torneos Diarios', link: '/torneos/diarios' },
      { title: 'Torneos Semanales', link: '/torneos/semanales' },
      { title: 'Ranking de Jugadores', link: '/torneos/ranking' },
      { title: 'Premios Especiales', link: '/torneos/premios' },
    ],
    juegos: [
      { title: 'Crash', link: '/crash' },
      { title: 'Tragamonedas', link: '/slot-machine' },
      { title: 'Blackjack', link: '/blackjack' },
      { title: 'Nuevos Juegos', link: '/nuevos-juegos' },
    ],
  };

  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth > 640) { // Solo para desktop
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 640) { // Solo para desktop
      setActiveMenu(null);
    }
  };

  const handleClick = (menu: string) => {
    if (window.innerWidth <= 640) { // Solo para móvil
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  return (
    <nav className="bg-[#00246B] border-b border-white/10 relative z-[100]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start gap-4 sm:gap-8 py-4">
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('bonos')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('bonos')}
          >
            <NavItem icon={<Gift />} text="Bonos" />
            {activeMenu === 'bonos' && (
              <div className="absolute left-0 mt-2 w-48 bg-[#001845] border border-white/10 rounded-md shadow-lg z-[999]">
                {menuItems.bonos.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    className="block px-4 py-2 text-white hover:bg-[#003399] transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('torneos')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('torneos')}
          >
            <NavItem icon={<Trophy />} text="Torneos" />
            {activeMenu === 'torneos' && (
              <div className="absolute left-0 mt-2 w-48 bg-[#001845] border border-white/10 rounded-md shadow-lg z-[999]">
                {menuItems.torneos.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    className="block px-4 py-2 text-white hover:bg-[#003399] transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('juegos')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('juegos')}
          >
            <NavItem icon={<Gamepad2 />} text="Juegos" />
            {activeMenu === 'juegos' && (
              <div className="absolute right-0 sm:right-auto sm:left-0 mt-2 w-48 bg-[#001845] border border-white/10 rounded-md shadow-lg z-[999]">
                {menuItems.juegos.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    className="block px-4 py-2 text-white hover:bg-[#003399] transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}; 