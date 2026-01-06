import React, { useState } from 'react';

export default function LetHubDashboard() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const listings = [
    { id: 1, category: 'house', title: 'Modern Villa with Pool', location: 'Nairobi, Karen', price: 'KSh 150,000', period: '/mo', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600', rating: 4.8, reviews: 24, description: 'Stunning modern villa featuring 4 bedrooms and a beautiful swimming pool.' },
    { id: 2, category: 'car', title: 'Toyota Land Cruiser', location: 'Nairobi CBD', price: 'KSh 8,000', period: '/day', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600', rating: 4.9, reviews: 45, description: 'Reliable and spacious SUV perfect for safari trips or city driving.' },
    { id: 3, category: 'land', title: 'Prime Commercial Plot', location: 'Kiambu, Ruiru', price: 'KSh 500,000', period: '/yr', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600', rating: 4.5, reviews: 12, description: 'Half-acre commercial plot in a rapidly developing area.' },
    { id: 4, category: 'conference', title: 'Executive Boardroom', location: 'Westlands, Nairobi', price: 'KSh 15,000', period: '/day', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600', rating: 4.7, reviews: 38, description: 'Professional conference space equipped with modern amenities.' },
    { id: 5, category: 'house', title: 'Luxury Penthouse Suite', location: 'Nairobi, Kilimani', price: 'KSh 200,000', period: '/mo', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600', rating: 4.9, reviews: 31, description: 'Elegant penthouse with panoramic city views and premium finishes.' },
    { id: 6, category: 'car', title: 'Mercedes-Benz S-Class', location: 'Nairobi CBD', price: 'KSh 12,000', period: '/day', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600', rating: 5.0, reviews: 52, description: 'Luxury sedan perfect for executive transport and special occasions.' }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: '✨' },
    { id: 'house', label: 'Houses', icon: '🏠' },
    { id: 'car', label: 'Cars', icon: '🚗' },
    { id: 'land', label: 'Land', icon: '🌍' },
    { id: 'conference', label: 'Spaces', icon: '🏢' }
  ];

  const filteredListings = activeFilter === 'all' 
    ? listings 
    : listings.filter(l => l.category === activeFilter);

  const openModal = (listing) => {
    setSelectedListing(listing);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedListing(null);
  };

  const handleBooking = () => {
    alert('Request sent to owner. They will contact you shortly.');
    closeModal();
  };

  const handleAddListing = () => {
    alert('Add New Listing feature - Please provide property details and reference information!');
  };

  return (
    <div className="dashboard-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0f;
          overflow-x: hidden;
        }

        .dashboard-wrapper {
          min-height: 100vh;
          background: #0a0a0f;
          position: relative;
        }

        .dashboard-wrapper::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: orbMove 25s infinite ease-in-out;
          pointer-events: none;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.2), transparent);
          bottom: -150px;
          right: -150px;
          animation-delay: 8s;
        }

        .orb-3 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent);
          top: 40%;
          left: 60%;
          animation-delay: 4s;
        }

        @keyframes orbMove {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -80px) scale(1.1);
          }
          66% {
            transform: translate(-60px, 60px) scale(0.95);
          }
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(15, 15, 20, 0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
          padding: 0 2rem;
          height: 80px;
        }

        .topbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          position: relative;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, #ffd700);
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: #ffd700;
        }

        .nav-link:hover::before {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link.active {
          color: #ffd700;
          background: rgba(212, 175, 55, 0.1);
        }

        .topbar-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .notification-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .notification-btn:hover {
          background: rgba(212, 175, 55, 0.15);
          transform: translateY(-2px);
        }

        .notification-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #ff6b6b, #ff5252);
          border-radius: 50%;
          font-size: 10px;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #0a0a0f;
        }

        .profile-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          color: #0a0a0f;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
          position: relative;
        }

        .profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(212, 175, 55, 0.5);
        }

        .dropdown {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          min-width: 240px;
          background: rgba(20, 20, 28, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 16px;
          padding: 0.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: dropdownSlide 0.3s ease;
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
          font-size: 14px;
          font-weight: 500;
        }

        .dropdown-item:hover {
          background: rgba(212, 175, 55, 0.15);
          color: #ffd700;
        }

        .dropdown-item.danger {
          color: #ff5252;
        }

        .dropdown-item.danger:hover {
          background: rgba(255, 82, 82, 0.1);
        }

        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 8rem;
          position: relative;
          z-index: 1;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
        }

        .filters-wrapper {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin: 3rem 0;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.15));
          border-color: #d4af37;
          color: #ffd700;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .listing-card {
          background: rgba(20, 20, 28, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .listing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .listing-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2);
        }

        .listing-card:hover::before {
          opacity: 1;
        }

        .listing-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 260px;
        }

        .listing-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .listing-card:hover .listing-image {
          transform: scale(1.1);
        }

        .listing-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ffd700;
        }

        .listing-content {
          padding: 1.5rem;
        }

        .listing-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .listing-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .listing-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .listing-price {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .listing-period {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
        }

        .listing-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .floating-add-btn {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #0a0a0f;
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          font-weight: 700;
        }

        .floating-add-btn:hover {
          transform: scale(1.15) rotate(90deg);
          box-shadow: 0 15px 50px rgba(212, 175, 55, 0.7);
        }

        .floating-add-btn::before {
          content: 'Add Listing';
          position: absolute;
          right: calc(100% + 16px);
          background: rgba(20, 20, 28, 0.95);
          backdrop-filter: blur(20px);
          color: #ffd700;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .floating-add-btn:hover::before {
          opacity: 1;
          visibility: visible;
          transform: translateX(-8px);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: rgba(20, 20, 28, 0.95);
          backdrop-filter: blur(30px);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          position: relative;
          animation: modalSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          right: 20px;
          top: 20px;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #ffd700;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          transform: rotate(90deg) scale(1.1);
          background: rgba(212, 175, 55, 0.2);
        }

        .modal-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .modal-body {
          padding: 2.5rem;
        }

        .modal-category {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ffd700;
          margin-bottom: 1rem;
        }

        .modal-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .modal-location {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .modal-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 2rem;
        }

        .modal-price {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
        }

        .booking-btn {
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0a0a0f;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .booking-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 1024px) {
          .listings-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .listings-grid {
            grid-template-columns: 1fr;
          }

          .modal-title {
            font-size: 2rem;
          }

          .modal-price {
            font-size: 2rem;
          }

          .topbar {
            padding: 0 1rem;
          }

          .main-content {
            padding: 2rem 1rem 6rem;
          }
        }
      `}</style>

      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Top Navigation */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="logo">LETHUB</div>
          
          <div className="nav-links">
            <a href="github.com" className="nav-link active">Home</a>
            <a href="github.com" className="nav-link">Chat</a>
            <a href="github.com" className="nav-link">Discover</a>
            <a href="github.com" className="nav-link">Wallet</a>
          </div>

          <div className="topbar-actions">
            <div className="notification-btn">
              <span style={{ fontSize: '20px' }}>🔔</span>
              <div className="notification-badge">3</div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div className="profile-btn" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                JD
              </div>
              
              {showProfileDropdown && (
                <div className="dropdown">
                  <a href="github.com" className="dropdown-item">
                    <span>👤</span> My Profile
                  </a>
                  <a href="github.com" className="dropdown-item">
                    <span>⚙️</span> Settings
                  </a>
                  <a href="github.com" className="dropdown-item">
                    <span>🔒</span> Privacy
                  </a>
                  <a href="github.com" className="dropdown-item">
                    <span>❓</span> Help
                  </a>
                  <a href="github.com" className="dropdown-item danger">
                    <span>🚪</span> Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Premium Rentals</h1>
          <p className="hero-subtitle">
            Discover exceptional properties, vehicles, and spaces across Kenya
          </p>
        </div>

        <div className="filters-wrapper">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div className="listings-grid">
          {filteredListings.map(listing => (
            <div key={listing.id} className="listing-card" onClick={() => openModal(listing)}>
              <div className="listing-image-wrapper">
                <img src={listing.image} alt={listing.title} className="listing-image" />
                <div className="listing-badge">{listing.category}</div>
              </div>
              <div className="listing-content">
                <h3 className="listing-title">{listing.title}</h3>
                <div className="listing-location">
                  <span>📍</span>
                  {listing.location}
                </div>
                <div className="listing-footer">
                  <div>
                    <span className="listing-price">{listing.price}</span>
                    <span className="listing-period">{listing.period}</span>
                  </div>
                  <div className="listing-rating">
                    <span>⭐</span>
                    {listing.rating} ({listing.reviews})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Add Button */}
        <button className="floating-add-btn" onClick={handleAddListing}>
            +
        </button>

        {/* Modal */}
        {showModal && selectedListing && (
            <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-close" onClick={closeModal}>×</div>
                <img src={selectedListing.image} alt={selectedListing.title} className="modal-image" />
                <div className="modal-body">
                <div className="modal-category">{selectedListing.category}</div>
                <h2 className="modal-title">{selectedListing.title}</h2>
                <div className="modal-location">
                    <span>📍</span>
                    {selectedListing.location}
                </div>
                <p className="modal-description">{selectedListing.description}</p>
                <div className="modal-price">
                    {selectedListing.price}
                    <span className="listing-period">{selectedListing.period}</span>
                </div>
                <button className="booking-btn" onClick={handleBooking}>
                    Request Booking
                </button>
                </div>
            </div>
            </div>
        )}
      </div>
    </div>
  );
}