'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const carePillars = [
  {
    id: 'living',
    tabLabel: <><i className="fas fa-home" style={{ marginRight: '0.4rem' }}></i> Homelike Care & Living</>,
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
    tabLabel: <><i className="fas fa-video" style={{ marginRight: '0.4rem' }}></i> Campus Life Tour</>,
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
    tabLabel: <><i className="fas fa-user-friends" style={{ marginRight: '0.4rem' }}></i> 24/7 Caregiver Support</>,
    badgeText: '24/7 DEDICATED ASSISTANCE',
    title: 'Round-the-Clock Caregiver Support',
    intro: 'Dedicated caregivers and support staff available 24/7 to assist seniors with their daily living and basic safety.',
    image: '/images/nursing-care.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: 'Daily Assistance',
        text: 'Caregivers are available around the clock to help with any personal needs, ensuring residents are comfortable and safe.',
      },
      {
        num: 2,
        heading: 'Routine Health Checks',
        text: 'Basic well-being monitoring to ensure seniors are active, healthy, and happy in a stress-free environment.',
      },
      {
        num: 3,
        heading: 'Mobility & Routine Care',
        text: 'Gentle support with daily walking, sitting, and routine hygiene activities for peace of mind.',
      },
      {
        num: 4,
        heading: 'Emergency Support',
        text: 'Immediate assistance and basic first-aid support available on the premises for sudden emergencies.',
      },
    ],
  },
  {
    id: 'food',
    tabLabel: <><i className="fas fa-apple-alt" style={{ marginRight: '0.4rem' }}></i> Homely Meals</>,
    badgeText: 'PURE VEGETARIAN HOMELY FOOD',
    title: 'Delicious, Hygienic & Warm Meals',
    intro: 'We serve freshly prepared, homely vegetarian meals cooked in a clean and hygienic kitchen every day.',
    image: '/images/nutritious-meals.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: '4 Meals Served Daily',
        text: 'Morning tea & breakfast, nutritious lunch, evening snacks & tea, and a light homely dinner.',
      },
      {
        num: 2,
        heading: 'Fresh Ingredients',
        text: 'Freshly sourced vegetables and wholesome grains used daily for cooking.',
      },
      {
        num: 3,
        heading: 'Basic Diet Care',
        text: 'We accommodate basic health needs like soft-cooked or diabetic-friendly food.',
      },
      {
        num: 4,
        heading: 'Purified Water',
        text: 'Clean RO purified drinking water available for all residents 24/7.',
      },
    ],
  },
  {
    id: 'beds',
    tabLabel: <><i className="fas fa-bed" style={{ marginRight: '0.4rem' }}></i> Beds & Hygiene</>,
    badgeText: 'CLEAN & COMFORTABLE LIVING',
    title: 'Comfortable Bedding & Clean Rooms',
    intro: 'We maintain strict cleanliness standards combined with cozy home-like warmth for resident comfort.',
    image: '/images/clean-bedroom.png',
    isVideo: false,
    steps: [
      {
        num: 1,
        heading: 'Comfortable Beds',
        text: 'Clean and well-maintained beds for a peaceful and restful sleep.',
      },
      {
        num: 2,
        heading: 'Daily Laundering & Fresh Linen',
        text: 'Bedsheets, pillow covers, and blankets are laundered and changed regularly for hygiene.',
      },
      {
        num: 3,
        heading: 'Daily Room Cleaning',
        text: 'Floors and furniture are washed and swept daily to keep the environment fresh and safe.',
      },
      {
        num: 4,
        heading: 'Safe Washrooms',
        text: 'Attached washrooms equipped with safety handrails and hot water geysers.',
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
                    <i className="fas fa-phone"></i> Call Helpline (+91 9398861612)
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
