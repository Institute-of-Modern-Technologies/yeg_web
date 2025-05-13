import { AcademicCapIcon, UsersIcon, ClipboardIcon, SparklesIcon } from '@heroicons/react/24/solid';
import React from 'react';

const features = [
  {
    title: 'Community',
    description: 'Connect with students, parents, and staff.',
    icon: UsersIcon,
  },
  {
    title: 'Academies',
    description: 'Specialized & structured academic programs.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Admission',
    description: 'Simple and transparent college admission process.',
    icon: ClipboardIcon,
  },
  {
    title: 'Activities',
    description: 'Engaging extracurricular programs.',
    icon: SparklesIcon,
  },
];

const FeatureCardsSection: React.FC = () => (
  <section className="bg-[#1a1330] py-10 w-full">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map(({ title, description, icon: Icon }, idx) => (
          <div
            key={title}
            tabIndex={0}
            role="button"
            aria-label={title}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.currentTarget.click();
              }
            }}
            className="bg-[#231a3a] rounded-xl p-6 flex flex-col items-center shadow-lg hover:bg-[#2d204d] transition-colors outline-none focus:ring-2 focus:ring-[#FF00FF] cursor-pointer"
          >
            <Icon className="h-10 w-10 text-[#FF00FF] mb-4" aria-hidden="true" />
            <h3 className="text-white text-lg font-bold mb-2 text-center">{title}</h3>
            <p className="text-gray-300 text-sm text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCardsSection; 