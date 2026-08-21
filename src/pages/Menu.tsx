import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeTab, setActiveTab] = useState<'lunch' | 'dinner' | 'drinks' | 'happy'>('lunch');

  // Helper function to display badge text
  const getBadgeText = (badge: string) => {
    if (badge === 'GF') return 'Gluten Free';
    if (badge === 'GF/V') return 'Gluten Free • Vegan';
    if (badge === 'V') return 'Vegan';
    return badge;
  };

  // Force navbar to solid state on menu page
  useEffect(() => {
    // Add class to body to signal navbar to be solid
    document.body.classList.add('menu-page');
    
    return () => {
      document.body.classList.remove('menu-page');
    };
  }, []);

  const tabs = [
    { id: 'lunch' as const, label: 'Lunch', time: '11:30am - 5:00pm' },
    { id: 'dinner' as const, label: 'Dinner', time: '5:00pm - 9:00pm' },
    { id: 'drinks' as const, label: 'Drinks', time: 'All Day' },
    { id: 'happy' as const, label: 'Happy Hour', time: '3:00pm - 6:00pm' },
  ];

  const lunchMenu = {
    'Soups & Salads': [
      { name: 'French Onion Soup', price: 14, description: 'Caramelized onions, beef broth & IPA, Swiss & Parmesan' },
      { name: 'Smoked Seafood Chowder', price: '14 - 23', description: 'Assorted seafood, creamy New England style' },
      { name: 'Fiddle River Flair', price: '14 - 18', description: 'Organic greens, cherry tomatoes, basil vinaigrette', badge: 'GF' },
      { name: 'Wedge Salad', price: '14 - 18', description: 'Iceberg, Green Goddess, bacon, blue cheese', badge: 'GF' },
    ],
    'To Share': [
      { name: 'Earl Grey Smoked Candied Salmon', price: 19, description: 'Maple cured salmon, potato cake, horseradish cream', featured: true },
      { name: 'Truffle Fries', price: 12, description: 'Truffle, herbs, Grana Padano, chipotle mayo' },
      { name: 'Cod & Salmon Fish Cakes', price: 17, description: 'Panko crusted, lemon aioli, Asian slaw' },
      { name: 'Crispy Calamari', price: 18, description: 'Spiced squid, tzatziki, Asian slaw' },
      { name: 'Coconut Shrimp', price: 18, description: 'Coconut crusted, pineapple curry dip' },
      { name: 'Canadian Mussels & Fries', price: 22, description: 'Blue cheese cream OR tomato coconut broth', badge: 'GF' },
    ],
    'Burgers': [
      { name: 'Wild Game Burger', price: 26, description: 'Elk & Bison, forest mushrooms, kennebec fries', featured: true },
      { name: 'Chicken Burger', price: 24, description: '4oz breast, mayo-mustard, kennebec fries' },
      { name: 'Fish Burger', price: 22, description: 'Cod & Salmon patty, chipotle mayo, kennebec fries' },
    ],
    'Mains': [
      { name: 'Alberta AAA Striploin', price: 45, description: '8oz striploin, brandy-peppercorn sauce, fries', badge: 'GF' },
      { name: 'Wild Game Bolognese', price: 33, description: 'Elk, bison & wild boar, fettuccine, parmesan', featured: true },
      { name: 'Atlantic Salmon', price: 35, description: 'Miso-maple glaze', badge: 'GF' },
      { name: 'Fish & Chips', price: 29, description: 'Panko cod, kennebec fries, apple-slaw' },
      { name: 'Crab & Lobster Poutine', price: 24, description: 'Kennebec fries, bisque sauce, Quebec curd' },
    ],
    'Desserts': [
      { name: "Greedy O'Grady", price: 13, description: "Baileys ice cream, almond praline, Oreo crust", featured: true },
      { name: 'Maple Pecan Cheesecake', price: 13, description: 'House made' },
      { name: 'Chocolate Truffle Bar', price: 12, description: 'Whipped cream, toasted almonds' },
      { name: 'Crème Brûlée', price: 12, description: 'Toasted almond brittle' },
    ],
  };

  const dinnerMenu = {
    'From the Soup Kettle': [
      { name: 'Smoked Seafood Chowder', price: '14 - 21', description: 'Assorted seafood, creamy New England style, chive confetti' },
      { name: 'French Onion Soup', price: 14, description: 'Caramelized onions, beef broth & IPA, Swiss & Parmesan' },
    ],
    'From the Garden': [
      { name: 'Fiddle River Flair', price: '14 - 18', description: 'Organic greens, cherry tomatoes, basil vinaigrette', badge: 'GF' },
    ],
    'Appetizers': [
      { name: 'Earl Grey Smoked Candied Salmon', price: 19, description: 'Maple cured Atlantic salmon, hickory potato cake, horseradish cream', badge: 'GF', featured: true },
      { name: 'Salmon & Cod Fish Cakes', price: 17, description: 'Panko crusted, lemon aioli, chipotle mayo, garden salad' },
      { name: 'Forest Mushroom Bruschetta', price: 17, description: 'Wild mushrooms, smoked garlic mayo, balsamic glaze, grana padano' },
      { name: 'Crispy Calamari', price: 18, description: 'Spiced squid, tzatziki, garden slaw' },
      { name: 'Fresh Canadian Mussels', price: 21, description: 'Blue cheese cream OR tomato coconut broth', badge: 'GF' },
      { name: 'Coconut Shrimps', price: 18, description: 'Coconut crusted, pineapple curry dip, garden salad' },
      { name: 'Bison Meatballs & Fried Bannock', price: 21, description: 'Alberta bison, Haskap berry compote, cinnamon bannock', badge: 'GF' },
    ],
    'Fish & Shellfish': [
      { name: 'Atlantic Lobster & Shrimp', price: 54, description: '5oz Canadian lobster tail, spiced shrimp skewers, drawn butter', badge: 'GF' },
      { name: 'Fiddle Fish Pot', price: 38, description: 'Salmon, snapper, prawns, mussels, clams, tomato-saffron broth', badge: 'GF', featured: true },
      { name: 'Arctic Char Spanakopita', price: 36, description: 'Arctic char, spinach, goat cheese, phyllo, tzatziki' },
      { name: 'Seafood Risotto', price: 36, description: 'Arborio rice, salmon, mussels, clams, squid, parmesan', badge: 'GF' },
      { name: 'Atlantic Salmon', price: 35, description: 'Miso-maple glaze, French lentil rice, seasonal vegetables', badge: 'GF' },
      { name: 'Fresh Steelhead Trout', price: 35, description: 'Pan-fried, red curry coconut-lime sauce', badge: 'GF' },
      { name: 'West Coast Fresh Snapper', price: 34, description: 'Butter baked, creamy garlic-dill sauce', badge: 'GF' },
      { name: 'Crumbed Fish & Chips', price: 29, description: 'Panko cod, kennebec fries, apple-slaw, tartar sauce' },
    ],
    'Pasta & Vegetarian': [
      { name: 'Wild Game Bolognaise', price: 35, description: 'Elk, bison & wild boar, pasta, parmesan', featured: true },
      { name: 'Fettuccine & Tiger Prawns', price: 29, description: 'Prawns, bacon, wild mushroom cream, grana padano' },
      { name: 'Fiddle Veggie Bowl', price: 29, description: 'French lentil rice, grilled vegetables, chickpea fritters', badge: 'GF/V' },
    ],
    'Wild Game & Meat': [
      { name: 'Alberta AAA NY Steak', price: 52, description: '8oz Manhattan-cut striploin, green peppercorn brandy sauce', badge: 'GF' },
      { name: 'Bison Petite Tender Medallion', price: 44, description: 'Grilled Alberta bison, wild Haskap berry sauce', badge: 'GF', featured: true },
      { name: 'Alberta Elk Stroganoff', price: 42, description: 'Slow braised elk, mustard demi-glace, pickles, sour cream', badge: 'GF' },
      { name: 'Vienna Schnitzel', price: 36, description: 'Crispy pork, lemon caper butter, lingonberry sauce' },
      { name: 'Banana Chip Crusted Chicken', price: 32, description: 'Buttermilk chicken, Thai basil & mango curry' },
      { name: 'Wild Game Meatloaf', price: 29, description: 'Elk, bison & boar, fried bannock, lingonberry demi-glace' },
      { name: 'Wild Game Burger', price: 26, description: 'Elk & Bison, forest mushrooms, kennebec fries' },
    ],
    'Desserts': [
      { name: "Greedy O'Grady", price: 13, description: "Baileys ice cream, almond praline pie, Oreo crust", featured: true },
      { name: 'Maple Pecan Cheesecake', price: 13, description: 'House made' },
      { name: 'Chocolate Truffle Bar', price: 12, description: 'Whipped cream, toasted almonds' },
      { name: 'Crème Brûlée', price: 12, description: 'Toasted almond brittle' },
      { name: 'Vanilla Ice Cream Sundae', price: 12, description: 'Hot caramel or chocolate, toasted almonds' },
      { name: 'Fruit Crumble', price: 12, description: 'Piping hot from the oven' },
    ],
  };

  const drinksMenu = {
    'Martini': [
      { name: 'Haskap Berry Martini', price: 12.50, description: 'Eau Clair Flourish gin, haskap berry jam, lemon, simple syrup', featured: true },
      { name: 'Espresso Martini', price: 12.50, description: 'Vodka, Kahlua, espresso, simple syrup' },
      { name: 'Lemon Drop', price: 12.50, description: 'Lemon vodka, lemon juice, sugar rim' },
      { name: 'Cosmopolitan', price: 12.50, description: 'Vodka, cranberry, lime, Grand Marnier' },
      { name: 'Sin City', price: 12.50, description: 'Vodka, melon liqueur, pineapple, lime' },
      { name: 'Sundog', price: 12.50, description: 'Coconut rum, vodka, pineapple, grenadine' },
      { name: 'Premium Martini', price: 14.50, description: 'Grey Goose Vodka or Bombay Sapphire Gin' },
      { name: 'Classic Martini', price: 12.50, description: 'Vodka or Gin, olives or twist' },
    ],
    'Cocktails': [
      { name: 'Thai Basil Smash', price: 12.50, description: 'Vodka, fresh basil, lime, pink grapefruit', featured: true },
      { name: 'Classic Aperol Spritz', price: 12.50, description: 'Aperol, Prosecco, soda, rosemary syrup' },
      { name: 'Empress Gin & Tonic', price: 12.50, description: 'Empress gin, tonic, rosemary' },
      { name: 'Gin Currant Fizz', price: 12.50, description: 'Gin, cassis liquor, soda, tonic' },
      { name: 'Fiddle Mule', price: 12.50, description: 'Prickly Pear vodka, ginger beer, lime' },
      { name: 'Ginger Margarita', price: 12.50, description: 'Tequila, Cointreau, lime, fresh ginger' },
      { name: 'Rocky Mountain Bluebird', price: 12.50, description: 'Tequila, blue curaçao, triple sec, lime' },
      { name: 'Old Fashioned', price: 12.50, description: 'Canadian rye whisky, bitters, orange' },
      { name: 'Mojito', price: 12.50, description: 'Rum, fresh mint, lime, sugar' },
      { name: 'Negroni', price: 12.50, description: 'Gin, Campari, sweet vermouth, orange' },
    ],
    'White Wine by the Glass': [
      { name: 'Henry Pelham Chardonnay', price: '14/19/38', description: 'Canada' },
      { name: 'MezzaCorona Pinot Grigio', price: '14/19/38', description: 'Italy' },
      { name: 'Babich Sauvignon Blanc', price: '14/19/38', description: 'New Zealand' },
      { name: 'Domane Wachau Organic', price: '14/19/38', description: 'Austria' },
      { name: 'Saintly Dry Rosé', price: '14/19/38', description: 'Canada' },
    ],
    'Red Wine by the Glass': [
      { name: 'Cathedral Cellar Cabernet', price: '14/19/38', description: 'South Africa' },
      { name: 'Desquiciado Malbec', price: '14/19/38', description: 'Argentina' },
      { name: 'Chateau Puybarbe Merlot', price: '14/19/38', description: 'France' },
      { name: 'Vineland Cabernet Franc', price: '14/19/38', description: 'Canada' },
    ],
    'Beer on Tap': [
      { name: 'Folding Mountain IPA', price: '8.50/10', description: '12oz / 16oz · Pitcher $29.25' },
      { name: 'Jasper The Bear Blond Ale', price: '8.50/10', description: '12oz / 16oz · Pitcher $29.25' },
      { name: "'88 Brewery Solid Gold", price: '8.50/10', description: 'Amber Lager · 12oz / 16oz · Pitcher $29.25' },
    ],
    'Beer Bottles & Ciders': [
      { name: 'Fat Tug IPA', price: 10.50 },
      { name: 'Banded Peak Hazy IPA', price: 10.50 },
      { name: 'Ten Peaks Pale Ale', price: 10.50 },
      { name: 'Lead Dog Black Ale', price: 10.50 },
      { name: 'Idle Hands Pilsner', price: 10.50 },
      { name: 'Stiegl Radler Grapefruit', price: 10.50 },
      { name: 'Strongbow Apple Cider', price: 10.50 },
      { name: 'Alpine Cranberry Sour', price: 9.50 },
      { name: 'Grumpy Bear Honey Wheat', price: 8.75 },
      { name: 'Babe Tangerine Dream', price: 8.75 },
      { name: 'Non-Alcoholic CRFT Blond', price: 8.75 },
      { name: 'Kokanee', price: 8.75 },
      { name: 'Coors Lite', price: 8.75 },
      { name: 'Budweiser', price: 8.75 },
      { name: 'Pear Cider', price: 8.75 },
      { name: 'Gluten Free Beer', price: 8.75 },
    ],
  };

  const happyHourMenu = {
    'Small Plates': [
      { name: 'Forest Mushroom Bruschetta', price: 10, description: '$10 Each' },
      { name: 'Wedge Salad', price: 10, description: '$10 Each' },
      { name: 'French Onion Soup', price: 10, description: '$10 Each' },
    ],
    'Wings & Fries': [
      { name: 'Chicken Wings (1lb)', price: 15, description: 'Salt & Pepper, Honey Garlic, Buffalo, Lemon Pepper', featured: true },
      { name: 'Truffle Fries', price: 10, description: 'With herbs and Grana Padano' },
    ],
    'Beverages': [
      { name: 'Beer & Wine', price: '50% OFF', description: 'All beer and wine selections' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a3d2e] via-[#15322a] to-[#0f2319]">
      {/* Menu Tabs - Responsive */}
      <div className="border-y border-[#3d6a55]/40 sticky top-[72px] lg:top-[80px] z-40 bg-[#1a3d2e] backdrop-blur-xl shadow-lg overflow-x-auto">
        <div className="max-w-4xl mx-auto">
          {/* Desktop: Horizontal centered */}
          <div className="hidden md:flex justify-center gap-12 px-6 py-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group text-center"
              >
                <div className={`font-jost text-[11px] uppercase tracking-widest mb-1 transition-colors ${
                  activeTab === tab.id ? 'text-gold' : 'text-cream/50 group-hover:text-cream'
                }`}>
                  {tab.label}
                </div>
                <div className={`text-[9px] ${activeTab === tab.id ? 'text-cream/60' : 'text-cream/30'}`}>
                  {tab.time}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile: Single Row Scrollable */}
          <div className="flex md:hidden gap-1 px-2 py-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 py-3 px-4 text-center rounded-lg transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30' 
                    : 'bg-[#3d6a55]/10 border border-[#3d6a55]/20'
                }`}
              >
                <div className={`font-jost text-[9px] uppercase tracking-wider mb-0.5 whitespace-nowrap transition-colors ${
                  activeTab === tab.id ? 'text-gold font-medium' : 'text-cream/50'
                }`}>
                  {tab.label}
                </div>
                <div className={`text-[7px] whitespace-nowrap ${activeTab === tab.id ? 'text-cream/60' : 'text-cream/30'}`}>
                  {tab.time}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-12">
        {activeTab === 'lunch' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center mb-12">
              <p className="font-dmSans text-[13px] text-cream/60">
                Available Friday - Saturday - Sunday · 11:30am to 5:00pm
              </p>
            </div>

            {Object.entries(lunchMenu).map(([category, items], catIndex) => (
              <div key={category} className="mb-20">
                <h2 className="font-cormorant text-[36px] text-gold mb-12 text-center">
                  {category}
                </h2>

                <div className="space-y-8">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`pb-8 border-b ${
                        item.featured ? 'border-gold/20' : 'border-[#3d6a55]/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-dmSans text-[18px] text-ivory font-medium flex-1">
                          {item.name}
                          {item.featured && (
                            <span className="ml-2 text-[10px] text-gold">★</span>
                          )}
                          {item.badge && (
                            <span className="ml-2 text-[9px] text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                              {getBadgeText(item.badge)}
                            </span>
                          )}
                        </h3>
                        <span className="font-jost text-[16px] text-gold ml-8">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-dmSans text-[13px] text-cream/60 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer Info */}
            <div className="mt-20 pt-12 border-t border-[#3d6a55]/40">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-cormorant text-[20px] text-gold mb-4">Add-Ons</h3>
                  <div className="space-y-2 font-dmSans text-[13px] text-cream/70">
                    <div className="flex justify-between">
                      <span>Grilled Mushrooms</span>
                      <span>$3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seasonal Vegetables</span>
                      <span>$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Salmon Filet</span>
                      <span>$18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lobster Tail</span>
                      <span>$27</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-cormorant text-[20px] text-gold mb-4">Kids Menu</h3>
                  <div className="space-y-2 font-dmSans text-[13px] text-cream/70">
                    <div className="flex justify-between">
                      <span>Fish & Chips</span>
                      <span>$9.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chicken Fingers</span>
                      <span>$9.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mac & Cheese</span>
                      <span>$7.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'dinner' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center mb-12">
              <p className="font-dmSans text-[13px] text-cream/60">
                Available Daily · 5:00pm to 9:30pm
              </p>
            </div>

            {Object.entries(dinnerMenu).map(([category, items], catIndex) => (
              <div key={category} className="mb-20">
                <h2 className="font-cormorant text-[36px] text-gold mb-12 text-center">
                  {category}
                </h2>

                <div className="space-y-8">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`pb-8 border-b ${
                        item.featured ? 'border-gold/20' : 'border-[#3d6a55]/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-dmSans text-[18px] text-ivory font-medium flex-1">
                          {item.name}
                          {item.featured && (
                            <span className="ml-2 text-[10px] text-gold">★</span>
                          )}
                          {item.badge && (
                            <span className="ml-2 text-[9px] text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                              {getBadgeText(item.badge)}
                            </span>
                          )}
                        </h3>
                        <span className="font-jost text-[16px] text-gold ml-8">
                          ${item.price}
                        </span>
                      </div>
                      <p className="font-dmSans text-[13px] text-cream/60 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer Info */}
            <div className="mt-20 pt-12 border-t border-[#3d6a55]/40">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-cormorant text-[20px] text-gold mb-4">Add to Your Dish</h3>
                  <div className="space-y-2 font-dmSans text-[13px] text-cream/70">
                    <div className="flex justify-between">
                      <span>Lobster Tail</span>
                      <span>$27</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Salmon Filet</span>
                      <span>$18</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chicken Breast</span>
                      <span>$14</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grilled Shrimps</span>
                      <span>$12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cinnamon Bannock & Berry Jam</span>
                      <span>$5</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-cormorant text-[20px] text-gold mb-4">Kids Menu</h3>
                  <div className="space-y-2 font-dmSans text-[13px] text-cream/70">
                    <div className="flex justify-between">
                      <span>Fish & Chips</span>
                      <span>$9.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chicken Fingers</span>
                      <span>$9.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mac & Cheese</span>
                      <span>$7.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pasta</span>
                      <span>$6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rice & Veggies</span>
                      <span>$5.50</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="font-dmSans text-[11px] text-cream/40 italic">
                  Please inform your server if you have any food allergies and special dietary restrictions
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'drinks' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center mb-12">
              <p className="font-dmSans text-[13px] text-cream/60">
                Available All Day
              </p>
            </div>

            {Object.entries(drinksMenu).map(([category, items], catIndex) => (
              <div key={category} className="mb-20">
                <h2 className="font-cormorant text-[36px] text-gold mb-12 text-center">
                  {category}
                </h2>

                <div className="space-y-8">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`pb-8 border-b ${
                        item.featured ? 'border-gold/20' : 'border-[#3d6a55]/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-dmSans text-[18px] text-ivory font-medium flex-1">
                          {item.name}
                          {item.featured && (
                            <span className="ml-2 text-[10px] text-gold">★</span>
                          )}
                        </h3>
                        <span className="font-jost text-[16px] text-gold ml-8">
                          ${item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="font-dmSans text-[13px] text-cream/60 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {/* Wine Bottles Section */}
            <div className="mt-24 pt-16 border-t border-[#3d6a55]/40">
              <h2 className="font-cormorant text-[40px] text-gold mb-16 text-center">
                Wine List
              </h2>

              <div className="grid md:grid-cols-2 gap-16">
                {/* White Wine */}
                <div>
                  <h3 className="font-cormorant text-[28px] text-ivory mb-8 text-center">White Wine Bottles</h3>
                  
                  <div className="mb-10">
                    <h4 className="font-dmSans text-[14px] text-gold mb-4 uppercase tracking-wider">Canada</h4>
                    <div className="space-y-4 font-dmSans text-[13px] text-cream/70">
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Moraine Sauvignon Blanc, Okanagan</span>
                        <span className="text-gold ml-4">$52</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Mission Hill Pinot Blanc, Okanagan</span>
                        <span className="text-gold ml-4">$52</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Tawse Quarry Road Riesling, Niagara</span>
                        <span className="text-gold ml-4">$57</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Henry Pelham Chardonnay, Niagara</span>
                        <span className="text-gold ml-4">$49</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Flat Rock Rusty Shed Chardonnay</span>
                        <span className="text-gold ml-4">$75</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Blasted Church Hatfield Fuse</span>
                        <span className="text-gold ml-4">$54</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Joie Farm Noble Blend, Okanagan</span>
                        <span className="text-gold ml-4">$59</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="font-dmSans text-[14px] text-gold mb-4 uppercase tracking-wider">International</h4>
                    <div className="space-y-4 font-dmSans text-[13px] text-cream/70">
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Babich Sauvignon Blanc, NZ</span>
                        <span className="text-gold ml-4">$48</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">L.A.S. Wildberry Chardonnay, Australia</span>
                        <span className="text-gold ml-4">$98</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">MezzaCorona Pinot Grigio, Italy</span>
                        <span className="text-gold ml-4">$48</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Côte des Roses Rosé, France</span>
                        <span className="text-gold ml-4">$46</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Muscadet Sevre et Maine, Loire</span>
                        <span className="text-gold ml-4">$48</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Red Wine */}
                <div>
                  <h3 className="font-cormorant text-[28px] text-ivory mb-8 text-center">Red Wine Bottles</h3>
                  
                  <div className="mb-10">
                    <h4 className="font-dmSans text-[14px] text-gold mb-4 uppercase tracking-wider">Canada</h4>
                    <div className="space-y-4 font-dmSans text-[13px] text-cream/70">
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">MacIntyre Reserve Ardua, Okanagan</span>
                        <span className="text-gold ml-4">$135</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">See Ya Later Rover Shiraz, Okanagan</span>
                        <span className="text-gold ml-4">$94</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Burrowing Owl Syrah, Okanagan</span>
                        <span className="text-gold ml-4">$94</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Osoyoos Larose Bordeaux Blend</span>
                        <span className="text-gold ml-4">$94</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Le Vieux Pin Petit Rouge, Okanagan</span>
                        <span className="text-gold ml-4">$65</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Mission Hill Reserve Syrah</span>
                        <span className="text-gold ml-4">$60</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Quail's Gate Old Vine Foch</span>
                        <span className="text-gold ml-4">$58</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Meyer Family Pinot Noir, Okanagan</span>
                        <span className="text-gold ml-4">$55</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Malivoire Gamay "Small Lot"</span>
                        <span className="text-gold ml-4">$55</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Tinhorn Creek Merlot, Okanagan</span>
                        <span className="text-gold ml-4">$52</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="font-dmSans text-[14px] text-gold mb-4 uppercase tracking-wider">International</h4>
                    <div className="space-y-4 font-dmSans text-[13px] text-cream/70">
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Barolo G.D. Vajra, Italy</span>
                        <span className="text-gold ml-4">$135</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Amarone Della Valpolicella, Italy</span>
                        <span className="text-gold ml-4">$115</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Home Hill Landslide Pinot Noir, Tasmania</span>
                        <span className="text-gold ml-4">$98</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Faber Vineyard Shiraz, Australia</span>
                        <span className="text-gold ml-4">$74</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Bourgogne Pinot Noir, France</span>
                        <span className="text-gold ml-4">$72</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Côte-du-Rhône Village, France</span>
                        <span className="text-gold ml-4">$69</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Ricasoli Chianti Classico Reserva</span>
                        <span className="text-gold ml-4">$68</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Nebbiolo G.D. Vajra, Italy</span>
                        <span className="text-gold ml-4">$65</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Montepulciano d'Abruzzo, Italy</span>
                        <span className="text-gold ml-4">$65</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Catena Malbec, Argentina</span>
                        <span className="text-gold ml-4">$55</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Bordeaux Chateau Puybarbe, France</span>
                        <span className="text-gold ml-4">$55</span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#3d6a55]/20">
                        <span className="flex-1">Cathedral Cellar Cabernet, S. Africa</span>
                        <span className="text-gold ml-4">$48</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="font-dmSans text-[11px] text-cream/50">
                  Wine pricing: 6oz / 9oz / ½ Litre for by-the-glass selections
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'happy' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center mb-12">
              <p className="font-dmSans text-[13px] text-cream/60">
                Available Daily · 3:00pm to 5:30pm
              </p>
            </div>

            {/* Special Highlight Banner */}
            <div className="mb-16 text-center bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 py-8 px-6 rounded-lg border border-gold/30">
              <h2 className="font-cormorant text-[48px] text-gold mb-2">50% OFF</h2>
              <p className="font-dmSans text-[18px] text-ivory">All Beer & Wine</p>
            </div>

            {Object.entries(happyHourMenu).map(([category, items], catIndex) => (
              <div key={category} className="mb-20">
                <h2 className="font-cormorant text-[36px] text-gold mb-12 text-center">
                  {category}
                </h2>

                <div className="space-y-8">
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`pb-8 border-b ${
                        item.featured ? 'border-gold/20' : 'border-[#3d6a55]/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-dmSans text-[18px] text-ivory font-medium flex-1">
                          {item.name}
                          {item.featured && (
                            <span className="ml-2 text-[10px] text-gold">★</span>
                          )}
                        </h3>
                        <span className="font-jost text-[16px] text-gold ml-8">
                          ${item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="font-dmSans text-[13px] text-cream/60 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-16 text-center">
              <p className="font-dmSans text-[11px] text-cream/40 italic">
                Happy Hour: 3:00pm - 5:30pm Daily
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;
