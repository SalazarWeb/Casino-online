import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Navigation } from './components/layout/Navigation';
import { HeroBanner } from './components/sections/HeroBanner';
import { GameGrid } from './components/sections/GameGrid';
import { CrashGame } from './components/games/crash/CrashGame';
import CriptoHeader from './components/layout/CryptoHeader';
import Footer from './components/layout/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#00246B] text-white">
        <Header />
        <Navigation />
        
        <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
          <Routes>
            <Route path="/" element={
              <>
                <HeroBanner />
                <div className="mt-8">
                  <GameGrid />
                </div>
              </>
            } />
            <Route path="/crash" element={<CrashGame />} />
            <Route path="/tragamonedas" element={""} />
            <Route path="/apuestas_deportivas" element={""} />
            <Route path="/blackjack" element={""} />
            <Route path="/ruleta" element={""} />
          </Routes>
        </main>
        <CriptoHeader />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;