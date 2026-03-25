import React from 'react';
import { Plant } from '../types';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
  onClick: (plant: Plant) => void;
  key?: string | number;
}

export default function PlantCard({ plant, onClick }: PlantCardProps) {
  return (
    <div 
      onClick={() => onClick(plant)}
      className="group flex flex-col bg-white border border-surface-container-low rounded-2xl overflow-hidden shadow-sm cursor-pointer active:scale-[0.98] transition-all"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-container-low">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        {plant.tags.length > 0 && (
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/80 backdrop-blur-md rounded-md text-[9px] font-bold">
            {plant.tags[0]}
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-bold text-sm truncate">{plant.name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <ShieldCheck size={12} className="text-secondary/60" />
          <span className="text-[10px] text-secondary/70">包含养护</span>
        </div>
        <div className="mt-auto pt-3">
          <div className="flex items-baseline gap-0.5">
            <span className="font-bold text-base">¥{plant.price}</span>
            <span className="text-[10px] opacity-40">/月起</span>
          </div>
          <p className="text-[9px] opacity-30 mt-0.5">* 最短租期 3 个月起</p>
          <button className="w-full mt-2 py-2 bg-primary text-white rounded-lg text-[11px] font-bold">
            立即预约
          </button>
        </div>
      </div>
    </div>
  );
}
