'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus & Jennifer Williams',
    role: 'Home Buyers',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'SilverOak made our dream home a reality. Their knowledge of the Atlanta market is unmatched, and they negotiated a price we never thought possible. We couldn\'t be happier with our new home.',
    rating: 5,
  },
  {
    name: 'Sophia Chen',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'I\'ve worked with many realtors over the years, but SilverOak\'s team is in a league of their own. Professional, responsive, and genuinely invested in your success. My portfolio has grown significantly.',
    rating: 5,
  },
  {
    name: 'Robert & Patricia Davis',
    role: 'Home Sellers',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'We sold our home in just 8 days above asking price. SilverOak\'s marketing strategy and staging advice were spot on. The entire process was seamless and stress-free.',
    rating: 5,
  },
  {
    name: 'Aisha Thompson',
    role: 'First-Time Buyer',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    text: 'As a first-time buyer, I was nervous about the whole process. SilverOak walked me through every step with patience and expertise. I felt confident and supported the entire time.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-[#f8f5f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-10 md:p-14 shadow-xl text-center"
            >
              <Quote className="text-[#c9a84c] mx-auto mb-6" size={40} />
              <p className="text-gray-600 font-sans text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="fill-[#c9a84c] text-[#c9a84c]" size={20} />
                ))}
              </div>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-[#c9a84c]"
              />
              <p className="font-semibold text-[#0a1628] text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                {testimonials[current].name}
              </p>
              <p className="text-gray-400 font-sans text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="bg-white hover:bg-[#0a1628] text-[#0a1628] hover:text-white border border-gray-200 p-3 rounded-full transition-all duration-200 shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === current ? 'bg-[#c9a84c] w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="bg-white hover:bg-[#0a1628] text-[#0a1628] hover:text-white border border-gray-200 p-3 rounded-full transition-all duration-200 shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
