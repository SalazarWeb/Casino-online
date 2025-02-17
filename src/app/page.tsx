import { HeroBanner } from '@/components/sections/HeroBanner';
import { GameGrid } from '@/components/sections/GameGrid';
import CriptoHeader from '@/components/layout/CryptoHeader';

export default function Home() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 bg-[#00246B] text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#00246B] text-white">
        <HeroBanner />
        <div className="mt-4 sm:mt-6 lg:mt-8">
          <GameGrid />
        </div>
      </main>
      <CriptoHeader />
    </div>
  );
}