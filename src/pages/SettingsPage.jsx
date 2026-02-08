import React from 'react';
import { User, Database, Download, Upload, Clock, ShieldCheck, MapPin } from 'lucide-react';
import data from '../data/data.json'; // Načítanie tvojho Master JSONu

const SettingsPage = () => {
  // Časová os tvojho progresu (2018 - 2026)
  const timeline = [
    { year: '2018', event: 'Genesis: OneNote Archív (Summer)', status: 'past' },
    { year: '2022', event: 'Digital Transformation: My Prosperity logic', status: 'past' },
    { year: '2026', event: 'Nexus OS v3.1: React Dashboard Deployment', status: 'current' },
  ];

  // FUNKCIA PRE EXPORT DÁT
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `NEXUS_BACKUP_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // FUNKCIA PRE IMPORT DÁT (Zatiaľ výpis do konzoly pre bezpečnosť)
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          console.log("📥 Načítané dáta z JSON:", json);
          alert("Dáta boli úspešne načítané do konzoly systému!");
        } catch (err) {
          alert("Chyba: Súbor nie je platný JSON.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
      
      {/* 1. HEADER: MASTER CREATOR PROFILE */}
      <div className="bg-[#0d0d0d] border border-white/5 rounded-[3rem] p-8 mb-8 relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 p-1 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
              <User size={60} className="text-white opacity-80" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter">
              Dušan <span className="text-purple-500 not-italic">Fajnor</span>
            </h1>
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mt-1 mb-4">
              Master System Architect & Creator
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-left">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <MapPin size={12} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Trnava, SVK</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <ShieldCheck size={12} className="text-cyan-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Nexus Auth: Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        
        {/* 2. DATA ENGINE: EXPORT & IMPORT */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4 text-left">
            <Database className="text-cyan-500" size={20} />
            <h2 className="text-xl font-black text-white uppercase tracking-widest italic">Data Engine</h2>
          </div>
          
          <div className="space-y-6 text-left">
            <p className="text-gray-400 text-sm font-light">
              Správa lokálneho JSON úložiska. Zálohuj si svoj pokrok pravidelne.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* EXPORT TLAČIDLO */}
              <button 
                onClick={handleExport}
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 p-4 rounded-2xl transition-all group"
              >
                <Download size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Export JSON</span>
              </button>
              
              {/* IMPORT TLAČIDLO (Cez label a skrytý input) */}
              <label className="flex items-center justify-center gap-3 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 p-4 rounded-2xl transition-all group cursor-pointer">
                <Upload size={18} className="text-cyan-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Import JSON</span>
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".json" 
                  onChange={handleImport}
                />
              </label>
            </div>
            
            <div className="mt-4 p-4 bg-black/40 rounded-xl border border-white/5 text-left">
              <p className="text-[9px] text-gray-600 uppercase font-bold mb-1">Current Backup Status</p>
              <p className="text-gray-400 font-mono text-xs italic">NEXUS_READY_2026.json</p>
            </div>
          </div>
        </div>

        {/* 3. JOURNEY TIMELINE */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4 text-left">
            <Clock className="text-purple-500" size={20} />
            <h2 className="text-xl font-black text-white uppercase tracking-widest italic">Nexus Journey</h2>
          </div>
          
          <div className="space-y-8 relative text-left">
            <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-purple-500 to-transparent opacity-20" />
            
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start relative z-10">
                <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center border font-black text-[10px] ${
                  item.status === 'current' 
                  ? 'bg-purple-500 text-black border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
                  : 'bg-black border-white/10 text-gray-500'
                }`}>
                  {item.year.slice(2)}
                </div>
                <div>
                  <p className={`text-sm font-bold ${item.status === 'current' ? 'text-white' : 'text-gray-500'}`}>
                    {item.event}
                  </p>
                  {item.status === 'current' && (
                    <span className="text-[8px] text-purple-400 uppercase font-black tracking-widest">Active Phase</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;