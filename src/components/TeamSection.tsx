import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Eleanor Matthews',
    role: 'Principal',
    bio: 'With over 20 years of experience in education leadership, Dr. Matthews has transformed our school into a center of academic excellence and community engagement.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format'
  },
  {
    id: 2,
    name: 'Professor Robert Chen',
    role: 'Science Department Head',
    bio: 'A former NASA researcher, Professor Chen brings real-world experience to our science programs, inspiring students to pursue careers in STEM fields.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format'
  },
  {
    id: 3,
    name: 'Ms. Sophia Rodriguez',
    role: 'Arts Program Director',
    bio: 'An accomplished artist and educator, Ms. Rodriguez has established our award-winning arts program that encourages creative expression and technical mastery.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format'
  },
  {
    id: 4,
    name: 'Mr. James Wilson',
    role: 'Athletic Director',
    bio: 'Former professional athlete Mr. Wilson has developed comprehensive sports programs that focus on teamwork, personal growth, and athletic excellence.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format'
  }
];

export default function TeamSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated staff of educators and administrators work tirelessly to provide an exceptional learning environment for all students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 line-clamp-4">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition">
            View All Staff Members
          </button>
        </div>
      </div>
    </section>
  );
} 