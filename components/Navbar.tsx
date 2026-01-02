
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-8 h-20 flex items-center justify-between text-black">
      {/* Left Links */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">About</a>
        <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Experiments</a>
        <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Sessions</a>
        <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Community</a>
      </div>

      {/* Center Brand */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3h6M10 9h4M7 21h10l-2-5V9c0-2-1-3-3-3s-3 1-3 3v7l-2 5z" />
        </svg>
        <span className="text-xl font-medium tracking-tight">Polymath Labs</span>
      </div>

      {/* Right Socials */}
      <div className="flex items-center gap-5">
        <a href="#" className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.197.373.291a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.037 3.735 9.197 8.594 9.873V14.36h-2.733v-2.36h2.733V9.755c0-2.704 1.611-4.2 4.076-4.2 1.181 0 2.416.21 2.416.21v2.657h-1.361c-1.338 0-1.756.83-1.756 1.68v2.016h2.994l-.479 2.36h-2.515v7.513C18.265 21.197 22 17.037 22 12c0-5.523-4.477-10-10-10z"/></svg>
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
