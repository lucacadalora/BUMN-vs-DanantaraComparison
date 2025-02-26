import React from 'react';
import { BalanceScale } from '@/lib/icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center mb-4">
            <BalanceScale />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Analisis Perbandingan UU BUMN
          </h1>
          
          <div className="bg-white bg-opacity-10 px-6 py-3 rounded-md inline-flex items-center">
            <div className="text-center">
              <div className="text-blue-200 font-semibold mb-1">UU No. 19/2003</div>
              <div className="text-xs text-blue-100">Undang-Undang Lama</div>
            </div>
            
            <div className="mx-4 font-bold text-xl">VS</div>
            
            <div className="text-center">
              <div className="text-blue-200 font-semibold mb-1">UU No. 1/2025</div>
              <div className="text-xs text-blue-100">Undang-Undang Baru</div>
            </div>
          </div>
          
          <a 
            href="https://lucaxyzz-digest.replit.app/" 
            className="mt-4 text-xs text-blue-200 hover:text-white transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Our Platform
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
