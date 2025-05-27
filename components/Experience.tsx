
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
  <div className="relative pl-10 animate-fade-in-up">
    <div className="absolute left-0 top-0 h-full">
      <span className="block w-4 h-4 bg-accent rounded-full absolute left-[-7.5px] top-1 ring-4 ring-card-bg"></span>
      {!isLast && <span className="block w-0.5 h-full bg-secondary/50 absolute left-0 top-4"></span>}
    </div>
    <div className="mb-8 ml-4 p-6 bg-card-bg rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
        <div className="flex items-center mb-2">
            {item.logoUrl && <img src={item.logoUrl} alt={`${item.company} logo`} className="w-8 h-8 rounded-full mr-3"/>}
            <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
        </div>
      <p className="text-md text-gray-400 mb-1">{item.company}</p>
      <p className="text-sm text-gray-500 mb-3">{item.duration}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
        {item.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent animate-fade-in-up">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto relative">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} isLast={index === experienceData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
    