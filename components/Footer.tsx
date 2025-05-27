
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-bg text-gray-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <div className="mb-4">
          <a href="https://linkedin.com/in/sangvu-placeholder" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-accent transition-colors duration-300">LinkedIn</a>
          <span className="text-gray-600">|</span>
          <a href="https://github.com/sangvu-placeholder" target="_blank" rel="noopener noreferrer" className="px-3 hover:text-accent transition-colors duration-300">GitHub</a>
          <span className="text-gray-600">|</span>
           <a href="mailto:sang.vu@example.com" className="px-3 hover:text-accent transition-colors duration-300">Email</a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Sang Vũ. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    