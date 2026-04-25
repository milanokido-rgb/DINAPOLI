import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = ({ isOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#promos", label: "Promos" },
    { href: "#menu", label: "Menu" },
    { href: "#infos", label: "Infos" },
    { href: "#galerie", label: "Galerie" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0B1D39] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_9612bbd2-75d2-4166-85ae-9de002148fbf/artifacts/a2vnov45_ChatGPT%20Image%2019%20sept.%202025%2C%2022_49_40.png" 
              alt="DI NAPOLI PIZZA Logo" 
              className="h-12 w-12"
            />
            <div className="font-bold text-lg">DI NAPOLI PIZZA</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-gray-300 transition-colors text-sm font-medium"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="tel:0169281414"
              className="bg-white text-[#0B1D39] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Commander maintenant</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                >
                  <span>{item.label}</span>
                </button>
              ))}
              
              <div className="px-4 pt-4">
                <a
                  href="tel:0169281414"
                  className="block w-full bg-white text-[#0B1D39] text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 Commander maintenant
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;