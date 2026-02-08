import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import CodexPage from "./pages/CodexPage";
import AppsHub from "./pages/AppsHub";
import WebSpace from "./pages/WebSpace";
import AcademySpace from "./pages/AcademySpace";
import SettingsPage from "./pages/SettingsPage";
import { Menu } from "lucide-react"; // Import menu ikony

function App() {
  const [activeTab, setActiveTab] = useState("dash");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Stav pre mobilné menu

  const renderContent = () => {
    switch (activeTab) {
      case "dash": return <HomePage />;
      case "codex": return <CodexPage />;
      case "apps": return <AppsHub />;
      case "web": return <WebSpace />;
      case "academy": return <AcademySpace />;
      case "settings": return <SettingsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-sans relative">
      {/* Tlačidlo pre otvorenie menu na mobile */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-[60] p-2 bg-purple-600 rounded-lg shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar s novými props */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 flex flex-col overflow-hidden relative w-full">
        <Header activeTab={activeTab} />
        
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-transparent to-purple-900/5 p-2 md:p-8">
          <div className="max-w-7xl mx-auto pb-24">
            {renderContent()}
          </div>
        </main>

        <div className="absolute bottom-0 left-0 right-0 z-50">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;