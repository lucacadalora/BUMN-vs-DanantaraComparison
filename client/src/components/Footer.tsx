import React from 'react';
import { ExternalLink, FileText, Book } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <FileText className="mr-2 w-4 h-4" />
              Referensi Regulasi
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• UU No. 19 Tahun 2003 tentang Badan Usaha Milik Negara</li>
              <li>• UU No. 1 Tahun 2025 tentang Badan Usaha Milik Negara</li>
              <li>• Naskah Akademik RUU BUMN 2024</li>
            </ul>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Book className="mr-2 w-4 h-4" />
              Sumber Data
            </h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• Kementerian BUMN Republik Indonesia</li>
              <li>• Database Peraturan JDIH</li>
              <li id="christy-ref">• Christy et al. (2025). <i>A Legal Analysis for the New SOE Law Danantara: Legitimate Concern or Unfounded Paranoia?</i> Remedia Consults. <a href="https://remediaconsults.com/2025/02/24/a-legal-analysis-for-the-new-soe-law-danantara-legitimate-concern-or-unfounded-paranoia/" className="text-blue-200 hover:text-white underline" target="_blank" rel="noopener noreferrer">Link <ExternalLink className="inline w-3 h-3" /></a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© 2025 Daily Digest. All rights reserved</p>
          <a 
            href="https://lucaxyzz-digest.replit.app/" 
            className="flex items-center mt-2 md:mt-0 text-blue-100 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Our Platform</span>
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
