import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg text-gray-400 py-8 text-center animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="mb-4 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <a href="https://linkedin.com/in/sangvu-placeholder" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-accent transition-colors duration-300 font-medium">LinkedIn</a>
          <span className="text-gray-600">|</span>
          <a href="https://github.com/sangvu-placeholder" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-accent transition-colors duration-300 font-medium">GitHub</a>
          <span className="text-gray-600">|</span>
          <a href="mailto:sang.vu@example.com" className="px-3 hover:text-accent transition-colors duration-300 font-medium">Email</a>
        </div>
        <p className="text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          &copy; {currentYear} Sang Vũ. All rights reserved.
        </p>
        <p className="text-xs mt-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          Built with <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">TypeScript</span>, and <span className="text-accent font-semibold">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
