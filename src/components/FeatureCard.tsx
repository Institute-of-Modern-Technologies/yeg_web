"use client";

import React from 'react';
import Link from 'next/link';
import SectionTransition from './SectionTransition';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
}

export default function FeatureCard({ icon, title, subtitle, link }: FeatureCardProps) {
  return (
    <Link 
      href={link.startsWith('#') ? link : '#'}
      onClick={link.startsWith('#') ? undefined : (e) => e.preventDefault()}
      className="group flex flex-col items-center justify-center text-center p-5 bg-white border-2 border-[#950713] rounded-xl transition-all duration-500 hover:border-[#FF00FF]/80 hover:scale-105 h-44 w-44 mx-auto shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white opacity-100 group-hover:opacity-95 transition-opacity duration-500"></div>
      
      {/* Soft glow effect on hover */}
      <div className="absolute inset-0 bg-[#FF00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="text-[#950713] mb-3 transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.3))' }}>
          {icon}
        </div>
        <h3 className="text-[#950713] text-base font-bold mb-2">{title}</h3>
        <p className="text-[#950713] text-sm leading-tight">{subtitle}</p>
      </div>
    </Link>
  );
}

export function FeatureSection() {
  return (
    <section id="features" className="py-16 relative overflow-hidden z-10">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden">
        <SectionTransition
          fromColor="white"
          toColor="white"
          accentColor="#00FFFF"
          variant="blob"
          flipY={true}
        />
      </div>
      
      <div className="absolute inset-0 bg-[#FFFFFF] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Subtle decorative elements */}
        <div className="absolute -top-20 left-20 w-80 h-40 bg-[#FF00FF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-40 right-40 w-96 h-60 bg-[#FF00FF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-[#00FFFF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-40 bg-[#FFFF00]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-2 h-full opacity-0 animate-realLightning delay-300">
          <svg viewBox="0 0 20 200" className="w-full h-full">
            <path d="M10,0 L14,50 L5,55 L16,120 L8,125 L18,200" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        
        {/* Rain animation */}
        <div className="rain-container absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-blue-200/30 w-[1px] h-[10px] animate-rainDrop" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `-${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.8 + Math.random() * 0.6}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#950713] bg-[#FFFFFF]/100 rounded-xl px-4 py-2 text-4xl font-bold  relative inline-block">
            <span className="relative z-10">Our Stages</span>
            {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF00FF]/80 rounded-full"></span> */}
            {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF00FF] rounded-full opacity-50"></span> */}
          </h2>
          <p className="text-[#950713] max-w-lg mx-auto">Follow our proven pathway to success through these key stages</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#950713">
              <path d="M8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1c-2.1 0-3.8.4-5 1.2-1.2.8-2 2-2 3.8v4c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-4c0-1.8-.8-3-2-3.8-1.2-.8-2.9-1.2-5-1.2zm9-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 7c1.6 0 3.1.4 4 1 .9.6 1 1.2 1 2v3.5c0 .3-.2.5-.5.5h-3V12c0-1-.2-1.9-.6-2.7-.3-.8-.8-1.4-1.5-2 .2 0 .4-.1.6-.1z" />
            </svg>
          }
          title="Discover"
          subtitle="Transforming Ideas into Innovation."
          link="/community"
          
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 6v2h20V6L12 2zm0 2.25l5.87 2.44H6.13L12 4.25zM2 9v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2zm4 8H4v-6h2v6zm4 0H8v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6z" />
            </svg>
          }
          title="Build"
          subtitle="Crafting the Next Big Thing."
          link="/academics"
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          }
          title="Mastery"
          subtitle="Where Skill Meets Innovation."
          link="/admission"
        />
        {/* <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          }
          title="Activities"
          subtitle="Support academic program."
          link="/activities"
        /> */}

        </div>
      </div>
    </section>
  );
}