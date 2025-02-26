import React from 'react';
import { Gavel } from '@/lib/icons';
import { ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        {/* Top bar with Visit Our Platform link */}
        <div className="flex justify-end mb-1">
          <a 
            href="https://lucaxyzz-digest.replit.app/" 
            className="flex items-center text-xs text-blue-200 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Our Platform</span>
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </div>
        
        {/* Main header content with more compact layout */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-10 p-2 rounded-full mr-3">
              <Gavel />
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              Analisis Perbandingan UU BUMN
            </h1>
          </div>
          
          <div className="hidden md:flex items-center bg-white bg-opacity-10 px-4 py-2 rounded-md">
            <div className="text-right mr-2">
              <div className="text-blue-200 font-medium text-sm">UU No. 19/2003</div>
              <div className="text-xs text-blue-100">Undang-Undang Lama</div>
            </div>
            
            <div className="mx-2 font-bold">VS</div>
            
            <div className="text-left ml-2">
              <div className="text-blue-200 font-medium text-sm">UU No. 1/2025</div>
              <div className="text-xs text-blue-100">Undang-Undang Baru</div>
            </div>
          </div>
        </div>
        
        {/* Mobile version of comparison - only visible on small screens */}
        <div className="md:hidden flex justify-center mt-2">
          <div className="flex items-center bg-white bg-opacity-10 px-3 py-1 rounded-md text-sm">
            <span>UU No. 19/2003</span>
            <span className="mx-2 font-bold">VS</span>
            <span>UU No. 1/2025</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
