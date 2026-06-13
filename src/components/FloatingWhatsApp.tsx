import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/919019631104?text=Hi%20Compact%20Wedding%20Studio,%20I%20am%20interested%20in%20your%20wedding%20photography%20and%20cinematography%20services.%20Please%20share%20package%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-shadow hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
    >
      <FaWhatsapp />
    </motion.a>
  );
};

export default FloatingWhatsApp;
