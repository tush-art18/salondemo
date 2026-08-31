import React, { useState } from 'react';

export default function MenuSection({ onSelectSitting }) {
  const [activeTab, setActiveTab] = useState('All');

  const sittings = [
    {
      id: 'h1',
      category: 'Hair',
      name: 'Signature Cut & Style',
      subhead: 'Precision cut, wash, and finish.',
      price: '₹450',
      duration: '45 min',
      badge: 'CRAFT · 01',
      bg: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'h3',
      category: 'Hair',
      name: 'The Akhada Sculpt',
      subhead: 'Architectural precision haircut using imported Japanese steel shears.',
      price: '₹450',
      duration: '45 min',
      badge: 'THE HAIR AVENUE · SIGNATURE',
      highlight: true,
      bg: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'h2',
      category: 'Hair',
      name: 'Global Colour & Gloss',
      subhead: 'Full colour with a high-shine finish.',
      price: '₹3,200',
      duration: '90 min',
      badge: 'AMBER GLOSS',
      bg: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sb1',
      category: 'Skin & Beard',
      name: 'Precision Beard Sculpt',
      subhead: 'Clean lines, hot towel finish.',
      price: '₹350',
      duration: '35 min',
      badge: 'BEARD ARCHITECTURE',
      bg: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'h4',
      category: 'Hair',
      name: 'Gold Balayage & Colour Restoration',
      subhead: 'High-shine keratin colour lock with diamond infusion.',
      price: '₹4,500',
      duration: '120 min',
      badge: 'OVER 10,000+ SITTINGS',
      bg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sb2',
      category: 'Skin & Beard',
      name: 'Hydra Facial',
      subhead: 'Deep-cleanse and hydration facial.',
      price: '₹2,800',
      duration: '60 min',
      badge: 'SKIN & PURIFICATION',
      bg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'b1',
      category: 'Bridal',
      name: 'Bridal Hair & Makeup',
      subhead: 'Full bridal styling, HD makeup included.',
      price: '₹12,500',
      duration: '180 min',
      badge: 'HAUTE BRIDAL ATELIER',
      bg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const handleSittingClick = (sitting) => {
    if (onSelectSitting) {
      onSelectSitting(sitting);
    }
  };

  const isDimmed = (category) => {
    if (activeTab === 'All') return false;
    return activeTab !== category;
  };

  return (
    <section id="services" className="relative z-10 py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-14 bg-[#070706] border-t border-[#1f1e1a]">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        
        {/* Header & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1f1e1a] pb-4 sm:pb-5">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#cbb074] font-body block mb-1">
              Scene 04 · The Menu
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f5f2eb] tracking-tight">
              The Menu
            </h2>
            <p className="mt-1 text-xs sm:text-base text-[#9c978e] font-display italic">
              Not services. Sittings.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Hair', 'Skin & Beard', 'Bridal'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.15em] font-body font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#f5f2eb] text-[#070706] shadow-[0_0_20px_rgba(245,242,235,0.3)] scale-105 font-semibold'
                    : 'bg-[#141412] text-[#9c978e] border border-[#252420] hover:text-[#f5f2eb] hover:border-[#cbb074]/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* BENTO GRID (COMPACT SINGLE-FRAME SIZING) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          
          {/* ================= LEFT COLUMN (4 COLS) ================= */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 lg:gap-5">
            
            {/* TILE 1: Top Left - Signature Cut */}
            <div
              onClick={() => handleSittingClick(sittings[0])}
              className={`group relative h-[185px] sm:h-[200px] lg:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_8px_30px_rgba(203,176,116,0.2)] transition-all duration-700 bg-[#12110f] shadow-xl cursor-pointer p-4 sm:p-5 flex flex-col justify-between ${
                isDimmed('Hair') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
              }`}
            >
              <img
                src={sittings[0].bg}
                alt={sittings[0].name}
                className="absolute inset-0 w-full h-full object-cover filter contrast-115 brightness-[80%] group-hover:scale-110 group-hover:filter-none transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 group-hover:opacity-80 transition-opacity duration-700"></div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#cbb074] font-body font-semibold group-hover:text-white transition-colors">
                  {sittings[0].badge}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#f5f2eb] bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 group-hover:bg-[#cbb074] group-hover:text-[#070706] transition-all duration-500">
                  {sittings[0].price}
                </span>
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-display sm:font-sans font-semibold text-lg sm:text-xl lg:text-2xl text-white tracking-tight leading-tight group-hover:text-[#cbb074] transition-colors">
                  Signature Cut
                </h3>
                <p className="text-[11px] sm:text-xs text-[#d4cfc7] font-body font-light line-clamp-1">
                  {sittings[0].subhead}
                </p>
                <div className="pt-1.5 flex items-center justify-between text-[10px] sm:text-[11px] text-[#9c978e] font-body">
                  <span className="group-hover:text-white transition-colors">⏱ {sittings[0].duration}</span>
                  <span className="text-[#cbb074] group-hover:translate-x-1 transition-transform duration-300 font-medium">Reserve Sitting →</span>
                </div>
              </div>
            </div>

            {/* TILE 2: Bottom Left - Gold Balayage */}
            <div
              onClick={() => handleSittingClick(sittings[4])}
              className={`group relative h-[215px] sm:h-[235px] lg:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_8px_30px_rgba(203,176,116,0.2)] transition-all duration-700 bg-[#0d0c0a] shadow-xl cursor-pointer p-4 sm:p-5 flex flex-col justify-between ${
                isDimmed('Hair') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
              }`}
            >
              <img
                src={sittings[4].bg}
                alt={sittings[4].name}
                className="absolute inset-0 w-full h-full object-cover filter contrast-120 brightness-[65%] group-hover:scale-110 group-hover:filter-none transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:opacity-85 transition-opacity duration-700"></div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#9c978e] font-body group-hover:text-[#cbb074] transition-colors">
                  HAIR RESTORATION
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#070706] bg-[#cbb074] font-body font-semibold px-2 py-0.5 rounded-full">
                  POPULAR
                </span>
              </div>

              <div className="relative z-10 space-y-1.5">
                <h3 className="font-display sm:font-sans font-semibold text-base sm:text-lg lg:text-xl text-white tracking-tight leading-snug group-hover:text-[#cbb074] transition-colors">
                  Gold Balayage & Colour
                </h3>
                <p className="text-[11px] sm:text-xs text-[#9c978e] font-body leading-relaxed line-clamp-1">
                  {sittings[4].subhead}
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="font-display text-sm sm:text-base text-[#cbb074] font-medium">
                    {sittings[4].duration} · {sittings[4].price}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#f5f2eb] bg-white/10 group-hover:bg-[#cbb074] group-hover:text-[#070706] px-3 py-1 rounded-full transition-all duration-500 font-medium">
                    Book Sitting
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT MAIN AREA (8 COLS) ================= */}
          <div className="md:col-span-8 flex flex-col gap-3 sm:gap-4 lg:gap-5">
            
            {/* TILE 3: Top Right - Wide Hero Akhada Sculpt */}
            <div
              onClick={() => handleSittingClick(sittings[1])}
              className={`group relative h-[185px] sm:h-[200px] lg:h-[215px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_8px_35px_rgba(203,176,116,0.25)] transition-all duration-700 bg-[#12110f] shadow-xl cursor-pointer p-4 sm:p-5 lg:p-6 flex flex-col justify-between ${
                isDimmed('Hair') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
              }`}
            >
              <img
                src={sittings[1].bg}
                alt={sittings[1].name}
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-[70%] group-hover:scale-108 group-hover:filter-none transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/30 group-hover:opacity-85 transition-opacity duration-700"></div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#cbb074] font-body font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cbb074] animate-ping inline-block"></span>
                  {sittings[1].badge}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#f5f2eb] bg-white/15 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/20 group-hover:bg-[#cbb074] group-hover:text-[#070706] transition-all duration-500">
                  {sittings[1].duration} · {sittings[1].price}
                </span>
              </div>

              <div className="relative z-10 max-w-lg space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display sm:font-sans font-bold text-white tracking-tight group-hover:text-[#cbb074] transition-colors leading-tight">
                  The Akhada Sculpt
                </div>
                <p className="text-[11px] sm:text-xs text-[#d4cfc7] font-body font-light max-w-md leading-relaxed line-clamp-1">
                  Architectural precision haircut using imported Japanese steel shears.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] sm:text-xs font-body">
                <span className="text-[#cbb074] font-medium flex items-center gap-1">
                  <span>★</span> Kolhapur Signature Sitting
                </span>
                <span className="text-white font-medium group-hover:translate-x-1.5 transition-transform duration-300">
                  Experience Sitting →
                </span>
              </div>
            </div>

            {/* TILE 4 & 5: Middle Row - 2 Split Capsule Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              
              {/* Tile 4: Amber Gloss - Global Colour */}
              <div
                onClick={() => handleSittingClick(sittings[2])}
                className={`group relative h-[105px] sm:h-[115px] lg:h-[122px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_6px_25px_rgba(203,176,116,0.2)] transition-all duration-700 bg-[#15120e] shadow-lg cursor-pointer p-3 sm:p-4 flex flex-col justify-between ${
                  isDimmed('Hair') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
                }`}
              >
                <img
                  src={sittings[2].bg}
                  alt={sittings[2].name}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-[75%] group-hover:scale-112 group-hover:filter-none transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:opacity-80 transition-opacity duration-700"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#cbb074] font-body font-medium">
                    {sittings[2].badge}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15 group-hover:bg-[#cbb074] group-hover:text-[#070706] transition-all">
                    {sittings[2].price}
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="font-display sm:font-sans font-semibold text-sm sm:text-base lg:text-lg text-white tracking-tight group-hover:text-[#cbb074] transition-colors leading-tight">
                    Global Colour & Gloss
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#d4cfc7] font-body flex items-center justify-between mt-0.5">
                    <span>{sittings[2].duration} sitting</span>
                    <span className="text-[#cbb074] opacity-0 group-hover:opacity-100 transition-opacity">Reserve →</span>
                  </p>
                </div>
              </div>

              {/* Tile 5: Razor Steel - Precision Beard */}
              <div
                onClick={() => handleSittingClick(sittings[3])}
                className={`group relative h-[105px] sm:h-[115px] lg:h-[122px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_6px_25px_rgba(203,176,116,0.2)] transition-all duration-700 bg-[#121110] shadow-lg cursor-pointer p-3 sm:p-4 flex flex-col justify-between ${
                  isDimmed('Skin & Beard') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
                }`}
              >
                <img
                  src={sittings[3].bg}
                  alt={sittings[3].name}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-120 brightness-[70%] group-hover:scale-112 group-hover:filter-none transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:opacity-80 transition-opacity duration-700"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#cbb074] font-body font-medium">
                    {sittings[3].badge}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15 group-hover:bg-[#cbb074] group-hover:text-[#070706] transition-all">
                    {sittings[3].price}
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="font-display sm:font-sans font-semibold text-sm sm:text-base lg:text-lg text-white tracking-tight group-hover:text-[#cbb074] transition-colors leading-tight">
                    Precision Beard Sculpt
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#d4cfc7] font-body flex items-center justify-between mt-0.5">
                    <span>{sittings[3].duration} · Hot towel</span>
                    <span className="text-[#cbb074] opacity-0 group-hover:opacity-100 transition-opacity">Reserve →</span>
                  </p>
                </div>
              </div>

            </div>

            {/* TILE 6 & 7: Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
              
              {/* Tile 6: Hydra Mist - Hydra Facial */}
              <div
                onClick={() => handleSittingClick(sittings[5])}
                className={`sm:col-span-5 group relative h-[120px] sm:h-[130px] lg:h-[138px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_8px_25px_rgba(203,176,116,0.2)] transition-all duration-700 bg-[#0b120f] shadow-lg cursor-pointer p-3 sm:p-4 flex flex-col justify-between ${
                  isDimmed('Skin & Beard') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
                }`}
              >
                <img
                  src={sittings[5].bg}
                  alt={sittings[5].name}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-115 brightness-[70%] group-hover:scale-110 group-hover:filter-none transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 group-hover:opacity-85 transition-opacity duration-700"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#cbb074] font-body font-semibold">
                    {sittings[5].badge}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white bg-white/15 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15 group-hover:bg-[#cbb074] group-hover:text-[#070706] transition-all">
                    {sittings[5].price}
                  </span>
                </div>

                <div className="relative z-10 space-y-0.5">
                  <h4 className="font-display sm:font-sans font-semibold text-sm sm:text-base lg:text-lg text-white tracking-tight group-hover:text-[#cbb074] transition-colors leading-tight">
                    Hydra Facial
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#d4cfc7] font-body">Deep-cleanse · 60 min</p>
                </div>
              </div>

              {/* Tile 7: Opulent Royal Glam - Bridal Atelier */}
              <div
                onClick={() => handleSittingClick(sittings[6])}
                className={`sm:col-span-7 group relative h-[120px] sm:h-[130px] lg:h-[138px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#cbb074] hover:shadow-[0_8px_30px_rgba(203,176,116,0.25)] transition-all duration-700 bg-[#16120b] shadow-lg cursor-pointer p-3 sm:p-4 flex flex-col justify-between ${
                  isDimmed('Bridal') ? 'opacity-30 scale-[0.98]' : 'opacity-100'
                }`}
              >
                <img
                  src={sittings[6].bg}
                  alt={sittings[6].name}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-120 brightness-[75%] group-hover:scale-110 group-hover:filter-none transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/35 group-hover:opacity-85 transition-opacity duration-700"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#cbb074] font-body font-semibold">
                    {sittings[6].badge}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#070706] bg-[#cbb074] px-2.5 py-0.5 rounded-full font-body font-medium shadow-sm">
                    {sittings[6].duration} Sitting
                  </span>
                </div>

                <div className="relative z-10 flex items-end justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#9c978e] font-body block group-hover:text-white transition-colors">
                      Full Bridal Styling · HD Makeup
                    </span>
                    <h3 className="font-display sm:font-sans font-bold text-base sm:text-lg lg:text-xl text-white tracking-tight group-hover:text-[#cbb074] transition-colors">
                      Bridal Hair & Makeup
                    </h3>
                  </div>
                  <div className="font-display text-lg sm:text-xl lg:text-2xl text-[#cbb074] font-bold whitespace-nowrap group-hover:scale-105 transition-transform">
                    {sittings[6].price}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
