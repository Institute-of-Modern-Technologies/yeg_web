"use client";

import TestimonialCard from './TestimonialCard';
import { useState } from 'react';
import SectionTransition from './SectionTransition';

const testimonials = [
  {
    id: 1,
    name: 'International School of Accra',
    title: 'Partner School',
    quote: 'Partnering with the Young Experts Group has been one of the most transformative decisions for our school. We\'ve seen our students grow from passive learners into confident creators—designing websites, crafting digital stories, and presenting their own innovations with pride. What impresses me most is how YEG blends tech skills with creativity, critical thinking, and real-world application...',
    fullQuote: 'Partnering with the Young Experts Group has been one of the most transformative decisions for our school. We\'ve seen our students grow from passive learners into confident creators—designing websites, crafting digital stories, and presenting their own innovations with pride. What impresses me most is how YEG blends tech skills with creativity, critical thinking, and real-world application. Even our younger students, some as young as six, are now thinking like designers, coders, and entrepreneurs. This program doesn\'t just teach technology—it inspires purpose. I highly recommend YEG to any school that wants to prepare its learners not just for exams, but for the future.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=300&auto=format'
  },
  {
    id: 2,
    name: 'Mr. Carlos',
    title: 'Proud YEG Parent',
    quote: 'I was amazed. In just two weeks, my 6-year-old—who once wanted to be a footballer—was suddenly dreaming of becoming an architect. He designed a house complete with cars, motorbikes, and a garage! Soon after, he designed a birthday card with his cousins photo on it...',
    fullQuote: 'I was amazed. In just two weeks, my 6-year-old—who once wanted to be a footballer—was suddenly dreaming of becoming an architect. He designed a house complete with cars, motorbikes, and a garage! Soon after, he designed a birthday card with his cousins photo on it, and then I heard they\'re building their own websites too. I couldn\'t believe it—at just six years old! If you\'re wondering whether Young Experts Group is worth it, I\'ll say this: bring your child and see for yourself. What they\'re doing here is nothing short of extraordinary.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format'
  },
  {
    id: 3,
    name: 'Priscilla',
    title: 'Basic 7 Student, Daddy\'s Pride Academy',
    quote: 'Before the Young Expert Group (Y.E.G) came to our school, I didn\'t know much about computers. Thanks to their program, I\'ve learned to create websites, use Canva for designs, and work with ChatGPT to help with my homework...',
    fullQuote: 'Before the Young Expert Group (Y.E.G) came to our school, I didn\'t know much about computers. Thanks to their program, I\'ve learned to create websites, use Canva for designs, and work with ChatGPT to help with my homework. Y.E.G has truly made a difference in my life by teaching me these valuable skills. Young Expert Group – WE GET IT!',
    image: 'https://images.unsplash.com/photo-1580894894513-535f7dfbe539?q=80&w=300&auto=format'
  },

];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage, 
    (currentPage + 1) * testimonialsPerPage
  );
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
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
              id={testimonial.id}
              name={testimonial.name}
              role={testimonial.title}
              testimonial={testimonial.quote}
              fullTestimonial={testimonial.fullQuote}
              image={testimonial.image}
              isExpanded={expandedId === testimonial.id}
              onReadMoreClick={toggleExpand}
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