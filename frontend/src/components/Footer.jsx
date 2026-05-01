import React from "react";
import { Phone, MapPin, Clock, Heart, Building2, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
                src="https://customer-assets.emergentagent.com/job_9612bbd2-75d2-4166-85ae-9de002148fbf/artifacts/a2vnov45_ChatGPT%20Image%2019%20sept.%202025%2C%2022_49_40.png" 
                alt="DI NAPOLI PIZZA Logo" 
                className="h-14 w-14"
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
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    data-testid="footer-mentions-legales-link"
                    className="text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors"
                  >
                    Mentions légales
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white text-[#0B1D39]"
                  data-testid="mentions-legales-dialog"
                >
                  <DialogHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#0B1D39] text-white flex items-center justify-center">
                        <FileText size={20} />
                      </div>
                      <DialogTitle className="text-2xl font-bold">
                        Mentions légales
                      </DialogTitle>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <div className="bg-[#F5F7FA] rounded-lg p-5">
                      <h3 className="font-semibold text-[#0B1D39] mb-3 flex items-center space-x-2">
                        <Building2 size={18} className="text-[#20A35B]" />
                        <span>Éditeur du site</span>
                      </h3>
                      <dl className="space-y-2 text-sm">
                        <div className="flex flex-col sm:flex-row sm:space-x-2">
                          <dt className="font-semibold sm:w-40">Nom du restaurant :</dt>
                          <dd>DI NAPOLI PIZZA</dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-2">
                          <dt className="font-semibold sm:w-40">Adresse :</dt>
                          <dd>
                            50 Rue de la Ferme, 91400 Orsay
                            <br />
                            Quartier Mondétour, France
                          </dd>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:space-x-2">
                          <dt className="font-semibold sm:w-40">Téléphone :</dt>
                          <dd>
                            <a
                              href="tel:0169281414"
                              className="text-[#20A35B] hover:underline font-medium"
                            >
                              01 69 28 14 14
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="space-y-4 text-sm leading-relaxed text-[#5B6472]">
                      <div>
                        <h3 className="font-semibold text-[#0B1D39] mb-1">
                          Responsabilité
                        </h3>
                        <p>
                          Le restaurant <strong>DI NAPOLI PIZZA</strong> est
                          seul responsable du contenu, de la publication, de
                          l'hébergement et de la maintenance du présent site
                          internet. Toute responsabilité liée à l'utilisation
                          du site relève exclusivement du restaurant.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#0B1D39] mb-1">
                          Nature du site
                        </h3>
                        <p>
                          Ce site est un <strong>site vitrine</strong> destiné
                          uniquement à la présentation du restaurant, de ses
                          menus et de ses offres. Il ne réalise{" "}
                          <strong>aucune collecte de données personnelles</strong>{" "}
                          et ne propose aucun formulaire en ligne.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#0B1D39] mb-1">
                          Hébergement
                        </h3>
                        <p>
                          Le site est hébergé par :<br />
                          <strong>Netlify, Inc.</strong>
                          <br />
                          2325 3rd Street, Suite 296
                          <br />
                          San Francisco, CA 94107
                          <br />
                          USA
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#0B1D39] mb-1">
                          Propriété intellectuelle
                        </h3>
                        <p>
                          L'ensemble des contenus présents sur ce site (textes,
                          images, logos, photographies) est la propriété
                          exclusive de DI NAPOLI PIZZA. Toute reproduction,
                          totale ou partielle, est interdite sans autorisation
                          préalable.
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <span>•</span>
              <span>100% Halal certifié</span>
              <span>•</span>
              <span>Pâte fraîche quotidienne</span>
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