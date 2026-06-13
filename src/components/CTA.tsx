import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border border-luxury-gold/30 p-12 md:p-20 backdrop-blur-sm bg-black/20"
        >
          <h2 className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-6">Start Your Journey</h2>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold mb-10 leading-tight">
            Let's Capture Your <br />
            <span className="italic">Love Story</span>
          </h3>
          <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Booking for 2026 & 2027 is now open. Limited dates available to ensure the highest quality for every couple.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#contact" 
              className="bg-luxury-gold text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-luxury-gold-light transition-all duration-300"
            >
              Book Consultation
            </a>
            <a 
              href="/portfolio" 
              className="border border-white/30 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              View Films
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
