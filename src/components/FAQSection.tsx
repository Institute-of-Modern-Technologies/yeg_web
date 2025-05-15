"use client";

import { useState } from 'react';

export default function FAQSection() {
  // For FAQ accordion
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ links/categories data
  const faqCategories = [
    { name: "About us", href: "#about" },
    { name: "Career Guidance", href: "#career" },
    { name: "Our Programs", href: "#programs" },
    { name: "Tutoring and mentors", href: "#tutoring" },
    { name: "Enrolments and rates", href: "#enrolments" },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How will I manage my business with you?",
      answer: "The Young Experts Group (YEG) program provides comprehensive business management support. Our mentors will guide you through all aspects of business development and operations."
    },
    {
      question: "Is the content on this website available in other languages?",
      answer: "Currently, our content is only available in English. However, we're working on translations for multiple languages to better serve our diverse community of learners."
    },
    {
      question: "What does it mean to be a part of our teaching platform?",
      answer: "Being part of our teaching platform means joining a community of innovative educators and eager learners. You'll have access to cutting-edge resources, professional development opportunities, and a supportive network."
    },
    {
      question: "What if I have more questions?",
      answer: "We're always here to help! You can contact our support team directly through the Contact Us section, or schedule a consultation call where we can address all your specific questions."
    }
  ];
  
  return (
    <section id="faq" className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Section transition decorator - top wave effect */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden z-10">
        {/* Burgundy wave shape */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-5 left-0 w-full h-auto" preserveAspectRatio="none">
          <path fill="#950713" fillOpacity="0.1" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,176C672,181,768,171,864,149.3C960,128,1056,96,1152,101.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        
        {/* Second wave for layered effect */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-3 left-0 w-full h-auto" preserveAspectRatio="none">
          <path fill="#00FFFF" fillOpacity="0.08" d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,138.7C840,107,960,85,1080,96C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>

        {/* Modern geometric accents */}
        <div className="absolute top-5 left-1/4 w-6 h-6 bg-[#950713]/40 rounded-md transform rotate-45 animate-float"></div>
        <div className="absolute top-12 right-1/3 w-8 h-8 bg-[#00FFFF]/30 rounded-full animate-float-delayed"></div>
        <div className="absolute top-6 right-1/4 w-4 h-10 bg-[#950713]/20 rounded-sm transform -rotate-12 animate-float"></div>
        
        {/* Additional modern clipart - document icon */}
        <div className="absolute top-4 left-[15%] w-10 h-12 bg-white/90 rounded-sm shadow-md animate-float overflow-hidden">
          <div className="w-full h-1 bg-[#950713]"></div>
          <div className="flex justify-center items-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#950713" className="w-6 h-6 opacity-70">
              <path d="M8 4C6.34315 4 5 5.34315 5 7V17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17V7C19 5.34315 17.6569 4 16 4H8ZM7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17V7ZM9 9C9 8.44772 9.44772 8 10 8H14C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10H10C9.44772 10 9 9.55228 9 9ZM9 13C9 12.4477 9.44772 12 10 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H10C9.44772 14 9 13.5523 9 13Z" />
            </svg>
          </div>
        </div>
        
        {/* Additional modern clipart - magnifier */}
        <div className="absolute top-8 right-[15%] animate-float-delayed">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFFF" className="w-8 h-8 opacity-80">
            <path d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z" />
          </svg>
        </div>
      </div>
      
      {/* Modern background color transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#00FFFF]/10 to-white z-0"></div>
      
      {/* Animated wave background */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 w-full h-40 bg-[#00FFFF]/20 rounded-full filter blur-3xl transform -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#950713]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#00FFFF]/10 rounded-full filter blur-3xl animate-slowpulse"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-[#950713]/5 rounded-full filter blur-3xl animate-slowpulse"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-10 h-10 bg-[#00FFFF]/20 rounded-full animate-float opacity-80"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#950713]/30 rounded-full animate-float-delayed opacity-60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top row with illustration */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-12 border-b border-gray-200 mb-10">
          {/* Left side - Heading and description */}
          <div className="md:max-w-sm mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">FAQs</h2>
            <p className="text-gray-600">
              Have questions? Here you'll find the answers most valued by
              our learners, along with access to step-by-step instructions
              and support.
            </p>
          </div>
          
          {/* Right side - Illustration with question marks */}
          <div className="relative h-96 w-full md:w-auto md:flex-1 flex justify-center items-center">
            {/* Animated background effects for the illustration */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00FFFF]/10 to-[#FF6B00]/10 rounded-full filter blur-3xl animate-slowpulse"></div>
            </div>
            
            {/* Question mark decorations with animations */}
            <div className="absolute top-4 left-10 w-12 h-12 flex items-center justify-center animate-question-bounce">
              <span className="text-[#FF6B00] text-4xl font-bold">?</span>
            </div>
            <div className="absolute top-0 right-20 w-12 h-12 flex items-center justify-center animate-float">
              <span className="text-[#FF6B00] text-4xl font-bold">?</span>
            </div>
            <div className="absolute bottom-8 left-16 w-12 h-12 flex items-center justify-center animate-float-delayed">
              <span className="text-[#FF6B00] text-4xl font-bold">?</span>
            </div>
            <div className="absolute bottom-20 right-10 w-12 h-12 flex items-center justify-center animate-question-bounce">
              <span className="text-[#FF6B00] text-4xl font-bold">?</span>
            </div>
            
            {/* Small decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00FFFF] rounded-full opacity-30 animate-blink"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#FF6B00] rounded-full opacity-30 animate-blink"></div>
            
            {/* Main illustration area with additional clipart */}
            <div className="relative transform hover:scale-105 transition-all duration-500 animate-float">
              {/* Main illustration - centered person with laptop */}
              <img 
                src="/images/clipart.png" 
                alt="Person with laptop surrounded by question marks" 
                className="w-auto h-auto max-h-96 object-contain relative z-10" 
              />
              
              {/* Modern clipart - chat bubbles */}
              <div className="absolute top-1/4 -right-2 animate-float-delayed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#950713" className="w-10 h-10 opacity-80">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.5997 21.6368 15.1116 21 16.4525V22L16.4525 21C15.1116 21.6368 13.5997 22 12 22ZM8 13H16C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13ZM8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9C9 9.55228 8.55228 10 8 10ZM12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10ZM16 10C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10Z" />
                </svg>
              </div>
              
              {/* Modern clipart - light bulb/idea */}
              <div className="absolute -top-5 -left-2 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00FFFF" className="w-12 h-12 opacity-90">
                  <path d="M11 18H7.94101C7.64391 16.7274 6.30376 14.9066 5.21635 13.5991C4.35022 12.5494 3.71351 11.2803 4.06365 9.99607C4.34574 8.93363 5.31087 8.18099 6.36256 7.89141C6.61612 7.81882 6.8829 7.86612 7.10829 8.01382L8 8.57201V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V8.57201L16.8917 8.01382C17.1171 7.86612 17.3839 7.81882 17.6374 7.89141C18.6891 8.18099 19.6543 8.93363 19.9364 9.99607C20.2865 11.2803 19.6498 12.5494 18.7837 13.5991C17.6962 14.9066 16.3561 16.7274 16.059 18H13V16H15.8347C16.0535 15.2021 16.6255 14.3232 17.4863 13.2659L17.4872 13.2648C18.128 12.5017 18.9949 11.1258 18.75 10.3914C18.6255 10.0292 18.1989 9.68427 17.3615 9.45535L15.17 10.4561C15.0677 10.5115 14.9517 10.5406 14.834 10.5401C14.7014 10.5395 14.5734 10.5006 14.4647 10.4282C14.2469 10.2833 14.1302 10.0382 14.1525 9.78383L14.2897 8.48775C14.2951 8.43411 14.2981 8.38003 14.2988 8.3258C14.3004 8.21797 14.2981 8.1089 14.2918 8H11C9.89543 8 9 8.89543 9 10V8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8V8.11276L11.0068 8.11652C11.09 8.04163 11.19 7.98277 11.3029 7.94566C11.5256 7.86691 11.7747 7.90074 11.9623 8.0422L13.7654 9.45584L13.7065 9.82939L13.7074 9.82978L13 9.37496V5C13 5.00038 13 5.00076 13 5.00114C12.9987 4.99728 12.9974 4.99346 12.996 4.98969C12.9782 4.90251 12.9007 4.81723 12.7495 4.77041C12.5984 4.72358 12.477 4.75185 12.4104 4.78911C12.3835 4.80254 12.3605 4.81753 12.3419 4.83333L12 5.22798L11.6581 4.83333C11.6395 4.81753 11.6165 4.80254 11.5896 4.78911C11.523 4.75185 11.4016 4.72358 11.2505 4.77041C11.0993 4.81723 11.0218 4.90251 11.004 4.98969C11.0026 4.99346 11.0013 4.99728 11 5.00114C11 5.00076 11 5.00038 11 5V9.37496L10.2926 9.82978L10.2935 9.82939L10.2346 9.45584L12.0377 8.0422C12.2253 7.90074 12.4744 7.86691 12.6971 7.94566C12.81 7.98277 12.91 8.04163 12.9932 8.11652L13 8.11276V8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8V10C15 8.89543 14.1046 8 13 8H9.70817C9.70193 8.1089 9.6996 8.21797 9.70125 8.3258C9.7019 8.38003 9.70488 8.43411 9.71027 8.48775L9.84751 9.78383C9.86975 10.0382 9.7531 10.2833 9.53526 10.4282C9.42666 10.5006 9.29858 10.5395 9.16602 10.5401C9.04833 10.5406 8.93227 10.5115 8.83 10.4561L6.63846 9.45535C5.80114 9.68427 5.37446 10.0292 5.25003 10.3914C5.0051 11.1258 5.87202 12.5017 6.5128 13.2648L6.51373 13.2659C7.37447 14.3232 7.94647 15.2021 8.16534 16H11V18ZM13 16V18H11V16H13Z" />
                </svg>
              </div>
              
              {/* Modern clipart - book/information */}
              <div className="absolute bottom-1/4 -left-6 animate-float-delayed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#950713" className="w-10 h-10 opacity-70">
                  <path d="M19 1L14 6V17L19 12.5V1ZM21 5V18.5C21 20.4 18 22 14 22C11 22 7 20.4 7 18.5V5C7 2.6 11 1 14 1C16 1 19 2.6 21 5M5 5V18.5C5 20.4 7 22 11 22C9 22 3 20.4 3 18.5V5C3 2.6 7 1 11 1C9 1 5 2.6 5 5Z" />
                </svg>
              </div>
              
              {/* Subtle glow effects around the illustration */}
              <div className="absolute top-0 inset-x-0 h-2/3 rounded-full bg-gradient-to-b from-[#00FFFF]/20 to-transparent filter blur-xl -z-10"></div>
              <div className="absolute bottom-0 right-0 w-full h-2/3 rounded-full bg-gradient-to-tl from-[#950713]/15 to-transparent filter blur-xl -z-10"></div>
              
              {/* Modern decorative dots pattern */}
              <div className="absolute -bottom-10 -right-10 grid grid-cols-3 gap-2 animate-float opacity-60">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#00FFFF]' : 'bg-[#950713]'} opacity-${Math.floor(Math.random() * 10) + 3}0`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom row with categories and FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Categories */}
          <div className="col-span-1">
            <div className="space-y-4">
              {faqCategories.map((category, index) => (
                <a 
                  key={index} 
                  href={category.href}
                  className="block text-gray-700 hover:text-[#00FFFF] py-2 border-b border-gray-200 last:border-b-0 transition-colors duration-200"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right columns - FAQ Accordion */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">About us</h3>
            
            {/* FAQ Accordion styled like the reference image */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-200 pb-2 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-3 flex justify-between items-center group"
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={activeIndex === index}
                  >
                    <span className="font-medium text-gray-800 group-hover:text-[#00FFFF] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
