
import React, { useState, useEffect } from 'react';
import { FEATURED_EXPERIMENTS } from '../constants';

const FeaturedCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_EXPERIMENTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = FEATURED_EXPERIMENTS[activeIndex];

  return (
    <div className="relative group mx-4 md:mx-12">
      <div className={`relative overflow-hidden ${active.bgColor} transition-colors duration-1000 rounded-[3rem] min-h-[550px] flex flex-col md:flex-row items-center justify-between text-white px-8 md:px-20 py-16`}>
        
        {/* Left Side Content */}
        <div className="z-10 max-w-xl text-center md:text-left animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="mb-6 uppercase tracking-[0.25em] text-[10px] font-bold opacity-70">Featured</div>
          <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 mb-8">
            <h2 className="text-6xl md:text-7xl font-medium tracking-tight">{active.title}</h2>
          </div>
          <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-lg">
            {active.description}
          </p>
          <button className="border-2 border-black text-black px-12 py-3 rounded-full font-bold text-base hover:bg-black hover:text-white transition-all duration-300">
            Try It Now
          </button>
        </div>

        {/* Right Side Visual (Mocking the Mixboard style) */}
        <div className="relative w-full md:w-[500px] h-[400px] mt-12 md:mt-0 flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
          {/* Main Blob Background */}
          <div className="absolute inset-0 bg-white/10 rounded-[4rem] backdrop-blur-sm scale-90 rotate-3 border border-white/10" />
          
          {/* Dotted White Shape */}
          <div className="relative w-[380px] h-[380px] bg-white rounded-[4rem] flex items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
            
            {/* Inner Content Placeholder - matching Mixboard layout */}
            <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
               <div className="grid grid-cols-3 gap-2 w-full">
                  <div className="aspect-square bg-gray-100 rounded-xl rotate-[-5deg] overflow-hidden shadow-md"><img src="https://picsum.photos/id/1/200/200" className="object-cover w-full h-full" /></div>
                  <div className="aspect-square bg-gray-100 rounded-xl rotate-[8deg] overflow-hidden shadow-md mt-4"><img src="https://picsum.photos/id/2/200/200" className="object-cover w-full h-full" /></div>
                  <div className="aspect-square bg-gray-100 rounded-xl rotate-[-2deg] overflow-hidden shadow-md"><img src="https://picsum.photos/id/3/200/200" className="object-cover w-full h-full" /></div>
               </div>
               
               <div className="my-6 flex items-center gap-3">
                 <span className="text-black text-2xl font-bold">{active.title}</span>
                 <div className="px-3 py-1 border border-black/20 rounded-md text-[8px] font-bold tracking-widest uppercase text-black/60">
                    Experiment
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-2 w-full items-end">
                  <div className="aspect-square bg-gray-100 rounded-full overflow-hidden shadow-md"><img src="https://picsum.photos/id/4/200/200" className="object-cover w-full h-full" /></div>
                  <div className="aspect-square bg-gray-100 rounded-xl rotate-[12deg] overflow-hidden shadow-md mb-2"><img src="https://picsum.photos/id/5/200/200" className="object-cover w-full h-full" /></div>
                  <div className="aspect-square bg-gray-100 rounded-xl rotate-[-10deg] overflow-hidden shadow-md"><img src="https://picsum.photos/id/6/200/200" className="object-cover w-full h-full" /></div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {FEATURED_EXPERIMENTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'bg-black w-6' : 'bg-black/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
