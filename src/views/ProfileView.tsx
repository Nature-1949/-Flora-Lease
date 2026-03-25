import React from 'react';
import { User, Wallet, ShieldCheck, Truck, History, MapPin, Headphones, Settings, ChevronRight, Leaf } from 'lucide-react';

export default function ProfileView() {
  return (
    <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-10">
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-surface-container-low p-1 shadow-sm">
            <div className="w-full h-full flex items-center justify-center bg-white rounded-full text-secondary">
              <User size={48} className="fill-current opacity-20" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-tertiary-fixed text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">
            Gold
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Dex</h1>
          <p className="text-secondary text-sm font-medium tracking-wide">ID: FL-8819031</p>
        </div>
      </section>

      {/* Bento Stats */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm flex flex-col justify-between aspect-square">
          <div>
            <Wallet className="text-secondary" size={24} />
            <h3 className="mt-4 text-xs font-bold opacity-40 tracking-wider uppercase">账户余额</h3>
          </div>
          <div>
            <span className="text-2xl font-bold">¥ 768.58</span>
            <p className="text-[10px] opacity-30 mt-1 uppercase tracking-widest">Available Credit</p>
          </div>
        </div>
        <div className="bg-primary p-6 rounded-[2rem] flex flex-col justify-between aspect-square text-white">
          <div>
            <ShieldCheck className="text-tertiary-fixed" size={24} />
            <h3 className="mt-4 text-xs font-bold opacity-60 tracking-wider uppercase">信用免押</h3>
          </div>
          <div>
            <p className="text-sm font-medium leading-tight">已开启极速免押<br />当前评估：<span className="text-tertiary-fixed">优秀</span></p>
            <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-fixed w-4/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* My Leases */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-xl font-bold tracking-tight">我的租赁</h2>
          <span className="text-xs text-secondary font-semibold border-b border-secondary/20 pb-0.5 cursor-pointer">查看全部记录</span>
        </div>
        
        <div className="space-y-4">
          <div className="bg-surface-container-low p-5 rounded-2xl flex items-center gap-5 cursor-pointer hover:bg-white transition-colors">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white">
              <img src="/images/plant-4-orchid.svg" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-sm">黄蝉兰 · 办公方案</h4>
                <span className="text-[9px] font-bold bg-tertiary-fixed text-primary px-2 py-0.5 rounded-full uppercase">进行中</span>
              </div>
              <p className="text-xs opacity-40 mt-1 font-medium">下轮养护: 2026.04.12</p>
            </div>
            <ChevronRight size={16} className="opacity-20" />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
                <Truck size={18} className="opacity-40" />
              </div>
              <div>
                <p className="text-xs font-bold">待收货</p>
                <p className="text-[10px] opacity-40">1 个订单</p>
              </div>
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
                <History size={18} className="opacity-40" />
              </div>
              <div>
                <p className="text-xs font-bold">历史租赁</p>
                <p className="text-[10px] opacity-40">8 次交付</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu List */}
      <section className="bg-white rounded-[2rem] p-2 space-y-1 shadow-sm">
        {[
          { icon: MapPin, label: '地址管理' },
          { icon: Headphones, label: '客服与支持' },
          { icon: Settings, label: '设置' },
        ].map((item, idx) => (
          <React.Fragment key={item.label}>
            <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <item.icon className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
              <ChevronRight size={16} className="opacity-20" />
            </button>
            {idx < 2 && <div className="mx-4 h-px bg-surface-container-low" />}
          </React.Fragment>
        ))}
      </section>

      <footer className="text-center py-8">
        <div className="inline-block p-4 bg-tertiary-fixed/20 rounded-2xl">
          <Leaf className="text-secondary" size={32} />
        </div>
        <p className="mt-4 text-[10px] font-bold tracking-[0.3em] opacity-20 uppercase">The Botanical Gallery Experience</p>
      </footer>
    </main>
  );
}
