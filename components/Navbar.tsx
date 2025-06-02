import React, { useState } from 'react';

interface NavbarProps {
  scrollToSection: (sectionId: 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact') => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-3 py-2 rounded-md text-sm font-medium text-light-text hover:bg-secondary hover:text-white transition-colors duration-300"
  >
    {children}
  </button>
);

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'about' as const, label: 'About' },
    { id: 'skills' as const, label: 'Skills' },
    { id: 'projects' as const, label: 'Projects' },
    { id: 'experience' as const, label: 'Experience' },
    { id: 'contact' as const, label: 'Contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-card-bg sticky top-0 z-50 shadow-lg animate-fade-in-down backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex-shrink-0 text-accent text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300">
              Sang Vũ
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, idx) => (
                <NavLink key={item.id} onClick={() => scrollToSection(item.id)}>
                  <span className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-110" style={{transitionDelay: `${idx * 50}ms`}}>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-light-text hover:text-accent focus:outline-none focus:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in-down bg-card-bg bg-opacity-95 backdrop-blur-md shadow-lg rounded-b-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            {navItems.map((item, idx) => (
              <NavLink key={item.id} onClick={() => { scrollToSection(item.id); setIsMobileMenuOpen(false); }}>
                <span className="block py-2 px-4 text-lg transition-transform duration-300 hover:scale-105" style={{transitionDelay: `${idx * 50}ms`}}>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
