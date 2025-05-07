import EventCard from './EventCard';
import Link from 'next/link';

interface EventType {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

const events: EventType[] = [
  {
    id: 1,
    title: 'Parent-Teacher Conference',
    date: 'Nov 15, 2023',
    time: '4:00 PM - 8:00 PM',
    location: 'Main Building',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format'
  },
  {
    id: 2,
    title: 'Annual Science Fair',
    date: 'Dec 5, 2023',
    time: '10:00 AM - 3:00 PM',
    location: 'Science Building',
    image: 'https://images.unsplash.com/photo-1564197671698-4598548898e8?q=80&w=800&auto=format'
  },
  {
    id: 3,
    title: 'Winter Arts Festival',
    date: 'Dec 12, 2023',
    time: '6:00 PM - 9:00 PM',
    location: 'Auditorium',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format'
  }
];

export default function EventsSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl">
              Join us for these exciting events and become a part of our vibrant educational community.
            </p>
          </div>
          
          <Link 
            href="/events" 
            className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
          >
            View all events
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 