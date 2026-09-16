'use client';

import { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import HighlightsBar from '@/components/HighlightsBar';
import CareGuideSection from '@/components/CareGuideSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import DonationSection from '@/components/DonationSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import ServiceDetailModal from '@/components/ServiceDetailModal';
import VideoTourModal from '@/components/VideoTourModal';

export default function Home() {

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show spinner for 1 second if needed, otherwise it loads fast
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--light-bg)', flexDirection: 'column' }}>
        <div style={{ width: '60px', height: '60px', border: '6px solid rgba(180, 83, 9, 0.2)', borderTop: '6px solid #b45309', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <h2 style={{ color: '#b45309', marginTop: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>Universal Home</h2>
        <style>{`
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <main>
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <HeroSlider
        onOpenVideoModal={() => setIsVideoOpen(true)}
      />
      <HighlightsBar />

      {/* 1. What Happens at Universal Home (In-Place Interactive Care Guide) */}
      <CareGuideSection onOpenVideoModal={() => setIsVideoOpen(true)} />

      {/* 1b. Impact & How Your Support Changes Lives */}
      <HowWeHelpSection />

      {/* 2. Campus Life Gallery & Testimonials */}
      <GallerySection />
      <TestimonialsSection />

      {/* 3. FAQ & Contact */}
      <FaqSection />
      <ContactSection />

      {/* 4. Donation Section at the very end */}
      <DonationSection />

      <Footer />

      {/* Modals & Overlays */}

      <VideoTourModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <ServiceDetailModal
        serviceKey={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
      />
    </main>
  );
}
