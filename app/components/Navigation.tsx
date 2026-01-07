"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NAV_LINKS } from '../data/sections';

export const Navigation = ({ onOpenInquire }: { onOpenInquire: () => void }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-md bg-ivory/80 border-b border-primary/5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="text-2xl font-serif font-bold tracking-tighter text-primary">
          ELI&apos;S. CUISINE
        </div>

        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-sans font-medium text-primary/80">
          {NAV_LINKS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={onOpenInquire}
          className="cursor-pointer bg-gold text-primary px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-ivory transition-all duration-300"
        >
          Inquire
        </button>
      </div>
    </nav>
  );
};
