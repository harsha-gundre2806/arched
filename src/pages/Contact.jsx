import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Strict regex validation filter ensuring only raw numeric values are entered for mobile numbers
    if (name === 'number') {
      const purelyNumbers = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: purelyNumbers }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Contact Form Message Payload:", formData);
    alert("Thank you! Your message has been captured successfully.");
    
    // Clear out form state vectors upon successful mockup execution trigger
    setFormData({ name: '', email: '', number: '', subject: '', message: '' });
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#FAEAD9', // Base platform brand color tone
      color: '#2B221A',
      fontFamily: '"DM Sans", system-ui, sans-serif',
      padding: '80px 16px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Google Material Icons Native Font Hook */}
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
      />

      <style>{`
        .contact-max-container {
          width: 100%;
          max-width: 1140px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }

        /* Left Side Informational Column Elements Style Module */
        .info-panel {
          padding-right: 20px;
        }
        .detail-row-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        .icon-wrapper-badge {
          width: 44px;
          height: 44px;
          background: rgba(43, 34, 26, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C28247;
          flex-shrink: 0;
        }

        /* Right Side Input Form Module Components View Framework */
        .interactive-form-card {
          background: #FFFFFF;
          border: 1px solid rgba(43, 34, 26, 0.12);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 15px 40px rgba(43, 34, 26, 0.04);
        }
        .form-fields-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .field-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #4A3E34;
          margin-bottom: 6px;
        }
        .text-input-node {
          width: 100%;
          padding: 12px 14px;
          background: #FAEAD9; /* Slightly off-white field tone for internal styling balance */
          background-color: rgba(250, 234, 217, 0.4);
          border: 1px solid rgba(214, 201, 190, 0.7);
          border-radius: 8px;
          color: #2B221A;
          font-size: 0.95rem;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .text-input-node:focus {
          outline: none;
          border-color: #C28247;
          box-shadow: 0 0 0 3px rgba(194, 130, 71, 0.12);
          background-color: #FFFFFF;
        }
        .submit-action-btn {
          width: 100%;
          padding: 14px;
          background: #2B221A;
          color: #FAEAD9;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background-color 0.2s, transform 0.1s;
          margin-top: 8px;
        }
        .submit-action-btn:hover {
          background: #4A3E34;
        }
        .submit-action-btn:active {
          transform: scale(0.99);
        }

        /* Screen Breakpoint Matrix Optimizations */
        @media (max-width: 900px) {
          .contact-max-container {
            grid-template-columns: 1fr; /* Force collapsing into unified single-stack architecture cascade line */
            gap: 45px;
          }
          .info-panel {
            padding-right: 0;
          }
          .interactive-form-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="contact-max-container">
        
        {/* LEFT COMPONENT COLUMN: Branding Profile and Dynamic Informative Vectors */}
        <div className="info-panel">
          <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#C28247', display: 'block', marginBottom: '8px' }}>
            Get In Touch
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '850', margin: '0 0 24px 0', lineHeight: '1.15' }}>
            Contact Us
          </h1>
          
          <h2 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0 0 10px 0', color: '#2B221A' }}>
            The Ar Achiever
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.65', color: '#4A3E34', margin: '0 0 40px 0' }}>
            We are an ed-tech platform in India for Architecture. We strive to help every Architecture student to fill the gaps and realize their potential, whether it's in their personal life, their space, or the world.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Contact Details
          </h3>

          {/* Phone Element Grid Item Row */}
          <div className="detail-row-item">
            <div className="icon-wrapper-badge">
              <span className="material-icons" style={{ fontSize: '1.3rem' }}>phone</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.78rem', color: '#6E6053', fontWeight: '700', textTransform: 'uppercase' }}>Phone</span>
              <a href="tel:+919372825114" style={{ fontSize: '1.05rem', color: '#2B221A', textDecoration: 'none', fontWeight: '600' }}>+91 93728 25114</a>
            </div>
          </div>

          {/* Email Element Grid Item Row */}
          <div className="detail-row-item">
            <div className="icon-wrapper-badge">
              <span className="material-icons" style={{ fontSize: '1.3rem' }}>mail</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.78rem', color: '#6E6053', fontWeight: '700', textTransform: 'uppercase' }}>Email</span>
              <a href="mailto:info@thearachiever.com" style={{ fontSize: '1.05rem', color: '#2B221A', textDecoration: 'none', fontWeight: '600' }}>info@thearachiever.com</a>
            </div>
          </div>

          {/* Address Element Grid Item Row */}
          <div className="detail-row-item">
            <div className="icon-wrapper-badge">
              <span className="material-icons" style={{ fontSize: '1.3rem' }}>location_on</span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.78rem', color: '#6E6053', fontWeight: '700', textTransform: 'uppercase' }}>Address</span>
              <p style={{ fontSize: '1rem', color: '#2B221A', margin: '4px 0 0 0', lineHeight: '1.5', fontWeight: '500' }}>
                20-2-472/9F, Revenue Ward No. 20, Korlagunta Main Road, Tirupati,<br />
                Andhra Pradesh - 517501, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COMPONENT COLUMN: Validated Structural Contact Input Form */}
        <div className="interactive-form-card">
          <form onSubmit={handleFormSubmission} className="form-fields-stack">
            
            {/* Input Node: Full Name */}
            <div>
              <label className="field-label">Full Name *</label>
              <input 
                type="text" required name="name"
                value={formData.name} onChange={handleInputChange}
                className="text-input-node" placeholder="Your name"
              />
            </div>

            {/* Input Node: Email Address */}
            <div>
              <label className="field-label">Email Address *</label>
              <input 
                type="email" required name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={formData.email} onChange={handleInputChange}
                className="text-input-node" placeholder="name@domain.com"
              />
            </div>

            {/* Input Node: Phone Mobile Number */}
            <div>
              <label className="field-label">Contact Number (10 Digits) *</label>
              <input 
                type="tel" required name="number"
                pattern="[0-9]{10}" maxLength="10" minLength="10"
                value={formData.number} onChange={handleInputChange}
                className="text-input-node" placeholder="9372825114"
              />
            </div>

            {/* Input Node: Message Subject Heading */}
            <div>
              <label className="field-label">Subject *</label>
              <input 
                type="text" required name="subject"
                value={formData.subject} onChange={handleInputChange}
                className="text-input-node" placeholder="Inquiry topic heading"
              />
            </div>

            {/* Input Node: Multi-Line Message Context Area */}
            <div>
              <label className="field-label">Your Message *</label>
              <textarea 
                required name="message" rows="5"
                value={formData.message} onChange={handleInputChange}
                className="text-input-node" style={{ resize: 'vertical', minHeight: '100px' }}
                placeholder="Write your architectural query description parameters..."
              />
            </div>

            {/* Form Execution Action Trigger Button */}
            <div>
              <button type="submit" className="submit-action-btn">
                <span>Send Message</span>
                <span className="material-icons" style={{ fontSize: '1.1rem' }}>send</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;