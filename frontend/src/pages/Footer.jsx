import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark1 border-t border-white/5 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
        
        {/* Main Text */}
        <p className="text-white1/60 font-medium tracking-wide text-sm flex items-center gap-2">
          <span>Made with</span>
          <svg 
            className="w-4 h-4 text-red-500 animate-pulse fill-current" 
            viewBox="0 0 20 20"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          <span>by students of</span>
          <span className="text-blue1 font-bold tracking-tighter">IIT Ropar</span>
        </p>

        {/* Subtle Bottom Line */}
        <div className="mt-4 flex gap-6 text-[11px] uppercase tracking-widest text-white1/20 font-bold">
          <span className="hover:text-blue1 cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-blue1 cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-blue1 cursor-pointer transition-colors">Contact</span>
        </div>

        <div className="mt-6 text-[10px] text-white1/10">
          © 2026 StudentConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;