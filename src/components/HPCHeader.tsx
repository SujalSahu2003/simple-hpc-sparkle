
import React from 'react';
import { Server, Network } from 'lucide-react';

const HPCHeader = () => {
  return (
    <header className="bg-gradient-to-r from-hpc-blue to-hpc-purple p-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Server className="h-8 w-8" />
          <h1 className="text-2xl md:text-3xl font-bold">HPC Simulator</h1>
        </div>
        <div className="flex items-center gap-2">
          <Network className="h-6 w-6" />
          <span className="text-lg font-medium">Distributed High-Performance Computing</span>
        </div>
      </div>
    </header>
  );
};

export default HPCHeader;
