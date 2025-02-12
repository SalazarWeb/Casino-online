import { useNavigate } from 'react-router-dom';
import { GameCard } from '../ui/GameCard';
import { StakingOptions } from '../ui/StakingOptions';
import { gamesData } from './GamesData';

export const GameGrid = () => {
  const navigate = useNavigate();

  const gameRoutes = {
    "Crash": "/crash",
    "Tragamonedas": "/slot-machine"
  } as const;

type GameTitle = keyof typeof gameRoutes;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {gamesData.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            image={game.image}
            category={game.category}
            rtp={game.rtp}
            onClick={() => navigate(gameRoutes[game.title as GameTitle] || '/default')}
          />
        ))}
        <StakingOptions />
      </div>
    </div>
    
  );
}; 