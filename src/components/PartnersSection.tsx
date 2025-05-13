'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LOGOS = [
  { src: '/images/logo1.png', alt: 'Partner 1' },
  { src: '/images/logo2.png', alt: 'Partner 2' },
  { src: '/images/logo3.png', alt: 'Partner 3' },
  { src: '/images/logo4.png', alt: 'Partner 4' },
  { src: '/images/logo5.png', alt: 'Partner 5' },
  { src: '/images/logo6.png', alt: 'Partner 6' },
  // Duplicate logos to create a seamless loop effect
  { src: '/images/logo1.png', alt: 'Partner 1' },
  { src: '/images/logo2.png', alt: 'Partner 2' },
  { src: '/images/logo3.png', alt: 'Partner 3' },
];

export default function PartnersSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateMarquee = () => {
      if (marqueeRef.current) {
        if (marqueeRef.current.scrollLeft >= marqueeRef.current.scrollWidth / 2) {
          marqueeRef.current.scrollLeft = 0;
        } else {
          marqueeRef.current.scrollLeft += 1;
        }
      }
      requestAnimationFrame(animateMarquee);
    };

    const animation = requestAnimationFrame(animateMarquee);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-12 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#2a1e5c]">
            Partnered with <span className="text-orange-500">Upcoming Events</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Join us at these exciting upcoming events with our valued partners
          </p>
        </div>
        
        <div className="relative overflow-hidden py-6 px-2">
          {/* Gradient fade effect on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Logo marquee */}
          <div 
            ref={marqueeRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-16 py-4 px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-16 min-w-max">
              {LOGOS.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center w-32 h-24 px-4 transition-all duration-300 hover:scale-110"
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
    </section>
  );
}
