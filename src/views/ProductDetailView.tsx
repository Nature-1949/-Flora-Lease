import React, { useState } from 'react';
import { Plant } from '../types';
import { ChevronLeft, Share2, Droplets, Flower2, Calendar, Scissors, RefreshCw, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailViewProps {
  plant: Plant;
  onBack: () => void;
}

export default function ProductDetailView({ plant, onBack }: ProductDetailViewProps) {
  const [selectedDuration, setSelectedDuration] = useState(3);

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-12 left-6 flex gap-4">
          <button onClick={onBack} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-12 right-6">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
            <Share2 size={24} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative -mt-12 bg-white rounded-t-[3rem] p-8 space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tighter">{plant.name.split(' · ')[0]}</h1>
            <p className="text-secondary font-medium mt-1">{plant.scientificName}</p>
          </div>
          <div className="flex flex-col gap-2">
            {plant.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-tertiary-fixed text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold">¥{plant.price}</span>
          <span className="text-sm opacity-40">/ 月起租</span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-low p-6 rounded-2xl space-y-3">
            <Droplets className="text-primary" size={24} />
            <h4 className="font-bold text-sm">养护要求</h4>
            <p className="text-xs opacity-60 leading-relaxed">{plant.maintenanceInfo}</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-2xl space-y-3">
            <Flower2 className="text-primary" size={24} />
            <h4 className="font-bold text-sm">观赏周期</h4>
            <p className="text-xs opacity-60 leading-relaxed">{plant.viewingPeriod}</p>
          </div>
        </div>

        {/* Duration Selector */}
        <div className="space-y-4">
          <h4 className="font-bold">租赁时长 (月)</h4>
          <div className="flex gap-4">
            {[3, 6, 12].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDuration(d)}
                className={`flex-1 py-4 rounded-full font-bold transition-all ${
                  selectedDuration === d 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-surface-container-low border border-outline-variant/20'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Butler Service */}
        <div className="space-y-6">
          <h4 className="font-bold">尊享管家服务</h4>
          <div className="space-y-8 relative pl-6">
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-tertiary-fixed" />
            
            <div className="relative">
              <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Calendar size={16} /> 每周巡检
                </div>
                <p className="text-xs opacity-60 leading-relaxed">资深植保师上门提供水分管理、施肥及健康评估。</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Scissors size={16} /> 专业修剪
                </div>
                <p className="text-xs opacity-60 leading-relaxed">根据植株形态进行艺术修剪，保持最佳观赏状态。</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <RefreshCw size={16} /> 48小时更换
                </div>
                <p className="text-xs opacity-60 leading-relaxed">如出现健康问题，承诺48小时内免费上门更换同款植株。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-6">
          <h4 className="font-bold">植物物语</h4>
          <div className="flex gap-6 items-start">
            <img 
              src={plant.image} 
              className="w-32 aspect-square rounded-2xl object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 space-y-4">
              <div className="flex gap-2">
                <Quote size={16} className="text-tertiary-fixed fill-current" />
                <p className="text-sm italic font-medium leading-relaxed">
                  {plant.story.split('。')[0]}。
                </p>
              </div>
              <p className="text-xs opacity-60 leading-relaxed">
                {plant.story.split('。').slice(1).join('。')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-surface-container-low p-6 flex justify-between items-center z-50">
        <div>
          <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold">预计租金</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold">¥{plant.price * selectedDuration}</span>
            <span className="text-[10px] opacity-40">/ {selectedDuration}月</span>
          </div>
        </div>
        <button className="px-12 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 active:scale-95 transition-transform">
          立即租赁
        </button>
      </div>
    </div>
  );
}
