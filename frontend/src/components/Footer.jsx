import React from "react";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#promos", label: "🎯 Promos" },
    { href: "#menu", label: "🍕 Menu" },
    { href: "#infos", label: "📋 Infos" },
    { href: "#galerie", label: "🖼️ Galerie" },
    { href: "#apropos", label: "ℹ️ À propos" },
    { href: "#contact", label: "✉️ Contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1D39] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_9612bbd2-75d2-4166-85ae-9de002148fbf/artifacts/nf8q2xlu_ChatGPT%20Image%2019%20sept.%202025%2C%2022_08_56.png" 
                alt="DI NAPOLI PIZZA Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">DI NAPOLI PIZZA</h3>
                <p className="text-gray-300 text-sm">Orsay - Quartier Mondétour</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Pizza artisanale 100% halal avec pâte fraîche faite maison. 
              Livraison gratuite 7j/7 dans tout Orsay.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="text-[#20A35B]" size={16} />
              <span className="text-sm text-gray-300">Fait avec passion depuis le quartier Mondétour</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#20A35B]" size={16} />
                <a 
                  href="tel:0169281414"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  01 69 28 14 14
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#20A35B] mt-1" size={16} />
                <div className="text-gray-300 text-sm">
                  50 Rue de la Ferme<br />
                  91400 Orsay<br />
                  Quartier Mondétour
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-[#20A35B]" size={16} />
                <span className="text-gray-300 text-sm">7j/7 - Voir horaires</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#20A35B] rounded-full"></div>
                <span>Livraison gratuite 7j/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#20A35B] rounded-full"></div>
                <span>Minimum 15€</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#20A35B] rounded-full"></div>
                <span>100% Halal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#20A35B] rounded-full"></div>
                <span>Pâte fraîche maison</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#20A35B] rounded-full"></div>
                <span>CB & Tickets restaurant</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="tel:0169281414"
                className="bg-[#20A35B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm flex items-center space-x-2 w-fit"
              >
                <Phone size={16} />
                <span>Commander</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} DI NAPOLI PIZZA. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>100% Halal certifié</span>
              <span>•</span>
              <span>Pâte fraîche quotidienne</span>
              <span>•</span>
              <span>Livraison gratuite</span>
            </div>
          </div>
          
          {/* SEO Keywords */}
          <div className="mt-4 text-xs text-gray-500 text-center">
            Pizza halal Orsay • Livraison pizza Mondétour • Pizza artisanale 91400 • DI NAPOLI PIZZA
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-4 bg-[#0B1D39] text-white p-3 rounded-full shadow-lg hover:bg-[#09152A] transition-colors z-40"
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;