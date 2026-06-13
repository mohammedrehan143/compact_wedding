import { motion } from 'framer-motion';
import { FaVideo, FaFilm, FaPlane, FaUsers, FaPlayCircle, FaShuttleVan } from 'react-icons/fa';

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

const Services = () => {
  return (
    <section id="services" className="py-24 bg-luxury-charcoal">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-4"
        >
          Our Craft
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-playfair font-bold mb-16"
        >
          Cinematography Services
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 bg-luxury-dark border border-white/5 rounded-sm group hover:border-luxury-gold transition-all duration-300 text-left"
            >
              <div className="text-4xl text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
