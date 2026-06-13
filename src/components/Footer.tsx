import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-playfair font-bold mb-6">
              COMPACT <span className="text-luxury-gold">WEDDINGS</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Capturing your most precious moments with elegance and cinematic beauty. Available worldwide for destination weddings.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                <FaWhatsapp />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-luxury-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-luxury-gold transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Cinematography</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Pre-Wedding</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Drone Shoot</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-luxury-gold" />
                <span>+91 9019631104</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-luxury-gold" />
                <span>hello@compactweddings.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-luxury-gold">📍</div>
                <span>Luxury Lane, Studio House,<br />BMSIT Circle, Bangalore</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm font-light tracking-widest">
          <p>&copy; {new Date().getFullYear()} COMPACT WEDDING STUDIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
