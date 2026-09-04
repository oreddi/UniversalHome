'use client';

const serviceData = {
  nursing: {
    title: '24/7 Professional Nursing Care',
    img: '/images/nursing-care.png',
    bullets: [
      'Continuous monitoring of vital signs (BP, Pulse, Sugar levels, Oxygen).',
      'Strict & punctual medication administration by qualified nurses.',
      'Catheter, wound dressing, and post-surgical recovery care.',
      'Assistance with daily living activities (bathing, grooming, feeding, mobility).',
      '24/7 Emergency response team and instant hospital transfer support.',
    ],
    intro: 'Our 24/7 nursing care ensures that every resident receives continuous medical supervision and compassionate personal assistance around the clock.',
  },
  doctor: {
    title: 'In-House Physician & Specialist Visits',
    img: '/images/doctor-visit.png',
    bullets: [
      'Bi-weekly full checkups by experienced geriatricians and general physicians.',
      'On-call specialist consultations (Cardiologists, Neurologists, Psychiatrists).',
      'In-house blood sample collection and diagnostic report tracking.',
      'Personalized wellness and medication reviews with family members.',
    ],
    intro: 'Regular medical evaluation keeps our seniors healthy, active, and mentally well-supported without the hassle of traveling to hospitals.',
  },
  food: {
    title: 'Nutritious & Hygienic Dietary Meals',
    img: '/images/nutritious-meals.png',
    bullets: [
      'Custom diabetic, low-sodium, soft/mashed, and renal-friendly diets.',
      '4 Meals daily: Morning Herbal Tea/Coffee, Breakfast, Lunch, Evening Snacks & Dinner.',
      'Organic, fresh, locally sourced vegetables and wholesome grains.',
      'Hygienic kitchen with stainless steel cookware and purified RO water.',
    ],
    intro: 'Food is medicine, especially in senior years. Our kitchen prepares 100% vegetarian, warm, organic home-style meals planned by clinical dietitians.',
  },
  physio: {
    title: 'Physiotherapy & Physical Rehabilitation',
    img: '/images/physiotherapy.png',
    bullets: [
      'Daily customized physical therapy plans tailored by certified physiotherapists.',
      'Post-stroke, paralysis, fracture recovery, and joint replacement rehab.',
      'Balance and gait training to prevent falls and build walking confidence.',
      'Warm oil massages, infrared therapy, and passive joint movements.',
    ],
    intro: 'Specialized senior exercises designed to rebuild muscular strength, joint flexibility, and post-illness mobility.',
  },
  dementia: {
    title: "Dementia & Alzheimer's Care",
    img: '/images/dementia-care.png',
    bullets: [
      'Structured daily routine designed to reduce anxiety and confusion.',
      'Cognitive brain games, memory recall, music therapy, and tactile art.',
      '24/7 Wandering protection with non-restrictive secure perimeter control.',
      'Patient and empathetic staff trained specifically in dementia behavioral management.',
    ],
    intro: 'Gentle, structured support and cognitive stimulation activities provided in a safe, secure, and compassionate environment.',
  },
  recreation: {
    title: 'Recreation, Entertainment & Daily Worship',
    img: '/images/recreation.png',
    bullets: [
      'Daily morning outdoor yoga, laughter club, and evening prayer/bhajan sessions.',
      'Group games: Carrom, Chess, Ludo, Card games, and puzzle challenges.',
      'Festival celebrations (Diwali, Sankranti, Ugadi, Birthdays, Anniversaries).',
      'Weekly movie screenings, musical evenings, and gardening club.',
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
