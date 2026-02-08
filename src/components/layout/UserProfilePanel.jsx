import React from 'react';
import { X, LogOut, RefreshCw, Cpu, Activity, Zap } from 'lucide-react';
import data from '../../data/data.json';

const UserProfilePanel = ({ isOpen, onClose }) => {
  const profile = data?.nexus_configuration?.user_profile;
  const owner = data?.nexus_configuration?.owner;
  
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-80 bg-[#0d0d0d] border-l border-white/10 z-[70] shadow-2xl animate-in slide-in-from-right duration-300 text-left flex flex-col font-sans">
        
        {/* HEADER */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em]">System Entity</span>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-500 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* IDENTITY */}
        <div className="p-8 text-center border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 blur-3xl" />
          
          <div className="relative inline-block mb-4">
             <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-1 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full bg-[#0d0d0d] rounded-full flex items-center justify-center text-4xl border border-white/10">
                  👤
                </div>
             </div>
             <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-[#0d0d0d] flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
             </div>
          </div>
          <h2 className="text-xl font-black text-white uppercase italic tracking-tighter relative z-10">
            {owner}
          </h2>
          <p className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-widest mt-1 relative z-10">
            {profile?.rank || "Architect"}
          </p>
          <p className="text-[9px] text-gray-500 italic mt-3 font-mono">"{profile?.bio_quote}"</p>
        </div>

        {/* STATS MONITOR */}
        <div className="p-6 space-y-6 border-b border-white/5">
          <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-4">CyberTech Monitor</p>
          
          <div className="space-y-4">
            {profile?.stats?.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-gray-400 uppercase">{stat.label}</span>
                  <span className={`font-bold text-${stat.color}-500`}>{stat.value}</span>
                </div>
                {/* Visual Bar only for percentages */}
                {stat.value.includes('%') && (
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${stat.color}-500 shadow-[0_0_10px_currentColor]`} 
                      style={{ width: stat.value }} 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-4">Evolution Log</p>
          <div className="space-y-5 border-l-2 border-white/5 ml-2 pl-4">
             {profile?.timeline?.map((item, i) => (
               <div key={i} className="relative group">
                  <div className={`absolute -left-[21px] top-1 w-2 h-2 rounded-full transition-all group-hover:scale-150 ${item.year === "'26" ? "bg-emerald-500 animate-pulse" : "bg-gray-600"}`} />
                  <p className={`text-[9px] font-mono font-bold ${item.year === "'26" ? "text-emerald-500" : "text-gray-500"}`}>{item.year}</p>
                  <p className={`text-[10px] tracking-tight ${item.color}`}>{item.event}</p>
               </div>
             ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="p-4 bg-white/[0.02] border-t border-white/5 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-red-500/10 border border-white/10 rounded-xl text-[9px] font-black uppercase text-gray-500 hover:text-red-500 transition-all">
            <LogOut size={14} /> Sleep Mode
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-blue-500/10 border border-white/10 rounded-xl text-[9px] font-black uppercase text-gray-500 hover:text-blue-500 transition-all">
            <RefreshCw size={14} /> Reboot OS
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfilePanel;