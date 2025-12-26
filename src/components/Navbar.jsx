import React from 'react';

const Navbar = ({ t, language, setLanguage, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full glassmorphism shadow-2xl z-50 smooth-transition">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-float">
          Bùi Văn Khoa
        </div>
        <ul className="flex gap-8 items-center">
          {['home', 'about', 'blog', 'certificates', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-gray-300 font-medium hover:text-white smooth-transition relative group"
              >
                {t.nav[item]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full smooth-transition"></span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage('vn')}
            className={`px-4 py-2 rounded-lg font-semibold smooth-transition ${
              language === 'vn'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-110'
                : 'glassmorphism text-gray-300 hover:bg-white/10'
            }`}
          >
            VN
          </button>
          <button
            onClick={() => setLanguage('us')}
            className={`px-4 py-2 rounded-lg font-semibold smooth-transition ${
              language === 'us'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-110'
                : 'glassmorphism text-gray-300 hover:bg-white/10'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;