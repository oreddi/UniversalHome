'use client';

import { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GalleryPage() {
  const [gallerySlides, setGallerySlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('/api/media');
        const data = await res.json();
        if (data.gallerySlides && data.gallerySlides.length > 0) {
          setGallerySlides(data.gallerySlides);
        } else {
          setGallerySlides([
            { id: '1', title: 'Joyful Moments', image: '/realUploads/ServingFoodforOldPeople.jpeg', category: 'care' },
            { id: '2', title: 'Food Distribution', image: '/realUploads/ChildrensFood.jpeg', category: 'dining' },
            { id: '3', title: 'Children Meal Care', image: '/realUploads/ServingFoodforChildren.jpeg', category: 'dining' },
            { id: '4', title: 'Outdoor Park Recreation', image: '/images/outdoor_park_elderly.png', category: 'recreation' },
            { id: '5', title: 'Clean Bedrooms', image: '/images/clean-bedroom.png', category: 'facilities' },
            { id: '6', title: 'Nutritious Meals', image: '/images/nutritious-meals.png', category: 'dining' },
          ]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredSlides = activeFilter === 'all' 
    ? gallerySlides 
    : gallerySlides.filter(slide => slide.category === activeFilter);

  return (
    <main>
      <TopBar />
      <Header />

      {/* Page Header */}
      <div className="page-banner" style={{ background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("/images/hero-2.png") center/cover no-repeat', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', color: '#fff' }}>
          <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>OUR MEMORIES & ACTIVITIES</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Life at Universal Home</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
            A glimpse into the daily life, happiness, nutritious meals, and serene environment provided to our beloved resident elders and children.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--light-bg)', padding: '4rem 0' }}>
        <div className="container">

          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {['all', 'care', 'dining', 'facilities', 'recreation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '25px',
                  border: activeFilter === cat ? '2px solid var(--primary)' : '1px solid var(--gray-300)',
                  background: activeFilter === cat ? 'var(--primary)' : '#fff',
                  color: activeFilter === cat ? '#fff' : 'var(--gray-700)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s ease',
                  fontSize: '0.95rem'
                }}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>Loading Gallery...</div>
          ) : filteredSlides.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray-600)' }}>
              No photos added to this category yet.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {filteredSlides.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    background: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--gray-200)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.title || 'Gallery image'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--dark)', margin: 0, fontWeight: 'bold' }}>
                      {item.title || 'Universal Home Memory'}
                    </h3>
                    {item.category && (
                      <span style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '12px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call To Action Box */}
          <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, var(--primary) 0%, #0369a1 100%)', borderRadius: '16px', padding: '3rem 2rem', color: '#fff', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Want to Bring Joy to Their Lives?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', opacity: 0.9 }}>
              You can visit our home in person or sponsor a daily meal/groceries for our resident elders.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/donate" className="btn" style={{ background: 'var(--secondary)', color: '#fff', padding: '0.8rem 2rem', fontWeight: 'bold', borderRadius: '25px' }}>
                <i className="fas fa-heart" style={{ marginRight: '0.5rem' }}></i> Donate / Sponsor Meal
              </Link>
              <Link href="/contact" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid #fff', padding: '0.8rem 2rem', fontWeight: 'bold', borderRadius: '25px' }}>
                <i className="fas fa-calendar-alt" style={{ marginRight: '0.5rem' }}></i> Schedule a Visit
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
