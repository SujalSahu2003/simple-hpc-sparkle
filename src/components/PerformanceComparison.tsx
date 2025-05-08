
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { HardDrive, Layers, Network } from 'lucide-react';

const PerformanceComparison = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [sequentialTime, setSequentialTime] = useState(0);
  const [parallelTime, setParallelTime] = useState(0);
  
  const runComparison = () => {
    setIsRunning(true);
    setSequentialTime(0);
    setParallelTime(0);
    
    // Simulate sequential processing time (slower)
    const seqInterval = setInterval(() => {
      setSequentialTime(prev => {
        if (prev < 100) return prev + 2;
        clearInterval(seqInterval);
        return 100;
      });
    }, 50);
    
    // Simulate parallel processing time (faster)
    const parInterval = setInterval(() => {
      setParallelTime(prev => {
        if (prev < 100) return prev + 5;
        clearInterval(parInterval);
        return 100;
      });
    }, 50);
    
    // Stop the simulation after both reach 100%
    const checkCompleteInterval = setInterval(() => {
      if (sequentialTime >= 100 && parallelTime >= 100) {
        setIsRunning(false);
        clearInterval(checkCompleteInterval);
      }
    }, 100);
  };
  
  const getPerformanceData = () => {
    const baseTime = 10; // base execution time
    
    return [
      {
        name: 'Sequential',
        time: baseTime,
        color: '#4f46e5'
      },
      {
        name: '2 Nodes',
        time: baseTime / 1.8,
        color: '#0d9488'
      },
      {
        name: '4 Nodes',
        time: baseTime / 3.5,
        color: '#16a34a'
      },
      {
        name: '8 Nodes',
        time: baseTime / 6,
        color: '#0891b2'
      }
    ];
  };
  
  const data = getPerformanceData();
  
  return (
    <Card className="bg-white shadow-md border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-hpc-blue flex items-center gap-2">
          <Layers className="h-5 w-5" /> Performance Comparison
        </CardTitle>
        <CardDescription>
          Sequential vs. Parallel Processing Speed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 my-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <XAxis type="number" domain={[0, 10]} name="Execution Time (s)" />
              <YAxis type="category" dataKey="name" />
              <Tooltip 
                formatter={(value) => [`${value.toFixed(2)} seconds`, 'Execution Time']}
                labelFormatter={() => ''}
              />
              <Bar dataKey="time" fill="#4f46e5" radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Bar key={index} dataKey="time" fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <HardDrive className="h-4 w-4 text-hpc-indigo" /> Sequential Processing
              </span>
              <span>{Math.round(sequentialTime)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-hpc-indigo h-2 rounded-full transition-all duration-300" 
                style={{ width: `${sequentialTime}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <Network className="h-4 w-4 text-hpc-green" /> Parallel Processing (4 nodes)
              </span>
              <span>{Math.round(parallelTime)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-hpc-green h-2 rounded-full transition-all duration-300" 
                style={{ width: `${parallelTime}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={runComparison} 
          disabled={isRunning}
          className="w-full bg-hpc-blue hover:bg-hpc-purple"
        >
          {isRunning ? 'Running Comparison...' : 'Run Comparison'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PerformanceComparison;
