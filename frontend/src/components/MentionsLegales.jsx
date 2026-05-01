import React from "react";
import { Building2, MapPin, Phone, User, FileText } from "lucide-react";

const MentionsLegales = () => {
  return (
    <section
      id="mentions-legales"
      className="py-16 bg-white border-t border-gray-200"
      data-testid="mentions-legales-section"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0B1D39] text-white mb-4">
            <FileText size={26} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D39] mb-3">
            Mentions légales
          </h2>
          <p className="text-base text-[#5B6472]">
            Conformément aux dispositions des articles 6-III et 19 de la
            loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie
            numérique (LCEN).
          </p>
        </div>

        <div className="bg-[#F5F7FA] rounded-xl p-6 md:p-8 shadow-sm">
          <dl className="divide-y divide-gray-200">
            <div className="grid md:grid-cols-3 gap-3 py-4">
              <dt className="flex items-center space-x-2 font-semibold text-[#0B1D39]">
                <Building2 size={18} className="text-[#20A35B]" />
                <span>Nom du restaurant</span>
              </dt>
              <dd className="md:col-span-2 text-[#0B1D39]">
                DI NAPOLI PIZZA
              </dd>
            </div>

            <div className="grid md:grid-cols-3 gap-3 py-4">
              <dt className="flex items-center space-x-2 font-semibold text-[#0B1D39]">
                <User size={18} className="text-[#20A35B]" />
                <span>Raison sociale</span>
              </dt>
              <dd className="md:col-span-2 text-[#0B1D39]">
                Pizzeria DI NAPOLI PIZZA
              </dd>
            </div>

            <div className="grid md:grid-cols-3 gap-3 py-4">
              <dt className="flex items-center space-x-2 font-semibold text-[#0B1D39]">
                <MapPin size={18} className="text-[#20A35B]" />
                <span>Adresse</span>
              </dt>
              <dd className="md:col-span-2 text-[#0B1D39]">
                50 Rue de la Ferme<br />
                91400 Orsay<br />
                Quartier Mondétour, France
              </dd>
            </div>

            <div className="grid md:grid-cols-3 gap-3 py-4">
              <dt className="flex items-center space-x-2 font-semibold text-[#0B1D39]">
                <Phone size={18} className="text-[#20A35B]" />
                <span>Téléphone</span>
              </dt>
              <dd className="md:col-span-2">
                <a
                  href="tel:0169281414"
                  className="text-[#20A35B] hover:underline font-medium"
                >
                  01 69 28 14 14
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 pt-6 border-t border-gray-200 space-y-4 text-sm text-[#5B6472] leading-relaxed">
            <div>
              <h3 className="font-semibold text-[#0B1D39] mb-1">Hébergement</h3>
              <p>
                Le présent site est hébergé par son prestataire technique. Les
                données collectées via les formulaires de contact sont utilisées
                exclusivement pour répondre aux demandes des utilisateurs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0B1D39] mb-1">Propriété intellectuelle</h3>
              <p>
                L'ensemble des contenus présents sur ce site (textes, images,
                logos, photographies) est la propriété exclusive de DI NAPOLI
                PIZZA, sauf mention contraire. Toute reproduction, totale ou
                partielle, est interdite sans autorisation préalable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0B1D39] mb-1">
                Données personnelles
              </h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification et de
                suppression de vos données. Pour toute demande, veuillez nous
                contacter au 01 69 28 14 14.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;
