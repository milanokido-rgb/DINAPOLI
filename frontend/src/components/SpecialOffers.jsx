import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const SpecialOffers = () => {
  const offers = [
    {
      name: "Offre Junior",
      price: "25,00 €",
      description: "3 pizzas Junior + 1 Maxi Coca 1,25 L",
      color: "bg-blue-500"
    },
    {
      name: "Offre Senior",
      price: "25,00 €",
      description: "2 pizzas Senior + 1 Maxi Coca 1,25 L",
      color: "bg-green-500"
    },
    {
      name: "Offre Mega",
      price: "35,00 €",
      description: "2 pizzas Familiale + 1 Maxi Coca 1,25 L",
      color: "bg-purple-500"
    },
    {
      name: "Offre Uno",
      price: "15,00 €",
      description: "1 pizza Junior + (4 wings | 4 tenders | 4 nuggets) + potatoes + 1 boisson 33 cl",
      color: "bg-orange-500"
    },
    {
      name: "Offre Couple",
      price: "21,00 €",
      description: "1 pizza Senior + (8 wings | 8 tenders | 8 nuggets) + potatoes + 2 boissons 33 cl",
      color: "bg-pink-500"
    },
    {
      name: "Offre Familiale",
      price: "28,00 €",
      description: "1 pizza Familiale + (12 wings | 12 nuggets | 12 tenders) + potatoes + 1 Maxi Coca 1,25 L",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D39] mb-4 flex items-center justify-center space-x-3">
            <span>Offres Pizzas + Boisson</span>
          </h2>
          <p className="text-xl text-[#5B6472] max-w-2xl mx-auto">
            Nos formules complètes pour tous les appétits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <CardHeader className={`${offer.color} text-white relative`}>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white text-gray-800">
                    Populaire
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">
                  {offer.name}
                </CardTitle>
                <div className="text-3xl font-bold">
                  {offer.price}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-[#5B6472] leading-relaxed">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;