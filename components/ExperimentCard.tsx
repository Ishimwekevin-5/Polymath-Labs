
import React from 'react';
import { Experiment } from '../types';

interface ExperimentCardProps {
  experiment: Experiment;
}

const ExperimentCard: React.FC<ExperimentCardProps> = ({ experiment }) => {
  return (
    <div className="group cursor-pointer flex flex-col">
      <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-black/5 mb-5 relative">
        <img 
          src={experiment.image} 
          alt={experiment.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        {experiment.tag && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-black shadow-sm">
            {experiment.tag}
          </div>
        )}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-2">{experiment.category}</div>
        <h3 className="text-xl font-semibold mb-3 group-hover:underline decoration-1 underline-offset-4">{experiment.title}</h3>
        <p className="text-sm text-black/60 leading-relaxed line-clamp-2 pr-4">
          {experiment.description}
        </p>
      </div>
    </div>
  );
};

export default ExperimentCard;
