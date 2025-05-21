import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  fullTestimonial?: string;
  image: string;
  id: number;
  isExpanded: boolean;
  onReadMoreClick: (id: number) => void;
}

export default function TestimonialCard({ name, role, testimonial, fullTestimonial, image, id, isExpanded, onReadMoreClick }: TestimonialCardProps) {
  // Making sure we're using .svg files from local or unsplash URLs
  const imgSrc = image.startsWith('http') ? image : image.replace(/\.(jpg|png)$/, '.svg');

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-[#00FFFF]/20 hover:border-[#950713]/30 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image 
            src={imgSrc} 
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-[#950713]">{name}</h3>
          <p className="text-black/70 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="text-black/80 relative">
        <p>&quot;{isExpanded && fullTestimonial ? fullTestimonial : testimonial}&quot;</p>
        
        {fullTestimonial && fullTestimonial !== testimonial && (
          <button 
            onClick={() => onReadMoreClick(id)}
            className="mt-2 text-[#FF00FF] hover:text-[#950713] font-medium text-sm inline-flex items-center group transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'Read More'} 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      <div className="mt-4 flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-[#FFFF00]" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

// This component has been moved to TestimonialsSection.tsx 