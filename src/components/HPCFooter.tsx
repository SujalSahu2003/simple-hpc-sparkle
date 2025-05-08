
import React from 'react';

const HPCFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">Distributed High-Performance Computing (HPC) Simulator</p>
        <p className="text-gray-400 text-sm">
          An educational demonstration of HPC principles | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default HPCFooter;
