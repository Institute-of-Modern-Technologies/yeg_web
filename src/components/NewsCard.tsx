import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}

export default function NewsCard({ id, title, summary, date, category, image }: NewsCardProps) {
  // Making sure we're using .svg files from local or unsplash URLs
  const imgSrc = image.startsWith('http') ? image : image.replace(/\.(jpg|png)$/, '.svg');
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image 
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white text-xs font-medium px-2.5 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{summary}</p>
        
        <Link 
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 