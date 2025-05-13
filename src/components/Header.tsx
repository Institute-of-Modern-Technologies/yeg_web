'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="#hero" className="flex items-center" onClick={(e) => scrollToSection(e, 'hero')}>
          <span className="text-xl font-bold text-blue-900"><span className='text-red-500 '>Y</span> <span className='text-yellow-500'>E</span> <span className='text-cyan-500'>G</span></span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="#hero" className="text-blue-900 hover:text-orange-500 font-medium" onClick={(e) => scrollToSection(e, 'hero')}>Home</Link>
        <Link href="#welcome" className="text-blue-900 hover:text-orange-500 font-medium" onClick={(e) => scrollToSection(e, 'welcome')}>About</Link>
        <Link href="#features" className="text-blue-900 hover:text-orange-500 font-medium" onClick={(e) => scrollToSection(e, 'features')}>Stages</Link>
        <Link href="#academics" className="text-blue-900 hover:text-orange-500 font-medium" onClick={(e) => scrollToSection(e, 'academics')}>Programs</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        <Link href="#registration" className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition" onClick={(e) => scrollToSection(e, 'registration')}>
          Enroll
        </Link>
        <div className="hidden md:flex items-center space-x-3">
          <Link href="#contact" className="text-blue-900 hover:text-orange-500" onClick={(e) => scrollToSection(e, 'contact')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
          <Link href="https://facebook.com" className="text-blue-900 hover:text-orange-500" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link href="https://twitter.com" className="text-blue-900 hover:text-orange-500" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>
        </div>
        
        <button className="md:hidden text-blue-900" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}