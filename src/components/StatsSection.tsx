import Image from 'next/image';

const stats = [
  { id: 1, value: '95%', label: 'Graduation Rate' },
  { id: 2, value: '80+', label: 'Experienced Faculty' },
  { id: 3, value: '60+', label: 'Extracurricular Activities' },
  { id: 4, value: '25+', label: 'Years of Excellence' }
];

export default function StatsSection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format"
          alt="Background"
          fill
          className="object-cover brightness-50"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our School by the Numbers</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            For over two decades, we&apos;ve maintained a commitment to educational excellence and creating opportunities for student success.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 