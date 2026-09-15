import React from 'react';
import Philosophy from '../components/Philosophy';

export default function Homepage() {
  const services = [
    {
      id: "01",
      title: "Competitions",
      desc: "Showcase your design philosophy. Compete with global minds to test your creativity, spatial skills, and practical execution.",
      tag: "Design Briefs",
      accent: "from-amber-500/10 to-transparent"
    },
    {
      id: "02",
      title: "Interactive Quizzes",
      desc: "Fast-paced, highly visual assessments designed to reinforce architectural history, structures, and material specifications.",
      tag: "Live Gamified",
      accent: "from-stone-500/10 to-transparent"
    },
    {
      id: "03",
      title: "Archiverse",
      desc: "Step into the future. Explore the structural frameworks, virtual worlds, and universe creations built for digital spaces.",
      tag: "Virtual Reality",
      accent: "from-amber-600/15 to-transparent"
    },
    {
      id: "04",
      title: "Premium Courses",
      desc: "Bridge the gap between theoretical academia and industry execution with tech-driven architectural modules.",
      tag: "Practical Learning",
      accent: "from-orange-500/10 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faead9] text-[#2c2621] font-sans selection:bg-amber-100 selection:text-amber-900 antialiased overflow-x-hidden relative">
      
      {/* 3D Blueprint Ambient Engine Styles */}
      <style>{`
        /* 3D Viewport Matrix Setup */
        .perspective-stage {
          perspective: 1200px;
          perspective-origin: 50% 40%;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        /* Blueprint Isometric Grid Overlay */
        .architectural-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(194, 130, 71, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(194, 130, 71, 0.07) 1px, transparent 1px);
        }

        /* Continuous 3D Spatial Motion */
        @keyframes floatStructural {
          0%, 100% {
            transform: translateY(0px) rotateX(8deg) rotateY(-8deg) translateZ(0px);
          }
          50% {
            transform: translateY(-18px) rotateX(14deg) rotateY(-3deg) translateZ(25px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }

        .animate-3d-stage {
          animation: floatStructural 8s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: pulseGlow 6s ease-in-out infinite;
        }

        .animate-scan {
          animation: scanline 8s linear infinite;
        }

        /* Advanced Glass Card 3D Depth Lift */
        .card-3d-architect {
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      border-color 0.4s ease;
          transform: translateZ(0px);
        }

        .card-3d-architect:hover {
          transform: translateY(-12px) rotateX(6deg) rotateY(-4deg) translateZ(30px);
          box-shadow: 
            -20px 25px 40px -15px rgba(43, 34, 26, 0.12),
            0 0 25px rgba(194, 130, 71, 0.15);
        }

        .card-3d-architect .depth-layer-1 {
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .card-3d-architect:hover .depth-layer-1 {
          transform: translateZ(25px);
        }

        /* Structural Border Line Beam */
        .beam-hover-effect {
          position: relative;
          overflow: hidden;
        }
        .beam-hover-effect::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #c28247, transparent);
          transition: left 0.7s ease;
        }
        .beam-hover-effect:hover::after {
          left: 100%;
        }
      `}</style>

      {/* Blueprint Grid Canvas Overlay */}
      <div className="absolute inset-0 architectural-grid pointer-events-none z-0 opacity-80" />

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20 lg:pt-28 lg:pb-36 perspective-stage">
        
        {/* Background Ambient Light Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/40 to-stone-300/20 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center preserve-3d">
          
          {/* Hero Left Content */}
          <div className="w-full lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-8 text-left preserve-3d">
            
            <div className="flex items-center space-x-3 border-l-2 border-amber-600 pl-3.5 py-0.5 backdrop-blur-sm bg-[#faead9]/50">
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#8c7e72] font-bold">  
                The Ar Achiever // Academy &amp; Labs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-normal tracking-tight text-[#1a1512] leading-[1.12]">
              Bridging the gap between <br />
              <span className="font-light italic text-[#6b5f55]">Theory</span> and <span className="text-amber-600 font-medium">Execution.</span>
            </h1>

            <p className="text-[#5c5047] text-base sm:text-lg max-w-xl font-light leading-relaxed">
              An advanced pedagogical platform built for next-generation architects. Master spatial design mechanics, engage in global structural challenges, and build immersive realities within the digital frontier.
            </p>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-5 pt-4 preserve-3d">
              <a 
                href="#services" 
                className="beam-hover-effect group relative inline-flex items-center justify-center px-8 py-4 bg-[#1a1512] text-[#faf6f0] font-medium uppercase tracking-widest text-[11px] transition-all duration-300 hover:bg-amber-600 hover:text-[#1a1512] shadow-lg hover:shadow-amber-600/25 border border-amber-900/20"
              >
                <span>Enter Ecosystem</span>
                <svg className="w-4 h-4 ml-3 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>

              <a 
                href="#explore" 
                className="inline-flex items-center justify-center px-8 py-4 border border-[#d6cbbe] hover:border-[#1a1512] text-[#4a3e35] hover:text-[#1a1512] font-medium uppercase tracking-widest text-[11px] transition-all duration-300 bg-[#faead9]/90 backdrop-blur-md shadow-sm hover:shadow-md"
              >
                Launch Archiverse
              </a>
            </div>
          </div>        

          {/* Hero Right Content - 3D Architectural Floating Stage */}
          <div className="w-full lg:col-span-5 flex justify-center lg:justify-end py-4 preserve-3d">
            <div className="relative w-full max-w-md preserve-3d">
              
              {/* Wireframe Underlay Plate */}
              <div className="absolute -inset-4 border border-amber-600/20 rounded-2xl transform rotate-3 translate-z-[-20px] pointer-events-none" />
              
              {/* Scanline Beam Pass */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent h-20 w-full pointer-events-none animate-scan z-20 rounded-xl" />

              {/* Dynamic Animated Glass Frame */}
              <div className="animate-3d-stage preserve-3d w-full shadow-2xl rounded-2xl border border-white/60 bg-[#f4eee3]/80 backdrop-blur-xl p-3 relative z-10">
                <Philosophy />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28 space-y-12 lg:space-y-16 perspective-stage">
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-[#e8dfd3] pb-6">
          <div className="space-y-2 text-left">
            <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-amber-700 font-semibold">Core Architecture Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1a1512] tracking-tight">What We Build &amp; Deliver</h2>
          </div>
          <div className="lg:max-w-md text-left">
            <p className="text-[#5c5047] font-light text-sm sm:text-base leading-relaxed">
              From gamified assessment frameworks to high-tier creative design hackathons, explore how we redefine digital architecture learning.
            </p>
          </div>
        </div>

        {/* Bento Grid with 3D Depth Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 preserve-3d">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="card-3d-architect beam-hover-effect preserve-3d group relative bg-[#f4eee3]/80 p-8 lg:p-10 flex flex-col justify-between items-start text-left border border-[#e8dfd3] rounded-xl backdrop-blur-md overflow-hidden"
            >
              {/* Ambient Hover Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Card Header Layer */}
              <div className="w-full flex items-center justify-between preserve-3d depth-layer-1">
                <span className="text-[10px] font-mono px-3 py-1 bg-[#faf6f0] text-amber-900 font-semibold tracking-wider border border-[#e8dfd3] rounded-sm shadow-sm">
                  {item.tag}
                </span>
                <span className="text-4xl font-serif font-light text-[#d6cbbe] group-hover:text-amber-600 transition-colors duration-400">
                  {item.id}
                </span>
              </div>
              
              {/* Content Body Layer */}
              <div className="mt-10 lg:mt-14 space-y-3 preserve-3d depth-layer-1">
                <h3 className="text-xl sm:text-2xl font-serif text-[#1a1512] font-normal tracking-wide group-hover:text-amber-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#5c5047] text-sm sm:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Footer Layer */}
              <div className="mt-8 pt-4 w-full border-t border-[#e8dfd3]/60 flex justify-end preserve-3d depth-layer-1">
                <span className="text-[11px] uppercase tracking-widest text-amber-700 font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1 cursor-pointer">
                  Explore Hub <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}