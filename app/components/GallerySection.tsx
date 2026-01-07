"use client";
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Lightbox } from './Lightbox';
import { GALLERY_IMAGES } from '../data/content';
import { GALLERY_CONTENT } from '../data/sections';

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
  const sectionRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return 0;
      return (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1);
    });
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return 0;
      return (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1);
    });
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-ivory border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold">
            {GALLERY_CONTENT.subtitle}
          </span>
          <h2 className="font-serif text-3xl mt-2 text-primary">{GALLERY_CONTENT.title}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <div
              key={idx}
              className="gallery-item aspect-square overflow-hidden cursor-pointer relative group"
              onClick={() => setSelectedImageIndex(idx)}
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 duration-500"></div>
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        {selectedImageIndex !== null && (
          <>
            <img
              src={GALLERY_IMAGES[selectedImageIndex]}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/40 text-sm tracking-widest font-sans">
              {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </>
        )}
      </Lightbox>
    </section>
  );
};
