'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function DonatePage() {
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

  return (
    <main>
      <TopBar />
      <Header />

      {/* Page Banner */}
      <div className="page-banner" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/images/hero-2.png") center/cover no-repeat', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', color: '#fff' }}>
          <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>
            MAKE AN IMPACT
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Support Our Elders</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            Your generosity provides nutritious meals, clothing, and a loving home for abandoned seniors. Every contribution matters.
          </p>
        </div>
      </div>

      <section className="section" style={{ padding: '5rem 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left Column: Information & Impact */}
            <div className="donate-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                  Why Your Support Matters
                </h2>
                <p style={{ color: 'var(--gray-600)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  At Universal Home, we care for seniors who have nowhere else to go. We provide them with a dignified life, daily meals (Annadanam), clean clothing, and a safe shelter. We rely entirely on the compassion of donors like you to keep our doors open and our residents happy.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', borderLeft: '5px solid var(--primary)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--dark)' }}>How You Can Help:</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--gray-700)' }}>
                    <i className="fas fa-utensils" style={{ color: 'var(--primary)', fontSize: '1.2rem', width: '24px', textAlign: 'center' }}></i>
                    <span><strong>Annadanam (Food Donation):</strong> Sponsor a meal or daily groceries for the residents</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--gray-700)' }}>
                    <i className="fas fa-tshirt" style={{ color: 'var(--primary)', fontSize: '1.2rem', width: '24px', textAlign: 'center' }}></i>
                    <span><strong>Clothing & Essentials:</strong> Provide clean clothes, blankets, and hygiene products</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--gray-700)' }}>
                    <i className="fas fa-home" style={{ color: 'var(--primary)', fontSize: '1.2rem', width: '24px', textAlign: 'center' }}></i>
                    <span><strong>Facility Maintenance:</strong> Help us maintain a safe, loving environment they can call home</span>
                  </li>
                </ul>
              </div>

              <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                <Image src="/images/hero-1.png" alt="Happy residents" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Right Column: Donation Details */}
            <div className="donate-action" style={{ background: '#fff', borderRadius: '16px', boxShadow: 'var(--shadow-lg)', padding: '2.5rem', border: '1px solid var(--gray-200)' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--dark)', marginBottom: '0.5rem' }}>Make a Donation</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>Select an amount to sponsor a resident</p>
              </div>

              <div className="preset-amounts" style={{ justifyContent: 'center', gap: '1rem', display: 'flex', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    className={`amount-chip ${selectedAmount === amt ? 'active' : ''}`}
                    onClick={() => setSelectedAmount(amt)}
                    style={{ flex: '1 1 calc(50% - 1rem)', textAlign: 'center' }}
                  >
                    {amt}
                  </button>
                ))}
              </div>

              {/* Direct Bank Transfer Details */}
              <div style={{ marginBottom: '2rem', textAlign: 'left', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--gray-200)' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--dark)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-university" style={{ color: 'var(--primary)' }}></i> Direct Bank Transfer
                </h4>
                <div className="bank-details-container">
                  <div className="bank-detail-row">
                    <strong>Account Name:</strong> <span>Universal Home NGO</span>
                  </div>
                  <div className="bank-detail-row">
                    <strong>Account Number:</strong> <span>1234567890123</span>
                  </div>
                  <div className="bank-detail-row">
                    <strong>IFSC Code:</strong> <span>SBIN0001234</span>
                  </div>
                  <div className="bank-detail-row">
                    <strong>Bank & Branch:</strong> <span className="bank-detail-val">State Bank of India, Kowkur</span>
                  </div>
                </div>
              </div>

              {/* UPI & QR Section */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '1rem', background: '#fff', border: '2px dashed var(--gray-300)', borderRadius: '12px', marginBottom: '1.5rem' }}>
                  <svg className="qr-code-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '160px', height: '160px', margin: '0 auto' }}>
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
                </div>
                
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                  Scan QR using GPay, PhonePe, Paytm or BHIM
                </p>

                <div className="upi-id-box" style={{ background: 'var(--light-bg)', border: '1px solid var(--gray-300)', padding: '0.85rem 1.25rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontFamily: 'monospace', fontSize: '1.1rem' }}>
                  <span>{upiId}</span>
                  <button 
                    className="copy-btn" 
                    onClick={handleCopy}
                    style={{ background: 'var(--primary)', color: '#fff', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'var(--transition)' }}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray-200)', fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                <p style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <i className="fas fa-shield-alt" style={{ color: 'var(--primary)', marginTop: '3px' }}></i> 
                  <span>All donations to Universal Home are eligible for tax deductions under Section 80G of the Income Tax Act.</span>
                </p>
                <p style={{ margin: 0, display: 'flex', gap: '0.5rem' }}>
                  <i className="fas fa-lock" style={{ color: 'var(--primary)', marginTop: '3px' }}></i> 
                  <span>Your donation is processed securely. Donor details are logged for official NGO records.</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
