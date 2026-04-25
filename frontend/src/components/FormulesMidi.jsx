import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Pizza, Salad, Drumstick, Sandwich, UtensilsCrossed, Soup } from "lucide-react";

const FormulesMidi = () => {
  const formules = [
    {
      title: "Menu Pizza",
      icon: Pizza,
      price: "12 €",
      items: [
        "1 Pizza Junior au choix",
        "+ 1 Dessert (sauf glace)*",
        "+ 1 Boisson 33 cl"
      ]
    },
    {
      title: "Menu Salade",
      icon: Salad,
      price: "12 €",
      items: [
        "1 Salade au choix",
        "+ Pain offert",
        "+ 1 Dessert (sauf glace)*",
        "+ 1 Boisson 33 cl"
      ]
    },
    {
      title: "Menu Tex Mex",
      icon: Drumstick,
      price: "12 €",
      items: [
        "8 Nuggets ou 8 Wings",
        "+ Potatoes",
        "+ 1 Dessert (sauf glace)*",
        "+ 1 Boisson 33 cl"
      ]
    },
    {
      title: "Menu Cheese",
      icon: UtensilsCrossed,
      price: "12 €",
      items: [
        "1 Cheese",
        "+ Frites",
        "+ 1 Dessert (sauf glace)*",
        "+ 1 Boisson 33 cl"
      ]
    },
    {
      title: "Menu Sandwich",
      icon: Sandwich,
      price: "12 €",
      items: [
        "1 Sandwich au choix",
        "+ Frites",
        "+ 1 Dessert (sauf glace)*",
        "+ 1 Boisson 33 cl"
      ]
    },
    {
      title: "Menu Panini",
      icon: Soup,
      price: "12 €",
      items: [
        "1 Panini au choix",
        "+ Frites",
        "+ 1 Dessert (sauf glace)*",
        "+ 1 Boisson 33 cl"
      ]
    }
  ];

  return (
    <section
      id="formules"
      className="py-16 bg-gradient-to-b from-yellow-50 to-white"
      data-testid="formules-midi-section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[#20A35B] text-white mb-4 px-4 py-1 text-sm">
            Spécial Bureau
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D39] mb-4">
            Les Formules Midi
          </h2>
          <p className="text-xl text-[#5B6472] max-w-2xl mx-auto">
            6 formules complètes à <span className="font-bold text-[#20A35B]">12 €</span> seulement, servies le midi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formules.map((formule, index) => {
            const Icon = formule.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-[#20A35B] bg-white"
                data-testid={`formule-card-${index}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#0B1D39] text-white p-2 rounded-lg">
                        <Icon size={22} />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#0B1D39] uppercase tracking-wide">
                        {formule.title}
                      </CardTitle>
                    </div>
                    <span className="text-2xl font-extrabold text-[#D7263D]">
                      {formule.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {formule.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-2 text-[#0B1D39]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#20A35B] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 max-w-3xl mx-auto bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg">
          <p className="text-sm text-orange-800 font-medium text-center">
            * Supplément 1 € pour le tiramisu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormulesMidi;
