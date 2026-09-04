'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import HighlightsBar from '@/components/HighlightsBar';
import CareGuideSection from '@/components/CareGuideSection';
import QualityOfLifeSection from '@/components/QualityOfLifeSection';
import OnboardingSteps from '@/components/OnboardingSteps';
import AboutSection from '@/components/AboutSection';
import ComparisonSection from '@/components/ComparisonSection';
import ServicesSection from '@/components/ServicesSection';
import FreeServiceSection from '@/components/FreeServiceSection';
import BedsHygiene from '@/components/BedsHygiene';
import FoodNutrition from '@/components/FoodNutrition';
import FacilitiesSection from '@/components/FacilitiesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DonateModal from '@/components/DonateModal';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import VideoTourModal from '@/components/VideoTourModal';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  return (
    <main>
      <TopBar />
      <Header onOpenDonateModal={() => setIsDonateOpen(true)} />
      
      {/* Hero Section */}
      <HeroSlider
        onOpenDonateModal={() => setIsDonateOpen(true)}
        onOpenVideoModal={() => setIsVideoOpen(true)}
      />
      <HighlightsBar />

      {/* 1. What Happens at Universal Home (In-Place Interactive Care Guide) */}
      <CareGuideSection onOpenVideoModal={() => setIsVideoOpen(true)} />

      {/* 2. Developing Their Quality of Being & Emotional Well-Being */}
      <QualityOfLifeSection />

      {/* 3. What to Do Next? (3-Step Admission & Onboarding Guide) */}
      <OnboardingSteps />

      {/* 4. 100% Free Service & Boarding Commitment (Spacious Promise Banner) */}
      <FreeServiceSection onOpenDonateModal={() => setIsDonateOpen(true)} />

      {/* 5. Peace of Mind Comparison Matrix Table */}
      <ComparisonSection />

      {/* 6. Professional Care Services (6 Cards + Read More Popups) */}
      <ServicesSection onOpenServiceModal={(serviceKey) => setActiveServiceModal(serviceKey)} />

      {/* 7. Campus Infrastructure & Facilities */}
      <FacilitiesSection />

      {/* 8. Hygiene, Beds & Nutrition Spotlights */}
      <BedsHygiene />
      <FoodNutrition />

      {/* 9. About Us & Non-Profit Mission */}
      <AboutSection />

      {/* 10. Campus Life Gallery & Verified Family Testimonials */}
      <GallerySection />
      <TestimonialsSection />

      {/* 11. Senior Wellness Blog & FAQ Accordion */}
      <BlogSection />
      <FaqSection />

      {/* 12. Book a Visit & Contact Us */}
      <ContactSection />

      <Footer onOpenDonateModal={() => setIsDonateOpen(true)} />

      {/* Modals & Overlays */}
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      <VideoTourModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <ServiceDetailModal
        serviceKey={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
      />
      <FloatingActions />
    </main>
  );
}
