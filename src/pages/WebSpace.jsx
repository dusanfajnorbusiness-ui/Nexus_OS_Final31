import React from 'react';
import { Globe, ExternalLink, TrendingUp, Layout, MessageSquare, ShieldCheck } from 'lucide-react';

const WebSpace = () => {
  // REVIDOVANÉ CIELE PODĽA GLOBÁLNYCH ŠTATISTÍK
  const mrrGoal = 150; // Fáza 1: Genesis (50 podporovateľov)
  const finalVision = 1248; // Dlhodobý cieľ

  return (
    <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
      
      {/* HEADER */}
      <div className="mb-10 border-b border-white/5 pb-8">
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Web UI <span className="text-cyan-500 not-italic">Space</span>
        </h1>
        <p className="text-gray-500 font-mono text-[10px] mt-2 uppercase tracking-[0.5em]">Digital Business & Legacy Archive</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        
        {/* 1. LEGACY ARCHIVE (Google Sites) */}
        <div className="bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden text-left">
          <div className="flex items-center gap-4 mb-6 text-left">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
              <Globe size={24} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-black text-white uppercase tracking-widest">Google Sites Archív</h2>
              <p className="text-[9px] text-gray-600 uppercase font-mono italic">Status: Neaktívne (Genesis 2018)</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
            Pôvodná zdarma stránka slúžiaca ako úložisko projektov od roku 2018.
          </p>
          <a href="https://sites.google.com/view/dusan-fajnor-project-nexus/domov" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-blue-500/20 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all group">
            Vstúpiť do archívu <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 2. NEW PROJECT (Blog & Web) */}
        <div className="bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group text-left">
          <div className="flex items-center gap-4 mb-6 text-left">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <Layout size={24} />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-black text-white uppercase italic tracking-tighter">Dušan Fajnor Projekt Nexus</h2>
              <p className="text-[9px] text-cyan-500 uppercase font-black tracking-widest animate-pulse">Phase 1: Genesis</p>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="bg-black/40 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
              <div className="text-left">
                <p className="text-[9px] text-gray-600 uppercase font-black mb-1">Míľnik 1: Genesis MRR</p>
                <p className="text-white font-black text-xl italic">{mrrGoal} €</p>
              </div>
              <div className="text-right"> {/* OPRAVENÉ: Tu zostáva text-right pre vizuálny split */}
                <p className="text-[9px] text-gray-600 uppercase font-black mb-1">Vízia (Monthly)</p>
                <p className="text-cyan-500 font-black text-sm tracking-widest">{finalVision} €</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 text-left">
              <div className="flex-1 bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2">
                <Layout size={14} className="text-cyan-500" />
                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">The Core (Informácie)</span>
              </div>
              <div className="flex-1 bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2">
                <MessageSquare size={14} className="text-cyan-500" />
                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">The Interaction (Blog & Diskusia)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REVENUE PULSE MONITOR */}
      <div className="mt-8 bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] text-left italic">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-3 text-xs font-black text-white uppercase tracking-widest not-italic">
            <TrendingUp size={16} className="text-emerald-500" /> Revenue Pulse Monitor
          </h3>
          <span className="text-emerald-500 font-mono text-xs font-black">STARTING: {mrrGoal} €</span>
        </div>
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
          <div className="w-0 h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-1000" />
        </div>
        <p className="text-[9px] text-gray-600 mt-4 uppercase tracking-widest font-light">
          Míľnik 1: Prvých 50 podporovateľov tvojho prebudenia a oslobodenia.
        </p>
      </div>
    </div>
  );
};

export default WebSpace;