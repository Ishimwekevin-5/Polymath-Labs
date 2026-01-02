
import React from 'react';
import { GalleryItem } from '../types';

interface GalleryCardProps {
  item: GalleryItem;
}

/**
 * Enhanced Tooltip component with glassmorphism and smoother transitions
 * to match the Polymath Labs aesthetic.
 */
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => (
  <div className="relative group/tooltip flex items-center justify-center">
    {children}
    <div className="absolute bottom-full mb-4 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-xl opacity-0 group-hover/tooltip:opacity-100 transition-all duration-500 ease-out pointer-events-none whitespace-nowrap z-50 translate-y-3 group-hover/tooltip:translate-y-0 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10">
      {text}
      <div className="absolute top-[98%] left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-black/80" />
    </div>
  </div>
);

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const isMusic = item.tool === 'MusicFX';

  return (
    <div className={`relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] cursor-pointer shadow-lg transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] hover:-translate-y-3 ${item.bgColor || 'bg-black'}`}>
      
      {/* Tool Badge with Tooltip */}
      <div className="absolute top-6 right-6 z-30">
        <Tooltip text={`${item.tool} powered`}>
          <div className={`px-5 py-2.5 rounded-full text-[11px] font-black tracking-widest uppercase backdrop-blur-2xl shadow-sm transition-all duration-700 border border-white/20 ${
            isMusic 
            ? 'bg-white/40 text-black group-hover:bg-black group-hover:text-white' 
            : 'bg-indigo-600/80 text-white group-hover:bg-indigo-700'
          }`}>
            {item.tool}
          </div>
        </Tooltip>
      </div>

      {/* Media Content */}
      <div className="w-full h-full relative">
        {item.type === 'image' ? (
          <>
            <img 
              src={item.image} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110" 
              alt={item.title} 
            />
            {/* Multi-stop Gradient Overlay for Cinematic Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
          </>
        ) : (
          /* MusicFX Visual Refinement */
          <div className="w-full h-full flex flex-col items-center justify-center p-10 text-black bg-gradient-to-br from-white/20 to-black/5 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="mb-8 uppercase text-[10px] font-black tracking-[0.4em] opacity-30 group-hover:opacity-100 group-hover:tracking-[0.5em] transition-all duration-700">
              BY: {item.author}
            </div>
            
            <h4 className="text-3xl font-medium text-center mb-12 tracking-tighter leading-[1.1] group-hover:scale-105 transition-transform duration-1000">
              {item.title}
            </h4>
            
            {/* Record Visual */}
            <div className="relative w-52 h-52 rounded-full border border-black/5 flex items-center justify-center group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-1000 bg-white/5">
              <div className="absolute inset-0 rounded-full border-t border-black/10 animate-[spin_15s_linear_infinite] group-hover:animate-[spin_5s_linear_infinite] transition-all" />
              <div className="w-44 h-44 rounded-full border border-black/5 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border border-black/5 flex items-center justify-center bg-white/10 shadow-inner">
                  <div className="w-20 h-20 rounded-full bg-[#f4c2e6] border border-black/10 shadow-lg group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </div>

            {/* Controls with Refined Tooltips */}
            <div className="absolute bottom-10 left-8 right-8 flex items-center justify-between gap-4 px-2 z-10">
               <Tooltip text="About">
                 <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 group-hover:border-black/20">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                 </div>
               </Tooltip>
               
               <Tooltip text="Play Session">
                 <div className="w-24 h-16 rounded-[1.5rem] bg-black text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-all duration-500 group-hover:shadow-2xl">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                 </div>
               </Tooltip>

               <Tooltip text="Previous">
                 <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 group-hover:border-black/20">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                 </div>
               </Tooltip>
            </div>
          </div>
        )}
      </div>

      {/* Text Info - Sliding up reveal animation */}
      {item.type === 'image' && (
        <div className="absolute bottom-10 left-10 right-10 text-white z-20 transform translate-y-6 group-hover:translate-y-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100">
          <h4 className="text-3xl font-bold mb-2 tracking-tight drop-shadow-lg">
            {item.title}
          </h4>
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-white/40 group-hover:w-12 transition-all duration-700" />
            <p className="text-[13px] font-black tracking-[0.1em] text-white/70 uppercase">
              {item.author}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
