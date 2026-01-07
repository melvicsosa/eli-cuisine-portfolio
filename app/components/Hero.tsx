"use client";
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Award, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { LOCAL_HERO_IMAGE, FALLBACK_HERO_IMAGE } from '../data/content';
import { HERO_CONTENT } from '../data/sections';

export const Hero = ({ onOpenInquire }: { onOpenInquire: () => void }) => {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);

  const [heroImgSrc, setHeroImgSrc] = useState(LOCAL_HERO_IMAGE);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Safely animate children if textRef.current is not null
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          delay: 1
        });
      }

      gsap.from(imgRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
      });

      gsap.from(badgeRef.current, {
        x: -20,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center bg-ivory overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        {/* Left Content */}
        <div ref={textRef} className="lg:col-span-5 flex flex-col justify-center z-10">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-6">
            {HERO_CONTENT.subtitle}
          </span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-primary mb-8">
            {HERO_CONTENT.titlePart1} <br />
            <span className="italic font-light text-gold">{HERO_CONTENT.titlePart2}</span>
          </h1>
          <p className="font-sans text-lg text-primary/70 mb-10 max-w-md leading-relaxed">
            {HERO_CONTENT.bio}
          </p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenInquire} className="cursor-pointer border-b border-primary pb-1 uppercase tracking-widest text-sm font-bold hover:text-gold hover:border-gold transition-all">
              {HERO_CONTENT.ctaButton}
            </button>
            <a href="#portfolio" className="flex items-center gap-2 uppercase tracking-widest text-sm font-bold text-primary/60 hover:text-primary transition-all">
              {HERO_CONTENT.portfolioLink} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-[85vh] flex items-center justify-center">
          {/* Wrapper for positioning context */}
          <div className="relative w-full h-full max-h-[85vh]">
            {/* Image Container with Overflow Hidden - Fixed height scaling */}
            <div ref={imgRef} className="h-full w-full overflow-hidden rounded-tl-[30px] rounded-tr-[150px] rounded-bl-[30px] rounded-br-[30px]">
              <img
                src={heroImgSrc}
                onError={() => setHeroImgSrc(FALLBACK_HERO_IMAGE)}
                alt="Chef Eli Cuisine Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Resume Badge */}
            <div ref={badgeRef} className="absolute top-12 -left-4 md:-left-12 bg-white/90 backdrop-blur shadow-xl p-6 border-l-4 border-gold animate-float z-20">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-gold" />
                <p className="font-serif text-xl italic text-primary">{HERO_CONTENT.badgeTitle}</p>
              </div>
              <p className="text-xs uppercase tracking-wider text-primary/60 mt-1">
                {HERO_CONTENT.badgeSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
