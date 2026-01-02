
import React from 'react';
import { CommunityEvent } from '../types';

interface CommunityEventCardProps {
  event: CommunityEvent;
}

const CommunityEventCard: React.FC<CommunityEventCardProps> = ({ event }) => {
  return (
    <div className="relative group overflow-hidden rounded-[3rem] aspect-[4/3] cursor-pointer shadow-xl">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          {event.title}
        </h3>
        <p className="text-white/80 text-sm md:text-base mb-8 max-w-sm font-medium leading-relaxed">
          {event.description}
        </p>
        <div className="flex">
          <button className="px-8 py-3 rounded-full border border-white/40 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300">
            {event.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEventCard;
