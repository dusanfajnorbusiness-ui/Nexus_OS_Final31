import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useDashboardStore = create(
  persist(
    (set, get) => ({
      // --- DATA (Initial State) ---
      projects: [],
      
      // ✅ TU SÚ TVOJE 4 MISSION TASKS AKO DEFAULT
      tasks: [
        { id: "T1", title: "Definovať YT témy pre 10 dimenzií", project: "NEXUS CODEX", deadline: "15.02.2026", status: "IN PROGRESS" },
        { id: "T2", title: "Scenár: Zombies Lore vs. Realita", project: "YT GAMING", deadline: "20.02.2026", status: "TODO" },
        { id: "T3", title: "Nastavenie platobnej brány (Genesis)", project: "WEB & BLOG", deadline: "01.03.2026", status: "TODO" },
        { id: "T4", title: "Video o architektúre Dashboardu", project: "UI SPACE", deadline: "HOTOVO", status: "DONE" },
      ],
      
      finances: {},

      // --- ACTIONS ---
      setProjects: (projects) => set({ projects }),
      setTasks: (tasks) => set({ tasks }),

      toggleTaskStatus: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  status: task.status === "DONE" ? "IN PROGRESS" : "DONE",
                }
              : task
          ),
        })),

      updateFinances: (newFinances) => set({ finances: newFinances }),

      // ✅ EXPORT FUNKCIA
      exportData: () => {
        const state = get();
        const dataStr =
          "data:text/json;charset=utf-8," +
          encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute(
          "download",
          `nexus_backup_${new Date().toISOString().split("T")[0]}.json`
        );
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      },

      // ✅ IMPORT FUNKCIA
      importData: (jsonData) => {
        try {
          const parsedData = JSON.parse(jsonData);
          if (parsedData.state) {
            set(parsedData.state);
          } else {
            set(parsedData);
          }
          alert("✅ Dáta boli úspešne importované!");
        } catch (error) {
          alert("❌ Chyba: Súbor nie je platný JSON.");
          console.error("Import error:", error);
        }
      },
    }),
    {
      name: "nexus-dashboard-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);