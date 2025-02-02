export const HeroBanner = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8">
      <img
        src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=2000&q=80"
        alt="Banner del Casino"
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00246B]/90 to-transparent flex items-center">
        <div className="px-4 sm:px-8 md:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Bono de Bienvenida</h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Obtén hasta 5,000 CUP + 50 Giros Gratis</p>
          <button className="bg-[#CD212A] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#CD212A]/90 transition text-sm sm:text-base">
            Reclamar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}; 