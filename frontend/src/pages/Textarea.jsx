import React, { useState } from 'react';

const PostSection = () => {
  const [postContent, setPostContent] = useState('');

  const handleClear = () => {
    setPostContent('');
  };

  return (
    <div className="min-h-screen w-full py-10 bg-[#4A4E54] font-sans">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 125%; }
        }
        .glass-shine-effect {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
          transform: skewX(-15deg);
          pointer-events: none;
        }
        .group:hover .glass-shine-effect {
          animation: shine 1.6s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        
        {/* 1. UPCOMING EVENTS SIDEBAR */}
        <div className="relative w-full md:w-64 overflow-hidden rounded-3xl group">
          <div className="glass-shine-effect" />
          <div className="relative h-full z-0 p-6 bg-indigo-950/40 backdrop-blur-3xl border border-white/10 shadow-2xl min-h-[450px]">
            <h2 className="text-xl font-black tracking-tighter text-blue1 mb-6 italic underline decoration-blue1/30 underline-offset-8">
              UPCOMING <br/> EVENTS
            </h2>
            
            <div className="space-y-6">
              <EventItem date="FEB 18" title="Career Fair 2026" />
              <EventItem date="FEB 22" title="Basketball Finals" />
              <EventItem date="MAR 01" title="Coding Workshop" />
            </div>
          </div>
        </div>

        {/* 2. MAIN POST BOX */}
        <div className="relative flex-1 overflow-hidden rounded-3xl group">
          <div className="glass-shine-effect" />
          <div className="relative z-0 p-6 bg-gray1/40 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] h-full">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue1 shadow-[0_0_15px_rgba(0,173,181,0.4)] flex items-center justify-center text-dark1 font-bold text-lg">
                U
              </div>
              <div className="flex flex-col">
                <span className="text-white1 font-bold tracking-wide text-sm uppercase">New Post</span>
                <span className="text-white1/40 text-[10px] tracking-widest uppercase">Student Portal</span>
              </div>
            </div>

            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind?"
              /* Updated placeholder color from white1/10 to white1/40 for more brightness */
              className="w-full h-64 p-5 bg-dark1/60 text-white1 rounded-2xl outline-none border border-white/5 focus:border-blue1/50 transition-all resize-none placeholder-white1/40 shadow-inner text-base"
            />

            <div className="flex items-center justify-between mt-5">
              <div className="p-2.5 rounded-xl bg-white/5 text-blue1 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleClear}
                  disabled={!postContent.trim()}
                  className={`px-6 py-2.5 rounded-xl font-bold transition-all border ${
                    postContent.trim() 
                    ? "border-red-500/50 text-red-400 hover:bg-red-500/10 opacity-100 shadow-[0_0_15px_rgba(239,68,68,0.2)]" 
                    : "border-white/5 text-white/10 opacity-50 cursor-not-allowed"
                  }`}
                >
                  CLEAR
                </button>

                <button 
                  disabled={!postContent.trim()}
                  className={`px-10 py-2.5 rounded-xl font-black tracking-widest transition-all duration-500 transform active:scale-95 ${
                    postContent.trim() 
                    ? "bg-blue1 text-dark1 shadow-[0_0_25px_rgba(0,173,181,0.5)] hover:scale-105" 
                    : "bg-white/5 text-white1/20 cursor-not-allowed"
                  }`}
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventItem = ({ date, title }) => (
  <div className="group/item cursor-pointer">
    <p className="text-[10px] font-bold text-blue1 tracking-[0.2em]">{date}</p>
    <p className="text-white1 text-sm font-semibold group-hover/item:text-white transition-colors leading-tight">{title}</p>
    <div className="w-0 group-hover/item:w-full h-[1px] bg-blue1/40 transition-all duration-500 mt-2"></div>
  </div>
);

export default PostSection;