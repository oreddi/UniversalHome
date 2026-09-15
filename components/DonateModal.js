'use client';

import { useState } from 'react';

export default function DonateModal({ isOpen, onClose }) {
  const [selectedAmount, setSelectedAmount] = useState('₹1,000');
  const [copied, setCopied] = useState(false);

  const amounts = ['₹500', '₹1,000', '₹5,000', '₹10,000'];
  const upiId = 'universalhome@upi';

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            <i className="fas fa-heart"></i> Support Our Elderly Residents
          </h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
            Your kind contribution helps us provide free meals, medicines, and medical care to destitute & underprivileged elders.
          </p>

          <div className="preset-amounts">
            {amounts.map((amt) => (
              <button
                key={amt}
                className={`amount-chip ${selectedAmount === amt ? 'active' : ''}`}
                onClick={() => setSelectedAmount(amt)}
              >
                {amt}
              </button>
            ))}
          </div>

          {/* Donor Information Form */}
          <div style={{ marginTop: '1.25rem', textAlign: 'left', background: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--dark)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="fas fa-user-edit" style={{ color: 'var(--primary)' }}></i> Donor Details (For Tax Receipt & Records)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <input
                type="text"
                placeholder="Your Full Name *"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid var(--gray-300)', fontSize: '0.85rem' }}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid var(--gray-300)', fontSize: '0.85rem' }}
              />
            </div>
            <input
              type="text"
              placeholder="Email or PAN Number (for 80G tax receipt)"
              style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid var(--gray-300)', fontSize: '0.85rem' }}
            />
          </div>

          <div className="qr-card" style={{ marginTop: '1rem' }}>
            <svg className="qr-code-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="#ffffff" />
              <rect x="15" y="15" width="50" height="50" fill="#0d6b3d" />
              <rect x="25" y="25" width="30" height="30" fill="#ffffff" />
              <rect x="33" y="33" width="14" height="14" fill="#0d6b3d" />

              <rect x="135" y="15" width="50" height="50" fill="#0d6b3d" />
              <rect x="145" y="25" width="30" height="30" fill="#ffffff" />
              <rect x="153" y="33" width="14" height="14" fill="#0d6b3d" />

              <rect x="15" y="135" width="50" height="50" fill="#0d6b3d" />
              <rect x="25" y="145" width="30" height="30" fill="#ffffff" />
              <rect x="33" y="153" width="14" height="14" fill="#0d6b3d" />

              <rect x="80" y="20" width="12" height="12" fill="#0d6b3d" />
              <rect x="100" y="35" width="12" height="12" fill="#0d6b3d" />
              <rect x="20" y="80" width="12" height="12" fill="#0d6b3d" />
              <rect x="45" y="95" width="12" height="12" fill="#0d6b3d" />
              <rect x="80" y="80" width="25" height="25" fill="#0d6b3d" />
              <rect x="120" y="80" width="15" height="15" fill="#0d6b3d" />
              <rect x="150" y="95" width="20" height="20" fill="#0d6b3d" />
              <rect x="90" y="120" width="15" height="15" fill="#0d6b3d" />
              <rect x="130" y="135" width="25" height="25" fill="#0d6b3d" />
              <rect x="80" y="160" width="15" height="15" fill="#0d6b3d" />
              <rect x="160" y="160" width="20" height="20" fill="#0d6b3d" />

              <circle cx="100" cy="100" r="18" fill="#d4a843" />
              <text x="100" y="105" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">
                UPI
              </text>
            </svg>

            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
              Scan QR using GPay, PhonePe, Paytm or BHIM
            </p>
          </div>

          <div className="upi-id-box">
            <span>
              UPI ID: <span id="upiIdText">{upiId}</span>
            </span>
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--gray-600)',
              textAlign: 'left',
              background: 'var(--gray-100)',
              padding: '0.75rem',
              borderRadius: 'var(--radius-sm)',
              marginTop: '0.75rem'
            }}
          >
            <p style={{ marginBottom: '0.2rem' }}>
              <i className="fas fa-shield-alt" style={{ color: 'var(--primary)' }}></i> All donations are eligible for 80G tax benefit receipts.
            </p>
            <p>
              <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i> Donor details logged for official NGO records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
