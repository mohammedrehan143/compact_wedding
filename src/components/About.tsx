import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-luxury-gold z-0" />
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cinematographer at work"
              className="relative z-10 w-full rounded-sm shadow-2xl lg:grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-luxury-gold z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-4">Our Vision</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
              Cinematic Excellence <br />
              <span className="italic">In Every Frame</span>
            </h3>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                At Compact Wedding Films, we are storytellers at heart. Our mission is to go beyond simple recording and create immersive cinematic experiences that transport you back to the magic of your wedding day.
              </p>
              <p>
                We utilize state-of-the-art cinema equipment and advanced post-production techniques to ensure your wedding film looks and feels like a professional movie production.
              </p>
              <p>
                From intimate whispers to grand celebrations, our lens captures the narrative of your love with unmatched clarity and emotional depth.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="group flex items-center gap-4 text-white uppercase tracking-widest font-semibold hover:text-luxury-gold transition-colors">
                <span className="w-12 h-[1px] bg-luxury-gold group-hover:w-20 transition-all duration-300" />
                View Our Process
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
