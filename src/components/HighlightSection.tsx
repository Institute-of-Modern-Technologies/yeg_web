import Link from 'next/link';

export default function HighlightSection() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-100 rounded-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Discover our Top School Child Benefits
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl">
            At Ed Academy, we believe every child deserves the best educational experience. Our programs are designed to nurture curiosity, build confidence, and develop critical thinking skills in a safe and supportive environment. Our small class sizes ensure personalized attention for each student.
          </p>
          <Link 
            href="/benefits" 
            className="inline-block bg-[#FF00FF] hover:bg-[#c60313] text-white font-medium px-6 py-3 rounded-md transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
} 