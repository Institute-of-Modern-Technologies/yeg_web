import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({ name, role, testimonial, image }: TestimonialCardProps) {
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
      
      <p className="text-black/80">&quot;{testimonial}&quot;</p>
      
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

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "My child has grown so much academically and socially since starting at Ed Academy. The teachers truly care about each student&apos;s success and well-being.",
      name: "Jennifer Davis",
      title: "Parent of a 3rd Grader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format"
    },
    {
      id: 2,
      quote: "We couldn&apos;t be happier with our decision to enroll our daughter here. The curriculum is challenging yet engaging, and the community is so supportive.",
      name: "Michael Roberts",
      title: "Parent of a 1st Grader",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format"
    },
    {
      id: 3,
      quote: "I&apos;m amazed at how much my son has learned in just one semester. The teachers make learning fun and interactive, and he&apos;s excited to go to school every day.",
      name: "Sarah Thompson",
      title: "Parent of a 4th Grader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format"
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-[#f9fafb] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#950713] mb-2 text-center">
          Explore the Students Experience
        </h2>
        <p className="text-black/70 max-w-3xl mx-auto text-center mb-12">
          See what our parents and students have to say about their experience at Young Experts Group
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.title}
              testimonial={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 