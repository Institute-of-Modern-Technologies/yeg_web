import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-16 px-6 relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Learning Community?
          </h2>
          
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Take the first step towards a brighter future. Our admissions team is ready to guide you through the enrollment process and answer any questions you may have.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-[#FF00FF] hover:bg-[#c60313] text-white font-medium px-8 py-3 rounded-md transition"
            >
              Apply Now
            </Link>
            
            <Link 
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-transparent hover:bg-white/10 text-white border border-[#FF00FF] font-medium px-8 py-3 rounded-md transition"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 