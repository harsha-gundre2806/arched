import React from 'react';

const About = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#FAEAD9',
      color: '#2B221A',
      fontFamily: '"DM Sans", system-ui, sans-serif',
      padding: '80px 16px',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      
      {/* Dynamic Google Material Icons Injection Link */}
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
      />

      <style>{`
        /* --- Keyframe Animations --- */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(43, 34, 26, 0.15);
          }
          50% {
            box-shadow: 0 12px 32px rgba(194, 130, 71, 0.3);
          }
        }

        /* --- Animation Utility Classes --- */
        .animate-fade-1 {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-2 {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }
        .animate-fade-3 {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }

        /* --- Layout & Dynamic Styling --- */
        .about-max-wrapper {
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-quote-box {
          border-left: 4px solid #C28247;
          padding-left: 20px;
          margin: 30px 0;
          font-style: italic;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .hero-quote-box:hover {
          transform: translateX(8px);
          border-color: #2B221A;
        }

        .quote-badge-animated {
          animation: pulseGlow 4s infinite ease-in-out;
          transition: transform 0.3s ease;
        }
        .quote-badge-animated:hover {
          transform: scale(1.02);
        }

        .grid-two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 50px;
        }

        .vision-mission-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(43, 34, 26, 0.1);
          border-radius: 12px;
          padding: 35px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .vision-mission-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(43, 34, 26, 0.08);
          border-color: rgba(194, 130, 71, 0.4);
        }

        .vision-mission-card .material-icons {
          transition: transform 0.4s ease;
        }
        .vision-mission-card:hover .material-icons {
          transform: rotate(12deg) scale(1.1);
        }

        /* --- Flow Process Chain Grid Architecture Styling --- */
        .process-chain-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
          position: relative;
        }

        .process-step-card {
          background: #FFFFFF;
          border: 1px solid rgba(43, 34, 26, 0.12);
          border-radius: 12px;
          padding: 24px;
          position: relative;
          box-shadow: 0 4px 20px rgba(43, 34, 26, 0.03);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .process-step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(43, 34, 26, 0.08);
          border-color: #C28247;
        }

        /* Animated Icon Circle Badge */
        .icon-circle-badge {
          width: 48px;
          height: 48px;
          background: #2B221A;
          color: #FAEAD9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .process-step-card:hover .icon-circle-badge {
          background: #C28247;
          transform: scale(1.1);
        }

        .step-number-indicator {
          position: absolute;
          top: 20px;
          right: 24px;
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(194, 130, 71, 0.25);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .process-step-card:hover .step-number-indicator {
          color: rgba(194, 130, 71, 0.8);
          transform: scale(1.15);
        }

        /* --- Section Divider Animation --- */
        .animated-divider {
          border: 0;
          height: 1px;
          background: rgba(43, 34, 26, 0.15);
          margin: 60px 0;
          position: relative;
          overflow: hidden;
        }
        .animated-divider::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #C28247;
          animation: expandWidth 1.2s ease-out forwards;
        }

        /* Screen Media Breakpoint Adaptations */
        @media (max-width: 960px) {
          .process-chain-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 768px) {
          .grid-two-column {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 520px) {
          .process-chain-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="about-max-wrapper">
        
        {/* SECTION 1: Introduction Story Frame */}
        <section style={{ marginBottom: '60px' }}>
          <div className="animate-fade-1">
            <h4 style={{ color: '#C28247', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
              Who We Are
            </h4>
            <h1 style={{ fontSize: '2.4rem', fontWeight: '800', margin: '0 0 24px 0', lineHeight: '1.2' }}>
              About The Ar Achiever
            </h1>
          </div>
          
          <div className="animate-fade-2">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#4A3E34', maxWidth: '850px', marginBottom: '20px' }}>
              We are a new Ed-Tech platform in India for Architecture. We are here to give our technical and other expertise to students of Architecture, so the students don’t miss out what positive change they can make, whether in their Life, their Space, or the World.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4A3E34', maxWidth: '850px', marginBottom: '30px' }}>
              We want to be a part of developing India to make a developed India. The extraordinary power of education is what unlocks that potential. We try to emphasise on the practical and professional focussed education using technology. Our Team is extremely passionate, in making consistent strides in product innovation to enhance our user engagement.
            </p>
          </div>

          <div className="animate-fade-3">
            <div className="quote-badge-animated" style={{
              background: '#2B221A',
              color: '#FAEAD9',
              padding: '20px 24px',
              borderRadius: '8px',
              display: 'inline-block',
              fontWeight: '600',
              letterSpacing: '0.02em',
              fontSize: '1rem'
            }}>
              "We put real people into virtual spaces and then put out digital things in real spaces"
            </div>
          </div>
        </section>

        {/* SECTION 2: Architectural Philosophies / Quotes Grid */}
        <div className="animated-divider" />

        <section style={{ margin: '60px 0' }}>
          <div className="hero-quote-box">
            <p style={{ fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.5', margin: '0 0 8px 0', color: '#2B221A' }}>
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#C28247', textTransform: 'uppercase' }}>— Le Corbusier</span>
          </div>

          <div className="hero-quote-box" style={{ marginTop: '30px' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: '500', lineHeight: '1.5', margin: '0 0 8px 0', color: '#2B221A' }}>
              "As an Architect, you design for the present, with an awareness of the past for a future which is essentially unknown."
            </p>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#C28247', textTransform: 'uppercase' }}>— Norman Foster</span>
          </div>
        </section>

        {/* SECTION 3: Vision & Mission Layout Panel */}
        <section className="grid-two-column">
          
          {/* Vision Block */}
          <div className="vision-mission-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="material-icons" style={{ color: '#C28247', fontSize: '2rem' }}>visibility</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Our Vision</h2>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: '#4A3E34', margin: 0 }}>
              The Ar. Achiever platform will empower students with creativity and provide guidance for their professional excellence. We will offer opportunities for competitions, virtual learning, workshops, and more to build skills and confidence. Our goal is to create an imaginative and educative environment for students to prepare for the contemporary world. We promote sustainability, diversity, and innovation in Architectural design, drawing on years of research and practice. Our collaborative efforts focus on adaptability, critical inquiry, teamwork, and leadership. We are rooted in India's Architectural, Archaeological, Cultural heritage while embracing global developments. This platform prepares Architects to envision the future and create sustainable built environments.
            </p>
          </div>

          {/* Mission Block */}
          <div className="vision-mission-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="material-icons" style={{ color: '#C28247', fontSize: '2rem' }}>track_changes</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Our Mission</h2>
            </div>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: '#4A3E34', margin: 0 }}>
              The Ar. Achiever is committed to educate aspiring Architects with potential and practical education through responsible and student-centric teaching methods. India’s tradition of dedication, professionalism, and outstanding service reflects our mission to bring students' ideas to life with excellence. We strive to foster creativity, critical thinking, and innovative problem-solving, and promote ethical, global, and inclusive approaches to Architectural education. Our goal is to encourage and motivate Architects who can address climate change and global warming, and develop original ideas for the built environment. And with multiculturalism and inclusiveness, we would support lifelong learning for our students.
            </p>
          </div>

        </section>

        {/* SECTION 4: 01 to 04 Process Flow Chain Delivery Cards */}
        <div className="animated-divider" />

        <section style={{ marginTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 10px 0' }}>Our Core Approach Flow</h2>
            <p style={{ color: '#4A3E34', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
              A systematic structural chain driving ideas safely from core baseline identification to structural execution.
            </p>
          </div>

          <div className="process-chain-container">
            
            {/* Step 01: Client Needs */}
            <div className="process-step-card">
              <span className="step-number-indicator">01</span>
              <div className="icon-circle-badge">
                <span className="material-icons">groups</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 10px 0' }}>Client Needs</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#5C5045', margin: 0 }}>
                Understanding and addressing the needs of our clients is at the core of our approach.
              </p>
            </div>

            {/* Step 02: Analysis Context */}
            <div className="process-step-card">
              <span className="step-number-indicator">02</span>
              <div className="icon-circle-badge">
                <span className="material-icons">analytics</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 10px 0' }}>Analysis</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#5C5045', margin: 0 }}>
                Investigating environments, community contexts, site parameters, and regulatory conditions carefully.
              </p>
            </div>

            {/* Step 03: Direction Strategy */}
            <div className="process-step-card">
              <span className="step-number-indicator">03</span>
              <div className="icon-circle-badge">
                <span className="material-icons">explore</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 10px 0' }}>Direction</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#5C5045', margin: 0 }}>
                We follow the critical aspect of Architectural design that involves careful consideration of various factors.
              </p>
            </div>

            {/* Step 04: Form & Aesthetic Design */}
            <div className="process-step-card">
              <span className="step-number-indicator">04</span>
              <div className="icon-circle-badge">
                <span className="material-icons">architecture</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '0 0 10px 0' }}>Design</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#5C5045', margin: 0 }}>
                The creative process of conceiving and developing the form, function, and aesthetics of a building or space.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default About;