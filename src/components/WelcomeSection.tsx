'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import SectionTransition from './SectionTransition';

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
    <section id="welcome" className="pt-20 pb-16 px-6 bg-white relative overflow-hidden border-y-0">
      {/* Top transition removed as requested */}
      
      {/* Light cyan shadows similar to FAQ section */}
      <div className="absolute top-0 inset-x-0 h-64 rounded-full bg-gradient-to-b from-[#00FFFF]/20 to-transparent filter blur-xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 rounded-full bg-gradient-to-tl from-[#00FFFF]/15 to-transparent filter blur-xl -z-10 pointer-events-none"></div>
      
      {/* Additional subtle corner decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-[#FF00FF]/5 to-transparent rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-t from-[#FF00FF]/5 to-transparent rounded-tr-full pointer-events-none"></div>
      
      {/* Modern geometric accents */}
      <div className="absolute top-5 left-1/4 w-6 h-6 bg-[#00FFFF]/20 rounded-md transform rotate-45 animate-float opacity-60 pointer-events-none"></div>
      <div className="absolute top-12 right-1/3 w-8 h-8 bg-[#00FFFF]/30 rounded-full animate-float-delayed opacity-60 pointer-events-none"></div>
      <div className="absolute top-6 right-1/4 w-4 h-10 bg-[#00FFFF]/20 rounded-sm transform -rotate-12 animate-float opacity-60 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#000000] mb-4 relative inline-block">
            Welcome
           
          </h2>
          <h4 className="text-black font-bold flex flex-row    ml-72 mx-auto">
              Equipping young minds with skills in
              <span className="text-[#c60313] transition-all duration-300 mr-3"> Technology</span> 
              <span className="text-[#000000] transition-all duration-300 mr-3 bg-[#FFFF00] px-2 rounded"> Entrepreneurship</span>
              <span className="text-[#000000] transition-all duration-300 mr-3"> and</span>
              <span className="text-[#FF00FF] transition-all duration-300 mr-3"> Creativity</span>.
            </h4>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)] border-2 border-[#000000] transform transition-all duration-500 hover:shadow-[0_25px_35px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 h-fit hover:border-[#FF00FF]/80">
            <h3 className="text-3xl font-bold text-[#000000] mb-4 flex items-center  border-[#000000]">
              <span className="w-10 h-10 rounded-full bg-[#FF00FF] mr-3 flex items-center justify-center text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </span>
              Our Program
            </h3>

            <p className="text-black mb-6 leading-relaxed text-lg font-medium">
            </p>
            
            <p className="text-black mb-6 leading-relaxed text-lg font-medium">
              We collaborate with schools to provide <span className="font-bold bg-[#FF00FF] text-white px-1 rounded mx-0.5">structured</span>, <span className="font-bold bg-[#FFFF00] text-black px-1 rounded mx-0.5">engaging</span>, and <span className="font-bold bg-[#00FFFF] text-black px-1 rounded mx-0.5">practical</span> learning experiences that prepare students for a <span className="font-bold bg-[#FF00FF] text-white px-1 rounded mx-0.5">tech-driven future</span>.
            </p>

            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center bg-[#FF00FF] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[#FF00FF]/40 hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 mr-2">Find Out More</span>
              <span className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-[#c60313] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Middle Column - Video */}
          <div className="lg:col-span-4 relative">
            <div className="flex flex-col gap-6 h-full">
              {/* Modern Video Player */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(255,0,255,0.5)] transition-all duration-300 border-2 border-[#FF00FF]/20 hover:border-[#FF00FF]/40 transform hover:scale-[1.01]">
                <div className="relative aspect-video">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=800&auto=format"
                    preload="auto"
                    autoPlay
                    loop
                    playsInline
                    muted
                    onClick={togglePlay}
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Simplified Modern Controls */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                    <div className="w-full px-4 pb-3 flex flex-col gap-2">
                      {/* Progress bar and time */}
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden cursor-pointer">
                          <div className="bg-[#FF00FF] h-full" style={{ width: `${progress}%` }}></div>
                        </div>
                        <span className="text-white text-xs">{currentTime}</span>
                      </div>
                      
                      {/* Control buttons */}
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={handleBackward}
                          className="p-1.5 rounded-full bg-[#FF00FF]/70 hover:bg-[#FF00FF] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                          </svg>
                        </button>
                        
                        <button 
                          onClick={togglePlay}
                          className="p-2.5 rounded-full bg-[#FF00FF] hover:bg-[#FF00FF]/90 transition-colors"
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        
                        <button 
                          onClick={handleForward}
                          className="p-1.5 rounded-full bg-[#FF00FF]/70 hover:bg-[#FF00FF] transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modern Video Thumbnails */}
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-3">
                  {/* Thumbnail 1 */}
                  <div className="group relative overflow-hidden rounded-lg shadow-md border-2 border-[#FF00FF]/20 hover:border-[#FF00FF]/60 hover:shadow-[0_5px_15px_rgba(255,0,255,0.4)] transition duration-300 ease-in-out transform hover:scale-[1.02]">
                    <video
                      className="w-full h-full object-cover aspect-video"
                      autoPlay muted loop playsInline
                    >
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-end">
                      <div className="bg-[#FF00FF] rounded-full p-1.5 mb-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-white text-xs font-bold">Young Entrepreneurs</h4>
                    </div>
                  </div>
                  
                  {/* Thumbnail 2 */}
                  <div className="group relative overflow-hidden rounded-lg shadow-md border-2 border-[#00FFFF]/20 hover:border-[#00FFFF]/60 hover:shadow-[0_5px_15px_rgba(0,255,255,0.4)] transition duration-300 ease-in-out transform hover:scale-[1.02]">
                    <video
                      className="w-full h-full object-cover aspect-video"
                      autoPlay muted loop playsInline
                    >
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-end">
                      <div className="bg-[#00FFFF] rounded-full p-1.5 mb-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-white text-xs font-bold">Creative Skills</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)] border-2 border-[#000000] transform transition-all duration-500 hover:shadow-[0_25px_35px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 h-fit hover:border-[#FF00FF]/80">
            <h3 className="text-3xl font-bold text-[#000000] mb-4 border-b-2 border-[#000000]/50 pb-2">Why Partner With Us</h3>

            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-[#FF00FF] text-5xl font-serif font-bold mr-3 leading-none shadow-[0_2px_5px_rgba(0,0,0,0.2)]">T</div>
                <p className="text-black leading-relaxed mt-1 text-lg font-medium">
                  he Young Experts Group (YEG) collaborates with schools to provide hands-on <span className="font-bold bg-[#00FFFF] text-black px-1 rounded mx-0.5">Technology</span>, <span className="font-bold bg-[#FFFF00] text-black px-1 rounded mx-0.5">Entrepreneurship</span>, and <span className="font-bold bg-[#FF00FF] text-white px-1 rounded mx-0.5">Creativity</span> training. Our tailored programs complement academic learning and prepare students for a tech-driven future.
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white border-2 border-[#00FFFF]/50 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:border-[#00FFFF] shadow-[0_10px_15px_-8px_rgba(0,0,0,0.2)]">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#00FFFF] mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
                  <span className="text-[#000000] font-bold text-lg bg-[#00FFFF] px-1 rounded mx-0.5">Integrated Learning</span>
                </div>
                <p className="text-black text-base ml-7 mt-2 font-medium">
                  We work with your school to design a program that fits seamlessly into your academic structure.
                </p>
              </div>
              
              <div className="bg-white border-2 border-[#FFFF00]/50 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:border-[#FFFF00] shadow-[0_10px_15px_-8px_rgba(0,0,0,0.2)] mt-4">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#FFFF00] mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
                  <span className="text-[#000000] font-bold text-lg bg-[#FFFF00] px-1 rounded mx-0.5">Practical & Fun</span>
                </div>
                <p className="text-black text-base ml-7 mt-2 font-medium">
                  Hands-on projects that keep students engaged while learning valuable skills.
                </p>
              </div>
              
              <div className="bg-white border-2 border-[#FF00FF]/50 rounded-lg p-4 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:border-[#FF00FF] shadow-[0_10px_15px_-8px_rgba(0,0,0,0.2)] mt-4">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#FF00FF] mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
                  <span className="text-[#FFFFFF] font-bold text-lg bg-[#FF00FF] px-1 rounded mx-0.5">Flexible & Customizable</span>
                </div>
                <p className="text-black text-base ml-7 mt-2 font-medium">
                  Programs are designed to match your school's specific needs.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-right">
                <div className="italic text-[#FF00FF] text-xl font-bold">
                  YEG Team
                </div>
                <div className="h-1 w-16 bg-[#FF00FF] ml-auto shadow-[0_0_8px_rgba(0,0,0,0.3)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-1px)] overflow-hidden">
        <SectionTransition
          fromColor="white"
          toColor="white"
          accentColor="#00FFFF"
          variant="stairs"
          className="z-10 animate-morph-in"
        />
      </div>
    </section>
  );
}
