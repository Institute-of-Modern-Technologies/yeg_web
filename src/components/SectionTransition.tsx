"use client";

import { useEffect, useRef } from 'react';

type SectionTransitionProps = {
  fromColor: string;
  toColor: string;
  variant?: 'wave' | 'blob' | 'geometric' | 'diagonal' | 'curve' | 'zigzag' | 'stairs';
  accentColor?: string;  // Secondary accent color for dual-color effects
  flipX?: boolean;
  flipY?: boolean;
  height?: string;  // Custom height for the transition
  animate?: boolean; // Whether to animate the transition
  className?: string;
};

export default function SectionTransition({
  fromColor,
  toColor,
  variant = 'wave',
  accentColor,
  flipX = false,
  flipY = false,
  height,
  animate = true,
  className = ''
}: SectionTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (transitionRef.current) {
      observer.observe(transitionRef.current);
    }
    
    return () => {
      if (transitionRef.current) {
        observer.unobserve(transitionRef.current);
      }
    };
  }, []);
  
  const renderTransition = () => {
    const transform = `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`;
    const defaultHeight = {
      'wave': 'h-24',
      'blob': 'h-32',
      'geometric': 'h-28',
      'diagonal': 'h-24',
      'curve': 'h-28',
      'zigzag': 'h-20',
      'stairs': 'h-16'
    };
    
    const heightClass = height || defaultHeight[variant] || 'h-24';
    const animationClass = animate ? 'animate-morph-in' : '';
    const accent = accentColor || (toColor === '#950713' ? '#00FFFF' : '#950713');
    
    switch(variant) {
      case 'wave':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="absolute -bottom-px left-0 block h-full w-[300%] rotate-180 transform"
            >
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill={toColor}
                className="morph-path transition-all duration-1000 ease-in-out animate-path-morph"
              />
              {accentColor && (
                <path 
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  fill={accent}
                  opacity="0.3"
                  className="morph-path transition-all duration-1000 ease-in-out"
                  transform="translate(100, 10) scale(0.9)"
                />
              )}
            </svg>
            <div className="absolute inset-0" style={{ backgroundColor: fromColor }}></div>
          </div>
        );
      
      case 'blob':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg 
              viewBox="0 0 900 100" 
              className="absolute -bottom-px left-0 block h-full w-full"
            >
              <path 
                d="M0,50 C150,150 350,-50 500,50 C650,150 850,-50 900,50 L900,100 L0,100 Z" 
                fill={toColor}
                className="morph-path transition-all duration-1000 ease-in-out animate-path-morph"
              />
              {accentColor && (
                <path 
                  d="M0,60 C180,20 400,120 550,40 C700,0 800,80 900,30 L900,100 L0,100 Z" 
                  fill={accent}
                  opacity="0.2"
                  className="morph-path transition-all duration-1000 ease-in-out delay-300"
                />
              )}
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ backgroundColor: fromColor }}></div>
          </div>
        );
      
      case 'geometric':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg 
              viewBox="0 0 1440 100" 
              className="absolute -bottom-px left-0 block h-full w-full"
            >
              <path 
                d="M0,0 L60,10 L120,0 L180,30 L240,10 L300,50 L360,30 L420,70 L480,40 L540,90 L600,50 L660,90 L720,70 L780,90 L840,60 L900,90 L960,80 L1020,90 L1080,60 L1140,70 L1200,30 L1260,70 L1320,30 L1380,60 L1440,0 L1440,100 L0,100 Z" 
                fill={toColor}
                className="morph-path transition-all duration-1000 ease-in-out"
              />
              {accentColor && (
                <path 
                  d="M0,30 L60,70 L120,30 L180,50 L240,20 L300,60 L360,20 L420,40 L480,10 L540,60 L600,30 L660,70 L720,20 L780,80 L840,30 L900,60 L960,20 L1020,40 L1080,10 L1140,50 L1200,20 L1260,90 L1320,60 L1380,40 L1440,10 L1440,100 L0,100 Z" 
                  fill={accent}
                  opacity="0.15"
                  className="morph-path transition-all duration-1000 ease-in-out delay-200"
                />
              )}
            </svg>
            <div className="absolute inset-0" style={{ backgroundColor: fromColor }}></div>
          </div>
        );
      
      case 'diagonal':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="absolute bottom-0 left-0 h-full w-full"
            >
              <polygon 
                points="0,0 100,100 0,100" 
                fill={toColor}
                className="morph-path transition-all duration-1000 ease-in-out"
              />
              <polygon 
                points="100,0 100,100 0,100" 
                fill={accentColor || fromColor}
                opacity="0.3"
                className="morph-path transition-all duration-1000 ease-in-out delay-200"
              />
            </svg>
          </div>
        );
        
      case 'curve':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-full"
            >
              <path
                d="M0,100 C240,200 480,0 720,100 C960,200 1200,0 1440,100 L1440,200 L0,200 Z"
                fill={toColor}
                className="morph-path transition-all duration-1500 ease-in-out"
              />
              {accentColor && (
                <path
                  d="M0,150 C360,50 720,200 1080,100 C1260,50 1350,100 1440,80 L1440,200 L0,200 Z"
                  fill={accent}
                  opacity="0.2"
                  className="morph-path transition-all duration-1500 ease-in-out delay-300"
                />
              )}
            </svg>
            <div className="absolute inset-0" style={{ backgroundColor: fromColor }}></div>
          </div>
        );
        
      case 'zigzag':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-full"
            >
              <path
                d="M0,0 L20,20 L40,0 L60,20 L80,0 L100,20 L120,0 L140,20 L160,0 L180,20 L200,0 L220,20 L240,0 L260,20 L280,0 L300,20 L320,0 L340,20 L360,0 L380,20 L400,0 L420,20 L440,0 L460,20 L480,0 L500,20 L520,0 L540,20 L560,0 L580,20 L600,0 L620,20 L640,0 L660,20 L680,0 L700,20 L720,0 L740,20 L760,0 L780,20 L800,0 L820,20 L840,0 L860,20 L880,0 L900,20 L920,0 L940,20 L960,0 L980,20 L1000,0 L1020,20 L1040,0 L1060,20 L1080,0 L1100,20 L1120,0 L1140,20 L1160,0 L1180,20 L1200,0 L1200,120 L0,120 Z"
                fill={toColor}
                className="morph-path transition-all duration-1000 ease-in-out"
              />
              {accentColor && (
                <path
                  d="M0,20 L20,0 L40,20 L60,0 L80,20 L100,0 L120,20 L140,0 L160,20 L180,0 L200,20 L220,0 L240,20 L260,0 L280,20 L300,0 L320,20 L340,0 L360,20 L380,0 L400,20 L420,0 L440,20 L460,0 L480,20 L500,0 L520,20 L540,0 L560,20 L580,0 L600,20 L620,0 L640,20 L660,0 L680,20 L700,0 L720,20 L740,0 L760,20 L780,0 L800,20 L820,0 L840,20 L860,0 L880,20 L900,0 L920,20 L940,0 L960,20 L980,0 L1000,20 L1020,0 L1040,20 L1060,0 L1080,20 L1100,0 L1120,20 L1140,0 L1160,20 L1180,0 L1200,20 L1200,120 L0,120 Z"
                  fill={accent}
                  opacity="0.15"
                  className="morph-path transition-all duration-1000 ease-in-out delay-200"
                />
              )}
            </svg>
            <div className="absolute inset-0" style={{ backgroundColor: fromColor }}></div>
          </div>
        );
        
      case 'stairs':
        return (
          <div 
            ref={transitionRef}
            className={`relative ${heightClass} w-full overflow-hidden ${className} ${animationClass}`}
            style={{ transform }}
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-full"
            >
              <path
                d="M0,0 L100,0 L100,20 L200,20 L200,40 L300,40 L300,60 L400,60 L400,80 L500,80 L500,100 L600,100 L600,80 L700,80 L700,60 L800,60 L800,40 L900,40 L900,20 L1000,20 L1000,0 L1200,0 L1200,120 L0,120 Z"
                fill={toColor}
                className="morph-path transition-all duration-1000 ease-in-out"
              />
              {accentColor && (
                <path
                  d="M0,10 L150,10 L150,30 L300,30 L300,50 L450,50 L450,70 L600,70 L600,90 L750,90 L750,70 L900,70 L900,50 L1050,50 L1050,30 L1200,30 L1200,120 L0,120 Z"
                  fill={accent}
                  opacity="0.15"
                  className="morph-path transition-all duration-1000 ease-in-out delay-150"
                />
              )}
            </svg>
            <div className="absolute inset-0" style={{ backgroundColor: fromColor }}></div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return renderTransition();
}
