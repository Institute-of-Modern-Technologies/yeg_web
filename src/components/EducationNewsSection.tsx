'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Number counter component that animates from 0 to the target value
function NumberCounter({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);
  
  return <div ref={counterRef} className="text-purple-900 text-5xl font-bold mb-1">{count}{suffix}</div>;
}

export default function EducationNewsSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Update isPlaying state when video pauses or plays
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    
    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);
  return (
    <section className="bg-[#66050D] py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column - News items */}
          <div className="lg:col-span-8">
            <div className="text-orange-500 uppercase text-sm font-bold tracking-wider mb-3">
            HAPPENINGS AT <span className='text-red-500'>Young</span> <span className='text-yellow-500'>Experts</span> 
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
            This Week at<span className='text-red-500'>Young</span> <span className='text-yellow-500'>Experts</span> : 
            where your ideas come to shine!
            </h2>

            {/* News Item 1 */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 border-b border-[#3d2d80]/30 pb-10">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden h-48 w-full relative">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  >
                    <source src="/videos/happy mothers day.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Sound toggle button */}
                  <button
                    onClick={toggleSound}
                    className="absolute bottom-3 right-3 bg-purple-900 bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-full transition-all duration-300 z-10"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.75a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0110 3.75zM9.383 17.924a.75.75 0 01-1.076-.32l-3.523-7.717a.75.75 0 011.396-.536l3.523 7.717a.75.75 0 01-.32 1.076z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    className="absolute bottom-3 left-3 bg-purple-900 bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-full transition-all duration-300 z-10"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H7z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Video controls overlay - for larger click target */}
                  <div onClick={togglePlayPause} className="absolute inset-0 cursor-pointer z-0">
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-purple-900/40 rounded-full p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-2 text-sm">
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400 mr-4">DADDY'S PRIDE</span>
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400">May 11, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="#" className="hover:text-orange-400 transition-colors">
               Happy Mother's Day
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                Happy Mother’s Day to the beautiful souls who hold the world together with their love! Your grace, strength, and endless warmth are nothing short of magic. Today, we celebrate you—the heartbeats of our homes. 💐✨💖...
                </p>
                <div className="flex items-center text-sm">
                  <span className="text-gray-400">Posted in:</span>
                  <Link href="#" className="text-orange-400 ml-2 hover:underline">Lunch</Link>
                </div>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="md:w-1/3">
                <Image 
                  src="/images/The Day is Near.png"
                  alt="Students in workshop" 
                  width={300}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-2 text-sm">
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400 mr-4">JULIAN AYIVI</span>
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400">JANUARY 24, 2020</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                 The Day is Near
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                A gentle reminder that something special is just around the corner. Stay focused, stay hopeful, and get ready—because the moment you’ve been waiting for is almost here... 🌟
                </p>
              </div>
            </div>

                {/* News Item 3*/}
                <div className="flex flex-col md:flex-row gap-6 mb-10">
              <div className="md:w-1/3">
                <Image 
                  src="/images/THERE LIVED A TOWN CALLED QUEENSURBURG.png"
                  alt="Students in workshop" 
                  width={300}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center mb-2 text-sm">
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400 mr-4">Neriah Elikem Winner</span>
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400">JANUARY 24, 2020</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                 There lived a Queensurburg
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                In a land woven with mystery and grace, Queensurburg stood tall—a realm of stories untold, where legends were born and dreams dared to bloom... 🌙👑
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="p-6 bg-white">
                <h3 className="text-center text-purple-900 font-bold uppercase text-sm tracking-wider mb-4">
                  FUN FACTS ABOUT <span className='text-red-500'>Young</span> <span className='text-yellow-500'>Experts</span>
                </h3>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="text-center">
                    <NumberCounter end={2000} duration={2500} />
                    <div className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1"> NUMBER OF STUDENTS</div>
                    <div className="text-gray-600 text-sm">
                    
                    </div>

                    <div className="mt-8">
                  <a 
                    href="#" 
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
                  >
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    Register as a Student
                    </span>
                  </a>
                </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="text-center">
                    <NumberCounter end={100} duration={2000} />
                    <div className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">NUMBER OF SCHOOLS</div>
                    <div className="text-gray-600 text-sm">
                      partner schools<br/>of Young Experts
                    </div>
                  </div>

                  <div className="mt-8">
                  <a 
                    href="#" 
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
                  >
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    Register as a School
                    </span>
                  </a>
                </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="text-center">
                    <NumberCounter end={50} suffix="+" duration={1500} />
                    <div className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">NUMBER OF TRAINERS</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="#" 
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition-colors duration-300 font-medium"
                  >
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    Register as a Trainer
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
