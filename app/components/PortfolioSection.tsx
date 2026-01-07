import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Lightbox } from './Lightbox';
import { PORTFOLIO_ITEMS } from '../data/content';



gsap.registerPlugin(ScrollTrigger);


/**
 * PortfolioSection displays a grid of culinary works.
 * Features:
 * - GSAP ScrollTrigger animations for card entry.
 * - Shared Lightbox integration for detailed views.
 * - Dynamic data rendering from sections.ts and content.ts.
 */
export const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setSelectedItemIndex((prev) => {
      if (prev === null) return 0;
      return (prev === PORTFOLIO_ITEMS.length - 1 ? 0 : prev + 1);
    });
  };

  const handlePrev = () => {
    setSelectedItemIndex((prev) => {
      if (prev === null) return 0;
      return (prev === 0 ? PORTFOLIO_ITEMS.length - 1 : prev - 1);
    });
  };

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold">
            Selected Works
          </span>
          <h2 className="font-serif text-5xl mt-4 text-primary">Culinary Portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="portfolio-card group cursor-pointer"
              onClick={() => setSelectedItemIndex(idx)}
            >
              <div className="h-[400px] overflow-hidden relative mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-2xl text-primary group-hover:text-gold transition-colors">{item.title}</h3>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
                Focus: {item.technique}
              </div>
              <p className="font-sans text-primary/60 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={selectedItemIndex !== null}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {selectedItemIndex !== null && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full h-full">
            <div className="w-full md:w-2/3 h-[50vh] md:h-full flex items-center justify-center">
              <img
                src={PORTFOLIO_ITEMS[selectedItemIndex].image}
                alt={PORTFOLIO_ITEMS[selectedItemIndex].title}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>

            <div className="w-full md:w-1/3 text-ivory max-w-md">
              <div className="w-12 h-1 bg-gold mb-6"></div>
              <h3 className="font-serif text-4xl mb-3 text-gold">{PORTFOLIO_ITEMS[selectedItemIndex].title}</h3>
              <div className="text-xs font-bold uppercase tracking-widest text-ivory/60 mb-6 font-sans">
                Focus: {PORTFOLIO_ITEMS[selectedItemIndex].technique}
              </div>
              <p className="font-sans text-ivory/80 leading-relaxed text-lg mb-8">
                {PORTFOLIO_ITEMS[selectedItemIndex].desc}
              </p>

              <div className="hidden md:block">
                <span className="text-xs font-bold uppercase tracking-widest text-ivory/30">
                  {selectedItemIndex + 1} / {PORTFOLIO_ITEMS.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </Lightbox>
    </section>
  );
};
