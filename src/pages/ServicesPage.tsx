import { motion } from 'framer-motion';
import { FaVideo, FaFilm, FaPlane, FaUsers, FaPlayCircle, FaShuttleVan } from 'react-icons/fa';
import { useEffect } from 'react';

const services = [
  {
    icon: <FaVideo />,
    title: '4K Cinema Coverage',
    desc: 'High-definition coverage using industry-standard cinema cameras for a true movie feel.'
  },
  {
    icon: <FaFilm />,
    title: 'Cinematic Editing',
    desc: 'Professional color grading and narrative-driven editing to tell your unique story.'
  },
  {
    icon: <FaShuttleVan />,
    title: '4K Aerial Drone',
    desc: 'Breathtaking 4K aerial shots that add a grand scale to your wedding production.'
  },
  {
    icon: <FaPlayCircle />,
    title: 'Same-Day Edit',
    desc: 'Surprise your guests with a highlights film shown during your reception.'
  },
  {
    icon: <FaUsers />,
    title: 'Documentary Film',
    desc: 'A full-length film capturing every detail and speech from your special day.'
  },
  {
    icon: <FaPlane />,
    title: 'International Films',
    desc: 'Our cinematic team is available for destination weddings across the globe.'
  }
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-luxury-black min-h-screen">
      <section className="py-24 bg-luxury-charcoal">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-sm mb-4 font-bold"
          >
            Exquisite Offerings
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-16"
          >
            Cinematography <span className="italic text-luxury-gold">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-luxury-dark border border-white/5 rounded-sm group hover:border-luxury-gold transition-all duration-300 text-left"
              >
                <div className="text-4xl text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{service.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section Preview */}
      <section className="py-20 bg-luxury-gold text-black text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-playfair font-bold mb-6">Interested in a Custom Package?</h3>
          <p className="mb-10 opacity-80 max-w-xl mx-auto">Every wedding is unique. Let's discuss a tailored cinematography package that fits your vision perfectly.</p>
          <a href="https://wa.me/919019631104" target="_blank" rel="noreferrer" className="inline-block px-12 py-4 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Get a Quote</a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
