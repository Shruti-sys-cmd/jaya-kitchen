/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 100 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Red Circle */}
        <circle cx="100" cy="115" r="80" stroke="#D32F2F" strokeWidth="8" fill="white" />
        
        {/* Chef Hat Top */}
        <path
          d="M60 65C60 45 75 35 100 35C125 35 140 45 140 65L140 75L60 75L60 65Z"
          fill="white"
          stroke="#D32F2F"
          strokeWidth="6"
        />
        <path
          d="M70 45C65 25 85 15 100 15C115 15 135 25 130 45"
          fill="white"
          stroke="#D32F2F"
          strokeWidth="6"
        />

        {/* Utensils in Hat (Simplified for Clarity) */}
        <g stroke="#1976D2" strokeWidth="3" strokeLinecap="round">
          {/* Fork */}
          <path d="M85 60L85 40" />
          <path d="M82 40V45M85 40V45M88 40V45" />
          {/* Knife */}
          <path d="M100 60L100 40" />
          {/* Spoon */}
          <path d="M115 60L115 40" />
          <ellipse cx="115" cy="40" rx="4" ry="6" fill="#1976D2" />
        </g>

        {/* Flame */}
        <path
          d="M100 85C100 85 105 92 105 100C105 108 100 115 100 115C100 115 95 108 95 100C95 92 100 85 100 85Z"
          fill="#D32F2F"
        />

        {/* Crossed Spatulas */}
        <g stroke="#1976D2" strokeWidth="6" strokeLinecap="round">
          {/* Spatula 1 */}
          <line x1="60" y1="100" x2="140" y2="140" />
          <rect x="50" y="90" width="20" height="25" rx="2" fill="#1976D2" transform="rotate(-15 60 102)" />
          {/* Spatula 2 */}
          <line x1="140" y1="100" x2="60" y2="140" />
          <rect x="130" y="90" width="20" height="25" rx="2" fill="#1976D2" transform="rotate(15 140 102)" />
        </g>

        {/* Arabic Text (Simplified approximation of 'مطبخ جايا') */}
        <text
          x="100"
          y="155"
          textAnchor="middle"
          fill="#1976D2"
          fontSize="14"
          fontWeight="bold"
          fontFamily="system-ui"
        >
          مطبخ جايا
        </text>

        {/* English Text */}
        <text
          x="100"
          y="175"
          textAnchor="middle"
          fill="#D32F2F"
          fontSize="16"
          fontWeight="900"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.05em"
        >
          JAYA'S KITCHEN
        </text>
      </svg>
    </div>
  );
};
