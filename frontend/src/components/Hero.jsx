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

      {/* Uber Eats Floating Badge - Left Side */}
      <a
        href="https://www.ubereats.com/fr/store/pizza-di-napoli/T70SRxwBS1SLpv2e81dqIQ"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="ubereats-hero-badge"
        aria-label="Commander sur Uber Eats"
        className="hidden md:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 group"
      >
        <div className="relative ue-float">
          <div className="relative ue-pulse-ring flex flex-col items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-black border-4 border-[#06C167] shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-extrabold text-base lg:text-lg leading-none tracking-tight">Uber</span>
            <span className="text-[#06C167] font-extrabold text-xl lg:text-2xl leading-none tracking-tight mt-1">Eats</span>
            <span className="mt-2 text-[10px] lg:text-xs uppercase tracking-widest text-white/80">Commander</span>
          </div>
        </div>
      </a>

      {/* Uber Eats Mobile Pill */}
      <a
        href="https://www.ubereats.com/fr/store/pizza-di-napoli/T70SRxwBS1SLpv2e81dqIQ"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="ubereats-hero-badge-mobile"
        aria-label="Commander sur Uber Eats"
        className="md:hidden absolute left-1/2 -translate-x-1/2 top-20 z-20 ue-float"
      >
        <div className="flex items-center space-x-2 bg-black border-2 border-[#06C167] rounded-full px-4 py-2 shadow-xl">
          <span className="text-white font-extrabold text-sm">Uber</span>
          <span className="text-[#06C167] font-extrabold text-base">Eats</span>
        </div>
      </a>

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
      </div>
    </section>
  );
};

export default Hero;