import React from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
  link: string;
}

export default function FeatureCard({ icon, title, bgColor, link }: FeatureCardProps) {
  return (
    <Link 
      href={link}
      className={`flex flex-col items-center justify-center text-center aspect-square ${bgColor} rounded-lg transition-transform hover:scale-105`}
    >
      <div className="text-white mb-3">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </Link>
  );
}

export function FeatureSection() {
  return (
    <section className="bg-[#2a1e5c] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          title="Community"
          bgColor="bg-orange-500"
          link="/community"
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
          title="Academics"
          bgColor="bg-blue-500"
          link="/academics"
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
          title="Admission"
          bgColor="bg-pink-500"
          link="/admission"
        />
        <FeatureCard
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
          title="Activities"
          bgColor="bg-indigo-500"
          link="/activities"
        />
      </div>
    </section>
  );
}