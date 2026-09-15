import React, { useState } from 'react';

function Navbar() {
  const [ripples, setRipples] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Register', href: '/register' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '/contact' },
  ];

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
        className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#ebceb2] border-b border-[#2d2218]/20 shadow-md transition-all duration-300 relative overflow-hidden select-none"
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

        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between relative z-10">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/ar.png" 
              alt="AR Achiever Logo" 
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-lg lg:text-xl font-bold">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[#2d2218] hover:text-[#000000] transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#2d2218] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents ripple trigger duplication on menu button click
              toggleMobileMenu();
            }}
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-20"
            aria-label="Toggle Navigation Menu"
          >
            <span 
              className={`w-6 h-0.5 bg-[#2d2218] transition-all duration-300 transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-[#2d2218] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-[#2d2218] transition-all duration-300 transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        <div 
          className={`md:hidden bg-[#ebceb2] border-t border-[#2d2218]/10 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-3 px-6 text-left">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2d2218] text-lg font-bold hover:text-amber-800 transition-colors py-2 border-b border-[#2d2218]/10 last:border-b-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;