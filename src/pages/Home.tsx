import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Team from '../components/Team';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      {/* (The Hero component is already modular and will be included in App.tsx) */}

      {/* Intro / Important Summary for Mobile (Fast Scrolling fix) */}
      <section className="py-20 bg-luxury-black border-b border-white/5 lg:hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-playfair font-bold mb-6"
          >
            Crafting <span className="text-luxury-gold italic">Cinematic Legacies</span>
          </motion.h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Link to="/services" className="bg-luxury-dark border border-luxury-gold/20 p-6 rounded-sm">
              <span className="text-luxury-gold block text-2xl mb-2 font-playfair italic">01</span>
              <span className="text-xs uppercase tracking-widest font-bold">Services</span>
            </Link>
            <Link to="/portfolio" className="bg-luxury-dark border border-luxury-gold/20 p-6 rounded-sm">
              <span className="text-luxury-gold block text-2xl mb-2 font-playfair italic">02</span>
              <span className="text-xs uppercase tracking-widest font-bold">Portfolio</span>
            </Link>
          </div>
          <a href="#contact" className="block w-full py-4 bg-luxury-gold text-black uppercase tracking-widest font-bold text-sm rounded-sm">
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section - Brief for Mobile, Full for Desktop */}
      <section id="about" className="py-24 bg-luxury-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 border-t-2 border-l-2 border-luxury-gold z-0" />
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Cinematographer at work"
                className="relative z-10 w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 border-b-2 border-r-2 border-luxury-gold z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-luxury-gold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">Our Vision</h2>
              <h3 className="text-3xl md:text-5xl font-playfair font-bold mb-6 lg:mb-8 leading-tight">
                Cinematic Excellence <br />
                <span className="italic">In Every Frame</span>
              </h3>
              <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
                <p>
                  At Compact Wedding Films, we are storytellers at heart. Our mission is to go beyond simple recording and create immersive cinematic experiences that transport you back to the magic of your wedding day.
                </p>
                <p className="hidden md:block">
                  We utilize state-of-the-art cinema equipment and advanced post-production techniques to ensure your wedding film looks and feels like a professional movie production.
                </p>
              </div>
              
              <div className="mt-8 lg:mt-10">
                <Link to="/portfolio" className="group inline-flex items-center gap-4 text-white uppercase tracking-widest text-xs md:text-sm font-semibold hover:text-luxury-gold transition-colors">
                  <span className="w-8 md:w-12 h-[1px] bg-luxury-gold group-hover:w-16 md:group-hover:w-20 transition-all duration-300" />
                  View Our Films
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Stats - Quick reference */}
      <section className="py-16 md:py-20 bg-luxury-gold text-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Weddings', value: 500 },
              { label: 'Happy Clients', value: 1000 },
              { label: 'Years Exp.', value: 8 },
              { label: 'Destinations', value: 50 },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-6xl font-playfair font-bold">{stat.value}+</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Navigation Hint */}
      <section className="py-24 bg-luxury-dark lg:hidden text-center px-6">
        <h3 className="text-2xl font-playfair mb-6">Ready to explore?</h3>
        <div className="space-y-4">
          <Link to="/services" className="block w-full py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest font-bold text-sm">Our Services</Link>
          <Link to="/portfolio" className="block w-full py-4 bg-luxury-gold text-black uppercase tracking-widest font-bold text-sm">Full Portfolio</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
