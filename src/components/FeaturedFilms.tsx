import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

const films = [
  {
    title: "Ethereal Love in Tuscany",
    couple: "Sarah & Mark",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
  },
  {
    title: "A Royal Heritage Wedding",
    couple: "Anjali & Rahul",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
  }
];

const FeaturedFilms = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-4"
            >
              Cinematography
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-playfair font-bold"
            >
              Featured <span className="italic">Wedding Films</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md text-gray-400 font-light leading-relaxed"
          >
            Experience the magic of our cinematic storytelling. Each film is a unique masterpiece crafted with passion and precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {films.map((film, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedVideo(film.video)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full border-2 border-luxury-gold flex items-center justify-center bg-black/20 backdrop-blur-sm"
                  >
                    <FaPlay className="text-luxury-gold text-2xl ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-luxury-gold uppercase tracking-widest text-xs mb-2 font-bold">{film.couple}</h4>
                <h5 className="text-2xl font-playfair font-bold group-hover:text-luxury-gold transition-colors">{film.title}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 text-white text-3xl hover:text-luxury-gold transition-colors"
            >
              <FaTimes />
            </button>
            <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl">
              <iframe
                src={selectedVideo}
                title="Wedding Film Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedFilms;
