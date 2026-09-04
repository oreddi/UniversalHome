'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import DonateModal from '@/components/DonateModal';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import FloatingActions from '@/components/FloatingActions';

export default function ServicesPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  return (
    <main>
      <TopBar />
      <Header onOpenDonateModal={() => setIsDonateOpen(true)} />

      {/* Page Header Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>
            SPECIALIZED GERIATRIC CARE
          </span>
          <h1>Our Professional Care Services</h1>
          <p>
            Comprehensive, 24/7 nursing, doctor-supervised healthcare, and dementia care designed for senior independence and emotional warmth.
          </p>
        </div>
      </div>

      <ServicesSection onOpenServiceModal={(key) => setActiveServiceModal(key)} />

      <Footer onOpenDonateModal={() => setIsDonateOpen(true)} />
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      <ServiceDetailModal
        serviceKey={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
      />
      <FloatingActions />
    </main>
  );
}
