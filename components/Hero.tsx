import React from 'react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="bg-background text-light-text py-20 md:py-32 min-h-screen flex items-center animate-fade-in-up">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
              Hi, I'm <span className="text-accent">Sang Vũ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Passionate Software Engineer | Building Innovative Solutions
            </p>
            <div className="space-x-4 flex flex-wrap justify-center md:justify-start animate-fade-in-up" style={{animationDelay: '0.3s'}}>
               <button
                onClick={scrollToContact}
                className="bg-accent hover:bg-yellow-600 text-dark-text font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Get In Touch
              </button>
              <a
                href="#projects"
                className="bg-secondary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative group">
              <img
                src="https://picsum.photos/seed/sangvu/400/400"
                alt="Sang Vũ"
                className="rounded-full shadow-2xl mx-auto border-4 border-secondary object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card-bg bg-opacity-80 text-accent px-4 py-1 rounded-full text-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Welcome!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
