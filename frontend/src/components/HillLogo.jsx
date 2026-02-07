import React from 'react';

const HillLogo = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hill Logo"
    >
      {/* Small mountain range - outline only */}
      <path 
        d="M 10 70 L 25 50 L 35 60 L 50 35 L 65 55 L 75 45 L 90 70 Z" 
        stroke={color} 
        strokeWidth="2.5" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base line */}
      <line 
        x1="10" 
        y1="70" 
        x2="90" 
        y2="70" 
        stroke={color} 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HillLogo;
