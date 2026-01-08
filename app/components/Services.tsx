"use client";
import React, { useLayoutEffect, useRef } from 'react';
import { SERVICES_CONTENT } from '../data/sections';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-primary text-ivory relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-ivory/5"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold block mb-6">
            {SERVICES_CONTENT.subtitle}
          </span>
          <h2 className="font-serif text-5xl mb-12">{SERVICES_CONTENT.title}</h2>

          <div className="space-y-12">
            {SERVICES_CONTENT.items.map((service, idx) => (
              <div key={idx} className="service-item flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                  <p className="font-sans text-ivory/60 leading-relaxed max-w-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] border-l border-ivory/10 pl-8 hidden lg:block">
          <div className="w-full h-full overflow-hidden">
            <img
              src="/images/omakase-sushi-voyage.png"
              alt="Chef Consulting"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
