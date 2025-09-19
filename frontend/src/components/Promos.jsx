import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Promos = () => {
  const promosData = [
    {
      title: "🔥 À EMPORTER (7/7)",
      items: [
        "1 pizza Senior achetée = la 2e à 2,00 €",
        "1 pizza Familiale achetée = la 2e à 4,00 €"
      ],
      conditions: "Valable sur Senior & Familiale, sauf 'Di Napoli'. Offre non cumulable.",
      badge: "À emporter"
    },
    {
      title: "🔥 EN LIVRAISON (7/7)",
      items: [
        "1 pizza achetée = la 2e à -50% (la moins chère)",
        "2 pizzas achetées = la 3e offerte (la moins chère)"
      ],
      conditions: "Valable sur Senior & Familiale, sauf 'Di Napoli'. Offre non cumulable.",
      badge: "Livraison"
    }
  ];

  return (
    <section id="promos" className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D39] mb-4 flex items-center justify-center space-x-3">
            <span>🎯</span>
            <span>Promos</span>
          </h2>
          <p className="text-xl text-[#5B6472] max-w-2xl mx-auto">
            Profitez de nos offres exceptionnelles tous les jours !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {promosData.map((promo, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-[#20A35B]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-[#0B1D39]">
                    {promo.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-[#20A35B] text-white">
                    {promo.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {promo.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#20A35B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#0B1D39] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm text-orange-800 font-medium">
                    ⚠️ {promo.conditions}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promos;