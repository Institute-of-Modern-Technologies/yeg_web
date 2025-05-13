import Link from 'next/link';
import Image from 'next/image';

interface AcademicAreaProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  title: string;
  description: string;
  link: string;
}

function AcademicAreaItem({ icon, imageSrc, title, description, link }: AcademicAreaProps) {
  return (
    <Link href={link} className="flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-14 overflow-hidden rounded-md mb-3 group-hover:shadow-lg transition-all duration-300">
        {imageSrc ? (
          <Image 
            src={imageSrc} 
            alt={title}
            width={80}
            height={60}
            className="w-full h-full object-cover rounded-md shadow-sm group-hover:shadow-orange-500/20"
          />
        ) : icon ? (
          <div className="w-full h-full bg-[#2a1e5c] flex items-center justify-center">
            {icon}
          </div>
        ) : null}
      </div>
      <h3 className="text-base font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">{title}</h3>
      <p className="text-blue-100 text-xs max-w-[140px]">{description}</p>
    </Link>
  );
}

export default function AcademicAreasSection() {
  return (
    <section id="academics" className="py-16 px-6 bg-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Why <span className='text-red-500'>Young</span> <span className='text-yellow-500'>Experts</span>  is best Solution for Innovation
        </h2>
        <p className="text-blue-100 text-lg max-w-3xl mx-auto text-center mb-12">
          Our comprehensive curriculum covers all key subjects with expert trainers and innovative methods.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <AcademicAreaItem
            imageSrc="/images/Screenshot 2025-05-12 152449.png"
            title="Coding"
            description="Learn programming skills through interactive and project-based learning"
            link="/subjects/coding"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot 2025-05-12 152506.png"
            title="Digital Marketing"
            description="Develop business skills and learn how to bring ideas to market"
            link="/subjects/design"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot 2025-05-12 152519.png"
            title="Graphics Design"
            description="Explore creative design and digital art through hands-on projects"
            link="/subjects/robotics"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot 2025-05-12 152537.png"
            title="Entrepreneurship"
            description="Develop business skills and learn how to bring ideas to market"
            link="/subjects/entrepreneurship"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot 2025-05-12 152550.png"
            title="Artificial Intelligence Basics"
            description="Create content for social media, websites, and digital platforms"
            link="/subjects/digital-media"
          />
          
          <AcademicAreaItem
            imageSrc="/images/Screenshot 2025-05-12 152613.png"
            title="Creativity Workshops"
            description="Discover how to turn creative ideas into practical solutions"
            link="/subjects/innovation"
          />
        </div>
      </div>
    </section>
  );
} 