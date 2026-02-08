import React from "react";
import {
  LayoutDashboard,
  Book,
  Rocket,
  Globe,
  GraduationCap,
  User,
  X,
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    {
      id: "dash",
      label: "Dashboard",
      icon: LayoutDashboard,
      section: "CORE UNITS",
    },
    { id: "codex", label: "Nexus Codex", icon: Book, section: "CORE UNITS" },
    { id: "apps", label: "Apps Hub", icon: Rocket, section: "PROJECTS & DEV" },
    {
      id: "web",
      label: "Web UI Space",
      icon: Globe,
      section: "PROJECTS & DEV",
    },
    {
      id: "academy",
      label: "Academy",
      icon: GraduationCap,
      section: "PROJECTS & DEV",
    },
  ];

  return (
    <>
      {/* Overlay pre mobil - zatvorí menu po kliknutí mimo */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed inset-y-0 left-0 z-[80] w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col h-screen p-4
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0
      `}
      >
        {/* LOGO SEKCOA & ZATVÁRACIE TLAČIDLO */}
        <div className="mb-10 px-4 pt-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white">
              NEXUS <span className="text-purple-500 italic">SYSTEM</span>
            </h1>
            <p className="text-[8px] text-gray-600 font-mono uppercase tracking-[0.3em]">
              v3.1 | Core Intelligence
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-500 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* NAVIGÁCIA */}
        <nav className="flex-1 space-y-8 overflow-y-auto">
          <div>
            <p className="px-4 text-[9px] font-black text-gray-700 uppercase tracking-[0.2em] mb-4">
              Core Units
            </p>
            {menuItems
              .filter((i) => i.section === "CORE UNITS")
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all mb-1 ${
                    activeTab === item.id
                      ? "bg-white/5 text-white border border-white/10 shadow-lg"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <item.icon
                    size={18}
                    className={activeTab === item.id ? "text-purple-400" : ""}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {item.label}
                  </span>
                </button>
              ))}
          </div>

          <div>
            <p className="px-4 text-[9px] font-black text-gray-700 uppercase tracking-[0.2em] mb-4">
              Projects & Dev
            </p>
            {menuItems
              .filter((i) => i.section === "PROJECTS & DEV")
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all mb-1 ${
                    activeTab === item.id
                      ? "bg-white/5 text-white border border-white/10"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <item.icon
                    size={18}
                    className={activeTab === item.id ? "text-purple-400" : ""}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {item.label}
                  </span>
                </button>
              ))}
          </div>
        </nav>

        {/* MASTER CREATOR PANEL */}
        <div className="mt-auto pt-6 border-t border-white/5">
          <button
            onClick={() => {
              setActiveTab("settings");
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
              activeTab === "settings"
                ? "bg-purple-600/10 border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                : "bg-white/5 border-white/10 text-gray-500 hover:bg-white/10"
            }`}
          >
            <div
              className={`p-2 rounded-lg bg-black ${activeTab === "settings" ? "text-purple-400" : "text-gray-600"}`}
            >
              <User size={18} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                Master Creator
              </p>
              <p className="text-[8px] text-gray-600 uppercase font-mono tracking-tighter">
                System Admin
              </p>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
