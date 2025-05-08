
import React, { useState, useEffect } from 'react';
import ComputeNode from './ComputeNode';
import { Network, Share } from 'lucide-react';

const NodeCluster: React.FC = () => {
  const [nodeStates, setNodeStates] = useState([
    { id: 1, status: 'idle' as const, progress: 0 },
    { id: 2, status: 'idle' as const, progress: 0 },
    { id: 3, status: 'idle' as const, progress: 0 },
    { id: 4, status: 'idle' as const, progress: 0 }
  ]);
  
  const [isSimulating, setIsSimulating] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isSimulating) {
      interval = setInterval(() => {
        setNodeStates(prevStates => {
          const newStates = [...prevStates];
          let taskCompleted = false;
          
          newStates.forEach(node => {
            if (node.status === 'processing') {
              node.progress += Math.random() * 5 + 5;
              
              if (node.progress >= 100) {
                node.status = 'complete';
                node.progress = 100;
                taskCompleted = true;
              }
            }
          });
          
          if (taskCompleted) {
            setCompletedTasks(prev => prev + 1);
          }
          
          // If all nodes are idle or complete, assign new tasks to idle nodes
          const idleNodes = newStates.filter(node => node.status === 'idle');
          if (idleNodes.length > 0 && completedTasks < 8) {
            idleNodes.forEach(node => {
              node.status = 'processing';
              node.progress = 0;
            });
          }
          
          if (completedTasks >= 8 && newStates.every(node => node.status !== 'processing')) {
            setIsSimulating(false);
          }
          
          return newStates;
        });
      }, 200);
    } else {
      // Reset when simulation stops
      if (completedTasks >= 8) {
        setTimeout(() => {
          setNodeStates(nodes => nodes.map(node => ({ ...node, status: 'idle', progress: 0 })));
          setCompletedTasks(0);
        }, 2000);
      }
    }
    
    return () => clearInterval(interval);
  }, [isSimulating, completedTasks]);
  
  const startSimulation = () => {
    setIsSimulating(true);
    setCompletedTasks(0);
    setNodeStates(nodes => nodes.map(node => ({ ...node, status: 'idle', progress: 0 })));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-none">
      <div className="flex flex-col md:flex-row justify-between mb-6 items-center">
        <div>
          <h2 className="text-xl font-semibold text-hpc-blue flex items-center gap-2">
            <Network /> Compute Node Cluster
          </h2>
          <p className="text-gray-600">Tasks completed: {completedTasks}/8</p>
        </div>
        <button
          onClick={startSimulation}
          disabled={isSimulating}
          className="mt-4 md:mt-0 bg-hpc-indigo hover:bg-hpc-purple disabled:bg-gray-300 text-white px-4 py-2 rounded flex items-center gap-2 transition duration-300"
        >
          <Share className="h-4 w-4" /> {isSimulating ? "Simulating..." : "Start Simulation"}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {nodeStates.map(node => (
          <ComputeNode 
            key={node.id}
            id={node.id}
            status={node.status}
            processingPercent={node.progress}
          />
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>This simulation demonstrates how tasks are distributed across multiple compute nodes in an HPC system, enabling parallel processing of workloads.</p>
      </div>
    </div>
  );
};

export default NodeCluster;
