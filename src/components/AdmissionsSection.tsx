import Image from 'next/image';
import Link from 'next/link';

export default function AdmissionsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Rolling Admissions Now Open
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re currently accepting applications for the upcoming school year. Our admissions process is designed to be simple and transparent, focusing on finding students who will thrive in our supportive learning environment.
            </p>
            <p className="text-gray-600 mb-8">
              Contact our admissions team today to schedule a campus tour, learn more about our programs, or begin the application process.
            </p>
            
            <div className="flex items-center">
              <Link 
                href="tel:+11234567890" 
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 123 456 7890
              </Link>
            </div>
          </div>
          
          <div className="relative h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format"
              alt="Students at Ed Academy"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 