import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const MenuPage = () => {
  const menuItems = [
    // Cakes
    {
      category: 'Cakes',
      name: 'Chocolate Layer Cake',
      description: 'Rich, decadent layers of chocolate with silky ganache',
      image: 'https://images.unsplash.com/photo-1695240656082-176884b9b58'
    },
    {
      category: 'Cakes',
      name: 'Vanilla Cheesecake',
      description: 'Creamy New York-style cheesecake with graham cracker crust',
      image: 'https://images.unsplash.com/photo-1680310765701-c292e76529b'
    },
    {
      category: 'Cakes',
      name: 'Red Velvet Cake',
      description: 'Classic red velvet with cream cheese frosting',
      image: 'https://images.unsplash.com/photo-1600002415506-dd0609d3480'
    },
    // Cupcakes
    {
      category: 'Cupcakes',
      name: 'Vanilla Cupcakes',
      description: 'Light, fluffy cupcakes with creamy vanilla buttercream',
      image: 'https://images.unsplash.com/photo-1623843399237-35c37d194feb'
    },
    {
      category: 'Cupcakes',
      name: 'Chocolate Cupcakes',
      description: 'Moist chocolate cupcakes with rich chocolate frosting',
      image: 'https://images.unsplash.com/photo-1691625739165-39f123a5216f'
    },
    {
      category: 'Cupcakes',
      name: 'Strawberry Cupcakes',
      description: 'Fresh strawberry cupcakes with strawberry cream frosting',
      image: 'https://images.unsplash.com/photo-1698288280603-22997a335234'
    },
    // Pastries
    {
      category: 'Pastries',
      name: 'Croissants',
      description: 'Buttery, flaky French pastries baked to golden perfection',
      image: 'https://images.unsplash.com/photo-1699289047564-cccf4017373ed1'
    },
    {
      category: 'Pastries',
      name: 'Danish Pastries',
      description: 'Sweet pastries filled with fruit preserves and cream cheese',
      image: 'https://images.unsplash.com/photo-1602296751147-5a44357d4a9'
    },
    {
      category: 'Pastries',
      name: 'Eclairs',
      description: 'Choux pastry filled with vanilla cream and chocolate glaze',
      image: 'https://images.unsplash.com/photo-1602400430611-632f5fc44270'
    },
    // Cookies
    {
      category: 'Cookies',
      name: 'Chocolate Chip Cookies',
      description: 'Classic cookies loaded with premium chocolate chips',
      image: 'https://images.unsplash.com/photo-1695240656082-176884b9b58'
    },
    {
      category: 'Cookies',
      name: 'Oatmeal Raisin Cookies',
      description: 'Chewy oatmeal cookies with plump raisins',
      image: 'https://images.unsplash.com/photo-1680310765701-c292e76529b'
    },
    {
      category: 'Cookies',
      name: 'Sugar Cookies',
      description: 'Soft, buttery cookies with a hint of vanilla',
      image: 'https://images.unsplash.com/photo-1600002415506-dd0609d3480'
    },
    // Bread
    {
      category: 'Bread',
      name: 'Sourdough Loaf',
      description: 'Artisan sourdough with crispy crust and tangy flavor',
      image: 'https://images.unsplash.com/photo-1623843399237-35c37d194feb'
    },
    {
      category: 'Bread',
      name: 'Whole Wheat Bread',
      description: 'Hearty whole wheat bread, perfect for sandwiches',
      image: 'https://images.unsplash.com/photo-1691625739165-39f123a5216f'
    },
    // Donuts
    {
      category: 'Donuts',
      name: 'Glazed Donuts',
      description: 'Classic glazed donuts with sweet vanilla glaze',
      image: 'https://images.unsplash.com/photo-1698288280603-22997a335234'
    },
    {
      category: 'Donuts',
      name: 'Chocolate Donuts',
      description: 'Chocolate donuts with rich chocolate frosting',
      image: 'https://images.unsplash.com/photo-1699289047564-cccf4017373ed1'
    },
    {
      category: 'Donuts',
      name: 'Sprinkle Donuts',
      description: 'Fun donuts topped with colorful sprinkles',
      image: 'https://images.unsplash.com/photo-1602296751147-5a44357d4a9'
    }
  ];

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Menu - Sugar Rush Bakery</title>
        <meta name="description" content="Explore our delicious menu of cakes, cupcakes, pastries, cookies, bread, and donuts. All baked fresh daily at Sugar Rush." />
      </Helmet>

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Our Menu</h1>
            <p className="text-xl text-muted-foreground">Freshly baked treats made with love and the finest ingredients</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-foreground shadow-lg'
                    : 'bg-card text-muted-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{item.category}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;