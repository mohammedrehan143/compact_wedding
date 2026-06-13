import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1519225495810-751253d7cc2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465495910483-0d6745778503?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-playfair font-bold"
          >
            The Art of <span className="italic">Storytelling</span>
          </motion.h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group rounded-sm"
            >
              <img
                src={src}
                alt={`Wedding moment ${index + 1}`}
                className="w-full h-auto lg:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="border border-luxury-gold p-4 text-xs uppercase tracking-[0.3em] font-bold">
                  View Moment
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-transparent border border-luxury-gold text-luxury-gold px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-all duration-300">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
