
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel for managing products and orders.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application helping teams organize, track, and manage their projects and tasks efficiently.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'GraphQL'],
    liveLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    description: 'A dynamic portfolio generator that allows users to input their information and generate a personalized, modern web portfolio.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    techStack: ['Vue.js', 'Nuxt.js', 'Netlify', 'JavaScript'],
    repoLink: '#',
  },
   {
    id: 4,
    title: 'AI Story Weaver',
    description: 'An interactive storytelling platform powered by AI, where users can co-create narratives with a generative language model.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    techStack: ['Python', 'Flask', 'Gemini API', 'React'],
    liveLink: '#',
    repoLink: '#',
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-card-bg rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-accent/30">
    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3 text-accent">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed h-20 overflow-y-auto">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-secondary/50 text-light-text text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-start space-x-4 mt-auto">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-yellow-400 transition-colors duration-300 font-medium inline-flex items-center"
          >
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-yellow-400 transition-colors duration-300 font-medium inline-flex items-center"
          >
            GitHub Repo
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
             </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent animate-fade-in-up">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
             <div key={project.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
    