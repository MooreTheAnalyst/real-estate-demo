'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Star } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '$200M+', label: 'Properties Sold' },
  { icon: Star, value: '5.0', label: 'Average Rating' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="SilverOak Realty"
                className="w-full h-[550px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>15+</p>
              <p className="font-sans text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-3">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meet the SilverOak Team
            </h2>
            <div className="w-16 h-1 bg-[#c9a84c] mb-8" />

            <p className="text-gray-600 font-sans text-lg leading-relaxed mb-6">
              With over 15 years of experience in Atlanta&apos;s luxury real estate market, SilverOak Realty has built a reputation for delivering exceptional results with a personal touch. Our deep market knowledge and unwavering commitment to clients set us apart.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed mb-10">
              Whether you&apos;re buying your first home, upgrading to a luxury estate, or investing in commercial property, SilverOak Realty provides the guidance, expertise, and dedication you deserve every step of the way.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="bg-[#f8f5f0] p-3 rounded-xl">
                    <Icon className="text-[#c9a84c]" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0a1628]" style={{ fontFamily: 'Playfair Display, serif' }}>{value}</p>
                    <p className="text-gray-500 font-sans text-sm">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
