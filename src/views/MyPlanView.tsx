import React from 'react';
import { MOCK_PLANTS } from '../constants';
import { ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';

export default function MyPlanView() {
  const selectedPlants = [MOCK_PLANTS[0], MOCK_PLANTS[2]];
  const totalRent = selectedPlants.reduce((sum, p) => sum + p.price, 0);

  return (
    <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-12">
      <header className="space-y-2">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">Checkout Summary</span>
        <h2 className="text-4xl font-extrabold tracking-tighter">确认租赁方案</h2>
      </header>

      {/* Selected Plants */}
      <section className="space-y-6">
        {selectedPlants.map((plant) => (
          <div key={plant.id} className="flex items-center gap-6 p-4 bg-white rounded-2xl group hover:bg-surface-container-low transition-all duration-500 shadow-sm">
            <div className="w-24 h-32 rounded-xl overflow-hidden bg-surface-container-low">
              <img src={plant.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{plant.name.split(' · ')[0]}</h3>
              <p className="text-sm text-secondary mb-4">{plant.name.split(' · ')[1]} · 招财绿植</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold">¥</span>
                <span className="text-lg font-extrabold">{plant.price}.00</span>
                <span className="text-[10px] text-secondary uppercase tracking-widest ml-1">/ Month</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Cost Summary */}
      <section className="bg-surface-container-low rounded-[2rem] p-8 space-y-6 shadow-sm">
        <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">费用概览 · Summary</h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="opacity-60 font-medium">月度租金总计</span>
            <span className="font-bold">¥{totalRent}.00</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="opacity-60 font-medium">信用免押金</span>
              <span className="px-2 py-0.5 bg-tertiary-fixed text-primary text-[10px] font-bold rounded-full">CREDIT PASS</span>
            </div>
            <span className="text-secondary font-bold">¥0.00</span>
          </div>
          <div className="h-[1px] bg-outline-variant/20 my-4" />
          <div className="flex justify-between items-end pt-2">
            <div>
              <span className="text-sm font-bold block">首次支付总额</span>
              <span className="text-[10px] opacity-40 uppercase tracking-tighter">Total First Payment</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold">¥</span>
              <span className="text-4xl font-extrabold tracking-tighter">{totalRent}.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agreements */}
      <section className="space-y-6">
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="mt-1">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
            </div>
            <span className="text-sm opacity-60 leading-relaxed">
              我已阅读并同意 <span className="text-primary font-semibold underline underline-offset-4 decoration-tertiary-fixed">租赁服务协议</span>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="mt-1">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
            </div>
            <span className="text-sm opacity-60 leading-relaxed">
              开通 <span className="text-primary font-semibold">自动续费</span>，享次月 95 折优惠
            </span>
          </label>
        </div>

        <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/10 hover:opacity-90 transition-all active:scale-[0.98] mt-4">
          确认支付
        </button>
        <p className="text-center text-[10px] text-secondary uppercase tracking-[0.3em] font-medium pt-4">
          Secured by Flora Lease Encryption
        </p>
      </section>
    </main>
  );
}
