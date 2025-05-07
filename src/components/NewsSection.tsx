import NewsCard from './NewsCard';
import Link from 'next/link';

const news = [
  {
    id: 1,
    title: 'Our Science Department Wins National Recognition',
    summary: 'We are proud to announce that our Science Department has been awarded the prestigious National STEM Excellence Award for their innovative teaching methods and student achievements.',
    date: 'June 15, 2023',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800&auto=format'
  },
  {
    id: 2,
    title: 'New Arts Program Launching This Fall',
    summary: 'Starting this September, we&apos;re excited to introduce an expanded arts program that includes digital media, photography, and advanced sculpture techniques for students of all ages.',
    date: 'May 28, 2023',
    category: 'Programs',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format'
  },
  {
    id: 3,
    title: 'Annual Community Service Day Approaches',
    summary: 'Mark your calendars for our annual Community Service Day on July 12th. Students, staff, and parents will work together on various projects to give back to our local community.',
    date: 'May 10, 2023',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format'
  },
  {
    id: 4,
    title: 'International Exchange Program Expands to Include Three New Countries',
    summary: 'Our highly successful International Exchange Program is growing! Starting next academic year, we&apos;ll be partnering with schools in Japan, Brazil, and Germany.',
    date: 'April 22, 2023',
    category: 'Programs',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format'
  }
];

export default function NewsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay up to date with the latest happenings, events, and achievements at our school.
            </p>
          </div>
          
          <Link 
            href="/news" 
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
          >
            View all news
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              summary={item.summary}
              date={item.date}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 