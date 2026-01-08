"use client";
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ResumeSection } from "./components/ResumeSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { GallerySection } from "./components/GallerySection";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { InquireModal } from "./components/InquireModal";

export default function Home() {
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration mismatch for client-only animations/interactions if needed
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading skeleton
  }

  return (
    <main className="min-h-screen">
      <Navigation onOpenInquire={() => setIsInquireOpen(true)} />
      <Hero onOpenInquire={() => setIsInquireOpen(true)} />
      <About />
      <ResumeSection />
      <PortfolioSection />
      <GallerySection />
      <Services />
      <Footer />
      {isInquireOpen && <InquireModal isOpen={isInquireOpen} onClose={() => setIsInquireOpen(false)} />}
    </main>
  );
}
