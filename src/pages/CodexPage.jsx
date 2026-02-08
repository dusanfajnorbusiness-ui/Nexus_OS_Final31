import React, { useState } from 'react';
import data from '../data/data.json';
import SpaceTemplate from './codex/SpaceTemplate';
import * as LucideIcons from "lucide-react";

const CodexPage = () => {
  const [selectedSpace, setSelectedSpace] = useState(data.codex_dimensions[0]);

  // SENIOR FIX: Mapa farieb pre zoznam kariet
  const colorMap = {
    emerald: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:border-emerald-500/50 hover:bg-emerald-500/10",
    yellow: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5 hover:border-yellow-500/50 hover:bg-yellow-500/10",
    amber: "border-amber-500/20 text-amber-400 bg-amber-500/5 hover:border-amber-500/50 hover:bg-amber-500/10",
    orange: "border-orange-500/20 text-orange-400 bg-orange-500/5 hover:border-orange-500/50 hover:bg-orange-500/10",
    "yellow-600": "border-yellow-600/20 text-yellow-600 bg-yellow-600/5 hover:border-yellow-600/50 hover:bg-yellow-600/10",
    purple: "border-purple-500/20 text-purple-400 bg-purple-500/5 hover:border-purple-500/50 hover:bg-purple-500/10",
    violet: "border-violet-500/20 text-violet-400 bg-violet-500/5 hover:border-violet-500/50 hover:bg-violet-500/10",
    cyan: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5 hover:border-cyan-500/50 hover:bg-cyan-500/10",
    red: "border-red-500/20 text-red-400 bg-red-500/5 hover:border-red-500/50 hover:bg-red-500/10",
    indigo: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5 hover:border-indigo-500/50 hover:bg-indigo-500/10",
  };

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-700">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR: ZOZNAM KARIET */}
        <div className="w-full lg:w-80 space-y-3">
          <h2 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-6 px-2 text-left">
            Select Dimension
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {data.codex_dimensions.map((dim) => {
              const Icon = LucideIcons[dim.icon] || LucideIcons.Shield;
              const isActive = selectedSpace?.id === dim.id;
              const colorStyle = colorMap[dim.color] || colorMap.emerald;

              return (
                <button
                  key={dim.id}
                  onClick={() => setSelectedSpace(dim)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group text-left ${
                    isActive 
                    ? `${colorStyle.split(' ')[0].replace('border-','border-opacity-100 border-')} bg-white/5 shadow-lg scale-[1.02]` 
                    : `border-white/5 bg-black/20 text-gray-500 opacity-60 hover:opacity-100 hover:border-white/20`
                  }`}
                >
                  <div className={`p-2 rounded-xl bg-black/40 ${isActive ? colorStyle.split(' ')[1] : 'text-gray-600'}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-white' : ''}`}>
                      {dim.name.split(' ')[0]}
                    </p>
                    <p className="text-[8px] font-mono text-gray-600 uppercase tracking-tighter">
                      {dim.id}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN DISPLAY: OBSAH KARTY */}
        <div className="flex-1">
          <SpaceTemplate data={selectedSpace} />
        </div>

      </div>
    </div>
  );
};

export default CodexPage;