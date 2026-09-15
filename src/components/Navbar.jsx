import React, { useState } from 'react';

function Navbar() {
  const [ripples, setRipples] = useState([]);

  const handleNavClick = (e) => {
    const header = e.currentTarget;
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <>
      {/* Self-contained Keyframe Animations so no tailwind.config setup is required */}
      <style>{`
        @keyframes rippleExpand {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.5;
          }
          100% {
            width: 1500px;
            height: 1500px;
            opacity: 0;
          }
        }
        .ripple-effect {
          animation: rippleExpand 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
      `}</style>

      <header 
        onClick={handleNavClick}
        /* Darkened background to #ebceb2 for clear contrast against #faead9 homepage */
        className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#ebceb2] border-b border-[#2d2218]/20 shadow-md transition-all duration-300 relative overflow-hidden select-none cursor-pointer"
      >
        {/* Visible Ripple Wave Layer */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-[#3a2818]/15 pointer-events-none ripple-effect -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
            }}
          />
        ))}

        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between relative z-10">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/ar.png" 
              alt="AR Achiever Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-10 text-xl font-bold">
            <a 
              href="/" 
              className="text-[#2d2218] hover:text-[#000000] transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#2d2218] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-[#2d2218] hover:text-[#000000] transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#2d2218] hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>
            <a 
              href="/register" 
              className="text-[#2d2218] hover:text-[#000000] transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#2d2218] hover:after:w-full after:transition-all after:duration-300"
            >
              Register
            </a>
            <a 
              href="/courses" 
              className="text-[#2d2218] hover:text-[#000000] transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#2d2218] hover:after:w-full after:transition-all after:duration-300"
            >
              Courses
            </a>
            <a 
              href="/contact" 
              className="text-[#2d2218] hover:text-[#000000] transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#2d2218] hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </div>

        </nav>
      </header>
    </>
  );
}

export default Navbar;