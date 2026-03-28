import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 shadow-xl px-4 md:px-8 bg-dark1 border-b border-gray1">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/home")}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-2xl bg-blue1 text-dark1 transform group-hover:rotate-6 transition-transform">
            S
          </div>
          <span className="hidden md:block font-bold text-xl tracking-tight text-white1">
            Student<span className="text-blue1">Connect</span>
          </span>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search campus..."
              className="w-full py-2 pl-10 pr-4 rounded-xl focus:outline-none transition-all border-2 border-transparent focus:border-blue1 bg-gray1 text-black"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 stroke-blue1"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <NavLink label="Home" to="/home">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </NavLink>
            <NavLink label="All Posts" to="/post">
              <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </NavLink>
            <NavLink label="Notify" to="/notifications">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </NavLink>
          </div>
          
          <div className="h-8 w-[1px] bg-gray1"></div>

          {/* Profile Button */}
          <button 
            onClick={() => navigate("/profile/id")}
            className="flex items-center gap-2 p-1.5 pr-4 rounded-full bg-gray1 hover:bg-opacity-80 transition-all text-white1"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-semibold">Profile</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white1">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-6 space-y-2 border-t border-gray1 animate-in fade-in slide-in-from-top-2">
          <MobileLink label="Home" to="/home" />
          <MobileLink label="All Posts" to="/post" />
          <MobileLink label="Notifications" to="/notifications" />
          <MobileLink label="My Profile" to="/profile/id" />
        </div>
      )}
    </nav>
  );
};

// Internal Helper Components
const NavLink = ({ children, label, to }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(to)} className="flex flex-col items-center group">
      <svg 
        className="w-6 h-6 transition-all duration-200 group-hover:scale-110 stroke-blue1" 
        fill="none" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={children.props.d} />
      </svg>
      <span className="text-[10px] mt-1 font-bold uppercase tracking-widest text-white1 opacity-70 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </button>
  );
};

const MobileLink = ({ label, to }) => {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate(to)} 
      className="block px-4 py-3 rounded-xl font-medium text-white1 hover:bg-white1 hover:bg-opacity-5 w-full text-left"
    >
      {label}
    </button>
  );
};

export default Navbar;
