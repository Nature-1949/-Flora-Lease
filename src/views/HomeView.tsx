import React from 'react';
import { MOCK_PLANTS } from '../constants';
import PlantCard from '../components/PlantCard';
import { Plant } from '../types';
import { Search, Bell, SlidersHorizontal, Leaf, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onPlantClick: (plant: Plant) => void;
}

export default function HomeView({ onPlantClick }: HomeViewProps) {
  return (
    <main className="pt-20 pb-32 px-4 max-w-md mx-auto space-y-8">
      {/* Banner */}
      <section className="relative rounded-2xl overflow-hidden bg-primary aspect-[21/9] flex items-center p-6 group cursor-pointer shadow-xl shadow-primary/10">
        <div className="relative z-10">
          <h2 className="text-white text-xl font-bold mb-1">空间方案定制</h2>
          <p className="text-white/70 text-xs">专业园艺师上门规划 · 一站式租摆</p>
          <button className="mt-3 px-4 py-1.5 bg-white text-primary text-[11px] font-bold rounded-full active:scale-95 transition-transform">
            立即预约
          </button>
        </div>
        <Leaf className="absolute right-[-10px] bottom-[-10px] w-32 h-32 text-white/5 rotate-12" />
      </section>

      {/* Tabs & Filter */}
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <button className="relative pb-2 font-bold text-base">
            单盆租赁
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
          </button>
          <button className="pb-2 opacity-40 font-bold text-base">企业方案</button>
        </div>
        <button className="flex items-center gap-1 opacity-60 text-xs">
          <SlidersHorizontal size={14} />
          筛选
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4">
        {MOCK_PLANTS.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onClick={onPlantClick} />
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
        <h4 className="font-bold mb-4">为什么选择森息 · Flora Lease？</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <ShieldCheck className="text-secondary" size={20} />
            <p className="text-[11px] font-bold mt-1">品质严选</p>
            <p className="text-[9px] opacity-50 leading-tight">每一株绿植都经过专业培育与健康筛选</p>
          </div>
          <div className="flex flex-col gap-1">
            <Headphones className="text-secondary" size={20} />
            <p className="text-[11px] font-bold mt-1">无忧养护</p>
            <p className="text-[9px] opacity-50 leading-tight">定期上门巡检，枯萎或长势不佳免费更换</p>
          </div>
        </div>
      </section>
    </main>
  );
}
