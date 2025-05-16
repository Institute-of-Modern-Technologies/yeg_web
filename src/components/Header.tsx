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
          <Link href="https://facebook.com" className="text-[#950713] hover:text-[#FF00FF]" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link href="https://twitter.com" className="text-[#950713] hover:text-[#FF00FF]" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
                <Link href="https://facebook.com" className="text-[#950713] hover:text-[#FF00FF] p-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com" className="text-[#950713] hover:text-[#FF00FF] p-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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