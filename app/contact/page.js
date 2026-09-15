'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import DonateModal from '@/components/DonateModal';
import FloatingActions from '@/components/FloatingActions';

export default function ContactPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Header onOpenDonateModal={() => setIsDonateOpen(true)} />

      {/* Page Header Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>
            REACH OUT TO US
          </span>
          <h1>Contact Us & Schedule a Campus Tour</h1>
          <p>
            We invite you and your family to visit our campus in Kowkur, Hyderabad. Call our 24/7 helpline or book a tour below.
          </p>
        </div>
      </div>

      <ContactSection />
      <FaqSection />

      <Footer onOpenDonateModal={() => setIsDonateOpen(true)} />
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      <FloatingActions />
    </main>
  );
}
