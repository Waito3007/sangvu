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
  <div className="bg-background rounded-xl shadow-xl overflow-hidden animate-fade-in-up hover:shadow-2xl transition-shadow duration-300 group">
    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-accent group-hover:underline transition-all duration-300">{project.title}</h3>
      <p className="text-gray-300 mb-4 min-h-[60px]">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span key={tech} className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-dark-text px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-600 transition-colors duration-300">Live</a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-300">Repo</a>
        )}
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-card-bg animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projectsData.map((project, idx) => (
            <div key={project.id} className="bg-background rounded-xl shadow-xl overflow-hidden animate-fade-in-up hover:shadow-2xl transition-shadow duration-300 group" style={{animationDelay: `${idx * 0.15 + 0.2}s`}}>
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-accent group-hover:underline transition-all duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 min-h-[60px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-dark-text px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-600 transition-colors duration-300">Live</a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-300">Repo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
