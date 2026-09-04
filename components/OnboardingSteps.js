'use client';

import Link from 'next/link';

export default function OnboardingSteps() {
  const steps = [
    {
      num: '01',
      badge: 'STEP 1: GET IN TOUCH',
      title: 'Free Consultation & Campus Tour',
      desc: 'Call our 24/7 helpline or book a visit online. Tour our campus in Kukatpally, meet our nurses, inspect the rooms, and ask any questions.',
      actionText: 'Book Campus Tour',
      actionHref: '/contact',
      icon: 'fas fa-phone-volume',
    },
    {
      num: '02',
      badge: 'STEP 2: MEDICAL ASSESSMENT',
      title: 'Doctor Evaluation & Diet Plan',
      desc: 'Our in-house physician reviews medical records, designs custom diabetic/hypertension diets, and arranges free boarding care.',
      actionText: 'Explore Free Boarding',
      actionHref: '#free-boarding',
      icon: 'fas fa-stethoscope',
    },
    {
      num: '03',
      badge: 'STEP 3: SMOOTH MOVE-IN',
      title: 'Warm Welcome & Family Updates',
      desc: 'The senior moves in with a warm welcome ceremony, assigned personal caregiver, and daily WhatsApp photo/health updates sent to family.',
      actionText: 'Speak to Counselor',
      actionHref: 'tel:+919398861612',
      icon: 'fas fa-heart-circle-check',
    },
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">WHAT TO DO NEXT?</span>
          <h2 className="section-title">How to Join Our Family in 3 Easy Steps</h2>
          <p className="section-desc">
            We make the admission process seamless, transparent, and comforting for family members.
          </p>
        </div>

        <div className="services-grid">
          {steps.map((step) => (
            <div key={step.num} className="service-card step-card-item">
              <div className="step-card-header">
                <span className="step-num-text">{step.num}</span>
                <div className="step-icon-badge">
                  <i className={step.icon}></i>
                </div>
              </div>

              <span className="step-badge-text">{step.badge}</span>
              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>

              {step.actionHref.startsWith('#') || step.actionHref.startsWith('tel:') ? (
                <a href={step.actionHref} className="btn btn-primary step-btn">
                  {step.actionText} <i className="fas fa-arrow-right"></i>
                </a>
              ) : (
                <Link href={step.actionHref} className="btn btn-primary step-btn">
                  {step.actionText} <i className="fas fa-arrow-right"></i>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
