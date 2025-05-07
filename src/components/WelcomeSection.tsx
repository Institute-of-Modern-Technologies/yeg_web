import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Welcome</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              At our school, we believe that learning should be an engaging and enriching experience. We provide the tools and resources that allow our students to explore, create and thrive in the world around them.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Experienced and passionate teachers</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Innovative teaching methods</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Vibrant and safe learning environment</span>
              </li>
            </ul>
            
            <Link 
              href="/about" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition"
            >
              Find Out More
            </Link>
          </div>
          
          <div className="relative">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format"
                alt="Students learning together"
                fill
                className="object-cover"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  aria-label="Play video"
                  className="w-16 h-16 bg-orange-500 hover:bg-orange-600 transition rounded-full flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <Image 
                src="https://images.unsplash.com/photo-1485546784815-e380f3297414?q=80&w=300&auto=format"
                alt="Student activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 