import React from 'react';
import { MenuIcon, ChevronDownIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 w-full max-w-full mx-auto">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
          <MenuIcon />
        </button>
        <h1 className="text-xl text-zinc-300 hidden sm:block">Gemini</h1>
        <button className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg text-sm text-zinc-300 transition-colors">
          2.5 Flash
          <ChevronDownIcon />
        </button>
      </div>
      <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500">
        <div className="w-8 h-8 rounded-full bg-black overflow-hidden">
            <img src="https://picsum.photos/seed/avatar/40/40" alt="User Avatar" className="w-full h-full object-cover"/>
        </div>
      </div>
    </header>
  );
};

export default Header;