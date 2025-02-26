import React from 'react';
import { ExternalLink, FileText, Book, Info } from 'lucide-react';
import { Scale } from '@/lib/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#002E5B] to-[#003366] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Daily Digest promotional section */}
        <div className="bg-white bg-opacity-10 p-5 rounded-lg mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Scale className="text-2xl mr-3" />
              <div>
                <h3 className="font-bold text-xl">Daily Digest Platform</h3>
                <p className="text-blue-100 text-sm">Referensi terlengkap untuk analisis regulasi Indonesia</p>
              </div>
            </div>
            <a 
              href="https://lucaxyzz-digest.replit.app/" 
              className="bg-blue-100 text-[#003366] hover:bg-white transition-colors px-4 py-2 rounded-md font-medium flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Kunjungi Platform</span>
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      
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
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Info className="mr-2 w-4 h-4" />
              Tentang Kami
            </h4>
            <p className="text-sm text-blue-100 max-w-xs">
              Daily Digest menyediakan analisis hukum, regulasi, dan kebijakan publik terbaru
              untuk membantu pemahaman tentang perkembangan hukum di Indonesia.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white border-opacity-20 text-sm text-blue-200 text-center">
          <p>© 2025 Daily Digest. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
