import React from 'react';
import { GlobeIcon, MicIcon, SendIcon } from './Icons';

const InputBar: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [webResearch, setWebResearch] = React.useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <div className="bg-[#1e1f20] rounded-full flex items-center p-2 shadow-lg">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask Gemini"
          className="flex-grow bg-transparent text-zinc-300 placeholder-zinc-500 focus:outline-none px-4 text-lg"
        />
        <div className="flex items-center gap-1">
          <button
            className="p-3 rounded-full hover:bg-zinc-700 transition-colors"
            onClick={() => setWebResearch(!webResearch)}
            aria-label="Toggle web research"
            title="Web Research"
          >
            <GlobeIcon className={webResearch ? 'text-blue-400' : 'text-zinc-400'} />
          </button>
          
          {inputValue ? (
             <button className="p-3 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors" aria-label="Send message">
                <SendIcon />
             </button>
          ) : (
            <button className="p-3 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors" aria-label="Use voice input">
                <MicIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputBar;