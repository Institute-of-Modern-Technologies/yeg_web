import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export default function EventCard({ id, title, date, time, location, image }: EventCardProps) {
  // Making sure we're using .svg files from local or unsplash URLs
  const imgSrc = image.startsWith('http') ? image : image.replace(/\.(jpg|png)$/, '.svg');

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48">
        <Image 
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          
          <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {time}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        
        <div className="flex items-center mb-4 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
        
        <div className="mt-auto">
          <Link 
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
} 