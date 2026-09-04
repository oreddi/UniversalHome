'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    careType: 'Parent / Elderly Relative',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // TODO: Replace with actual Service ID, Template ID, and Public Key from EmailJS
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          setSubmitted(true);
          setIsSending(false);
          alert('Thank you! Your inquiry has been received. Our team will contact you shortly.');
          setSubmitted(false);
          setFormData({ name: '', phone: '', careType: 'Parent / Elderly Relative', message: '' });
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          alert('Failed to send inquiry. Please try calling us directly.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Visit Us or Schedule a Consultation</h2>
          <p className="section-desc">We would love to show you around our campus and answer all your questions in person.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info-card">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Contact Details</h3>

            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <strong>Address</strong>
                <p style={{ color: 'var(--gray-600)' }}>
                  Flat No.5, Block No.3, RGK Bharathi Nagar, Kowkur, Kukatpally, Hyderabad, Telangana - 500010
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <strong>Phone Lines</strong>
                <p style={{ color: 'var(--gray-600)' }}>
                  Primary: <strong>+91 9398861612</strong>
                </p>
                <p style={{ color: 'var(--gray-600)' }}>
                  Secondary: <strong>+91 8790286833</strong>
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <strong>Email Address</strong>
                <p style={{ color: 'var(--gray-600)' }}>contact@universalhome.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <strong>Visiting Hours</strong>
                <p style={{ color: 'var(--gray-600)' }}>Monday - Sunday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Send Us a Message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-input"
                  placeholder="e.g. Rajesh Kumar"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="user_phone"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Care Required For</label>
                <select
                  name="care_type"
                  className="form-input"
                  value={formData.careType}
                  onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                >
                  <option>Parent / Elderly Relative</option>
                  <option>Post-Surgery / Rehab Bed</option>
                  <option>Dementia / Alzheimer's Care</option>
                  <option>General Boarding Enquiry</option>
                  <option>Donation & Sponsorship</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Details</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  rows={4}
                  placeholder="Tell us about the senior resident's medical condition or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSending}>
                {isSending ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Submit Inquiry</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
