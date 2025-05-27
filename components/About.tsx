
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-card-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent animate-fade-in-up">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-background p-8 md:p-10 rounded-xl shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <img 
            src="https://picsum.photos/seed/sangvu-about/150/150" 
            alt="Sang Vũ close up" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-secondary"
          />
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Hello! I'm Sang Vũ, a dedicated software engineer with a profound passion for crafting elegant and efficient solutions to complex problems. My journey in technology has been driven by an insatiable curiosity and a desire to continuously learn and master new tools and techniques.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I thrive in collaborative environments where I can contribute my skills and learn from others. My focus is on developing high-quality, scalable, and user-centric applications. I believe that technology has the power to make a significant positive impact, and I'm excited to be a part of that change.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of coding, I enjoy exploring new tech trends, contributing to open-source projects, and [mention a hobby or two, e.g., hiking, photography, reading].
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
    