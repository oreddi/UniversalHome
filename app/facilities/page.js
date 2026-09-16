'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import FacilitiesSection from '@/components/FacilitiesSection';
import FreeServiceSection from '@/components/FreeServiceSection';
import BedsHygiene from '@/components/BedsHygiene';
import FoodNutrition from '@/components/FoodNutrition';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

import VideoTourModal from '@/components/VideoTourModal';
import FloatingActions from '@/components/FloatingActions';

export default function FacilitiesPage() {
  
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main>
      <TopBar />
      <Header />

      {/* Page Header Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>
            NON-PROFIT INFRASTRUCTURE
          </span>
          <h1>Free Boarding, Facilities & Cleanliness</h1>
          <p>
            Explore our wheelchair-accessible campus, anti-bacterial bedrooms, orthopedic beds, and organic kitchen setup supporting destitute elders.
          </p>
        </div>
      </div>

      <FreeServiceSection />
      <FacilitiesSection />
      <BedsHygiene />
      <FoodNutrition />
      <GallerySection />

      <Footer />
      
      <VideoTourModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <FloatingActions />
    </main>
  );
}
