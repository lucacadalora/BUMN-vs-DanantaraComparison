import React from 'react';
import { Scale, BalanceScale } from '@/lib/icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-3">
            <Scale className="text-4xl mr-2" />
            <BalanceScale />
            <Scale className="text-4xl ml-2" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Analisis Perbandingan UU BUMN
          </h1>
          <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
            <span className="text-blue-200 font-medium mr-3">UU No. 19/2003</span>
            <span className="text-white font-bold">VS</span>
            <span className="text-blue-200 font-medium ml-3">UU No. 1/2025</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
