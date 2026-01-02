
import React from 'react';
import { RecommendedTool } from '../types';

interface RecommendedToolCardProps {
  tool: RecommendedTool;
}

const RecommendedToolCard: React.FC<RecommendedToolCardProps> = ({ tool }) => {
  return (
    <div className="group cursor-pointer flex flex-col min-w-[280px] md:min-w-[320px] snap-start">
      <div className={`aspect-[4/5] rounded-[2.5rem] ${tool.bgColor} relative overflow-hidden flex items-end justify-center transition-transform duration-500 group-hover:scale-[1.02]`}>
        
        {/* Decorative Background Blob */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black rounded-full blur-3xl opacity-20" />
        </div>

        {/* The "Window" Visual */}
        <div className="relative w-[85%] h-[80%] bg-white rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out border-x border-t border-white/20">
          <div className="h-8 bg-gray-50/80 border-b border-gray-100 flex items-center px-4 gap-1.5 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          </div>
          <div className="flex-1 overflow-hidden relative">
            <img 
              src={tool.image} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt={tool.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Floating elements for specific cards based on ID */}
        {tool.id === 'tool-2' && (
          <>
            <div className="absolute top-10 right-10 w-8 h-8 bg-white/40 rounded-lg backdrop-blur-sm rotate-12 flex items-center justify-center text-xs">🎮</div>
            <div className="absolute top-24 left-6 w-8 h-8 bg-white/40 rounded-full backdrop-blur-sm -rotate-12 flex items-center justify-center text-xs">🌴</div>
            <div className="absolute bottom-32 right-4 w-10 h-10 bg-white/40 rounded-full backdrop-blur-sm rotate-45 flex items-center justify-center text-xs">🎹</div>
          </>
        )}
      </div>

      <div className="mt-5 px-1">
        <h3 className="text-lg font-bold text-black tracking-tight mb-0.5">{tool.title}</h3>
        <p className="text-[13px] text-black/50 font-medium leading-tight max-w-[90%]">
          {tool.subtitle}
        </p>
      </div>
    </div>
  );
};

export default RecommendedToolCard;
