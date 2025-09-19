import React from "react";
import { Card, CardContent } from "./ui/card";
import { Heart, Award, Clock, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="text-[#20A35B]" size={32} />,
      title: "Pâte fraîche maison",
      description: "Préparée quotidiennement avec amour et savoir-faire traditionnel"
    },
    {
      icon: <Award className="text-[#20A35B]" size={32} />,
      title: "100% Halal",
      description: "Tous nos produits respectent les standards halal les plus stricts"
    },
    {
      icon: <Clock className="text-[#20A35B]" size={32} />,
      title: "Service rapide",
      description: "Livraison express et service de qualité pour votre satisfaction"
    },
    {
      icon: <Users className="text-[#20A35B]" size={32} />,
      title: "Quartier Mondétour",
      description: "Fiers de servir notre communauté locale depuis des années"
    }
  ];

  return (
    <section id="apropos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D39] mb-4 flex items-center justify-center space-x-3">
            <span>À propos</span>
          </h2>
          <p className="text-xl text-[#5B6472] max-w-3xl mx-auto leading-relaxed">
            DI NAPOLI PIZZA vous propose une authentique expérience culinaire italienne 
            au cœur du quartier Mondétour à Orsay. Notre passion pour la qualité se reflète 
            dans chaque pizza artisanale que nous préparons.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B1D39] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5B6472] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <Card className="bg-gradient-to-r from-[#F5F7FA] to-white border-l-4 border-l-[#20A35B]">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1D39] mb-4">
                  Notre engagement qualité
                </h3>
                <div className="space-y-4 text-[#5B6472] leading-relaxed">
                  <p>
                    Chez DI NAPOLI PIZZA, nous croyons que chaque pizza raconte une histoire. 
                    C'est pourquoi nous préparons notre pâte fraîche chaque jour, en utilisant 
                    uniquement des ingrédients de première qualité.
                  </p>
                  <p>
                    Notre équipe passionnée met tout en œuvre pour vous offrir une expérience 
                    gustative exceptionnelle, que ce soit en livraison ou à emporter. 
                    Nous sommes fiers de servir la communauté d'Orsay et du quartier Mondétour 
                    avec des produits 100% halal.
                  </p>
                  <p>
                    Avec notre service de livraison gratuite 7j/7, nous nous engageons à 
                    apporter le goût authentique de l'Italie directement chez vous, 
                    dans le respect de vos valeurs et de vos traditions.
                  </p>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="bg-[#0B1D39] text-white p-8 rounded-lg inline-block">
                  <div className="text-4xl font-bold mb-2">7j/7</div>
                  <div className="text-lg mb-4">À votre service</div>
                  <div className="text-sm opacity-90">
                    Livraison gratuite<br />
                    minimum 15€
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;