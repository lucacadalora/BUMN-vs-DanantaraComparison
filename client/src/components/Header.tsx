import React from 'react';
import { Scale } from '@/lib/icons';

const Header: React.FC = () => {
  return (
    <header className="bg-[#003366] text-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Scale className="text-4xl mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Perbandingan UU BUMN</h1>
            <p className="text-sm opacity-80">UU No. 19/2003 vs UU No. 1/2025</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all px-3 py-1.5 rounded flex items-center text-sm">
            <FilterListIcon className="mr-1" />
            Filter
          </button>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all px-3 py-1.5 rounded flex items-center text-sm">
            <SearchIcon className="mr-1" />
            Cari
          </button>
        </div>
      </div>
    </header>
  );
};

// Icon components
const FilterListIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className || ''}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className || ''}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

export default Header;
