import React from 'react';
const menuData = [
  {
    category: 'Entrées',
    items: [
      { name: 'Salade César', description: 'Salade romaine, poulet grillé, parmesan, croûtons, sauce César maison', price: '8,50 €' },
      { name: 'Soupe du jour', description: 'Préparée chaque matin avec des légumes frais et de saison', price: '6,00 €' },
      { name: 'Tartare de saumon', description: 'Saumon frais coupé au couteau, câpres, citron vert, oignons rouges', price: '9,50 €' },
      { name: 'Bruschetta', description: 'Pain grillé, tomates cerises, basilic, mozzarella, huile d’olive', price: '7,20 €' },
    ],
  },
  {
    category: 'Plats principaux',
    items: [
      { name: 'Filet de saumon', description: 'Filet de saumon frais, sauce citronnée, légumes grillés et riz sauvage', price: '16,90 €' },
      { name: 'Bœuf bourguignon', description: 'Plat mijoté au vin rouge avec carottes, oignons et pommes de terre', price: '18,50 €' },
      { name: 'Risotto aux champignons', description: 'Crémeux au parmesan, cèpes, pleurotes et huile de truffe', price: '15,80 €' },
      { name: 'Poulet tikka masala', description: 'Poulet mariné aux épices, sauce crémeuse, riz basmati', price: '17,00 €' },
      { name: 'Burger maison', description: 'Pain brioché, steak haché de bœuf, cheddar, salade, frites maison', price: '14,50 €' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Fondant au chocolat', description: 'Cœur coulant au chocolat noir, servi avec une boule de glace vanille', price: '7,00 €' },
      { name: 'Tarte tatin', description: 'Pommes caramélisées, pâte croustillante, crème fraîche ou glace', price: '6,50 €' },
      { name: 'Tiramisu maison', description: 'Crème mascarpone, café, biscuits imbibés, cacao', price: '6,80 €' },
      { name: 'Assiette de fromages', description: 'Sélection de fromages affinés, confiture de figue, pain aux noix', price: '8,00 €' },
    ],
  },
  {
    category: 'Boissons',
    items: [
      { name: 'Eau plate ou gazeuse', description: 'Bouteille 50 cl', price: '2,50 €' },
      { name: 'Verre de vin', description: 'Rouge, blanc ou rosé – 12 cl', price: '4,00 €' },
      { name: 'Bière artisanale', description: 'Pression blonde ou ambrée – 25 cl', price: '5,00 €' },
      { name: 'Soda au choix', description: 'Coca-Cola, Orangina, Ice Tea, Perrier – 33 cl', price: '3,00 €' },
      { name: 'Café ou thé', description: 'Expresso, allongé ou thé au choix', price: '2,20 €' },
    ],
  },
  {
    category: 'Menus enfants',
    items: [
      { name: 'Mini burger + frites', description: 'Burger au steak haché et fromage, servi avec des frites et une boisson', price: '9,00 €' },
      { name: 'Nuggets + purée', description: 'Filets de poulet croustillants, purée maison, compote en dessert', price: '8,50 €' },
    ],
  },
];


export default function Menu() {
  return (
    // <div className="p-8 max-w-4xl mx-auto">
    //   <h1 className="text-3xl font-bold text-center mb-8">Notre Menu</h1>
    //   {menuData.map((section) => (
    //     <div key={section.category} className="mb-10">
    //       <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{section.category}</h2>
    //       <ul className="space-y-4">
    //         {section.items.map((item, idx) => (
    //           <li key={idx} className="flex justify-between items-start">
    //             <div>
    //               <p className="font-medium">{item.name}</p>
    //               {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
    //             </div>
    //             <span className="font-semibold text-right whitespace-nowrap">{item.price}</span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // // </div>
    //   <div className="p-8 max-w-4xl mx-auto font-sans">
    //   <h1 className="text-4xl font-serif text-center text-gray-800 mb-12 tracking-tight">
    //     Notre Menu
    //   </h1>
    //   {menuData.map((section) => (
    //     <div key={section.category} className="mb-12">
    //       <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-6">
    //         {section.category}
    //       </h2>
    //       <ul className="space-y-6">
    //         {section.items.map((item, idx) => (
    //           <li
    //             key={idx}
    //             className="flex justify-between items-start group hover:bg-gray-50 p-4 rounded-lg transition duration-300 ease-in-out"
    //           >
    //             <div>
    //               <p className="text-lg font-medium text-gray-800 group-hover:text-black">
    //                 {item.name}
    //               </p>
    //               {item.description && (
    //                 <p className="text-sm text-gray-500 mt-1">{item.description}</p>
    //               )}
    //             </div>
    //             <span className="text-base font-semibold text-gray-700 whitespace-nowrap">
    //               {item.price}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ))}
    // </div>
     <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="backdrop-blur-sm bg-white/80 min-h-screen p-8 max-w-4xl mx-auto font-sans">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-12 tracking-tight">
          Notre Menu
        </h1>
        {menuData.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-6">
              {section.category}
            </h2>
            <ul className="space-y-6">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-start group hover:bg-white/60 p-4 rounded-lg transition duration-300 ease-in-out"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-800 group-hover:text-black">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    )}
                  </div>
                  <span className="text-base font-semibold text-gray-700 whitespace-nowrap">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
