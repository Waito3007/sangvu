import React from 'react';

// Heroicons SVGs (ClipboardCopyIcon, MailIcon, etc.)
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClipboardCopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);


const Contact: React.FC = () => {
  const email = 'sang.vu@example.com'; // Replace with actual email
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="py-16 md:py-24 bg-background text-light-text animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4 justify-center">
              <a href="https://linkedin.com/in/sangvu-placeholder" target="_blank" rel="noopener noreferrer" className="bg-card-bg p-3 rounded-full shadow hover:bg-secondary hover:text-white transition-colors duration-300 animate-fade-in-up" style={{animationDelay: '0.3s'}} aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://github.com/sangvu-placeholder" target="_blank" rel="noopener noreferrer" className="bg-card-bg p-3 rounded-full shadow hover:bg-secondary hover:text-white transition-colors duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}} aria-label="GitHub"><GitHubIcon /></a>
              <a href={`mailto:${email}`} className="bg-card-bg p-3 rounded-full shadow hover:bg-secondary hover:text-white transition-colors duration-300 animate-fade-in-up" style={{animationDelay: '0.5s'}} aria-label="Email"><MailIcon /></a>
            </div>
            <div className="flex items-center gap-2 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <span className="text-gray-300 font-mono text-lg select-all">{email}</span>
              <button onClick={copyToClipboard} className="ml-2 p-2 rounded-full bg-card-bg hover:bg-accent hover:text-dark-text transition-colors duration-300 shadow" aria-label="Copy email">
                <ClipboardCopyIcon />
              </button>
              {copied && <span className="text-accent text-sm ml-2 animate-fade-in-up">Copied!</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
