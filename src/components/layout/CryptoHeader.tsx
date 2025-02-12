import React from 'react';

interface CryptoHeaderProps {
  onRegister?: () => void;
}

const CryptoHeader: React.FC<CryptoHeaderProps> = ({ onRegister }) => {
  return (
    <div className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-red-500 to-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white text-center md:text-left">
            Comprar cripto de <br />
            forma rápida y <br />
            sencilla
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4">              
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png"
                alt="Apple Pay"
                className="h-8 object-contain"
              />
              <img
                src="./logos-google-pay.svg"
                alt="Google Pay"
                className="h-8 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                alt="Mastercard"
                className="h-8 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6 object-contain"
              />
            </div>

            <button
              onClick={onRegister}
              className="px-6 py-3 bg-[#E41E31] text-white font-semibold rounded-full
                       hover:bg-[#c41929] transition-colors duration-200 shadow-lg"
            >
              Regístrate, compra, y gana!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHeader;