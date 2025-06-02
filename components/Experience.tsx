import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  logoUrl?: string;
}

const experienceData: ExperienceItemProps[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Innovatech Solutions Ltd.',
    duration: 'Jan 2022 - Present',
    description: [
      'Led the development of key features for a flagship SaaS product, improving user engagement by 20%.',
      'Mentored junior developers, fostering a culture of growth and knowledge sharing.',
      'Architected and implemented scalable microservices using Node.js and Docker.',
      'Collaborated with cross-functional teams to define project requirements and deliverables.'
    ],
    logoUrl: 'https://picsum.photos/seed/company1/50/50'
  },
  {
    title: 'Software Developer',
    company: 'Tech Forward Inc.',
    duration: 'Jun 2020 - Dec 2021',
    description: [
      'Developed and maintained web applications using React, Redux, and TypeScript.',
      'Participated in agile development cycles, contributing to sprint planning and code reviews.',
      'Integrated third-party APIs to enhance application functionality.',
      'Contributed to improving code quality and test coverage.'
    ],
    logoUrl: 'https://picsum.photos/seed/company2/50/50'
  },
  {
    title: 'Junior Developer Intern',
    company: 'Code Crafters Co.',
    duration: 'May 2019 - Aug 2019',
    description: [
      'Assisted senior developers in bug fixing and feature implementation for various client projects.',
      'Gained hands-on experience with version control (Git) and agile methodologies.',
      'Developed UI components using HTML, CSS, and JavaScript.',
    ],
    logoUrl: 'https://picsum.photos/seed/company3/50/50'
  }
];

const ExperienceItem: React.FC<{ item: ExperienceItemProps; isLast: boolean }> = ({ item, isLast }) => (
  <div className={`flex items-start gap-6 mb-10 animate-fade-in-up`} style={{animationDelay: isLast ? '0.3s' : '0.2s'}}>
    <img src={item.logoUrl} alt={item.company} className="w-14 h-14 rounded-full shadow-lg border-2 border-secondary bg-white object-cover" />
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-accent mb-1">{item.title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <span className="text-light-text font-medium">{item.company}</span>
        <span className="text-xs text-gray-400">{item.duration}</span>
      </div>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {item.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, idx) => (
            <ExperienceItem key={item.company + item.title} item={item} isLast={idx === experienceData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
