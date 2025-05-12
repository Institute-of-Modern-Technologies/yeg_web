'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function WelcomeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const updateProgress = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      const percentage = (current / total) * 100;
      setProgress(percentage);
      
      // Format time as m:ss
      const minutes = Math.floor(current / 60);
      const seconds = Math.floor(current % 60);
      setCurrentTime(`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
    }
  };
  
  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    }
  };
  
  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 10
      );
    }
  };
  
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('ended', () => setIsPlaying(false));
    }
    
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('ended', () => setIsPlaying(false));
      }
    };
  }, []);
  
  return (
    <section id="welcome" className="py-16 px-6 bg-gradient-to-b from-[#1a103c] via-[#2a1e5c] to-[#352470]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4 relative inline-block">
            Welcome
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded-full opacity-80"></span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">Experience excellence in education with YEG</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-fit hover:border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 mr-3 flex items-center justify-center text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </span>
              Our Program
            </h3>

            <p className="text-gray-200 mb-6 leading-relaxed">
              The <span className="font-semibold text-orange-400">Young Experts Group (YEG)</span> is a hands-on training program designed to equip students (ages 6-16) with <span className="text-cyan-300">Technology</span>, <span className="text-yellow-300">Entrepreneurship</span>, and <span className="text-red-300">Creativity</span> skills.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We collaborate with schools to provide structured, engaging, and practical learning experiences that prepare students for a tech-driven future.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-orange-500/40 hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 mr-2">Find Out More</span>
              <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Middle Column - Video */}
          <div className="lg:col-span-4 relative">
            <div className="flex flex-col gap-6 h-full">
              {/* Main Video Player */}
              <div className="bg-gradient-to-b from-[#2a1e5c] to-[#1f1846] rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl border border-purple-700/30 flex-grow">
                <div className="relative aspect-video overflow-hidden">
                  {/* Custom Video Player */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=800&auto=format"
                    preload="auto"
                    autoPlay={true}
                    loop={true}
                    playsInline
                    muted={true}
                    onClick={togglePlay}
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom Video Controls Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col items-center justify-between p-4 transition-opacity duration-300 group ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                    <div className="self-end">
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">{currentTime}</span>
                    </div>
                    
                    <div className="w-full space-y-3">
                      <div className="flex justify-center">
                        <button 
                          className="bg-white/20 hover:bg-white/30 p-2 rounded-full mx-1 transition-colors"
                          onClick={handleBackward}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                          </svg>
                        </button>
                        
                        <button 
                          className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full mx-3 transition-colors flex items-center justify-center"
                          onClick={togglePlay}
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        
                        <button 
                          className="bg-white/20 hover:bg-white/30 p-2 rounded-full mx-1 transition-colors"
                          onClick={handleForward}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden cursor-pointer">
                        <div className="bg-orange-500 h-full" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Educational Video Thumbnails */}
              <div className="grid grid-cols-1 gap-4 flex-grow">
                {/* Video Thumbnail 1 - Main Thumbnail */}
                <div className="bg-gradient-to-br from-orange-500/10 to-purple-800/30 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl border border-orange-500/20 group h-full">
                  <div className="relative aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline
                    >
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-end p-4 opacity-100 group-hover:opacity-90 transition-opacity">
                      <div className="bg-orange-500 rounded-full p-3 mb-3 transform transition-transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-white text-lg font-bold mb-1">Coding for Kids</h4>
                      <p className="text-gray-300 text-sm text-center">Learn the basics of programming in a fun, interactive way</p>
                    </div>
                  </div>
                </div>
                
                {/* Smaller Thumbnails */}
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Video Thumbnail 2 */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-purple-800/30 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl border border-yellow-500/20 group h-full">
                    <div className="relative aspect-video">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline
                      >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-3 opacity-100 group-hover:opacity-90 transition-opacity">
                        <div className="bg-yellow-500 rounded-full p-2 mb-2 transform transition-transform group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-white text-sm font-bold mb-1">Young Entrepreneurs</h4>
                        <p className="text-gray-300 text-xs text-center line-clamp-2">Building business skills for tomorrow's leaders</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Thumbnail 3 */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-800/30 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl border border-cyan-500/20 group h-full">
                    <div className="relative aspect-video">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline
                      >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-3 opacity-100 group-hover:opacity-90 transition-opacity">
                        <div className="bg-cyan-500 rounded-full p-2 mb-2 transform transition-transform group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-white text-sm font-bold mb-1">Creative Skills</h4>
                        <p className="text-gray-300 text-xs text-center line-clamp-2">Unlock your creative potential with hands-on workshops</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/10 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-fit hover:border-orange-500/30">
            <h3 className="text-3xl font-bold text-orange-400 mb-4 border-b border-orange-500/30 pb-2">Why Partner With Us</h3>

            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-orange-400 text-5xl font-serif font-bold mr-3 leading-none">T</div>
                <p className="text-gray-200 leading-relaxed mt-1">
                  he Young Experts Group (YEG) collaborates with schools to provide hands-on <span className="text-cyan-300">Technology</span>, <span className="text-yellow-300">Entrepreneurship</span>, and <span className="text-red-300">Creativity</span> training. Our tailored programs complement academic learning and prepare students for a tech-driven future.
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:bg-blue-900/30 hover:border-blue-400/40">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-400 mr-3 flex-shrink-0"></div>
                  <span className="text-blue-200 font-medium">Integrated Learning</span>
                </div>
                <p className="text-gray-300 text-sm ml-6 mt-1">
                  We work with your school to design a program that fits seamlessly into your academic structure.
                </p>
              </div>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:bg-green-900/30 hover:border-green-400/40">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-400 mr-3 flex-shrink-0"></div>
                  <span className="text-green-200 font-medium">Practical & Fun</span>
                </div>
                <p className="text-gray-300 text-sm ml-6 mt-1">
                  Hands-on projects that keep students engaged while learning valuable skills.
                </p>
              </div>
              
              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3 transform transition-all duration-300 hover:scale-[1.02] hover:bg-orange-900/30 hover:border-orange-400/40">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-orange-400 mr-3 flex-shrink-0"></div>
                  <span className="text-orange-200 font-medium">Flexible & Customizable</span>
                </div>
                <p className="text-gray-300 text-sm ml-6 mt-1">
                  Programs are designed to match your school's specific needs.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-right">
                <div className="italic text-orange-300 text-xl font-script">
                  YEG Team
                </div>
                <div className="h-0.5 w-16 bg-orange-400 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
