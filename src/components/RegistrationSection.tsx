"use client";

import { useState } from 'react';
import SectionTransition from './SectionTransition';

export default function RegistrationSection() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdLb-L_RbvU9P_L4c6EHVXfX1j6f2fo3Fk0vpL4z_Gt2ABbCA/viewform?usp=send_form';
  
  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank');
  };
  
  return (
    <section id="registration" className="py-16 px-6 bg-white relative overflow-hidden">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden">
        <SectionTransition
          fromColor="#f9fafb" // gray-50 from education news section
          toColor="white"
          variant="blob"
          flipY={true}
          flipX={true}
        />
      </div>
      
      {/* Decorative background elements with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 right-20 w-80 h-80 bg-[#00FFFF]/10 rounded-full filter blur-3xl animate-slowpulse"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-[#FFFF00]/10 rounded-full filter blur-3xl animate-slowpulse delay-500"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#FF00FF]/10 rounded-full filter blur-3xl animate-slowpulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Registration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join our innovative programs by completing your registration</p>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          {/* Empty space for spacing */}
          <div className="h-4"></div>
          
          {/* Registration Button - Now outside the card */}
          <div className="max-w-md mx-auto">
            <button
              onClick={handleRegisterClick}
              className="w-full py-4 px-8 bg-[#FF00FF] hover:bg-[#FF00FF]/90 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF00FF]/30 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:ring-offset-2 relative overflow-hidden group"
            >
              {/* Button animation effect */}
              <span className="absolute inset-0 w-0 bg-[#00FFFF]/20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="absolute inset-0 w-full bg-gradient-to-r from-[#FFFF00]/10 via-white/10 to-transparent -translate-x-full animate-shimmer"></span>
              
              <span className="relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FFFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                Register Now
              </span>
            </button>
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