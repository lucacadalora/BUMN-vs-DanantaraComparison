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
        
        {/* Main header content with unified title */}
        <div className="flex justify-between items-center">
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white bg-opacity-10 p-2 rounded-full mr-3">
              <Gavel />
            </div>
            
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight">
                Analisis Perbandingan UU BUMN
              </h1>
              
              <div className="flex items-center mt-1 text-sm">
                <div>
                  <span className="text-blue-200 mr-1">UU No. 19/2003</span>
                  <span className="text-xs text-blue-100">(Lama)</span>
                </div>
                
                <span className="mx-2 font-bold text-xs">VS</span>
                
                <div>
                  <span className="text-blue-200 mr-1">UU No. 1/2025</span>
                  <span className="text-xs text-blue-100">(Baru)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
