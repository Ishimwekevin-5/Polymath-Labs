
import React from 'react';
import { GalleryItem } from '../types';

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  const isMusic = item.tool === 'MusicFX';

  return (
    <div className={`relative group rounded-[2.5rem] overflow-hidden aspect-[4/5] cursor-pointer shadow-lg ${item.bgColor || 'bg-black'}`}>
      
      {/* Tool Badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className={`px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-md shadow-sm transition-all duration-300 ${
          isMusic 
          ? 'bg-transparent border border-black/20 text-black group-hover:bg-black group-hover:text-white' 
          : 'bg-indigo-400/80 text-white group-hover:bg-indigo-500'
        }`}>
          {item.tool}
        </div>
      </div>

      {/* Media Content */}
      <div className="w-full h-full relative">
        {item.type === 'image' ? (
          <>
            <img 
              src={item.image} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt={item.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </>
        ) : (
          /* MusicFX Specific Visual (Vinyl/CD style) */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-black">
            <div className="mb-8 uppercase text-[10px] font-bold tracking-[0.2em] opacity-60">BY: {item.author}</div>
            <h4 className="text-3xl font-medium text-center mb-12 tracking-tight leading-tight">{item.title}</h4>
            
            {/* Vinyl Record Visual */}
            <div className="relative w-48 h-48 rounded-full border border-black/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-t border-black/5 animate-[spin_10s_linear_infinite]" />
              <div className="w-40 h-40 rounded-full border border-black/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-black/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#f4c2e6] border border-black/10" />
                </div>
              </div>
            </div>

            {/* Playback Controls Mockup */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
               <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div className="w-16 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M8 5v14l11-7z" /></svg>
               </div>
               <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Text Info (for images) */}
      {item.type === 'image' && (
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h4 className="text-2xl font-bold mb-1 tracking-tight">{item.title}</h4>
          <p className="text-sm font-medium text-white/60">Created by: {item.author}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
