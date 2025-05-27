
import React from 'react';

const skillsList = [
  { name: 'React', icon: 'logos:react' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS3', icon: 'logos:css-3' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'SQL', icon: 'carbon:sql' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
];

// A simple component for displaying an icon using Iconify.
// You might need to add Iconify to your project or replace with SVGs if not available.
// For this example, using text as placeholder if icons are not rendering from a CDN.
// In a real project, ensure Iconify or an SVG library is properly set up.
const SkillIcon: React.FC<{ icon: string; name: string }> = ({ icon, name }) => (
  <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
    {/* Placeholder for icon - In a real app, use an icon library like react-icons or SVGs */}
    {/* For example, if using Iconify CDN: <span className="iconify text-4xl text-accent mb-2" data-icon={icon}></span> */}
    {/* Using text as fallback for simplicity here */}
    <div className="w-12 h-12 mb-2 bg-secondary rounded-full flex items-center justify-center text-xl font-bold text-white">
      {name.substring(0,1)}
    </div>
    <span className="text-light-text text-sm">{name}</span>
  </div>
);


const Skills: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent animate-fade-in-up">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsList.map((skill, index) => (
            <div key={skill.name} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <SkillIcon icon={skill.icon} name={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
    