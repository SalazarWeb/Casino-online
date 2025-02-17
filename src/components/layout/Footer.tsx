import { Youtube, ExternalLink, ChevronRight, Twitter, Facebook, Instagram, Disc as Discord, TwitchIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1D26] text-gray-400 py-12 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* I-GAMING */}
          <div>
            <h3 className="text-blue-500 font-semibold mb-4">I-GAMING</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Todos los juegos</a></li>
              <li><a href="#" className="hover:text-white transition">Slots</a></li>
              <li><a href="#" className="hover:text-white transition">Casino en vivo</a></li>
              <li><a href="#" className="hover:text-white transition">Plinko</a></li>
            </ul>
          </div>

          {/* CARACTERÍSTICAS */}
          <div>
            <h3 className="text-blue-500 font-semibold mb-4">CARACTERÍSTICAS</h3>
            <ul className="space-y-2">              
              <li><a href="#" className="hover:text-white transition">Staking de cripto</a></li>              
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Farming
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition">Caja Pictasino</a></li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Programa de Afiliados
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition">Futuros</a></li>
            </ul>
          </div>

          {/* SOBRE NOSOTROS */}
          <div>
            <h3 className="text-blue-500 font-semibold mb-4">SOBRE NOSOTROS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Novedades</a></li>
              <li><a href="#" className="hover:text-white transition">Sobre BTC</a></li>
              <li><a href="#" className="hover:text-white transition">Acerca del equipo</a></li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Pictasino Whitepaper
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Pictasino docs
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* CONTÁCTANOS */}
          <div>
            <h3 className="text-blue-500 font-semibold mb-4">CONTÁCTANOS</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@pictasino.com" className="hover:text-white transition block">
                  <div className="text-white">support@pictasino.com</div>
                  <div className="text-sm">Preguntas y problemas técnicos</div>
                </a>
              </li>
              <li>
                <a href="mailto:bugbounty@pictasino.com" className="hover:text-white transition block">
                  <div className="text-white">bugbounty@pictasino.com</div>
                  <div className="text-sm">Reportes de bugs</div>
                </a>
              </li>
              <li>
                <a href="mailto:pr@pictasino.com" className="hover:text-white transition block">
                  <div className="text-white">pr@pictasino.com</div>
                  <div className="text-sm">Proposiciones de marketing y colaboración</div>
                </a>
              </li>
            </ul>
          </div>

          {/* AYUDA */}
          <div>
            <h3 className="text-blue-500 font-semibold mb-4">AYUDA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Equidad</a></li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Política de privacidad
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Condiciones del servicio
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  T&C Apuestas deportivas
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center">
                  Consultas comerciales
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition">Juego responsable</a></li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {/* Partner logos would go here - using placeholder divs */}
            <div className="h-8 w-24 bg-gray-700 rounded opacity-50"></div>
            <div className="h-8 w-24 bg-gray-700 rounded opacity-50"></div>
            <div className="h-8 w-24 bg-gray-700 rounded opacity-50"></div>
            <div className="h-8 w-24 bg-gray-700 rounded opacity-50"></div>
            <div className="h-8 w-24 bg-gray-700 rounded opacity-50"></div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#" className="p-2 hover:bg-gray-700 rounded-full transition">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:bg-gray-700 rounded-full transition">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:bg-gray-700 rounded-full transition">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:bg-gray-700 rounded-full transition">
            <Discord className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:bg-gray-700 rounded-full transition">
            <TwitchIcon className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:bg-gray-700 rounded-full transition">
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        {/* Age Restriction Notice */}
        <div className="mt-8 text-center text-sm">
          <div className="inline-block border border-gray-600 rounded-full px-3 py-1 mr-2">18+</div>
          Este sitio web ofrece juegos con experiencia de riesgo. Para ser usuario de nuestro sitio debes ser mayor de 18 años. No somos responsables de la violación de sus leyes locales relacionadas con i-gaming. Juega responsablemente y diviértete en Pictasino.
        </div>

        {/* Currency Section */}
        <div className="mt-8 flex justify-end items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">USDT</span>
            <ChevronRight className="h-4 w-4" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Metamask</span>
            <ChevronRight className="h-4 w-4" />
          </div>
          <div>
            <span>1 USDT = $1.0000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;