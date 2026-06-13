import { motion } from 'framer-motion';
import { useEffect } from 'react';
import FeaturedFilms from '../components/FeaturedFilms';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-luxury-black min-h-screen">
      {/* Dynamic Films Section */}
      <FeaturedFilms />
      
      {/* Masonry Gallery Section */}
      <Portfolio />

      {/* Luxury Call to Action */}
      <section className="py-24 bg-luxury-dark border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto border border-luxury-gold/20 p-12 md:p-20 bg-black/40 backdrop-blur-sm"
          >
            <h2 className="text-luxury-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-bold">The Next Chapter</h2>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
              Ready to <span className="italic">Film Your Story?</span>
            </h3>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto font-light leading-relaxed">
              We travel globally to capture weddings with the eye of a filmmaker and the heart of a storyteller.
            </p>
            <a 
              href="https://wa.me/919019631104" 
              className="inline-block bg-luxury-gold text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-luxury-gold-light transition-all duration-300"
            >
              Secure Your Date
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
