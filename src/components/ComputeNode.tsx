
import React from 'react';
import { Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComputeNodeProps {
  id: number;
  status: 'idle' | 'processing' | 'complete';
  processingPercent?: number;
}

const ComputeNode: React.FC<ComputeNodeProps> = ({ id, status, processingPercent = 0 }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'idle': return 'bg-gray-200';
      case 'processing': return 'bg-hpc-teal';
      case 'complete': return 'bg-hpc-green';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300",
        getStatusColor(),
        status === 'processing' && 'animate-pulse-node'
      )}
      style={{ height: '120px', width: '120px' }}
    >
      <Cpu className="h-8 w-8 text-white mb-2" />
      <p className="text-white font-semibold text-sm">Node {id}</p>
      
      {status === 'processing' && (
        <div className="absolute bottom-2 left-2 right-2 bg-white/30 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-white h-full rounded-full transition-all duration-300" 
            style={{ width: `${processingPercent}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ComputeNode;
