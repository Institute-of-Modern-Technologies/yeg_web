"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTransition from './SectionTransition';

interface SlideProps {
  id: number;
  image: string;
  title: string | React.ReactNode;
  subtitle: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  layout?: 'left' | 'center' | 'right';
  titleColor?: string;
  subtitleColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  contentStyle?: string;
 
}

const slides: SlideProps[] = [
  {
    id: 1,
    image: '/images/Hero picture 2.png',
    title: '',
    subtitle: null,
    buttonText: 'Enroll Now',
    buttonLink: '/enroll',
    layout: 'left',
    titleColor: 'text-white',
    subtitleColor: 'text-white',
    buttonColor: 'bg-[#FF00FF]',
    buttonHoverColor: 'hover:bg-[#FF00FF]/80',
    contentStyle: '  ml-44'
  },
  {
    id: 2,
    image: '/images/Hero picture 3.png',
    title: 
      <div>
        <div className="text-white text-xl ml-40">Young Experts Group</div>
        <div className="mt-2 ml-10">
          <span className="text-white font-bold text-5xl">Get </span>
          <span className="text-[#FFFF00] font-bold text-5xl">CAREER- READY</span>
        </div>
        <div className="mt-3 ml-16">
          <span className="text-[#FFFF00] font-bold text-3xl">Before</span>
          <span className="text-white font-bold text-3xl">&nbsp;COMPLETING SCHOOL</span>
        </div>
        <div className="text-white text-lg mt-3 ml-5">
          Empowering Young Minds Through Tech and Entrepreneurship
        </div>
      </div>,
    subtitle: null,
    buttonText: 'Sign Up here',
    buttonLink: '/enroll',
    layout: 'left',
    titleColor: '',
    subtitleColor: '',
    buttonColor: 'bg-[#FF00FF] text-white',
    buttonHoverColor: 'hover:bg-[#FF00FF]/90',
    contentStyle: 'py-6 ml-4'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format',
    title: 'Join Our Community',
    subtitle: 'Connect with like-minded students and mentors',
    buttonText: 'Join Now',
    buttonLink: '/community',
    layout: 'right',
    titleColor: 'text-white' ,
    subtitleColor: 'text-[#FFFF00]',
    buttonColor: 'bg-[#FFFF00] text-black',
    buttonHoverColor: 'hover:bg-[#FFFF00]/80',
    contentStyle: 'border-r-4 border-[#FFFF00] pr-6 bg-black/40 p-6 rounded-l-lg text-right',
   
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div id="hero" className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={typeof slide.title === 'string' ? slide.title : `Slide ${slide.id}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            
            {/* Content */}
            <div className={`absolute inset-0 z-20 flex flex-col ${slide.id === 1 ? 'justify-end pb-12' : 'justify-center'} items-${slide.layout === 'center' ? 'center' : slide.layout === 'right' ? 'end' : 'start'} ${slide.layout === 'left' ? 'pl-6 md:pl-12 lg:pl-16' : 'px-6 md:px-16 lg:px-24'}`}>
              <div className={slide.contentStyle || 'max-w-2xl'}>
                {slide.layout === 'left' && slide.id === 2 ? (
                  <>{slide.title}{slide.subtitle && <p className={`mt-4 ${slide.subtitleColor || 'text-white'}`}>{slide.subtitle}</p>}</>
                ) : (
                  <>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${slide.titleColor || 'text-white'}`}>{slide.title}</h1>
                    <p className={`text-lg md:text-xl mb-8 ${slide.subtitleColor || 'text-white'}`}>{slide.subtitle}</p>
                  </>
                )}
              
                {slide.buttonText && slide.buttonLink && slide.id === 2 ? (
                  <div className="mt-6 ml-48">
                    <Link 
                      href='#'
                      onClick={(e) => e.preventDefault()}
                      className={`${slide.buttonColor || 'bg-[#FF00FF] text-white'} ${slide.buttonHoverColor || 'hover:bg-[#FF00FF]/80'} font-medium px-8 py-2 rounded-full transition duration-300 inline-block text-center`}
                    >
                      Sign Up here
                    </Link>
                  </div>
                ) : slide.buttonText && slide.buttonLink && (
                  <Link 
                    href='#'
                    onClick={(e) => e.preventDefault()}
                    className={`${slide.buttonColor || 'bg-[#FF00FF] text-white'} ${slide.buttonHoverColor || 'hover:bg-[#FF00FF]/80'} font-medium px-6 py-3 rounded-md transition duration-300`}
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls - Styled as in the reference image */}
      <div className="absolute z-30 bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#FF00FF] w-6' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrows - Hidden on mobile, visible on desktop */}
      <button
        className="absolute z-30 top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition hidden md:block"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute z-30 top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition hidden md:block"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-1px)] overflow-hidden">
        <SectionTransition
          fromColor="transparent"
          toColor="white"
          accentColor="#950713"
          variant="wave"
          className="z-20"
        />
      </div>
    </div>
  );
}