
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cloud, Database, Cpu, Network, Layers } from 'lucide-react';

const HPCConcepts = () => {
  return (
    <Card className="bg-white shadow-md border-none">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4 text-hpc-blue">Core HPC Concepts</h2>
        
        <Tabs defaultValue="parallel" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="parallel" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" /> Parallel Processing
            </TabsTrigger>
            <TabsTrigger value="distributed" className="flex items-center gap-2">
              <Network className="h-4 w-4" /> Distributed Computing
            </TabsTrigger>
            <TabsTrigger value="scaling" className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> Scalability
            </TabsTrigger>
            <TabsTrigger value="storage" className="flex items-center gap-2">
              <Database className="h-4 w-4" /> Data Management
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="parallel" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-hpc-indigo">Parallel Processing</h3>
              <p>
                Parallel processing involves breaking down a task into smaller subtasks that can be processed simultaneously. 
                Instead of executing instructions one after another (sequential processing), parallel processing executes 
                multiple instructions at the same time.
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>Reduces time to solution for large computational problems</li>
                <li>Requires algorithms designed for parallel execution</li>
                <li>Enables handling of much larger datasets than traditional computing</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="distributed" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-hpc-teal">Distributed Computing</h3>
              <p>
                Distributed computing spreads tasks across multiple computers connected by networks. Each computer 
                (or node) has its own memory and processing capabilities, working in coordination with other nodes.
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>Increases total system memory and computing resources</li>
                <li>Requires network communication between nodes</li>
                <li>Message Passing Interface (MPI) is a common protocol for node communication</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="scaling" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-hpc-purple">Scalability</h3>
              <p>
                Scalability refers to a system's ability to handle growing amounts of work by adding resources. 
                HPC systems can scale in two primary ways:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-hpc-blue">Strong Scaling</h4>
                  <p className="text-sm">Keeping the problem size fixed while increasing the number of processors to reduce computation time.</p>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-hpc-green">Weak Scaling</h4>
                  <p className="text-sm">Increasing both the problem size and number of processors, keeping work per processor constant.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="storage" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-hpc-cyan">Data Management</h3>
              <p>
                HPC systems deal with massive data volumes that must be efficiently stored, accessed, and moved.
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>Parallel file systems (like Lustre, GPFS) allow multiple nodes to access storage simultaneously</li>
                <li>Data locality - keeping data close to compute resources for faster access</li>
                <li>Multi-tier storage hierarchies (memory, SSD, HDD, tape) balance performance and cost</li>
                <li>I/O optimization is critical for overall HPC system performance</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HPCConcepts;
