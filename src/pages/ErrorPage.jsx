import React from 'react';

const ErrorPage = () => {
  const handleRedirectHome = () => {
    window.location.href = '/';
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#FAEAD9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      boxSizing: 'border-box',
      fontFamily: '"DM Sans", system-ui, sans-serif',
      color: '#2B221A'
    }}>
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
      />

      <style>{`
        .error-card-wrapper {
          text-align: center;
          max-width: 480px;
          padding: 40px 24px;
          background: rgba(255, 255, 255, 0.4); /* Translucent container surface structure */
          backdrop-filter: blur(8px);
          border: 1px solid rgba(43, 34, 26, 0.1);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(43, 34, 26, 0.04);
        }
        .huge-error-code {
          font-size: 6.5rem;
          font-weight: 900;
          line-height: 1;
          color: #2B221A;
          margin: 0;
          letter-spacing: -0.04em;
        }
        .error-accent-line {
          width: 50px;
          height: 4px;
          background-color: #C28247;
          border-radius: 2px;
          margin: 16px auto 24px auto;
        }
        .home-redirect-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          background-color: #2B221A;
          color: #FAEAD9;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px rgba(43, 34, 26, 0.15);
        }
        .home-redirect-btn:hover {
          background-color: #4A3E34;
          box-shadow: 0 6px 20px rgba(43, 34, 26, 0.25);
        }
        .home-redirect-btn:active {
          transform: scale(0.98);
        }
        .icon-shift {
          font-size: 1.2rem;
          transition: transform 0.2s ease;
        }
        .home-redirect-btn:hover .icon-shift {
          transform: translateX(-2px); /* Subtle intuitive direction guidance shift */
        }
      `}</style>

      <div className="error-card-wrapper">
        <h1 className="huge-error-code">404</h1>
        
        <div className="error-accent-line"></div>

        <h2 style={{
          fontSize: '1.4rem',
          fontWeight: '800',
          margin: '0 0 12px 0',
          color: '#2B221A'
        }}>
          Lost in Space?
        </h2>

        <p style={{
          fontSize: '0.98rem',
          lineHeight: '1.6',
          color: '#5C5045',
          margin: '0 0 32px 0'
        }}>
          The path you are looking for does not exist or has been shifted to another structural coordinate layout framework. Let's get you back on track.
        </p>
        <button onClick={handleRedirectHome} className="home-redirect-btn">
          <span className="material-icons icon-shift">corporate_fare</span>
          Back To Home
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;