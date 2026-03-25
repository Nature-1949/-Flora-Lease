import React from 'react';
import { Home, Sprout, Activity, User } from 'lucide-react';
import { ViewType } from '../types';
import { motion } from 'motion/react';

interface BottomNavProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function BottomNav({ currentView, onViewChange }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'plan', label: '我的方案', icon: Sprout },
    { id: 'maintenance', label: '养护', icon: Activity },
    { id: 'profile', label: '个人', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#faf9f7]/90 backdrop-blur-lg rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(6,27,14,0.06)]">
      {navItems.map((item) => {
        const isActive = currentView === item.id || (item.id === 'home' && currentView === 'detail');
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as ViewType)}
            className={`relative flex flex-col items-center justify-center px-5 py-2 transition-all duration-300 ${
              isActive ? 'bg-[#dae8be] rounded-full' : 'opacity-60'
            }`}
          >
            <Icon size={24} className={isActive ? 'fill-current' : ''} />
            <span className="text-[10px] font-medium uppercase tracking-widest mt-1">
              {item.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 bg-[#dae8be] rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
