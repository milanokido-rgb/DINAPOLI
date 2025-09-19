import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Menu = () => {
  const [selectedSize, setSelectedSize] = useState("junior");

  const menuCategories = [
    {
      id: "standard",
      name: "Sauce tomate (standard)",
      prices: { junior: "7,50 €", senior: "12,00 €", familiale: "16,00 €" },
      pizzas: ["Di Napoli", "Reine", "Exotique", "Capri", "Végétarienne", "Roquefort", "Campione", "Miami", "Fajitas", "Orientale", "Napolitaine", "Calzone soufflée", "Palermo"]
    },
    {
      id: "special",
      name: "Sauce tomate (spécial)",
      prices: { junior: "9,50 €", senior: "15,00 €", familiale: "21,00 €" },
      pizzas: ["Fermière", "Boursin", "4 Fromages", "3 Jambons", "Campagnarde", "Parisienne"]
    },
    {
      id: "americaine",
      name: "Américaines",
      prices: { junior: "11,00 €", senior: "16,00 €", familiale: "21,50 €" },
      pizzas: ["Américaine", "Texas", "4 Saisons", "San Pietro", "Sicilienne", "Savoyarde", "Carnivore"]
    },
    {
      id: "creme",
      name: "Crème fraîche",
      prices: { junior: "9,50 €", senior: "15,50 €", familiale: "21,50 €" },
      pizzas: ["Chèvre Miel", "Chicken", "Parmentière", "Venezia", "Milano", "Tartiflette", "Formaggi", "Rimini", "Pizza du Chef", "Raclette [Nouveau]", "Cannibale [Nouveau]"]
    },
    {
      id: "nouvelles",
      name: "Nouvelles Saveurs",
      prices: { junior: "10,00 €", senior: "16,00 €", familiale: "22,00 €" },
      pizzas: ["Casanova", "Mexicaine", "Maestro", "La Boisée", "Kebab"]
    }
  ];

  const otherItems = [
    { category: "Spéciale", items: [{ name: "Saumon", price: "Jr 11,00 € | Sr 17,00 € | Fam 23,00 €", description: "crème, saumon fumé, œufs de lump, citron" }] },
    { category: "Salades", items: [{ name: "Salade verte", price: "4,00 €" }, { name: "Niçoise/Printanière/Au poulet/Chèvre chaud", price: "7,90 €" }] },
    { category: "Tex-Mex", items: [{ name: "10 nuggets / 8 wings / 8 tenders / Mix Mexico", price: "9,00 €", description: "avec potatoes" }] },
    { category: "Paninis", items: [{ name: "4 Fromages, Merguez, Jambon* Fromage, Saumon fumé, Thon, Poulet, Viande hachée", price: "6,50 €", description: "+ 1 Coca 33 cl offert" }] },
    { category: "Tacos", items: [{ name: "1 viande", price: "8,50 €" }, { name: "2 viandes", price: "9,50 €" }] },
    { category: "Burgers", items: [{ name: "Cheese", price: "6,50 €" }, { name: "Double", price: "7,50 €" }, { name: "Triple", price: "8,50 €" }] },
    { category: "Desserts", items: [{ name: "Brownie", price: "2,50 €" }, { name: "Tarte pommes/Daim", price: "3,00 €" }, { name: "Tiramisu", price: "3,00 €" }] }
  ];

  return (
    <section id="menu" className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D39] mb-4 flex items-center justify-center space-x-3">
            <span>🍕</span>
            <span>Menu</span>
          </h2>
          <p className="text-xl text-[#5B6472] max-w-2xl mx-auto">
            Découvrez notre sélection de pizzas artisanales et spécialités
          </p>
        </div>

        <Tabs defaultValue="pizzas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pizzas" className="text-lg font-semibold">Pizzas</TabsTrigger>
            <TabsTrigger value="autres" className="text-lg font-semibold">Autres spécialités</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pizzas">
            {/* Size Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-2 shadow-md">
                {["junior", "senior", "familiale"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-md font-semibold capitalize transition-colors ${
                      selectedSize === size
                        ? "bg-[#0B1D39] text-white"
                        : "text-[#0B1D39] hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Pizza Categories */}
            <div className="space-y-8">
              {menuCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-[#0B1D39] text-white">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <Badge variant="secondary" className="bg-white text-[#0B1D39] font-bold text-lg">
                        {category.prices[selectedSize]}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {category.pizzas.map((pizza, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                          <span className="text-[#0B1D39] font-medium">{pizza}</span>
                          {pizza.includes("[Nouveau]") && (
                            <Badge variant="secondary" className="ml-2 bg-[#20A35B] text-white text-xs">
                              Nouveau
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="autres">
            <div className="grid md:grid-cols-2 gap-6">
              {otherItems.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-[#0B1D39] text-white">
                    <CardTitle className="text-xl">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-[#0B1D39]">{item.name}</h4>
                              {item.description && (
                                <p className="text-sm text-[#5B6472] mt-1">{item.description}</p>
                              )}
                            </div>
                            <span className="font-bold text-[#20A35B] ml-4">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#5B6472] bg-white p-4 rounded-lg shadow-md inline-block">
            <strong>100% halal</strong> • Jambon* = dinde • Lardons* = veau • Pepperoni* = bœuf
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;