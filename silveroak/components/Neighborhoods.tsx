'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const neighborhoods = [
  { name: 'Buckhead', desc: 'Atlanta\'s premier luxury district', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', listings: 34 },
  { name: 'Midtown', desc: 'Urban living at its finest', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80', listings: 52 },
  { name: 'Sandy Springs', desc: 'Suburban elegance & top schools', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80', listings: 28 },
  { name: 'Alpharetta', desc: 'Tech hub with luxury communities', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', listings: 41 },
  { name: 'Decatur', desc: 'Charming, walkable & vibrant', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80', listings: 19 },
  { name: 'Dunwoody', desc: 'Family-friendly with great amenities', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', listings: 23 },
];

export default function Neighborhoods() {
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
            Areas We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore Neighborhoods
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((n, i) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-72 luxury-card"
            >
              <img
                src={n.image}
                alt={n.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-[#c9a84c]" />
                  <span className="text-[#c9a84c] font-sans text-xs">{n.listings} Listings</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {n.name}
                </h3>
                <p className="text-gray-300 font-sans text-sm">{n.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
