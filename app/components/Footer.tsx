"use client";
import React from 'react';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { getCurrentYear } from '../utils';
import { FOOTER_CONTENT } from '../data/sections';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-ivory pt-24 pb-12 px-6 md:px-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-serif font-bold tracking-tighter text-primary mb-6">
            {FOOTER_CONTENT.brandName}
          </div>
          <p className="font-sans text-primary/60 text-lg leading-relaxed mb-6 max-w-md">
            {FOOTER_CONTENT.brandDesc}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="flex items-center gap-2 text-primary hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" /> <span className="text-sm font-bold uppercase tracking-wider">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-primary hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" /> <span className="text-sm font-bold uppercase tracking-wider">Instagram</span>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-serif text-xl mb-6">{FOOTER_CONTENT.contactTitle}</h4>
          <p className="font-sans text-primary/60 text-sm mb-8">
            {FOOTER_CONTENT.contactDesc}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gold" />
              <a href={`mailto:${FOOTER_CONTENT.email}`} className="text-xl font-serif hover:text-gold transition-colors">
                {FOOTER_CONTENT.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-sans text-primary/80">{FOOTER_CONTENT.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-primary/5">
        <p className="font-sans text-xs text-primary/40 uppercase tracking-widest">
          © {getCurrentYear()} {FOOTER_CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
};
