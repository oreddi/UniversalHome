'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What are the visiting hours for family members?',
    a: 'Family members are welcome to visit anytime between 9:00 AM and 7:00 PM every day. For out-of-station relatives, video calling via Zoom/WhatsApp is arranged daily at your convenience.',
  },
  {
    q: 'How do you handle medical emergencies at night?',
    a: 'We have dedicated caregivers on duty 24/7. Basic first-aid kits are available on every floor. In case of sudden medical emergencies, we assist with immediate transfer to nearby hospitals.',
  },
  {
    q: 'Are special customized diets provided for diabetic or bedridden residents?',
    a: 'Yes, absolutely! Our clinical nutritionist designs personalized meal plans. Diabetic patients get low-glycemic meals, hypertension patients receive low-sodium food, and bedridden residents are served soft pureed diets.',
  },
  {
    q: 'What documents are required for admission?',
    a: 'Admission requires Aadhaar card copy of the resident and guardian, latest medical history/doctor prescription reports, and 2 passport photos. Admission can be processed within 24 hours.',
  },
  {
    q: 'Can we contribute or donate to support underprivileged residents?',
    a: 'Yes! We accept online donations via UPI, QR Code, and Net Banking. You can sponsor a meal (Annadanam), sponsor medicine, or support monthly boarding for needy elders. Click the "Donate Now" button at the top.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">Answers to Your Common Questions</h2>
          <p className="section-desc">
            Have questions about admission, visiting hours, or medical procedures? We are here to clarify.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isActive ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="toggle-icon">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
