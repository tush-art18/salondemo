import React, { useState } from 'react';
import { RITUALS_DATA } from '../data/ritualsData';

export default function ServiceRituals({ onSelectRitual }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Hair Architecture', 'Skin & Cosmetology', 'Bridal & Royal', 'Grooming & Beard', 'Hair Treatment', 'Nails & Care'];

  const filteredRituals = selectedCategory === 'All'
    ? RITUALS_DATA
    : RITUALS_DATA.filter(r => r.category === selectedCategory);

  return (
    <section id="services" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#0b0a08] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title (No Pill Badges) */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#f4f1ea] leading-tight">
            Services & Treatments
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a39e93] font-body font-light leading-relaxed">
            Transparent pricing, architectural hair sculpting, and clinical skincare treatments.
          </p>
        </div>

        {/* Minimalist Text Category Filter */}
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-6 mb-16 border-b border-[#1f1e1a]">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-[0.2em] font-body whitespace-nowrap transition-colors py-2 relative ${
                selectedCategory === cat
                  ? 'text-[#f4f1ea] font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#c5a059]'
                  : 'text-[#6b665e] hover:text-[#a39e93]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Unboxed Grid (No background containers or card borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredRituals.map((ritual) => (
            <div
              key={ritual.id}
              onClick={() => onSelectRitual(ritual)}
              className="group cursor-pointer flex flex-col justify-between pt-4 border-t border-[#1f1e1a] hover:border-[#c5a059] transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#6b665e] font-body">
                    {ritual.category}
                  </span>
                  <span className="font-display text-xl text-[#c5a059] font-normal">
                    {ritual.price}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-normal text-[#f4f1ea] group-hover:text-[#c5a059] transition-colors">
                  {ritual.title}
                </h3>
                
                <p className="mt-3 text-xs text-[#a39e93] font-body font-light leading-relaxed">
                  {ritual.description}
                </p>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between text-xs font-body tracking-[0.15em] uppercase text-[#6b665e] group-hover:text-[#f4f1ea] transition-colors">
                <span>{ritual.duration}</span>
                <span className="editorial-link">View Details →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
