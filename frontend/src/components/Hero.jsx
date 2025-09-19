import React from "react";
import { Phone, Eye } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1751200884901-c1c6f43ae1d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxhdXRoZW50aWMlMjBwaXp6YXxlbnwwfHx8fDE3NTgzMTI4NDd8MA&ixlib=rb-4.1.0&q=85')`,
          filter: 'blur(8px)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-55" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Promos spéciales pizzas
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Pâte fraîche faite maison • 100% Halal • Livraison gratuite 7j/7
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="tel:0169281414"
            className="bg-white text-[#0B1D39] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
          >
            <Phone size={20} />
            <span>Commander maintenant</span>
          </a>
          
          <button
            onClick={scrollToMenu}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0B1D39] transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Eye size={20} />
            <span>Voir le menu</span>
          </button>
        </div>
        
        {/* Delivery Badge */}
        <div className="inline-block bg-[#20A35B] text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
          🚚 Livraison gratuite 7j/7
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;