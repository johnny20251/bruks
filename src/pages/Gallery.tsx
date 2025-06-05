import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { X } from 'lucide-react';

// Gallery data
const galleryCategories = [
  {
    id: 'live-shows',
    name: 'Live Shows',
    images: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg',
        caption: 'Summer Tour 2025 - New York'
      },
      {
        id: 2,
        url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
        caption: 'Mercury Lounge Performance'
      },
      {
        id: 3,
        url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        caption: 'Opening Act - Starlight Arena'
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
        caption: 'Festival Performance - Summer Jam'
      }
    ]
  },
  {
    id: 'behind-the-scenes',
    name: 'Behind the Scenes',
    images: [
      {
        id: 5,
        url: 'https://images.pexels.com/photos/8412268/pexels-photo-8412268.jpeg',
        caption: 'Recording "Good Cry" - Studio Session'
      },
      {
        id: 6,
        url: 'https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg',
        caption: 'Music Video Shoot - "Magic Show"'
      },
      {
        id: 7,
        url: 'https://images.pexels.com/photos/7095506/pexels-photo-7095506.jpeg',
        caption: 'Rehearsal Session with the Band'
      },
      {
        id: 8,
        url: 'https://images.pexels.com/photos/8412241/pexels-photo-8412241.jpeg',
        caption: 'Working on New Material'
      }
    ]
  },
  {
    id: 'photoshoots',
    name: 'Photoshoots',
    images: [
      {
        id: 9,
        url: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg',
        caption: 'Album Cover Shoot - 2025'
      },
      {
        id: 10,
        url: 'https://images.pexels.com/photos/1764564/pexels-photo-1764564.jpeg',
        caption: 'Press Photos - Downtown NYC'
      },
      {
        id: 11,
        url: 'https://images.pexels.com/photos/2225248/pexels-photo-2225248.jpeg',
        caption: 'Magazine Feature Photoshoot'
      },
      {
        id: 12,
        url: 'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg',
        caption: 'Promotional Images - Spring 2025'
      }
    ]
  }
];

interface ModalImage {
  url: string;
  caption: string;
  id: number;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('live-shows');
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const openModal = (image: ModalImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="animate-fadeIn">
      <PageHeader 
        title="Gallery" 
        subtitle="Visual moments from Bruklin's journey"
        imageUrl="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg"
      />
      
      <section className="section bg-black">
        <div className="container-custom">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-accent-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories
              .find(cat => cat.id === activeCategory)?.images
              .map((image, index) => (
                <motion.div 
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden group">
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                      <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          
          {/* Image modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <button 
                  className="absolute top-6 right-6 text-white hover:text-accent-400 transition-colors"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <X size={32} />
                </button>
                
                <motion.div 
                  className="max-w-5xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.caption} 
                    className="max-h-[80vh] w-auto mx-auto"
                  />
                  <p className="text-center mt-4 text-white">{selectedImage.caption}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Gallery;