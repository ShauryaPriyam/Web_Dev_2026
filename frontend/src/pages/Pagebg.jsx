import React from 'react';

const PageBackground = ({ children }) => {
  return (
    /* Uses your 'white1' color from tailwind.config.js */
    <div className="min-h-screen w-full bg-white1 transition-colors duration-300">
      {children}
    </div>
  );
};

export default PageBackground;