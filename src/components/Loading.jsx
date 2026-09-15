import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#222222] p-5 box-border">
      <div className="w-[90%] max-w-[800px] flex justify-center items-center">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[64%] h-auto block"
        >
          <path
            d="M 35,160 L 105,35 V 111"
            className="draw-path a-part1"
          />
          <path
            d="M 68,117 C 95,117 105,117 105,135 V 160"
            className="draw-path a-part2"
          />
          <path
            d={`
              M 115,160 
              V 60 
              H 165
              C 175,60 175,60.2 130,160 
              V 118
              A 30,35 0 0 1 171,160
            `}
            className="draw-path path-r"
          />
        </svg>

        <style jsx>{`
          .draw-path {
            fill: none;
            stroke: #a68b67;
            stroke-width: 2.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-cycle 7s ease-in-out infinite;
          }

          @keyframes draw-cycle {
            0%, 5% { stroke-dashoffset: 1000; }
            45%, 85% { stroke-dashoffset: 0; }
            95%, 100% { stroke-dashoffset: 1000; }
          }

          .a-part1 { animation-delay: 0s; }
          .a-part2 { animation-delay: 1s; }
          .path-r { animation-delay: 1.8s; }
        `}</style>
      </div>
    </div>
  );
};

export default Loading;
