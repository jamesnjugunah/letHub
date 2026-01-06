import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lethubLogo.png';




export default function RentNowLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    if (targetId !== '#') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const categories = [
    { icon: '🏘️', title: 'Housing', description: 'Apartments, houses, and residential properties for rent' },
    { icon: '🚗', title: 'Vehicles', description: 'Cars, motorcycles, and transportation rentals' },
    { icon: '🏨', title: 'Short Stays', description: 'Airbnb-style accommodations for your trips' },
    { icon: '🌾', title: 'Land', description: 'Agricultural and commercial plots available' },
    { icon: '🎯', title: 'Conference', description: 'Meeting rooms and event spaces for rent' }
  ];

  const features = [
    { icon: '✓', title: 'Verified Listings', description: 'All properties are verified for authenticity and quality assurance' },
    { icon: '💳', title: 'M-Pesa Integration', description: 'Secure payments through M-Pesa with automatic commission handling' },
    { icon: '💬', title: 'Real-time Chat', description: 'Communicate directly with property owners with AI assistance' },
    { icon: '📅', title: 'Smart Booking', description: 'Instant booking with real-time availability calendar' },
    { icon: '🤖', title: 'AI Assistant', description: 'Get instant answers to your questions with our AI chatbot' },
    { icon: '📊', title: 'Owner Dashboard', description: 'Comprehensive analytics and management tools for property owners' }
  ];

  const steps = [
    { number: 1, title: 'Browse & Search', description: 'Explore thousands of verified listings across multiple categories with advanced filters' },
    { number: 2, title: 'Book & Pay', description: 'Select your dates, communicate with owners, and pay securely through M-Pesa' },
    { number: 3, title: 'Enjoy & Review', description: 'Access your rental and share your experience with the community' }
  ];

  return (
    <>
      
      <div>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #D4AF37;
            --primary-dark: #B8941E;
            --secondary: #F4E4C1;
            --dark: #2C2416;
            --gray: #6B6B6B;
            --light: #FFFEF9;
            --white: #FFFFFF;
            --gold-light: #F5E6D3;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: var(--dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .navbar.scrolled {
            background: var(--white);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary);
            text-decoration: none;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }

        .nav-link {
            color: var(--dark);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }

        .btn-primary {
            background: var(--primary);
            color: var(--white);
        }

        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
        }

        .btn-outline {
            background: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--white);
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
        }

        .hamburger span {
            width: 25px;
            height: 3px;
            background: var(--dark);
            transition: 0.3s;
        }

        .hero {
            margin-top: 80px;
            min-height: 90vh;
            background: linear-gradient(135deg, #FFFFFF 0%, #F5E6D3 50%, #D4AF37 100%);
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.3;
        }

        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            color: var(--dark);
            margin-bottom: 1.5rem;
            line-height: 1.2;
            animation: fadeInUp 0.8s ease;
        }

        .hero-content p {
            font-size: 1.3rem;
            color: var(--gray);
            margin-bottom: 2rem;
            animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-image {
            position: relative;
            animation: fadeInRight 1s ease;
        }

        .hero-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .categories {
            padding: 5rem 2rem;
            background: var(--white);
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--dark);
        }

        .section-subtitle {
            text-align: center;
            color: var(--gray);
            font-size: 1.2rem;
            margin-bottom: 4rem;
        }

        .category-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .category-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.1);
            border: 2px solid var(--gold-light);
        }

        .category-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 20px 40px rgba(212, 175, 55, 0.25);
            background: var(--gold-light);
            border-color: var(--primary);
        }

        .category-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .category-card h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--dark);
        }

        .category-card p {
            color: var(--gray);
        }

        .features {
            padding: 5rem 2rem;
            background: var(--light);
        }

        .features-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
        }

        .feature-item {
            display: flex;
            gap: 1.5rem;
            align-items: start;
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-size: 1.8rem;
            flex-shrink: 0;
            transition: all 0.3s;
        }

        .feature-item:hover .feature-icon {
            transform: rotate(360deg) scale(1.1);
            box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
        }

        .feature-content h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: var(--dark);
        }

        .feature-content p {
            color: var(--gray);
        }

        .how-it-works {
            padding: 5rem 2rem;
            background: linear-gradient(135deg, #D4AF37 0%, #F5E6D3 50%, #FFFFFF 100%);
            color: var(--dark);
        }

        .steps-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-top: 3rem;
        }

        .step {
            text-align: center;
            position: relative;
            transition: all 0.3s;
        }

        .step:hover {
            transform: translateY(-10px);
        }

        .step-number {
            width: 60px;
            height: 60px;
            background: var(--white);
            border: 3px solid var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 auto 1.5rem;
            color: var(--primary);
            transition: all 0.3s;
        }

        .step:hover .step-number {
            background: var(--primary);
            color: var(--white);
            transform: scale(1.2) rotate(360deg);
        }

        .step h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .step p {
            color: var(--gray);
        }

        .cta {
            padding: 5rem 2rem;
            background: var(--white);
            text-align: center;
            color: var(--dark);
            border-top: 3px solid var(--primary);
            border-bottom: 3px solid var(--primary);
        }

        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .cta p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: var(--gray);
        }

        .footer {
            background: #111827;
            color: var(--white);
            padding: 3rem 2rem 1rem;
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            margin-bottom: 1rem;
            color: var(--primary);
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: var(--white);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.6);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }

            .nav-menu {
                position: fixed;
                left: -100%;
                top: 80px;
                flex-direction: column;
                background: var(--white);
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                padding: 2rem 0;
            }

            .nav-menu.active {
                left: 0;
            }

            .hero-container {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .hero-buttons {
                justify-content: center;
                flex-wrap: wrap;
            }

            .hero-image {
                order: -1;
            }

            .section-title {
                font-size: 2rem;
            }
        }
      `}</style>


        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <a href="github.com" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="" style={{ width: '60px', marginRight: '10px' }} /> 
            lethub
            </a>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
            <li><a href="#categories" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#categories')}>Categories</a></li>
            <li><a href="#features" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#features')}>Features</a></li>
            <li><a href="#how-it-works" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>How It Works</a></li>
            <li><Link to="/login" className="btn btn-outline">Login</Link></li>
            <li><Link to="/register" className="btn btn-primary">Get Started</Link></li>
            </ul>
            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Find Your Perfect Rental in Kenya</h1>
            <p>Discover, book, and manage rentals across housing, vehicles, land, and more — all in one unified platform.</p>
            <div className="hero-buttons">
              <a href="github.com" className="btn btn-primary">Explore Listings</a>
              <a href="github.com" className="btn btn-outline">List Your Property</a>
            </div>
          </div>
          <div className="hero-image">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="80" width="400" height="280" rx="20" fill="white" opacity="0.9" stroke="#D4AF37" strokeWidth="3"/>
              <rect x="80" y="110" width="160" height="120" rx="10" fill="#D4AF37"/>
              <rect x="260" y="110" width="160" height="120" rx="10" fill="#B8941E"/>
              <rect x="80" y="250" width="160" height="80" rx="10" fill="#F5E6D3"/>
              <rect x="260" y="250" width="160" height="80" rx="10" fill="#F4E4C1"/>
              <circle cx="120" cy="50" r="30" fill="#D4AF37" opacity="0.8"/>
              <text x="250" y="380" fontFamily="Arial" fontSize="14" fill="#D4AF37" textAnchor="middle" fontWeight="bold">Multi-Category Marketplace</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2 className="section-title">Browse by Category</h2>
        <p className="section-subtitle">Find exactly what you're looking for</p>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card" onClick={() => alert('Navigate to category listings page')}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Why Choose Rent Now?</h2>
        <p className="section-subtitle">Everything you need in one platform</p>
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get started in 3 simple steps</p>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of renters and property owners in Kenya</p>
        <div className="hero-buttons" style={{ justifyContent: 'center' }}>
          <a href="github.com" className="btn btn-primary">Create Account</a>
          <a href="github.com" className="btn btn-outline">Learn More</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Rent Now</h3>
            <p>Your complete rental marketplace solution in Kenya. Simplifying rentals, one booking at a time.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="github.com">About Us</a></li>
              <li><a href="github.com">How It Works</a></li>
              <li><a href="github.com">Pricing</a></li>
              <li><a href="github.com">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="github.com">Housing</a></li>
              <li><a href="github.com">Vehicles</a></li>
              <li><a href="github.com">Short Stays</a></li>
              <li><a href="github.com">Land</a></li>
              <li><a href="github.com">Conference Spaces</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="github.com">Support</a></li>
              <li><a href="github.com">Privacy Policy</a></li>
              <li><a href="github.com">Terms of Service</a></li>
              <li><a href="github.com">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rent Now. All rights reserved. | Developed by James Kariuki Njuguna</p>
        </div>
      </footer>
      </div>
    </>
  );
}
