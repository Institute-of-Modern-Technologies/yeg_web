'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionTransition from './SectionTransition';

// Base set of logos - we'll duplicate them in the component for a seamless marquee
const LOGOS = [
  { src: '/images/logo1.png', alt: 'Partner 1' },
  { src: '/images/logo2.png', alt: 'Partner 2' },
  { src: '/images/logo3.png', alt: 'Partner 3' },
  { src: '/images/logo4.png', alt: 'Partner 4' },
  { src: '/images/logo5.png', alt: 'Partner 5' },
  { src: '/images/logo6.png', alt: 'Partner 6' },
];

export default function PartnersSection() {
  // No longer using refs or manual JavaScript animation
  // We'll use pure CSS for the smoothest possible animation
  
  // Define two animation speeds - one for normal and one for hover
  const animationDuration = 30; // seconds to complete one full cycle

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden z-20">
        <SectionTransition
          fromColor="white"
          toColor="white"
          accentColor="#00FFFF"
          variant="wave"
          flipY={true}
          className="animate-morph-in"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#2a1e5c]">
            Partnered  <span className="text-orange-500">Schools</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Join us at these exciting upcoming events with our valued partners
          </p>
        </div>
        
        {/* CSS-based marquee that never stops */}
        <div className="relative overflow-hidden py-6 px-2">
          {/* Gradient fade effect on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Logo marquee with true infinite animation */}
          <div className="relative overflow-hidden py-4 px-0">
            <style jsx>{`
              .marquee-container {
                display: flex;
                overflow: hidden;
                user-select: none;
                gap: 2rem;
              }
              
              .marquee-content {
                flex-shrink: 0;
                display: flex;
                justify-content: space-around;
                gap: 4rem;
                min-width: 100%;
                animation: scroll ${animationDuration}s linear infinite;
              }
              
              @keyframes scroll {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-100% - 4rem)); }
              }
              
              /* Pause on hover */
              .marquee-container:hover .marquee-content {
                animation-play-state: paused;
              }
              
              .partner-logo {
                transition: all 0.3s ease;
              }
              
              .partner-logo:hover {
                transform: scale(1.1);
              }
            `}</style>
            
            <div className="marquee-container">
              {/* First set of logos */}
              <div className="marquee-content">
                {LOGOS.map((logo, index) => (
                  <div 
                    key={index} 
                    className="partner-logo flex items-center justify-center w-32 h-24 px-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={80}
                      className="object-contain max-h-20 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set of logos for seamless looping */}
              <div className="marquee-content">
                {LOGOS.map((logo, index) => (
                  <div 
                    key={`duplicate-${index}`} 
                    className="partner-logo flex items-center justify-center w-32 h-24 px-4"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={80}
                      className="object-contain max-h-20 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-1px)] overflow-hidden z-20">
        <SectionTransition
          fromColor="white"
          toColor="white"
          accentColor="#950713"
          variant="stairs"
          className="z-10"
        />
      </div>
    </section>
  );
}
