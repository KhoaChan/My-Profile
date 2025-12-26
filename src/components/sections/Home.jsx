import React, { useState, useEffect, useCallback } from 'react';

const Home = ({ data, scrollToSection, isVisible }) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  const handleTyping = useCallback(() => {
    const currentWord = data.titles[wordIndex];
    if (isTyping) {
      if (charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % data.titles.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex, data.titles]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center px-6 pt-20 relative z-10 ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-white space-y-6">
          <div className="inline-block animate-float">
            <div className="glassmorphism px-4 py-2 rounded-full">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-sm font-medium flex items-center">
                <span className="mr-2">✨</span>
                Developer 
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold animate-slideInLeft">
            {data.greeting}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {data.name}
            </span>
          </h1>

          <div className="h-12 flex items-center animate-slideInLeft" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <span className="text-2xl md:text-3xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="w-[3px] h-6 bg-gradient-to-t from-purple-400 to-blue-400 ml-1 animate-blink"></span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed animate-slideInLeft" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {data.desc}
          </p>

          <button
            onClick={() => scrollToSection('about')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-lg font-bold shadow-2xl hover:shadow-purple-500/50 smooth-transition hover:scale-110 animate-slideInLeft"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            <span className="flex items-center gap-2">
              {data.cta}
              <span className="group-hover:translate-x-2 smooth-transition">→</span>
            </span>
          </button>
        </div>

        <div className="flex-1 flex justify-center animate-slideInRight" style={{ opacity: 0 }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-float"></div>
            <img
              src="z7369246231670_e131056cce4705a7e23931052b69c48e.jpg"
              alt="Profile"
              className="relative w-80 h-96 rounded-2xl object-cover border-8 border-white/20 shadow-2xl group-hover:scale-105 group-hover:rotate-2 smooth-transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;