
import React from 'react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="bg-background text-light-text py-20 md:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Sang Vũ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Passionate Software Engineer | Building Innovative Solutions
            </p>
            <div className="space-x-4">
               <button
                onClick={scrollToContact}
                className="bg-accent hover:bg-yellow-600 text-dark-text font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
              <a
                href="#projects" // Simple anchor link for now, or use scrollToSection
                className="bg-secondary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <img
              src="https://picsum.photos/seed/sangvu/400/400"
              alt="Sang Vũ"
              className="rounded-full shadow-2xl mx-auto border-4 border-secondary object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
    