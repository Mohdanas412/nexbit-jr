import React from "react";

// Nexbit Jr mascot: a friendly spark robot
export default function Mascot({ className = "w-40 h-40" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nexbit Jr mascot"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(142 70% 45%)" />
          <stop offset="100%" stopColor="hsl(201 94% 47%)" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(45 98% 55%)" />
          <stop offset="100%" stopColor="hsl(45 98% 50%)" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" r="90" fill="url(#g1)" opacity="0.15" />
      <rect x="45" y="60" rx="22" width="130" height="90" fill="url(#g1)" />
      <rect x="58" y="75" rx="14" width="104" height="60" fill="white" />
      <circle cx="90" cy="105" r="12" fill="hsl(201 94% 47%)" />
      <circle cx="130" cy="105" r="12" fill="hsl(201 94% 47%)" />
      <circle cx="90" cy="105" r="6" fill="white" />
      <circle cx="130" cy="105" r="6" fill="white" />
      <rect x="90" y="132" width="40" height="6" rx="3" fill="hsl(142 70% 40%)" />
      <path d="M110 35 l8 16 h-16 z" fill="url(#g2)" />
      <circle cx="110" cy="35" r="6" fill="url(#g2)" />
      <g>
        <path d="M42 115 l-20 -8" stroke="hsl(45 98% 51%)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M178 115 l20 -8" stroke="hsl(45 98% 51%)" strokeWidth="6" strokeLinecap="round"/>
      </g>
      <rect x="70" y="155" width="80" height="16" rx="8" fill="hsl(45 98% 51%)" opacity="0.8" />
    </svg>
  );
}
