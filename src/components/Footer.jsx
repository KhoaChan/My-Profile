import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="w-full py-6 text-center text-gray-500 text-sm relative z-10 glassmorphism border-t-0 border-b-0 border-l-0 border-r-0 border-t border-white/10">
      <p>© 2025 {name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;