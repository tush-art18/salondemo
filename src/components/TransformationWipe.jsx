import React, { useState } from 'react';

export default function TransformationWipe({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const transformationStories = [
    {
      id: "men-fade-beard",
      title: "Precision Fade & Beard Architecture",
      category: "Men's Hair & Grooming",
      duration: "45 mins service",
      stylist: "Vikramaditya Shinde",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
      afterImage: "./assets/transformation_after.png",
      description: "From unkempt stubble to razor-drawn cheek lines and Japanese shear precision fade. Clean, athletic, and built to last."
    },
    {
      id: "bridal-glam-reveal",
      title: "Bridal Glam & Royal HD Transformation",
      category: "Bridal Styling",
      duration: "3 hours service",
      stylist: "Ananya Patil",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
      afterImage: "./assets/bridal_saaj.png",
      description: "Hydra skin illumination, traditional hair floral updo, and HD airbrush waterproof bridal makeup for photo-ready perfection."
    },
    {
      id: "hydra-glow-reflection",
      title: "Hydra-Glow Facial Purification",
      category: "Skin Transformation",
      duration: "60 mins service",
      stylist: "Meenal Kulkarni",
      beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      afterImage: "./assets/hydra_facial_skin_ritual.png",
      description: "Vortex vacuum extraction of deep impurities followed by cold hammer cryo-firming and hyaluronic jet infusion."
    }
  ];

  const currentStory = transformationStories[activeStoryIndex];

  return (
    <section id="transformations" className="py-32 px-6 sm:px-10 lg:px-16 bg-[#0b0a08]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#f4f1ea] leading-tight">
            Transformations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a39e93] font-body font-light leading-relaxed">
            Drag the divider to experience real client before and after hair and beauty results.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex gap-8 border-b border-[#1f1e1a] pb-4 mb-12 overflow-x-auto no-scrollbar">
          {transformationStories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => {
                setActiveStoryIndex(idx);
                setSliderPosition(50);
              }}
              className={`text-xs uppercase tracking-[0.2em] font-body transition-colors ${
                activeStoryIndex === idx ? 'text-[#f4f1ea] font-medium' : 'text-[#6b665e] hover:text-[#a39e93]'
              }`}
            >
              {story.category}
            </button>
          ))}
        </div>

        {/* Unboxed Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Slider Canvas (Col 8) */}
          <div className="lg:col-span-8">
            <div
              className="relative w-full h-[400px] sm:h-[500px] bg-[#12110f] overflow-hidden select-none cursor-ew-resize"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
              }}
            >
              {/* After Image */}
              <img
                src={currentStory.afterImage}
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"; }}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 z-10 text-[10px] uppercase tracking-[0.2em] text-[#f4f1ea] font-body bg-[#0b0a08]/80 px-3 py-1.5 border border-[#1f1e1a]">
                AFTER: SALON FINISH
              </div>

              {/* Before Image Overlay */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentStory.beforeImage}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute bottom-6 left-6 z-10 text-[10px] uppercase tracking-[0.2em] text-[#a39e93] font-body bg-[#0b0a08]/80 px-3 py-1.5 border border-[#1f1e1a]">
                  BEFORE: RAW HAIR
                </div>
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-[1px] bg-[#f4f1ea] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-6 h-6 rounded-full bg-[#f4f1ea] text-[#0b0a08] font-bold text-[10px] flex items-center justify-center -translate-x-1/2 mt-[240px]">
                  ↔
                </div>
              </div>

            </div>
          </div>

          {/* Text Info Sidebar (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-body block">
              {currentStory.category}
            </span>
            <h3 className="font-display text-3xl font-normal text-[#f4f1ea]">
              {currentStory.title}
            </h3>
            <p className="text-xs text-[#a39e93] font-body font-light leading-relaxed">
              {currentStory.description}
            </p>
            <div className="pt-4 border-t border-[#1f1e1a] text-xs text-[#6b665e] font-body space-y-1">
              <p>Stylist: <span className="text-[#a39e93]">{currentStory.stylist}</span></p>
              <p>Duration: <span className="text-[#a39e93]">{currentStory.duration}</span></p>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-primary w-full justify-center mt-6"
            >
              Book Transformation
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
