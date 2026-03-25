import React from 'react';
import { MOCK_SERVICES } from '../constants';
import { Sprout, Droplets, ChevronLeft, ChevronRight, Leaf, CheckCheck, PlusCircle } from 'lucide-react';

export default function MaintenanceView() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-10">
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-secondary text-sm font-medium tracking-widest uppercase">
          <span className="w-8 h-[1px] bg-secondary/30"></span>
          <span>Maintenance Portfolio</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">养护服务日历</h1>
      </header>

      {/* Status Bento */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
            <Sprout size={120} />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest opacity-40">Current Status</span>
            <h2 className="text-2xl font-bold mt-2">状态极佳 - 5盆</h2>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-tertiary-fixed"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-primary"></div>
            </div>
            <span className="text-sm font-medium opacity-40">+2 others</span>
          </div>
        </div>

        <div className="bg-primary p-8 rounded-[2rem] flex flex-col justify-between text-white relative">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-widest opacity-60">植物含水量%</span>
              <div className="text-5xl font-bold mt-1">85%</div>
            </div>
            <div className="p-3 bg-white/10 rounded-full">
              <Droplets size={24} />
            </div>
          </div>
          <div className="mt-6 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-tertiary-fixed w-[85%] rounded-full"></div>
          </div>
          <p className="mt-4 text-[10px] opacity-60">如含水量低于20%时，请立即为植物补水</p>
        </div>
      </section>

      {/* Calendar */}
      <section className="bg-surface-container-low p-8 rounded-[2rem]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-bold">四月 2026</h3>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-white rounded-full transition-colors"><ChevronLeft size={16} /></button>
            <button className="p-2 hover:bg-white rounded-full transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 text-center text-[10px] font-bold opacity-30 mb-4 uppercase tracking-widest">
          <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {/* Mock Calendar Days */}
          {Array.from({ length: 30 }).map((_, i) => {
            const day = i + 1;
            const isToday = day === 12;
            const hasService = day === 3;
            return (
              <div key={day} className="aspect-square flex items-center justify-center relative">
                <span className={`text-sm font-medium ${isToday ? 'bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg' : ''}`}>
                  {day}
                </span>
                {hasService && !isToday && <span className="absolute bottom-1 w-1 h-1 bg-tertiary-fixed rounded-full" />}
                {isToday && <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 border-2 border-white rounded-full" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="text-xl font-bold">待执行服务</h3>
          <span className="text-sm font-medium opacity-40">October 12th</span>
        </div>
        <div className="space-y-4">
          {MOCK_SERVICES.map((service) => (
            <div key={service.id} className={`bg-white p-6 rounded-2xl flex items-center gap-5 group transition-all ${service.status === 'completed' ? 'opacity-50 grayscale' : ''}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${service.status === 'completed' ? 'bg-surface-container-low' : 'bg-tertiary-fixed'}`}>
                {service.type === 'inspection' ? <Leaf size={24} /> : <CheckCheck size={24} />}
              </div>
              <div className="flex-grow">
                <h4 className="font-bold">{service.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm opacity-40">Assigned to:</span>
                  <span className="text-sm font-bold">{service.assignedTo}</span>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${service.status === 'completed' ? 'bg-surface-container-low' : 'bg-tertiary-fixed'}`}>
                  {service.status}
                </span>
                <div className="text-sm opacity-30 mt-1">{service.time}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
        <PlusCircle size={20} />
        预约额外服务
      </button>
    </main>
  );
}
