
import React from 'react';
import { Session } from '../types';

interface SessionCardProps {
  session: Session;
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => {
  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-5 bg-black/5">
        <img 
          src={session.image} 
          alt={session.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        
        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider text-black">
          {session.duration}
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-black fill-current ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
           </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-black mb-2 tracking-tight group-hover:underline decoration-1 underline-offset-4">
          {session.title}
        </h3>
        <p className="text-sm text-black/60 leading-relaxed font-medium line-clamp-2">
          {session.description}
        </p>
      </div>
    </div>
  );
};

export default SessionCard;
