import { Course } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

// Map of course subjects to appropriate Unsplash images
const courseImages: Record<string, string> = {
  'mathematics': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format',
  'science': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format',
  'history': 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=600&auto=format',
  'english': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format',
  'art': 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=600&auto=format',
  'music': 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=600&auto=format',
  'physical education': 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format',
  'computer science': 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=600&auto=format',
  'default': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format'
};

// Helper to ensure correct image formats
function getImageUrl(subject: string, customImage?: string): string {
  if (customImage) {
    return customImage.startsWith('http') ? customImage : customImage.replace(/\.(jpg|png)$/, '.svg');
  }
  return courseImages[subject.toLowerCase()] || courseImages.default;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Find appropriate image based on subject or use default
  const imageUrl = getImageUrl(course.subject);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image 
          src={imageUrl}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-blue-900">{course.title}</h3>
          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {course.level}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <Link 
            href={`/courses/${course.id}`}
            className="text-blue-700 hover:text-blue-900 font-medium text-sm"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CoursesSection() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Photography Class for Elementary Kids',
      description: 'Introduce your child to the world of photography with our fun and interactive course designed specifically for elementary students.',
      instructor: 'Jennifer Smith',
      subject: 'Art',
      level: 'Beginner',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'A High School with Education Science',
      description: 'An advanced science course for high school students that explores modern scientific concepts through hands-on experiments and research projects.',
      instructor: 'Michael Johnson',
      subject: 'Science',
      level: 'Advanced',
      duration: '16 weeks',
    },
    {
      id: 3,
      title: 'Start Learning Sign Language',
      description: 'Learn the fundamentals of sign language in this comprehensive beginner course designed for students of all ages.',
      instructor: 'Sarah Wilson',
      subject: 'Language',
      level: 'Beginner',
      duration: '12 weeks',
    },
    {
      id: 4,
      title: 'How to Write an Essay Essay',
      description: 'Master the art of essay writing with this comprehensive course covering structure, research methods, and effective writing techniques.',
      instructor: 'David Thompson',
      subject: 'English',
      level: 'Intermediate',
      duration: '10 weeks',
    }
  ];
  
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Latest Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id}
              course={course}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition"
          >
            All Courses
          </Link>
        </div>
      </div>
    </section>
  );
} 