import React from 'react';
import { Scale } from '@/lib/icons';

const Header: React.FC = () => {
  return (
    <header className="bg-[#003366] text-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-center items-center">
        <div className="flex items-center">
          <Scale className="text-4xl mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Perbandingan UU BUMN</h1>
            <p className="text-sm opacity-80">UU No. 19/2003 vs UU No. 1/2025</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
