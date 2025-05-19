"use client";

import { useState } from 'react';
import SectionTransition from './SectionTransition';

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden">
        <SectionTransition
          fromColor="white"
          toColor="white"
          variant="wave"
          flipY={true}
        />
      </div>
      
      {/* Decorative background elements with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 right-20 w-80 h-80 bg-[#00FFFF]/5 rounded-full filter blur-3xl animate-slowpulse"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-[#FFFF00]/5 rounded-full filter blur-3xl animate-slowpulse delay-500"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#FF00FF]/5 rounded-full filter blur-3xl animate-slowpulse delay-1000"></div>
      </div>
      
      {/* Geometric accents */}
      <div className="absolute top-20 left-10 w-6 h-6 border border-[#00FFFF] rounded-sm rotate-45 animate-float opacity-60"></div>
      <div className="absolute bottom-32 right-12 w-8 h-8 border border-[#FF00FF] rounded-full animate-float-delayed opacity-60"></div>
      <div className="absolute top-40 right-16 w-10 h-3 bg-[#FFFF00]/20 rounded-sm animate-float opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            <span className="relative z-10">Pricing</span>
            <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] -z-10 transform skew-x-12 opacity-30"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Young Experts Group offers flexible pricing options to accommodate different needs and schedules.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pricing Card 1 */}
          <div 
            className={`bg-white rounded-xl shadow-lg p-6 border border-[#00FFFF]/50 transform transition-all duration-500 ${hoveredCard === 0 ? 'scale-105 shadow-[0_10px_30px_rgba(0,255,255,0.3)] border-[#00FFFF]' : ''}`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-2 w-16 h-16 bg-[#00FFFF]/10 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00FFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">YEG Partnered School</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-lg font-bold text-[#00FFFF]">GHC</span>
              <span className="text-4xl font-bold mx-1 text-gray-800">150</span>
              <span className="text-lg font-bold text-gray-600">- 350</span>
            </div>
            <p className="text-gray-600 mb-6">
              Pricing varies based on resources provided, including number of tutors, internet access, and learning materials.
            </p>
            <div className="mt-auto">
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FFFF] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Access to YEG curriculum</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FFFF] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">School-integrated learning</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Card 2 */}
          <div 
            className={`bg-white rounded-xl shadow-lg p-6 border border-[#FF00FF]/50 transform transition-all duration-500 ${hoveredCard === 1 ? 'scale-105 shadow-[0_10px_30px_rgba(255,0,255,0.3)] border-[#FF00FF]' : ''}`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-2 w-16 h-16 bg-[#FF00FF]/10 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FF00FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-800">Weekend YEG</h4>
                <div className="flex items-baseline mb-1">
                  <span className="text-base font-bold text-[#FF00FF]">GHC</span>
                  <span className="text-2xl font-bold mx-1 text-gray-800">350</span>
                  <span className="text-base font-bold text-gray-600">- 450</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-800">Vacation YEG</h4>
                <div className="flex items-baseline mb-1">
                  <span className="text-base font-bold text-[#FF00FF]">GHC</span>
                  <span className="text-2xl font-bold mx-1 text-gray-800">350</span>
                  <span className="text-base font-bold text-gray-600">- 450</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-1 text-gray-800">After-School YEG</h4>
                <div className="flex items-baseline">
                  <span className="text-base font-bold text-[#FF00FF]">GHC</span>
                  <span className="text-2xl font-bold mx-1 text-gray-800">350</span>
                  <span className="text-base font-bold text-gray-600">- 450</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing Card 3 */}
          <div 
            className={`bg-white rounded-xl shadow-lg p-6 border border-[#FFFF00]/50 transform transition-all duration-500 ${hoveredCard === 2 ? 'scale-105 shadow-[0_10px_30px_rgba(255,255,0,0.3)] border-[#FFFF00]' : ''}`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-2 w-16 h-16 bg-[#FFFF00]/10 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Weekend & Vacation YEG</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-lg font-bold text-[#FFFF00]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-4xl font-bold mx-1 text-gray-800">600</span>
              <span className="text-lg font-bold text-gray-600">- 700</span>
            </div>
            <p className="text-gray-600 mb-6">
              Combined program offering both weekend and vacation learning experiences at a discounted rate.
            </p>
            <div className="mt-auto">
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFFF00] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Best value package</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFFF00] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Year-round learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#00FFFF]/5 via-[#FF00FF]/5 to-[#FFFF00]/5 rounded-lg p-6 border border-[#00FFFF]/20 shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF00FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-gray-800">Important Note</h4>
              <p className="text-gray-600">
                👉 The first price in each range applies to students from YEG-partnered schools. Contact us for detailed pricing based on your specific requirements.                
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-2px)] overflow-hidden">
        <SectionTransition
          fromColor="white"
          toColor="white"
          variant="geometric"
          className="animate-morph-in"
        />
      </div>
    </section>
  );
}
