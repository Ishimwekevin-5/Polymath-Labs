
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import RecommendedToolCard from './components/RecommendedToolCard';
import SessionCard from './components/SessionCard';
import CommunityEventCard from './components/CommunityEventCard';
import GalleryCard from './components/GalleryCard';
import LabAssistant from './components/LabAssistant';
import FeaturedCarousel from './components/FeaturedCarousel';
import { RECOMMENDED_TOOLS, SESSIONS, COMMUNITY_EVENTS, GALLERY_ITEMS } from './constants';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Pink Hero Section */}
      <section className="bg-labs-pink pt-44 pb-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
          The home for AI experiments at Polymath Labs
        </h1>
      </section>

      {/* Featured Carousel */}
      <section className="relative -mt-16 z-10">
        <FeaturedCarousel />
      </section>

      {/* Recommended AI Tools Section - CAROUSEL */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Recommended AI Tools
            </h2>
            <p className="text-lg text-black/50 font-medium">
              Experiments using our latest AI models
            </p>
          </div>
        </div>
        
        {/* The Actual Horizontal Scroll Area */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-32 lg:px-64"
        >
          {RECOMMENDED_TOOLS.map((tool) => (
            <RecommendedToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* View All Button below carousel */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-black/10 hover:bg-black/5 transition-all group">
            <span className="text-sm font-bold tracking-widest uppercase">View All</span>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
               <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Lab Sessions Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-2">
            Lab Sessions:
          </h2>
          <p className="text-4xl md:text-5xl font-medium tracking-tight text-black">
            Short films about our creative collaborations
          </p>
        </div>

        {/* Featured Session Film */}
        <div className="relative aspect-[21/9] w-full rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl mb-12">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
            alt="Lab Session - Athletes" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h3 className="text-7xl md:text-[10rem] font-bold text-white/90 tracking-tighter select-none">
              ATHLETES
            </h3>
            <div className="absolute bottom-12 animate-bounce">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid of Other Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SESSIONS.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>

        {/* View All Sessions Button */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-3 px-8 py-3.5 rounded-full border border-black/10 hover:bg-black/5 transition-all group">
            <span className="text-sm font-bold tracking-widest uppercase">View All Sessions</span>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
               <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
            Community Events
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMUNITY_EVENTS.map((event) => (
            <CommunityEventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-6">
            Community Gallery
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Art and experiments created by our growing <a href="#" className="underline hover:text-black">Discord</a> and <a href="#" className="underline hover:text-black">X</a> community members. Tag us to be featured!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Lab Assistant Section */}
      <div className="bg-[#f9f9f9] border-y border-black/5 mt-20">
        <LabAssistant />
      </div>

      {/* Footer */}
      <footer className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-black/5 pb-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 3h6M10 9h4M7 21h10l-2-5V9c0-2-1-3-3-3s-3 1-3 3v7l-2 5z" />
                </svg>
                <span className="text-xl font-bold">Polymath Labs</span>
              </div>
              <p className="text-sm text-black/60 font-medium leading-relaxed">
                Exploring the next generation of AI-powered creative and technical tools.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div>
                <h4 className="font-bold text-sm mb-6">Explore</h4>
                <ul className="space-y-4 text-sm text-black/50 font-medium">
                  <li><a href="#" className="hover:text-black">About</a></li>
                  <li><a href="#" className="hover:text-black">Experiments</a></li>
                  <li><a href="#" className="hover:text-black">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-6">Safety</h4>
                <ul className="space-y-4 text-sm text-black/50 font-medium">
                  <li><a href="#" className="hover:text-black">Principles</a></li>
                  <li><a href="#" className="hover:text-black">Approach</a></li>
                  <li><a href="#" className="hover:text-black">Guidelines</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-6">Connect</h4>
                <ul className="space-y-4 text-sm text-black/50 font-medium">
                  <li><a href="#" className="hover:text-black">X (Twitter)</a></li>
                  <li><a href="#" className="hover:text-black">Discord</a></li>
                  <li><a href="#" className="hover:text-black">Reddit</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[13px] text-black/40 font-medium gap-4">
            <div className="flex gap-6">
              <span>Polymath</span>
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
            </div>
            <span>© 2026 Polymath Labs</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
