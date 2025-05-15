"use client";

import Link from 'next/link';
import Image from 'next/image';
import SectionTransition from './SectionTransition';

interface AcademicAreaProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  title: string;
  description: string;
  link: string;
}

function AcademicAreaItem({ icon, imageSrc, title, description, link }: AcademicAreaProps) {
  // Determine if the link is internal (starts with #) or might lead to a 404 page
  const finalHref = link.startsWith('#') ? link : '#';
  const handleClick = link.startsWith('#') ? undefined : (e: React.MouseEvent) => e.preventDefault();
  
  return (
    <Link 
      href={finalHref} 
      onClick={handleClick}
      className="flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-20 h-20 flex items-center justify-center mb-3 transition-all duration-200 hover:scale-110">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={title}
            width={80}
            height={80}
            style={{ maxWidth: '100%', height: 'auto' }}
            className="object-contain"
          />
        ) : icon ? (
          <div className="w-full h-full bg-[#2a1e5c] flex items-center justify-center">
            {icon}
          </div>
        ) : null}
      </div>
      <h3 className="text-base font-bold text-[#2a1e5c] mb-1 group-hover:text-[#FF00FF] transition-colors">{title}</h3>
      <p className="text-gray-600 text-xs max-w-[140px]">{description}</p>
    </Link>
  );
}

export default function AcademicAreasSection() {
  return (
    <section id="academics" className="py-16 px-6 bg-white relative z-10 overflow-hidden">
      {/* Top morphing transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden z-20">
        <SectionTransition
          fromColor="white"
          toColor="white"
          accentColor="#00FFFF"
          variant="zigzag"
          flipY={true}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-[#2a1e5c] mb-4 text-center">
          Why <span className='text-red-500'>Young</span> <span className='text-yellow-500'>Experts</span> <span className='text-cyan-500'>Group</span> best Solution for Innovation
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-12">
          Our comprehensive curriculum covers all key subjects with expert trainers and innovative methods.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <AcademicAreaItem
            imageSrc="/images/Screenshot_2025-05-12_152449-removebg-preview.png"
            title="Coding"
            description="Learn programming skills through interactive and project-based learning"
            link="/subjects/coding"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot_2025-05-12_152506-removebg-preview.png"
            title="Digital Marketing"
            description="Develop business skills and learn how to bring ideas to market"
            link="/subjects/design"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot_2025-05-12_152519-removebg-preview.png"
            title="Graphics Design"
            description="Explore creative design and digital art through hands-on projects"
            link="/subjects/robotics"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot_2025-05-12_152537-removebg-preview.png"
            title="Entrepreneurship"
            description="Develop business skills and learn how to bring ideas to market"
            link="/subjects/entrepreneurship"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot_2025-05-12_152550-removebg-preview.png"
            title="Artificial Intelligence Basics"
            description="Create content for social media, websites, and digital platforms"
            link="/subjects/digital-media"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot_2025-05-12_152613-removebg-preview.png"
            title="Creativity Workshops"
            description="Discover how to turn creative ideas into practical solutions"
            link="/subjects/innovation"
          />
        </div>
      </div>
      
      {/* Bottom morphing transition */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-1px)] overflow-hidden z-20">
        <SectionTransition
          fromColor="white"
          toColor="white"
          accentColor="#950713"
          variant="geometric"
          className="z-10 animate-morph-in"
        />
      </div>
    </section>
  );
} 