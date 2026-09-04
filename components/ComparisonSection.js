export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: '24/7 Qualified Nurse Support',
      home: '❌ Dependent on maid availability',
      hospital: '⚠️ Expensive clinical ICU setup',
      universal: '✓ Included 24/7 dedicated nursing',
    },
    {
      feature: 'Regular Doctor Checkups',
      home: '❌ Stressful travel to clinics',
      hospital: '⚠️ High daily doctor consultation fees',
      universal: '✓ Included bi-weekly in-house visits',
    },
    {
      feature: 'Dietitian Organic Meals',
      home: '❌ Irregular cooking & nutrition',
      hospital: '⚠️ Standard Bland hospital food',
      universal: '✓ 4 Warm, organic custom veg meals',
    },
    {
      feature: 'Social Companionship & Joy',
      home: '❌ Loneliness & depression',
      hospital: '⚠️ Isolated hospital room setting',
      universal: '✓ Group games, bhajans & laughter',
    },
    {
      feature: 'Dementia & Wandering Safety',
      home: '❌ High safety risk of slipping/wandering',
      hospital: '⚠️ Restrictive medical environments',
      universal: '✓ Secure anti-skid campus & care staff',
    },
  ];

  return (
    <section className="section section-bg" id="peace-of-mind">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PEACE OF MIND FOR FAMILIES</span>
          <h2 className="section-title">Why Families Choose Universal Home</h2>
          <p className="section-desc">
            Compare senior care options to see why over 500+ families trust us for warm, homelike geriatric living.
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Care Pillar</th>
                <th>Staying Alone at Home</th>
                <th>General Hospital Stay</th>
                <th style={{ background: 'var(--primary)', color: 'white' }}>
                  🏆 Universal Home Care
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td>
                    <strong>{row.feature}</strong>
                  </td>
                  <td style={{ color: 'var(--gray-600)' }}>{row.home}</td>
                  <td style={{ color: 'var(--gray-600)' }}>{row.hospital}</td>
                  <td className="highlight-col">{row.universal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
