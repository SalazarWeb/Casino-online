import Link from 'next/link';
import Image from 'next/image';
import { Search, Bell, Wallet2, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-[#CD212A] py-4">
      <div className="container mx-auto px-2">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/caracol-de-mar.png" 
              alt="Pictasino" 
              width={30} 
              height={30} 
            />
            <h1 className="text-2xl font-bold">Pictasino</h1>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto sm:mx-8">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar juegos..."
                className="w-full sm:w-auto bg-white/10 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Bell className="h-6 w-6" />
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg cursor-pointer">
                <Wallet2 className="h-5 w-5 mr-2" />
                <span className="text-sm sm:text-base">0.00 CUP</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-white/80">
                <User className="h-6 w-6" />
                <span className="text-sm sm:text-base">Iniciar Sesión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}; 