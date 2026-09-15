'use client';

const serviceData = {
  caregiver: {
    title: '24/7 Caregiver Support',
    img: '/images/nursing-care.png',
    bullets: [
      'Assistance with daily living activities (bathing, grooming, feeding, mobility).',
      'Round-the-clock monitoring to ensure resident safety and comfort.',
      'Help with maintaining personal hygiene and clean surroundings.',
      'Immediate assistance provided during any basic emergencies.',
    ],
    intro: 'Our dedicated caregivers ensure that every resident receives compassionate personal assistance and support around the clock.',
  },
  food: {
    title: 'Homely & Hygienic Meals',
    img: '/images/nutritious-meals.png',
    bullets: [
      'Pure vegetarian meals prepared daily in a clean and hygienic kitchen.',
      '4 Meals daily: Morning Tea & Breakfast, Lunch, Evening Snacks, and Dinner.',
      'Freshly sourced vegetables and wholesome ingredients used in every meal.',
      'Basic dietary adjustments made for diabetic or special health needs.',
    ],
    intro: 'We provide delicious, warm, and home-style meals to keep our residents healthy, satisfied, and happy.',
  },
  recreation: {
    title: 'Recreation & Daily Worship',
    img: '/images/recreation.png',
    bullets: [
      'Daily morning outdoor walks and evening prayer/bhajan sessions.',
      'Group games like Carrom, Chess, Ludo, and puzzle challenges.',
      'Joyful festival celebrations (Diwali, Sankranti, Ugadi, Birthdays).',
      'A peaceful environment to relax, chat, and connect with fellow residents.',
    ],
    intro: 'Life is meant to be joyful! We ensure our residents stay mentally active, socially connected, and spiritually fulfilled every single day.',
  },
};

export default function ServiceDetailModal({ serviceKey, onClose }) {
  if (!serviceKey || !serviceData[serviceKey]) return null;

  const data = serviceData[serviceKey];

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-box modal-detail-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{data.title}</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <img className="modal-detail-img" src={data.img} alt={data.title} />
        <div className="modal-body" style={{ textAlign: 'left', color: 'var(--dark-surface)' }}>
          <p>{data.intro}</p>
          <br />
          <ul style={{ textAlign: 'left', marginLeft: '1.5rem', lineHeight: 1.8 }}>
            {data.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
