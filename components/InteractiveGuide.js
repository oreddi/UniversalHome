'use client';

import { useState } from 'react';

const steps = [
  {
    num: 1,
    title: 'Morning Refresh & Yoga',
    desc: '6:00 AM — Soft awakening, personal hygiene assistance, and gentle outdoor yoga.',
    targetId: 'routine-morning',
  },
  {
    num: 2,
    title: 'Nutritious Breakfast',
    desc: '8:00 AM — Freshly cooked South/North Indian warm vegetarian breakfast & herbal tea.',
    targetId: 'routine-breakfast',
  },
  {
    num: 3,
    title: 'Medical & Physio Check',
    desc: '9:30 AM — Doctor checkups, blood pressure check, and rehabilitation exercises.',
    targetId: 'routine-medical',
  },
  {
    num: 4,
    title: 'Beds & Hygiene Refresh',
    desc: '10:30 AM — Daily fresh bedsheets, room sanitization, and laundry care.',
    targetId: 'routine-cleaning',
  },
  {
    num: 5,
    title: 'Recreation & Dementia Care',
    desc: '3:30 PM — Carrom, music therapy, brain stimulation games, and social bonding.',
    targetId: 'routine-recreation',
  },
  {
    num: 6,
    title: 'Evening Worship & Sleep',
    desc: '6:00 PM - 9:30 PM — Devotional prayers, early dinner, vitals check, and peaceful sleep.',
    targetId: 'routine-sleep',
  },
];

export default function InteractiveGuide() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (num, targetId) => {
    setActiveStep(num);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const timelineContent = element.querySelector('.timeline-content');
      if (timelineContent) {
        timelineContent.style.borderColor = 'var(--secondary)';
        setTimeout(() => {
          timelineContent.style.borderColor = 'var(--gray-200)';
        }, 2000);
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="guide-banner">
          <div className="guide-header">
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                INTERACTIVE GUIDE FOR FAMILIES
              </span>
              <h2 style={{ color: 'var(--white)', fontSize: '1.8rem', marginTop: '0.2rem' }}>
                How We Take Care of Them — Step-by-Step
              </h2>
            </div>
            <a href="#contact" className="btn btn-secondary">
              <i className="fas fa-paper-plane"></i> Book a Tour
            </a>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', maxWidth: '800px' }}>
            Click any step below to jump directly to that exact phase of our residents' day. We invite you to see transparently how every hour is filled with compassion, warmth, and dignity.
          </p>

          <div className="guide-steps">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`guide-step-card ${activeStep === step.num ? 'active' : ''}`}
                onClick={() => handleStepClick(step.num, step.targetId)}
              >
                <div className="guide-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
