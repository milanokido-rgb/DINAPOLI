import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D39] mb-4 flex items-center justify-center space-x-3">
            <span>Contact</span>
          </h2>
          <p className="text-xl text-[#5B6472] max-w-2xl mx-auto">
            Une envie de pizza ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primary Contact - Phone */}
          <Card className="lg:col-span-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="bg-[#20A35B] text-white text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-3">
                <Phone size={32} />
                <span>Commandez par téléphone</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <p className="text-lg text-[#5B6472] mb-4">
                  Notre méthode de commande principale
                </p>
                <a
                  href="tel:0169281414"
                  className="text-4xl md:text-5xl font-bold text-[#0B1D39] hover:text-[#20A35B] transition-colors"
                >
                  01 69 28 14 14
                </a>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-3 text-[#5B6472]">
                  <Clock size={20} />
                  <span>Réponse immédiate pendant nos heures d'ouverture</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-[#5B6472]">
                  <MessageCircle size={20} />
                  <span>Équipe disponible et à votre écoute</span>
                </div>
              </div>

              <a
                href="tel:0169281414"
                className="inline-block bg-[#0B1D39] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#09152A] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Appeler maintenant
              </a>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-[#0B1D39] text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Mail size={24} />
                <span>Infos rapides</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#0B1D39] mb-2">📍 Adresse</h4>
                  <p className="text-[#5B6472] text-sm">
                    50 Rue de la Ferme<br />
                    91400 Orsay<br />
                    Quartier Mondétour
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0B1D39] mb-2">🚚 Livraison</h4>
                  <p className="text-[#5B6472] text-sm">
                    Gratuite 7j/7<br />
                    Minimum 15€<br />
                    Domicile & bureau
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0B1D39] mb-2">💳 Paiement</h4>
                  <p className="text-[#5B6472] text-sm">
                    Carte bancaire<br />
                    Tickets restaurant<br />
                    Espèces
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0B1D39] mb-2">🥘 Spécialités</h4>
                  <p className="text-[#5B6472] text-sm">
                    100% Halal<br />
                    Pâte fraîche maison<br />
                    Pizzas artisanales
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-[#0B1D39] to-[#09152A] text-white text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Prêt à commander votre pizza préférée ?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Appelez-nous dès maintenant et régalez-vous !
              </p>
              <a
                href="tel:0169281414"
                className="inline-block bg-[#20A35B] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                🍕 Commander maintenant - 01 69 28 14 14
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;