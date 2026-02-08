import React from "react";
import * as LucideIcons from "lucide-react";

const SpaceTemplate = ({ data }) => {
  if (!data)
    return (
      <div className="text-gray-500 font-mono p-10 uppercase tracking-widest text-left">
        No Data Selected
      </div>
    );

  const MainIcon = LucideIcons[data.icon] || LucideIcons.Shield;

  const colorStyles = {
    emerald: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "bg-emerald-500/20",
      bar: "bg-emerald-500",
    },
    yellow: {
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      glow: "bg-yellow-500/20",
      bar: "bg-yellow-500",
    },
    amber: {
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "bg-amber-500/20",
      bar: "bg-amber-500",
    },
    orange: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      glow: "bg-orange-500/20",
      bar: "bg-orange-500",
    },
    "yellow-600": {
      text: "text-yellow-600",
      bg: "bg-yellow-600/10",
      border: "border-yellow-600/20",
      glow: "bg-yellow-600/20",
      bar: "bg-yellow-600",
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "bg-purple-500/20",
      bar: "bg-purple-500",
    },
    violet: {
      text: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      glow: "bg-violet-500/20",
      bar: "bg-violet-500",
    },
    cyan: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "bg-cyan-500/20",
      bar: "bg-cyan-500",
    },
    red: {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      glow: "bg-red-500/20",
      bar: "bg-red-500",
    },
    indigo: {
      text: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      glow: "bg-indigo-500/20",
      bar: "bg-indigo-500",
    },
  };

  const style = colorStyles[data.color] || colorStyles.emerald;

  return (
    <div className="space-y-6 animate-in fade-in zoom-in duration-700 text-left pb-24 md:pb-10">
      {/* HEADER: Neon Glass Design s opravou pretekania */}
      <div
        className={`p-6 md:p-10 rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 shadow-2xl relative overflow-hidden`}
      >
        {/* Glow efekt */}
        <div
          className={`absolute -right-20 -top-20 w-64 h-64 ${style.glow} blur-[100px] rounded-full opacity-30`}
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
          {/* Ikona */}
          <div
            className={`p-4 md:p-6 bg-white/5 rounded-3xl border border-white/10 ${style.text} shadow-xl flex-shrink-0`}
          >
            <MainIcon size={32} className="md:w-[42px] md:h-[42px]" />
          </div>

          {/* Nadpis s fluidnou veľkosťou */}
          <div className="text-left min-w-0 flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white italic leading-[0.9] break-words">
              {data.name.split(" ")[0]}
              <span
                className={`${style.text} not-italic block sm:inline sm:ml-3`}
              >
                {data.name.split(" ")[1] || "UI"} Space
              </span>
            </h1>

            {/* Cesta pod nadpisom */}
            <div className="flex items-center gap-2 mt-4">
              <div
                className={`w-8 h-[1px] ${style.bar} opacity-50 hidden xs:block`}
              />
              <p className="text-gray-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] leading-none">
                {data.cesta}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT: Pravdy (50/50 Split) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PREŽITÁ PRAVDA */}
        <div className="bg-[#0a0a0a]/60 border border-white/5 p-6 md:p-8 rounded-[2.2rem] hover:border-emerald-500/30 transition-all duration-500 group">
          <h3 className="flex items-center gap-3 text-[11px] font-black text-emerald-500 uppercase mb-6 tracking-widest border-b border-white/5 pb-4 group-hover:border-emerald-500/20">
            <LucideIcons.CheckCircle2 size={16} /> Prežitá Pravda
          </h3>
          <ul className="space-y-4">
            {data.prezita_pravda?.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-start text-gray-200 text-sm font-medium leading-relaxed"
              >
                <span className="text-emerald-500 font-bold shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEPREŽITÁ PRAVDA */}
        <div className="bg-[#0a0a0a]/30 border border-white/5 p-6 md:p-8 rounded-[2.2rem] hover:border-red-500/20 transition-all duration-500 group opacity-80">
          <h3 className="flex items-center gap-3 text-[11px] font-black text-red-500 uppercase mb-6 tracking-widest border-b border-white/5 pb-4 group-hover:border-red-500/10">
            <LucideIcons.Zap size={16} /> Neprežitá Pravda
          </h3>
          <ul className="space-y-4">
            {data.neprezita_pravda?.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 items-start text-gray-500 italic text-sm leading-relaxed"
              >
                <span className="text-red-900/50 shrink-0">▫</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* FOOTER: System Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-blue-500/40">
          <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1">
            Environment status
          </p>
          <div className="flex items-center gap-2">
            <LucideIcons.Activity size={14} className="text-blue-500" />
            <p className="text-white text-sm font-bold truncate tracking-tight">
              {data.life}
            </p>
          </div>
        </div>

        <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-2xl flex flex-col justify-center border-l-4 border-l-purple-500/40">
          <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-2">
            Projects in scope
          </p>
          <div className="flex flex-wrap gap-1.5">
            {data.projekty?.map((p, i) => (
              <span
                key={i}
                className="text-[10px] bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10 text-purple-400 font-mono"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-2xl flex justify-between items-center border-l-4 border-l-emerald-500/40">
          <div className="text-left">
            <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1">
              Prosperity
            </p>
            <p
              className={`${style.text} text-2xl font-black tracking-tighter leading-none`}
            >
              {data.prosperita}
            </p>
          </div>
          <LucideIcons.TrendingUp
            size={20}
            className={`${style.text} opacity-50`}
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceTemplate;
