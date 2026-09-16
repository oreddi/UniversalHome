'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import TopBar from '@/components/TopBar';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('heroSlides'); // heroSlides, gallerySlides, servicesSlides, singleImages
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await fetch('/api/media');
      const data = await res.json();
      setMediaData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching media', error);
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  const handleDragEnd = async (result, sectionKey) => {
    if (!result.destination) return;

    const items = Array.from(mediaData[sectionKey]);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setMediaData((prev) => ({ ...prev, [sectionKey]: updatedItems }));

    try {
      await fetch('/api/media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'REORDER', section: sectionKey, payload: updatedItems }),
      });
    } catch (error) {
      console.error('Failed to save order', error);
    }
  };

  const handleFileUpload = async (e, sectionKey) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('section', sectionKey);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setMediaData((prev) => ({ ...prev, [sectionKey]: data.data }));
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload Error', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset input
    }
  };

  const handleDelete = async (id, sectionKey) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const res = await fetch('/api/media', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'DELETE', section: sectionKey, payload: { id } }),
      });
      const data = await res.json();
      if (data.success) {
        setMediaData((prev) => ({ ...prev, [sectionKey]: data.data }));
      }
    } catch (error) {
      console.error('Delete Error', error);
    }
  };

  const renderDraggableList = (sectionKey, title, desc) => {
    const items = mediaData[sectionKey] || [];
    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{title}</h2>
            <p style={{ color: 'var(--gray-600)' }}>{desc}</p>
          </div>
          <div style={{ position: 'relative' }}>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleFileUpload(e, sectionKey)} 
              style={{ display: 'none' }} 
              id={`upload-${sectionKey}`}
            />
            <label htmlFor={`upload-${sectionKey}`} className="btn btn-primary" style={{ cursor: 'pointer' }}>
              {uploading ? <><i className="fas fa-spinner fa-spin"></i> Uploading...</> : <><i className="fas fa-upload"></i> Upload</>}
            </label>
          </div>
        </div>

        <DragDropContext onDragEnd={(result) => handleDragEnd(result, sectionKey)}>
          <Droppable droppableId={sectionKey}>
            {(provided) => (
              <div 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          background: 'white',
                          padding: '1rem',
                          borderRadius: '12px',
                          boxShadow: snapshot.isDragging ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                          border: '1px solid var(--gray-200)',
                          gap: '1rem',
                        }}
                      >
                        <div style={{ color: 'var(--gray-600)', cursor: 'grab' }}>
                          <i className="fas fa-grip-lines"></i>
                        </div>
                        <img 
                          src={item.image} 
                          alt="Thumbnail" 
                          style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #eee' }} 
                        />
                        <div style={{ flex: '1 1 200px' }}>
                          <strong>{item.title || `Image ${index + 1}`}</strong>
                          {item.category && <span style={{ marginLeft: '10px', fontSize: '0.75rem', padding: '2px 8px', background: 'var(--gray-200)', borderRadius: '12px' }}>{item.category}</span>}
                          <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>{item.image}</p>
                        </div>
                        <button 
                          onClick={() => handleDelete(item.id, sectionKey)} 
                          style={{ background: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
                        >
                          <i className="fas fa-trash"></i> Delete
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  };

  const renderSingleImageUploader = (sectionKey, title, currentImage) => {
    return (
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--gray-200)', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
          <img src={currentImage} alt="Current" style={{ width: '200px', height: '140px', objectFit: 'cover', borderRadius: '8px', border: '2px dashed var(--gray-300)' }} />
          <div>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>Upload a new image to replace the current photo in this section.</p>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => handleFileUpload(e, sectionKey)} 
              style={{ display: 'none' }} 
              id={`upload-${sectionKey}`}
            />
            <label htmlFor={`upload-${sectionKey}`} className="btn btn-primary" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {uploading ? <><i className="fas fa-spinner fa-spin"></i> Uploading...</> : <><i className="fas fa-upload"></i> Replace Image</>}
            </label>
          </div>
        </div>
      </div>
    );
  };

  if (!authenticated) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--light-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Admin Access</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Enter Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '1rem', width: '250px' }}
            />
            <br />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
          </form>
        </div>
      </main>
    );
  }

  if (loading || !mediaData) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading Admin Panel...</div>;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--light-bg)' }}>
      <TopBar />
      <div style={{ background: 'white', padding: '1rem 0', borderBottom: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: 'var(--primary)', fontSize: '1.5rem', margin: 0 }}>Dashboard</h1>
          <Link href="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}><i className="fas fa-home"></i> Back to Site</Link>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2rem', gap: '2rem', alignItems: 'flex-start' }}>
        
        {/* Left Sidebar Menu */}
        <div style={{ flex: '1 1 250px', maxWidth: '300px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem 1rem', background: 'var(--dark)', color: 'white' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Sections</h3>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li 
              style={{ padding: '1rem 1.5rem', cursor: 'pointer', borderBottom: '1px solid var(--gray-100)', background: activeTab === 'heroSlides' ? 'var(--primary-light)' : 'white', fontWeight: activeTab === 'heroSlides' ? 'bold' : 'normal', color: activeTab === 'heroSlides' ? 'var(--primary)' : 'inherit' }}
              onClick={() => setActiveTab('heroSlides')}
            >
              <i className="fas fa-images" style={{ width: '24px' }}></i> Hero Slider
            </li>
            <li 
              style={{ padding: '1rem 1.5rem', cursor: 'pointer', borderBottom: '1px solid var(--gray-100)', background: activeTab === 'gallerySlides' ? 'var(--primary-light)' : 'white', fontWeight: activeTab === 'gallerySlides' ? 'bold' : 'normal', color: activeTab === 'gallerySlides' ? 'var(--primary)' : 'inherit' }}
              onClick={() => setActiveTab('gallerySlides')}
            >
              <i className="fas fa-photo-video" style={{ width: '24px' }}></i> Gallery Images
            </li>
            <li 
              style={{ padding: '1rem 1.5rem', cursor: 'pointer', borderBottom: '1px solid var(--gray-100)', background: activeTab === 'servicesSlides' ? 'var(--primary-light)' : 'white', fontWeight: activeTab === 'servicesSlides' ? 'bold' : 'normal', color: activeTab === 'servicesSlides' ? 'var(--primary)' : 'inherit' }}
              onClick={() => setActiveTab('servicesSlides')}
            >
              <i className="fas fa-hand-holding-heart" style={{ width: '24px' }}></i> Services Cards
            </li>
            <li 
              style={{ padding: '1rem 1.5rem', cursor: 'pointer', background: activeTab === 'singleImages' ? 'var(--primary-light)' : 'white', fontWeight: activeTab === 'singleImages' ? 'bold' : 'normal', color: activeTab === 'singleImages' ? 'var(--primary)' : 'inherit' }}
              onClick={() => setActiveTab('singleImages')}
            >
              <i className="fas fa-image" style={{ width: '24px' }}></i> Page Section Images
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: '2 1 400px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', minHeight: '600px', maxWidth: '100%' }}>
          {activeTab === 'heroSlides' && renderDraggableList('heroSlides', 'Hero Slider Images', 'Manage the scrolling images at the top of the homepage.')}
          {activeTab === 'gallerySlides' && renderDraggableList('gallerySlides', 'Gallery Section Images', 'Manage all photos shown in the Life at Universal Home grid.')}
          {activeTab === 'servicesSlides' && renderDraggableList('servicesSlides', 'Services Cards', 'Manage the images used for the main care service cards.')}
          
          {activeTab === 'singleImages' && (
            <div style={{ padding: '2rem' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Page Section Images</h2>
              {renderSingleImageUploader('aboutImage', 'About Us Section Image', mediaData.aboutImage)}
              {renderSingleImageUploader('bedsImage', 'Beds & Hygiene Image', mediaData.bedsImage)}
              {renderSingleImageUploader('foodImage', 'Food & Nutrition Image', mediaData.foodImage)}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
