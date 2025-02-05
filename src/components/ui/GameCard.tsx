interface GameCardProps {
  title: string;
  image: string;
  category: string;
  rtp: string;
  onClick?: () => void;
}

export const GameCard = ({ title, image, category, rtp, onClick }: GameCardProps) => {
  return (
    <div 
      className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-36 sm:h-48 object-cover"
      />
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{title}</h3>
        <div className="flex items-center justify-between text-xs sm:text-sm text-white/60">
          <span>{category}</span>
          <span>{rtp}% RTP</span>
        </div>
      </div>
    </div>
  );
}; 