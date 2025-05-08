
import React from 'react';
import HPCHeader from '../components/HPCHeader';
import Introduction from '../components/Introduction';
import NodeCluster from '../components/NodeCluster';
import PerformanceComparison from '../components/PerformanceComparison';
import HPCConcepts from '../components/HPCConcepts';
import HPCFooter from '../components/HPCFooter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HPCHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-8">
          <Introduction />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PerformanceComparison />
            <HPCConcepts />
          </div>
          
          <NodeCluster />
        </div>
      </main>
      
      <HPCFooter />
    </div>
  );
};

export default Index;
