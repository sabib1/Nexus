
import React from 'react';

interface SuggestionCardProps {
  title: string;
  imageUrl: string;
  isPolaroid: boolean;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title, imageUrl, isPolaroid }) => {
  const imageContainerClasses = isPolaroid
    ? 'bg-gray-300 p-2 pb-5 rotate-[-3deg] shadow-lg'
    : 'overflow-hidden';
    
  return (
    <div className="bg-[#1e1f20] rounded-2xl p-4 h-56 flex flex-col justify-between cursor-pointer hover:bg-zinc-800 transition-all duration-300 group">
      <h2 className="text-zinc-300 text-lg font-medium">{title}</h2>
      <div className="flex justify-center items-center h-full">
        <div className={`${imageContainerClasses} rounded-md w-32 h-32 transition-transform duration-300 group-hover:scale-105`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
