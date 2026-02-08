import React from 'react';
import { Target, Zap, Shield, Home, MapPin, Youtube, Book, Globe, Layout } from 'lucide-react';
import GanttChart from "../components/GanttChart";
import TaskTable from "../components/TaskTable";
import FinanceModule from "../components/FinanceModule";
import data from '../data/data.json'; 

const HomePage = () => {
  const config = data?.nexus_configuration;
  const homeDim = data?.codex_dimensions?.find(d => d.id === 'home');
  
  const targetRevenue = config?.revenue_target?.mrr_goal || 150;
  const currentRevenue = 0; 
  const progressPercent = (currentRevenue / targetRevenue) * 100;

  const cards = [
    { id: "yt-gaming", label: "YouTube Gaming", title: "Zombies Lore", desc: "@dusanfajnor_nexus", icon: <Youtube className="text-red-500" size={20} />, border: "border-red-500/20 hover:border-red-500/50" },
    { id: "nexus-codex", label: "System Core", title: "Nexus Codex", desc: "10 Dimenzií vedomia", icon: <Book className="text-purple-500" size={20} />, border: "border-purple-500/20 hover:border-purple-500/50" },
    { id: "web-blog", label: "Business Engine", title: "Project Nexus Web", desc: "Phase: Genesis (MRR 150€)", icon: <Globe className="text-cyan-500" size={20} />, border: "border-cyan-500/20 hover:border-cyan-500/50" },
    { id: "yt-ui", label: "Education Content", title: "UI Space Videos", desc: "Vzdelávanie: 10 Dimenzií", icon: <Layout className="text-emerald-500" size={20} />, border: "border-emerald-500/20 hover:border-emerald-500/50" }
  ];

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in duration-700 pb-20 text-left w-full overflow-x-hidden px-1">
      
      {/* 1. MISSION CONTROL HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-[#0d0d0d] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-500/5 blur-3xl rounded-full" />
        <div className="relative z-10 space-y-4 w-full lg:w-auto">
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white flex items-center gap-3 italic">
            <Shield className="text-purple-500 flex-shrink-0" size={28} /> Mission <span className="text-purple-500 not-italic">Control</span>
          </h1>
          <div className="flex flex-col border-l-2 border-purple-500/30 pl-4">
            <span className="text-purple-400 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-1">Strategická vízia:</span>
            <span className="text-gray-300 italic text-base md:text-xl font-light leading-tight">"Transformácia 10 dimenzií do digitálneho obsahu"</span>
          </div>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
          <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10 flex items-center gap-3 min-w-0 sm:min-w-[160px]">
             <Home size={16} className="text-blue-400 flex-shrink-0" />
             <div className="text-left overflow-hidden">
                <p className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-blue-400/60 leading-none font-mono">Environment</p>
                <p className="text-[10px] md:text-xs text-white mt-1 font-bold italic truncate">{homeDim?.life?.split(':')[1] || "Studio"}</p>
             </div>
          </div>
          <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10 flex items-center gap-3 min-w-0 sm:min-w-[160px]">
             <MapPin size={16} className="text-emerald-500 flex-shrink-0" />
             <div className="text-left overflow-hidden">
                <p className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-emerald-500/60 leading-none font-mono">Deployment</p>
                <p className="text-[10px] md:text-xs text-white mt-1 font-bold italic truncate">Trnava 2026</p>
             </div>
          </div>
        </div>
      </div>

      {/* 2. REVENUE TRACKER */}
      <div className="bg-[#0d0d0d] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <div className="p-4 md:p-5 bg-emerald-500/10 rounded-[1.2rem] md:rounded-[1.5rem] text-emerald-500 border border-emerald-500/20 transition-transform duration-500">
                {/* FIX: Removed md:size and added responsive classes */}
                <Target size={24} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic leading-none">Financial <span className="text-emerald-500 not-italic">Genesis</span></h3>
                <p className="text-[9px] md:text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] mt-1 italic leading-none">Strategický míľnik k slobode</p>
              </div>
            </div>
            <div className="text-left md:text-right font-mono w-full md:w-auto">
              <p className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter">{currentRevenue} €</p>
              <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2">Cieľ: {targetRevenue} €</p>
            </div>
          </div>
          <div className="w-full h-2.5 md:h-3 bg-white/5 rounded-full mb-2 overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-1000"
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. CORE PROJECTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card) => (
          <div key={card.id} className={`bg-[#0d0d0d] border ${card.border} p-5 md:p-6 rounded-[1.5rem] md:rounded-[2.2rem] transition-all duration-500 group cursor-default text-left`}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <Zap size={12} className="text-gray-800" />
            </div>
            <p className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1 font-mono">{card.label}</p>
            <h3 className="text-base md:text-lg font-black text-white italic tracking-tight">{card.title}</h3>
            <p className="text-[9px] md:text-[10px] text-gray-400 mt-2 font-mono uppercase leading-tight">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* 4. ANALYTICS & TASKS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        <div className="w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5">
          <GanttChart />
        </div>
        <div className="w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5">
          <FinanceModule />
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-[1.5rem] border border-white/5">
        <TaskTable />
      </div>
    </div>
  );
};

export default HomePage;