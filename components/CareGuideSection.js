'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const carePillars = [
  {
    id: 'living',
    tabLabel: '🏡 Homelike Care & Living',
    badgeText: 'HOMELIKE ATMOSPHERE & EMOTIONAL SUPPORT',
    title: 'A Loving, Respectful Home Away from Home',
    intro: 'We treat every resident like a beloved family member. Our compassionate caregivers provide round-the-clock companionship, daily assistance, and emotional warmth.',
    image: '/images/hero-1.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: 'Gentle Awakening & Hygiene Care (6:00 AM)',
        text: 'Caregivers gently assist residents with morning bathing, warm water showers, oral care, and fresh clean clothing.',
      },
      {
        num: 2,
        heading: 'Homelike Living Environment & Laughter',
        text: 'Residents enjoy spacious common lounges, high-speed WiFi video calls with children abroad, and dedicated staff companionship.',
      },
      {
        num: 3,
        heading: 'Overnight Care & Safety Supervision',
        text: 'Night caregivers perform quiet checks throughout the night, ensuring emergency alarms and bedside assistance are instantly available.',
      },
      {
        num: 4,
        heading: 'Non-Profit Subsidized Boarding',
        text: 'Special subsidized boarding plans available to support needy, destitute, or underprivileged elderly citizens.',
      },
    ],
  },
  {
    id: 'video',
    tabLabel: '🎬 Campus Life & Video Tour',
    badgeText: 'SEE DAILY LIFE & RECREATION IN ACTION',
    title: 'Daily Activities, Devotional Worship & Outdoor Lawn Yoga',
    intro: 'Watch how our residents stay physically active, mentally engaged, and spiritually fulfilled every single day through our structured daily schedule.',
    image: '/images/hero-2.png',
    isVideo: true,
    steps: [
      {
        num: 1,
        heading: 'Morning Lawn Yoga & Pranayama (6:30 AM)',
        text: 'Certified yoga instructors guide gentle seated stretches and breathing exercises to reduce joint stiffness and boost energy.',
      },
      {
        num: 2,
        heading: 'Recreation & Board Games (3:30 PM)',
        text: 'Friendly group matches of Carrom, Chess, Ludo, Card games, reading daily newspapers, and knitting in the courtyard.',
      },
      {
        num: 3,
        heading: 'Evening Temple Prayers & Bhajans (6:00 PM)',
        text: 'Lighting oil lamps in our in-campus temple, devotional bhajan singing, scripture reading, and peaceful meditation.',
      },
      {
        num: 4,
        heading: 'Festival & Birthday Celebrations',
        text: 'Grand celebrations for Diwali, Sankranti, Ugadi, resident birthdays, and anniversaries with music and special treats.',
      },
    ],
  },
  {
    id: 'medical',
    tabLabel: '🩺 24/7 Medical Care & Nursing',
    badgeText: '24/7 QUALIFIED MEDICAL SUPERVISION',
    title: 'Round-the-Clock Nursing & Doctor Checkups',
    intro: 'Comprehensive geriatric medical supervision so seniors never have to endure exhausting hospital visits or travel stress.',
    image: '/images/nursing-care.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: 'Daily Vitals Tracking & Medication Log (9:30 AM)',
        text: 'Nurses record blood pressure, pulse, blood glucose levels, and administer exact medication doses on time.',
      },
      {
        num: 2,
        heading: 'Bi-Weekly In-House Physician Visits',
        text: 'General physicians and geriatric specialists conduct regular bedside rounds and reviews with family members.',
      },
      {
        num: 3,
        heading: 'Physiotherapy & Post-Stroke Rehabilitation',
        text: 'Daily certified physical therapy for arthritis, paralysis, stroke recovery, balance training, and fall prevention.',
      },
      {
        num: 4,
        heading: '24/7 Emergency Ambulance Tie-Ups',
        text: 'Immediate emergency response with oxygen concentrators on every floor and direct multi-specialty hospital tie-ups in Kukatpally.',
      },
    ],
  },
  {
    id: 'food',
    tabLabel: '🥗 Organic Vegetarian Nutrition',
    badgeText: 'DIETITIAN-CURATED ORGANIC MEALS',
    title: 'Delicious, Hygienic & Doctor-Approved Meals',
    intro: 'Food is medicine. Our commercial kitchen prepares 100% vegetarian, warm, organic home-style meals planned by clinical dietitians.',
    image: '/images/nutritious-meals.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: 'Custom Health & Diabetic Diets',
        text: 'Tailored low-glycemic diabetic meals, low-sodium hypertension food, soft pureed diets, and kidney-friendly menu options.',
      },
      {
        num: 2,
        heading: '4 Wholesome Meals Served Daily',
        text: 'Morning herbal tea/coffee, hot South/North Indian breakfast, balanced lunch thali, evening tea & snacks, and light early dinner.',
      },
      {
        num: 3,
        heading: 'Fresh Organic Local Produce',
        text: 'Organic vegetables sourced daily from local farms for maximum natural vitamins, minerals, and immunity support.',
      },
      {
        num: 4,
        heading: 'Hygienic RO UV Water & Stainless Kitchen',
        text: 'Cooked in 100% stainless steel cookware using purified 5-stage RO UV filtered drinking water.',
      },
    ],
  },
  {
    id: 'beds',
    tabLabel: '🛌 Beds & Hygiene Standards',
    badgeText: 'HOSPITAL-GRADE CLEANLINESS & COMFORT',
    title: 'Orthopedic Bedding & Sanitized Living Spaces',
    intro: 'We maintain hospital-grade sanitation standards combined with cozy home-like warmth for resident comfort and infection control.',
    image: '/images/clean-bedroom.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: 'Orthopedic & Semi-Fowler Beds',
        text: 'High-density memory foam mattresses and adjustable semi-fowler medical beds for bedridden and posture support.',
      },
      {
        num: 2,
        heading: 'Daily Laundering & Fresh Linen Change (10:30 AM)',
        text: 'Bedsheets, pillow covers, and blankets are laundered and sanitized with anti-bacterial detergent every single morning.',
      },
      {
        num: 3,
        heading: 'Deep Room Cleaning Twice Daily',
        text: 'Floors and furniture washed twice daily using eco-friendly non-toxic disinfectants for total germ protection.',
      },
      {
        num: 4,
        heading: 'Anti-Skid Bathrooms with Grab Bars',
        text: 'Attached washrooms equipped with safety handrails, non-slip floor tiles, and 24/7 hot water geysers.',
      },
    ],
  },
];

