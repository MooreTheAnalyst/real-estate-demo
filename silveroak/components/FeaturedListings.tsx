'use client';

import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';

const listings = [
  {
    id: 1,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    price: '$1,250,000',
    address: '4821 Lakeview Drive, Atlanta, GA',
    beds: 5, baths: 4, sqft: '4,200',
    description: 'Stunning lakefront estate with panoramic views, chef\'s kitchen, and resort-style pool.',
  },
  {
    id: 2,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    price: '$875,000',
    address: '2310 Magnolia Blvd, Buckhead, GA',
    beds: 4, baths: 3, sqft: '3,100',
    description: 'Elegant colonial home in prestigious Buckhead neighborhood with modern upgrades.',
  },
  {
    id: 3,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    price: '$2,100,000',
    address: '9 Peachtree Hills Ave, Atlanta, GA',
    beds: 6, baths: 5, sqft: '6,500',
    description: 'Ultra-luxury modern masterpiece with smart home technology and private guest suite.',
  },
  {
    id: 4,
    type: 'For Rent',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    price: '$4,500/mo',
    address: '1200 Midtown Tower, Atlanta, GA',
    beds: 2, baths: 2, sqft: '1,450',
    description: 'Luxury high-rise apartment with floor-to-ceiling windows and city skyline views.',
  },
  {
    id: 5,
    type: 'For Rent',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    price: '$3,200/mo',
    address: '540 Ponce de Leon Ave, Atlanta, GA',
    beds: 3, baths: 2, sqft: '1,800',
    description: 'Beautifully renovated townhome in vibrant neighborhood, steps from top restaurants.',
  },
  {
    id: 6,
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    price: '$650,000',
    address: '78 Roswell Road, Sandy Springs, GA',
    beds: 4, baths: 3, sqft: '2,800',
    description: 'Charming craftsman home with open floor plan, hardwood floors, and large backyard.',
  },
];

export default function FeaturedListings() {
  const [filter, setFilter] = useState<'All' | 'For Sale' | 'For Rent'>('All');
  const [liked, setLiked] = useState<number[]>([]);

  const filtered = filter === 'All' ? listings : listings.filter((l) => l.type === filter);

  return (
    <section id="listings" className="py-24 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] font-sans uppercase tracking-[0.3em] text-sm mb-3">
            Exclusive Properties
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Featured Listings
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mb-8" />

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3">
            {(['All', 'For Sale', 'For Rent'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full font-sans font-medium transition-all duration-200 ${
                  filter === tab
                    ? 'bg-[#0a1628] text-white'
                    : 'bg-white text-[#0a1628] border border-gray-200 hover:border-[#c9a84c]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((listing, i) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="luxury-card bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-sans font-semibold ${
                  listing.type === 'For Sale' ? 'bg-[#0a1628] text-white' : 'bg-[#c9a84c] text-white'
                }`}>
                  {listing.type}
                </span>
                <button
                  onClick={() => setLiked((prev) => prev.includes(listing.id) ? prev.filter((id) => id !== listing.id) : [...prev, listing.id])}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    size={16}
                    className={liked.includes(listing.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
              </div>

              <div className="p-6">
                <p className="text-2xl font-bold text-[#c9a84c] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {listing.price}
                </p>
                <div className="flex items-start gap-1 mb-3">
                  <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-gray-600 font-sans text-sm">{listing.address}</p>
                </div>
                <p className="text-gray-500 font-sans text-sm mb-4 line-clamp-2">{listing.description}</p>

                <div className="flex items-center gap-4 text-gray-500 font-sans text-sm mb-5 border-t pt-4">
                  <span className="flex items-center gap-1"><Bed size={14} /> {listing.beds} Beds</span>
                  <span className="flex items-center gap-1"><Bath size={14} /> {listing.baths} Baths</span>
                  <span className="flex items-center gap-1"><Square size={14} /> {listing.sqft} sqft</span>
                </div>

                <button className="w-full bg-[#0a1628] hover:bg-[#c9a84c] text-white font-sans font-medium py-3 rounded-lg transition-colors duration-200">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
