import React from 'react';

const GanttChart = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MÁJ', 'JÚN', 'JÚL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'];
  const projects = [
    { name: 'YT', progress: 60, color: 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' },
    { name: 'APP', progress: 35, color: 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]' },
    { name: 'WEB', progress: 50, color: 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' }
  ];

  return (
    <div className="bg-[#0d0d0d] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl text-left relative overflow-hidden h-full">
      {/* Background Decor */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/5 blur-[80px] rounded-full" />

      <h2 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
        Project Timeline (Gantt)
      </h2>

      <div className="relative">
        {/* HORIZONTÁLNA OS MESIACOV - OPRAVENÁ */}
        <div className="flex justify-between ml-14 mb-6 border-b border-white/5 pb-2">
          {months.map((m) => (
            <div key={m} className="flex-1 text-center">
              <span className="text-[8px] font-mono text-gray-500 font-bold tracking-tighter">
                {m}
              </span>
            </div>
          ))}
        </div>

        {/* PROJEKTOVÉ RIADKY */}
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.name} className="flex items-center gap-4 group">
              {/* Názov projektu */}
              <div className="w-10 text-[10px] font-black text-white/60 font-mono tracking-tighter group-hover:text-white transition-colors">
                {p.name}
              </div>
              
              {/* Bar progressu */}
              <div className="flex-1 h-7 bg-white/5 rounded-xl relative border border-white/5 overflow-hidden p-[2px]">
                <div 
                  className={`h-full ${p.color} rounded-lg transition-all duration-1000 flex items-center justify-end pr-3`}
                  style={{ width: `${p.progress}%` }}
                >
                  <span className="text-[8px] font-black text-white drop-shadow-md">
                    {p.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="mt-8 text-[8px] text-gray-700 font-mono italic uppercase tracking-widest">
        * System Status: Synchronized with Nexus Deployment Center
      </p>
    </div>
  );
};

export default GanttChart;