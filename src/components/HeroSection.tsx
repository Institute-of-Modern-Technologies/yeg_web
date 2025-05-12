"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SlideProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideProps[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format',
    title: 'Ed is Awesome Tool for School Website',
    subtitle: 'Building better educational experiences for elementary students',
    buttonText: 'Buy Now',
    buttonLink: '/enroll',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format',
    title: 'Discover Your Child\'s Potential',
    subtitle: 'Innovative learning approaches for the modern student',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format',
    title: 'Creating Tomorrow\'s Leaders Today',
    subtitle: 'Quality education focused on character and academics',
    buttonText: 'Explore',
    buttonLink: '/programs',
  },
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
    <div id="hero" className="relative w-full h-[500px] overflow-hidden">
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
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-white text-lg md:text-xl mb-8">{slide.subtitle}</p>
                <Link href={slide.buttonLink} className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition duration-300">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls - Styled as in the reference image */}
      <div className="absolute z-30 bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-6' : 'bg-white/60'
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
    </div>
  );
}