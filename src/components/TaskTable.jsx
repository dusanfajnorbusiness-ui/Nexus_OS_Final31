import React from "react";
import { useDashboardStore } from "../store/dashboardStore";
import { CheckCircle2, Circle, Calendar, Briefcase } from "lucide-react";

const TaskTable = () => {
  const { tasks, toggleTaskStatus } = useDashboardStore();

  return (
    <div className="mt-10 bg-[#0d0d0d] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] flex items-center gap-2">
          <Briefcase size={14} className="text-purple-500" /> 
          Project Mission Tasks
        </h2>
        <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
          Active: {tasks.filter(t => t.status !== "DONE").length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-500 uppercase text-[9px] font-black tracking-widest bg-white/[0.01]">
            <tr>
              <th className="p-6 pl-10">Status</th>
              <th className="p-6">Názov úlohy</th>
              <th className="p-6">Projekt</th>
              <th className="p-6 text-right pr-10">Deadline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tasks.map((task) => (
              <tr 
                key={task.id} 
                className="group hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
                onClick={() => toggleTaskStatus(task.id)}
              >
                <td className="p-6 pl-10">
                  <div className="flex items-center">
                    {task.status === "DONE" ? (
                      <CheckCircle2 size={18} className="text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]" />
                    ) : (
                      <Circle size={18} className="text-gray-700 group-hover:text-purple-500 transition-colors" />
                    )}
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold tracking-tight transition-all ${
                      task.status === "DONE" ? "line-through text-gray-600" : "text-gray-200"
                    }`}>
                      {task.title}
                    </span>
                    <span className="text-[8px] text-gray-600 uppercase font-mono mt-1">ID: {task.id}</span>
                  </div>
                </td>
                <td className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-400/80 bg-purple-500/5 px-2 py-1 rounded-md border border-purple-500/10">
                    {task.project}
                  </span>
                </td>
                <td className="p-6 text-right pr-10">
                  <div className="flex items-center justify-end gap-2 text-gray-500 font-mono text-[11px]">
                    <Calendar size={12} />
                    {task.deadline}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;