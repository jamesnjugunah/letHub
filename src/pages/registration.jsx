import React, { useState, useEffect } from 'react';
import logo from '../assets/lethubLogo.png';

export default function RegistrationPage() {
  const [step, setStep] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: '',
    nickname: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Animate user count
    let count = 0;
    const targetCount = 15847;
    const duration = 2000;
    const increment = targetCount / (duration / 16);

    const timer = setInterval(() => {
      count += increment;
      if (count >= targetCount) {
        setUserCount(targetCount);
        clearInterval(timer);
      } else {
        setUserCount(Math.floor(count));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      } else if (formData.fullName.trim().split(' ').length < 2) {
        newErrors.fullName = 'Please enter your full name (first and last name)';
      }

      if (!formData.dateOfBirth) {
        newErrors.dateOfBirth = 'Date of birth is required';
      } else {
        const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
        if (age < 18) {
          newErrors.dateOfBirth = 'You must be at least 18 years old';
        }
      }

      if (!formData.nickname.trim()) {
        newErrors.nickname = 'Nickname is required';
      } else if (formData.nickname.length < 3) {
        newErrors.nickname = 'Nickname must be at least 3 characters';
      }
    }

    if (step === 2) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    } else if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-icon {
          position: absolute;
          opacity: 0.15;
          animation: float 20s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(5deg);
          }
          50% {
            transform: translateY(-60px) translateX(-20px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) translateX(20px) rotate(3deg);
          }
        }

        .registration-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .registration-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 100%;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .registration-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #d4af37, #ffd700, #ffed4e);
        }

        .welcome-section {
          text-align: center;
          animation: fadeIn 0.8s ease;
        }

        .welcome-icon {
          font-size: 5rem;
          margin-bottom: 1rem;
          animation: bounce 1s ease infinite;
        }

        .welcome-title {
          font-size: 2.5rem;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .welcome-subtitle {
          color: #718096;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .user-count {
          background: linear-gradient(135deg, #d4af37, #ffd700);
          color: #1a1a2e;
          padding: 1.5rem;
          border-radius: 15px;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
        }

        .user-count-number {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .user-count-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        .form-section {
          animation: slideIn 0.5s ease;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .form-title {
          font-size: 1.8rem;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: #718096;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          color: #2d3748;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .form-input:focus {
          outline: none;
          border-color: #d4af37;
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }

        .form-input.error {
          border-color: #f56565;
        }

        .error-message {
          color: #f56565;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        .btn {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary {
          background: linear-gradient(135deg, #d4af37, #ffd700);
          color: #1a1a2e;
          font-weight: 700;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #2d3748;
          margin-top: 1rem;
        }

        .btn-secondary:hover {
          background: #cbd5e0;
        }

        .success-section {
          text-align: center;
          animation: fadeIn 0.8s ease;
        }

        .success-icon {
          font-size: 5rem;
          margin-bottom: 1rem;
          animation: scaleIn 0.5s ease;
        }

        .success-title {
          font-size: 2rem;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .success-message {
          color: #718096;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .user-info {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 2rem;
          text-align: left;
        }

        .user-info-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .user-info-item:last-child {
          border-bottom: none;
        }

        .user-info-label {
          color: #718096;
          font-weight: 600;
        }

        .user-info-value {
          color: #2d3748;
        }

        .progress-bar {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #e2e8f0;
          transition: all 0.3s;
        }

        .progress-dot.active {
          background: linear-gradient(135deg, #d4af37, #ffd700);
          width: 30px;
          border-radius: 5px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .registration-card {
            padding: 2rem;
          }

          .welcome-title {
            font-size: 2rem;
          }

          .user-count-number {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="background-animation">
        <div className="floating-icon" style={{ top: '10%', left: '10%', fontSize: '3rem', animationDelay: '0s' }}>🏠</div>
        <div className="floating-icon" style={{ top: '20%', right: '15%', fontSize: '2.5rem', animationDelay: '2s' }}>🔑</div>
        <div className="floating-icon" style={{ bottom: '30%', left: '8%', fontSize: '2.8rem', animationDelay: '4s' }}>🏢</div>
        <div className="floating-icon" style={{ top: '50%', right: '10%', fontSize: '3.2rem', animationDelay: '1s' }}>🏘️</div>
        <div className="floating-icon" style={{ bottom: '15%', right: '20%', fontSize: '2.6rem', animationDelay: '3s' }}>🛋️</div>
        <div className="floating-icon" style={{ top: '70%', left: '15%', fontSize: '2.9rem', animationDelay: '5s' }}>🚪</div>
        <div className="floating-icon" style={{ top: '35%', left: '50%', fontSize: '2.4rem', animationDelay: '2.5s' }}>🏡</div>
        <div className="floating-icon" style={{ bottom: '40%', right: '35%', fontSize: '3.1rem', animationDelay: '1.5s' }}>🏘️</div>
      </div>

      <div className="registration-container">
        <div className="registration-card">
          {step === 0 && (
            <div className="welcome-section">
              <div className="welcome-icon"><img src={logo} alt="" /></div>
              <h1 className="welcome-title">Welcome to Rent Now!</h1>
              <p className="welcome-subtitle">
                Join thousands of users finding their perfect rentals in Kenya
              </p>
              
              <div className="user-count">
                <div className="user-count-number">{userCount.toLocaleString()}+</div>
                <div className="user-count-label">Happy Users Already Registered</div>
              </div>

              <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', marginBottom: '2rem' }}>
                <circle cx="100" cy="100" r="40" fill="#d4af37" opacity="0.7">
                  <animate attributeName="cy" values="100;80;100" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="100" r="40" fill="#ffd700" opacity="0.7">
                  <animate attributeName="cy" values="100;80;100" dur="2s" begin="0.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="100" r="40" fill="#d4af37" opacity="0.7">
                  <animate attributeName="cy" values="100;80;100" dur="2s" begin="0.6s" repeatCount="indefinite" />
                </circle>
              </svg>

              <button className="btn btn-primary" onClick={handleNext}>
                Get Started
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="form-section">
              <div className="progress-bar">
                <div className="progress-dot active"></div>
                <div className="progress-dot"></div>
                <div className="progress-dot"></div>
              </div>

              <div className="form-header">
                <div className="form-icon">👤</div>
                <h2 className="form-title">Personal Information</h2>
                <p className="form-subtitle">Tell us a bit about yourself</p>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && <div className="error-message">{errors.fullName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className={`form-input ${errors.dateOfBirth ? 'error' : ''}`}
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
                {errors.dateOfBirth && <div className="error-message">{errors.dateOfBirth}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Nickname</label>
                <input
                  type="text"
                  name="nickname"
                  className={`form-input ${errors.nickname ? 'error' : ''}`}
                  placeholder="Choose a cool nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
                {errors.nickname && <div className="error-message">{errors.nickname}</div>}
              </div>

              <button className="btn btn-primary" onClick={handleNext}>
                Continue ➡️
              </button>
              <button className="btn btn-secondary" onClick={handleBack}>
                Back
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="form-section">
              <div className="progress-bar">
                <div className="progress-dot"></div>
                <div className="progress-dot active"></div>
                <div className="progress-dot"></div>
              </div>

              <div className="form-header">
                <div className="form-icon">🔐</div>
                <h2 className="form-title">Security Details</h2>
                <p className="form-subtitle">Create your account credentials</p>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
              </div>

              <button className="btn btn-primary" onClick={handleNext}>
                Complete Registration ✅
              </button>
              <button className="btn btn-secondary" onClick={handleBack}>
                Back
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="success-section">
              <div className="progress-bar">
                <div className="progress-dot"></div>
                <div className="progress-dot"></div>
                <div className="progress-dot active"></div>
              </div>

              <div className="success-icon">🎉</div>
              <h1 className="success-title">Registration Successful!</h1>
              <p className="success-message">
                Welcome aboard, {formData.nickname}! Your account has been created successfully.
                You're now part of our growing community of {(userCount + 1).toLocaleString()} users!
              </p>

              <div className="user-info">
                <div className="user-info-item">
                  <span className="user-info-label">Full Name:</span>
                  <span className="user-info-value">{formData.fullName}</span>
                </div>
                <div className="user-info-item">
                  <span className="user-info-label">Nickname:</span>
                  <span className="user-info-value">{formData.nickname}</span>
                </div>
                <div className="user-info-item">
                  <span className="user-info-label">Email:</span>
                  <span className="user-info-value">{formData.email}</span>
                </div>
                <div className="user-info-item">
                  <span className="user-info-label">Date of Birth:</span>
                  <span className="user-info-value">{formData.dateOfBirth}</span>
                </div>
              </div>

              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '200px', margin: '0 auto 2rem' }}>
                <circle cx="100" cy="100" r="80" fill="none" stroke="#d4af37" strokeWidth="4">
                  <animate attributeName="stroke-dasharray" values="0 502;502 0" dur="2s" fill="freeze" />
                </circle>
                <path d="M60 100 L85 125 L140 70" fill="none" stroke="#ffd700" strokeWidth="6" strokeLinecap="round">
                  <animate attributeName="stroke-dasharray" values="0 150;150 0" dur="1s" begin="1s" fill="freeze" />
                </path>
              </svg>

              <button className="btn btn-primary" onClick={() => window.location.href = '/dashboard'}>
                Go to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}