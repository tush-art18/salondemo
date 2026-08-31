import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const heroStageRef = useRef(null);
  const scene00Ref = useRef(null);
  const scene01Ref = useRef(null);
  const singleBgRef = useRef(null);

  // Hero Sequential Refs (Scene 00)
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const macroGridRef = useRef(null);
  const line3Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Scene 01 Sequential Refs (One line by one line on scroll)
  const scene01TagRef = useRef(null);
  const scene01Line1Ref = useRef(null);
  const scene01Line2Ref = useRef(null);
  const scene01SubRef = useRef(null);

  const scene02Ref = useRef(null);
  const consultPortraitRef = useRef(null);
  const unisexSceneRef = useRef(null);
  const unisexMaleRef = useRef(null);
  const unisexFemaleRef = useRef(null);
  const craftTitleRef = useRef(null);
  const craftGridRef = useRef(null);
  const transformSecRef = useRef(null);
  const stylistsGridRef = useRef(null);
  const timelineGridRef = useRef(null);
  const conclusionTitleRef = useRef(null);

  const strandMorphRef = useRef(null);
  const servicesTabsRef = useRef(null);
  const transformQuoteRef = useRef(null);
  const devanagariCardRef = useRef(null);
  const conclusionCardRef = useRef(null);
  const footerRef = useRef(null);

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Hair');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [devanagariState, setDevanagariState] = useState(0);
  const [bookingData, setBookingData] = useState({ service: 'Hair', stylist: 'Arjun', date: '', time: '11:00 AM', name: '', phone: '' });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const images = {
    singleSalonBg: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
    // Hero macro - 5 male salon/barber images
    macro1: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    macro2: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    macro3: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
    macro4: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
    macro5: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
    consultationPortrait: "stylist.jpeg",
    craftsmanshipTeam: "Craftsmanship.jpeg",
    // Dedicated Unisex Male & Female Portraits
    unisexMale: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85",
    unisexFemale: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85",
    // Before/After - matching male haircut transformation portraits
    beforePerson: "before.jpeg",
    afterPerson: "after.jpeg",
    stylist1: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    stylist2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    stylist3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    stylist4: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
  };

  // Before/After slider drag state
  const sliderRef = useRef(null);
  const isDraggingRef = useRef(false);

  const startDrag = () => { isDraggingRef.current = true; };
  const stopDrag = () => { isDraggingRef.current = false; };

  const onDragMove = (clientX) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  };

  // FAST & RESPONSIVE SEQUENTIAL GSAP TIMELINE ENGINE
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      const boxes = macroGridRef.current ? Array.from(macroGridRef.current.children) : [];

      // Explicitly ensure every element is completely invisible before sequence begins
      window.gsap.set([line1Ref.current, line2Ref.current, boxes, line3Ref.current, scrollIndicatorRef.current], { opacity: 0 });

      // 1. HERO INITIAL SEQUENTIAL ENTRANCE TIMELINE (Strict step-by-step: Line 1 -> Line 2 -> Images -> Rest of Texts)
      const seqTl = window.gsap.timeline({ defaults: { ease: "power3.out" } });

      seqTl
        // STEP 1: Line 1 appears first (all other elements are completely invisible)
        .fromTo(line1Ref.current,
          { opacity: 0, y: 22, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, delay: 0.15 }
        )
        // STEP 2: Only after Line 1 is fully visible -> Line 2 appears (images & rest stay invisible)
        .fromTo(line2Ref.current,
          { opacity: 0, y: 25, scale: 0.95, filter: "blur(8px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.6 },
          "+=0.2"
        )
        // STEP 3: Only after Line 2 is fully in place -> The 5 Macro Images unfold (line 3 & indicator stay invisible)
        .fromTo(boxes, 
          {
            opacity: 0,
            scale: 0.65,
            y: 35,
            rotationY: (i) => (i - 2) * 16,
            rotationX: 20,
            filter: "brightness(1.8) contrast(140%) blur(6px)",
            transformOrigin: "center center"
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            filter: "brightness(1) contrast(125%) blur(0px)",
            duration: 0.6,
            stagger: {
              each: 0.09,
              from: "center"
            },
            ease: "back.out(1.4)"
          },
          "+=0.2"
        )
        // STEP 4: Only after all 5 images are completely in place -> Line 3 appears
        .fromTo(line3Ref.current,
          { opacity: 0, y: 20, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 },
          "+=0.2"
        )
        // STEP 5: Finally, the scroll indicator softly illuminates
        .fromTo(scrollIndicatorRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "+=0.15"
        );

      // Subtle Organic Harmonic Wave Floating for 5 Macro Cards
      boxes.forEach((box, i) => {
        window.gsap.to(box, {
          y: (i % 2 === 0 ? -8 : 8),
          rotationZ: (i % 2 === 0 ? 1.5 : -1.5),
          duration: 2.8 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15 + 1.2
        });
      });

      // 2. HERO STAGE SCROLL SCRUB TIMELINE (GSAP Pinning, Seamless Single Background, Water-like Flow)
      const heroTimeline = window.gsap.timeline({
        scrollTrigger: {
          trigger: heroStageRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Single Persistent Salon Background - Steady high visibility with gentle cinematic zoom
      heroTimeline.to(singleBgRef.current, { scale: 1.08, ease: "none" }, 0);
      
      // Phase A: Scene 00 Ascends & Dissolves Smoothly Upward like water on scroll (immediateRender: false ensures seqTl is not overridden on load)
      heroTimeline
        .fromTo(scrollIndicatorRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: -20, duration: 0.6, immediateRender: false }, 0)
        .fromTo(line1Ref.current, { opacity: 1, y: 0, filter: "blur(0px)" }, { opacity: 0, y: -60, filter: "blur(5px)", duration: 1.2, ease: "power2.in", immediateRender: false }, 0.2)
        .fromTo(line2Ref.current, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, { opacity: 0, y: -80, scale: 0.94, filter: "blur(6px)", duration: 1.4, ease: "power2.in", immediateRender: false }, 0.5)
        .fromTo(boxes, { opacity: 1, y: 0, scale: 1, rotationX: 0, filter: "blur(0px)" }, {
          opacity: 0,
          y: -130,
          scale: 0.78,
          rotationX: -20,
          stagger: 0.08,
          filter: "blur(6px)",
          duration: 1.6,
          ease: "power2.in",
          immediateRender: false
        }, 0.7)
        .fromTo(line3Ref.current, { opacity: 1, y: 0, filter: "blur(0px)" }, { opacity: 0, y: -60, filter: "blur(5px)", duration: 1.2, ease: "power2.in", immediateRender: false }, 1.3)
        .fromTo(scene00Ref.current, { pointerEvents: "auto", opacity: 1 }, { pointerEvents: "none", opacity: 0, duration: 0.4, immediateRender: false }, 2.2);

      // Make sure Scene 01 container is active and visible only when scrolling forward
      heroTimeline.fromTo(scene01Ref.current, { opacity: 0 }, { opacity: 1, duration: 0.5, immediateRender: false }, 2.2);

      // Phase B: Scene 01 Arrives ONE LINE BY ONE LINE on scroll ("Flows like water")
      heroTimeline
        .fromTo(scene01TagRef.current, 
          { opacity: 0, y: 50, filter: "blur(6px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 
          2.5
        )
        .fromTo(scene01Line1Ref.current, 
          { opacity: 0, y: 55, filter: "blur(8px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.3, ease: "power2.out" }, 
          3.4
        )
        .fromTo(scene01Line2Ref.current, 
          { opacity: 0, y: 55, filter: "blur(8px)", scale: 0.95 }, 
          { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.4, ease: "power2.out" }, 
          4.4
        )
        .fromTo(scene01SubRef.current, 
          { opacity: 0, y: 35, filter: "blur(5px)" }, 
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }, 
          5.4
        );

      // Phase C: READING HOLD ZONE — Scene 01 stays on screen and readable
      heroTimeline.to({}, { duration: 2.5 }, 6.6);

      // Phase D: Scene 01 smoothly flows upward to transition to Scene 02
      heroTimeline.to(scene01Ref.current, 
        { opacity: 0, y: -70, filter: "blur(6px)", duration: 1.5, ease: "power2.in" }, 
        9.0
      );

      // SCENE 02: CONSULTATION GSAP PARALLAX & STAGGER
      window.gsap.to(consultPortraitRef.current, {
        scale: 1.08,
        rotateY: -4,
        scrollTrigger: { trigger: scene02Ref.current, start: "top bottom", end: "bottom top", scrub: 1 }
      });

      window.gsap.fromTo(".consult-line", 
        { opacity: 0, x: -25, filter: "blur(4px)" }, 
        { opacity: 1, x: 0, filter: "blur(0px)", stagger: 0.14, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: scene02Ref.current, start: "top 70%" } }
      );

      // SCENE 03: UNISEX ATELIER DUALITY PHOTOGRAPHY GSAP
      if (unisexSceneRef.current) {
        if (unisexMaleRef.current) {
          window.gsap.fromTo(unisexMaleRef.current,
            { opacity: 0.25, y: 50, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: unisexSceneRef.current, start: "top 75%" } }
          );
        }
        if (unisexFemaleRef.current) {
          window.gsap.fromTo(unisexFemaleRef.current,
            { opacity: 0.25, y: 50, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: unisexSceneRef.current, start: "top 75%" } }
          );
        }
      }

      // SCENE 04: THE MENU — EXPANDING KINETIC TYPOGRAPHY, TABS & CARDS
      window.gsap.fromTo(craftTitleRef.current, 
        { letterSpacing: "-0.04em", opacity: 0.2, y: 30 }, 
        { letterSpacing: "0.08em", opacity: 1, y: 0, scrollTrigger: { trigger: craftTitleRef.current, start: "top 85%", end: "bottom 30%", scrub: 0.6 } }
      );

      if (strandMorphRef.current) {
        window.gsap.fromTo(strandMorphRef.current, 
          { opacity: 0, y: 40, scale: 0.96 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: strandMorphRef.current, start: "top 85%" } }
        );
      }

      if (servicesTabsRef.current) {
        window.gsap.fromTo(servicesTabsRef.current.children, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: servicesTabsRef.current, start: "top 88%" } }
        );
      }

      if (craftGridRef.current) {
        window.gsap.fromTo(craftGridRef.current.children, 
          { opacity: 0, y: 50, scale: 0.94, rotationX: 12 }, 
          { opacity: 1, y: 0, scale: 1, rotationX: 0, stagger: 0.12, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: craftGridRef.current, start: "top 82%" } }
        );
      }

      // SCENE 05: BEFORE/AFTER TRANSFORMATION — APERTURE ZOOM & QUOTE SLIDE-IN
      if (transformSecRef.current) {
        window.gsap.fromTo(".transform-header", 
          { opacity: 0, y: 35 }, 
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: transformSecRef.current, start: "top 80%" } }
        );

        if (sliderRef.current) {
          window.gsap.fromTo(sliderRef.current, 
            { opacity: 0, scale: 0.92, y: 40, rotateX: 8 }, 
            { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sliderRef.current, start: "top 80%" } }
          );
        }

        if (transformQuoteRef.current) {
          window.gsap.fromTo(transformQuoteRef.current.children, 
            { opacity: 0, x: 40, filter: "blur(4px)" }, 
            { opacity: 1, x: 0, filter: "blur(0px)", stagger: 0.15, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: transformQuoteRef.current, start: "top 80%" } }
          );
        }
      }

      // SCENE 06: THE ARTISANS — 3D STAGGERED ROTATION & PARALLAX
      window.gsap.fromTo(".stylists-header", 
        { opacity: 0, y: 35 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".stylists-header", start: "top 85%" } }
      );

      if (stylistsGridRef.current) {
        window.gsap.fromTo(stylistsGridRef.current.children, 
          { opacity: 0, y: 60, rotateY: 15, scale: 0.92 }, 
          { opacity: 1, y: 0, rotateY: 0, scale: 1, stagger: 0.14, duration: 1, ease: "power3.out", scrollTrigger: { trigger: stylistsGridRef.current, start: "top 80%" } }
        );
      }

      // SCENE 07: THE SPACE — PHOTO STRIP CASCADE
      window.gsap.fromTo(".timeline-header", 
        { opacity: 0, y: 35 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".timeline-header", start: "top 85%" } }
      );

      if (timelineGridRef.current) {
        window.gsap.fromTo(timelineGridRef.current.children, 
          { opacity: 0, y: 40, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: timelineGridRef.current, start: "top 80%" } }
        );
      }

      // SCENE 08: IDENTITY DEVANAGARI MORPH
      window.ScrollTrigger.create({
        trigger: "#scene-devanagari",
        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => setDevanagariState(1),
        onLeaveBack: () => setDevanagariState(0)
      });

      if (devanagariCardRef.current) {
        window.gsap.fromTo(devanagariCardRef.current, 
          { opacity: 0, scale: 0.92, y: 30 }, 
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#scene-devanagari", start: "top 75%" } }
        );
      }

      // SCENE 09: THE CONCLUSION & PASS
      window.gsap.fromTo(conclusionTitleRef.current, 
        { scale: 0.92, opacity: 0.3, y: 30 }, 
        { scale: 1.04, opacity: 1, y: 0, scrollTrigger: { trigger: "#location", start: "top 85%", end: "bottom 35%", scrub: 0.7 } }
      );

      if (conclusionCardRef.current) {
        window.gsap.fromTo(conclusionCardRef.current, 
          { opacity: 0, y: 40, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: conclusionCardRef.current, start: "top 85%" } }
        );
      }

      // FOOTER: AMBIENT STAGGERED REVEAL
      if (footerRef.current) {
        window.gsap.fromTo(footerRef.current.children, 
          { opacity: 0, y: 25 }, 
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: footerRef.current, start: "top 90%" } }
        );
      }
    }
  }, []);

  // Magnetic Cursor 3D Tilt for Hero Cards (Desktop & Tablet)
  const handleBoxMouseMove = (e) => {
    if (window.innerWidth < 640) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    window.gsap.to(e.currentTarget, { 
      rotationY: (x / rect.width) * 20, 
      rotationX: -(y / rect.height) * 20, 
      scale: 1.1, 
      duration: 0.3, 
      ease: "power2.out" 
    });
  };

  const handleBoxMouseLeave = (e) => {
    if (window.innerWidth < 640) return;
    window.gsap.to(e.currentTarget, { 
      rotationY: 0, 
      rotationX: 0, 
      scale: 1, 
      duration: 0.5, 
      ease: "power2.out" 
    });
  };

  const services = [
    // Hair
    { id: 'h1', type: 'Hair', name: 'Signature Cut & Style', desc: 'Precision cut, wash, and finish.', duration: '45 min', price: '₹450' },
    { id: 'h2', type: 'Hair', name: 'Global Colour & Gloss', desc: 'Full colour with a high-shine finish.', duration: '90 min', price: '₹3,200' },
    { id: 'h3', type: 'Hair', name: 'The Akhada Sculpt', desc: 'Architectural precision haircut using imported Japanese steel shears.', duration: '45 min', price: '₹450' },
    { id: 'h4', type: 'Hair', name: 'Gold Balayage & Colour Restoration', desc: 'High-shine keratin colour lock with diamond infusion.', duration: '120 min', price: '₹4,500' },

    // Skin & Beard
    { id: 'sb1', type: 'Skin & Beard', name: 'Precision Beard Sculpt', desc: 'Clean lines, hot towel finish.', duration: '35 min', price: '₹350' },
    { id: 'sb2', type: 'Skin & Beard', name: 'Hydra Facial', desc: 'Deep-cleanse and hydration facial.', duration: '60 min', price: '₹2,800' },

    // Bridal
    { id: 'b1', type: 'Bridal', name: 'Bridal Hair & Makeup', desc: 'Full bridal styling, HD makeup included.', duration: '180 min', price: '₹12,500' },
    { id: 'b2', type: 'Bridal', name: 'Trial Sitting', desc: 'Preview session before the big day.', duration: '90 min', price: '₹3,000' }
  ];

  const stylists = [
    { name: "ARJUN", role: "Creative Hair Artist", quote: "I don't give people the haircut they ask for. I give them the haircut that fits who they are.", image: images.stylist1 },
    { name: "PRIYA", role: "Colour Specialist", quote: "Colour should never look applied. It should look inevitable.", image: images.stylist2 },
    { name: "MEENAL", role: "Cosmetology & Hydra Lead", quote: "Pure skin reflects light naturally — clinical precision yields radiance.", image: images.stylist3 },
    { name: "SIDDHARTH", role: "Senior Beard Artisan", quote: "The razor edge requires the steady hand of a master craftsman.", image: images.stylist4 }
  ];

  const spacePhotos = [
    { id: 'sp1', src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80", alt: "Morning light in salon" },
    { id: 'sp2', src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80", alt: "Artisan tools laid out" },
    { id: 'sp3', src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80", alt: "Empty artisan chair" },
    { id: 'sp4', src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80", alt: "Mirror reflection and ambient glow" },
    { id: 'sp5', src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80", alt: "Sterilized grooming station" }
  ];

  const getWhatsAppLink = () => {
    const msg = encodeURIComponent(
      `Hello The Hair Avenue Salon Kolhapur,\nI would like to reserve an experience:\n\n✨ Service: ${bookingData.service}\n👤 Guest: ${bookingData.name}\n📱 Phone: ${bookingData.phone}\n📅 Date: ${bookingData.date}\n⏰ Time: ${bookingData.time}\n✂️ Stylist: ${bookingData.stylist}\n\nPlease confirm my pass.`
    );
    return `https://wa.me/919595073807?text=${msg}`;
  };

  return (
    <div className="relative min-h-screen bg-[#070706] text-[#f5f2eb] overflow-x-hidden">
      <div className="grain-overlay"></div>

      {/* RESPONSIVE TOP NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-12 flex items-center justify-between bg-gradient-to-b from-[#070706] via-[#070706]/90 to-transparent backdrop-blur-sm">
        <a href="#" className="flex flex-col group">
          <span className="font-display font-medium text-base sm:text-xl tracking-[0.15em] sm:tracking-[0.2em] text-[#f5f2eb] group-hover:text-[#cbb074] transition-colors">
            THE HAIR AVENUE
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#9c978e] uppercase font-body mt-0.5">
            Dabholkar Corner · Kolhapur
          </span>
        </a>

        <button
          onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }}
          className="px-4 sm:px-7 py-2 sm:py-3 bg-[#f5f2eb] text-[#070706] text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-[#cbb074] transition-all shadow-lg"
        >
          BOOK
        </button>
      </header>

      {/* MOBILE FIXED BOTTOM BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#070706]/95 backdrop-blur-md border-t border-[#1f1e1a]">
        <button
          onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }}
          className="w-full py-3.5 bg-[#f5f2eb] text-[#070706] text-xs font-bold tracking-[0.2em] uppercase shadow-xl"
        >
          BOOK YOUR EXPERIENCE
        </button>
      </div>

      <main className="pb-16 sm:pb-0">

        {/* COMBINED HERO STAGE - PINNED SINGLE BACKGROUND WITH WATER-LIKE LINE-BY-LINE FLOW */}
        <div ref={heroStageRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#070706]">
          
          {/* Single Persistent Salon Background - High Visibility & Ambiance for both Hero and Scene 01 */}
          <div 
            ref={singleBgRef}
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-65 pointer-events-none will-change-transform filter contrast-105 brightness-90"
            style={{ backgroundImage: `url('${images.singleSalonBg}')` }}
          >
            {/* Soft atmospheric gradient overlay that lets the salon interior shine through clearly */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070706]/85 via-[#070706]/35 to-[#070706]/75"></div>
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          {/* SCENE 00: THE MOMENT */}
          <div ref={scene00Ref} className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 pb-12 z-10 will-change-transform">
            <div className="w-full max-w-3xl space-y-6 sm:space-y-10 my-auto">
              
              {/* STEP 1: LINE 1 */}
              <p ref={line1Ref} className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#e0dad0] font-body opacity-0 will-change-transform drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                Every transformation begins with a moment.
              </p>

              {/* STEP 2: LINE 2 */}
              <h1 ref={line2Ref} className="font-display text-3xl sm:text-6xl md:text-7xl font-normal text-[#f5f2eb] leading-tight tracking-tight px-2 opacity-0 will-change-transform drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                A moment when you decide…
              </h1>

              {/* STEP 3: THE 5 MACRO IMAGES - MEN'S SALON, CINEMATIC 3D SHUTTER + SHEEN + COLOR HOVER */}
              <div 
                ref={macroGridRef}
                className="grid grid-cols-5 gap-2 sm:gap-4 py-4 sm:py-6 perspective-1000 max-w-2xl mx-auto"
              >
                <div onMouseMove={handleBoxMouseMove} onMouseLeave={handleBoxMouseLeave} className="macro-card aspect-square bg-[#141412] image-zoom-container border border-[#252420] shadow-2xl opacity-0 group cursor-pointer">
                  <img src={images.macro1} alt="Men's Haircut" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="sheen-sweep"></div>
                </div>
                <div onMouseMove={handleBoxMouseMove} onMouseLeave={handleBoxMouseLeave} className="macro-card aspect-square bg-[#141412] image-zoom-container border border-[#252420] shadow-2xl opacity-0 group cursor-pointer">
                  <img src={images.macro2} alt="Precision Shears" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="sheen-sweep"></div>
                </div>
                <div onMouseMove={handleBoxMouseMove} onMouseLeave={handleBoxMouseLeave} className="macro-card aspect-square bg-[#141412] image-zoom-container border border-[#252420] shadow-2xl opacity-0 group cursor-pointer">
                  <img src={images.macro3} alt="Barber Craft" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="sheen-sweep"></div>
                </div>
                <div onMouseMove={handleBoxMouseMove} onMouseLeave={handleBoxMouseLeave} className="macro-card aspect-square bg-[#141412] image-zoom-container border border-[#252420] shadow-2xl opacity-0 group cursor-pointer">
                  <img src={images.macro4} alt="Salon Portrait" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="sheen-sweep"></div>
                </div>
                <div onMouseMove={handleBoxMouseMove} onMouseLeave={handleBoxMouseLeave} className="macro-card aspect-square bg-[#141412] image-zoom-container border border-[#252420] shadow-2xl opacity-0 group cursor-pointer">
                  <img src={images.macro5} alt="Style & Detail" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="sheen-sweep"></div>
                </div>
              </div>

              {/* STEP 4: LINE 3 */}
              <p ref={line3Ref} className="font-display text-xl sm:text-4xl text-[#cbb074] italic opacity-0 px-2 will-change-transform drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                “…it's time to become someone new.”
              </p>
            </div>

            {/* STEP 5: SCROLL INDICATOR */}
            <div ref={scrollIndicatorRef} className="pt-6 sm:pt-8 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#9c978e] animate-bounce opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Scroll To Enter ↓
            </div>
          </div>

          {/* SCENE 01: THE ARRIVAL (FLOWS IN LINE BY LINE ON SCROLL) */}
          <div ref={scene01Ref} className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 py-20 text-center z-10 pointer-events-none will-change-transform opacity-0">
            <div className="max-w-4xl space-y-6 sm:space-y-8">
              
              {/* LINE 1 of Scene 01 */}
              <div ref={scene01TagRef} className="will-change-transform">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#9c978e] font-body inline-block border border-[#252420] px-4 py-1.5 bg-[#070706]/85 backdrop-blur-sm shadow-xl">
                  Scene 01 · The Arrival
                </span>
              </div>
              
              {/* LINE 2 of Scene 01 */}
              <h2 ref={scene01Line1Ref} className="font-display text-2xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal leading-snug sm:leading-tight px-2 will-change-transform drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                You walk in carrying yesterday.
              </h2>

              {/* LINE 3 of Scene 01 */}
              <div ref={scene01Line2Ref} className="font-display text-2xl sm:text-5xl md:text-6xl font-normal leading-snug sm:leading-tight px-2 will-change-transform">
                <span className="text-[#cbb074] italic drop-shadow-[0_0_35px_rgba(203,176,116,0.45)]">
                  You leave room for tomorrow.
                </span>
              </div>

              {/* LINE 4 of Scene 01 */}
              <p ref={scene01SubRef} className="text-[10px] sm:text-xs text-[#e0dad0] font-body tracking-[0.15em] sm:tracking-[0.25em] uppercase max-w-xl mx-auto pt-2 sm:pt-4 will-change-transform drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                Full-Screen Salon Atmosphere • Dabholkar Corner
              </p>

            </div>
          </div>

        </div>

        {/* SCENE 02: CONSULTATION */}
        <section ref={scene02Ref} className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#070706] border-t border-[#1f1e1a]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
            <div className="lg:col-span-6">
              <div ref={consultPortraitRef} className="relative aspect-[3/4] max-h-[380px] sm:max-h-none mx-auto bg-[#141412] image-zoom-container border border-[#252420] shadow-2xl">
                <img src={images.consultationPortrait} alt="Portrait" className="w-full h-full object-cover filter grayscale contrast-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#9c978e] font-body block mb-2 sm:mb-3">Scene 02 · The Listening</span>
                <h2 className="font-display text-2xl sm:text-5xl font-normal text-[#f5f2eb] leading-tight">Before the scissors move, we listen.</h2>
              </div>
              <div className="space-y-2 sm:space-y-3 font-display text-lg sm:text-xl text-[#9c978e] pt-2 border-l border-[#cbb074] pl-4 sm:pl-6">
                <p className="consult-line">Your face.</p>
                <p className="consult-line">Your style.</p>
                <p className="consult-line">Your personality.</p>
                <p className="consult-line">Your everyday life.</p>
              </div>
              <p className="font-display text-lg sm:text-xl text-[#cbb074] italic pt-2 sm:pt-4">“Because the right look isn't chosen. It's discovered.”</p>
            </div>
          </div>
        </section>

        {/* SCENE 03: UNISEX ATELIER */}
        <section ref={unisexSceneRef} className="relative z-10 py-16 sm:py-28 px-4 sm:px-10 lg:px-16 bg-[#090807] border-t border-[#1f1e1a]">
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
            
            {/* Minimal Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1f1e1a] pb-6">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#cbb074] font-body block mb-1">
                  Scene 03 · Unisex Atelier
                </span>
                <h2 className="font-display text-2xl sm:text-4xl text-[#f5f2eb] font-normal tracking-wide">
                  Crafted for Him. Sculpted for Her.
                </h2>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#5c5850] font-body">
                THE HAIR AVENUE · UNISEX EXCELLENCE
              </div>
            </div>

            {/* Dual Large Photography Showcase (Male & Female) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              
              {/* Male Portrait Panel */}
              <div 
                ref={unisexMaleRef}
                className="group relative h-[480px] sm:h-[620px] lg:h-[700px] overflow-hidden border border-[#252420] hover:border-[#cbb074]/60 transition-all duration-700 bg-[#12110f] shadow-2xl cursor-pointer"
              >
                <img 
                  src={images.unisexMale} 
                  alt="Gentlemen Styling - The Hair Avenue" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-[112%] brightness-[92%] group-hover:grayscale-0 group-hover:contrast-[108%] group-hover:saturate-[120%] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/20 to-transparent group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Corner Minimal Badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#070706]/85 backdrop-blur-md border border-[#252420] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#f5f2eb] font-body">
                  01 · FOR HIM
                </div>

                {/* Bottom Editorial Label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#cbb074] font-body block">
                      PRECISION & ARCHITECTURE
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-[#f5f2eb] font-normal group-hover:text-[#cbb074] transition-colors">
                      Gentlemen's Couture
                    </h3>
                  </div>
                  <span className="text-xs text-[#9c978e] font-display italic hidden sm:inline">
                    Avenue Men
                  </span>
                </div>
              </div>

              {/* Female Portrait Panel */}
              <div 
                ref={unisexFemaleRef}
                className="group relative h-[480px] sm:h-[620px] lg:h-[700px] overflow-hidden border border-[#252420] hover:border-[#cbb074]/60 transition-all duration-700 bg-[#12110f] shadow-2xl cursor-pointer"
              >
                <img 
                  src={images.unisexFemale} 
                  alt="Women Couture - The Hair Avenue" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-[112%] brightness-[92%] group-hover:grayscale-0 group-hover:contrast-[108%] group-hover:saturate-[120%] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/20 to-transparent group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Corner Minimal Badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#070706]/85 backdrop-blur-md border border-[#252420] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#f5f2eb] font-body">
                  02 · FOR HER
                </div>

                {/* Bottom Editorial Label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#cbb074] font-body block">
                      HAUTE & RADIANCE
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-[#f5f2eb] font-normal group-hover:text-[#cbb074] transition-colors">
                      Women's Haute Coiffure
                    </h3>
                  </div>
                  <span className="text-xs text-[#9c978e] font-display italic hidden sm:inline">
                    Avenue Women
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SCENE 04: THE MENU */}
        <section id="services" className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#0e0e0c] border-t border-[#1f1e1a]">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Title & Subhead */}
            <div className="mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#cbb074] font-body block mb-2 sm:mb-3">
                Scene 04 · The Menu
              </span>
              <h2 ref={craftTitleRef} className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#f5f2eb] tracking-tight">
                The Menu
              </h2>
              <p className="mt-2 sm:mt-3 text-base sm:text-xl text-[#9c978e] font-display italic">
                Not services. Sittings.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div ref={servicesTabsRef} className="flex gap-6 sm:gap-10 overflow-x-auto no-scrollbar pb-4 sm:pb-5 mb-10 sm:mb-14 border-b border-[#1f1e1a]">
              {['Hair', 'Skin & Beard', 'Bridal'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm uppercase tracking-[0.2em] font-body whitespace-nowrap py-2 transition-all relative ${
                    selectedCategory === cat
                      ? 'text-[#f5f2eb] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#cbb074]'
                      : 'text-[#5c5850] hover:text-[#9c978e]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Plain, Highly Scannable Menu List */}
            <div ref={craftGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {services.filter(s => s.type === selectedCategory).map((service) => (
                <div
                  key={service.id}
                  className="p-6 sm:p-7 bg-[#12110f] border border-[#1f1e1a] hover:border-[#cbb074]/60 transition-all duration-300 flex flex-col justify-between space-y-5 group shadow-lg"
                >
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl sm:text-2xl text-[#f5f2eb] font-normal group-hover:text-[#cbb074] transition-colors">
                        {service.name}
                      </h3>
                      <span className="font-display text-lg sm:text-xl text-[#cbb074] font-medium whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#9c978e] font-body leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1a1916] flex items-center justify-between text-xs font-body">
                    <span className="text-[#5c5850] tracking-[0.15em] uppercase flex items-center gap-1.5">
                      <span>⏱</span> {service.duration}
                    </span>
                    <button
                      onClick={() => {
                        setBookingData({ ...bookingData, service: service.name });
                        setBookingConfirmed(false);
                        setBookingOpen(true);
                      }}
                      className="text-[10px] uppercase tracking-[0.2em] text-[#f5f2eb] group-hover:text-[#cbb074] transition-colors font-medium flex items-center gap-1 cursor-pointer"
                    >
                      Reserve Sitting →
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SCENE 05: BEFORE/AFTER TRANSFORMATION */}
        <section ref={transformSecRef} className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#070706] border-t border-[#1f1e1a]">
          <div className="max-w-7xl mx-auto">
            <div className="transform-header max-w-3xl mb-10 sm:mb-16">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#9c978e] font-body block mb-2 sm:mb-3">Scene 05 · The Reveal</span>
              <h2 className="font-display text-3xl sm:text-6xl font-normal text-[#f5f2eb] leading-tight">BEFORE / AFTER</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-8">
                <div 
                  ref={sliderRef}
                  className="relative w-full h-[320px] sm:h-[550px] bg-[#141412] overflow-hidden select-none cursor-ew-resize border border-[#252420] shadow-2xl will-change-transform"
                  onMouseDown={startDrag}
                  onMouseUp={stopDrag}
                  onMouseLeave={stopDrag}
                  onMouseMove={(e) => onDragMove(e.clientX)}
                  onTouchStart={(e) => { startDrag(); onDragMove(e.touches[0].clientX); }}
                  onTouchEnd={stopDrag}
                  onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
                >
                  <img src={images.afterPerson} alt="After Transformation" className="absolute inset-0 w-full h-full object-cover filter contrast-110 pointer-events-none" />
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[#f5f2eb] font-body bg-[#070706]/80 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#252420] pointer-events-none">
                    AFTER · CONFIDENT & RICH
                  </div>

                  <img src={images.beforePerson} alt="Before Transformation" className="absolute inset-0 w-full h-full object-cover filter contrast-105 brightness-95 pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-[#9c978e] font-body bg-[#070706]/80 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#252420] pointer-events-none" style={{ opacity: sliderPosition > 12 ? 1 : 0, transition: 'opacity 0.2s' }}>
                    BEFORE · UNSTYLED
                  </div>

                  <div className="absolute top-0 bottom-0 z-20 flex flex-col items-center pointer-events-none" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
                    <div className="w-[2px] h-full bg-white/80" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-[#070706] font-bold text-xs flex items-center justify-center shadow-xl border border-[#cbb074]">↔</div>
                  </div>
                </div>
                <p className="text-[10px] text-[#5c5850] tracking-widest uppercase mt-3 text-center">← Drag to reveal →</p>
              </div>

              <div ref={transformQuoteRef} className="lg:col-span-4 space-y-6 sm:space-y-8">
                <blockquote className="font-display text-2xl sm:text-3xl text-[#f5f2eb] font-normal leading-snug">“It's not about looking different.”</blockquote>
                <blockquote className="font-display text-2xl sm:text-3xl text-[#cbb074] italic leading-snug">“It's about feeling different.”</blockquote>
                <p className="text-xs text-[#9c978e] font-body leading-relaxed pt-2 sm:pt-4 border-t border-[#1f1e1a]">
                  Precision haircut architecture and skin hydra purification engineered for confidence.
                </p>
                <button onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }} className="btn-cinema w-full justify-center mt-4 sm:mt-6">Book Transformation</button>
              </div>
            </div>
          </div>
        </section>

        {/* SCENE 06: THE ARTISANS — COMBINED STAFF EDITORIAL (INFO LEFT, IMAGE RIGHT) */}
        <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#0e0e0c] border-t border-[#1f1e1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
              
              {/* LEFT COLUMN: INFO & STORYTELLING */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                <div>
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
                  <div className="flex items-start gap-4">
                    <span className="text-[#cbb074] text-sm mt-0.5">✦</span>
                    <div>
                      <h4 className="font-display text-lg text-[#f5f2eb]">Architectural Hair Sculptors</h4>
                      <p className="text-xs text-[#9c978e] font-body">Imported Japanese steel shear work tailored to facial geometry.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#cbb074] text-sm mt-0.5">✦</span>
                    <div>
                      <h4 className="font-display text-lg text-[#f5f2eb]">Master Colourists & Balayage Artists</h4>
                      <p className="text-xs text-[#9c978e] font-body">Diamond gloss infusion and bespoke botanical tone balance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#cbb074] text-sm mt-0.5">✦</span>
                    <div>
                      <h4 className="font-display text-lg text-[#f5f2eb]">Skin & Cosmetology Therapists</h4>
                      <p className="text-xs text-[#9c978e] font-body">Hydra-pore purification and hot eucalyptus towel finishes.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }}
                    className="btn-cinema text-xs uppercase tracking-[0.2em] px-8 py-3.5"
                  >
                    Reserve with Atelier Team →
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: COMBINED STAFF IMAGE */}
              <div className="lg:col-span-6">
                <div className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#141412] border border-[#252420] hover:border-[#cbb074]/60 transition-all duration-700 shadow-2xl cursor-pointer" onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }}>
                  <img
                    src={images.craftsmanshipTeam}
                    alt="The Hair Avenue Artisans Team"
                    className="w-full h-full object-cover filter grayscale contrast-[110%] brightness-[94%] group-hover:grayscale-0 group-hover:contrast-[108%] group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700"></div>

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

        {/* SCENE 07: THE SPACE */}
        <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#070706] border-t border-[#1f1e1a]">
          <div className="max-w-7xl mx-auto">
            
            {/* Small top-left Section Title */}
            <div className="timeline-header mb-8 sm:mb-12">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#cbb074] font-body block">
                Scene 07 · The Space
              </span>
            </div>

            {/* Wordless Photo Strip */}
            <div ref={timelineGridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {spacePhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative aspect-[3/4] overflow-hidden bg-[#12110f] border border-[#1f1e1a] hover:border-[#cbb074]/60 transition-all duration-700 shadow-xl"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover filter grayscale-[20%] contrast-[105%] group-hover:scale-108 group-hover:filter-none transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070706]/40 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Single centered small caption */}
            <p className="text-center text-xs sm:text-sm text-[#9c978e] font-display italic tracking-wide mt-10 sm:mt-14">
              Every detail here is on purpose.
            </p>

          </div>
        </section>

        {/* SCENE 08: IDENTITY DEVANAGARI MORPH */}
        <section id="scene-devanagari" className="relative z-10 py-20 sm:py-32 px-4 sm:px-12 lg:px-20 bg-[#0e0e0c] border-t border-[#1f1e1a] text-center">
          <div ref={devanagariCardRef} className="max-w-4xl mx-auto space-y-8 sm:space-y-10 will-change-transform">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#9c978e] font-body block">Scene 08 · Identity</span>
            <div className="min-h-[90px] sm:min-h-[120px] flex items-center justify-center">
              {devanagariState === 0 ? (
                <h3 className="font-devanagari text-2xl sm:text-5xl text-[#cbb074] animate-morph">तुमची शैली. तुमची ओळख.</h3>
              ) : (
                <h3 className="font-display text-2xl sm:text-5xl text-[#f5f2eb] animate-morph">YOUR STYLE. YOUR IDENTITY.</h3>
              )}
            </div>
            <blockquote className="font-display text-xl sm:text-4xl text-[#f5f2eb] italic">“Born in Kolhapur. Designed for everywhere.”</blockquote>
          </div>
        </section>

        {/* SCENE 09: THE CONCLUSION */}
        <section id="location" className="relative z-10 py-24 sm:py-36 px-4 sm:px-12 lg:px-20 bg-[#070706] border-t border-[#1f1e1a] text-center">
          <div ref={conclusionCardRef} className="max-w-3xl mx-auto space-y-8 sm:space-y-10 will-change-transform">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#9c978e] font-body">Scene 09 · The Conclusion</p>
            <h2 ref={conclusionTitleRef} className="font-display text-3xl sm:text-6xl font-normal text-[#f5f2eb] will-change-transform">Ready for your next version?</h2>
            <div className="pt-4 sm:pt-6">
              <button onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }} className="btn-cinema text-xs sm:text-sm px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto justify-center shadow-2xl">
                BOOK YOUR EXPERIENCE
              </button>
            </div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#5c5850] font-body pt-2 sm:pt-4">Dabholkar Corner · Kolhapur · Maharashtra 416003</p>
          </div>
        </section>

        {/* LUXURY EDITORIAL FOOTER WITH GOOGLE MAP */}
        <footer id="location" ref={footerRef} className="relative z-10 py-16 sm:py-24 px-4 sm:px-12 lg:px-20 bg-[#070706] border-t border-[#1f1e1a]">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            
            {/* Upper Section: Location Info & Interactive Google Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
              
              {/* Left Column: Salon Details, Contact & Hours (5 Cols on LG) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#cbb074] font-body block mb-2">SALON HEADQUARTERS</span>
                    <h3 className="font-display font-medium text-2xl sm:text-3xl tracking-[0.15em] text-[#f5f2eb]">
                      THE HAIR AVENUE
                    </h3>
                    <p className="text-xs text-[#9c978e] font-body mt-2 leading-relaxed">
                      Kolhapur's Premier Unisex Salon & Cosmetology Studio. Precision haircuts, balayage, hydra-purification, and bespoke grooming rituals.
                    </p>
                  </div>

                  {/* Address Card */}
                  <div className="p-5 bg-[#0e0e0c] border border-[#252420] space-y-3.5">
                    <div className="flex items-start gap-3">
                      <span className="text-base text-[#cbb074] mt-0.5">📍</span>
                      <div className="text-xs font-body leading-relaxed">
                        <p className="font-medium text-[#f5f2eb]">Dabholkar Corner, Cross Road Apartments</p>
                        <p className="text-[#9c978e]">Kolhapur, Maharashtra 416003</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-[#1a1916]">
                      <span className="text-sm text-[#cbb074]">📞</span>
                      <div className="text-xs font-body">
                        <span className="text-[#9c978e]">Direct Reservations: </span>
                        <a href="tel:09595073807" className="text-[#f5f2eb] hover:text-[#cbb074] font-medium transition-colors">095950 73807</a>
                      </div>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="space-y-2 text-xs font-body">
                    <div className="flex justify-between items-center py-2 border-b border-[#1a1916]">
                      <span className="text-[#9c978e]">Monday – Sunday</span>
                      <span className="text-[#f5f2eb] font-medium">9:00 AM – 9:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#1a1916]">
                      <span className="text-[#9c978e]">VIP Appointments</span>
                      <span className="text-[#cbb074]">Advance Booking</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#1a1916]">
                      <span className="text-[#9c978e]">Guest Parking</span>
                      <span className="text-[#cbb074]">Free On-Site Parking</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => { setBookingConfirmed(false); setBookingOpen(true); }}
                    className="btn-cinema text-xs px-6 py-3.5 flex-1 justify-center text-center"
                  >
                    RESERVE NOW
                  </button>
                  <a
                    href="https://maps.google.com/?q=The+Hair+Avenue+Dabholkar+Corner+Kolhapur+Maharashtra+416003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 bg-[#141412] border border-[#252420] text-[#f5f2eb] text-[10px] uppercase tracking-[0.2em] hover:border-[#cbb074] hover:text-[#cbb074] transition-all flex items-center gap-2 justify-center"
                  >
                    <span>DIRECTIONS ↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Google Maps Embed (7 Cols on LG) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] bg-[#0e0e0c] border border-[#252420] overflow-hidden group hover:border-[#cbb074]/60 transition-colors shadow-2xl flex flex-col">
                  
                  {/* Map Header Status Bar */}
                  <div className="px-4 sm:px-6 py-3 bg-[#141412] border-b border-[#252420] flex items-center justify-between z-10">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#f5f2eb] font-body font-medium">GOOGLE MAPS · SALON LOCATION</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#cbb074] font-body font-medium">DABHOLKAR CORNER</span>
                  </div>

                  {/* Map Iframe */}
                  <div className="relative flex-1 w-full min-h-[280px]">
                    <iframe
                      title="The Hair Avenue Salon Google Maps Location"
                      src="https://maps.google.com/maps?q=The%20Hair%20Avenue%20Dabholkar%20Corner%20Kolhapur%20Maharashtra%20416003&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 absolute inset-0 filter grayscale-[20%] contrast-[105%] brightness-[94%] hover:filter-none transition-all duration-700"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  {/* Map Footer Bar */}
                  <div className="px-4 sm:px-6 py-3.5 bg-[#141412] border-t border-[#252420] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 z-10">
                    <div className="text-[10px] font-body text-[#9c978e] flex items-center gap-2">
                      <span>🚆 5 mins from Kolhapur Railway Station</span>
                      <span className="hidden sm:inline text-[#5c5850]">•</span>
                      <span className="hidden sm:inline">Rankala Lake: 8 mins</span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=The+Hair+Avenue+Dabholkar+Corner+Kolhapur+Maharashtra+416003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.15em] text-[#cbb074] hover:text-[#f5f2eb] font-body font-semibold flex items-center gap-1 transition-colors"
                    >
                      Open in Google Maps App ↗
                    </a>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Bar: Copyright & Location Tags */}
            <div className="pt-8 border-t border-[#1f1e1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-[#5c5850] font-body">
              <span>© {new Date().getFullYear()} THE HAIR AVENUE UNISEX SALON. ALL RIGHTS RESERVED.</span>
              <span>DABHOLKAR CORNER · KOLHAPUR · MAHARASHTRA 416003</span>
            </div>

          </div>
        </footer>
      </main>

      {/* STREAMLINED BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#0e0e0c] border border-[#252420] p-6 sm:p-12 space-y-6 sm:space-y-8 max-h-[92vh] overflow-y-auto">
            <button onClick={() => setBookingOpen(false)} className="absolute top-5 right-5 text-[#9c978e] hover:text-[#f5f2eb] text-xs uppercase font-body">✕ CLOSE</button>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#cbb074] font-body block mb-1">YOUR EXPERIENCE</span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#f5f2eb]">Reserve Your Appointment</h3>
            </div>
            {bookingConfirmed ? (
              <div className="space-y-6 text-center py-4 sm:py-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-[#cbb074] text-[#cbb074] flex items-center justify-center mx-auto text-lg sm:text-xl font-display">✓</div>
                <h4 className="font-display text-xl sm:text-2xl text-[#f5f2eb]">Your Pass Is Generated</h4>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-cinema w-full justify-center text-xs py-4">Send Pass To WhatsApp (095950 73807)</a>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBookingConfirmed(true); }} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#9c978e] font-body mb-2 sm:mb-3">1. Select Experience</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-xs font-body">
                    {['Hair', 'Skin & Beard', 'Bridal', 'Not Sure Yet'].map((item) => (
                      <button key={item} type="button" onClick={() => setBookingData({ ...bookingData, service: item })} className={`p-2.5 sm:p-3 text-left border ${bookingData.service === item ? 'border-[#cbb074] text-[#f5f2eb] bg-[#141412]' : 'border-[#252420] text-[#5c5850]'}`}>{item}</button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input type="text" placeholder="Guest Name" required value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} className="w-full p-2.5 sm:p-3 bg-[#141412] border border-[#252420] text-[#f5f2eb] text-xs font-body" />
                  <input type="tel" placeholder="Phone Number" required value={bookingData.phone} onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })} className="w-full p-2.5 sm:p-3 bg-[#141412] border border-[#252420] text-[#f5f2eb] text-xs font-body" />
                </div>
                <button type="submit" className="btn-cinema w-full justify-center text-xs py-4">Generate Appointment Pass</button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
