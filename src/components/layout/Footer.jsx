import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-8 px-8 border-t border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center space-y-3">
        {/* Horná línia s verziou */}
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-800" />
          <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-black">
            Nexus OS <span className="text-emerald-500">v3.1</span>
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-800" />
        </div>

        {/* Hlavná signatúra */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-gray-400 uppercase tracking-widest">
          <span className="opacity-50 font-light">Architected by:</span>
          <span className="text-white font-black italic">Dušan Fajnor</span>
          <span className="text-gray-800 mx-2">|</span>
          <span className="opacity-50 font-light">Powered by:</span>
          <span className="text-cyan-500 font-bold tracking-tighter">Gemini CyberTech</span>
        </div>

        {/* Lokalita a rok */}
        <p className="text-[9px] text-gray-600 font-mono tracking-[0.2em] uppercase">
          Location & Year: <span className="text-gray-500">Trnava, 2026</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;