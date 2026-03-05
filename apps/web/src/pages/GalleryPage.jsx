import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1703219659668-8672a0ff8125',
      title: 'Artisan Bakery Display',
      description: 'Our beautiful selection of fresh baked goods'
    },
    {
      url: 'https://images.unsplash.com/photo-1507870009871-138dd003809797',
      title: 'Chocolate Delights',
      description: 'Rich chocolate creations made with premium cocoa'
    },
    {
      url: 'https://images.unsplash.com/photo-1695240656082-176884b9b58',
      title: 'Layered Perfection',
      description: 'Our signature chocolate layer cake'
    },
    {
      url: 'https://images.unsplash.com/photo-1680310765701-c292e76529b',
      title: 'Creamy Cheesecake',
      description: 'New York-style cheesecake with fresh berries'
    },
    {
      url: 'https://images.unsplash.com/photo-1623843399237-35c37d194feb',
      title: 'Cupcake Collection',
      description: 'Assorted cupcakes with buttercream frosting'
    },
    {
      url: 'https://images.unsplash.com/photo-1691625739165-39f123a5216f',
      title: 'Chocolate Indulgence',
      description: 'Decadent chocolate treats for every occasion'
    },
    {
      url: 'https://images.unsplash.com/photo-1698288280603-22997a335234',
      title: 'Strawberry Dreams',
      description: 'Fresh strawberry-topped creations'
    },
    {
      url: 'https://images.unsplash.com/photo-1602296751147-5a44357d4a9',
      title: 'Pastry Selection',
      description: 'Flaky, buttery pastries baked fresh daily'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Sugar Rush Bakery</title>
        <meta name="description" content="Browse our gallery of beautiful bakery creations. See our cakes, pastries, and desserts at Sugar Rush." />
      </Helmet>

      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">A visual feast of our handcrafted creations</p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
                >
                  <ChevronLeft className="h-12 w-12" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-12 w-12" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryPage;