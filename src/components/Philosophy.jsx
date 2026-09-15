import React, { useState, useEffect } from 'react';

export default function Philosophy() {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "The Elegant Truth",
      quote: "Simplicity is the ultimate sophistication in Architecture.",
      author: "Nari Gandhi"
    },
    {
      title: "Breaking the Rules",
      quote: "If you want freedom, break away from all the rules – Forget history books.",
      author: "B.V. Doshi"
    },
    {
      title: "Less is More",
      quote: "Minimalism isn't the lack of something. It's simply the perfect amount of it.",
      author: "Mies van der Rohe"
    },
    {
      title: "The Architecture of Time",
      quote: "We design frameworks for the present, with an acute awareness of the future.",
      author: "Modernist Philosophy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhilosophy((prev) => (prev + 1) % philosophies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [philosophies.length]);

  return (
    <div className="relative w-full max-w-[380px] h-[240px] flex items-center justify-center">
      {philosophies.map((item, index) => {
        // Architectural right-to-left animation positioning matrix
        let position = "translate-x-full opacity-0 pointer-events-none";
        if (index === activePhilosophy) {
          position = "translate-x-0 opacity-100 z-10 scale-100";
        } else if (
          index === activePhilosophy - 1 || 
          (activePhilosophy === 0 && index === philosophies.length - 1)
        ) {
          position = "-translate-x-full opacity-0 pointer-events-none";
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 bg-[#f4eee3] p-8 border border-[#e8dfd3] shadow-md flex flex-col justify-between text-left transition-all duration-700 ease-in-out transform ${position}`}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-normal text-[#1a1512] tracking-wide leading-snug">
                {item.title}
              </h3>
              <p className="text-[#5c5047] text-sm font-light italic leading-relaxed">
                "{item.quote}"
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-[#e8dfd3]/60 pt-3">
              <span className="text-sm font-mono text-[#a39485]">— {item.author}</span>
              <div className="flex space-x-1.5">
                {philosophies.map((_, dotIdx) => (
                  <span 
                    key={dotIdx} 
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === activePhilosophy ? 'bg-amber-600 w-3' : 'bg-[#d6cbbe]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}