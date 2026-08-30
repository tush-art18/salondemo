import React, { useState } from 'react';
import { REVIEWS_LIST } from '../data/reviewsData';

export default function VoiceOfCity() {
  const [reviews] = useState(REVIEWS_LIST);

  return (
    <section id="adda" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#12110f] border-t border-[#1f1e1a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#f4f1ea] leading-tight">
            Client Voice
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a39e93] font-body font-light leading-relaxed">
            Rated 4.95 / 5.0 Stars across 478 verified Google reviews & Justdial recommendations.
          </p>
        </div>

        {/* Unboxed Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {reviews.map((rev) => (
            <div key={rev.id} className="pt-6 border-t border-[#1f1e1a]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display text-xl text-[#f4f1ea] font-normal">{rev.author}</h4>
                <span className="text-xs font-body text-[#c5a059]">★ {rev.rating}.0</span>
              </div>
              <p className="text-xs text-[#a39e93] font-body font-light leading-relaxed mb-4">
                "{rev.content}"
              </p>
              {rev.ownerReply && (
                <p className="text-xs text-[#6b665e] font-body italic border-l border-[#c5a059] pl-3 py-1">
                  {rev.ownerReply}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
