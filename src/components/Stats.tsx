import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const StatCounter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const stats = [
  { label: 'Weddings Covered', value: 500 },
  { label: 'Happy Clients', value: 1000 },
  { label: 'Years Experience', value: 8 },
  { label: 'Destination Weddings', value: 50 },
];

const Stats = () => {
  return (
    <section className="py-20 bg-luxury-gold text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-playfair font-bold mb-2">
                <StatCounter end={stat.value} />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
