import React from 'react';

export const MenuIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-zinc-400"
  >
    <path
      d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDownIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-zinc-400"
  >
    <path
      d="M6 9L12 15L18 9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current transition-colors ${className || 'text-zinc-400'}`}>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 2.997a14.15 14.15 0 0 1 4 9.003 14.15 14.15 0 0 1-4 9.003M12 2.997A14.15 14.15 0 0 0 8 12a14.15 14.15 0 0 0 4 9.003" strokeWidth="1.5" />
    </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current ${className || 'text-zinc-300'}`}>
        <path d="M22 2L11 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MicIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-zinc-300"
  >
    <path
      d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
      strokeWidth="1.5"
    />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeWidth="1.5" />
    <line x1="12" y1="19" x2="12" y2="23" strokeWidth="1.5" />
  </svg>
);