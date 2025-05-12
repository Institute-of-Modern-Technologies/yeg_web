import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EducationNewsSection() {
  return (
    <section className="bg-[#1e1033] py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column - News items */}
          <div className="lg:col-span-8">
            <div className="text-orange-500 uppercase text-sm font-bold tracking-wider mb-3">
            HAPPENINGS AT <span className='text-red-500'>Y</span> <span className='text-yellow-500'>E</span> <span className='text-cyan-500'>G</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
            This Week at <span className='text-red-500'>Y</span> <span className='text-yellow-500'>E</span> <span className='text-cyan-500'>G</span>: <br />
            Certified Highlights & Top Stories
            </h2>

            {/* News Item 1 */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 border-b border-[#3d2d80]/30 pb-10">
              <div className="md:w-1/3">
                <Image 
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=300&auto=format" 
                  alt="Student with tablet"
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
                  <span className="text-gray-400 mr-4">AISLIN</span>
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400">JANUARY 24, 2020</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Scholastic Awards Honor
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  On the river, on East 83rd Street, we will be here. Educating girls who are undaunted in their...
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
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=300&auto=format" 
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
                  <span className="text-gray-400 mr-4">AISLIN</span>
                  <div className="text-orange-400 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400">JANUARY 24, 2020</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Mayor's Info in English – Watch the video
                  </Link>
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  To champion such rare and precious places in this world—to tend them, protect them, to make them whole...
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="p-6 bg-white">
                <h3 className="text-center text-purple-900 font-bold uppercase text-sm tracking-wider mb-4">
                  FUN FACTS ABOUT <span className='text-red-500'>Y</span> <span className='text-yellow-500'>E</span> <span className='text-cyan-500'>G</span>
                </h3>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="text-center">
                    <div className="text-purple-900 text-5xl font-bold mb-1">2000</div>
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
                    <div className="text-purple-900 text-5xl font-bold mb-1">100</div>
                    <div className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-1">NUMBER OF SCHOOLS</div>
                    <div className="text-gray-600 text-sm">
                      partner schools<br/>of YEG
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
                    <div className="text-purple-900 text-5xl font-bold mb-1">50+</div>
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
