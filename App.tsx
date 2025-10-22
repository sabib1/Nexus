
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SuggestionCard from './components/SuggestionCard';
import InputBar from './components/InputBar';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#131314] text-white min-h-screen flex flex-col font-sans antialiased overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 w-full max-w-4xl mx-auto">
        <div className="flex-grow flex items-center w-full">
            <div className={`w-full transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-4xl md:text-5xl font-medium text-zinc-400 mb-10 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 text-transparent bg-clip-text">Hello, there</span>
                <br />
                What should we do today?
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SuggestionCard
                  title="Make a photo look like instant film"
                  imageUrl="https://picsum.photos/seed/instantfilm/400/400"
                  isPolaroid={true}
                />
                <SuggestionCard
                  title="Create a professional headshot"
                  imageUrl="https://picsum.photos/seed/headshot/400/400"
                  isPolaroid={false}
                />
              </div>
            </div>
        </div>
        <InputBar />
      </main>
    </div>
  );
};

export default App;
