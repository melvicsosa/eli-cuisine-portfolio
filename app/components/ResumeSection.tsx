"use client";
import React, { useLayoutEffect, useRef } from 'react';
import { ScrollText, Download } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '../data/content';
import { RESUME_CONTENT } from '../data/sections';

gsap.registerPlugin(ScrollTrigger);

export const ResumeSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resume-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="resume" className="py-16 lg:py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold opacity-60">
            {RESUME_CONTENT.subtitle}
          </span>
          <h2 className="font-serif text-4xl mt-4 text-primary">{RESUME_CONTENT.title}</h2>
        </div>

        <div className="space-y-0">
          {EXPERIENCE_DATA.map((job, idx) => (
            <div key={idx} className="resume-item group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-primary/10 hover:bg-ivory/50 transition-colors px-4 -mx-4 rounded-lg">
              <div className="md:col-span-3 font-sans text-primary/50 text-sm uppercase tracking-widest font-bold pt-2">
                {job.year}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary mb-1 group-hover:text-bronze transition-colors">
                  {job.role}
                </h3>
                <p className="font-sans font-medium text-primary text-sm">@{job.place}</p>
              </div>
              <div className="md:col-span-5 font-sans text-primary/70 leading-relaxed text-sm pt-1">
                {job.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={RESUME_CONTENT.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center gap-3 border border-primary px-8 py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-ivory transition-all duration-300"
            onClick={(e) => {
              console.log("RESUME DOWNLOAD CLICKED");
              console.log("Target URL:", RESUME_CONTENT.link.url);
            }}
          >
            <ScrollText className="w-4 h-4" /> {RESUME_CONTENT.link.text}
          </a>
        </div>
      </div>
    </section>
  );
};
