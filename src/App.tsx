import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { HeroBanner } from './components/sections/HeroBanner';
import { GameGrid } from './components/sections/GameGrid';
import { CrashGame } from './components/games/crash/CrashGame';

function App() {
  return (
    <div className="min-h-screen bg-[#00246B] text-white">
      <Header />
      <Navigation />
      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <HeroBanner />
        <GameGrid />
        <CrashGame/>
      </main>
    </div>
  );
}

export default App;