import React from 'react';

const ProjectCard = ({ project }) => {
  // Mapovanie farieb z tailwind.config.js
  const colorMap = {
    nexusRed: 'border-nexusRed text-nexusRed bg-nexusRed/10',
    nexusGreen: 'border-nexusGreen text-nexusGreen bg-nexusGreen/10',
    nexusYellow: 'border-nexusYellow text-nexusYellow bg-nexusYellow/10',
    nexusBlack: 'border-white text-white bg-white/10',
  };

  const currentColor = colorMap[project.color] || 'border-gray-500 text-gray-500 bg-gray-500/10';

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-6 hover:border-gray-600 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${currentColor}`}>
          {project.status.replace('_', ' ')}
        </div>
        <span className="text-gray-600 font-mono text-xs">{project.priority}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nexusYellow transition-colors">
        {project.name}
      </h3>
      <p className="text-gray-400 text-sm mb-6 h-10 line-clamp-2">
        {project.description}
      </p>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-gray-500">Progress</span>
          <span className="text-white">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${project.color === 'nexusRed' ? 'bg-nexusRed' : project.color === 'nexusYellow' ? 'bg-nexusYellow' : 'bg-nexusGreen'}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center pt-6 border-t border-gray-800">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase">Deadline</span>
          <span className="text-xs text-white font-mono">{project.deadline || 'TBD'}</span>
        </div>
        <button className="text-nexusYellow text-xs font-bold hover:underline">
          DETAIL →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;