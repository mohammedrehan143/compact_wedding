import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: "Priya & Rahul",
    text: "Compact Wedding Studio captured our wedding so beautifully. The team was professional, and the final films were beyond our expectations!",
    rating: 5,
  },
  {
    name: "Sneha & Amit",
    text: "The best decision we made for our wedding! Their eye for detail and ability to capture candid moments is truly remarkable.",
    rating: 5,
  },
  {
    name: "Anjali & Vikram",
    text: "Professional, creative, and extremely talented. They made us feel so comfortable during our pre-wedding shoot. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-luxury-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Kind Words
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-playfair font-bold"
          >
            Client <span className="italic">Experiences</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-luxury-dark border border-white/5 rounded-sm relative"
            >
              <FaQuoteLeft className="text-luxury-gold text-4xl mb-6 opacity-20" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-luxury-gold text-sm" />
                ))}
              </div>
              <p className="text-gray-400 italic mb-8 leading-relaxed font-light">
                "{review.text}"
              </p>
              <div className="text-white font-bold tracking-widest uppercase text-sm">
                — {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
