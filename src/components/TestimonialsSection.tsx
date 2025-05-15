"use client";

import TestimonialCard from './TestimonialCard';
import { useState } from 'react';
import SectionTransition from './SectionTransition';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Parent',
    quote: 'The teachers here have made such a positive impact on my child&apos;s development. They are not just educators, but mentors who genuinely care about their students.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'High School Student',
    quote: 'I&apos;ve attended many schools before, but none compare to the supportive environment and challenging curriculum I&apos;ve found here. It&apos;s truly changed my outlook on education.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Alumni',
    quote: 'The foundation I received at this school prepared me exceptionally well for university. The focus on critical thinking and real-world applications gave me an advantage in my studies.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format'
  },
  {
    id: 4,
    name: 'David Williams',
    title: 'Community Member',
    quote: 'The school&apos;s commitment to community engagement sets it apart. They&apos;re not just educating students; they&apos;re building future citizens who care about making a difference.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format'
  },
  {
    id: 5,
    name: 'Olivia Thompson',
    title: 'Elementary Student',
    quote: 'I love coming to school! My teachers make learning fun, and I&apos;ve made so many friends. My favorite part is our science experiments and art classes.',
    image: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=300&auto=format'
  },
  {
    id: 6,
    name: 'Robert Garcia',
    title: 'Teacher',
    quote: 'Working at this school has been the highlight of my teaching career. The collaborative atmosphere among staff and the resources provided allow us to truly make a difference in our students&apos; lives.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format'
  }
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-[#f9fafb] to-white relative overflow-hidden">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden z-20">
        <SectionTransition
          fromColor="white"
          toColor="#f9fafb"
          accentColor="#00FFFF"
          variant="diagonal"
          flipY={true}
          className="animate-morph-in"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#950713] mb-4">What Our Community Says</h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            Hear from our students, parents, and community members about their experiences with our educational programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.title}
              testimonial={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={handlePrevPage}
            className="p-2 rounded-full border border-[#FF00FF]/30 hover:bg-[#FF00FF]/10 transition"
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#950713]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === index ? 'bg-[#FF00FF]' : 'bg-[#00FFFF]/30'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNextPage}
            className="p-2 rounded-full border border-[#FF00FF]/30 hover:bg-[#FF00FF]/10 transition"
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#950713]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-1px)] overflow-hidden z-20">
        <SectionTransition
          fromColor="#f9fafb"
          toColor="white"
          accentColor="#950713"
          variant="curve"
          className="z-10"
        />
      </div>
    </section>
  );
} 