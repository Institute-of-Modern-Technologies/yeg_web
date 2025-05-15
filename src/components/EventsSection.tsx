'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionTransition from './SectionTransition';

interface EventType {
  id: number;
  image: string;
  partner: string;
}

const partnerLogos = [
  { src: '/images/logo1.png', alt: 'INTERNATIONAL SCHOOL OF ACCRA' },
  { src: '/images/logo2.png', alt: 'JACK AND JILL SCHOOL' },
  { src: '/images/logo3.png', alt: 'DADDYS PRIDE ACADEMY' },
  { src: '/images/logo4.png', alt: 'LITTLE ROSES SCHOOL' },
  { src: '/images/logo5.png', alt: 'PERPETUAL HELP SCHOOL' },
  { src: '/images/logo6.png', alt: 'CONVENANT PRESBY SCHOOL' },
];

const events: EventType[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    partner: '/images/logo1.png'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop',
    partner: '/images/logo2.png'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    partner: '/images/logo3.png'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    partner: '/images/logo4.png'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
    partner: '/images/logo5.png'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
    partner: '/images/logo6.png'
  }
];



export default function EventsSection() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    // Auto-rotate events every 5 seconds, but only in non-mobile view
    if (window.innerWidth >= 768) {
      const interval = setInterval(() => {
        setActiveEvent((prev) => (prev + 1) % events.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-20" id="events">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden z-20">
        <SectionTransition
          fromColor="#f9fafb"
          toColor="#66050D"
          accentColor="#00FFFF"
          variant="curve"
          flipY={true}
          className="animate-morph-in"
        />
      </div>
      
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#66050D] opacity-95"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-700 rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-[#00FFFF] bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider">
              Experience & Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00FFFF] mb-6">
            Partnered <span className="text-transparent bg-clip-text bg-[#00FFFF]">Schools</span>
          </h2>
          <p className="text-[#FFFF00]/90 max-w-2xl mx-auto text-lg">
            Your school can be part of our growing network—let's teach, grow, and innovate together.
          </p>
        </div>
        
        {/* Featured event (large display) */}
        <div className="hidden md:block mb-16 relative">
          <div className="flex flex-col">
            {/* Event image */}
            <div className="relative mb-8">
              <div className="relative h-[450px] overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500">
                {events.map((event, index) => (
                  <div 
                    key={event.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === activeEvent ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image 
                      src={event.image}
                      alt="Partner school"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 to-transparent"></div>
                    
                    {/* Partner logo on image */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-md">
                      <Image 
                        src={event.partner}
                        alt="Event Partner" 
                        width={60}
                        height={30}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    
                    {/* School name on image */}
                    <div className="absolute bottom-8 left-0 right-0 px-8">
                      <div className="bg-[#66050D] backdrop-blur-sm p-3 rounded-lg shadow-lg inline-block">
                        <h3 className="text-2xl font-bold text-white">
                          {partnerLogos.find(logo => logo.src === event.partner)?.alt}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
                

                

              </div>
              
              {/* Event navigation dots */}
              <div className="flex justify-center space-x-3 mt-6">
                {events.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveEvent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeEvent ? 'bg-[#66050D] scale-125' : 'bg-gray-400 hover:bg-orange-300'
                    }`}
                    aria-label={`View event ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
       
          </div>
        </div>
        
        {/* Mobile event cards */}
        <div className="md:hidden space-y-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image 
                  src={event.image} 
                  alt="Partner school" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1846]/80 to-transparent"></div>
                

                
                {/* Partner logo */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-1 rounded-lg">
                  <Image 
                    src={event.partner} 
                    alt="Event Partner" 
                    width={40} 
                    height={20} 
                    className="h-6 w-auto object-contain" 
                  />
                </div>
              </div>
              
              <div className="p-5">
                
                <Link 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-4 py-2 rounded-lg flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  <span>Get Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          
          {/* Mobile partners section */}
          <div className="bg-gradient-to-br from-[#950713] to-[#550309] p-6 rounded-xl border border-[#FF00FF]/30 shadow-2xl relative overflow-hidden mt-10
            before:absolute before:inset-0 before:bg-[url('/images/pattern-grid.png')] before:bg-cover before:opacity-5 before:z-0">
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500 rounded-full filter blur-[60px] opacity-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#00FFFF] rounded-full filter blur-[60px] opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center">
                <div className="mr-2 bg-gradient-to-r from-orange-500 to-red-500 p-0.5 rounded-md inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">Partnered</span> Schools
              </h3>
              
              <div className="overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2">
                <div className="flex space-x-4 whitespace-nowrap">
                  {partnerLogos.map((logo, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 bg-white p-2 rounded-lg flex items-center justify-center w-[100px] h-12 shadow-lg border border-gray-100"
                    >
                      <Image 
                        src={logo.src} 
                        alt={logo.alt} 
                        width={80} 
                        height={40} 
                        className="h-8 w-auto object-contain" 
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Link 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="bg-gradient-to-r from-[#FF00FF] to-[#950713] text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center"
                >
                  <span>View All Partners</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-1px)] overflow-hidden z-20">
        <SectionTransition
          fromColor="#66050D"
          toColor="white"
          accentColor="#950713"
          variant="blob"
          className="z-10"
        />
      </div>
    </section>
  );
}