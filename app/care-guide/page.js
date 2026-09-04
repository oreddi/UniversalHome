'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import CareGuideSection from '@/components/CareGuideSection';
import Footer from '@/components/Footer';
import DonateModal from '@/components/DonateModal';
import VideoTourModal from '@/components/VideoTourModal';
import FloatingActions from '@/components/FloatingActions';

export default function CareGuidePage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Header onOpenDonateModal={() => setIsDonateOpen(true)} />

      {/* Page Header Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>
            OUR GERIATRIC APPROACH
          </span>
          <h1>Comprehensive Care Guide</h1>
          <p>
            Learn exactly how we provide 24/7 love, nutrition, medical care, and dignity to our elderly residents every single day.
          </p>
        </div>
      </div>

      <CareGuideSection onOpenVideoModal={() => setIsVideoOpen(true)} />

      <Footer onOpenDonateModal={() => setIsDonateOpen(true)} />
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      <VideoTourModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <FloatingActions />
    </main>
  );
}
