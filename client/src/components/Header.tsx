import React from 'react';
import { Scale, BalanceScale } from '@/lib/icons';
import { ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Daily Digest branding bar */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Scale className="text-2xl mr-2" />
            <span className="font-bold text-blue-100">Daily Digest</span>
          </div>
          <a 
            href="https://lucaxyzz-digest.replit.app/" 
            className="flex items-center text-xs text-blue-100 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Our Platform</span>
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </div>

        {/* Main header content in a more compact layout */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <BalanceScale />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight ml-3">
              Analisis Perbandingan<br className="hidden md:block" />UU BUMN
            </h1>
          </div>
          
          <div className="flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-full">
            <span className="text-blue-200 font-medium mr-3 text-sm md:text-base">UU No. 19/2003</span>
            <span className="text-white font-bold">VS</span>
            <span className="text-blue-200 font-medium ml-3 text-sm md:text-base">UU No. 1/2025</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
