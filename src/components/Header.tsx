import React from 'react';
import { Menu, Headset } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = '森息 · Flora Lease' }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#faf9f7]/80 backdrop-blur-xl z-50 shadow-[0_10px_40px_-15px_rgba(6,27,14,0.05)]">
      <button className="p-2 hover:opacity-70 transition-opacity active:scale-95">
        <Menu size={22} />
      </button>
      <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      <button className="p-2 hover:opacity-70 transition-opacity active:scale-95">
        <Headset size={22} />
      </button>
    </header>
  );
}
