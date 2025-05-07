import Link from 'next/link';

interface AcademicAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function AcademicAreaItem({ icon, title, description, link }: AcademicAreaProps) {
  return (
    <Link href={link} className="flex flex-col items-center text-center group">
      <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">{title}</h3>
      <p className="text-blue-100 text-sm">{description}</p>
    </Link>
  );
}

export default function AcademicAreasSection() {
  return (
    <section className="py-16 px-6 bg-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Why Ed Academics is best Solution for Education
        </h2>
        <p className="text-blue-100 text-lg max-w-3xl mx-auto text-center mb-12">
          Our comprehensive curriculum covers all key subjects with expert teachers and innovative methods.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <AcademicAreaItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            }
            title="Math"
            description="Develop strong mathematical foundations through interactive learning"
            link="/subjects/math"
          />
          
          <AcademicAreaItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            title="Healthcare"
            description="Learn about health, wellness, and basic first aid skills"
            link="/subjects/healthcare"
          />
          
          <AcademicAreaItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Athletics"
            description="Develop physical fitness, teamwork, and healthy competition"
            link="/subjects/athletics"
          />
          
          <AcademicAreaItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
            title="Writing"
            description="Build strong communication skills through creative and academic writing"
            link="/subjects/writing"
          />
          
          <AcademicAreaItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Service"
            description="Engage in community service projects and develop social responsibility"
            link="/subjects/service"
          />
          
          <AcademicAreaItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
            title="Science"
            description="Explore the natural world through hands-on experiments and discoveries"
            link="/subjects/science"
          />
        </div>
      </div>
    </section>
  );
} 