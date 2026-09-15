import React, { useState, useEffect } from 'react';

// SET YOUR TARGET COUNTDOWN DATE & TIME HERE
const TARGET_DATE = new Date("2026-05-21T00:00:00").getTime();

export default function UnderMaintenance() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isOver: true }));
        return;
      }

      // Proportional calculation for standard time segments
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds, isOver: false });
    };

    // Run immediately and set up tick interval
    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to format single digits with a leading zero for alignment symmetry
  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#faead9] text-[#2c2621] font-sans antialiased flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Structural Outer Frame Accent */}
      <div className="absolute inset-8 border border-[#e8dfd3] pointer-events-none hidden sm:block"></div>

      <div className="w-full max-w-xl text-center space-y-10 z-10">
        
        {/* Studio Status Identifier */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-3 bg-[#f4eee3] border border-[#e8dfd3] px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6b5f55] font-medium">
              System Operations // Under Maintenance
            </span>
          </div>
        </div>

        {/* Editorial Heading Block */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#1a1512] tracking-tight leading-tight">
            Refining the <span className="font-normal italic text-amber-600 font-sans">Framework</span>.
          </h1>
          <p className="text-[#5c5047] text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
            The Ar Achiever ecosystem is currently undergoing scheduled platform upgrades to introduce advanced architectural sandboxes.
          </p>
        </div>

        {/* Conditional Layout Switching based on Timer Expiry */}
        {!timeLeft.isOver ? (
          /* COUNTDOWN TIMEFRAME DISPLAY */
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto pt-4">
            <div className="bg-[#f4eee3] p-4 border border-[#e8dfd3] shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-serif font-light text-[#1a1512]">
                {formatNum(timeLeft.hours)}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a39485] mt-1">Hours</span>
            </div>
            
            <div className="bg-[#f4eee3] p-4 border border-[#e8dfd3] shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-serif font-light text-[#1a1512]">
                {formatNum(timeLeft.minutes)}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a39485] mt-1">Mins</span>
            </div>
            
            <div className="bg-[#f4eee3] p-4 border border-[#e8dfd3] shadow-sm flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-serif font-light text-[#1a1512]">
                {formatNum(timeLeft.seconds)}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a39485] mt-1">Secs</span>
            </div>
          </div>
        ) : (
          /* POST-COUNTDOWN FALLBACK DISPLAY */
          <div className="pt-4 transition-all duration-500 animate-fadeIn">
            <div className="bg-[#f4eee3] px-8 py-5 border border-[#e8dfd3] shadow-sm max-w-sm mx-auto">
              <p className="text-sm font-mono uppercase tracking-widest text-amber-700 font-semibold">
                Deployment Complete
              </p>
              <h3 className="text-lg font-serif text-[#1a1512] mt-1">
                The website will be online soon.
              </h3>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}