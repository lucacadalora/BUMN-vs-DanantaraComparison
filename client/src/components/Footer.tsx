import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Referensi Regulasi</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• UU No. 19 Tahun 2003 tentang Badan Usaha Milik Negara</li>
              <li>• UU No. 1 Tahun 2025 tentang Badan Usaha Milik Negara</li>
              <li>• Naskah Akademik RUU BUMN 2024</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Sumber Data</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• Kementerian BUMN Republik Indonesia</li>
              <li>• Database Peraturan JDIH</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© 2025 Daily Digest. All rights reserved</p>
          <a 
            href="https://lucaxyzz-digest.replit.app/" 
            className="flex items-center mt-2 md:mt-0 text-white hover:text-blue-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Daily Digest Platform</span>
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
