import { useNavigate } from 'react-router-dom';
import { GameCard } from '../ui/GameCard';

const gamesData = [
  {
    id: 1,
    title: "Crash",
    image: "https://apuestalegal.pe/wp-content/uploads/2023/06/CRASH-CASINO-PERU-APUESTA-LEGAL.jpg",
    category: "Aleatoriedad",
    rtp: "98.7"
  },
  {
    id: 2,
    title: "Tragamonedas",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=500&h=300&q=80",
    category: "Probabilidad",
    rtp: "92.7"
  },
  {
    id: 3,
    title: "Apuestas Deportivas",
    image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=500&h=300&q=80",
    category: "Fútbol",
    rtp: "93.1"
  },
  {
    id: 4,
    title: "Blackjack",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=500&q=80",
    category: "Mesa en Vivo",
    rtp: "99.5"
  }
];

export const GameGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {gamesData.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          image={game.image}
          category={game.category}
          rtp={game.rtp}
          onClick={() => game.title === "Crash" && navigate('/crash')}
        />
      ))}
    </div>
  );
}; 