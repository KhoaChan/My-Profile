import React from 'react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Contact = ({ data, isVisible }) => {
  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center px-6 py-20 relative z-10 ${
        isVisible ? 'section-visible' : 'section-hidden'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300">{data.subtitle}</p>
        </div>

        {/* Layout nằm ngang trên desktop (md:flex-row) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          
          {/* Email Block */}
          <div className="glassmorphism p-8 rounded-3xl smooth-transition hover:bg-white/10 flex-1 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4">📧</div>
            <h3 className="text-white font-semibold text-xl mb-2">{data.email}</h3>
            <p className="text-gray-400 text-lg">khoab127@gmail.com</p>
          </div>

          {/* Phone Block */}
          <div className="glassmorphism p-8 rounded-3xl smooth-transition hover:bg-white/10 flex-1 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4">📱</div>
            <h3 className="text-white font-semibold text-xl mb-2">{data.phone}</h3>
            <p className="text-gray-400 text-lg">0814 674 898</p>
          </div>

          {/* Social Block */}
          <div className="glassmorphism p-8 rounded-3xl smooth-transition hover:bg-white/10 flex-1 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4">🌐</div>
            <h3 className="text-white font-semibold text-xl mb-4">{data.social}</h3>
            <div className="flex gap-6">
              
              {/* Github Icon */}
              <a 
                href="https://github.com/KhoaChan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-800 smooth-transition hover:scale-110 shadow-lg"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;