import React from "react";
import data from "../data/data.json";
import { Info, ExternalLink, Cog, Construction } from "lucide-react";

const AppsHub = () => {
  const { habits, motivational, system } = data.apps_hub;

  const RenderSection = (title, items) => (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8 ml-2">
        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
        <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] whitespace-nowrap">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((app) => (
          <div
            key={app.id}
            className="group bg-[#0d0d0d] border border-white/5 rounded-[2.5rem] p-1 shadow-2xl transition-all duration-500 hover:border-purple-500/30 hover:shadow-purple-500/5"
          >
            <div className="bg-[#080808] rounded-[2.2rem] p-6 h-full flex flex-col">
              {/* TOP: Icon & Badge */}
              <div className="flex justify-between items-start mb-6 text-left">
                <div className="text-4xl p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {app.icon}
                </div>
                <span
                  className={`text-[8px] px-2 py-1 rounded-lg font-black tracking-widest border ${
                    app.status === "IN PROGRESS"
                      ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
                      : app.status === "ON HOLD"
                        ? "border-amber-500/30 text-amber-400 bg-amber-500/5"
                        : "border-white/5 text-gray-600"
                  }`}
                >
                  {app.status}
                </span>
              </div>

              {/* MIDDLE: Info */}
              <div className="flex-1 text-left">
                <h3 className="text-lg font-black text-white uppercase tracking-tighter italic group-hover:text-purple-400 transition-colors flex items-center gap-2">
                  {app.name}
                </h3>

                {/* Špeciálna úprava pre YouTube kanál */}
                {app.id === "s2" && (
                  <div className="mt-1 mb-3">
                    <p className="text-[10px] text-purple-500 font-mono font-bold lowercase tracking-widest leading-none">
                      @dusanfajnor_nexus
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[7px] px-1.5 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 font-black uppercase tracking-tighter rounded">
                        Zombies Gaming
                      </span>
                      <span className="text-[7px] px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 font-black uppercase tracking-tighter rounded">
                        UI/UX Space
                      </span>
                    </div>
                  </div>
                )}

                <p className="text-[10px] text-gray-500 uppercase font-mono mt-1 mb-4 leading-relaxed">
                  {app.desc}
                </p>
              </div>

              {/* BOTTOM: Action Button */}
              <div className="mt-6 pt-6 border-t border-white/5 flex gap-2">
                <button
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-[9px] font-black uppercase tracking-widest transition-all ${
                    app.status === "IN PROGRESS"
                      ? "bg-purple-600/20 border-purple-500/50 text-white hover:bg-purple-600/40"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => alert(`Opening Intel for: ${app.name}`)}
                >
                  <Info size={14} /> System Intel
                </button>

                {app.status === "IN PROGRESS" && (
                  <button className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/20">
                    <ExternalLink size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-700 text-left">
      <div className="mb-12">
        <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic">
          Apps <span className="text-purple-500 not-italic">Hub</span>
        </h1>
        <p className="text-gray-500 font-mono text-[10px] mt-2 uppercase tracking-[0.6em]">
          Nexus Deployment Center
        </p>
      </div>

      {RenderSection("Neural Habits", habits)}
      {RenderSection("Motivational Engines", motivational)}
      {RenderSection("System Architecture", system)}
    </div>
  );
};

export default AppsHub;
