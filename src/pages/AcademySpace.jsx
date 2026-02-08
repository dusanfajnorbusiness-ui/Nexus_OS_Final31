import React from 'react';
import data from '../data/data.json';
import { GraduationCap, Code, Layout, BookOpen, Award, Zap } from 'lucide-react';

const AcademySpace = () => {
  const { courses } = data.academy;

  // Mapovanie ikon pre konkrétne kurzy (voliteľné)
  const getIcon = (id) => {
    switch (id) {
      case 'c1': return <Code className="text-purple-400" />;
      case 'c2': return <Zap className="text-blue-400" />;
      case 'c3': return <Layout className="text-pink-400" />;
      default: return <BookOpen className="text-gray-400" />;
    }
  };

  return (
    <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
      
      {/* HEADER */}
      <div className="mb-10 border-b border-white/5 pb-8">
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Academy <span className="text-purple-500 not-italic">Space</span>
        </h1>
        <p className="text-gray-500 font-mono text-[10px] mt-2 uppercase tracking-[0.5em]">
          Skill-Tree & Professional Evolution
        </p>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#0d0d0d] border border-white/5 p-6 rounded-[2rem] flex items-center gap-4">
          <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Active Courses</p>
            <p className="text-2xl font-black text-white">{courses.length}</p>
          </div>
        </div>
        {/* Tu môžeš neskôr pridať ďalšie štatistiky */}
      </div>

      {/* COURSE GRID */}
      <div className="grid grid-cols-1 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-[#0d0d0d] border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-all duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  {getIcon(course.id)}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                    {course.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Status: In Progress</p>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="w-full md:w-64">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Mastery Progress</span>
                  <span className="text-sm font-black text-purple-400 font-mono">{course.progress}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full border border-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-1000"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 rounded-xl transition-all group-hover:scale-110">
                  <Award size={18} className="text-purple-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER NÁPOVEDA */}
      <div className="mt-12 p-6 border border-purple-500/10 bg-purple-500/5 rounded-2xl italic">
        <p className="text-[9px] text-purple-300/60 uppercase tracking-widest font-mono">
          System Note: Progres je synchronizovaný s tvojím Data Core (data.json). Každé naučené "Prežité" pravidlo v Codexe zvyšuje tvoju Professional Authority.
        </p>
      </div>
    </div>
  );
};

export default AcademySpace;