export default function CareGuideSection({ onOpenVideoModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  const currentPillar = carePillars[activeTab];

  return (
    <section className="section care-guide-section" id="care-guide">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">{t('careGuideSubtitle')}</span>
          <h2 className="section-title">{t('careGuideTitle')}</h2>
          <p className="section-desc">{t('careGuideDesc')}</p>
        </div>

        {/* 5 In-Place Interactive Option Tabs */}
        <div className="care-guide-tabs">
          {carePillars.map((pillar, index) => (
            <button
              key={pillar.id}
              className={`care-guide-tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {pillar.tabLabel}
            </button>
          ))}
        </div>

        {/* In-Place Detailed Care Information Display */}
        <div className="care-guide-panel" key={currentPillar.id}>
          <div className="care-guide-grid">
            {/* Step-by-Step Information Breakdown */}
            <div className="care-guide-info">
              <span className="care-guide-badge">{currentPillar.badgeText}</span>
              <h3 className="care-guide-title">{currentPillar.title}</h3>
              <p className="care-guide-intro">{currentPillar.intro}</p>

              {/* Step-by-Step Checklist */}
              <div className="care-guide-steps-list">
                <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 700 }}>
                  <i className="fas fa-list-check" style={{ marginRight: '0.4rem' }}></i> What Happens Step-by-Step:
                </h4>
                {currentPillar.steps.map((step) => (
                  <div className="care-step-item" key={step.num}>
                    <div className="care-step-num">{step.num}</div>
                    <div>
                      <strong>{step.heading}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Action Buttons */}
              <div className="care-guide-actions">
                <Link href="/contact" className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i> Book Campus Tour
                </Link>
                {currentPillar.isVideo ? (
                  <button className="btn btn-secondary" onClick={onOpenVideoModal}>
                    <i className="fas fa-play-circle"></i> Watch Video Tour
                  </button>
                ) : (
                  <a href="tel:+919398861612" className="btn btn-outline">
                    <i className="fas fa-phone"></i> Call Nurse (+91 9398861612)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
