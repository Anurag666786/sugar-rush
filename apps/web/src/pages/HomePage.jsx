import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HomePage = () => {
  const featuredItems = [
    {
      title: 'Chocolate Layer Cake',
      description: 'Rich, decadent layers of chocolate perfection',
      image: 'https://images.unsplash.com/photo-1695240656082-176884b9b58',
      price: '$28'
    },
    {
      title: 'Vanilla Cupcakes',
      description: 'Light, fluffy cupcakes with creamy vanilla frosting',
      image: 'https://images.unsplash.com/photo-1623843399237-35c37d194feb',
      price: '$3.50 each'
    },
    {
      title: 'Croissants',
      description: 'Buttery, flaky pastries baked to golden perfection',
      image: 'https://images.unsplash.com/photo-1699289047564-cccf4017373ed1',
      price: '$4.50'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sugar Rush - Handcrafted Sweetness, Baked Fresh Daily</title>
        <meta name="description" content="Welcome to Sugar Rush bakery. Discover our handcrafted cakes, cupcakes, pastries, and more, baked fresh daily with love." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1703219659668-8672a0ff8125)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">Sugar Rush</h1>
          <p className="text-2xl md:text-3xl mb-8 text-white">Handcrafted Sweetness, Baked Fresh Daily</p>
          <Link to="/menu">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground text-lg px-8 py-6">
              Browse Our Menu
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Signature Creations</h2>
            <p className="text-xl text-muted-foreground">Handpicked favorites that keep our customers coming back</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <p className="text-xl font-semibold text-primary">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Baked with Love</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Sugar Rush, we believe that every bite should be a moment of pure joy. Our master bakers use only the finest ingredients to create treats that are as beautiful as they are delicious.
              </p>
              <p className="text-lg text-muted-foreground">
                From our signature chocolate layer cakes to our buttery croissants, everything is made fresh daily in our kitchen. Visit us today and experience the difference that passion and quality make.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;