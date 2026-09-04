export default function RoutineTimeline() {
  const schedule = [
    {
      id: 'routine-morning',
      icon: 'fas fa-sun',
      time: '6:00 AM — Morning Wake-Up',
      title: 'Awakening & Personal Hygiene Care',
      desc: 'Caregivers gently wake residents up, assist with brushing, bathing, grooming, and change into fresh, clean clothing.',
      tags: ['Hygiene', 'Bathing Assistance', 'Warm Water'],
    },
    {
      icon: 'fas fa-spa',
      time: '6:30 AM — Senior Yoga & Breathing',
      title: 'Guided Morning Yoga & Light Stretch',
      desc: 'Guided by certified yoga instructors in our garden lawn. Gentle pranayama (breathing exercises) and seated stretches to boost joint flexibility and morning energy.',
      tags: ['Pranayama', 'Outdoor Fresh Air', 'Joint Mobility'],
    },
    {
      id: 'routine-breakfast',
      icon: 'fas fa-coffee',
      time: '8:00 AM — Healthy Breakfast',
      title: 'Nutritious Vegetarian Breakfast & Herbal Tea',
      desc: 'Freshly made hot breakfast (Idli, Dosa, Upma, Oats, or Sprouts) served with almond milk, herbal tea, or warm milk according to medical dietary guidelines.',
      tags: ['Organic Breakfast', 'Diabetic Friendly', 'Herbal Tea'],
    },
    {
      id: 'routine-medical',
      icon: 'fas fa-user-md',
      time: '9:30 AM — Doctor Check & Physio',
      title: 'Vitals Check, Doctor Visit & Physiotherapy',
      desc: 'Nurses log blood pressure, pulse, and glucose levels. In-house physicians conduct rounds while physiotherapists guide individual stroke, arthritis, and rehab sessions.',
      tags: ['BP & Sugar Check', 'Rehab Exercises', 'Medication'],
    },
    {
      id: 'routine-cleaning',
      icon: 'fas fa-broom',
      time: '10:30 AM — Housekeeping & Beds',
      title: 'Room Cleaning, Linen Change & Bed Maintenance',
      desc: 'Housekeeping staff deep cleans all rooms, changes bed sheets with fresh anti-bacterial linen, disinfects bathrooms, and takes care of laundry.',
      tags: ['Fresh Linen', 'Deep Cleaning', 'Sanitization'],
    },
    {
      icon: 'fas fa-utensils',
      time: '12:30 PM — Wholesome Lunch',
      title: 'Balanced Organic South / North Indian Lunch',
      desc: 'Traditional home-style vegetarian thali featuring steamed rice, rotis, protein-rich lentils (dal), green leafy vegetables, curd, rasam, and fresh salads.',
      tags: ['Balanced Diet', 'Fresh Curd', 'Custom Soft Diets'],
    },
    {
      icon: 'fas fa-bed',
      time: '1:30 PM — Afternoon Rest',
      title: 'Rest, Afternoon Nap & Quiet Time',
      desc: 'Rooms are kept quiet and air-conditioned for a soothing afternoon nap to allow proper food digestion and body rejuvenation.',
      tags: ['Power Nap', 'Quiet Zone', 'AC Comfort'],
    },
    {
      id: 'routine-recreation',
      icon: 'fas fa-dice',
      time: '3:30 PM — Recreation & Hobbies',
      title: 'Board Games, Socializing & Hobbies',
      desc: 'Residents gather in the lounge for Carrom matches, Chess, Card games, reading newspapers, knitting, or chatting with fellow residents.',
      tags: ['Carrom & Chess', 'Social Bonding', 'Music'],
    },
    {
      icon: 'fas fa-brain',
      time: '4:30 PM — Brain Stimulation',
      title: 'Dementia Care & Cognitive Exercises',
      desc: 'Specialized memory puzzles, picture recall, story sharing, and tactile exercises designed for residents with mild-to-moderate dementia or Alzheimer\'s.',
      tags: ['Memory Games', 'Dementia Care', 'Gentle Support'],
    },
    {
      icon: 'fas fa-mug-hot',
      time: '5:00 PM — Evening Tea',
      title: 'Evening Tea, Coffee & Light Snacks',
      desc: 'Serving hot green tea, filter coffee, or ragi malt along with baked biscuits, roasted chana, or light steamed snacks.',
      tags: ['Evening Tea', 'Light Snacks', 'Garden Seating'],
    },
    {
      icon: 'fas fa-praying-hands',
      time: '6:00 PM — Devotional Time',
      title: 'Evening Prayers, Bhajans & Spiritual Discourse',
      desc: 'Lighting oil lamps in our in-house temple, singing traditional devotional bhajans, reading holy scriptures, and meditation for peace of mind.',
      tags: ['Temple Prayers', 'Bhajan Singing', 'Spiritual Peace'],
    },
    {
      icon: 'fas fa-cloud-moon',
      time: '7:30 PM — Early Dinner',
      title: 'Wholesome & Easy-to-Digest Dinner',
      desc: 'Early dinner comprising light khichdi, soups, phulkas, boiled vegetables, and warm turmeric milk before bed to ensure good sleep.',
      tags: ['Light Dinner', 'Turmeric Milk', 'Easy Digestion'],
    },
    {
      id: 'routine-sleep',
      icon: 'fas fa-moon',
      time: '9:30 PM — Bedtime & Night Monitoring',
      title: 'Night Medication & Overnight Care Supervision',
      desc: 'Night nurses administer final doses of medication, perform vitals checks, ensure comfortable bedding, and monitor rooms throughout the night.',
      tags: ['Overnight Care', 'Night Nurses', 'Emergency Alarm'],
    },
  ];

  return (
    <section id="routine" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">A DAY IN THE LIFE</span>
          <h2 className="section-title">Complete Daily Care Schedule</h2>
          <p className="section-desc">
            From morning wake-up to peaceful night sleep — see how our structured schedule provides health, routine, and joy.
          </p>
        </div>

        <div className="timeline">
          {schedule.map((item, idx) => (
            <div className="timeline-item" id={item.id} key={idx}>
              <div className="timeline-badge">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-time">{item.time}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span className="tag" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
