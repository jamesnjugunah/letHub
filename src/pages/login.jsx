import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/lethubLogo2.png';
import logo2 from '../assets/lethubLogo.png';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate login
      setTimeout(() => {
        setIsLoading(false);
        alert('Login successful! Welcome back to Rent Now!');
      }, 1500);
    }
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
          background: #f7fafc;
          min-height: 100vh;
        }

        .login-container {
          display: flex;
          min-height: 100vh;
        }

        .image-section {
          flex: 1;
          background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(22, 33, 62, 0.9)), 
                      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%231a1a2e" width="1200" height="800"/><g opacity="0.3"><circle cx="200" cy="150" r="80" fill="%23d4af37"/><circle cx="900" cy="600" r="100" fill="%23ffd700"/><rect x="400" y="200" width="300" height="400" fill="%23d4af37" rx="20"/><path d="M 600 200 L 750 100 L 750 200 Z" fill="%23ffd700"/><circle cx="600" cy="500" r="30" fill="%23ffed4e"/><rect x="500" y="550" width="50" height="50" fill="%23d4af37"/></g></svg>');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .image-overlay {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
        }

        .overlay-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .overlay-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .overlay-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 500px;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-item {
          position: absolute;
          opacity: 0.2;
          animation: floatSlow 15s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        .form-section {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: white;
        }

        .login-form-container {
          width: 100%;
          max-width: 450px;
          animation: slideIn 0.6s ease;
        }

        .login-header {
          margin-bottom: 2.5rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .brand-icon {
          font-size: 2.5rem;
        }

        .brand-name {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .login-title {
          font-size: 2.2rem;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .login-subtitle {
          color: #718096;
          font-size: 1.05rem;
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

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #718096;
          font-size: 1.2rem;
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 3rem;
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

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .checkbox-input {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #d4af37;
        }

        .checkbox-label {
          color: #4a5568;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .forgot-link {
          color: #d4af37;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s;
        }

        .forgot-link:hover {
          color: #b8941f;
          text-decoration: underline;
        }

        .btn {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #d4af37, #ffd700);
          color: #1a1a2e;
          margin-bottom: 1rem;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          border: 3px solid rgba(26, 26, 46, 0.3);
          border-top: 3px solid #1a1a2e;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.5rem 0;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #e2e8f0;
        }

        .divider-text {
          padding: 0 1rem;
          color: #718096;
          font-size: 0.9rem;
        }

        .social-login {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .btn-social {
          flex: 1;
          padding: 0.85rem;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          background: white;
          color: #4a5568;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-social:hover {
          border-color: #d4af37;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .signup-prompt {
          text-align: center;
          color: #718096;
          font-size: 0.95rem;
        }

        .signup-link {
          color: #d4af37;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }

        .signup-link:hover {
          color: #b8941f;
          text-decoration: underline;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 968px) {
          .login-container {
            flex-direction: column;
          }

          .image-section {
            min-height: 300px;
            padding: 2rem;
          }

          .overlay-title {
            font-size: 2rem;
          }

          .overlay-subtitle {
            font-size: 1.1rem;
          }

          .form-section {
            padding: 2rem 1.5rem;
          }

          .login-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .image-section {
            min-height: 250px;
          }

          .overlay-icon {
            font-size: 3.5rem;
          }

          .overlay-title {
            font-size: 1.6rem;
          }

          .overlay-subtitle {
            font-size: 1rem;
          }

          .social-login {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="image-section">
          <div className="floating-elements">
            <div className="floating-item" style={{ top: '15%', left: '10%', fontSize: '3rem', animationDelay: '0s' }}>🏠</div>
            <div className="floating-item" style={{ top: '60%', right: '15%', fontSize: '2.5rem', animationDelay: '2s' }}>🔑</div>
            <div className="floating-item" style={{ bottom: '20%', left: '20%', fontSize: '2.8rem', animationDelay: '4s' }}>🏢</div>
            <div className="floating-item" style={{ top: '40%', right: '25%', fontSize: '2.6rem', animationDelay: '3s' }}>🏘️</div>
          </div>
          
          <div className="image-overlay">
            <div className="overlay-icon"><img src={logo} alt="" /></div>
            <h1 className="overlay-title">Lethub</h1>
            <p className="overlay-subtitle">
              Your gateway to finding the perfect rental home in Kenya. 
              Discover amazing properties with ease and security.
            </p>
          </div>
        </div>

        <div className="form-section">
          <div className="login-form-container">
            <div className="login-header">
              <div className="brand-logo">
                <span className="brand-icon"><img src={logo2} alt="" style={{width:'65px'}}/></span>
                <span className="brand-name">Lethub</span>
              </div>
              <h2 className="login-title">Welcome Back!</h2>
              <p className="login-subtitle">Login to access your account</p>
            </div>

            <div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    name="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    name="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>

              <div className="form-options">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="checkbox-input"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="rememberMe" className="checkbox-label">
                    Remember me
                  </label>
                </div>
                <a href="github.com" className="forgot-link" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
              </div>

              <button type="button" className="btn btn-primary" disabled={isLoading} onClick={handleSubmit}>
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    <span>Logging in...</span>
                  </>
                ) : (
                  <>
                    <span>Login</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>

            <div className="divider">
              <span className="divider-text">Or continue with</span>
            </div>

            <div className="social-login">
              <button className="btn-social" onClick={() => alert('Google login coming soon!')}>
                <span>G</span>
                <span>Google</span>
              </button>
              <button className="btn-social" onClick={() => alert('Facebook login coming soon!')}>
                <span>f</span>
                <span>Facebook</span>
              </button>
            </div>

            <div className="signup-prompt">
              Don't have an account? <Link to="/register" className="signup-link" >Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}