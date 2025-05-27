
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const sectionRefs = {
    home: React.useRef<HTMLDivElement>(null),
    about: React.useRef<HTMLDivElement>(null),
    skills: React.useRef<HTMLDivElement>(null),
    projects: React.useRef<HTMLDivElement>(null),
    experience: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: keyof typeof sectionRefs) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <div ref={sectionRefs.home} id="home"><Hero scrollToContact={() => scrollToSection('contact')} /></div>
        <div ref={sectionRefs.about} id="about"><About /></div>
        <div ref={sectionRefs.skills} id="skills"><Skills /></div>
        <div ref={sectionRefs.projects} id="projects"><Projects /></div>
        <div ref={sectionRefs.experience} id="experience"><Experience /></div>
        <div ref={sectionRefs.contact} id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
    