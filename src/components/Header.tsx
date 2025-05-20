'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu when a link is clicked
    setIsMenuOpen(false);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-white py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center shadow-sm sticky top-0 z-50 relative">
      <div className="flex items-center">
        <Link href="#hero" className="flex items-center" onClick={(e) => scrollToSection(e, 'hero')}>
          <span className="text-lg sm:text-xl font-bold"><span className='text-[#FF00FF]'>Young</span> <span className='text-[#FFFF00] bg-[#000000] px-1 sm:px-2 rounded-md'>Experts</span> <span className='text-[#00FFFF]'>Group</span></span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="#hero" className="text-[#950713] hover:text-[#FF00FF] font-medium" onClick={(e) => scrollToSection(e, 'hero')}>Home</Link>
        <Link href="#welcome" className="text-[#950713] hover:text-[#FF00FF] font-medium" onClick={(e) => scrollToSection(e, 'welcome')}>About</Link>
        <Link href="#features" className="text-[#950713] hover:text-[#FF00FF] font-medium" onClick={(e) => scrollToSection(e, 'features')}>Stages</Link>
        <Link href="#academics" className="text-[#950713] hover:text-[#FF00FF] font-medium" onClick={(e) => scrollToSection(e, 'academics')}>Programs</Link>
        <Link href="#faq" className="text-[#950713] hover:text-[#FF00FF] font-medium" onClick={(e) => scrollToSection(e, 'faq')}>FAQ'S</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        <Link href="#registration" className="bg-[#FF00FF] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium hover:bg-[#c60313] transition" onClick={(e) => scrollToSection(e, 'registration')}>
          Enroll
        </Link>
        <div className="hidden md:flex items-center space-x-3">
          <Link href="#contact" className="text-[#950713] hover:text-[#FF00FF]" onClick={(e) => scrollToSection(e, 'contact')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
          <Link href="https://www.facebook.com/search/top/?q=young%20experts%20group" className="text-[#950713] hover:text-[#FF00FF]" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link href="https://youtube.com/shorts/x_kUqKoTZR8?si=PlEGtVGbD0yiksV9" className="text-[#950713] hover:text-[#FF00FF]" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </Link>
          <Link href="https://www.tiktok.com/@imtghana/video/7419450278983798021?is_from_webapp=1&sender_device=pc" className="text-[#950713] hover:text-[#FF00FF]" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </Link>
          <Link href="https://instagram.com" className="text-[#950713] hover:text-[#FF00FF]" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
        </div>
        
        <button 
          id="menu-button"
          className="md:hidden text-[#950713]" 
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 sm:py-5 px-4 sm:px-6 md:hidden z-50"
        >
          <nav className="flex flex-col space-y-2 sm:space-y-4">
            <Link href="#hero" className="text-[#950713] hover:text-[#FF00FF] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors" onClick={(e) => scrollToSection(e, 'hero')}>Home</Link>
            <Link href="#welcome" className="text-[#950713] hover:text-[#FF00FF] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors" onClick={(e) => scrollToSection(e, 'welcome')}>About</Link>
            <Link href="#features" className="text-[#950713] hover:text-[#FF00FF] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors" onClick={(e) => scrollToSection(e, 'features')}>Stages</Link>
            <Link href="#academics" className="text-[#950713] hover:text-[#FF00FF] font-medium py-3 px-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors" onClick={(e) => scrollToSection(e, 'academics')}>Programs</Link>
            <Link href="#registration" className="bg-[#FF00FF] text-white font-medium py-3 px-4 rounded-lg hover:bg-[#FF00FF]/80 active:bg-[#FF00FF]/90 transition-colors" onClick={(e) => scrollToSection(e, 'registration')}>Enroll</Link>
          </nav>
          
          <div className="mt-4 sm:mt-6 flex flex-col space-y-2 sm:space-y-4">
            <Link href="#contact" className="text-[#950713] hover:text-[#FF00FF] py-3 px-4 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors w-full" onClick={(e) => scrollToSection(e, 'contact')}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </div>
            </Link>
            <div className="flex justify-center mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-6">
                <Link href="https://www.facebook.com/search/top/?q=young%20experts%20group" className="text-[#950713] hover:text-[#FF00FF] p-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link href="https://youtube.com/shorts/x_kUqKoTZR8?si=PlEGtVGbD0yiksV9" className="text-[#950713] hover:text-[#FF00FF] p-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </Link>
                <Link href="https://www.tiktok.com/@imtghana/video/7419450278983798021?is_from_webapp=1&sender_device=pc" className="text-[#950713] hover:text-[#FF00FF] p-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="text-[#950713] hover:text-[#FF00FF] p-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}