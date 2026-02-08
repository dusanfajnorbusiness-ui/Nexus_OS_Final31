// src/components/layout/Header.jsx
import React, { useState } from "react";
import { Menu, ShieldCheck, User } from "lucide-react";
import data from "../../data/data.json";
import UserProfilePanel from "./UserProfilePanel";

const Header = ({ setIsSidebarOpen }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const config = data?.nexus_configuration;

  return (
    <>
      <header className="h-20 bg-[#0d0d0d]/80 border-b border-white/5 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 w-full backdrop-blur-xl">
        <div className="flex items-center gap-4">
          {/* Mobilný Hamburger - dostatočný odstup mr-2 */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2.5 bg-purple-600/10 text-purple-500 rounded-xl border border-purple-500/20 mr-2"
          >
            <Menu size={20} />
          </button>
          
          {/* BRANDING: Nexus OS Genesis (Logika pre mobil) */}
          <div className="flex flex-col text-left">
            <h2 className="text-xs md:text-sm font-black text-white uppercase tracking-tighter leading-none">
              Nexus <span className="text-purple-500 italic">OS</span>
            </h2>
            <span className="text-[8px] md:text-[9px] font-mono font-bold text-gray-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mt-1">
              Genesis Edition
            </span>
          </div>
        </div>

        {/* PROFIL: Architect Identity (Logika pre web/mobil) */}
        <div 
          onClick={() => setIsPanelOpen(true)}
          className="flex items-center gap-3 bg-white/5 p-1.5 pr-4 rounded-full border border-white/10 group cursor-pointer hover:border-purple-500/50 transition-all ml-auto shadow-lg"
        >
          {/* Profilový kruh - na mobile zostáva, na webe sa zväčší efekt */}
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-105 transition-all">
            <User size={14} className="text-white" />
          </div>

          {/* Textové info: Skryté na veľmi malých mobiloch, viditeľné od 'sm' nahor */}
          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1 leading-none">
              <p className="text-[9px] font-black text-white uppercase tracking-tighter leading-none">
                {config?.owner || "Dušan Fajnor"}
              </p>
              <ShieldCheck size={10} className="text-purple-500" />
            </div>
            <p className="text-[7px] text-emerald-500 uppercase font-mono mt-0.5 tracking-widest font-bold">
              System Architect
            </p>
          </div>
        </div>
      </header>

      {/* Tento komponent zabezpečí vysunutie panelu zprava */}
      <UserProfilePanel 
        isOpen={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)} 
      />
    </>
  );
};

export default Header;