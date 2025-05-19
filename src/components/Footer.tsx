"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted with email:', email);
    // Add your form submission logic here
    
    // Reset form
    setEmail('');
    
    // Show success message (in a real app)
    alert('Thank you for your message. We will get back to you soon!');
  };
  
  return (
    <footer className="bg-gradient-to-r from-[#950713] to-[#66050D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFFF00]">Young Experts Group</h4>
            <ul className="space-y-2">
              <li><Link href="#hero" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });}}>Home</Link></li>
              <li><Link href="#welcome" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });}}>About Us</Link></li>
              <li><Link href="#academics" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('academics')?.scrollIntoView({ behavior: 'smooth' });}}>Programs</Link></li>
              <li><Link href="#faq" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });}}>FAQs</Link></li>
              <li><Link href="#pricing" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });}}>Pricing</Link></li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFFF00]">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF00FF] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:yeg@imtghana.com" className="text-white hover:text-[#00FFFF] transition-colors duration-300">yeg@imtghana.com</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF00FF] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2330547147313" className="text-white hover:text-[#00FFFF] transition-colors duration-300">+233 0547147313</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF00FF] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white">
                    No. 8 Borstal Street,<br />
                    Roman Ridge Accra.<br />
                    P.O.Box 4754 Accra
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFFF00]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });}}>Stages</Link></li>
              <li><Link href="#registration" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });}}>Registration</Link></li>
              <li><Link href="#contact" className="text-white hover:text-[#00FFFF] transition-colors duration-300" onClick={(e) => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFFF00]">Newsletter</h4>
            <p className="text-white text-sm mb-4">Stay updated with our latest news and offers.</p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-black/20 border border-[#FF00FF]/30 focus:border-[#FF00FF] rounded-md focus:outline-none text-white text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#950713] text-white py-2 rounded-md hover:bg-[#FF00FF] transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 items-center mt-6">
            <Link href="https://www.facebook.com/search/top/?q=young%20experts%20group" target="_blank" className="bg-white/10 hover:bg-[#FF00FF]/20 p-2 rounded-full transition-all duration-300 group" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#00FFFF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href="https://youtube.com/shorts/x_kUqKoTZR8?si=PlEGtVGbD0yiksV9" target="_blank" className="bg-white/10 hover:bg-[#FF00FF]/20 p-2 rounded-full transition-all duration-300 group" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#00FFFF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Link>
            <Link href="https://www.tiktok.com/@imtghana/video/7419450278983798021?is_from_webapp=1&sender_device=pc" target="_blank" className="bg-white/10 hover:bg-[#FF00FF]/20 p-2 rounded-full transition-all duration-300 group" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#00FFFF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </Link>
            <Link href="#" className="bg-white/10 hover:bg-[#FF00FF]/20 p-2 rounded-full transition-all duration-300 group" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-[#00FFFF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-[#FF00FF]/20 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} <span className="text-[#FFFFFF]">Young Experts Group</span> | Designed by <span className="text-[#FFFFFF]">Institute Of Modern Technologies</span>
          </p>
        </div>

      </div>
    </footer>
  );
} 