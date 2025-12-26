import React, { useState, useEffect } from 'react';
import { content } from './data/content';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Blog from './components/sections/Blog';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

const PersonalBlog = () => {
  const [language, setLanguage] = useState('vn');
  const [visibleSections, setVisibleSections] = useState(['home']);

  const t = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden relative">
      <AnimatedBackground />

      {/* Styles - Bạn có thể chuyển phần này sang file index.css nếu muốn */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(80px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeInScale { animation: fadeInScale 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-blink { animation: blink 1s infinite; }
        
        .glassmorphism { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
        .section-hidden { opacity: 0; transform: translateY(100px); }
        .section-visible { opacity: 1; transform: translateY(0); transition: all 1s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-15px) scale(1.02); box-shadow: 0 25px 50px rgba(99, 102, 241, 0.3); }
        .smooth-transition { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
      `}</style>

      <Navbar 
        t={t} 
        language={language} 
        setLanguage={setLanguage} 
        scrollToSection={scrollToSection} 
      />

      <Home 
        data={t.home} 
        scrollToSection={scrollToSection} 
        isVisible={visibleSections.includes('home')} 
      />

      <About 
        data={t.about} 
        isVisible={visibleSections.includes('about')} 
      />

      <Blog 
        data={t.blog} 
        isVisible={visibleSections.includes('blog')} 
      />

      <Certificates 
        data={t.certificates} 
        isVisible={visibleSections.includes('certificates')} 
      />

      <Contact 
        data={t.contact} 
        isVisible={visibleSections.includes('contact')} 
      />

      <Footer name={t.home.name} />
    </div>
  );
};

export default PersonalBlog;