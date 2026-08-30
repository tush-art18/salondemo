import React from 'react';
import { STYLISTS_DATA } from '../data/stylistsData';

export default function ArtisansGallery({ onOpenBooking }) {
  return (
    <section id="artisans" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#12110f] border-t border-[#1f1e1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#f4f1ea] leading-tight">
            The Hair Artisans
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a39e93] font-body font-light leading-relaxed">
            Craftsmanship passes through dedicated hands. Master hair architects, cosmetologists, and bridal stylists.
          </p>
        </div>

        {/* Unboxed Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STYLISTS_DATA.map((artisan) => (
            <div
              key={artisan.id}
              className="group flex flex-col justify-between cursor-pointer"
              onClick={onOpenBooking}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1916] mb-6">
                <img
                  src={artisan.image}
                  onError={(e) => { e.target.src = artisan.fallbackImage; }}
                  alt={artisan.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Text Info (No boxes) */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-body block mb-1">
                  {artisan.role}
                </span>
                <h3 className="font-display text-2xl font-normal text-[#f4f1ea]">
                  {artisan.name}
                </h3>
                <p className="text-xs text-[#a39e93] font-body font-light mt-2 leading-relaxed">
                  {artisan.specialty}
                </p>
                <p className="text-xs italic text-[#6b665e] font-display mt-3">
                  "{artisan.quote}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
