
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Introduction = () => {
  return (
    <Card className="bg-white shadow-md border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-hpc-blue">What is HPC?</CardTitle>
        <CardDescription>
          Understanding High-Performance Computing Systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          High-Performance Computing (HPC) refers to the practice of aggregating computing power to deliver much 
          higher performance than a typical desktop computer or workstation to solve large problems in science, 
          engineering, or business.
        </p>
        <p className="mb-4">
          <span className="font-semibold text-hpc-purple">Distributed HPC systems</span> combine multiple 
          computer nodes connected through networks to function as a single powerful unit, enabling faster 
          processing of complex tasks by breaking them into smaller parts and solving them in parallel.
        </p>
        <p>
          This simulator demonstrates the basic principles of distributed computing, parallel processing, and 
          the performance benefits of HPC systems in a simplified, visual way.
        </p>
      </CardContent>
    </Card>
  );
};

export default Introduction;
