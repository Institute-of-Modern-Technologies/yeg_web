import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
}

export default function FeatureCard({ icon, title, subtitle, link }: FeatureCardProps) {
  return (
    <Link 
      href={link}
      className="group flex flex-col items-center justify-center text-center p-5 bg-gradient-to-b from-[#2d3748]/70 to-[#1e2a3b]/80 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-500 hover:border-blue-400/60 hover:scale-105 h-44 w-44 mx-auto shadow-lg relative overflow-hidden hover:animate-thunderShake"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b4a64]/80 via-[#2d3748]/90 to-[#1e293b]/90 opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>
      
      {/* Lightning effect on hover */}
      <div className="absolute inset-0 bg-blue-200/20 opacity-0 group-hover:animate-realLightning"></div>
      
      {/* Zigzag lightning */}
      <div className="absolute top-0 left-2/3 w-1 h-full opacity-0 group-hover:animate-realLightning">
        <svg viewBox="0 0 10 100" className="w-full h-full">
          <path d="M5,0 L3,20 L7,25 L2,50 L6,55 L1,100" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* Rain droplets */}
      <div className="rain-container absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-blue-200/30 w-[1px] h-[8px] animate-rainDrop" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `-${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="text-blue-300 mb-3 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-white flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }}>
          {icon}
        </div>
        <h3 className="text-white text-base font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-tight">{subtitle}</p>
      </div>
    </Link>
  );
}

export function FeatureSection() {
  return (
    <section className="bg-gradient-to-b from-[#1f2937] via-[#1a202c] to-[#111827] py-16 relative overflow-hidden animate-thunderShake">
      {/* Stormy cloud background with realistic lightning effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Main cloud formations */}
        <div className="absolute -top-20 left-20 w-80 h-40 bg-[#2d3748] rounded-full filter blur-3xl opacity-40 animate-cloudMove"></div>
        <div className="absolute -top-40 right-40 w-96 h-60 bg-[#1e293b] rounded-full filter blur-3xl opacity-50 animate-cloudMove"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-[#4a5568]/40 rounded-full filter blur-3xl opacity-30 animate-cloudMove"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-40 bg-[#2d3748]/30 rounded-full filter blur-3xl opacity-40 animate-cloudMove"></div>

        {/* Lightning flash overlay */}
        <div className="absolute inset-0 bg-blue-200/30 animate-realLightning"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-blue-500/5 to-blue-700/10 animate-thunderGlow"></div>
        
        {/* Lightning bolts - zigzag paths */}
        <div className="absolute top-0 left-1/4 w-2 h-full opacity-0 animate-realLightning">
          <svg viewBox="0 0 20 200" className="w-full h-full">
            <path d="M10,0 L8,40 L15,45 L5,100 L12,105 L2,200" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
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
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl font-bold text-white mb-3 relative">
            Our <span className="text-orange-400">Stages</span>
            <div className="absolute h-1 w-full bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 bottom-0 left-0"></div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Follow our proven pathway to success through these key stages</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
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
        
        <div className="text-center max-w-3xl mx-auto mt-12 mb-4 px-6 py-8 bg-gradient-to-br from-[#2d3748]/90 to-[#1e293b]/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500 group-hover:animate-thunderShake">
          {/* Stormy background effects */}
          <div className="absolute -top-20 -right-20 w-60 h-40 bg-[#4a5568]/30 rounded-full filter blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-40 bg-[#4a5568]/30 rounded-full filter blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
          
          {/* Lightning flash effects */}
          <div className="absolute inset-0 bg-blue-200/30 opacity-0 group-hover:animate-realLightning"></div>
          
          {/* Lightning bolt zigzag */}
          <div className="absolute top-0 left-1/3 w-2 h-full opacity-0 group-hover:animate-realLightning">
            <svg viewBox="0 0 20 200" className="w-full h-full">
              <path d="M10,0 L8,40 L15,45 L5,100 L12,105 L2,200" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          
          {/* Rain animation */}
          <div className="rain-container absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {Array.from({ length: 20 }).map((_, i) => (
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
          
          <div className="relative z-10">
            <div className="mb-5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 font-bold text-2xl sm:text-3xl tracking-wide">YOU ARE WELCOME TO </span>
              <span className="text-4xl sm:text-5xl font-extrabold inline-flex items-center justify-center ml-1 relative">
                <span className="text-red-400 drop-shadow-lg relative z-20 transform transition-transform duration-500 hover:scale-110">Y</span>
                <span className="text-yellow-400 drop-shadow-lg relative z-20 transform transition-transform duration-500 hover:scale-110">E</span>
                <span className="text-cyan-400 drop-shadow-lg relative z-20 transform transition-transform duration-500 hover:scale-110">G</span>
                <span className="absolute inset-0 bg-white/5 blur-xl rounded-full -z-10"></span>
              </span>
            </div>
            <h1 className="text-white font-bold text-2xl sm:text-3xl leading-tight mt-4 max-w-2xl mx-auto">
              Equipping young minds with skills in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 hover:from-orange-300 hover:to-orange-200 transition-all duration-300"> Technology</span>,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300"> Entrepreneurship</span>, and
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-300"> Creativity</span>.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}