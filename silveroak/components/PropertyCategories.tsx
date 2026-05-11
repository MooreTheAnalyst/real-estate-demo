'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Luxury Homes',
    count: '48 Properties',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
  },
  {
    title: 'Apartments',
    count: '124 Properties',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
  },
  {
    title: 'Family Homes',
    count: '87 Properties',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
  },
  {
    title: 'Commercial',
    count: '32 Properties',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    title: 'Rentals',
    count: '96 Properties',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
  },
];

export default function PropertyCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-3">
            Browse By Type
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Property Categories
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-64 luxury-card"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {cat.title}
                </h3>
                <p className="text-[#c9a84c] font-sans text-sm">{cat.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
