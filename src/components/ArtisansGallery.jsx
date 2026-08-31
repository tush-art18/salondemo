import React from 'react';

export default function ArtisansGallery({ onOpenBooking }) {
  return (
    <section id="artisans" className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#0e0e0c] border-t border-[#1f1e1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* LEFT COLUMN: INFO & STORYTELLING */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="artisan-intro">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#cbb074] font-body block mb-2 sm:mb-3">
                Scene 06 · The Artisans
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f5f2eb] leading-tight">
                THE HANDS BEHIND THE CRAFT
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#9c978e] font-body leading-relaxed">
                Our atelier brings together Kolhapur's premier hair architects, certified master colourists, and bespoke beard sculptors — trained in Japanese precision cutting and clinical scalp diagnostics.
              </p>
            </div>

            {/* Pillars / Specializations */}
            <div className="space-y-4 pt-2 border-t border-[#1f1e1a]">
              <div className="artisan-pillar-item flex items-start gap-4">
                <span className="text-[#cbb074] text-sm mt-0.5">✦</span>
                <div>
                  <h4 className="font-display text-lg text-[#f5f2eb]">Architectural Hair Sculptors</h4>
                  <p className="text-xs text-[#9c978e] font-body">Imported Japanese steel shear work tailored to facial geometry.</p>
                </div>
              </div>
              <div className="artisan-pillar-item flex items-start gap-4">
                <span className="text-[#cbb074] text-sm mt-0.5">✦</span>
                <div>
                  <h4 className="font-display text-lg text-[#f5f2eb]">Master Colourists & Balayage Artists</h4>
                  <p className="text-xs text-[#9c978e] font-body">Diamond gloss infusion and bespoke botanical tone balance.</p>
                </div>
              </div>
              <div className="artisan-pillar-item flex items-start gap-4">
                <span className="text-[#cbb074] text-sm mt-0.5">✦</span>
                <div>
                  <h4 className="font-display text-lg text-[#f5f2eb]">Skin & Cosmetology Therapists</h4>
                  <p className="text-xs text-[#9c978e] font-body">Hydra-pore purification and hot eucalyptus towel finishes.</p>
                </div>
              </div>
            </div>

            <div className="artisan-cta-btn pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-cinema text-xs uppercase tracking-[0.2em] px-8 py-3.5"
              >
                Reserve with Atelier Team →
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: COMBINED STAFF IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#141412] border border-[#252420] shadow-2xl cursor-pointer" onClick={onOpenBooking}>
              <img
                src="/Craftsmanship.jpeg"
                alt="The Hair Avenue Artisans Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent"></div>

              {/* Corner Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#070706]/85 backdrop-blur-md border border-[#252420] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#cbb074] font-body">
                THE ATELIER TEAM
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-xs font-body">
                <span className="text-[#f5f2eb] font-display text-base">The Hair Avenue Craftsmen</span>
                <span className="text-[#cbb074] tracking-[0.15em] uppercase text-[10px]">Kolhapur</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
