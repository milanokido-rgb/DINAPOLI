import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, MapPin, Clock, CreditCard, Truck } from "lucide-react";
import { mockData } from "../data/mock";

const Info = ({ isOpen, nextOpening }) => {
  const openingHours = [
    { day: "Lundi - Jeudi", hours: "11:00-14:00 & 18:00-22:30" },
    { day: "Vendredi", hours: "11:00-13:00 & 18:00-22:30" },
    { day: "Samedi", hours: "11:00-14:00 & 18:00-22:30" },
    { day: "Dimanche", hours: "11:00-14:00 & 18:00-22:30" }
  ];

  return (
    <section id="infos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D39] mb-4 flex items-center justify-center space-x-3">
            <span>Infos & Localisation</span>
          </h2>
          <p className="text-xl text-[#5B6472] max-w-2xl mx-auto">
            Toutes les informations pratiques pour nous contacter et nous trouver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact & Info Card */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="bg-[#0B1D39] text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Phone size={24} />
                <span>Informations pratiques</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="text-[#20A35B]" size={20} />
                <div>
                  <p className="font-semibold text-[#0B1D39]">Téléphone</p>
                  <a 
                    href="tel:0169281414"
                    className="text-[#20A35B] hover:underline font-medium"
                  >
                    {mockData.businessInfo.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#20A35B] mt-1" size={20} />
                <div>
                  <p className="font-semibold text-[#0B1D39]">Adresse</p>
                  <a 
                    href={mockData.businessInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5B6472] hover:text-[#20A35B] transition-colors"
                  >
                    {mockData.businessInfo.address}
                  </a>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center space-x-3">
                <Clock className="text-[#20A35B]" size={20} />
                <div>
                  <p className="font-semibold text-[#0B1D39]">Statut actuel</p>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isOpen 
                        ? 'bg-[#20A35B] text-white' 
                        : 'bg-[#D7263D] text-white'
                    }`}>
                      {isOpen ? 'Ouvert' : 'Fermé'}
                    </span>
                    {nextOpening && (
                      <span className="text-sm text-[#5B6472]">{nextOpening}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Features */}
              {mockData.businessInfo.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#20A35B] rounded-full"></div>
                  <span className="text-[#5B6472]">{feature}</span>
                </div>
              ))}

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="tel:0169281414"
                  className="w-full bg-[#20A35B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Appeler maintenant</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours Card */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="bg-[#0B1D39] text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Clock size={24} />
                <span>Horaires d'ouverture</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0">
                    <span className="font-semibold text-[#0B1D39]">{schedule.day}</span>
                    <span className="text-[#5B6472]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note :</strong> Horaires en heure locale (UTC+2, Europe/Paris)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Map */}
        <Card className="mt-8 hover:shadow-xl transition-shadow">
          <CardHeader className="bg-[#0B1D39] text-white">
            <CardTitle className="text-xl flex items-center space-x-2">
              <MapPin size={24} />
              <span>Localisation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative h-64 md:h-80">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.4!2d2.1825293!3d48.6850874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d60ef5eeeaa5%3A0x168604c892220e3!2sDi%20Napoli%20Pizza!5e0!3m2!1sfr!2sfr!4v1640000000000!5m2!1sfr!2sfr`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DI NAPOLI PIZZA Location"
              ></iframe>
            </div>
            <div className="p-4">
              <a
                href={mockData.businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0B1D39] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#09152A] transition-colors flex items-center justify-center space-x-2"
              >
                <MapPin size={20} />
                <span>Voir l'itinéraire</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Info;