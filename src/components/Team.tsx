import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const team = [
  {
    name: "Vikram Rathore",
    role: "Lead Cinematographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Anjali Sharma",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Arjun Mehta",
    role: "Post-Production Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-luxury-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 font-bold"
          >
            THE ARTISTS BEHIND THE LENS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-playfair font-bold text-white uppercase tracking-wider"
          >
            OUR <span className="text-luxury-gold italic">CREATIVE</span> TEAM
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col items-center"
            >
              {/* Outer Frame Wrapper */}
              <div className="relative p-3 border border-luxury-gold/30 bg-luxury-dark/50 shadow-2xl transition-all duration-500 group-hover:border-luxury-gold">
                {/* Image Container - Reduced Size */}
                <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 lg:group-hover:grayscale group-hover:scale-105"
                  />
                  
                  {/* Social Overlay - Pop up on hover */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-30"
                  >
                    <a href="#" className="w-9 h-9 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                      <FaInstagram size={16} />
                    </a>
                    <a href="#" className="w-9 h-9 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
                      <FaFacebookF size={14} />
                    </a>
                    <a href="#" className="w-9 h-9 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-225">
                      <FaTwitter size={14} />
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Text Representation */}
              <div className="text-center mt-8">
                <h4 className="text-lg md:text-xl font-playfair font-bold text-white mb-2 uppercase tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                  {member.name}
                </h4>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-[1px] bg-luxury-gold/30" />
                  <span className="text-luxury-gold uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">
                    {member.role}
                  </span>
                  <div className="w-6 h-[1px] bg-luxury-gold/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
