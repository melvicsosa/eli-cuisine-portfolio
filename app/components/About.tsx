"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IMAGES } from '../data/content';
import { ABOUT_CONTENT } from '../data/sections';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const backImgRef = useRef(null);
  const frontImgRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the images container if needed, or just keep the existing inner animations
      gsap.to(backImgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(frontImgRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Images */}
        <div ref={imagesRef} className="relative h-[600px] w-full hidden lg:block">
          <div className="absolute top-0 left-0 w-[80%] h-[500px] overflow-hidden opacity-80">
            <img
              ref={backImgRef}
              src={IMAGES.aboutBg}
              alt="Ingredients"
              className="absolute w-full h-[130%] object-cover grayscale opacity-60 -top-[40%]"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[400px] shadow-2xl overflow-hidden border-8 border-ivory">
            <img
              ref={frontImgRef}
              src={IMAGES.aboutFront}
              alt="Chef Hands"
              className="absolute w-full h-[150%] object-cover -top-[20%]"
            />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="lg:pl-10">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold block mb-4">
            {ABOUT_CONTENT.subtitle}
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-8">
            {ABOUT_CONTENT.titlePart1} <br />
            {ABOUT_CONTENT.titlePart2} <span className="text-gold italic">{ABOUT_CONTENT.titlePart3}</span>.
          </h2>
          <p className="font-sans text-lg text-primary/70 mb-6 leading-relaxed">
            {ABOUT_CONTENT.quote}
          </p>
          <p className="font-sans text-lg text-primary/70 mb-10 leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
            alt="Signature"
            className="h-16 opacity-60"
          />
        </div>
      </div>
    </section>
  );
};
